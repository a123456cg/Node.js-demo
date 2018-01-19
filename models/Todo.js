const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({ 
    item: String,
    done: Boolean, 
});

module.exports = mongoose.model('Todo', todoSchema);