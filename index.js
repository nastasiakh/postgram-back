import express from 'express'
import serverRoutes from "./routes/servers.js";

const app = express()

app.use(serverRoutes);

app.get('/', (req, res) => {
    console.log('hello from first route')
})

app.get('/signin', (req, res) => {
    let phone
    res.send(req.body)
});

app.listen(3000, (req, res) => {
    console.log('Postgram is ready...')
})
