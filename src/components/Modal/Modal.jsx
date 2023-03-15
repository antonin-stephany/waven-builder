import React from 'react';
import "./Modal.scss"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionSaveBuild, actionSaveAgainBuild, actionNewBuild } from '../../actions/buildActions';
import uniqid from 'uniqid';

function Modal({buildName, handleModal, updateBuildName, errorMessage}) {
    const idBuild = useSelector((fullState) => fullState.allBuilds.id);
    const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
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
  return (
   <div className="background-modal">
        <div className="modal-container">
            <h3>Veux-tu sauvegarder ce build ?</h3>
            <p>Les changements sur ton build actuel n&apos;ont pas encore été sauvegardé. Veux-tu les enregistrer ? </p>
            <div className="action-buttons">
                <button onClick={handleNewBuild}className="build-new">Non ça ira</button>
                <button onClick={handleSaveBuild} className="build-save">Sauvegarder le build</button>
            </div>
            <button onClick={() => handleModal(false)} className="cross-close-modal"></button>
        </div>

   </div>
  );
}
Modal.propTypes = {
    buildName: PropTypes.string.isRequired,
    handleModal: PropTypes.func.isRequired,
    updateBuildName: PropTypes.func.isRequired,
    errorMessage: PropTypes.func.isRequired,
};

Modal.defaultProps = {
};

export default React.memo(Modal);