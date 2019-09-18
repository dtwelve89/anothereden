import React, { useContext } from 'react';
import Navbar from '../layout/Navbar';
import TypeFilters from '../layout/TypeFilters';
import Search from '../layout/Search';
import Gallery from '../layout/Gallery';
import CharacterContext from '../../context/character/characterContext';

const Home = () => {
  const characterContext = useContext(CharacterContext);

  const { characters, filtered } = characterContext;

  return (
    <div className='container'>
      <Navbar />
      <h1 className='text-center'>
        My Character Summons (
        {filtered === null ? characters.length : filtered.length})
      </h1>
      <br />
      <TypeFilters />
      <Search />
      {filtered === null ? (
        <Gallery characters={characters} />
      ) : (
        <Gallery characters={filtered} />
      )}
    </div>
  );
};

export default Home;
