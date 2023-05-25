import React from 'react'
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom/client';

export default function Popup(){
    return ReactDOM.createPortal(
        <div>
            <p>my modal</p>
        </div>,
        document.body
    )
}