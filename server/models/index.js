const mongoose = require('mongoose');
const User = require('./user');

async function connectToDb() {
  await mongoose.connect('mongodb://localhost:27017/chat');
}

connectToDb().catch((err) => {
  console.log(err);
  process.exit(1); //stop server with code 1
});

module.exports = {
  User,
};
