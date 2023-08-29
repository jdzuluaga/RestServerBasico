const express = require('express')
var cors = require('cors')

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT 
        this.usersRoutesPath = '/api/user';
        // Middleware
        this.middleware();

        // Rutas de la aplicacion
        this.routes();
    }

    middleware(){
        // CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json() );
        // Directorio
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersRoutesPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Lsitening on port ',this.port);
        })
    }

}


module.exports = Server;