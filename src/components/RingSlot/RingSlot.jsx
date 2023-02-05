import React from "react";
import PropTypes from "prop-types";
import "./RingSlot.scss";
import { useSelector, useDispatch } from "react-redux";
import { actionDeleteItem } from "../../actions/stuffActions";

function RingSlot({ openModal }) {
  const dispatch = useDispatch();
  const ring = useSelector((fullState) => fullState.stuff.ring);
  function deleteRing(event, index, type) {
    event.stopPropagation();
    dispatch(actionDeleteItem({index, type}));
  }
  return (
    <div className="stuff-ring">
      {ring.map((ring, i) => (
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
                  deleteRing(event, i, "ring");
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
