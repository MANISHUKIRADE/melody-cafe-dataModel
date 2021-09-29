
module.exports = (sequelize, Sequelize) => {
  const PlayerQueue = sequelize.define('playerQueue', {
    playerId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    trackId: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return PlayerQueue;
};
