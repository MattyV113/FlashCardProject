const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeckSchema = new Schema({
  title: String,
  body: String,
});

const DeckModel = mongoose.model('Deck', DeckSchema);

module.exports = DeckModel;
