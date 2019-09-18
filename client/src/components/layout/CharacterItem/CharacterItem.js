import React from 'react';
import './CharacterItem.css';

const CharacterItem = ({ character }) => {
  const flipCard = () => {
    console.log(character);
  };

  return (
    <figure className='item' onClick={() => flipCard()}>
      <div className='item-inner'>
        <div className='item-front'>
          <img src={character.img} alt='Character' />
          <h2 className='text-center text-uppercase'>{character.name}</h2>
        </div>
        <div className='item-back'>
          <ul>
            <h2 className='text-center text-uppercase'>{character.name}</h2>
            <li>Rarity: {character.rarity}</li>
            <li>Element: {character.element}</li>
            <li>Attack Type: {character.attackType}</li>
            <li>Weapon Type: {character.weaponType}</li>
            <li>Accessory Type: {character.accessoryType}</li>
            <li>L/S Type: {character.lightShadowType}</li>
          </ul>
        </div>
      </div>
    </figure>
  );
};

export default CharacterItem;
