import React from 'react';

const Comment = ({comment}) => {
    const {id,postId,name,body,email}= comment
    return (
        <div>
            <div>Post id: {postId} </div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Body: {body} </div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export default Comment;