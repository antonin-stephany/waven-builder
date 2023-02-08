import React from "react";
import PropTypes from "prop-types";
import "./RingSlot.scss";
import { useSelector, useDispatch } from "react-redux";
import { actionDeleteRing } from "../../actions/stuffActions";

function RingSlot({ openModal }) {
  const dispatch = useDispatch();
  const rings = useSelector((fullState) => fullState.stuff.rings);
  function deleteRing(event, label) {
    event.stopPropagation();
    dispatch(actionDeleteRing(label));
  }
  return (
    <div className="stuff-ring">
      {rings.map((ring, i) => (
        <div
          key={i}
          className="stuff-ring-slot"
          onClick={() => openModal("ring", i)}
        >
          {ring.value !== "" && (
            <>
              <img src={`./assets/ring/${ring.value}.png`} />
              <button
                onClick={(event) => {
                  deleteRing(event, i);
                }}
                className="delete-item"
              ></button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

RingSlot.propTypes = {
  openModal: PropTypes.func.isRequired,
};

RingSlot.defaultProps = {};

export default React.memo(RingSlot);
