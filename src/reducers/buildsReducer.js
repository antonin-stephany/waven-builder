import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';
import characterReducer from './characterReducer'
import spellsReducer from './spellsReducer'
import stuffReducer from './stuffReducer'
import uniqid from 'uniqid';
import { SAVE_BUILD, DELETE_BUILD } from '../actions/buildActions.js';

const buildsReducer = reduceReducers(
    combineReducers({
        character: characterReducer,
        spells: spellsReducer,
        stuff: stuffReducer,
        savedBuilds: (state = []) => state,
    }),
    // cross-cutting concerns because here `state` is the whole state tree
  (state, action = {}) => {
    switch (action.type) {
      case SAVE_BUILD: {
        return {
            ...state,
            savedBuilds: [
                      ...state.savedBuilds,
                      {
                        id: uniqid(),
                        character: state.character, 
                        spells: state.spells, 
                        stuff: state.stuff
                      }
            ]       
        }
      }
      case DELETE_BUILD: {
        return {
          ...state,
          savedBuilds: state.savedBuilds.filter((_, i) => i !== action.payload)
       }
      }
      default: 
      return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
    }
  }
);

export default buildsReducer