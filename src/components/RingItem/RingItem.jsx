import React from "react";
import PropTypes from "prop-types";
import "./RingItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSetRing } from "../../actions/stuffActions";

function RingItem({ value, description, rare, stats, label, errorMessage }) {
  const rings = useSelector((fullState) => fullState.stuff.rings);
  const dispatch = useDispatch();
  function addRing() {
    const testSameRing = rings.find((ring) => ring.value === value);
    if (testSameRing !== undefined) {
      errorMessage("Vous avez déjà choisi cette anneau");
      return;
    }
    //trouver un emplacememt de libre pour l'anneau
    const labelEmptySlot = rings.findIndex((e) => e.value === "");
    // si l'emplacement cliqué et occupé mais qu'il reste de la place ailleurs -> placer le ailleurs. Sinon placer le à l'emplacement cliqué
    if (labelEmptySlot !== -1 && rings[label].value !== "") {
      label = labelEmptySlot;
      dispatch(actionSetRing({ value, label }));
    } else {
      dispatch(actionSetRing({ value, label }));
    }
  }
  return (
    <div className="ring-slot" onClick={addRing}>
      <img src={`./assets/ring/${value}.png`} />
      <div className="ring-slot-content">
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

RingItem.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.number.isRequired,
  errorMessage: PropTypes.func.isRequired,
};

RingItem.defaultProps = {};

export default React.memo(RingItem);
