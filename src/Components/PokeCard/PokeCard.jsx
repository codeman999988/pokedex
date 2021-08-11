import React, { Component } from 'react';
import axios from 'axios';

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
        console.log(this.state.pokemon, "test state");
        const types = this.state.pokemon?.types.map(type => {
            return (<h3>{type.type.name}</h3>)
        })
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>ID: {this.state.pokemon?.id}</h1>
                <h1>BASE STATS</h1>
                <h3>HP: {this.state.pokemon?.stats[0].base_stat}</h3>
                <h3>Attack: {this.state.pokemon?.stats[1].base_stat}</h3>
                <h3>Defense: {this.state.pokemon?.stats[2].base_stat}</h3>
                <h3>Special Attact: {this.state.pokemon?.stats[3].base_stat}</h3>
                <h3>Special Defense: {this.state.pokemon?.stats[4].base_stat}</h3>
                <h3>Speed: {this.state.pokemon?.stats[5].base_stat}</h3>
                <h1>TYPE</h1>
                {types}

            </div>
        )
    }
}
