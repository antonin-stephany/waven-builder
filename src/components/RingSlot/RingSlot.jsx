import React from 'react';
import PropTypes from 'prop-types';
import './RingSlot.scss';


function RingSlot({
    value,
    description,
    rare,
    stats
}) {
    return (
        <div className='ring-slot'>
            <img src={`./assets/ring/${value}.png`} />
            <div className='ring-slot-content'>
                <span>{rare}</span>
                <p>{description}</p>
                {stats.map((stat) => (
                    <span key={stat.description}>{stat.value}% {stat.description}</span>
                ))}
            </div>
        </div>
    );
}
  
RingSlot.propTypes = {
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rare: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired
};

RingSlot.defaultProps = {
};

export default React.memo(RingSlot);