import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import './Info.scss';
import DropDown from '../DropDown/DropDown';
import dataCharacter from '../../data/classes';
import { useDispatch, useSelector } from 'react-redux';
import { actionSaveBuild, actionSetLevel, actionSetClass } from '../../actions/characterActions'


function Info() {
    const [inputTitle, setInputTitle] = useState('');
    const level = useSelector((fullState) => fullState.character.level);
    const classes = useSelector((fullState) => fullState.character.classes);
    const [inputClass, setInputClass] = useState(dataCharacter[0].value);
    const [labelHero, setLabelHero] = useState(0);
    const [inputHero, setInputHero] = useState(dataCharacter[0].heros[0].value);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTitle.trim()) {
          return; 
          // pour ne pas envoyer le build si c'est vide.
        }
        dispatch(
          actionSaveBuild(inputTitle, level, classes, inputHero),
        );

      };
      const handleOnchangeClass = (e) =>  {
        setInputClass(e.target.value)

        setLabelHero(dataCharacter.findIndex(element => element.value === e.target.value));
        console.log(labelHero);
        //change la valeur de l'hero par défaut 
        setInputHero(dataCharacter[labelHero].heros[0].value);
        console.log(inputHero);
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
                    value={inputClass}
                    onChange={handleOnchangeClass}
                    options={dataCharacter} 
                />
                <DropDown 
                    value={inputHero}
                    onChange={(e) => setInputHero(e.target.value)}
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
            <img src={`./assets/logo/${inputHero}.png`} />
 
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