const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    // Code to handle the request and send a response
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
