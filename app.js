const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Construct the MongoDB connection URL
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;



const app = express();
const router = express.Router();


const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());

/*
mongodb+srv://<username>:<password>@cluster0.zqqzm6c.mongodb.net/?retryWrites=true&w=majority
*/


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  
  app.use(express.static('public'));

// Register the routes
app.use('/posts', postsRouter);
//app.use('/users', usersRouter);

app.get('/posts', (req, res) => {
    // Code to handle the request and send a response
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
