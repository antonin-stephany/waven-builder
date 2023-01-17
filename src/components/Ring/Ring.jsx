import React from 'react';
import PropTypes from 'prop-types';
import './Ring.scss';

function Ring({openModal}) {

    return (
        <div className="stuff-ring">
            <div 
                className="stuff-ring-slot" onClick={openModal}
            >
                
            </div>
            <div 
                className="stuff-ring-slot" 
                onClick={openModal}
            >
                
            </div>
            <div 
                className="stuff-ring-slot" 
                onClick={openModal}
            >
                
            </div>
            <div 
                className="stuff-ring-slot" 
                onClick={openModal}
            >
                
            </div>
        </div>
      );
}
  
Ring.propTypes = {
    openModal: PropTypes.func.isRequired,
};

Ring.defaultProps = {
};

export default React.memo(Ring);