const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Character = require('../models/Character');

// @route       GET /api/characters
// @desc        Get all users characters
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    const characters = await Character.find({ user: req.user.id });
    res.json(characters);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route       POST /api/characters
// @desc        Add new character
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      img,
      rarity,
      element,
      attackType,
      weaponType,
      accessoryType,
      lightShadowType
    } = req.body;

    try {
      const newCharacter = new Character({
        name,
        img,
        rarity,
        element,
        attackType,
        weaponType,
        accessoryType,
        lightShadowType,
        user: req.user.id
      });

      const character = await newCharacter.save();

      res.json(character);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       PUT /api/characters/:id
// @desc        Update character
// @access      Private
router.put('/:id', auth, async (req, res) => {
  const {
    name,
    img,
    rarity,
    element,
    attackType,
    weaponType,
    accessoryType,
    lightShadowType
  } = req.body;

  // Build character object
  const characterFields = {};
  if (name) characterFields.name = name;
  if (img) characterFields.img = img;
  if (rarity) characterFields.rarity = rarity;
  if (element) characterFields.element = element;
  if (attackType) characterFields.attackType = attackType;
  if (weaponType) characterFields.weaponType = weaponType;
  if (accessoryType) characterFields.accessoryType = accessoryType;
  if (lightShadowType) characterFields.lightShadowType = lightShadowType;

  try {
    let character = await Character.findById(req.params.id);

    if (!character) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure user owns the character
    if (character.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    character = await Character.findByIdAndUpdate(
      req.params.id,
      { $set: characterFields },
      { new: true }
    );

    res.json(character);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE /api/characters/:id
// @desc        Delete character
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let character = await Character.findById(req.params.id);

    if (!character) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure user owns the character
    if (character.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Character.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Character removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
