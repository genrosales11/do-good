// Goal ID, goal text, goal value

const { Schema, model } = require('mongoose');

const goalSchema = new Schema({
    goalId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    goalText: {
        type: String,
        required: true,
        maxLength: 30,
    },
    goalValue: {
        type: Number,
        required: true,
        maxLength: 10,
    },
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;