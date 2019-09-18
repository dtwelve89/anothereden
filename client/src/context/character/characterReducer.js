import {
  GET_CHARACTERS,
  FILTER_CHARACTERS,
  TYPE_FILTER,
  WEAPON_FILTER,
  ACCESSORY_FILTER,
  LS_FILTER,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false
      };
    case FILTER_CHARACTERS:
      return {
        ...state,
        filtered: state.characters.filter(character => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return character.name.match(regex);
        })
      };
    case TYPE_FILTER:
      return {
        ...state,
        filtered: state.characters.filter(
          character => character.element === action.payload
        )
      };
    case WEAPON_FILTER:
      return {
        ...state,
        filtered: state.characters.filter(
          character => character.weaponType === action.payload
        )
      };
    case ACCESSORY_FILTER:
      return {
        ...state,
        filtered: state.characters.filter(
          character => character.accessoryType === action.payload
        )
      };
    case LS_FILTER:
      return {
        ...state,
        filtered: state.characters.filter(
          character => character.lightShadowType === action.payload
        )
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
