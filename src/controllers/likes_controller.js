const express = require('express')
const {LikesRepository} = require('../')
const router = express.Router()

const repoLikes = new LikesRepository()

router.get('/posts/:postId', async(req, res, next) =>{
    try{
        const userId = 1
        const items = await repoLikes.getByPostAndUserId(postId, userId);
        res.json(items)
    } catch (e){
        next({http_code: 400, code: 'not-found', message: 'No likes yet'});
    }
})

router.post('posts/:postId', async (req, res) =>{
    const likeBody = req.body;
    res.json(await repo.add(likeBody));
})

router.delete('/posts/:postId', async(req, res) =>{
    const postId = req.postId
    const userId = 1
    const result = await repo.getByPostAndUserId(postId, userId)
    await repo.deleteByPostAndUserId(postId, userId)
    res.json(result)
})
