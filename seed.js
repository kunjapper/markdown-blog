const mongoose = require('mongoose');
const faker = require('faker');
const Post = require('./models/post');

require('dotenv').config();


const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Event handlers for successful connection and error handling
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Failed to connect to MongoDB', error);
});

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
  });
  
  
  module.exports = Post;

async function generateExampleData() {
    try {
      // Remove existing posts (optional)
      await Post.deleteMany({});
  
      // Generate example posts
      const numPosts = 10; // Specify the number of example posts you want to create
  
      for (let i = 0; i < numPosts; i++) {
        const title = faker.lorem.sentence();
        const content = faker.lorem.paragraphs();
  
        const newPost = new Post({ title, content });
        await newPost.save();
      }
  
      console.log('Example data added successfully');
    } catch (error) {
      console.error('Error adding example data', error);
    } finally {
      // Close the database connection
      mongoose.connection.close();
    }
  }
  
  // Call the generateExampleData function to add example data
  generateExampleData();
  