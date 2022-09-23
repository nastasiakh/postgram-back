const express = require('express')
const {PostsRepository} = require('../repositories/posts_repository')
const router = express.Router()

const repo = new PostsRepository()

router.get('/', async (req, res, next) =>{
    try{
        const items = await repo.getAll()
        res.json(items);
    } catch (e){
        next({http_code: 400, code: 'not-found', message: 'No posts yet'});
    }
})

router.get('/:postId', async (req, res, next) =>{
    const postId = req.postId;
    if (typeof postId != 'number' || postId <= 0) {
        next({http_code: 400, code: 'invalid-post-id', message: 'Input field `post-id` is invalid format'});
        return;
    }
    try {
        let post = await repo.getOne(postId);
        res.json(post);
    } catch (e) {
        next({http_code: 404, code: 'not-found', message: 'No such post'});
    }
})

router.post('/', async (req, res) =>{
    const postBody = req.body;
    res.json(await repo.create(postBody));
})

router.put('/', async (req, res) =>{
    const postBody = req.body;
    res.json(await repo.replaceOne(postBody));
})

router.patch('/:postId', async (req, res) =>{
    const postId = req.postId;
    const postBody = req.body;
    res.json(await repo.updateOne(postId, postBody));
})

router.delete('/:postId', async(req, res) =>{
    const postId = req.postId
    const result = await repo.getAll()
    await repo.deleteOne(postId)
    res.json(result)
})

module.exports = router;
