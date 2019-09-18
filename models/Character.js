const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  rarity: {
    type: Number,
    required: true
  },
  element: {
    type: String,
    required: true
  },
  attackType: {
    type: String,
    required: true
  },
  weaponType: {
    type: String,
    required: true
  },
  accessoryType: {
    type: String,
    required: true
  },
  lightShadowType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('character', CharacterSchema);
