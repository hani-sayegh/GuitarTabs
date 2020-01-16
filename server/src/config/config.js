const path = require('path');

module.exports = {
    PORT: process.env.Port || 9000,
    db:
    {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options:
        {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../tabtracker.sqlite')
        }
    },
    authentication:
    {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}