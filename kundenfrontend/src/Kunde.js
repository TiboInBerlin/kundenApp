import React from 'react';
import './Kunde.css';

const Kunde = ({
  nachname,
  vorname,
  geschlecht,
  strasse,
  postleitzahl,
  ort,
  onDelete
  }) => (
    <li>
    {nachname}
    {vorname}
    {geschlecht}
    {strasse}
    {postleitzahl}
    {ort}
    <button onClick={onDelete}> Kunde löschen </button>
    </li>
)

export default Kunde;
