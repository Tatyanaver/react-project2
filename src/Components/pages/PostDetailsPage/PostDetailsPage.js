import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../../services/post.service";

const PostDetailsPage = () => {
    const {id}=useParams();
    const [post,setPost] = useState(null)
    const {state}=useLocation();

    useEffect(()=> {
        if (state){setPost(post)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    },[id])
    return (
        <div>
            {post && (<div>
                {post.id} {post.title} {post.body} {post.userId}
            </div>)}

        </div>
    );
};

export {PostDetailsPage};