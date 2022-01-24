import {useEffect, useState} from "react";

import './App.css'
import Form from "./Components/Form/Form";
import Users from "./Components/Users/Users";
import {userService} from "./services/user.service";


function App() {
    const [users, setUsers] = useState([])
    const [filterOfUsers, setFilterOfUsers] = useState([])

useEffect(()=>{
        userService.getAll().then(value => {
            setUsers([...value],
            setFilterOfUsers([...value]))
        })
    },[])

const filterUser = (data)=> {
let arrayFiltered = [...users]
    if (data.name) {
        arrayFiltered = arrayFiltered.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))}
    if (data.username) {
        arrayFiltered = arrayFiltered.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))}
    if (data.email) {
        arrayFiltered = arrayFiltered.filter(user=>user.email.toLowerCase().includes(data.email.toLowerCase()))}

setFilterOfUsers(arrayFiltered)
}

    return (
    <div>
        <Form filterUser={filterUser}/>
        <Users users={filterOfUsers}/>

    </div>
    );
}

export default App;
