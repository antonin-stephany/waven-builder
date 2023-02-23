import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SingleSpell.scss";


function SingleSpell({ value, label, classes, description, gifts}) {
  const [giftactive, setGiftactive] = useState(false);
  function openGift(){
    setGiftactive(!giftactive)
  }
  return (
    <div className="spell">
      <div className="spell-img">
        <img src={`./assets/spell/${classes}/${value}.png`} />

      </div>
      <div className="spell-content">
        <h2>{label}</h2>
        <p>{description}</p>
        <h3 onClick={openGift}>Dons</h3>
        <div className={giftactive ? 'spell-gifts active' : 'spell-gifts' }>
          {gifts.map((gift) => (
            <p key={gift.description}>{gift.description}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

SingleSpell.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  gift_ap: PropTypes.number.isRequired,
  load: PropTypes.number.isRequired,
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SingleSpell.defaultProps = {};

export default React.memo(SingleSpell);
