import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';
import characterReducer from './characterReducer'
import spellsReducer from './spellsReducer'
import stuffReducer from './stuffReducer'
import { SAVE_BUILD } from '../actions/buildActions.js';

export const initialStateBuild = {
    build:[],   
};

const buildReducer = reduceReducers(
    combineReducers({
        character: characterReducer,
        spells: spellsReducer,
        stuff: stuffReducer,
    }),
    // cross-cutting concerns because here `state` is the whole state tree
  (state = initialStateBuild, action = {}) => {
    switch (action.type) {
      case SAVE_BUILD: {
        return {
            ...state,
            build: "[state.spells, state.character, state.stuff]",
            truc: "hello",
        }
      }
      default: 
      return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
    }
  }
);

export default buildReducer