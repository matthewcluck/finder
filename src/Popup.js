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
          <div id="popup-close" onClick={props.close}>x</div>
            <h2 id="popup-add">Add Trip Entry</h2>
            <form id="form">
            <label id="form-location">Location:
                <input name="location" />
            </label>
            <label id="form-rating">Rating:
                <input name="rating" />
            </label>
            <label id="form-map">Map:
                <input name="rating" />
            </label>
            <label id="form-description">Description:
                <textarea name="description" />
            </label>
            
            <button id="popup-submit"onClick={props.submission}>Submit</button>
            </form>
          </div>
        </>
      )}
    </>,

    document.getElementById("root")
  );
}


