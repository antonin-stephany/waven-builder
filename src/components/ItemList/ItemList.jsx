import React from "react";
import PropTypes from "prop-types";
import "./ItemList.scss";
import SingleItem from "../SingleItem/SingleItem";
import ringList from "../../data/rings";
import companionList from "../../data/companions";
import cuffList from "../../data/cuffs";

function ItemList({ index, errorMessage, type }) {
  const itemList = {
    ring: ringList,
    cuff: cuffList,
    companion: companionList,
  }
  return (
    <>
      <div className={`${type}-list`}>
        {itemList[type].map((item) => (
          <SingleItem
            key={item.value}
            value={item.value}
            description={item.description}
            rare={item.rare}
            stats={item.stats}
            gifts={item.gifts}
            index={index}
            errorMessage={errorMessage}
            type={type}
          />
        ))}
      </div>
    </>
  );
}

ItemList.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  errorMessage: PropTypes.func.isRequired,
};

ItemList.defaultProps = {};

export default React.memo(ItemList);
