import React from 'react';
import Stuff from '../Stuff/Stuff';
import Info from '../Info/Info';
import Stats from '../Stats/Stats';
import BuildList from '../BuildList/BuildList';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Waven builder</h1>
      <div className="app-container">
        <Stuff />
        <Info />
        <Stats />
      </div>
      <div className="build-container">
        <BuildList />
      </div>
    </div>
  );
}

export default App;
