const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
	description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    status: {
        type: String,
        required: true,
       
    },
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;