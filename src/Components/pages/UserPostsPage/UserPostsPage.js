import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../../services/user.service";
import PostItem from "../PostItem/PostItem";

const UserPostsPage = () => {
    const {id}=useParams();
    const[postsOfUser, setPostsOfUser]= useState([])
    useEffect(()=> {
        userService.getPostsOfUserById(id).then(value => setPostsOfUser([...value]))},
        [id])
    return (
        <div>
            <div>
                {postsOfUser.map(post=> <PostItem key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export {UserPostsPage};