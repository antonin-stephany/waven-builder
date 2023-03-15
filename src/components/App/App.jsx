import React, { useState } from "react";
import StuffSlot from "../StuffSlot/StuffSlot";
import Info from "../Info/Info";
import SpellSlot from "../SpellSlot/SpellSlot";
import BuildList from "../BuildList/BuildList";
import Modal from "../Modal/Modal";
import "./App.scss";
import ElementArea from "../ElementArea/ElementArea";

function App() {
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageColor, setErrorMessageColor] = useState("red");
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

  function handleErrorMessage(message, color) {
    setErrorMessageColor(color);
    setErrorMessage(message);
    const timeId = setTimeout(() => {
      setErrorMessage("");
      setErrorMessageColor("red");
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }

  function handleModal(boolean){
    setModal(boolean);
  }

  let app;
  switch (elementType) {
    case "ring":
    case "cuff":
    case "companion":
      app = (
        <div className="main-container">  
          <StuffSlot openRightPart={openElementArea} />
          <ElementArea
              type={elementType}
              close={closeItemArea}
              slotIndex={slotIndex}
              handleErrorMessage={handleErrorMessage}
          />
        </div>
      );
      break;
    case "spell":
      app = (
        <div className="main-container">  
          <ElementArea
              type={elementType}
              close={closeItemArea}
              slotIndex={slotIndex}
              handleErrorMessage={handleErrorMessage}
          />
          <SpellSlot openLeftPart={openElementArea} />
        </div>
      );
      break;
    default:
      app = ( 
        <div className="main-container active">  
          <StuffSlot openRightPart={openElementArea} />
          <Info
            buildName={buildName}
            updateBuildName={updateBuildName}
            indexHero={indexHero}
            updateIndexHero={updateIndexHero}
            errorMessage={handleErrorMessage}
            handleModal={handleModal}
          />
          <SpellSlot openLeftPart={openElementArea} />
        </div>
      );
    
  }

  return (
    <>
      {modal && <Modal 
      handleModal={handleModal} 
      updateBuildName={updateBuildName}
      />}
      <div className="main">
        <h1 className="main-title">Waven builder</h1>
        {errorMessage ? 
        <p className={`main-error ${errorMessageColor}`}> {errorMessage} </p> : 
        <p className="main-error inactive"> {errorMessage} </p>}  
          {app}
        <BuildList 
          updateBuildName={updateBuildName}
          updateIndexHero={updateIndexHero}
        />
      </div>
    </>
  );
}

export default App;
