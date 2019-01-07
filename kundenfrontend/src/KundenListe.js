import React, { Component } from 'react';
import Kunde from './Kunde'
import './KundenListe.css';
const ApiUrl = '/kunden'; //Wenn Sie das URL von API ändern möchten, brauchen Sie nur es hier zu ändern!

class KundenListe extends Component {

  constructor(props){
    super(props);
    this.state = {
      kunden: []
    }
  }

  componentWillMount(){
    this.loadKunden();
    }

  loadKunden(){
    //um Daten von dem API abzurufen, musste ich folgendes in Json hinzufügen: "proxy": "http://localhost:8080"
    fetch(ApiUrl)
    //wir müssen uns zuert um fehlerbehebung kümmern:
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status <500){
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Bitte versuchen Sie es später an, der Server antwortet nicht'};
          throw err;
        }
      }
      return resp.json();
    })
    //Wenn es kein Fehler gibt, dann können wir unserem State aktualisieren
    .then(kunden => this.setState({kunden}));
    }

  render(){
    const kunden = this.state.kunden.map((k) => (
        <Kunde
          key={k._id}
          {...k}
        />
    ));

    return (
      <div>
      <h1> Kunden Liste </h1>
      <ul>
      {kunden}
      </ul>
      </div>
    )
  }
};

export default KundenListe;
