import React, { useState } from 'react';
import Stuff from '../Stuff/Stuff';
import Info from '../Info/Info';
import Stats from '../Stats/Stats';
import BuildList from '../BuildList/BuildList';
import RingList from '../RingList/RingList';
import './App.scss';

function App() {
  const [showRightPart, setShowRightPart] = useState(true);
  const [modalRingOpen, setModalRingOpen] = useState(false);
  const [modalCuffOpen, setModalCuffOpen] = useState(false);
  function openRingModal(){
    setModalRingOpen(true);
    setShowRightPart(false);
    console.log(modalRingOpen)
  }
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
        />
        {modalRingOpen && 
        <RingList>
          <div> Jai cliqué sur les anneaux</div>
        </RingList>}
        {modalCuffOpen && 
        <div className="cuff-modal" >
          <div> Jai cliqué sur le brassard</div>
        </div>}
        { showRightPart && 
          <>
            <Info />
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
