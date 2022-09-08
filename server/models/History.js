
const { Task, taskSchema } = require('./Task');
const { Schema, model } = require('mongoose');

const historySchema = new Schema({

    historyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },

    tasks: [taskSchema]
});

const History = model('History', historySchema);

module.exports = History;