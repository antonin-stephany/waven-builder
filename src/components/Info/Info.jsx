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


function Info({buildName, updateBuildName, indexHero, updateIndexHero, errorMessage}) {

    const level = useSelector((fullState) => fullState.allBuilds.character.level);
    const classes = useSelector((fullState) => fullState.allBuilds.character.classes);
    const hero = useSelector((fullState) => fullState.allBuilds.character.hero);
    const idBuild = useSelector((fullState) => fullState.allBuilds.id);
    const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);

   // const spells = useSelector((fullState) => fullState.spells.spells)
    const dispatch = useDispatch();
    function handleSaveBuild(e){
        e.preventDefault();

        if (!buildName.trim()) {
            errorMessage("Veuillez choisir un nom pour votre build")
            return; 
        }
        /*const spellSet = spells.filter(spell => spell.value.length > 0);
        if(spellSet.length<9){
            errorMessage("Il vous faut au minimum 9 sorts")
            return;
        }*/

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
        dispatch(actionNewBuild())
        updateBuildName('')
    }

    return (
            <section className="info" >
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
                <button onClick={handleSaveBuild}
                    className="build-save"
                >
                    <p>Sauvegarder le build</p>
                </button>
                <button onClick={handleNewBuild}>
                    <p>Nouveau build</p>
                </button>
            </section>
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