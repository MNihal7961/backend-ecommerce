const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async () => {

    try {
        await mongoose.connect(String(DB_URL));

        console.log('ShoppingDB ✅');

    } catch (error) {
        console.log(`ShoppingDB ❌: ${error?.message}`);
        process.exit(1);
    }

};