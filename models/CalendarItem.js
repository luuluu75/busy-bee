const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const CalendarItem = sequelize.define("calendarItem", {
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_cat: {
        type: DataTypes.INTEGER
    },
    item_desc: {
        type: DataTypes.TEXT
    },
    item_date: {
        type: DataTypes.DATEONLY
    },
    item_time: {
        type: DataTypes.INTEGER
    },
    cal_id: {
        type: DataTypes.INTEGER
    },
    created_by: {
        type: DataTypes.INTEGER
    },
    isPrivate: {
        type: DataTyps.BOOLEAN
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
console.log(CalendarItem === sequelize.models.CalendarItem); // true