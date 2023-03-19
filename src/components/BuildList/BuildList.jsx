import React from 'react';
import PropTypes from "prop-types";
import SingleBuild from "../SingleBuild/SingleBuild";
import "./BuildList.scss";
import { useSelector } from 'react-redux';

function BuildList({updateBuildName, buildName, updateIndexHero, handleModal}) {
  const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
  return (
    <div className="build-list-container">
    {savedBuilds.map((build, i) => (
      <SingleBuild
        key={build.id}
        index={i}
        updateBuildName={updateBuildName}
        buildName={buildName}
        updateIndexHero={updateIndexHero}
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
  buildName: PropTypes.string.isRequired,
  updateIndexHero: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
};

BuildList.defaultProps = {};

export default React.memo(BuildList);