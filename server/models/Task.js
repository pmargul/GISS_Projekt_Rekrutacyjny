const mongoose = require('mongoose');
mongoose.set('debug', true);

const TaskSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    term: {
        type: Date,
        required: false
    },
    creationDate: {
        type: Date,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    realized:{
        type: Boolean,
        required: true
    }
   
});

module.exports = mongoose.model('Task', TaskSchema);
