import React from "react";
import PropTypes from "prop-types";
import "./RingList.scss";
import RingItem from "../RingItem/RingItem";
import ringList from "../../data/rings";

function RingList({ label, errorMessage }) {
  return (
    <>
      <div className="ring-list">
        {ringList.map((ring) => (
          <RingItem
            key={ring.value}
            value={ring.value}
            description={ring.description}
            rare={ring.rare}
            stats={ring.stats}
            gifts={ring.gifts}
            label={label}
            errorMessage={errorMessage}
          />
        ))}
      </div>
    </>
  );
}

RingList.propTypes = {
  label: PropTypes.number.isRequired,
  errorMessage: PropTypes.func.isRequired,
};

RingList.defaultProps = {};

export default React.memo(RingList);
