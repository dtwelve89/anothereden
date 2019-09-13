import React from 'react';

const CharacterItem = ({ character }) => {
  return (
    <figure>
      <img src={character.img} alt='Character' />
      <div className='character-description'>
        <h3>{character.name}</h3>
        <li>Rarity: {character.rarity}</li>
        <li>Element: {character.element}</li>
        <li>Attack Type: {character.attackType}</li>
        <li>Weapon Type: {character.weaponType}</li>
        <li>Accessory Type: {character.accessoryType}</li>
        <li>Light/Shadow Type: {character.lightShadowType}</li>
        <li>Personalities: {character.personalities}</li>
      </div>
    </figure>
  );
};

export default CharacterItem;
