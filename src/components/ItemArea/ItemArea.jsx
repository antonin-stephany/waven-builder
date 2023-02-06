import React from "react";
import ItemList from "../ItemList/ItemList";
import PropTypes from "prop-types";
import "./ItemArea.scss";

function ItemArea({ type, close, slotIndex, handleErrorMessage }) {
  let component;
  switch (type) {
    case "ring":
      component = (
        <ItemList type={type} index={slotIndex} errorMessage={handleErrorMessage} />
      );
      break;
    case "cuff":
      component = (
        <ItemList type={type} index={slotIndex} errorMessage={handleErrorMessage} />
      );
      break;
      case "companion":
        component = (
          <ItemList type={type} index={slotIndex} errorMessage={handleErrorMessage} />
        );
        break;
    default:
      return;
  }

  return (
    <>
      <button className="cross-close" onClick={close}></button>
      {component}
    </>
  );
}

ItemArea.propTypes = {
  type: PropTypes.string.isRequired,
  slotIndex: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  handleErrorMessage: PropTypes.func.isRequired,
};

ItemArea.defaultProps = {};

export default React.memo(ItemArea);
