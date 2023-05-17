import React from 'react'

export default function Card(props) {
    return (
        <div id="container">
            <div className="card">
                <div id="card-top"><h2 className="card-title">{props.title}</h2> <h2 className="card-rating"> - {props.rating} stars</h2></div>
                <iframe className="card-map" src={props.map}></iframe>
                <div>
                <h3>Verdict:</h3>
                <p className="card-description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
