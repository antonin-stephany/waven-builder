import React from 'react';
//import PropTypes from 'prop-types';
import './Companion.scss';

function Companion() {
    return (
        <div className="stuff-companion">
            <div className="stuff-companion-slot">
            test
            </div>
            <div className="stuff-companion-slot">
            test
            </div>
            <div className="stuff-companion-slot">
            test
            </div>
            <div className="stuff-companion-slot">
            test
            </div>
        </div>
      );
}
  
Companion.propTypes = {
};

Companion.defaultProps = {
};

export default React.memo(Companion);