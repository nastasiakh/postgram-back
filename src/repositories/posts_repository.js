const pgp = require('pg-promise')();

const connection = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_USER,
    allowExitOnIdle: true
};

class PostsRepository{
    async getAll(){
        const db = pgp(connection)
        const records = await db.many('SELECT id, title, author FROM posts')
        return records;
    }
    async getOne(id){
        const db = pgp(connection)
        const record = await db.one('SELECT id, title, author FROM posts WHERE id=$1', id);
        return record;
    }
    async create(post){
        const db = pgp(connection)
        const record = await db.one(
            'INSERT INTO posts (title, author) VALUES ($1, $2) RETURNING id, title, author',
            [post.title, post.author]);
        return record;
    }
    async replaceOne(post){
        const db = pgp(connection)
        const record = await db.one(
            'UPDATE posts SET title=$2, author=$3 WHERE id=$1 RETURNING id, title, author',
           [post.id, post.title, post.author ])
        return record;
    }
    async updateOne(id, post){
        const db = pgp(connection)
        const record = await db.one(
            'UPDATE posts SET title=$2, author=$3 WHERE id=$1 RETURNING id, title, author',
            [id, post.title, post.author])
        return record;
    }
    async deleteOne(id){
        const db = pgp(connection)
        const record = await db.one(
            'DELETE id, title, author FROM posts WHERE id=$1 RETURNING id, title, author', id)
        return record;
    }
}

module.exports = {PostsRepository};
