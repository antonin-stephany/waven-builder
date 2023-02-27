import React from 'react';
import PropTypes from 'prop-types';
import './SingleSpellSlot.scss';
import { useDispatch } from "react-redux";
import { actionDeleteSpell } from "../../actions/spellActions";

function SingleSpellSlot({value, index, openModal, classes}) {
    const dispatch = useDispatch();
    function deleteSpell(event, index) {
        event.stopPropagation();
        dispatch(actionDeleteSpell(index));
      }
    return (
        <div 
            className="spell-slot"
            onClick={() => openModal("spell", index)}
        >   
        {!!value && (
            <>
            <img src={`./assets/spell/${classes}/${value}.png`} />  
            <button
                onClick={(event) => {
                  deleteSpell(event, index);
                }}
                className="delete-spell"
              ></button>
            </>
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