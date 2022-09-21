const pgp = require('pg-promise')();
const connection = require("../helpers/db_connection");

class CommentsRepository{
    async getAll(){
        const db = pgp(connection)
        const records = await db.many('SELECT id, userId, postId, text FROM comments')
        return records;
    }
    async getOne(id){
        const db = pgp(connection)
        const record = await db.one('SELECT id, userId, postId, text FROM comments WHERE id=$1', id);
        return record;
    }
    async getByPostId(postId){
        const db = pgp(connection)
        const records = await db.one('SELECT id, userId, postId, text FROM comments WHERE postId=$1', postId);
        return records;
    }
    async create(comment){
        const db = pgp(connection)
        const record = await db.one(
            'INSERT INTO posts ( userId, postId, text) VALUES ($1, $2, $3) RETURNING id, userId, postId, text',
            [comment.userId, comment.postId, comment.text]);
        return record;
    }
    async replaceOne(comment){
        const db = pgp(connection)
        const record = await db.one(
            'UPDATE comments SET title=$2, author=$3 text=$4 WHERE id=$1 RETURNING id, userId, postId, text',
            [comment.userId, comment.postId, comment.text])
        return record;
    }
    async updateOne(id, comment){
        const db = pgp(connection)
        const record = await db.one(
            'UPDATE comments SET title=$2, author=$3, text=$4 WHERE id=$1 RETURNING id, userId, postId, text',
            [id, comment.userId, comment.postId, comment.text])
        return record;
    }
    async deleteOne(id){
        const db = pgp(connection)
        const record = await db.one(
            'DELETE id, userId, postId, text FROM comments WHERE id=$1 RETURNING id, userId, postId, text', id)
        return record;
    }
}

module.exports = {CommentsRepository};
