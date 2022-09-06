const { AuthenticationError } = require('apollo-server-express');
const { Task, Goal, User } = require('../models');
const { Types } = require('mongoose')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        tasks: async (parent) => {
            return Task.find({});
        },
 
        users: async (parent) => {
            return User.find({});
        },
 
        task: async (parent, { _id }) => {
            return Task.findById(_id);
        },
 
        // goals: async () => {
        //     return Goal.find().sort({ createdAt: -1 });
        // },
 
        // goal: async (parent, { goalId }) => {
        //     return Goal.findOne({ _id: goalId });
        // },
    },
 
    Mutation: {
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
        },
 
        removeTask: async (parent, { taskId, userId }) => {
            console.log("User id: " + userId + "task Id" +  taskId);
            const user = await User.findByIdAndUpdate(userId, { $pull : { tasks : {_id : taskId } } });
            return user;
        },

        updateTask: async (parent, {taskId, userId, complete}) => {
            var user = await User.findById(userId);
            var newTasks = user.tasks;
            for( task in user.tasks) {
                console.log(task._id);
                console.log(taskId);
                if (task._id == taskId) {
                    // needs to set complete to true
                    console.log(task._id);
                    console.log(taskId);
                    task.complete = true;
                }
            }
            // ...user.tasks,
            return User.findByIdAndUpdate(userId, {$set : {tasks: newTasks}}, { new: true });
        },
    },   
   
    //addTask: async (parent, { taskText, userId }) => {
    //    return userTask.create({ taskText, userId });
    //},
 
        //     addGoal: async (parent, { goalId, userId }) => {
        //         return userGoal.create({ goalId, userId });
        //     },
 
        //     removeGoal: async (parent, { goalId, userId }) => {
        //     console.log("User id: " + userId + "goal Id" +  goalId);
        // may have to change this since goal only had _id
        //     const user = await User.findByIdAndUpdate(userId, { $pull : { goal : {_id : goalId } } });
        //     return user;
        // },

};
module.exports = resolvers