import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize = {6} country = {'in'} category = {"business"}></News>
      </div>
    )
  }
}