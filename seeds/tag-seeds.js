const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Holo',
  },
  {
    tag_name: 'Rare',
  },
  {
    tag_name: 'First Edition',
  },
  {
    tag_name: 'Mint Condition',
  },
  {
    tag_name: 'Promo',
  },
  {
    tag_name: 'Shadowless',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
