"use strict"

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const authRoutes = require('./routes/auth.routes.js');

const serverPort = 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

authRoutes(app);

app.listen(serverPort, (err, res) => {
    console.log({ err, res });
    console.log(`Server running at ${serverPort}`);
});

module.exports = {
    app
};