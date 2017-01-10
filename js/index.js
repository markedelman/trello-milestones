import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import List from './components/list';
function onAddInputChanged() {
    console.log("Input Changed");
}
function onAddSubmit(event) {
    console.log("Submitted")
    event.preventDefault();
}
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        //<Board title="Some title" lists={['List 1', 'List 2']}/>,
        <List title="Some title" cards={['Card 1', 'Card 2']} onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit}/>,
        document.getElementById('app')
    );
});