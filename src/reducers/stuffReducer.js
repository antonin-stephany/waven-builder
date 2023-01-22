import { SET_RING, DELETE_RING } from '../actions/stuffActions.js';

export const initialStateStuff = {
    rings:[
        {value:''},
        {value:''},
        {value:''},
        {value:''},
    ],   
    cuff:'',
};

// le initialState est donnée via la valeur par default du parametre dans le reducer
// Du coup il faut aussi donner une valeur par defaut à l'action
const stuffReducer = (state = initialStateStuff, action = {}) => { // <=== 
    switch(action.type){
        case SET_RING: {
            return {
                ...state,
                rings: state.rings.map(
                   (ring, i) => i === action.payload.label ? {...ring, value: action.payload.value}:ring
                )
            };
        }
        case DELETE_RING: {
            return {
                ...state,
                rings: state.rings.map(
                   (ring, i) => i === action.payload ? {...ring, value: ''}:ring
                )
            }
        }
        default: 
            return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
    }
}
export default stuffReducer;