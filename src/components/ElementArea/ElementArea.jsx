import React from "react";
import ElementList from "../ElementList/ElementList";
import PropTypes from "prop-types";
import "./ElementArea.scss";

function ElementArea({ type, close, slotIndex, handleErrorMessage }) {
  return (
    <>
      <button className="cross-close" onClick={close}></button>
      <ElementList type={type} index={slotIndex} errorMessage={handleErrorMessage} />
    </>
  );
}

ElementArea.propTypes = {
  type: PropTypes.string.isRequired,
  slotIndex: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  handleErrorMessage: PropTypes.func.isRequired,
};

ElementArea.defaultProps = {};

export default React.memo(ElementArea);
