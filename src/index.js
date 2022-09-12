const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./controllers/posts_controller')
const app = express()
const paramsSettings = require('./helpers/paramsSettings')

app.get('/', (req, res) => {
    res.send('hello from first route')
})
app.use(bodyParser.json());
app.use(posts);

Object.defineProperty(app.request, 'posts', {
    configurable: true,
    enumerable: true,
    get() { return parseInt(this.params.postId)}
})

app.listen(3000, (req, res) => {
    console.log('Postgram is ready...')
})
