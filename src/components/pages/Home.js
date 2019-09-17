import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import TypeFilters from '../layout/TypeFilters';
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

  const filterType = type => {
    setFiltered(characters.filter(character => character.element === type));
  };

  const weaponType = type => {
    setFiltered(characters.filter(character => character.weaponType === type));
  };

  const accessoryType = type => {
    setFiltered(
      characters.filter(character => character.accessoryType === type)
    );
  };

  const lsType = type => {
    setFiltered(
      characters.filter(character => character.lightShadowType === type)
    );
  };

  const resetFilter = () => {
    setFiltered(null);
  };

  return (
    <div className='container'>
      <Navbar />
      <TypeFilters
        filtered={filtered}
        filterType={filterType}
        weaponType={weaponType}
        accessoryType={accessoryType}
        lsType={lsType}
        resetFilter={resetFilter}
      />
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
