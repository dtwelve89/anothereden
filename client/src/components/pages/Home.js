import React, { useState, useContext } from 'react';
import Navbar from '../layout/Navbar';
import TypeFilters from '../layout/TypeFilters';
import Search from '../layout/Search';
import Gallery from '../layout/Gallery';
import CharacterContext from '../../context/character/characterContext';

const Home = () => {
  const characterContext = useContext(CharacterContext);

  const { characters, filtered } = characterContext;

  // const [filtered, setFiltered] = useState(null);

  // const filterType = type => {
  //   setFiltered(characters.filter(character => character.element === type));
  // };

  // const weaponType = type => {
  //   setFiltered(characters.filter(character => character.weaponType === type));
  // };

  // const accessoryType = type => {
  //   setFiltered(
  //     characters.filter(character => character.accessoryType === type)
  //   );
  // };

  // const lsType = type => {
  //   setFiltered(
  //     characters.filter(character => character.lightShadowType === type)
  //   );
  // };

  return (
    <div className='container'>
      <Navbar />
      <h1 className='text-center'>
        My Character Summons (
        {filtered === null ? characters.length : filtered.length})
      </h1>
      <br />
      <TypeFilters
        filtered={filtered}
        // filterType={filterType}
        // weaponType={weaponType}
        // accessoryType={accessoryType}
        // lsType={lsType}
      />
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
