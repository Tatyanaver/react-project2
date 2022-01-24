import {useState} from "react";

import './App.css'
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import UserDetails from "./Components/UserDetails/UserDetails";
import {postService} from "./services/post.service";


function App() {
const [user,setUser] = useState(null)
const [posts,setPosts] = useState([])


const getUser = (user) => {
        setUser(user)}

const getById = (id) =>{
        postService.getByUserId(id).then(value => setPosts([...value]))
}

    return (
    <div>
        <div className={'main'}>
            <Users getUser={getUser}/>
            {user && <UserDetails user={user} getById={getById}/>}
        </div>
            {!!posts.length && <Posts posts={posts}/>}
    </div>
    );
}

export default App;
