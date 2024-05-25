const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async () => {

    const app = express();

    await databaseConnection();

    await expressApp(app);

    app.listen(PORT, () => {
        console.log("Shopping Service Running ✅")
        console.log(`http://localhost:${PORT}`)
    })
        .on('error', (err) => {
            console.log(`Error in shopping ❌: ${err.message}`)
            process.exit(1)
        })
}

StartServer();