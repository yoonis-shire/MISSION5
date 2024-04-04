const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BidElement = require('./Bid');
const app = express();

app.use(cors()); 
app.use(express.json());

//process.env.MONGO_URL
//"mongodb://localhost:27017/messages"
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error(err));

// Get Request
app.get('/api/bid', async (req, res) => {
  console.log('Get Request');
  try {
    const BidElements = await BidElement.find();
    res.status(200).json({Bid: "Bided bid elements successfully", data: BidElements}); 
  } catch (err) {
    res.status(500).json({Bid: "Error Biding bid elements", error: err})
  }
});

//POST Request
app.post('/api/bid', async (req, res) => {
  console.log('Post Request');
  try {
    const newBidElement = new BidElement({
      user: req.body.user,
      name: req.body.name,
      location: req.body.location,
      closeDate: req.body.closeDate,
      buyValue: req.body.buyValue,
    });
    const savedBidElement = await newBidElement.save();
    res.status(201).json({ message: "Bid Element created successfully", data: savedBidElement });
  } catch (err) {
    res.status(500).json({ message: "Error creating Bid Element", error: err });
  }
});


app.delete('/api/bid', async (req, res) => {
  console.log('Delete Request');
  try {
    await BidElement.deleteMany({});
    res.status(200).json({ message: "Data reset successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error resetting data", error: err });
  }
});


app.all('*', (req, res) => {
  res.status(404).send("<h1>404 | Page not found");
})

// Listen at Port
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});