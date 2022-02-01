import './App.css'
import {Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout/Layout";
import {
    PostCommentsPage,
    PostDetailsPage,
    Postspage,
    UserDetailsPage,
    UserPostsPage,
    Userspage
} from "./Components/pages";
import Albums from "./Components/pages/Albums/Albums";
import Photos from "./Components/pages/Photos/Photos";

function App() {
    return (
      <div>

    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={'users'} element = {<Userspage/>}>
                <Route path={':id'} element={<UserDetailsPage/>}/>
                <Route path={'posts'} element={<UserPostsPage/>}/>
            </Route>
            <Route path={':id/albums'} element={<Albums/>}>
                <Route path={':albumId/photos'} element={<Photos/>}/>
            </Route>

        <Route path={'posts'} element = {<Postspage/>}>
            <Route path={':id'} element={<PostDetailsPage/>}/>
            <Route path={'comments'} element={<PostCommentsPage/>}/>
        </Route>

    </Route>
</Routes>
    </div>
    );
}

export default App;
