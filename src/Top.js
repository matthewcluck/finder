import React from 'react';

export default function Top(props) {

    function handleEnter(e) {
        e.target.style.background = 'white';
    }

    function handleLeave(e) {
        e.target.style.background = 'bisque';
    }

    return(
    <>
        <nav>
            <h2 id='title'>
                finder
            </h2>
            <h2 onMouseEnter={handleEnter} onMouseLeave={handleLeave} id='add'>
                add entry
            </h2>
            <h2 id='un'>
                {props.un}
            </h2>
        </nav>
    </>
    )
}