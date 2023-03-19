import React from 'react';
import PropTypes from 'prop-types';
import './SingleBuild.scss';
import dataCharacter from '../../data/classes';
import SingleBuildElement from '../SingleBuildElement/SingleBuildElement';
import { useDispatch, useSelector } from 'react-redux';
import { actionDeleteBuild, actionSetBuild } from '../../actions/buildActions';
import { compareCurrentAndSavedbuild } from '../../tools/compareArray';

function SingleBuild({
  character,
  stuff,
  spells,
  index,
  updateBuildName,
  buildName,
  updateIndexHero,
  handleModal,
}) {
  const itemTypes = ['ring', 'cuff', 'companion', 'spells'];
  const titleBuildSelected =
    useSelector(
      (fullState) => fullState.allBuilds.savedBuilds[index].character.title
    ) ?? '';
  const classesBuildSelected =
    useSelector(
      (fullState) => fullState.allBuilds.savedBuilds[index].character.classes
    ) ?? '';
  const currentIdBuild = useSelector((fullState) => fullState.allBuilds.id);
  const savedBuilds = useSelector(
    (fullState) => fullState.allBuilds.savedBuilds
  );
  const currentCharacter = useSelector(
    (fullState) => fullState.allBuilds.character
  );
  const currentSpells = useSelector((fullState) => fullState.allBuilds.spells);
  const currentStuff = useSelector((fullState) => fullState.allBuilds.stuff);

  const dispatch = useDispatch();
  function deleteBuild(event, index) {
    event.stopPropagation();
    dispatch(actionDeleteBuild(index));
  }
  function setBuild(index) {
    let buildAlreadySaved = savedBuilds.find(
      (build) => build.id === currentIdBuild
    );
    if (
      compareCurrentAndSavedbuild(
        currentIdBuild,
        currentCharacter,
        currentSpells,
        currentStuff,
        buildAlreadySaved,
        buildName
      )
    ) {
      updateBuildName(titleBuildSelected);
      const newIndex = dataCharacter.findIndex(
        (element) => element.value === classesBuildSelected
      );
      updateIndexHero(newIndex);
      dispatch(actionSetBuild(index));
    } else {
      handleModal(
        true,
        'set-build',
        titleBuildSelected,
        classesBuildSelected,
        index
      );
    }
  }
  return (
    <>
      <div className="build-list">
        <img
          className="build-img-hero"
          src={`./assets/logo/${character.classes}/${character.hero}.png`}
          onClick={() => setBuild(index)}
        />
        <div className="build-container" onClick={() => setBuild(index)}>
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
  updateBuildName: PropTypes.func.isRequired,
  buildName: PropTypes.string.isRequired,
  updateIndexHero: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
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
  handleModal: PropTypes.func.isRequired,
};

SingleBuild.defaultProps = {};

export default React.memo(SingleBuild);
