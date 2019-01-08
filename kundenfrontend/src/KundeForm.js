import React, { Component } from 'react';
import './KundeForm.css';


class KundeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
          inputNachname: 'GraceHopper',
          inputVorname: 'Riverdale',
          inputGeschlecht: 'Frau',
          inputStrasse: 'Paradeisstr. 1024',
          inputPostleitzahl: '12437',
          inputOrt: 'Berlin'
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
      <div>
        <input
          type="text"
          value={this.state.inputNachname}
          onChange={this.handleChangeNachname}
        />
        <input
          type="text"
          value={this.state.inputVorname}
          onChange={this.handleChangeVorname}
        />
        <input
          type="text"
          value={this.state.inputGeschlecht}
          onChange={this.handleChangeGeschlecht}
        />
        <input
          type="text"
          value={this.state.inputStrasse}
          onChange={this.handleChangeStrasse}
        />
        <input
          type="number"
          value={this.state.inputPostleitzahl}
          onChange={this.handleChangePostleitzahl}
        />
        <input
          type="text"
          value={this.state.inputOrt}
          onChange={this.handleChangeOrt}
        />
        <button
          onClick={this.handleSubmit}
        >Kunde Erstellen</button>
      </div>
    )
  }
}

export default KundeForm;
