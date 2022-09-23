const pgp = require('pg-promise')();
const connection = require('../helpers/db_connection');

class UsersRepository{
    async getAll() {
        ;
        const records = await db.many('SELECT id, full_name, phone FROM users');
        return records;
    }
    async getOne(id){
        ;
        const record = await db.one(
            'SELECT id, full_name, phone FROM users WHERE id=$1',
            id
        )
        return record;
    }
    async create(user){
        ;
        const record = await db.one(
            'INSERT INTO users (full_name, phone, password) VALUES ($1, $2, $3) RETURNING id, full_name, phone',
            [user.full_name, user.phone, user.password]
        )
        return record;
    }
    async replaceOne(user){
        ;
        const record = await db.one(
            'UPDATE users SET full_name=$2, phone=$3 WHERE id=$1 RETURNING id, full_name, phone',
            [user.id, user.full_name, user.phone]
        )
        return record;
    }
    async updateOne(id, user){

        const record = await db.one(
            'UPDATE users SET full_name=$2, phone=$3 WHERE id=$1 RETURNING id, full_name, phone',
            [id, user.full_name, user.phone])
        return record;
    }
    async deleteOne(id){

        const record = await db.one(
            'DELETE id, full_name, phone FROM users WHERE id=$1 RETURNING id, full_name, phone', id)
        return record;
    }
}
module.exports = {UsersRepository};

