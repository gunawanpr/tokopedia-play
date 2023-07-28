// MongoDB Connection with Mongoose

require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected!');
});


// ExpressJs App Server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);


// Routes API

const routes = require('./routes/routes');
app.use('/play', routes);


app.listen(3000, () => {
    console.log(`Server run at http://localhost:3000`);
});


