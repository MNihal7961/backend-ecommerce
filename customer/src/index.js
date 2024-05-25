const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async () => {

    const app = express();

    await databaseConnection();

    await expressApp(app);

    app.listen(PORT, () => {
        console.log("Customer Service Running ✅")
        console.log(`http://localhost:${8001}`)
    })
        .on('error', (err) => {
            console.log(`Error in customer ❌: ${err.message}`)
            process.exit(1)
        })
}

StartServer();