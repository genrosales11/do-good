const { Task, Goal } = require('../models');

const resolvers = {
    Query: {
        tasks: async () => {
            return Task.find().sort({ createdAt: -1 });
        },

        task: async (parent, { taskId }) => {
            return Task.findOne({ _id: taskId });
        },

        goals: async () => {
            return Goal.find().sort({ createdAt: -1 });
        },

        goal: async (parent, { goalId }) => {
            return Goal.findOne({ _id: goalId });
        },
    },

    Mutation: {
        addTask: async (parent, { taskText, userId }) => {
            return userTask.create({ taskText, userId });
        },

        addGoal: async (parent, { goalId, userId }) => {
            return userGoal.create({ goalId, userId });
        },

        removeTask: async (parent, { taskId, userId }) => {
            return userTask.findOneAndDelete({ taskId, userId });
        },

        removeGoal: async (parent, { gaolId, userId }) => {
            return userGoal.findOneAndDelete({ goalId, userId });
        },
    },

};