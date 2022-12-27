import React from 'react';
//import PropTypes from 'prop-types';
import './Cuff.scss';

function Cuff() {
    return (
        <div className="stuff-cuff">
            <div className="stuff-cuff-slot">
            test
            </div>
        </div>
    );
}
  
Cuff.propTypes = {
};

Cuff.defaultProps = {
};

export default React.memo(Cuff);