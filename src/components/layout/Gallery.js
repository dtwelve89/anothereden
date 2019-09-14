import React from 'react';
import CharacterItem from './CharacterItem';
import './Gallery.css';

const Gallery = ({ squad }) => {
  return (
    <div className='main-gallery-section'>
      {squad.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Gallery;
