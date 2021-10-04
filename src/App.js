import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from './components/login/login';
import SignUp from './components/SignUp/SignUp';
import Movie from './components/Movie/Movie';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-body'>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route path='/movies/:id' component={Movie} />
          <Route path='/movies/popular' component={'...'} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
