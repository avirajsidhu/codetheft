"use strict"

const {
    welcome,
    evaluateInput,
    getQuestions
} = require('../controllers/question.controllers.js');

module.exports = (app) => {
    app.get('/welcome', welcome)
    app.post('/evaluateInput', evaluateInput)
    app.get('/questions', getQuestions)
};