import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import Search from '../layout/Search';
import Gallery from '../layout/Gallery';
import characters from '../../data/characters';

const Home = () => {
  const [filtered, setFiltered] = useState(null);

  const filterCharacters = text => {
    const regex = new RegExp(text, 'gi');
    setFiltered(
      characters.filter(character => {
        return character.name.match(regex);
      })
    );
  };

  const resetFilter = () => {
    setFiltered(null);
  };

  console.log('Test');

  return (
    <div className='container'>
      <Navbar />
      <h1 className='text-center'>
        My Character Summons (
        {filtered === null ? characters.length : filtered.length})
      </h1>
      <Search filterCharacters={filterCharacters} resetFilter={resetFilter} />
      {filtered === null ? (
        <Gallery characters={characters} />
      ) : (
        <Gallery characters={filtered} />
      )}
    </div>
  );
};

export default Home;
