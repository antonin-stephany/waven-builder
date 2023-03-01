import React from 'react';
import SingleBuild from "../SingleBuild/SingleBuild";
import "./BuildList.scss";
import { useSelector } from 'react-redux';

function BuildList() {
  const savedBuilds = useSelector((fullState) => fullState.allBuilds.savedBuilds);
  return (
    <div className="build-list">
    {savedBuilds.map((build) => (
      <SingleBuild
      //SOUCI D'ID
        key={build.character.title}
        character={build.character}
       />
    ))}
    </div>
  );
}
BuildList.propTypes = {};

BuildList.defaultProps = {};

export default React.memo(BuildList);