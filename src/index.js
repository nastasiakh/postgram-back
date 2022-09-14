require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./controllers/posts_controller')
const app = express()
const paramsSettings = require('./helpers/paramsSettings')

app.get('/', (req, res) => {
    res.send('hello from first route')
})
app.use(bodyParser.json());
app.use('/posts',posts);

paramsSettings(app.request);

app.listen(3000, (req, res) => {
    console.log('Postgram is ready...')
})
