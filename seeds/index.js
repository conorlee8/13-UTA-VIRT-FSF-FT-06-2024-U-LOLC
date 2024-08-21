const seedCardCategories = require('./card-category-seeds');
const seedPokemonCards = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedCardTags = require('./card-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced!');

  await seedCardCategories();
  console.log('Card Categories seeded!');

  await seedPokemonCards();
  console.log('Pokemon Cards seeded!');

  await seedTags();
  console.log('Tags seeded!');

  await seedCardTags();
  console.log('Card Tags seeded!');

  process.exit(0);
};

seedAll();
