import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Posts = ({post}) => {
    const {id,title} = post

    return (
        <div>
           <Link to={id.toString()} state={post}>
               {id} {title}
           </Link>
            {/*<button>Details</button>*/}
            {/*<Outlet/>*/}
        </div>
    );
};

export {Posts};