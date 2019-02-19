import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Poems from "./components/Poems";
import Login from "./components/Login"
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Home /> 
          <Poems/>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;