import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/characterlist/CharacterList'
import Navigation from './components/navigation/Navigation'
import { getCharacters } from "./services/marvel";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {characters: {}};
  }

  renderCharacters(name = ""){
    getCharacters(name).end(
      (error, response) => {
        if(!error) {
          this.setState({characters: response.body.data.results}) 
        }
      }
    );
  }

  componentDidMount(){
    console.log("Hello MOUNT");
    this.renderCharacters()
  }

  handleSearch = (e) => {
    e.preventDefault();
    let searchText = e.target.search.value;
    this.renderCharacters(searchText);
  }

  render() {
    return (
      <div>
        <Navigation handleSearch={this.handleSearch} />
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
