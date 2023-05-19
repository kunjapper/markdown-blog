const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Construct the MongoDB connection URL
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const mongoDBUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;


const app = express();

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

require('dotenv').config();

app.use(express.json());

/*
mongodb+srv://<username>:<password>@cluster0.zqqzm6c.mongodb.net/?retryWrites=true&w=majority
*/


mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Register the routes
app.use('/posts', postsRouter);
app.use('/users', usersRouter);



app.get('/posts', (req, res) => {
    // Code to handle the request and send a response
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
