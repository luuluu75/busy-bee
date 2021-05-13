const { Sequelize, DataTypes } = require('sequelize');

const Calendar = Sequelize.define("calendar", {
    cal_id: {
        type: DataTypes.INTEGER, AUTO_INCREMENT, PRIMARY_KEY,
    },
    cal_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    define: {
        freezeTableName: true
    }
  });

  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();
// `sequelize.define` also returns the model
console.log(Calendar === sequelize.models.Calendar); // true

module.exports = Calendar;


