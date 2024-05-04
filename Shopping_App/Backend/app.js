const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./models/Products'); // Your Product model
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/Shopping_App')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));



// mongoose.connect('mongodb://localhost:27017/Shopping_App', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  attributes: {
      color: { type: String },
      size: { type: String },
      processor: { type: String },
      memory: { type: String }
  },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
},
{ collection: 'Products' });
// const counterSchema = new mongoose.Schema({
//   count: { type: Number, default: 0 },
//   myCount: { type: Number, default: 0 } // Adding myCount field to the schema
// },{ collection: 'counters' });
// const Counter = mongoose.model('Counter', counterSchema);
const Product = mongoose.model('Product', productSchema);


// Define routes
app.get('/api/products', async (req, res) => {
  console.log("Reached GET method")
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
