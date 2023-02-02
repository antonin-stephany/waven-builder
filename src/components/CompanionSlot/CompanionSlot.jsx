import React from 'react';
//import PropTypes from 'prop-types';
import './CompanionSlot.scss';

function CompanionSlot() {
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
  
CompanionSlot.propTypes = {
};

CompanionSlot.defaultProps = {
};

export default React.memo(CompanionSlot);