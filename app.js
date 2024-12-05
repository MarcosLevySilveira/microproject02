// Importing dependencies
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes.js'; // Import the item routes

// Load environment variables from .env file
dotenv.config();

// Create an instance of express app
const app = express();

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Connect to MongoDB using the URI from environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Connection Failed:', err);
    process.exit(1);  // Exit the process if MongoDB connection fails
  });

// Use item routes
app.use('/api', itemRoutes);

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
