const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving to DB
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // Hash password before saving
  }
  next();
});

// Method to compare passwords
userSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password); // Compare hashed passwords
};

const User = mongoose.model('User', userSchema);
module.exports = User;
