import React from 'react';
import Popup from './Popup'

export default function Top(props) {

    function sub() {
        console.log("working");
      }

    return(
    <>
        <nav className={props.name}>
            <h2 id='title'>
                finder
            </h2>
            <h2 id='un'>
                {props.un}
            </h2>
        </nav>
    </>
    )
}