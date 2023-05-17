import React from 'react';

export default function Top(props) {

    const [addActive, setAddActive] = React.useState("no")

    function handleEnter(e) {
        e.target.style.background = 'white';
    }

    function handleLeave(e) {
        e.target.style.background = 'bisque';
    }

    function addLog() {
        setAddActive("yes")
        setTimeout(setAddActive("no"), 1000)
    }

    return(
    <>
        <nav className={props.name}>
            <h2 id='title'>
                finder
            </h2>
            <h2 onMouseEnter={handleEnter} onMouseLeave={handleLeave} id='add' onClick={addLog}>
                add entry
            </h2>
            <h2 id='un'>
                {props.un}
            </h2>
        </nav>
    </>
    )
}