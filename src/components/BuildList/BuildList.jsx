import React from 'react';
import PropTypes from "prop-types";
import SingleBuild from "../SingleBuild/SingleBuild";
import "./BuildList.scss";
import { useSelector } from 'react-redux';

function BuildList({updateBuildName, updateIndexHero, updateBuildIndex, handleModal}) {
  const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
  return (
    <div className="build-list-container">
    {savedBuilds.map((build, i) => (
      <SingleBuild
        key={build.id}
        index={i}
        updateBuildName={updateBuildName}
        updateIndexHero={updateIndexHero}
        updateBuildIndex={updateBuildIndex}
        handleModal={handleModal}
        character={build.character}
        stuff={build.stuff}
        spells={build.spells.spells}
       />
    ))}
    </div>
  );
}
BuildList.propTypes = {
  updateBuildName: PropTypes.func.isRequired,
  updateIndexHero: PropTypes.func.isRequired,
  updateBuildIndex: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
};

BuildList.defaultProps = {};

export default React.memo(BuildList);