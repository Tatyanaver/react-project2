import React from 'react';
import {Link,NavLink,Outlet} from "react-router-dom";
import classes from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <div className={classes.main}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div className={classes.outlet}>
                <Outlet/>
            </div>
            <div className={classes.footer}>Footer</div>
        </div>
    );
};

export default Layout;