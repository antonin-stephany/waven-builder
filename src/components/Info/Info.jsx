import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import './Info.scss';
import DropDown from '../DropDown/DropDown';
import dataCharacter from '../../data/classes';
import { useDispatch, useSelector } from 'react-redux';
import { actionSaveBuild, actionSetLevel, actionSetClass, actionSetHero } from '../../actions/characterActions'


function Info() {
    const [inputTitle, setInputTitle] = useState('');
    const level = useSelector((fullState) => fullState.character.level);
    const classes = useSelector((fullState) => fullState.character.classes);
    const [labelHero, setLabelHero] = useState(0);
    const hero = useSelector((fullState) => fullState.character.hero);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputTitle.trim()) {
          return; 
          // pour ne pas envoyer le build si c'est vide.
        }
        dispatch(
          actionSaveBuild(inputTitle),
        );
     };

    const handleOnchangeClass = (e) =>  {
        //met à jour la classe
        dispatch(actionSetClass(e.target.value))
        //trouve l'index de la classe qui correspond à l'element selectionné et le met dans le state
        const newLabel = dataCharacter.findIndex(element => element.value === e.target.value);
        setLabelHero(newLabel);
        //change la valeur de l'hero par défaut 
        dispatch(actionSetHero(dataCharacter[newLabel].heros[0].value));
    }

    return (
        <form className="info" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nom du build" 
                className="title"  
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
            />
            <div className="icon-class">

            </div>
            <div className="class-level-container">
                <DropDown 
                    value={classes}
                    onChange={handleOnchangeClass}
                    options={dataCharacter} 
                />
                <DropDown 
                    value={hero}
                    onChange={(e) => dispatch(actionSetHero(e.target.value))}
                    options={dataCharacter[labelHero].heros} 
                />
                <input 
                type="number" 
                placeholder="Level" 
                className="level" 
                min="1"
                max="100" 
                value={level}
                onChange={(e) => dispatch(actionSetLevel(e.target.value))}
                />
               
            </div>
            <img src={`./assets/logo/${classes}/${hero}.png`} />
 
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