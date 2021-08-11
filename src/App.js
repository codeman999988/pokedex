import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import DisplayPage from './Pages/DisplayPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './Components/Card/Card';
import PokeCard from './Components/PokeCard/PokeCard';


class App extends Component {

  state={}
  componentDidMount(){
    // axios
    // .get("https://pokeapi.co/api/v2/pokemon")
    // .then(response => {
    //   console.log(response.data)});
  };
  render() {
    let PokArray = new Array("Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew");

    let Pokemons = PokArray.map((pokemon, index) => {
        return (
            <Card 
                name={pokemon}
                id={index+1}
            />
    )});
    let PokeRoutes = PokArray.map((pokemon, index) => {
      return (
        <Route
        path={`/${index+1}`}
        render={(props) => (
      <PokeCard name={pokemon} id={index+1} />
    )}
  />
          // <Route path={`/${index+1}`}
          // component={PokeCard}
          // name={pokemon}
          // />
      )

  })
  return (
    <Router>
      <div className="App">

      <Switch>
        <DisplayPage exact path="/" />
{PokeRoutes}
      </Switch>
    </div>
    </Router>
  );
}}

export default App;
