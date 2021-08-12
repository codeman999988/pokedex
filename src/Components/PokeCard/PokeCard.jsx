import React, { Component } from 'react';
import axios from 'axios';
import "./PokeCard.scss"

export default class PokeCard extends Component {
    state={

    }

    componentDidMount(){
        console.log(this.props.id, "id");
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
        .then(response => this.setState({pokemon: response.data}))
    }
    render() {
        console.log(this.props);
        const types = this.state.pokemon?.types.map(type => {
            return (<h3>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</h3>)
        })
        return (
            <div className="PokeCard__container">
                <a href={`/${(this.props.id > 1 && this.props.id <= 151) ? this.props.id - 1 : 151}`}><h1>❮</h1></a>
                <div className="stats">
                    <h1 className="PokeCard__name">{this.props.name}</h1>
                    <h1>ID: {this.state.pokemon?.id}</h1>
                    <h1>BASE STATS</h1>
                    <div className="PokeCard__statblock">
                    <h3 className="PokeCard__stat">HP: {this.state.pokemon?.stats[0].base_stat}</h3>
                    <h3 className="PokeCard__stat">Speed: {this.state.pokemon?.stats[5].base_stat}</h3>

                    </div>
                    <div className="PokeCard__statblock">
                    <h3 className="PokeCard__stat">Attack: {this.state.pokemon?.stats[1].base_stat}</h3>
                    <h3 className="PokeCard__stat">Def: {this.state.pokemon?.stats[2].base_stat}</h3>

                    </div>
                    <h3 className="PokeCard__statblock">Special Attact: {this.state.pokemon?.stats[3].base_stat}</h3>
                    <h3 className="PokeCard__statblock">Special Defense: {this.state.pokemon?.stats[4].base_stat}</h3>

                    <h1>TYPE</h1>
                    <div className="PokeCard__statblock column">
                        {types}
                        </div>
                </div>
                <div className="stats">
                <img src={`${this.state.pokemon?.sprites.other["official-artwork"].front_default}`} />
                <a href="/" className="back">
                    <h2>← Back</h2></a>
                </div>
                <a href={`/${(this.props.id < 151 && this.props.id >= 1) ? this.props.id + 1 : 1}`}><h1>❯</h1></a>
            </div>
        )
    }
}

