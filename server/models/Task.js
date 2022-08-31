// Task ID, task text, value index

const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    taskId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    taskText: {
        type: String,
        required: true,
        maxLength: 30,
    },
    taskValue: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    
    // Do we need to take in a category or do something else?
});

const Task = model('Task', taskSchema);

module.exports = Task;