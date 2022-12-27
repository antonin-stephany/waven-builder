import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

// la valeur par defaut du context. Mais il faut quand même préciser la props value dans le Provider
// cette variable est surtout utile en terme de documentation pour savoir qu'est ce qui est stocké dans le contexte
export const defaultValue = {
  characters: [],
  addCharacter: () => {},
};

// eslint-disable-next-line import/prefer-default-export
const CharacterContext = React.createContext(defaultValue);

export function CharacterContextProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  const addCharacter = useCallback((character) => {
    setCharacters((oldCharacters) => [
      ...oldCharacters,
      {
        ...character,
        id: uniqid(), // comme on a pas de backend on s'occupe nous même de créer un id
      },
    ]);
  }, []);

  // ERREUR: ici on re-créer contextValue de 0, donc tout les enfants qui utilisent CharacterContext vont faire
  // une comparaison de surface entre l'ancien et le nouveau context,
  // mais comme on en re-créer un à chaque fois, qu'il est changé ou non.
  // Toute les comparaison de surface vont dire que le context à changer, donc vont faire de re-render
  // DONC c'est PAS OPTIMISE, d'où l'erreur de eslint https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  // const contextValue = { characters: characters, addCharacter };

  const contextValue = useMemo(() => ({
    characters: characters,
    addCharacter,
  }), [characters, addCharacter]);

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
}
CharacterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// attention on export en defaut un CONTEXT, pas un composant (donc pas de memo possible)
export default CharacterContext;