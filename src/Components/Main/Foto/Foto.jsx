import React from 'react'
import "./foto.css"
import {Link} from "react-router-dom";
import back from "./icons8-двойная-стрелка-влево-48.png"


function Foto() {
  return (
    <div className='foto'>
    <Link to="/" className="back"><img src={back} alt=''></img></Link>
    <img src="https://picsum.photos/id/78/1000/550" alt=""></img>
    
    </div>
  )
}
export {Foto}