import React from 'react';
import {NavLink,Outlet} from "react-router-dom";

import classes from "./Layout.module.css";

const Layout = () => {
    return (
        <div>
            <div className={classes.main}>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;