const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID, // creo un id unico para diferenciarlo del id de la API externa
      defaultValue: DataTypes.UUIDV4, 
      primaryKey : true // check
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING, // or string?
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING, // or string?
      allowNull: false,
    },
    // should use camelcase to name tables
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
    // Agrego un campo image con una imagen por default?
  }, { timestamps: false});
};
