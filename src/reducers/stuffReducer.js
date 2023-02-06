import { SET_ITEM, DELETE_ITEM } from '../actions/stuffActions.js';

export const initialStateStuff = {
    ring:[
        {value:''},
        {value:''},
        {value:''},
        {value:''},
    ],   
    cuff:[
        {value:''},
    ],
    companion:[
        {value:''},
        {value:''},
        {value:''},
        {value:''},
    ]
};

// le initialState est donnée via la valeur par default du parametre dans le reducer
// Du coup il faut aussi donner une valeur par defaut à l'action
const stuffReducer = (state = initialStateStuff, action = {}) => { // <=== 
    switch(action.type){
        case SET_ITEM: {
            return {
                ...state,
                [action.payload.type]: state[action.payload.type].map(
                   (item, i) => i === action.payload.index ? {...item, value: action.payload.value}:item
                )
            };
        }
        case DELETE_ITEM: {
            return {
                ...state,
                [action.payload.type]: state[action.payload.type].map(
                   (item, i) => i === action.payload.index ? {...item, value: ''}:item
                )
            }
        }
        default: 
            return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
    }
}
export default stuffReducer;