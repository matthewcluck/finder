import './App.css';
import React from 'react';
import Top from './Top.js'
import Card from './Card.js'
import logs from './logs.js'

function App() {

  const name = "jrobinson"

  const [logsData, setLogsData] = React.useState(logs)

  const cards = logsData.map(obj => {
    return (
        <Card key={obj.id} title={obj.title} rating={obj.rating} map={obj.map} description={obj.description}/>
    )
  })

  const test = {
    id: 4,
    title: "Brussels",
    rating: 5,
    map: "https://www.openstreetmap.org/export/embed.html?bbox=6.591024398803712%2C43.251890990327354%2C6.679430007934571%2C43.286514253894225&amp;layer=mapnik",
    description: "Something about the beach... My favorite place so far."
}


  return (
    <div className="App">
      <Top un={name} name={"actual"}/>
      <Top un={name} name={"filler"}/>
      {cards}
    </div>
  );
}

export default App;
