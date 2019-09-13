import React from 'react';
import CharacterItem from './CharacterItem';

const Gallery = ({ squad }) => {
  return (
    <div>
      {squad.map(character => (
        <CharacterItem key={squad.id} character={character} />
      ))}
    </div>
  );
};

export default Gallery;
