const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const enviroment = require('../config/enviroment');
const routers = require('../routers/index.router.js');

class Server {
    app;
    port;

    constructor(){
        this.initApp();
        this.initRoutes();
        this.port = enviroment.PORT;
    }

    initApp(){
        this.app = express();
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(compression());
    }

    initRoutes(){
        this.app.use('/api',routers);
    }

    start(){
        this.app.listen(this.port,(err)=>{
            if(err) throw err;
            console.log(`Server is running in the port ${this.port}`);
        });
    }
}

module.exports = Server;