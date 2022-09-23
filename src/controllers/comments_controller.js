const express = require('express')
const {CommentsRepository} = require('../repositories/comments_repository')
const router = express.Router()

const repo = new CommentsRepository()

router.get('/', async (req, res, next) =>{
    try{
        const items = await repo.getAll()
        res.json(items);
    } catch (e){
        next({http_code: 400, code: 'not-found', message: 'No posts yet'});
    }
})

router.get('/:commentId', async (req, res, next) =>{
    const commentId = parseInt(req.params.commentId);
    if (typeof commentId != 'number' || commentId <= 0) {
        next({http_code: 400, code: 'invalid-post-id', message: 'Input field `post-id` is invalid format'});
        return;
    }
    try {
        let comment = await repo.getOne(commentId);
        res.json(comment);
    } catch (e) {
        next({http_code: 404, code: 'not-found', message: 'No such post'});
    }
})

router.get('/:postId', async (req, res, next) =>{
    const postId = req.postId;
    if (typeof postId != 'number' || postId <= 0) {
        next({http_code: 400, code: 'invalid-post-id', message: 'Input field `post-id` is invalid format'});
        return;
    }
    try {
        let comment = await repo.getByPostId(postId);
        res.json(comment);
    } catch (e) {
        next({http_code: 404, code: 'not-found', message: 'No such post'});
    }
})

router.post('/', async (req, res) =>{
    const commentBody = req.body;
    res.json(await repo.create(commentBody));
})

router.put('/', async (req, res) =>{
    const commentBody = req.body;
    res.json(await repo.replaceOne(commentBody));
})

router.patch('/:postId', async (req, res) =>{
    const commentId = parseInt(req.params.commentId);
    const commentBody = req.body;
    res.json(await repo.updateOne(commentId, commentBody));
})

router.delete('/:commentId', async(req, res) =>{
    const commentId = parseInt(req.params.commentId);
    const result = await repo.getAll()
    await repo.deleteOne(commentId)
    res.json(result)
})

module.exports = router;
