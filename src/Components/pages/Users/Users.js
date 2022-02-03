import React from 'react';
import {Link} from "react-router-dom";

import classes from "./users.module.css";

const Users = ({user}) => {
    const {id,name}=user
    return (
        <div>
            {id} - {name}
        <Link to={id.toString()} state={user}>
        <button className={classes.btn}>Details about user</button>
        </Link>
            <Link to={`${id.toString()}/albums`} state={user}>
        <button className={classes.btn}>Albums</button></Link>
        </div>
    );
};

export default Users;