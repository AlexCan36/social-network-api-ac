const express = require('express');
const { User } = require('./models');
const db = require('./config/connection')
//const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(routes)

db.once('open', ()=>{
    app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
})



