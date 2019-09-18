import React, { useReducer } from 'react';

import CharacterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  FILTER_CHARACTERS,
  TYPE_FILTER,
  WEAPON_FILTER,
  ACCESSORY_FILTER,
  LS_FILTER,
  CLEAR_FILTER
} from '../types';
import characters from '../../data/characters';

const CharacterState = props => {
  const initialState = {
    characters,
    filtered: null
  };

  const [state, dispatch] = useReducer(characterReducer, initialState);

  // Filter Characters
  const filterCharacters = text => {
    dispatch({ type: FILTER_CHARACTERS, payload: text });
  };

  // Filter Type
  const filterType = value => {
    dispatch({ type: TYPE_FILTER, payload: value });
  };

  // Filter Weapon
  const weaponType = value => {
    dispatch({ type: WEAPON_FILTER, payload: value });
  };

  // Filter Accessory
  const accessoryType = value => {
    dispatch({ type: ACCESSORY_FILTER, payload: value });
  };

  // Filter LS
  const lsType = value => {
    dispatch({ type: LS_FILTER, payload: value });
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
        filterType,
        weaponType,
        accessoryType,
        lsType,
        clearFilter
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
