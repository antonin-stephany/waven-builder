import React from 'react';
import PropTypes from 'prop-types';
import './RingList.scss';
import RingItem from '../RingItem/RingItem';
import ringList from '../../data/rings';

function RingList({closeRingModal, label}) {
    return (
        <>
       <div className="ring-list">
       {ringList.map((ring) => (
        <RingItem
            key={ring.value}
            value={ring.value}
            description={ring.description}
            rare={ring.rare}
            stats={ring.stats}
            gifts={ring.gifts}
            label={label}
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
    label: PropTypes.number.isRequired,
};

RingList.defaultProps = {
};

export default React.memo(RingList);