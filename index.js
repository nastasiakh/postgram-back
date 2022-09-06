import express from 'express'

const app = express()

app.get('/', (req, res)=>{

})

app.listen(3000, (req, res) => {
    res.send('Postgram is ready')
})
