
module.exports = (sequelize, Sequelize) => {
  const Notification = sequelize.define('notification', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    data: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
  return Notification;
};
