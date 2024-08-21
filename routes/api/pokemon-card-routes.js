const router = require('express').Router();
const { PokemonCard, CardCategory, Tag, CardTag } = require('../../models');

// The `/api/pokemon-cards` endpoint

router.get('/', async (req, res) => {
  try {
    const cardData = await PokemonCard.findAll({
      include: [{ model: CardCategory }, { model: Tag }],
    });
    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cardData = await PokemonCard.findByPk(req.params.id, {
      include: [{ model: CardCategory }, { model: Tag }],
    });

    if (!cardData) {
      res.status(404).json({ message: 'No card found with this id!' });
      return;
    }

    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const card = await PokemonCard.create(req.body);

    if (req.body.tagIds.length) {
      const cardTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          card_id: card.id,
          tag_id,
        };
      });
      await CardTag.bulkCreate(cardTagIdArr);
    }
    res.status(200).json(card);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const card = await PokemonCard.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // find all associated tags from CardTag
    const cardTags = await CardTag.findAll({ where: { card_id: req.params.id } });

    // get list of current tag_ids
    const cardTagIds = cardTags.map(({ tag_id }) => tag_id);

    // create filtered list of new tag_ids
    const newCardTags = req.body.tagIds
      .filter((tag_id) => !cardTagIds.includes(tag_id))
      .map((tag_id) => {
        return {
          card_id: req.params.id,
          tag_id,
        };
      });

    // figure out which ones to remove
    const cardTagsToRemove = cardTags
      .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
      .map(({ id }) => id);

    // run both actions
    await Promise.all([
      CardTag.destroy({ where: { id: cardTagsToRemove } }),
      CardTag.bulkCreate(newCardTags),
    ]);

    res.json(card);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const cardData = await PokemonCard.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!cardData) {
      res.status(404).json({ message: 'No card found with this id!' });
      return;
    }

    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
