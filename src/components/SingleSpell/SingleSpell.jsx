import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SingleSpell.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSetSpell } from "../../actions/spellActions";


function SingleSpell({ value, label, classes, description, gifts, cost, load, gift_ap, element, errorMessage, index}) {
  const spells = useSelector((fullState) => fullState.allBuilds.spells);
  const dispatch = useDispatch();
  const [giftactive, setGiftactive] = useState(false);
  function openGift(event){
    event.stopPropagation();
    setGiftactive(!giftactive)
  }
  function addSpell(){
    const testSameSpell = spells.spells.find((spell) => spell.value === value);
    if (testSameSpell !== undefined) {
      errorMessage("Vous avez déjà choisi ce sort", "red");
      return;
    }
    //trouver un emplacememt de libre pour l'anneau
    const indexEmptySlot = spells.spells.findIndex((e) => e.value === "");
    index = indexEmptySlot;
    dispatch(actionSetSpell({ value, index}));
  }
  return (
    <div className="spell" onClick={addSpell}>
      <div className="spell-img">
        <img src={`./assets/spell/${classes}/${value}.png`} className="spell-img_spell" />
        <div className="spell-img_cost">
          <img src={`./assets/spell/assets/AP.png`} />
          <img src={`./assets/spell/assets/${cost}.png`} />
        </div>
        <div className="spell-img_ap">
          <img src={`./assets/spell/assets/reserve.png`} />
          <img src={`./assets/spell/assets/${gift_ap}.png`} />
        </div>
        <div className="spell-img_load">
          <img src={`./assets/spell/assets/${element}.png`} />
          <img src={`./assets/spell/assets/${load}.png`} />
        </div>
      </div>
      <div className="spell-content">
        <h2>{label}</h2>
        <p className={giftactive ? 'spell-content_description' : 'spell-content_description active' }>{description}</p>
        <div className={giftactive ? 'spell-content_gift-block active' : 'spell-content_gift-block'}>
          <h3 onClick={openGift}>Dons<i className={giftactive ? 'arrow active' : 'arrow'}></i></h3>
          <div className={giftactive ? 'spell-content_gifts active' : 'spell-content_gifts'}>
            {gifts.map((gift) => (
              <p key={gift.description}>• {gift.description}</p>
            ))}
          </div>
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
  element: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  gift_ap: PropTypes.number.isRequired,
  load: PropTypes.number.isRequired,
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  errorMessage: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

SingleSpell.defaultProps = {};

export default React.memo(SingleSpell);
