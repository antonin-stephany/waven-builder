import React from 'react';
import SingleBuild from "../SingleBuild/SingleBuild";
import "./BuildList.scss";
import { useSelector } from 'react-redux';

function BuildList() {
  const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
  return (
    <div className="build-list-container">
    {savedBuilds.map((build, i) => (
      <SingleBuild
        key={build.id}
        index={i}
        character={build.character}
        stuff={build.stuff}
        spells={build.spells.spells}
       />
    ))}
    </div>
  );
}
BuildList.propTypes = {
};

BuildList.defaultProps = {};

export default React.memo(BuildList);