const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  //setting structure for documents in collection
  //structure for the data
  name: {
    type: String,
    required: [true, 'must provide task'],
    trim: true,
    maxlength: [20, 'task cannot be more then 20 characters'],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);
