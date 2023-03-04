import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss';
import DropDown from '../DropDown/DropDown';
import dataCharacter from '../../data/classes';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetLevel, actionSetClass, actionSetHero } from '../../actions/characterActions'
import { actionDeleteAll } from '../../actions/spellActions'
import { actionSaveBuild } from '../../actions/buildActions';


function Info({buildName, updateBuildName, indexHero, updateIndexHero, errorMessage}) {

    const level = useSelector((fullState) => fullState.allBuilds.character.level);
    const classes = useSelector((fullState) => fullState.allBuilds.character.classes);
    const hero = useSelector((fullState) => fullState.allBuilds.character.hero);

   // const spells = useSelector((fullState) => fullState.spells.spells)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!buildName.trim()) {
            errorMessage("Veuillez choisir un nom pour votre build")
            return; 
          // pour ne pas envoyer le build si c'est vide.
        }
        /*const spellSet = spells.filter(spell => spell.value.length > 0);
        if(spellSet.length<9){
            errorMessage("Il vous faut au minimum 9 sorts")
            return;
        }*/
        dispatch(actionSaveBuild(buildName));
        
     };

    const handleOnchangeClass = (e) =>  {
        //met à jour la classe
        dispatch(actionSetClass(e.target.value))
        //trouve l'index de la classe qui correspond à l'element selectionné et le met dans le state
        const newIndex = dataCharacter.findIndex(element => element.value === e.target.value);
        updateIndexHero(newIndex);
        //change la valeur de l'hero par défaut 
        dispatch(actionSetHero(dataCharacter[newIndex].heros[0].value));
        //supprime tous les sorts
        dispatch(actionDeleteAll())
    }
    const handleOnchangeHero = (e) =>  {
        dispatch(actionSetHero(e.target.value))
        //supprime tous les sorts
        dispatch(actionDeleteAll())
    }

    return (
        <form className="info" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nom du build" 
                className="title"  
                value={buildName}
                onChange={(e) => updateBuildName(e.target.value)}
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
                    onChange={handleOnchangeHero}
                    options={dataCharacter[indexHero].heros} 
                />
                <input 
                type="number" 
                placeholder="Level" 
                className="level" 
                min="1"
                max="100" 
                value={level}
                onChange={(e) => dispatch(actionSetLevel(parseInt(e.target.value)))}
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
    buildName: PropTypes.string.isRequired,
    updateBuildName: PropTypes.func.isRequired,
    indexHero: PropTypes.number.isRequired,
    updateIndexHero: PropTypes.func.isRequired,
    errorMessage: PropTypes.func.isRequired,
};

Info.defaultProps = {
};

export default React.memo(Info);