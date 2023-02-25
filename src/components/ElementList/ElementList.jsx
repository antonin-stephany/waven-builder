import React from "react";
import PropTypes from "prop-types";
import "./ElementList.scss";
import SingleItem from "../SingleItem/SingleItem";
import SingleSpell from "../SingleSpell/SingleSpell";
import ringList from "../../data/rings";
import companionList from "../../data/companions";
import cuffList from "../../data/cuffs";
import spellList from "../../data/spells";
import { useSelector } from 'react-redux';

function ElementList({ index, errorMessage, type }) {
  const elementList = {
    ring: ringList,
    cuff: cuffList,
    companion: companionList,
    spell: spellList,
  }
  const classSelected = useSelector((fullState) => fullState.character.classes);
  const heroSelected = useSelector((fullState) => fullState.character.hero);
  return (
    <>
      <div className={`${type}-list list`}>
       {type ==="spell" ? (
        <>
          {elementList[type].filter(classes => classes.classes === `${classSelected}` && classes.hero === '' || classes.hero === `${heroSelected}`).map((spell) => (
            <SingleSpell
              key={spell.value}
              value={spell.value}
              label={spell.label}
              classes={spell.classes}
              description={spell.description}
              element={spell.element}
              cost={spell.cost}
              gift_ap={spell.gift_ap}
              load={spell.load}
              gifts={spell.gifts}
              errorMessage={errorMessage}
              index={index}
            />
          ))}
        </>
       ):(
        <>
          {elementList[type].map((item) => (
            <SingleItem
              key={item.value}
              value={item.value}
              label={item.label}
              description={item.description}
              rare={item.rare}
              stats={item.stats}
              gifts={item.gifts}
              index={index}
              errorMessage={errorMessage}
              type={type}
            />
          ))}
        </>
      )}    
      </div>
    </>
  );
}

ElementList.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  errorMessage: PropTypes.func.isRequired,
};

ElementList.defaultProps = {};

export default React.memo(ElementList);
