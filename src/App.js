import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import DisplayPage from './Pages/DisplayPage.jsx';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

class App extends Component {

  state={}
  componentDidMount(){
    axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
      console.log(response.data)});
  };
  render() {
  return (
    <div className="App">
      <DisplayPage />
    </div>
  );
}}

export default App;
