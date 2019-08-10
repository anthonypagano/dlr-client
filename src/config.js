exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://localhost:27017/dlr-quotes';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/dlr-quotes';
exports.PORT = process.env.PORT || 8080; 
exports.API_ORIGIN = 'http://localhost:8080/';