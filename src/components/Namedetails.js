import React from 'react'
import './Design.css';


// const Mystyle = {
//      color : "LightBlue",
//      backgroundColor : "DodgerBlue",
//      padding :"10px",
//      Fontfamily : "Arial"

// }

 function Namedetails({name}) {
    return (
        <div className='div-stl'>
             <h1>your id is {name.id}. you name is {name.Name}. And you are from {name.City}</h1>
        </div>
    )
}

export default Namedetails