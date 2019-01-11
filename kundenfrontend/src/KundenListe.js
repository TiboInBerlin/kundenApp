import React, { Component } from 'react';
import Kunde from './Kunde';
import KundeForm from './KundeForm';
import './KundenListe.css';
const ApiUrl = '/kunden/'; //Wenn Sie das URL von API ändern möchten, brauchen Sie nur es hier zu ändern!

class KundenListe extends Component {

  constructor(props){
    super(props);
    this.state = {
      kunden: []
    }
    this.addKunde = this.addKunde.bind(this);
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


  //Diese funktion addKunde wird benutzt mit dem button "Kunde erstellen" in KundeForm.js
  addKunde(nachname, vorname, geschlecht, strasse, postleitzahl, ort){
    fetch(ApiUrl, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        nachname: nachname,
        vorname: vorname,
        geschlecht: geschlecht,
        strasse: strasse,
        postleitzahl: postleitzahl,
        ort: ort
        })
    })
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
    .then(neueKunde =>{
      this.setState({kunden: [...this.state.kunden, neueKunde]})
    })
  }

//Verbindung mit DELETE Route
  deleteKunde(id){
    const deleteUrl = ApiUrl + id;
    fetch(deleteUrl, {
      method: 'delete',
    })
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
    .then(() =>{
      const kunden = this.state.kunden.filter(kunde => kunde._id !== id) //wir wollen alle kunde ausser die Kunde zu löschen
      this.setState({kunden: kunden})
    })
  }

toggleKunde(kunde){
  const updateUrl = ApiUrl + kunde._id;
  fetch(updateUrl, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({showField: !kunde.showField})
  })
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
  .then(updatedKunde =>{
    const kunden = this.state.kunden.map(k =>
      (k._id === updatedKunde._id)
      ? {...k, showField: !k.showField}
      : k
      )
    this.setState({kunden: kunden})
  })
}

  render(){
    const kunden = this.state.kunden.map((k) => (
        <Kunde
          key={k._id}
          {...k}
          onDelete={this.deleteKunde.bind(this,k._id)}
          onToggle={this.toggleKunde.bind(this,k)}
        />
    ));

    return (
      <div className="kunden-mit-form">
        <KundeForm
        addKunde={this.addKunde}
        />
        <div className="kunden">
        {kunden}
        </div>
      </div>
    )
  }
};

export default KundenListe;
