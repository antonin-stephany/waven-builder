import React from "react";
import PropTypes from "prop-types";
import RingSlot from "../RingSlot/RingSlot";
import CompanionSlot from "../CompanionSlot/CompanionSlot";
import CuffSlot from "../CuffSlot/CuffSlot";
import "./Stuff.scss";

function Stuff({ openRightPart }) {
  return (
    <div className="stuff">
      <RingSlot openModal={openRightPart} />
      <CuffSlot openModal={() => openRightPart("cuff")} />
      <CompanionSlot />
    </div>
  );
}

Stuff.propTypes = {
  openRightPart: PropTypes.func.isRequired,
};

Stuff.defaultProps = {};

export default React.memo(Stuff);
