import React from 'react';
import PropTypes from 'prop-types';
import './SingleSpellSlot.scss';

function SingleSpellSlot({value, index, openModal, classes}) {
    return (
        <div 
            className="spell-slot"
            onClick={() => openModal("spell", index)}
        >   
        {!!value && (
            <img src={`./assets/spell/${classes}/${value}.png`} />  
        )}
        </div>
    );
}
  
SingleSpellSlot.propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired,
    classes: PropTypes.string.isRequired,
};

SingleSpellSlot.defaultProps = {
};

export default React.memo(SingleSpellSlot);