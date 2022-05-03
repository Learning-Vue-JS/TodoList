require('dotenv').config();
exports.PORT = process.env.PORT || 8081;
exports.MONGO_URL = process.env.MONGO_URL;