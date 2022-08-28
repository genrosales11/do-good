// Task_id

const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    taskText: {
        type: String,
        required: true,
        maxLength: 30,
    },
    valueIndex: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    // Do we need to make an id or will it generate one automatically?
    // Do we need to take in a category or do something else?
    lastName: {
        type: String,
        required: true,
    }
});

const Task = model('Task', taskSchema);

module.exports = Task;