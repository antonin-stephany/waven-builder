import React from 'react';
import PropTypes from 'prop-types';
import Ring from '../Ring/Ring';
import Companion from '../Companion/Companion';
import Cuff from '../Cuff/Cuff';
import './Stuff.scss';

function Stuff({openRingModal, openCuffModal}) {
    return (
       <div className="stuff">
        <Ring openModal={openRingModal} />
        <Cuff openModal={openCuffModal} />
        <Companion />
      </div>
      );
}
  
Stuff.propTypes = {
  openRingModal: PropTypes.func.isRequired,
  openCuffModal: PropTypes.func.isRequired,
};

Stuff.defaultProps = {
};

export default React.memo(Stuff);