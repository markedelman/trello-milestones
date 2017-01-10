import React from 'react';

export default class FlashCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            cards: []
        };
        this.onCardClick = this
            .onCardClick
            .bind(this);
    }


