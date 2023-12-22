const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const sendMail = require('../controllers/sendMail');

// Serve the static files from the React build
app.use(express.static(path.join(__dirname, '../path/to/your/react-app/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'C:\Users\Hp\Documents\GitHub\Nodemailer_Test\my-react-app', 'index.html'));
});

app.post('/mail', sendMail);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is live on port no. ${port}`);
    });
  } catch (error) {}
};

start();

