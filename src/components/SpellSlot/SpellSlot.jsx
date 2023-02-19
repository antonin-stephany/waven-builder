import React from 'react';
//import PropTypes from 'prop-types';
import './SpellSlot.scss';
import SingleSpellSlot from "../SingleSpellSlot/SingleSpellSlot";
import { useSelector} from "react-redux";

function SpellSlot() {
    const spells = useSelector((fullState) => fullState.spells.spells);
    return (
        <div className="spells">
            {spells.map((spell, i) => (
                <SingleSpellSlot 
                    key={i}
                    value={spell.value}
                />
            ))}       
        </div>
    );
}
  
SpellSlot.propTypes = {
};

SpellSlot.defaultProps = {
};

export default React.memo(SpellSlot);