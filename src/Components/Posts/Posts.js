import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({post}) => {
    const {title,id} = post
    return (
        <div>
            <Link to={id+''} state={post}>title - {title}</Link>

        </div>
    );
};

export default Posts;