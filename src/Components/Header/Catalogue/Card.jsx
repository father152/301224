import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"


 function Card(props) {
   return (
    <div className="card">
    <div>
      <span className="brand">{props.brand}</span>
    </div>
    <div>
      <span className="name">{props.name}</span>
    </div>
    <img className="pic" src={props.image} alt={props.names} />
    <div>
      <span className="model">{props.model}</span>
    </div>
    <div>
      <span className="description">{props.description}</span>
    </div>
    <div>
      <span className="cost">{props.cost}$</span>
    </div>

    <button className="buy">
      <Link to="/buy">buy</Link>
    </button>
    </div>
  )
}
export {Card}