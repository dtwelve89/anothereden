import React from 'react';
import './CharacterItem.css';

const CharacterItem = ({ character }) => {
  // const flipItem = () => {
  //   let itemInner = document.querySelector('.item-inner');
  //   itemInner.classList.add('flip-item');
  // };

  return (
    <figure className='item'>
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
            <li>Light/Shadow Type: {character.lightShadowType}</li>
            {/* <li>Personalities: {character.personalities}</li> */}
          </ul>
        </div>
      </div>
    </figure>
  );
};

export default CharacterItem;
