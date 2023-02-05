import React from "react";
import PropTypes from "prop-types";
import "./SingleItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSetItem } from "../../actions/stuffActions";

function SingleItem({ value, description, rare, stats, index, errorMessage, type }) {
  const stuff = useSelector((fullState) => fullState.stuff);
  const dispatch = useDispatch();
  function addItem() {
    const testSameItem = stuff[type].find((item) => item.value === value);
    if (testSameItem !== undefined) {
      errorMessage("Vous avez déjà choisi cet équipement");
      return;
    }
    //trouver un emplacememt de libre pour l'anneau
    const indexEmptySlot = stuff[type].findIndex((e) => e.value === "");
    // si l'emplacement cliqué et occupé mais qu'il reste de la place ailleurs -> placer le ailleurs. Sinon placer le à l'emplacement cliqué
    if (indexEmptySlot !== -1 && stuff[type][index].value !== "") {
      index = indexEmptySlot;
      dispatch(actionSetItem({ value, index, type }));
    } else {
      dispatch(actionSetItem({ value, index, type }));
    }
  }
  return (
    <div className={`${type}-slot`} onClick={addItem}>
      <img src={`./assets/${type}/${value}.png`} />
      <div className={`${type}-slot-content`}>
        <span>{rare}</span>
        <p>{description}</p>
        {stats.map((stat) => (
          <span key={stat.description}>
            {stat.value}% {stat.description}
          </span>
        ))}
      </div>
    </div>
  );
}

SingleItem.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  errorMessage: PropTypes.func.isRequired,
};

SingleItem.defaultProps = {};

export default React.memo(SingleItem);
