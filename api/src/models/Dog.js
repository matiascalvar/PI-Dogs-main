const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://i.ibb.co/x1KPxfT/anoir-chafik-2-3c4d-IFYFU-unsplash.jpg"
    }
  }, { timestamps: false});
};
