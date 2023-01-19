import React from 'react';
import PropTypes from 'prop-types';
import './Ring.scss';
import { useSelector } from 'react-redux';

function Ring({openModal, ringEmplacement}) {
    const rings = useSelector((fullState) => fullState.stuff.rings);

    return (
        <div className="stuff-ring">
            <div 
                className="stuff-ring-slot" 
                onClick={() => {
                    openModal();
                    ringEmplacement(0);
                    }}
            >
            {rings[0].value !== '' && <img src={`./assets/ring/${rings[0].value}.png`} />} 
            </div>
            <div 
                className="stuff-ring-slot" 
                onClick={() => {
                    openModal();
                    ringEmplacement(1);
                    }}
            >
            {rings[1].value !== '' && <img src={`./assets/ring/${rings[1].value}.png`} />} 
            </div>
            <div 
                className="stuff-ring-slot" 
                onClick={() => {
                    openModal();
                    ringEmplacement(2);
                    }}
            >
            {rings[2].value !== '' && <img src={`./assets/ring/${rings[2].value}.png`} />} 
           </div>
            <div 
                className="stuff-ring-slot" 
                onClick={() => {
                    openModal();
                    ringEmplacement(3);
                    }}
            >
            {rings[3].value !== '' && <img src={`./assets/ring/${rings[3].value}.png`} />} 
            </div>
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