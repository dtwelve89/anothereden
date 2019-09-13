import React from 'react';
import './CharacterItem.css';

const CharacterItem = ({ character }) => {
  return (
    <figure className='item'>
      {/* <img src={character.img} alt='Character' /> */}
      <div className='character-description'>
        <h2 className='text-center'>{character.name}</h2>
        <ul>
          <li>Rarity: {character.rarity}</li>
          <li>Element: {character.element}</li>
          <li>Attack Type: {character.attackType}</li>
          <li>Weapon Type: {character.weaponType}</li>
          <li>Accessory Type: {character.accessoryType}</li>
          <li>Light/Shadow Type: {character.lightShadowType}</li>
          <li>Personalities: {character.personalities}</li>
        </ul>
      </div>
    </figure>
  );
};

export default CharacterItem;
