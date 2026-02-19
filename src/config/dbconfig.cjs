require("dotenv").config();

module.exports = {
    development: {
        dialect: "mysql",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS || null,
        database: process.env.DB_NAME,
    },
    test: {
        dialect: "mysql",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS || null,
        database: process.env.DB_NAME,
    },
    production: {
        dialect: "mysql",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS || null,
        database: process.env.DB_NAME,
    },
};
