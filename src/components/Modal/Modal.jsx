import React from 'react';
import "./Modal.scss"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionSaveBuild, actionSaveAgainBuild, actionNewBuild } from '../../actions/buildActions';
import { actionSetBuild } from "../../actions/buildActions";
import dataCharacter from '../../data/classes';
import uniqid from 'uniqid';

function Modal({buildName, handleModal, modalType, updateBuildName, errorMessage, updateIndexHero, index, titleBuildSelected, classBuildSelected}) {
    const idBuild = useSelector((fullState) => fullState.allBuilds.id);
    const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
    const dispatch = useDispatch();
    function handleNewBuild(){
        dispatch(actionNewBuild())
        updateBuildName('')
        handleModal(false, "", "", "", null)
    }
    function handleSaveBuild(){
        errorMessage("Build sauvegardé !", "green")
        if(savedBuilds.some(build => build.id === idBuild)){
            dispatch(actionSaveAgainBuild(buildName, idBuild));
        }else{
            dispatch(actionSaveBuild(buildName, uniqid()));
            
        }   
        handleNewBuild();
    }
    function setBuild(index){
        updateBuildName(titleBuildSelected);
        const newIndex = dataCharacter.findIndex(element => element.value === classBuildSelected);
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
                    <button onClick={() => handleNewAndSetBuild(index)}className="build-new">Non ça ira</button>
                    <button onClick={() => handleSaveAndSetBuid(index)} className="build-save">Sauvegarder le build</button>
                </>
            )}
                
            </div>
            <button onClick={() =>handleModal(false, "", "", "", null)} className="cross-close-modal"></button>
        </div>

   </div>
  );
}
Modal.propTypes = {
    buildName: PropTypes.string.isRequired,
    titleBuildSelected: PropTypes.string,
    classBuildSelected: PropTypes.string,
    index: PropTypes.number,
    handleModal: PropTypes.func.isRequired,
    modalType: PropTypes.string.isRequired,
    updateBuildName: PropTypes.func.isRequired,
    errorMessage: PropTypes.func.isRequired,
    updateIndexHero: PropTypes.func.isRequired,
};

Modal.defaultProps = {
};

export default React.memo(Modal);