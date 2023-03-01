import React from 'react';
import PropTypes from "prop-types";
import "./SingleBuild.scss";
import SingleBuildElement from "../SingleBuildElement/SingleBuildElement";

function SingleBuild({character, stuff, spells}) {
  const itemTypes = ["ring","cuff","companion","spells"]
  return (
    <div className="build-container">
        <img src={`./assets/logo/${character.classes}/${character.hero}.png`} />
        <h2>{character.title}</h2>
        <div className="build-stuff">
        {itemTypes.map((type) => (
          <SingleBuildElement
            key={type} 
            type={type}
            stuff={stuff}
            spells={spells}
            classes={character.classes}
          />
        ))}
        </div>
    </div>
  );
}
SingleBuild.propTypes = {
    character: PropTypes.shape({
          classes: PropTypes.string.isRequired,
          hero: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired,
        stuff: PropTypes.shape({
          ring: PropTypes.array,
          cuff: PropTypes.array,
          companion: PropTypes.array,
        }),
        spells: PropTypes.array,
};

SingleBuild.defaultProps = {};

export default React.memo(SingleBuild);