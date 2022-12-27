import React, { useContext, useReducer } from 'react';
//import PropTypes from 'prop-types';
import './Info.scss';

import DropDown from '../DropDown/DropDown';

//import useCharacterReducer, { actionSetField } from '../../hooks/useCharacterReducer';

import classes from '../../data/classes';

import CharacterContext from '../../contexts/CharactersContext';

const SET_FIELD = 'SET_FIELD';
const actionSetField = (name, value) => ({ type: SET_FIELD, payload: { name, value } });


const characterInitialState = {
  title: '',
  classes: classes[0].value,
  hero: 'test',
  level: 1,

};

function characterReducer(state, action) {
  switch (action.type) {
    case SET_FIELD: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      throw new Error('action not recognized');
    }
  }
}

function useCharacterReducer() {
  const [state, dispatch] = useReducer(characterReducer, characterInitialState);

  return [state, dispatch];
}

function Info() {
    const { addCharacter } = useContext(CharacterContext);
    const [state, dispatch] = useCharacterReducer();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addCharacter(state);
    };
    return (
        <form className="info" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nom du build" 
                className="title"  
                value={state.title}
                onChange={(e) => dispatch(actionSetField('title', e.target.value))}
            />
            <div className="icon-class">

            </div>
            <div className="class-level-container">
                <DropDown 
                    value={state.classes}
                    onChange={(value) => dispatch(actionSetField('classes', value))}
                    options={classes} 
                />
                <select className="hero" >
                    <option value="test">test</option>
                </select>
                <input 
                type="number" 
                placeholder="Level" 
                className="level"  
                value={state.level}
                onChange={(e) => dispatch(actionSetField('level', e.target.value))} 
                />
               
            </div>
            <button
                type="submit"
                className="build-save"
            >
                <p>Sauvegarder le build</p>
            </button>
        </form>
    );
}
  
Info.propTypes = {
};

Info.defaultProps = {
};

export default React.memo(Info);