import React, { useReducer } from 'react';

import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import { FILTER_CHARACTERS, CLEAR_FILTER } from '../types';
import characters from '../../data/characters';

const CharacterState = props => {
  const initialState = {
    characters,
    filtered: null
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Get Characters

  // Filter Characters
  const filterCharacters = text => {
    dispatch({ type: FILTER_CHARACTERS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        filtered: state.filtered,
        filterCharacters,
        clearFilter
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
