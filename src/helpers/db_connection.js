const dbConnection = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_USER,
    allowExitOnIdle: true
}
module.exports = dbConnection
