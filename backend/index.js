const express    = require('express'),
      cors       = require('cors'),
      bodyParser = require('body-parser')
      app        = express();

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/todos', todoRoutes);

app.listen(3001, function() {
    console.log('Server has started on port 3001');
});