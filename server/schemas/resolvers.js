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
            console.log("user",user)
            // 1st
            const allow = await user.isCorrectPassword(password)
            if (allow) {
                const token = signToken(user)
                console.log("token", token)
                return {
                    token, user
                }

            }
            console.log("errorrrrrr")
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

            return await Task.findByIdAndUpdate(taskId, {complete: true}, {new: true})

        },
    },   
   


};
module.exports = resolvers