import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {Link} from "react-router-dom";

import {userService} from "../../../services/user.service";
import classes from './UserDetailsPage.module.css'

const UserDetailsPage = () => {
    const {id}=useParams();
    const {state}= useLocation();

    const [user,setUser] = useState(null)
    useEffect(()=> {
        if (state)
        {setUser(state)
            return}
        userService.getById(id).then(value => setUser({...value}))
    },[id])
    return (
        <div>
            {user &&
            (<div>
                <div>id: {user.id} </div>
                <div>Name: {user.name}; </div>
                <div>Username: {user.username}; </div>
                <div>email:{user.email} </div>
            </div>)
            }
            <Link to={'posts'} state={user}>
            <button className={classes.posts_btn}>Posts</button>
            </Link>
            <hr/>
            <div> <Outlet/> </div>
        </div>
    );
};

export {UserDetailsPage};