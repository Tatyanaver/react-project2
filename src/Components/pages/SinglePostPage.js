import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post,setPost] = useState(null);
    const {state} = useLocation()
    const navigate= useNavigate()

    useEffect(()=> {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    },[])
    const goHome = ()=> {
        navigate('/')
    }
    const goBack = () => {
      navigate(-1)
    }


    return (
        <div>
            <button onClick={goHome}>Home</button>
            <button onClick={goBack}>Back!</button>
            {post &&  (
                <div>
                    <div>id - {post.id}</div>
                    <div>userId - {post.userId}</div>
                    <div>title - {post.title}</div>
                    <div>body - {post.body}</div>
                </div>
            )}
            </div>
    );
};

export default SinglePostPage;