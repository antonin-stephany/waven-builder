import React from "react";
import PropTypes from "prop-types";
import Ring from "../Ring/Ring";
import Companion from "../Companion/Companion";
import Cuff from "../Cuff/Cuff";
import "./Stuff.scss";

function Stuff({ openRightPart }) {
  return (
    <div className="stuff">
      <Ring openModal={openRightPart} />
      <Cuff openModal={() => openRightPart("cuff")} />
      <Companion />
    </div>
  );
}

Stuff.propTypes = {
  openRightPart: PropTypes.func.isRequired,
};

Stuff.defaultProps = {};

export default React.memo(Stuff);
