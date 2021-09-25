const { Sequelize} = require('sequelize');

class Connection{
    constructor(dilect,password,username,databaseName,host,port,logger){
        this.dilect = dilect;
        this.password = password;
        this.username = username;
        this.databaseName = databaseName;
        this.host = host;
        this.port = port;
        this.logger =logger;
        this.connection;
    }
     createConnection(){
        try{
            this.connection = new Sequelize(this.databaseName,this.username,this.password,{
                host: this.host,
                port: this.port,
                dialect: this.dilect,
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                  }
            })    
            return this.connection;
        }catch(err){
            this.logger.error(`[Connection]: Connection creation with error ${err}`)
            throw new Error('CONNECTION_ERROR')
        }
    }
    async closeConnection(){
        try{
            await this.connection.close()
            this.logger.info(`[Connection]: connection closed successfully`)
        }  catch(err){
           this.logger.error(`[Connection]: connection closed error `)
        }
       return;
    }
}

module.exports = Connection;