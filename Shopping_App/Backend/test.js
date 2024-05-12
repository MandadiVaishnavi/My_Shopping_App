// // const mongoose = require('mongoose');

// // // Replace with your actual connection string
// // const connectionString = 'mongodb://localhost:27017/Shopping_App';

// // (async () => {
// //   try {
// //     await mongoose.connect(connectionString, {
// //       useNewUrlParser: true, // Although deprecated, can be left for now
// //       useUnifiedTopology: true, // Although deprecated, can be left for now
// //     });
// //     console.log('Successfully connected to MongoDB');
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error);
// //     process.exit(1); // Exit the process with an error code
// //   }
// // })();
// const express = require('express');
// const mongoose = require('mongoose');
// const Product = require('./models/Products'); // Your Product model

// const app = express();

// // ... other code for database connection, etc.

// // API endpoint to get all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find(); // Fetch all products

//     // Send the product data as JSON response
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
const mongoose = require('mongoose');

// MongoDB connection URL
const uri = 'mongodb+srv://vaishnavi:123456C@cluster0.wt3sm3f.mongodb.net/MandadiVaishnavi?retryWrites=true&w=majority&appName=Cluster0';

// Create a function to test database connectivity
async function testDatabaseConnection() {
    try {
        // Connect to MongoDB
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Log a message if the connection is successful
        console.log('Connected to MongoDB');

        // Disconnect from MongoDB
        await mongoose.disconnect();
        
        // Log a message if the disconnection is successful
        console.log('Disconnected from MongoDB');

        // Exit the process with a success status
        process.exit(0);
    } catch (error) {
        // Log an error message if the connection fails
        console.error('Error connecting to MongoDB:', error);

        // Exit the process with a failure status
        process.exit(1);
    }
}

// Call the function to test the database connection
testDatabaseConnection();
