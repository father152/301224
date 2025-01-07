import React from 'react'
import women from "./woman-8597134_1280.png"
import "../Catalogue/catalogue.css"

function Catalogue() {
  return (
    <div className='catalogue'>
    <div className='container-catalogue'>
    <div className='women'>
    <img src= {women} alt=''></img>
    </div>
    </div>
    
    </div>
  )
}
export {Catalogue}