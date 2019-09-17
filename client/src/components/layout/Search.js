import React, { useRef, useEffect } from 'react';
import './Search.css';

const Search = ({ filtered, filterCharacters, resetFilter }) => {
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
      resetFilter();
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
