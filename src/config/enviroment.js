if(process.env.NODE_ENV != 'production') require('dotenv').config();

const enviroment = {
    APP_NAME:       process.env.APP_NAME,
    PORT:           process.env.PORT,
    DB_HOST:        process.env.DB_HOST,
    DB_NAME:        process.env.DB_NAME,
    DB_USER:        process.env.DB_USER,
    DB_PASS:        process.env.DB_PASS
}

module.exports = enviroment;