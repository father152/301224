import React from 'react'
import women from "./woman-8597134_1280.png"
import "../Catalogue/catalogue.css"
import { Carousel } from './Carousel'


function Catalogue() {
  return (
    <div className='catalogue'>
    <h2>CATALOGUE</h2>
    <div className='container-catalogue'>
    <Carousel />
    <div className='women'>
    <img src= {women} alt=''></img>
    </div>
    </div>
    
    </div>
  )
}
export {Catalogue}