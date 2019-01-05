​							**Road Map**



Ziel: Ein App erstellen um Kundendaten zu verwalten.



1. Backend: GET, POST, PUT und DELETE Routes erstellen

   1.1 npm, express und mongoDB installieren

   1.2 API erstellen:

   | Feld       | Eigenschaft (type) |
   | ---------- | ------------------ |
   | nachname   | string             |
   | vorname    | string             |
   | geschlecht | string             |
   | strasse    | string             |
   | PLZ        | nummer             |
   | Ort        | string             |

   1.3 Single Seite erstellen mit 3 Kunden

   1.4 Route erstellen

   - GET/kunden -  Darstellung von allen Kunden
   - GET/kunden/:id - Kundendaten von einer spezifischen Kunde abrufen 
   - POST/kunden - Kunde anlegen
   - DELETE/kunden/:id - Kunde löschen
   - PUT/kunden/:id - Kundendaten bearbeiten
   - GET/kunden?nachname=Schmidt - Kunde nach name suchen

2. Frontend mir React.js erstellen

   2.1 create-react-app

   2.2 Components Hierarchy:

   - KundenApp
     - KundeForm
     - KundeSuche
       - KundeItem 

   2.3 mit Server verbinden

3. Prüfen

   3.1 API: https://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/

   3.2 Routes

   3.3 Datenbank

   3.4 CSS gut organisiert?

   3.5 Allgemein: Ist mein code klar und gut dokumentiert?
