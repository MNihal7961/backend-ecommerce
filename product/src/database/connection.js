const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async () => {

    try {
        await mongoose.connect(String(DB_URL));

        console.log('ProductDB ✅');

    } catch (error) {
        console.log(`ProductDB ❌: ${error?.message}`);
        process.exit(1);
    }

};