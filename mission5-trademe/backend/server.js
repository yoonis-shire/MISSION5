const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./Product');
const app = express();

app.use(cors()); 
app.use(express.json());

//process.env.MONGO_URL
//"mongodb://localhost:27017/trade-me"
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error(err));

// Get Request
app.get('/api/products', async (req, res) => {
  console.log('Get Request');
  try {
    const products = await Product.find();
    res.status(200).json({Fetch: "Fetched products successfully", data: products}); 
  } catch (err) {
    res.status(500).json({Fetch: "Error fetching products", error: err})
  }
});

app.get('/api/user', async (req, res) => {
  console.log('Get Request');
  try {
    const products = await Product.find();
    res.status(200).json({Fetch: "Fetched products successfully", data: products}); 
  } catch (err) {
    res.status(500).json({Fetch: "Error fetching products", error: err})
  }
});


app.post('/api/products', async (req, res) => {
  console.log('Post Request');
  try {
    const newProduct = new Product({
      user: req.body.user,
      name: req.body.name,
      location: req.body.location,
      closeDate: req.body.closeDate,
      bids: req.body.bids,
      bidsValue: req.body.bidsValue,
      buyValue: req.body.buyValue,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product created successfully", data: savedProduct });
  } catch (err) {
    res.status(500).json({ message: "Error creating product", error: err });
  }
});

app.post('/api/user', async (req, res) => {
  console.log('Post Request');
  try {
    const newProduct = new Product({
      user: req.body.user
    });
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product created successfully", data: savedProduct });
  } catch (err) {
    res.status(500).json({ message: "Error creating product", error: err });
  }
});

app.delete('/api/products', async (req, res) => {
  console.log('Delete Request');
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: "Data reset successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error resetting data", error: err });
  }
});

app.delete('/api/user', async (req, res) => {
  console.log('Delete Request');
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: "Data reset successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error resetting data", error: err });
  }
});


app.all('*', (req, res) => {
  res.status(404).send("<h1>404 | Page not found");
})

// Listen at Port
app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});