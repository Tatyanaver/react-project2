import './App.css'
import {Routes, Route, Link} from "react-router-dom"

import Homepage from "./Components/pages/Homepage";
import Aboutpage from "./Components/pages/Aboutpage";
import Notfoundpage from "./Components/pages/Notfoundpage";
import Userspage from "./Components/pages/Userspage";
import Postspage from "./Components/pages/Postspage";
import Layout from "./Components/Layout/Layout";
import SinglePostPage from "./Components/pages/SinglePostPage";



function App() {
    return (
    <div>

<Routes>
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path={'users'} element = {<Userspage/>}/>
        <Route path={'posts'} element = {<Postspage/>}>
            <Route path={':id'} element = {<SinglePostPage/>}/>
        </Route>

        <Route path={'about'} element = {<Aboutpage/>}/>
        <Route path={'*'} element = {<Notfoundpage/>}/>

    </Route>


</Routes>

    </div>
    );
}

export default App;
