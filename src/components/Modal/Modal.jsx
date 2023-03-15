import React from 'react';
import "./Modal.scss"
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionNewBuild } from '../../actions/buildActions';

function Modal({handleModal, updateBuildName}) {
    const dispatch = useDispatch();
    function handleNewBuild(){
        dispatch(actionNewBuild())
        updateBuildName('')
        handleModal(false)
    }
  return (
   <div className="background-modal">
        <div className="modal-container">
            <h3>Veux-tu sauvegarder ce build ?</h3>
            <p>Les changements sur ton build actuel n&apos;ont pas encore été sauvegardé. Veux-tu les enregistrer ? </p>
            <div className="action-buttons">
                <button onClick={handleNewBuild}className="build-new">Non ça ira</button>
                <button className="build-save">Sauvegarder le build</button>
            </div>
            <button onClick={() => handleModal(false)} className="cross-close-modal"></button>
        </div>

   </div>
  );
}
Modal.propTypes = {
    handleModal: PropTypes.func.isRequired,
    updateBuildName: PropTypes.func.isRequired,
};

Modal.defaultProps = {
};

export default React.memo(Modal);