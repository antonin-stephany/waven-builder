import React from 'react';
import PropTypes from 'prop-types';
import './Ring.scss';
import { useSelector, useDispatch } from 'react-redux';
import { actionDeleteRing } from '../../actions/stuffActions'

function Ring({openModal, ringEmplacement}) {
    const dispatch = useDispatch();
    const rings = useSelector((fullState) => fullState.stuff.rings);
    function deleteRing(event, label){
        event.stopPropagation();
        dispatch(
            actionDeleteRing(label),
          );
    }
    return (
        <div className="stuff-ring">
        {rings.map((ring, i) => 
            <div 
                key={i}
                className="stuff-ring-slot" 
                onClick={() => {
                    openModal();
                    ringEmplacement(i);
                    }}
            >
                {ring.value !== '' && 
                <>
                    <img src={`./assets/ring/${ring.value}.png`} />
                    <div onClick={(event) => {deleteRing(event, i)}} className="delete-item"></div>
                </>
                } 
            </div>)}
        </div>
      );
}
  
Ring.propTypes = {
    openModal: PropTypes.func.isRequired,
    ringEmplacement: PropTypes.func.isRequired,
};

Ring.defaultProps = {
};

export default React.memo(Ring);