import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import './Info.scss';
import DropDown from '../DropDown/DropDown';
import classes from '../../data/classes';
import { useDispatch } from 'react-redux';
import { actionSaveBuild } from '../../actions/characterActions'


function Info() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputLevel, setInputLevel] = useState(1);
    const [inputClass, setInputClass] = useState(classes[0].value);
    const [labelHero, setLabelHero] = useState(0);
    const [inputHero, setInputHero] = useState(classes[0].heros[0].value);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTitle.trim()) {
          return; 
          // pour ne pas envoyer le build si c'est vide.
        }
        dispatch(
          actionSaveBuild(inputTitle, inputLevel, inputClass, inputHero),
        );

      };
      const handleOnchangeClass = (e) =>  {
        //met à joru le state Classe
        setInputClass(e.target.value);
        //trouve l'index de la classe qui correspond à l'element selectionné et le met dans le state
        setLabelHero(classes.findIndex(element => element.value === e.target.value));
        //change la valeur de l'hero par défaut 
        setInputHero(classes[labelHero].heros[0].value);

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
                    options={classes} 
                />
                <DropDown 
                    value={inputHero}
                    onChange={(e) => setInputHero(e.target.value)}
                    options={classes[labelHero].heros} 
                />
                <input 
                type="number" 
                placeholder="Level" 
                className="level" 
                min="1"
                max="100" 
                value={inputLevel}
                onChange={(e) => setInputLevel(e.target.value)}
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