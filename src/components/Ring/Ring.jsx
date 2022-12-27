import React from 'react';
//import PropTypes from 'prop-types';
import './Ring.scss';

function Ring() {
    return (
        <div className="stuff-ring">
            <div className="stuff-ring-slot">
                test
            </div>
            <div className="stuff-ring-slot">
                test
            </div>
            <div className="stuff-ring-slot">
                test
            </div>
            <div className="stuff-ring-slot">
                test
            </div>
        </div>
      );
}
  
Ring.propTypes = {
};

Ring.defaultProps = {
};

export default React.memo(Ring);