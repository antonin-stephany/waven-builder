import React from "react";
import PropTypes from "prop-types";
import SlotItem from "../SlotItem/SlotItem";
import "./StuffSlot.scss";

function Stuff({ openRightPart}) {
  return (
    <div className="stuff">
      <SlotItem openModal={openRightPart} type={"ring"}/>
      <SlotItem openModal={openRightPart} type={"cuff"}/>
      <SlotItem openModal={openRightPart} type={"companion"}/>
    </div>
  );
}

Stuff.propTypes = {
  openRightPart: PropTypes.func.isRequired,
};

Stuff.defaultProps = {};

export default React.memo(Stuff);
