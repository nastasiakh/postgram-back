require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./controllers/posts_controller')
const users = require('./controllers/users_controller')
const comments = require('./controllers/comments_controller')
const app = express()
const paramsSettings = require('./helpers/paramsSettings')

app.get('/', (req, res) => {
    res.send('hello from first route')
})

app.use(bodyParser.json());
app.use('/posts', posts);
app.use('/users', users);
app.use('/comments', comments);

app.use((err, req, res, next) => {
    let {code, message } = err;
    res.status(err.http_code).json({code, message});
})

paramsSettings.postParams(app.request);
paramsSettings.userParams(app.request);

app.listen(3000, (req, res) => {
    console.log('Postgram is ready...')
})
