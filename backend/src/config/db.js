const mysql = require('mysql');

const dbConfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'productDB'
};

const db = mysql.createConnection(dbConfig);
db.connect(function(err){
    console.log('database connected')
})

module.exports = db;