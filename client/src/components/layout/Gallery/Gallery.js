import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import './Gallery.css';

const Gallery = ({ characters }) => {
  return (
    <div className='main-gallery-section'>
      {characters.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Gallery;
