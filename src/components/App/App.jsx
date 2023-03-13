import React, { useState } from "react";
import StuffSlot from "../StuffSlot/StuffSlot";
import Info from "../Info/Info";
import SpellSlot from "../SpellSlot/SpellSlot";
import BuildList from "../BuildList/BuildList";
import "./App.scss";
import ElementArea from "../ElementArea/ElementArea";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [buildName, setBuildName] = useState("");
  const [indexHero, setindexHero] = useState(0);
  const [slotIndex, setSlotIndex] = useState(0);
  const [elementType, setElementType] = useState(undefined);

  function updateBuildName(title) {
    setBuildName(title);
  }
  
  function updateIndexHero(newIndex) {
    setindexHero(newIndex);
  }

  function openElementArea(type, index) {
    setElementType(type);
    setSlotIndex(index);
  }

  function closeItemArea() {
    setElementType(undefined);
  }

  function handleErrorMessage(message) {
    setErrorMessage(message);
    const timeId = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }

  let app;
  switch (elementType) {
    case "ring":
    case "cuff":
    case "companion":
      app = (
        <>
          <StuffSlot openRightPart={openElementArea} />
          <ElementArea
              type={elementType}
              close={closeItemArea}
              slotIndex={slotIndex}
              handleErrorMessage={handleErrorMessage}
          />
        </>
      );
      break;
    case "spell":
      app = (
        <>
          <ElementArea
              type={elementType}
              close={closeItemArea}
              slotIndex={slotIndex}
              handleErrorMessage={handleErrorMessage}
          />
          <SpellSlot openLeftPart={openElementArea} />
        </>
      );
      break;
    default:
      app = ( 
        <>
          <StuffSlot openRightPart={openElementArea} />
          <Info
            buildName={buildName}
            updateBuildName={updateBuildName}
            indexHero={indexHero}
            updateIndexHero={updateIndexHero}
            errorMessage={handleErrorMessage}
          />
          <SpellSlot openLeftPart={openElementArea} />
        </>
      );
    
  }

  return (
    <div className="main">
      <h1 className="main-title">Waven builder</h1>
      {errorMessage && <p className="main-error"> {errorMessage} </p>}
      <div className="main-container">    
        {app}
      </div>
      <BuildList 
        updateBuildName={updateBuildName}
        updateIndexHero={updateIndexHero}
      />
    </div>
  );
}

export default App;
