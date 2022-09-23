const pgp = require('pg-promise')();

const connection = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_USER,
    allowExitOnIdle: true
}
const db = pgp(connection)

module.exports = {db}
