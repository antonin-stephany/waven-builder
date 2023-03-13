import { SET_CLASS, SET_LEVEL, SET_HERO } from '../actions/characterActions';
import classes from '../data/classes';

export const initialStateCharacter = {
    title: '',
    classes: classes[0].value,
    hero: classes[0].heros[0].value,
    level: 1,  
};

// le initialState est donnée via la valeur par default du parametre dans le reducer
// Du coup il faut aussi donner une valeur par defaut à l'action
const characterReducer = (state = initialStateCharacter, action = {}) => { // <=== 
    switch(action.type){
        case SET_LEVEL: {
            return {
                ...state,
                level: action.payload,
            }
        }
        case SET_CLASS: {
            return {
                ...state,
                classes: action.payload,
            }
        }
        case SET_HERO: {
            return {
                ...state,
                hero: action.payload,
            }
        }
        default: 
            return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
    }
}
export default characterReducer;