"use strict"

const {
    welcome,
    evaluateInput
} = require('../controllers/auth.controllers.js');

module.exports = (app) => {
    app.get('/welcome', welcome)
    app.post('/evaluateInput', evaluateInput)
};