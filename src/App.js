import {Routes, Route} from "react-router-dom"
import {Navigate} from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import {
    Albums,
    Photos,
    PostCommentsPage,
    PostDetailsPage,
    Postspage,
    UserDetailsPage,
    UserPostsPage,
    Userspage
} from "./Components/pages";

function App() {
    return (
      <div>
<Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<Navigate to={'users'}/>}/>

            <Route path={'users'} element = {<Userspage/>}>
                <Route path={':id'} element={<UserDetailsPage/>}>
                <Route path={'posts'} element={<UserPostsPage/>}/>
            </Route>

            <Route path={':id/albums'} element={<Albums/>}>
                <Route path={':albumId/photos'} element={<Photos/>}/>
                </Route>
            </Route>

            <Route path={'posts'} element = {<Postspage/>}>
                <Route path={':id'} element={<PostDetailsPage/>}>
                <Route path={'comments'} element={<PostCommentsPage/>}/>
            </Route>
        </Route>
    </Route>
</Routes>
    </div>
    );
}

export default App;
