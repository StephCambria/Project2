const sequelize = require('../config/connection');
// TODO: write data js files in seed folder
// TODO: import data


const seedAll = async () => {
  await sequelize.sync({ force: true });

  //await

  //await 

  process.exit(0);
};

seedAll();
