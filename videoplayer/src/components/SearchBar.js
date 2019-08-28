import React from 'react';
import '../style/SearchBar.css';

class SearchBar extends React.Component {
  state = {term: ' '  };

  onInputChange = (event) => {
    this.setState({term: event.target.value})

  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);

  }

  render(){
    return (
      <div className = "search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className = "ui form">
          <div className = "field">
            <label> Video Search </label>
            <input
              type = "text"
              value = {this.state.term}
              onChange = {this.onInputChange}
              />
          </div>
        </form>
        <button className ="ui button">Random</button>
      </div>
    );
  }
}

export default SearchBar;
