import "./App.css";
import React from "react";
import Top from "./Top.js";
import Card from "./Card.js";
import logs from "./logs.js";
import Popup from "./Popup.js";

function App() {
  const name = "jrobinson";

  const [logsData, setLogsData] = React.useState(logs);
  const [renderPopup, setRenderPopup] = React.useState(false);

  function handleEnter(e) {
    e.target.style.background = "white";
  }

  function handleLeave(e) {
    e.target.style.background = "bisque";
  }

  function submitEntry(e) {
    let num = logsData.length;
    const template = {
      id: num,
      title: "Location",
      rating: 5,
      map: "https://www.openstreetmap.org/export/embed.html?bbox=6.591024398803712%2C43.251890990327354%2C6.679430007934571%2C43.286514253894225&amp;layer=mapnik",
      description: "Enter description",
    };
    setLogsData((oldData) => [template, ...oldData]);
    setRenderPopup(!renderPopup);
    console.log(e.target[0])
  }

  function openPopup() {
    setRenderPopup(!renderPopup);
  }

  function closeModal() {
    setRenderPopup(!renderPopup);
  }

  function handleEnter(e) {
    e.target.style.background = "white";
  }

  function handleLeave(e) {
    e.target.style.background = "bisque";
  }

  const cards = logsData.map((obj) => {
    return (
      <Card
        key={obj.id}
        title={obj.title}
        rating={obj.rating}
        map={obj.map}
        description={obj.description}
      />
    );
  });

  return (
    <>
      <Top un={name} name={"actual"} />
      <Top un={name} name={"filler"} />
      <h4
        id="add"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={openPopup}
      >
        add entry
      </h4>
      {renderPopup && <Popup submission={submitEntry} close={closeModal} overlayClose={closeModal} />}
      <>{cards}</>
    </>
  );
}

export default App;
