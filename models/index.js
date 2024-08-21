const CardCategory = require('./CardCategory');
const PokemonCard = require('./PokemonCard');
const Tag = require('./Tag');
const CardTag = require('./CardTag');

// Associations
PokemonCard.belongsTo(CardCategory, {
  foreignKey: 'category_id',
});

PokemonCard.belongsToMany(Tag, {
  through: CardTag,
  foreignKey: 'card_id',
});

Tag.belongsToMany(PokemonCard, {
  through: CardTag,
  foreignKey: 'tag_id',
});

CardCategory.hasMany(PokemonCard, {
  foreignKey: 'category_id',
});

module.exports = { CardCategory, PokemonCard, Tag, CardTag };
