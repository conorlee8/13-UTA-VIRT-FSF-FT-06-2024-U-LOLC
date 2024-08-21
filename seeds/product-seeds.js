const { PokemonCard } = require('../models');

const productData = [
  {
    card_name: 'Charizard',
    price: 299.99,
    stock: 5,
    category_id: 1,
  },
  {
    card_name: 'Pikachu',
    price: 99.99,
    stock: 20,
    category_id: 1,
  },
  {
    card_name: 'Bulbasaur',
    price: 49.99,
    stock: 15,
    category_id: 2,
  },
  {
    card_name: 'Jigglypuff',
    price: 39.99,
    stock: 25,
    category_id: 3,
  },
  {
    card_name: 'Mewtwo',
    price: 199.99,
    stock: 10,
    category_id: 4,
  },
];

const seedPokemonCards = () => PokemonCard.bulkCreate(productData);

module.exports = seedPokemonCards;
