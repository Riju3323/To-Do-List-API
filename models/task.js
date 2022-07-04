const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Task Cannot be Empty'],
    trim: true,
    maxlength:[30, 'Task Name cannot be more than 30 letters']
  },
  completed: {
    type: Boolean,
    required: [true,'Must have a done/not done status'],
    default: false
  },
})

module.exports = mongoose.model('Task', TaskSchema);