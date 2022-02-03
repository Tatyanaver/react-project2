import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../../services/post.service";
import {Posts} from "../Posts/Posts";
import classes from "./Postspage.module.css";

const Postspage = () => {

    const [posts,setPosts] = useState([])
    useEffect(()=> {
        postService.getAll().then(value => setPosts([...value]))
    },[])

    return (
    <div className={classes.post}>
        <div>
            {posts.map (post => <Posts key={post.id} post = {post}/>)}
        </div>
        <div className={classes.post_detail}>
            <Outlet/>
        </div>
    </div>)
};

export {Postspage};