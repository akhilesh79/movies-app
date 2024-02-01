import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import AddMovies from './Pages/AddMovies';
import MovieDetails from './Pages/MovieDetails';
import UpdateMovie from './Pages/UpdateMovie';


const Router = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/add-Movies">
        <AddMovies />
      </Route>
      <Route exact path="/update/:movieId">
        <UpdateMovie />
      </Route>
      <Route exact path="/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  )
}

export default Router;