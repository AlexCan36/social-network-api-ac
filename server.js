const express = require('express');
const { User } = require('./models');
const db = require('./config/connection');
const routes = require('./controllers');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api-ac', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

db.once('open', ()=>{
    app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});






