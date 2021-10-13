import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from './components/login/login';
import SignUp from './components/SignUp/SignUp';
import Movie from './components/Movie/Movie';
import MovieList from './components/MovieList/MovieList';
import TVShowList from './components/TVShowList/TVShowList';
import PeopleList from './components/PeopleList/PeopleList';
import TVShow from "./components/TVShow/TVShow";
import PersonDetail from "./components/PersonDetail/PersonDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import EditProfile from "./components/EditProfile/EditProfile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-body'>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path='/users/:username/edit-profile' component={EditProfile} />
          <PrivateRoute exact path='/users/:username' component={UserProfile} />
          <Route exact path='/movies/popular' component={MovieList} />
          <Route exact path='/movies/top-rated' component={MovieList} />
          <Route exact path='/movies/upcoming' component={MovieList} />
          <Route exact path='/tv-shows/popular' component={TVShowList} />
          <Route exact path='/tv-shows/top-rated' component={TVShowList} />
          <Route exact path='/tv-shows/on-the-air' component={TVShowList} />
          <Route exact path='/people/popular' component={PeopleList} />
          <Route path='/movies/:id' component={Movie} />
          <Route path='/tv-shows/:id' component={TVShow} />
          <Route path='/people/:id' component={PersonDetail} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
