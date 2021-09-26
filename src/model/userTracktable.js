
module.exports = (sequelize, Sequelize)=>{
    const userTrackLink = sequelize.define("userTrackLink",{
        userId:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        trackId:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return userTrackLink;
}