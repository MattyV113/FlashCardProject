const { create } = require('domain');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const DeckModel = require('./Models/Deck.jsx');
const port = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/decks', async (req, res) => {
  const decks = await DeckModel.find();
  res.json(decks);
});

app.post('/decks', async (req, res) => {
  const newDeck = new DeckModel({
    title: req.body.title,
    body: req.body.body,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
  console.log(createdDeck);
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected...');
    app.listen(port);
  })
  .catch((err) => console.log(err));
