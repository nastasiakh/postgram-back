const express = require('express')
const {PostsRepository} = require('../repositories/posts_repository')
const router = express.Router()

const repo = new PostsRepository()

router.get('/', async (req, res) =>{
    res.json(await repo.getAll());
})
router.get('/:postId', async (req, res) =>{
    const postId = req.postId;
    res.json(await repo.getOne(postId));
})
router.post('/', async (req, res) =>{
    const postBody = req.body;
    res.json(await repo.create(postBody));
})
router.put('/:postId', async (req, res) =>{
    const postId = req.postId;
    const postBody = req.body;
    res.json(await repo.replaceOne(postId, postBody));
})
router.patch('/:postId', async (req, res) =>{
    const postId = req.postId;
    const postBody = req.body;
    res.json(await repo.updateOne(postId));
})
router.delete('/:postId', async(req, res) =>{
    const postId = req.postId
    const result = await repo.getAll()
    await repo.deleteOne(postId)
    res.json(result)
})

module.exports = router
