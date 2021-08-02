import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react'

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
    </div>
  );
}}

export default App;
