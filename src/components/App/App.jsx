import React, { useState } from 'react';
import Stuff from '../Stuff/Stuff';
import Info from '../Info/Info';
import Stats from '../Stats/Stats';
import BuildList from '../BuildList/BuildList';
import RingList from '../RingList/RingList';
import './App.scss';

function App() {
  //states infos
  const [inputTitle, setInputTitle] = useState('');
  const [labelHero, setLabelHero] = useState(0);
  //states stuff
  const [ringLabel, setRingLabel] = useState(0);
  //states des modales
  const [showRightPart, setShowRightPart] = useState(true);
  const [modalRingOpen, setModalRingOpen] = useState(false);
  const [modalCuffOpen, setModalCuffOpen] = useState(false);

  //Partie Info
  //changer le titre
  const changeTitle = (e) => {
    setInputTitle(e.target.value)
  };
  //permet de trouver le label de la classe pour avoir les heros associés à cette classe
  function updateLabelHero(newLabel){
    setLabelHero(newLabel)
  }
  
  //Partie Stuff
  //--anneau
  function ringEmplacement(i){
    setRingLabel(i);
  }
  //Ouvertures/fermetures des modales
  //--anneau
  function openRingModal(){
    setModalRingOpen(true);
    setShowRightPart(false);
  }
  function closeRingModal(){
    setModalRingOpen(false);
    setShowRightPart(true);
  }
  //--brassard
  function openCuffModal(){
    setModalCuffOpen(true);
    setShowRightPart(false);
  }

  return (
    <div className="app">
      <h1 className="app-title">Waven builder</h1>
      <div className="app-container">
        <Stuff 
           openRingModal={openRingModal}
           openCuffModal={openCuffModal}
           ringEmplacement={ringEmplacement}
        />
        {modalRingOpen && 
        <RingList 
          closeRingModal={closeRingModal} 
          label={ringLabel}
        />}
        {modalCuffOpen && 
        <div className="cuff-modal" >
          <div> Jai cliqué sur le brassard</div>
        </div>}
        { showRightPart && 
          <>
            <Info 
              inputTitle={inputTitle} 
              changeTitle={changeTitle}
              labelHero={labelHero}
              updateLabelHero={updateLabelHero}
            />
            <Stats />
          </>
        }
      </div>
      <div className="build-container">
        <BuildList />
      </div>
    </div>
  );
}

export default App;

