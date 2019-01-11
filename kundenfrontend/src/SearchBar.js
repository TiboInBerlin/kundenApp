import React, { Component } from 'react';
import './SearchBar.css';




class SearchBar extends Component {
  render() {


    return(

      <div className="search-nav">

      <input type="text" placeholder="Kunde suchen">
      </input>
      </div>

    );

}
}



export default SearchBar;
