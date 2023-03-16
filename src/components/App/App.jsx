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
  const [modalType, setModalType] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageColor, setErrorMessageColor] = useState("red");
  const [buildName, setBuildName] = useState("");
  const [buildIndex, setBuildIndex] = useState(0);
  const [indexHero, setindexHero] = useState(0);
  const [slotIndex, setSlotIndex] = useState(0);
  const [elementType, setElementType] = useState(undefined);

  function updateBuildName(title) {
    setBuildName(title);
  }
  function updateBuildIndex(index){
    setBuildIndex(index);
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

  function handleModal(boolean, type){
    setModal(boolean);
    setModalType(type);
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
      modalType={modalType}
      handleModal={handleModal} 
      updateBuildName={updateBuildName}
      updateBuildIndex={updateBuildIndex}
      buildName={buildName}
      index={buildIndex}
      errorMessage={handleErrorMessage}
      updateIndexHero={updateIndexHero}
      />}
      <div className="main">
        <h1 className="main-title">Waven builder</h1>
        {errorMessage ? 
        <p className={`main-error ${errorMessageColor}`}> {errorMessage} </p> : 
        <p className="main-error inactive"> {errorMessage} </p>}  
          {app}
        <BuildList 
          handleModal={handleModal}
          updateBuildName={updateBuildName}
          updateIndexHero={updateIndexHero}
          updateBuildIndex={updateBuildIndex}
        />
      </div>
    </>
  );
}

export default App;
