import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../../services/post.service";
import classes from "./PostDetailsPage.module.css";

const PostDetailsPage = () => {
    const {id}=useParams();
    const {state}= useLocation();
    const [post,setPost] = useState(null)
        useEffect(()=> {
        if (state)
        {setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    },[id])
    return (
        <div>
            {post &&
            (<div>
            <div> id: {post.id},</div>
            <div>user id:{post.userId}</div>
            <div>Title: {post.title} </div>
            <div>Body: {post.body}</div>
            </div>)}

            <Link to={`comments`} state={post}>
                <button className={classes.btn_comments}>Comments</button>
            </Link>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};