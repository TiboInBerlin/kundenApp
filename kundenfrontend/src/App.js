import React, { Component } from 'react';
import KundenListe from './KundenListe';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <NavBar />
      <SearchBar />
      <KundenListe />
      </div>
    );
  }
}

export default App;
