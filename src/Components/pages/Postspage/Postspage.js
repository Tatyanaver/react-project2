import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/post.service";
import {Outlet} from "react-router-dom";
import {Posts} from "../Posts/Posts";

const Postspage = () => {

    const [posts,setPosts] = useState([])
    useEffect(()=> {
        postService.getAll().then(value => setPosts([...value]))
    },[])

    return (
    <div>
        <h3>Posts</h3>
        {posts.map (post => <Posts key={post.id} post = {post}/>)}
        <div>
            <Outlet/>
        </div>
    </div>)

};

export {Postspage};