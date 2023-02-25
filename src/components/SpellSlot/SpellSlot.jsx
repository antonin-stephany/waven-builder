import React from 'react';
import PropTypes from 'prop-types';
import './SpellSlot.scss';
import SingleSpellSlot from "../SingleSpellSlot/SingleSpellSlot";
import { useSelector} from "react-redux";

function SpellSlot({openLeftPart}) {
    const spells = useSelector((fullState) => fullState.spells.spells);
    const classes = useSelector((fullState) => fullState.character.classes);
    return (
        <div className="spells-slot">
            {spells.map((spell, i) => (
                <SingleSpellSlot 
                    openModal={openLeftPart}
                    key={i}
                    index={i}
                    value={spell.value}
                    classes={classes}
                />
            ))}       
        </div>
    );
}
  
SpellSlot.propTypes = {
    openLeftPart: PropTypes.func.isRequired,
};

SpellSlot.defaultProps = {
};

export default React.memo(SpellSlot);