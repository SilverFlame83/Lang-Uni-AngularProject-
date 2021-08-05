const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3000,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/languni',
        COOKIE_NAME: 'SESSION_TOKEN',
        TOKEN_SECRET: 'very secure',
    },
    production: {}
};

module.exports = config[env];