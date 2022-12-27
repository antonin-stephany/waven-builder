import React, { useContext } from 'react';
import CharacterContext from '../../contexts/CharactersContext';

function CharactersList() {
  const contextValue = useContext(CharacterContext);
  console.log(contextValue);

  return (
    <div className="characters-list">
      {contextValue.characters.map(({ id, title }) => (
        <div
          key={id}
        >
          {title}
        </div>
      ))}
    </div>
  );
}
CharactersList.propTypes = {};

CharactersList.defaultProps = {};

export default React.memo(CharactersList);