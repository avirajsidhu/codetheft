const mongoose = require('mongoose');


var QuestionSchema = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: Date.now()
    },
    questionCode: {
        type: String,
        required: true
    },
    input: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    output: {
        type: String,
        required: true
    },
    ip: {
        type: String
    },
    browser: {
        type: String
    }
});


const Question = mongoose.model("Question", QuestionSchema);

module.exports = { Question };
