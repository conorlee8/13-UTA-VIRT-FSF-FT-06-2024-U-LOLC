const router = require('express').Router();
const cardCategoryRoutes = require('./api/card-category-routes');
const pokemonCardRoutes = require('./api/pokemon-card-routes');
const tagRoutes = require('./api/tag-routes');

router.use('/card-categories', cardCategoryRoutes);
router.use('/pokemon-cards', pokemonCardRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
