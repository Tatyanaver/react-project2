import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import classes from "./Header.module.css";


const Header = () => {
    return (
        <div>
            <div className={classes.main}>

                <NavLink to="movies">Movies</NavLink>
                <NavLink to="genres">Genres</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default Header;