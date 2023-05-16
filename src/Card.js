import React from 'react'

export default function Card(props) {
    return (
        <div id="container">
            <div className="card">
                <div id="card-top"><h2 class="card-title">{props.title}</h2> <h2 class="card-rating">{props.rating}</h2></div>
                <div className="card-map">map</div>
                <div>
                <h3>Verdict:</h3>
                <p className="card-description">Test</p>
                </div>
            </div>
        </div>
    )
}