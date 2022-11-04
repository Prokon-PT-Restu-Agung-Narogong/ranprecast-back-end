const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let db = [{
  contents : [{
    nameCompany : "PTASASAS",
    descriptionCompany : `PT Basuki adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Engineering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah RAN PRECAST.`,

  }]
}];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    // We will be coding here
    return res.json(db)
});

app.get('/api/contents', (req, res) => {
    // We will be coding here
    return res.json(db[0].contents)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))