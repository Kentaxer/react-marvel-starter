import React, { Component } from 'react';
import CharacterCard from '../charactercard/CharacterCard';
import _ from 'lodash';
import { Grid, Row } from 'react-bootstrap';

export class CharacterList extends Component {

  render() {

    let characters = "Loading WHAT...";

    if(!_.isEmpty(this.props.characters)){

      if(this.props.characters.length){
        //use the CharacterCard component to renmder the individual characters
        characters = this.props.characters.map((item, index) => {
          //console.log(item);
          return (
            <CharacterCard character={item}/>
          )
        });
      }else{
        characters = "No characters found!"
      }
      
    }

    return (
      <Grid>
        <Row>
          {characters}
        </Row>
      </Grid>
    );
  }
}

export default CharacterList;
