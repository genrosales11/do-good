const db = require('../config/connection');
const { User, Task } = require('../models');
const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');

db.once('open', async () => {
  try {
    // Deleting our tasks and users first so we don't create duplicates
    await Task.deleteMany({});
    await User.deleteMany({});

    // Creating our users
    // await User.create(userSeeds);
    await Task.create(taskSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
