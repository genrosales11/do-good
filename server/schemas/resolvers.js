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
        addTask: async (parent, {userId, task}) => {
        try{
            console.log(userId, task)
            const user = await User.findByIdAndUpdate({
                _id: userId
            }, {
                $push:{tasks:task}
            },{
                new: true
            })

            
         
            return user

        }
        catch(error){
            console.log(error)
            return error
        }
        },

        updateTask: async (parent, {taskId, userId, complete}) => {
            var user = await User.findById(userId);
            var newTasks = user.tasks;
            console.log(user);
            // map instead of for/in
            // task find by id/ use query in mutation?

            const newUserTask = user.tasks.map( (task) => {
                // if (task.taskId.toString === taskId)
                // so far --> can take variable given id, can get _id for matching, but doesn't match with toString or equal
                if (task.taskId.equals(taskId))
                {
                    console.log("found it");
                }
                console.log(task._id);
                console.log(taskId);
            });
            // console.log(newUserTask);
            // for( task in user.tasks) {
            //     console.log(task.taskId);
            //     console.log(taskId);
            //     if (task._id == taskId) {
            //         // needs to set complete to true
            //         console.log(task._id);
            //         console.log(taskId);
            //         task.complete = true;
            //     }
            // }
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