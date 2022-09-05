const { AuthenticationError } = require('apollo-server-express');
const { Task, Goal, User } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        tasks: async (parent) => {
            // return Task.find().sort({ createdAt: -1 });
            return Task.find({});
        },

        users: async (parent) => {
            return User.find({});
        },

        // task: async (parent, { taskId }) => {
        //     return Task.findOne({ _id: taskId });
        // },

        // goals: async () => {
        //     return Goal.find().sort({ createdAt: -1 });
        // },

        // goal: async (parent, { goalId }) => {
        //     return Goal.findOne({ _id: goalId });
        // },
    },

    Mutation: {
        //     addTask: async (parent, { taskText, userId }) => {
        //         return userTask.create({ taskText, userId });
        //     },

        //     addGoal: async (parent, { goalId, userId }) => {
        //         return userGoal.create({ goalId, userId });
        //     },

        // need to find individual user and remove task id from user list of tasks, return updated user
            // removeTask: async (parent, { taskId, userId }) => {
            //     return User.findByIdUpdate(userId, { $pull : { tasks : taskId }});
                
            //     // return Task.findOneAndDelete({ taskId, userId });
            // },

        //     removeGoal: async (parent, { gaolId, userId }) => {
        //         return userGoal.findOneAndDelete({ goalId, userId });
        //     },
        addUser: async (parent, args) => {
            console.log(args)
            const user = await User.create(args)
            const token = signToken(user)
            return {
                token, user
            }
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })
            if (user.isCorrectPassword(password)) {
                const token = signToken(user)
                return {
                    token, user
                }

            }
            throw new AuthenticationError('incorrect password')
            // bounces back/ gives error
        }

    },

};
module.exports = resolvers