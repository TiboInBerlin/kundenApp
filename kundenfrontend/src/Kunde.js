import React from 'react';
import './Kunde.css';

const Kunde = ({
  nachname,
  vorname,
  geschlecht,
  strasse,
  postleitzahl,
  ort
  }) => (
    <li>
    {nachname}
    {vorname}
    {geschlecht}
    {strasse}
    {postleitzahl}
    {ort}
    </li>
)

export default Kunde;
