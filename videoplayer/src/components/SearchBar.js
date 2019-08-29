import React from 'react';
import '../style/SearchBar.css';
var randomWords = require('random-words');

class SearchBar extends React.Component {
  state = {term: ' '  };

  onInputChange = (event) => {
    this.setState({term: event.target.value})

  };

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  onRandomSubmit = (event) => {
    event.preventDefault();
    this.props.onRandomSubmit(this.state.randomWords());
    console.log(randomWords());
  }

  render(){
    return (
      <div className = "search-bar ui segment">
        <form onSubmit={this.onSearchSubmit} className = "ui form">
          <div className = "field">
            <button className ="ui button">Video Search</button>
            <input
              type = "text"
              value = {this.state.term}
              onChange = {this.onInputChange}
              />
          </div>
        </form>
        <button
          className = "ui button"
          value = {this.state.term}
          onClick = {this.onRandomSubmit}
          >Random
        </button>
      </div>
    );
  }
}

export default SearchBar;
