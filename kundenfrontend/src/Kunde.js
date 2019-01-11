import React, { Component } from 'react';
import './Kunde.css';


class Kunde extends Component {
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

  handleSubmit(){
    this.props.onToggle(
      this.state.inputNachname,
      this.state.inputVorname,
      this.state.inputGeschlecht,
      this.state.inputStrasse,
      this.state.inputPostleitzahl,
      this.state.inputOrt
    )
  }


render() {
  const {
    nachname,
    vorname,
    geschlecht,
    strasse,
    postleitzahl,
    ort,
    onDelete,
    onToggle,
    showField
  } = this.props;

return (
    showField ?
       <div className="kunde-karte-edit">
       <input
         type="text"
         value={this.state.inputNachname}
         onChange={this.handleChangeNachname}
         placeholder={nachname}
       />
       <input
         type="text"
         value={this.state.inputVorname}
         onChange={this.handleChangeVorname}
         placeholder="Vorname"
       />
       <input
         type="text"
         value={this.state.inputGeschlecht}
         onChange={this.handleChangeGeschlecht}
         placeholder="Geschlecht"
       />
       <input
         type="text"
         value={this.state.inputStrasse}
         onChange={this.handleChangeStrasse}
         placeholder="Strasse"
       />
       <input
         type="number"
         value={this.state.inputPostleitzahl}
         onChange={this.handleChangePostleitzahl}
         placeholder="Postleitzahl"
       />
       <input
         type="text"
         value={this.state.inputOrt}
         onChange={this.handleChangeOrt}
         placeholder="Ort"
       />
       <button
         onClick={this.handleSubmit}
       >Kundedaten speichern</button>
       <button
         onClick={this.onToggle}
       >Kunde Ändern</button>
     </div>
       :
       <div className="kunde-karte">
       <div className="nachname">
       Nachname: {nachname}
       </div>
       <div className="nachname">
       Vorname: {vorname}
       </div>
       <div className="vorname">
       Geschlecht: {geschlecht}
       </div>
       <div className="strasse">
       Strasse: {strasse}
       </div>
       <div className="plz">
       Postleitzahl: {postleitzahl}
       </div>
       <div className="ort">
       Ort: {ort}
       </div>
       <div className="buttons">
       <button className="edit-button" onClick={onToggle}>Kunde Bearbeiten</button>
       <button className="delete-button" onClick={onDelete}> Kunde löschen </button>
       </div>
      </div>
)
}
}

export default Kunde;
