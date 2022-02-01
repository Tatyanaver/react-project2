import React from 'react';
import classes from "./users.module.css";

const Users = ({user}) => {
    return (
        <div>
            {user.id} - {user.name}
            <button className={classes.btn}>Details about user</button>
            <button className={classes.btn}>Albums</button>
        </div>
    );
};

export default Users;