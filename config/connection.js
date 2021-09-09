const Sequelize = require('sequelize');
// require dotenv??	
require('dotenv').config();	
// create connection to the db	

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com.amazonaws.com',
      dialect: 'mysql',
      port: 3306
    });


// export sequelize	
module.exports = sequelize;
