// Task ID, task text, value index

const { Schema, Types, model } = require('mongoose');

const taskSchema = new Schema({
    taskId: {
        type: Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    taskText: {
        type: String,
        required: true,
        maxLength: 100,
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
});

const Task = model('Task', taskSchema);

module.exports = { Task, taskSchema };