const mysql = require('mysql');
const enviroment = require('./enviroment');

class MySQL {
    
    connection;

    static initConnection(){
        try {
            this.connection = mysql.createConnection({
                host: enviroment.DB_HOST,
                database: enviroment.DB_NAME,
                user: enviroment.DB_USER,
                password: enviroment.DB_PASS
            }); 
            this.connection.connect();
        } catch (err) {
            throw(err);
        }
    }

    static closeConnection(){
        this.connection.end();
    }


    static doQuery(query,values){
        this.initConnection();
        return new Promise((resolve,reject) => {
            this.connection.query(query,values,(err,results) => {
                if(err) reject(err);
                else resolve(results);
                this.closeConnection();
            });
        });
    }
}

module.exports = MySQL;