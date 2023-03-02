import React from 'react';
import PropTypes from "prop-types";
import "./SingleBuild.scss";
import SingleBuildElement from "../SingleBuildElement/SingleBuildElement";
import { useDispatch } from "react-redux";
import { actionDeleteBuild } from "../../actions/buildActions";

function SingleBuild({character, stuff, spells, index}) {
  const itemTypes = ["ring","cuff","companion","spells"]
  const dispatch = useDispatch();
  function deleteBuild(event, index) {
    event.stopPropagation();
    dispatch(actionDeleteBuild(index));
  }
  return (
    <>
      <div className="build-list">
        <img className="build-img-hero" src={`./assets/logo/${character.classes}/${character.hero}.png`} />
        <div className="build-container">
            <h2>{character.title}</h2>
            <span>{character.level}</span>
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
        <button 
          className="cross-close-build" 
          onClick={(event) => {
                  deleteBuild(event, index);
                }}
              ></button>
      </div>
    </>
  );
}
SingleBuild.propTypes = {
    index : PropTypes.number.isRequired,
    character: PropTypes.shape({
          classes: PropTypes.string.isRequired,
          hero: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          level: PropTypes.number.isRequired,
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