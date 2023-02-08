import React, { useState } from "react";
import Stuff from "../Stuff/Stuff";
import Info from "../Info/Info";
import Stats from "../Stats/Stats";
import BuildList from "../BuildList/BuildList";
import "./App.scss";
import ItemArea from "../ItemArea/ItemArea";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [buildName, setBuildName] = useState("");
  const [indexHero, setindexHero] = useState(0);
  const [slotIndex, setSlotIndex] = useState(0);
  const [itemType, setItemType] = useState(undefined);

  //Partie Info
  //changer le titre
  const changeTitle = (e) => {
    setBuildName(e.target.value);
  };
  //permet de trouver le label de la classe pour avoir les heros associés à cette classe
  function updateIndexHero(newIndex) {
    setindexHero(newIndex);
  }

  function openItemArea(type, index) {
    setItemType(type);
    setSlotIndex(index);
  }

  function closeItemArea() {
    setItemType(undefined);
  }

  function handleErrorMessage(message) {
    setErrorMessage(message);
    const timeId = setTimeout(() => {
      // After 2 seconds set the show value to false
      setErrorMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }

  return (
    <div className="app">
      <h1 className="app-title">Waven builder</h1>
      {errorMessage && <p className="app-error"> {errorMessage} </p>}
      <div className="app-container">
        <Stuff openRightPart={openItemArea} />
        {itemType ? (
          <ItemArea
            type={itemType}
            close={closeItemArea}
            slotIndex={slotIndex}
            handleErrorMessage={handleErrorMessage}
          />
        ) : (
          <>
            <Info
              buildName={buildName}
              changeTitle={changeTitle}
              indexHero={indexHero}
              updateIndexHero={updateIndexHero}
              errorMessage={handleErrorMessage}
            />
            <Stats />
          </>
        )}
      </div>
      <div className="build-container">
        <BuildList />
      </div>
    </div>
  );
}

export default App;
