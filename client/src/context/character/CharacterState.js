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
  const filterType = type => {
    dispatch({ type: TYPE_FILTER, payload: type });
  };

  // Filter Weapon
  const weaponType = type => {
    dispatch({ type: WEAPON_FILTER, payload: type });
  };

  // Filter Accessory
  const accessoryType = type => {
    dispatch({ type: ACCESSORY_FILTER, payload: type });
  };

  // Filter LS
  const lsType = type => {
    dispatch({ type: LS_FILTER, payload: type });
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
