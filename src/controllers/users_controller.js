const express = require('express')
const {as} = require("pg-promise");
const router = express.Router()

const repo = new UsersRepository()

router.get('/', async (req, res, next) => {
    try{
        const users = await repo.getAll()
        res.json(users);
    } catch (e) {
        next({http_code: 404, code: 'not-found', message: 'No users yet'});
    }
});

router.get('/:userId', async(req, res, next) => {
    const userId = req.userId;
    if(typeof userId !="number" || userId <= 0){
        next({http_code: 400, code:'invalid-user-id', message:'Input field `user-id` is invalid format'})
        return;
    }
    try{
        let user = await repo.getOne(userId);
        res.json(user);
    } catch (e) {
        next({http_code: 404, code: 'not-found', message: 'No such user'});

    }
});

router.post('/', async (req, res, next) =>{
    const userBody = req.body;
    if(!userBody){
        next({http_code: 404, code: 'not-found', message: 'No info about user'});
        return;
    } else{
        res.json(await repo.create(userBody));
    }
})

router.put('/', async(req, res, next) => {
    const userBody = req.body;
    if(!userBody){
        next({http_code: 404, code: 'not-found', message: 'No info about user'});
        return;
    } else{
        res.json(await repo.replaceOne(userBody));
    }
});

router.patch('/:userId', async (req, res, next) =>{
    const userId = req.userId;
    const userBody = req.body;
    if(typeof userId !="number" || userId <= 0){
        next({http_code: 400, code:'invalid-user-id', message:'Input field `user-id` is invalid format'})
        return;
    } else{
        if(!userBody){
            next({http_code: 404, code: 'not-found', message: 'No info about user'});
            return;
        } else{
            res.json(await repo.updateOne(userId, userBody));
        }
    }
});

router.delete('/:userId', async(req, res, next) => {
    const userId = req.userId;
    try{
        const result = await repo.getAll()
        if(!result){
            next({http_code: 404, code: 'not-found', message: 'No user to delete'});
            return;
        }
        await repo.deleteOne(userId)
        res.json(result)
    }  catch (e){
        next({http_code: 404, code: 'not-found', message: 'No user'});
    }

})
