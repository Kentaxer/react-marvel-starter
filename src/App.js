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

  renderCharacters(){
    getCharacters().end(
      (error, response) => {
        if(!error) {
          this.setState({characters: response.body.data.results}) 
        }
      }
    );
  }

  componentDidMount(){
    this.renderCharacters()
  }

  handleSearch = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Navigation handleSearch={this.handleSearch} />
        <CharacterList characters={this.state.characters} />
        {JSON.stringify(this.state.characters)}
      </div>
    );
  }
}

export default App;
