const mongoose = require('mongoose');

const createResult = mongoose.Schema({
    password: { type: String, required: true },
});

const createdResult = mongoose.model('results', createResult);
module.exports = createdResult;