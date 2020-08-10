const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignalSchema = new Schema({
  text: {
    type: String,
   
  },
});

module.exports = mongoose.model('signal', SignalSchema);
