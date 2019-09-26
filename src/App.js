import React from 'react';
import './App.css';
import CreatorName from "./Components/Creators/Creator/CreatorName";
import Identifier from "./Components/Identifier/Identifier";
import NameIdentifier from "./Components/Creators/Creator/nameIdentifier";


function App() {
  return (
    <div className="App">
        <h1> DataCite Meta Data Generator</h1>
        <Identifier/>
        <CreatorName/>
        <NameIdentifier/>


    </div>
  );
}

export default App;
