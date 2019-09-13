import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import Search from '../layout/Search';
import Gallery from '../layout/Gallery';
import squad from '../../data/squad';

const Home = () => {
  const [filtered, setFiltered] = useState(null);

  const filterCharacters = text => {
    const regex = new RegExp(text, 'gi');
    setFiltered(
      squad.filter(character => {
        return character.name.match(regex);
      })
    );
  };

  const resetFilter = () => {
    setFiltered(null);
  };

  return (
    <div className='container'>
      <Navbar />
      <h1 className='text-center'>My Character Squad</h1>
      <Search filterCharacters={filterCharacters} resetFilter={resetFilter} />
      {filtered === null ? (
        <Gallery squad={squad} />
      ) : (
        <Gallery squad={filtered} />
      )}
    </div>
  );
};

export default Home;
