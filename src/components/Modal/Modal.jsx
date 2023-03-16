import React from 'react';
import "./Modal.scss"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionSaveBuild, actionSaveAgainBuild, actionNewBuild } from '../../actions/buildActions';
import { actionSetBuild } from "../../actions/buildActions";
import dataCharacter from '../../data/classes';
import uniqid from 'uniqid';

function Modal({buildName, handleModal, modalType, updateBuildName, errorMessage, updateIndexHero, updateBuildIndex, index}) {
    const idBuild = useSelector((fullState) => fullState.allBuilds.id);
    const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
    const titleBuildSelected = useSelector((fullState) => fullState.allBuilds.savedBuilds[index].character.title) ?? '';
    const classesBuildSelected = useSelector((fullState) => fullState.allBuilds.savedBuilds[index].character.classes) ?? '';
    const dispatch = useDispatch();
    function handleNewBuild(){
        dispatch(actionNewBuild())
        updateBuildName('')
        handleModal(false)
    }
    function handleSaveBuild(){
        errorMessage("Build sauvegardé !", "green")
        if(savedBuilds.some(build => build.id === idBuild)){
            dispatch(actionSaveAgainBuild(buildName, idBuild));
        }else{
            dispatch(actionSaveBuild(buildName, uniqid()));
            
        }   
        handleModal(false)   
    }
    function setBuild(index){
        updateBuildIndex(index);
        updateBuildName(titleBuildSelected);
        const newIndex = dataCharacter.findIndex(element => element.value === classesBuildSelected);
        updateIndexHero(newIndex);
        dispatch(actionSetBuild(index));
        
      }
    function handleSaveAndSetBuid(index){
        handleSaveBuild();
        setBuild(index);
    }
    function handleNewAndSetBuild(index){
        handleNewBuild();
        setBuild(index);
    }
  return (
   <div className="background-modal">
        <div className="modal-container">
            <h3>Veux-tu sauvegarder ce build ?</h3>
            <p>Les changements sur ton build actuel n&apos;ont pas encore été sauvegardé. Veux-tu les enregistrer ? </p>
            <div className="action-buttons">
            {modalType === 'new-build' ? (
                <>
                    <button onClick={handleNewBuild}className="build-new">Non ça ira</button>
                    <button onClick={handleSaveBuild} className="build-save">Sauvegarder le build</button>
                </>
            ):(
                <>
                    <button onClick={handleNewAndSetBuild(index)}className="build-new">Non ça ira</button>
                    <button onClick={() => handleSaveAndSetBuid(index)} className="build-save">Sauvegarder le build</button>
                </>
            )}
                
            </div>
            <button onClick={() => handleModal(false, "")} className="cross-close-modal"></button>
        </div>

   </div>
  );
}
Modal.propTypes = {
    buildName: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handleModal: PropTypes.func.isRequired,
    modalType: PropTypes.string.isRequired,
    updateBuildName: PropTypes.func.isRequired,
    updateBuildIndex: PropTypes.func.isRequired,
    errorMessage: PropTypes.func.isRequired,
    updateIndexHero: PropTypes.func.isRequired,
};

Modal.defaultProps = {
};

export default React.memo(Modal);