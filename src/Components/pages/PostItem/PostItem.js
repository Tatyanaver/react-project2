import React from 'react';

import './PostItem.css';

const PostItem = ({post}) => {
    const{id,userId,title,body} = post

    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>User id: {userId}</li>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
            </ul>
        </div>
    );
};

export default PostItem;