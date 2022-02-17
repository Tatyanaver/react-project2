import './App.css'
import {Routes,Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import MoviesList from "./Components/MoviesList/MoviesList";
import Genres from "./Components/Genres/Genres";
import MoviesListCard from "./Components/MoviesListCard/MoviesListCard";

function App() {

return (
      <div>

<Routes>
              <Route path={'/'} element = {<Header/>}>

              <Route path={'movies'} element = {<MoviesList/>}>
              <Route path={':id'} element={<MoviesListCard/>}/>
              </Route>

              <Route path={'genres'} element = {<Genres/>}/>
              </Route>

</Routes>

    </div>
    );
}

export default App;
