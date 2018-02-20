import React, { Component } from 'react';
import { Navbar, FormGroup, Button } from 'react-bootstrap';

export class SearchCharacters extends Component {

  render() {
    return (<Navbar.Form pullRight>
      <form onSubmit={this.props.handleSearch}>
        <FormGroup>
          <input name="search" type="text" placeholder="Search" className="form-control" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </form>
    </Navbar.Form>
    )
  }
}

export default SearchCharacters;
