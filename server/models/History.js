// date id, History id, not null

const { Schema, model } = require('mongoose');

const historySchema = new Schema({
    // is this offering all tasks? do I need to do something like 
    //  task_id: task find one?
    tasks: [taskSchema],
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

const History = model('History', historySchema);

module.exports = History;