import React, { useContext, useRef, useEffect } from 'react';
import CharacterContext from '../../context/character/characterContext';
import './Search.css';

const Search = () => {
  const characterContext = useContext(CharacterContext);

  const { filtered, filterCharacters, clearFilter } = characterContext;

  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterCharacters(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Search Characters...'
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
