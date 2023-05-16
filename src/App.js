import './App.css';
import React from 'react';
import Top from './Top.js'
import Card from './Card.js'

function App() {

  const name = "jrobinson"

  return (
    <div className="App">
      <Top un={name}/>
      <Card title="St. Tropez " rating={5}/>
    </div>
  );
}

export default App;
