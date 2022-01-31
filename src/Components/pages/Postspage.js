import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Posts from "../Posts/Posts";
import {Outlet} from "react-router-dom";

const Postspage = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        postService.getAll().then(value => setPosts([...value]))
    },[])

    return (
    <div>
        <h1>Posts</h1>
        {posts.map (post => <Posts key={post.id} post = {post}/>)}
        <div>
            <Outlet/>
        </div>
    </div>)

};

export default Postspage;