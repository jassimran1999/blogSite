const port = 5000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('../node_modules/express');
require('../dbConnection');
const users = require('../routes/users');
const posts = require('../routes/posts');
const homePost = require('../routes/home');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/users', users);
app.use('/posts', posts);


app.listen(port, () => { console.log(`Listening on Port ${port}`); });


// backend
