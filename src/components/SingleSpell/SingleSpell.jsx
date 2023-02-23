import React from "react";
import PropTypes from "prop-types";
import "./SingleSpell.scss";


function SingleSpell({ value, label, classes, description}) {
  return (
    <div className="spell">
      <img src={`./assets/spell/${classes}/${value}.png`} />
      <div className="spell-content">
        <div className="spell-content-title">
          <h2>{label}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

SingleSpell.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

SingleSpell.defaultProps = {};

export default React.memo(SingleSpell);
