const { CardTag } = require('../models');

const cardTagData = [
  {
    card_id: 1,
    tag_id: 1,  // Charizard - Holo
  },
  {
    card_id: 1,
    tag_id: 2,  // Charizard - Rare
  },
  {
    card_id: 2,
    tag_id: 3,  // Pikachu - First Edition
  },
  {
    card_id: 3,
    tag_id: 4,  // Bulbasaur - Mint Condition
  },
  {
    card_id: 4,
    tag_id: 5,  // Jigglypuff - Promo
  },
  {
    card_id: 5,
    tag_id: 6,  // Mewtwo - Shadowless
  },
];

const seedCardTags = () => CardTag.bulkCreate(cardTagData);

module.exports = seedCardTags;
