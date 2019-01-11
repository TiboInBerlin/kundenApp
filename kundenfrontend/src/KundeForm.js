import React, { Component } from 'react';
import './KundeForm.css';



class KundeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
          inputNachname: '',
          inputVorname: '',
          inputGeschlecht: '',
          inputStrasse: '',
          inputPostleitzahl: '',
          inputOrt: ''
        };
    this.handleChangeNachname = this.handleChangeNachname.bind(this);
    this.handleChangeVorname = this.handleChangeVorname.bind(this);
    this.handleChangeGeschlecht = this.handleChangeGeschlecht.bind(this);
    this.handleChangeStrasse = this.handleChangeStrasse.bind(this);
    this.handleChangePostleitzahl = this.handleChangePostleitzahl.bind(this);
    this.handleChangeOrt = this.handleChangeOrt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Diese Funktionen handleChange... erlauben uns die Kundendaten in input felder zu schreiben.
  handleChangeNachname(n){
    this.setState({
      inputNachname: n.target.value
  })
  }

  handleChangeVorname(v){
    this.setState({
      inputVorname: v.target.value
    })
  }

  handleChangeGeschlecht(g){
    this.setState({
      inputGeschlecht: g.target.value
    })
  }

  handleChangeStrasse(s){
    this.setState({
      inputStrasse: s.target.value
    })
  }

  handleChangePostleitzahl(p){
    this.setState({
      inputPostleitzahl: p.target.value
    })
  }

  handleChangeOrt(o){
    this.setState({
      inputOrt: o.target.value
    })
  }

  //wir brauchen handleSubmit() um den button zu aktivieren
  handleSubmit(){
    this.props.addKunde(
      this.state.inputNachname,
      this.state.inputVorname,
      this.state.inputGeschlecht,
      this.state.inputStrasse,
      this.state.inputPostleitzahl,
      this.state.inputOrt
    )
  }

  render() {
    return(
      <div className="kunde-form" >
        <div className="input-nachname">
          <input
          type="text"
          value={this.state.inputNachname}
          onChange={this.handleChangeNachname}
          placeholder="Nachname"
        />
        </div>
        <div className="input-vorname">
          <input
          type="text"
          value={this.state.inputVorname}
          onChange={this.handleChangeVorname}
          placeholder="Vorname"
        />
        </div>
        <div className="input-geschlecht">
        <input
          type="text"
          value={this.state.inputGeschlecht}
          onChange={this.handleChangeGeschlecht}
          placeholder="Geschlecht"
        />
        </div>
        <div className="input-strasse">
        <input
          type="text"
          value={this.state.inputStrasse}
          onChange={this.handleChangeStrasse}
          placeholder="Strasse"
        />
        </div>
        <div className="input-postleitzahl">
        <input
          type="number"
          value={this.state.inputPostleitzahl}
          onChange={this.handleChangePostleitzahl}
          placeholder="Postleitzahl"
        />
        </div>
        <div className="input-ort">
        <input
          type="text"
          value={this.state.inputOrt}
          onChange={this.handleChangeOrt}
          placeholder="Ort"
        />
        </div>
        <div className="form-button">
          <button
          onClick={this.handleSubmit}
          >Kunde Erstellen</button>
        </div>
      </div>
    )
  }
}

export default KundeForm;
