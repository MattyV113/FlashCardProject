const express = require('express');
const mongoose = require('mongoose');
const port = 5000;
const db =
  'mongodb+srv://mvines:PMkObrBJReYrIk7S@atlascluster.ixtrucg.mongodb.net/?retryWrites=true&w=majority';

const app = express();

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('MongoDB connected...');
    app.listen(port);
  })
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
