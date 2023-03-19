import {
  SET_SPELL,
  DELETE_SPELL,
  DELETE_ALL,
} from '../actions/spellActions.js';

export const initialStateSpells = {
  spells: [
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
  ],
};

// le initialState est donnée via la valeur par default du parametre dans le reducer
// Du coup il faut aussi donner une valeur par defaut à l'action
const spellsReducer = (state = initialStateSpells, action = {}) => {
  // <===
  switch (action.type) {
    case SET_SPELL: {
      return {
        ...state,
        spells: state.spells.map((spell, i) =>
          i === action.payload.index
            ? { ...spell, value: action.payload.value }
            : spell
        ),
      };
    }
    case DELETE_SPELL: {
      return {
        ...state,
        spells: state.spells.map((spell, i) =>
          i === action.payload ? { ...spell, value: '' } : spell
        ),
      };
    }
    case DELETE_ALL: {
      return {
        ...initialStateSpells,
      };
    }
    default:
      return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
  }
};
export default spellsReducer;
