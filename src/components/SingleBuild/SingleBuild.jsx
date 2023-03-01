import React from 'react';
import PropTypes from "prop-types";

function SingleBuild({character}) {
  return (
    <div className="build-container">
        <img src={`./assets/logo/${character.classes}/${character.hero}.png`} />
        <h2>{character.title}</h2>
    </div>
  );
}
SingleBuild.propTypes = {
    character: PropTypes.shape({
          classes: PropTypes.string.isRequired,
          hero: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired,
};

SingleBuild.defaultProps = {};

export default React.memo(SingleBuild);