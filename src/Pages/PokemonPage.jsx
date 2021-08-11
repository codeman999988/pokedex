import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonPage extends Component {
    state={
        
    }

    componentDidMount(){
        // axios
        // .get
        console.log(this.props.match.params);
    }
    render() {
        return (
            <div>
                <h1> test</h1>
            </div>
        )
    }
}
