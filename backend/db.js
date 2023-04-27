var mysql = require("mysql");
var pool = mysql.createPool({
   connectLimit : 10,
    host: 'mysql',
    user: 'root',
    password: 'johnahn',
    database: 'myapp',
});
exports.pool = pool;