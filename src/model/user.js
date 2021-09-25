
module.exports = (sequelize, Sequelize)=>{
    const User = sequelize.define("user",{
        id:{
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        firstName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName:{
            type: Sequelize.STRING,
        },
        userName:{
            type: Sequelize.STRING,
            allowNull:false
        },
        createdAt:{
            type: Sequelize.DATE,
            allowNull:false
        },
        userType:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return User;
}