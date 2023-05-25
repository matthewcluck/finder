import React from 'react';
import logs from './logs';

export default function Top(props) {

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