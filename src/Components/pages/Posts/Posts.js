import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({post}) => {
    const {id,title} = post
    return (
        <div>
            {id}. {title}
                <Link to={id.toString()} state={post}>
                   <button>Details</button>
                </Link>
        </div>
    );
};

export {Posts};