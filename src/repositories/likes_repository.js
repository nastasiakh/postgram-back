const {db} = require('../helpers/db_connection')

class LikesRepository{
    async getByPostAndUserId(postId, userId){
        const records = await db.many(
            'SELECT id, userId, postId FROM likes WHERE postId=$1 AND userId=$2',
            [postId, userId]
        )
        return records;
    }

    async add(likeBody){
        const record = await db.one(
            'INSERT INTO likes (userId, postId) VALUES ($1, $2)',
            [likeBody.userId, likeBody.postId]
        )
        return record;
    }

    async deleteByPostAndUserId(postId, userId){
        const record = await db.one(
            'DELETE id, userId, postId FROM likes WHERE postId=$1 AND userId=$2',
            [postId, userId]
        )
    }
}
