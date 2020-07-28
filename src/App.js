import React, { Component } from 'react';
import {SearchBox} from './components/search-box/search-box-component'
import {CardList} from './components/card-list/card-list-component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response => response.json()))
      .then(monsters => this.setState({ monsters: monsters }))
  }
  render() {
    const {monsters, searchText}= this.state
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <div className="App">
      <h1>Monsters Redolox</h1>
      <SearchBox
      placeholder="search monsters"
      handleChange={e=> this.setState({searchText: e.target.value})} />
      <CardList monsters={filterMonsters}/>
      </div>
    );

  }

}

export default App;
