"use strict"

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const questionRoutes = require('./api/routes/question.routes.js');

const connection = mongoose.connect(
    // "mongodb+srv://aviraj:aviraj700@cluster0-4b0j9.mongodb.net/test?retryWrites=true&w=majority",
    "mongodb+srv://aviraj:aviraj700@cluster0-4b0j9.mongodb.net/codetheft?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
).catch(error => console.error("mongo conn err",error.message));

const serverPort = 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

questionRoutes(app);

app.listen(serverPort, () => {
    console.log(`Server running at ${serverPort}`);
});
