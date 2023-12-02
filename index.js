const express = require("express");
const app = express();

var bodyParser = require("body-parser");
var cors = require("cors");
// ini
var jsonParser = bodyParser.json();
//itu
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const port = 3000;

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.get("/", (req, res) => {
  res.json('website a')
});
app.post('/github-event', (req, res) => {
  //validasi
  if (req.body.secret !== 'secret123'){
    return res.status(403).json({ error: "Invalid secret"})
  }
  if (req.body.event == 'event-1'){
    console.log ('incoming webhook 1')
    return res.json()
  }
  if (req.body.event == 'event-2'){
    console.log ('incoming webhook 2')
    return res.json()
  }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});