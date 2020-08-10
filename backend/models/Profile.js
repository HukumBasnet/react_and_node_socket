const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
 company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
   
  },

  
});

module.exports = mongoose.model('profile', ProfileSchema);