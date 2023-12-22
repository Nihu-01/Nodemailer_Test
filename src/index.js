// index.js
const express = require('express');
const path = require('path');
//const bodyParser = require('body-parser'); // Add this line
//const cors = require('cors'); // Add this line
const app = express();
const port = 5000;
const sendMail = require('../controllers/sendMail');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));
//app.use(bodyParser.json()); // Add this line
//app.use(cors()); // Add this line

app.get('/', (req, res) => {
  res.send('I am a server');
});

app.post('/mail', sendMail); // Change to POST method

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is live on port no. ${port}`);
    });
  } catch (error) {}
};

start();
