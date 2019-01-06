const express = require ('express');
const app = express();
const bodyParser = require('body-parser'); //nimmt strings von body und verwendet die in Objekten.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var kundenRoute = require('./routes/kundenroute');



app.get('/', function(req, res){
    res.send("root route!");
});

app.use('/kunden', kundenRoute);

app.listen(process.env.PORT || 8080, () => {
      console.log("Kunden API gestartet!!!");
  });
