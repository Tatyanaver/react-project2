import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../../services/user.service";
import Users from "../Users/Users";
import classes from './Userspage.module.css'

const Userspage = () => {
    const [users,setUsers] = useState([])
    useEffect(()=> {
        userService.getAll().then(value => setUsers([...value]))},[])

    return (
        <div className={classes.users}>
            <div>
                {users.map (user => <Users key={user.id} user = {user}/>)}
            </div>
            <div className={classes.users_outlet}><Outlet/></div>
        </div>
    );
};

export {Userspage};