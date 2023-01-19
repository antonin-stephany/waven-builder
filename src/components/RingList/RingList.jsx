import React from 'react';
import PropTypes from 'prop-types';
import './RingList.scss';
import RingSlot from '../RingSlot/RingSlot';
import ringList from '../../data/rings';

function RingList({closeRingModal}) {
    return (
        <>
       <div className="ring-list">
       {ringList.map((ring) => (
        <RingSlot
            key={ring.value}
            value={ring.value}
            description={ring.description}
            rare={ring.rare}
            stats={ring.stats}
            gifts={ring.gifts}
        />

       ))}

      </div>
      <div onClick={closeRingModal} className="cross-ring">
    
      </div>
      </>
      );
}
  
RingList.propTypes = {
    closeRingModal: PropTypes.func.isRequired,
};

RingList.defaultProps = {
};

export default React.memo(RingList);