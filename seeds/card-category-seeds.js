const { CardCategory } = require('../models');

const categoryData = [
  {
    category_name: 'Base Set',
  },
  {
    category_name: 'Jungle',
  },
  {
    category_name: 'Fossil',
  },
  {
    category_name: 'Team Rocket',
  },
  {
    category_name: 'Gym Heroes',
  },
];

const seedCardCategories = () => CardCategory.bulkCreate(categoryData);

module.exports = seedCardCategories;
