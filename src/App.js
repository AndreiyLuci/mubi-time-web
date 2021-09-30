import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from './components/login/login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-body'>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
