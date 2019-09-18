import React, { useReducer } from 'react';

import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import { GET_CHARACTERS, FILTER_CHARACTERS, CLEAR_FILTER } from '../types';
import characters from '../../data/characters';

const CharacterState = props => {
  const initialState = {
    characters
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Get Characters

  // Filter Characters

  // Clear Filter

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
