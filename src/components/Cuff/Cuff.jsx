import React from 'react';
import PropTypes from 'prop-types';
import './Cuff.scss';

function Cuff({openModal}) {
    return (
        <div className="stuff-cuff">
            <div 
                className="stuff-cuff-slot" 
                onClick={openModal}
            >
            </div>
        </div>
    );
}
  
Cuff.propTypes = {
    openModal: PropTypes.func.isRequired,
};

Cuff.defaultProps = {
};

export default React.memo(Cuff);