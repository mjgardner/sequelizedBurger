module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    timestamps: false
  });

  return Burger;
};
