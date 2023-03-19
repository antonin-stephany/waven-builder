import React from 'react';
import PropTypes from 'prop-types';
import './SingleBuildElement.scss';

function SingleBuildElement({ stuff, type, spells, classes }) {
  return (
    <>
      {type === 'spells' ? (
        <div className="build-stuff-spell">
          {spells.map((spell, i) => (
            <div key={i} className="build-stuff-spell-container">
              {!!spell.value && (
                <img src={`./assets/spell/${classes}/${spell.value}.png`} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="build-stuff-item">
          {stuff[type].map((item, i) => (
            <div key={i} className="build-stuff-item-container">
              {!!item.value && (
                <img src={`./assets/${type}/${item.value}.png`} />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
SingleBuildElement.propTypes = {
  stuff: PropTypes.shape({
    ring: PropTypes.array,
    cuff: PropTypes.array,
    companion: PropTypes.array,
  }),
  spells: PropTypes.array,
  classes: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

SingleBuildElement.defaultProps = {};

export default React.memo(SingleBuildElement);
