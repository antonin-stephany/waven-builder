import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';
import characterReducer from './characterReducer'
import spellsReducer from './spellsReducer'
import stuffReducer from './stuffReducer'
import { SAVE_BUILD, DELETE_BUILD, SET_BUILD, SAVE_AGAIN_BUILD } from '../actions/buildActions.js';

const buildsReducer = reduceReducers(
    combineReducers({
        id: (state = "") => state,
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
            id: action.payload.id,
            character: {
              ...state.character,
              title: action.payload.title
            },
            savedBuilds: [
                      ...state.savedBuilds,
                      {
                        id: action.payload.id,
                        character:{
                          ...state.character,
                          title:action.payload.title
                        },
                        spells: state.spells, 
                        stuff: state.stuff
                      }
            ]       
        }
      }
      case SAVE_AGAIN_BUILD: {
        return {
          ...state,
          savedBuilds: state.savedBuilds.map((build) => build.id === action.payload.id ?  {
            id: state.id, 
            character:{
              ...state.character,
              title:action.payload.title
            },
            spells:state.spells, 
            stuff:state.stuff
          }: build)
        }
      }
      case DELETE_BUILD: {
        return {
          ...state,
          savedBuilds: state.savedBuilds.filter((_, i) => i !== action.payload)
       }
      }
      case SET_BUILD: {
        return {
          ...state.savedBuilds[action.payload],
            savedBuilds: state.savedBuilds
        }
      }
      default: 
      return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
    }
  }
);

export default buildsReducer