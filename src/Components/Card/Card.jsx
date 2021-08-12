import React, { Component } from 'react';
import "./Card.scss";


export default class Card extends Component {
    render() {
        return (
            <a href={`/${this.props.id}`} className="card">
            <div >
                <div className="card__title">{this.props.name}</div>
                <div className="card__image">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} />
                    <div className="card__stats"></div>
                </div>
            </div>
            </a>
        )
    }
}
