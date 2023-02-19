export const initialStateSpells = {
    spells:[
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
        {value:''},
    ],   
};

// le initialState est donnée via la valeur par default du parametre dans le reducer
// Du coup il faut aussi donner une valeur par defaut à l'action
const spellsReducer = (state = initialStateSpells, action = {}) => { // <=== 
    switch(action.type){

        default: 
            return state; // <=== Dans le default, pas de throw Error, il faut retourner le state.
    }
}
export default spellsReducer;