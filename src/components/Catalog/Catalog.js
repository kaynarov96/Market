import React from 'react'

export default function Catalog(props) {
    return (
        <div className="main">
            <div className="y-block">
                <img src={props.url} alt="" />
                <div className="about">{props.price}<span className="r">₽</span>
                    <p>{props.name}</p>
                </div>
            </div>


        </div>

    )
}