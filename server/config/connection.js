const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://dnava6001:Fm3MndtNYT6aLoaP@cluster029.t4qda4e.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  module.exports = mongoose.connection;