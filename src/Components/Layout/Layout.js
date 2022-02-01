import React from 'react';
import {NavLink,Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <NavLink to="users">Users</NavLink>
            <NavLink to="posts">Posts</NavLink>
            <Outlet/>
        </div>
    );
};

export default Layout;