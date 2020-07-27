const express = require('express'),
      Todo    = require('../models/todo'),
      router  = express.Router();

router.get('/', function(req, res) {
    Todo.find({})
        .then(todos => res.send(todos))
        .catch(err => res.send({message: err}));
});

router.post('/', function(req, res) {
    Todo.create(req.body)
        .then(todo => res.status(201).send(todo))
        .catch(err => res.send({message: err}));
});

router.delete('/:id', function(req, res) {
    Todo.findByIdAndRemove(req.params.id)
        .then(todo => res.send(todo))
        .catch(err => res.send({message: err}));
});

module.exports = router;