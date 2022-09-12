const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) =>{
    res.send('All posts')
})

router.get('/posts/:postId', (req, res) =>{
    const postId = req.params.postId
    const post = {
        postId,
        title: 'Post1',
        author: 'Me'
    }
    res.json(post)
})
router.post('/posts/', (req, res) =>{
    const postBody = req.body
    res.send(`Patch with ${JSON.stringify(postBody)}`)
})

router.patch('/posts/:postId', (req, res) =>{
    const postId = req.params.postId
    res.send(`Patch with ${postId}`)
})

router.delete('/posts', (req, res) =>{
    res.send('Delete all posts')
})

router.delete('/posts/:postId', (req, res) =>{
    const postId = req.params.postId
    res.send(`Deleted post`)
})

module.exports = router
