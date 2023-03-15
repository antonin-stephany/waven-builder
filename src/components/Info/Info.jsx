import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss';
import DropDown from '../DropDown/DropDown';
import dataCharacter from '../../data/classes';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetLevel, actionSetClass, actionSetHero } from '../../actions/characterActions'
import { actionDeleteAll } from '../../actions/spellActions'
import { actionSaveBuild, actionSaveAgainBuild, actionNewBuild } from '../../actions/buildActions';
import uniqid from 'uniqid';
import { compareCurrentAndSavedbuild } from '../../tools/compareArray';

function Info({buildName, updateBuildName, indexHero, updateIndexHero, errorMessage, handleModal}) {
    const level = useSelector((fullState) => fullState.allBuilds.character.level);
    const classes = useSelector((fullState) => fullState.allBuilds.character.classes);
    const hero = useSelector((fullState) => fullState.allBuilds.character.hero);
    const idBuild = useSelector((fullState) => fullState.allBuilds.id);
    const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
    const character = useSelector((fullState) => fullState.allBuilds.character);
    const spells = useSelector((fullState) => fullState.allBuilds.spells);
    const stuff = useSelector((fullState) => fullState.allBuilds.stuff);

   // const spells = useSelector((fullState) => fullState.spells.spells)
    const dispatch = useDispatch();
    function handleSaveBuild(e){
        e.preventDefault();

        if (!buildName.trim()) {
            errorMessage("Veuillez choisir un nom pour votre build", "red")
            return; 
        }
        /*const spellSet = spells.filter(spell => spell.value.length > 0);
        if(spellSet.length<9){
            errorMessage("Il vous faut au minimum 9 sorts")
            return;
        }*/
        errorMessage("Build sauvegardé !", "green")
        if(savedBuilds.some(build => build.id === idBuild)){
            dispatch(actionSaveAgainBuild(buildName, idBuild));
        }else{
            dispatch(actionSaveBuild(buildName, uniqid()));
            
        }      
    }
    function handleOnchangeClass(e){
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
    function handleOnchangeHero(e){
        dispatch(actionSetHero(e.target.value))
        //supprime tous les sorts
        dispatch(actionDeleteAll())
    }
    function handleNewBuild(){
        if (!buildName.trim()) {
            errorMessage("Veuillez tout d'abord choisir un nom pour votre build actuel", "red")
            return; 
        }
        let buildAlreadySaved = savedBuilds.find((build) => build.id === idBuild);
        if(compareCurrentAndSavedbuild(idBuild, character, spells, stuff, buildAlreadySaved)){
            dispatch(actionNewBuild())
            updateBuildName('')
        }else{
            handleModal(true);
        }

    }

    return (
            <section className="info" >
                <div className="info-container">
                    <div className="title-container">
                        <input 
                            type="text" 
                            placeholder="Nom du build" 
                            className="title"  
                            value={buildName}
                            onChange={(e) => updateBuildName(e.target.value)}
                        />
                    </div>
                    <div className="others-infos-container">
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
                        <div className='level-container'>
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
                    </div>
                </div>
                <img className="hero-img" src={`./assets/logo/${classes}/${hero}.png`} />
                <div className="action-buttons">
                <button onClick={handleNewBuild}
                        className="build-new"
                        >
                        <p>Nouveau build</p>
                    </button>
                    <button onClick={handleSaveBuild}
                        className="build-save"
                    >
                        <p>Sauvegarder le build</p>
                    </button>
                    
                </div>
            </section>
    );
}
  
Info.propTypes = {
    buildName: PropTypes.string.isRequired,
    updateBuildName: PropTypes.func.isRequired,
    indexHero: PropTypes.number.isRequired,
    updateIndexHero: PropTypes.func.isRequired,
    errorMessage: PropTypes.func.isRequired,
    handleModal: PropTypes.func.isRequired,
};

Info.defaultProps = {
};

export default React.memo(Info);