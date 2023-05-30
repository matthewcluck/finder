import React from "react";
import ReactDOM from "react-dom";

export default function Popup(props) {
  const [popup, setPopup] = React.useState(true);

  return ReactDOM.createPortal(
    <>
      {popup && (
        <>
          <div id="popup-overlay" onClick={props.overlayClose}></div>
          <div id="popup">
          <p id="popup-close" onClick={props.close}>x</p>
          <br></br>
            <h2 id="popup-add">Add Trip Entry</h2>
            <form id="form">
            <label id="form-location">Location: 
            </label><input id="form-location-input" name="location" />

            <label id="form-rating">Rating:  
            </label><input id="form-rating-input" name="rating" />

            <label id="form-map">Map: 
            </label><input id="form-map-input" name="map" />

            <label id="form-description">Description: 
            </label><textarea id="form-description-input" name="description" />
            
            <button id="popup-submit"onClick={props.submission}>Submit</button>
            </form>
          </div>
        </>
      )}
    </>,

    document.getElementById("root")
  );
}


