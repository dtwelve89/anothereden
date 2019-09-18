import { GET_CHARACTERS, FILTER_CHARACTERS, CLEAR_FILTER } from '../types';

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
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
