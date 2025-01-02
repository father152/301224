import React from 'react'
import "./main.css"
import LoremIpsum from 'react-lorem-ipsum'




  function Main() {
  return (
    <div className='main'>
    <div className='container-main'>
    <div className='container-left'>
    <h2>LEFT</h2>
    <p><LoremIpsum /></p>
    </div>
    
    <div className='container-center'>
   <h2>CENTER</h2>
   <p><LoremIpsum /><LoremIpsum /><LoremIpsum /></p>
    </div>
   
    <div className='container-right'>
    <h2>RIGHT</h2>
    <p><LoremIpsum /></p>
    
    </div>
    </div>
    </div>
  )
}
export {Main}