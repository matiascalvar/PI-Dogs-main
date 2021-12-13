const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', { // change to 'raza'?
    id: {
      type: DataTypes.UUID, // creo un id unico para diferenciarlo del id de la API externa
      defaultValue: DataTypes.UUIDV1, 
      allowNull: false,
      primaryKey : true // check
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.SMALLINT, // or string?
      allowNull: false,
    },
    weight: {
      type: DataTypes.SMALLINT, // or string?
      allowNull: false,
    },
    // should use camelcase to name tables
    life_span: {
      type: DataTypes.SMALLINT,
    },
    // Agrego un campo image con una imagen por default?
  });
};
