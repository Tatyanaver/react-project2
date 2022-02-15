import React from 'react';
import {NavLink} from "react-router-dom";
import Genres from "../Genres/Genres";
import MoviesList from "../MoviesList/MoviesList";


const Header = () => {
    return (
        <div>
            <div>
                <Genres/>
                <MoviesList/>
                {/*<NavLink to="movies">Movies</NavLink>*/}
                {/*<NavLink to="genres">Genres</NavLink>*/}
            </div>

        </div>
    );
};

export default Header;