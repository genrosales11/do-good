const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { Task, taskSchema } = require('./Task');
const goalSchema = require('./Goal');

const userSchema = new Schema({
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    password: {
        type: String,
        required: true,
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    
    tasks: [taskSchema],
 
    goals: [goalSchema],

});
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }

    if(this.isNew) {
        // copy all the tasks to the user's task array
        this.tasks = await Task.find({});
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = function (password) {
    return bcrypt.compare(password, this.password);
};
  
const User = model('User', userSchema);

module.exports = User;