const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fullstack_todo_app', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
    task: String
});

module.exports = mongoose.model('Todo', todoSchema);