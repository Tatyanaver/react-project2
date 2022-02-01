import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {userService} from "../../../services/user.service";
import Users from "../Users/Users";

const Userspage = () => {

    const [users,setUsers] = useState([])
    useEffect(()=> {
        userService.getAll().then(value => setUsers([...value]))},[])

    return (
        <div>
            <h3>Users</h3>
            {users.map (user => <Users key={user.id} user = {user}/>)}
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export {Userspage};