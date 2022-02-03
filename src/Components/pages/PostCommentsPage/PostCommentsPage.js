import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../../services/post.service";
import Comment from "../Comment/Comment";

const PostCommentsPage = () => {
    const {id}=useParams();
    const [comments,setComments] = useState([])

    useEffect(()=> {
        postService.getCommentById(id).then(value => setComments([...value]))
    },[id])

    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};