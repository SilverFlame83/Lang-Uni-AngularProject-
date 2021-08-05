const express = require('express');

const config = require('./config/config');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');


start();
async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);


    app.listen(config.PORT, () => {
        console.log('Server is listening on port 3000');
    });

}