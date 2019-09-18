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
router.post('/', (req, res) => {
  res.send('Add character');
});

// @route       PUT /api/characters/:id
// @desc        Update character
// @access      Private
router.put('/', (req, res) => {
  res.send('Update character');
});

// @route       DELETE /api/characters/:id
// @desc        Delete character
// @access      Private
router.delete('/', (req, res) => {
  res.send('Delete character');
});

module.exports = router;
