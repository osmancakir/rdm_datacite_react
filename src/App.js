import React from 'react';
import logo from './logo.svg';
import './App.css';
//import NameIdentifier from "./Components/Creators/Creator/nameIdentifier";
//import Creators from "./Components/Creators/Creator/Creators"
import CreatorName from "./Components/Creators/Creator/CreatorName";
import Identifier from "./Components/Identifier/Identifier";
import NameIdentifier from "./Components/Creators/Creator/nameIdentifier";


function App() {
  return (
    <div className="App">
        <h1> DataCite Meta Data Generator</h1>
        <CreatorName/>
        <NameIdentifier/>
        <Identifier/>

    </div>
  );
}

export default App;
