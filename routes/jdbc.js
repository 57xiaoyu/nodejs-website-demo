var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'node_cms'
});

exports.pool=pool;
