// History ID, date
const taskSchema = require('./Task');
const { Schema, model } = require('mongoose');

const historySchema = new Schema({
    // is this offering all tasks? do I need to do something like 
    //  task_id: task find one?
    historyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    // adding tasks so it has access to tasks to reproduce
    tasks: [taskSchema]
});

const History = model('History', historySchema);

module.exports = History;