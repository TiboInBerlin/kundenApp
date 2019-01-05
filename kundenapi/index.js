const express = require ('express');
const app = express();

var kundenRoute = require('./routes/kundenroute');

app.get('/', function(req, res){
    res.send("root route!");
});

app.use('/kunden', kundenRoute);

app.listen(process.env.PORT || 8080, () => {
      console.log("Kunden API gestartet!!!");
  });
