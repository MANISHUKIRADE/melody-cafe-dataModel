
module.exports = (sequelize, Sequelize)=>{
    const AlbumTrack = sequelize.define("albumTrackLink",{
        albumId:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        trackId:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return AlbumTrack;
}