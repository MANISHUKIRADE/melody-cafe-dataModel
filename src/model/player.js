
module.exports = (sequelize, Sequelize)=>{
    const Player = sequelize.define("player",{
        id:{
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        playerStatus:{
            type: Sequelize.ENUM({
                values: ['play', 'pause']
              }),
            allowNull: false
        },
        isRepeated:{
          type: Sequelize.BOOLEAN
        },
        shuffle:{
         type: Sequelize.BOOLEAN
        }
    })
    return Player;
}