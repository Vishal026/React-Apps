
import React, { useState } from 'react'

function HooksBasics() {
 const [count,setcount]=useState(0)

const increase=(()=>{
   setcount(count+1)

})
const decrease=(() =>{

    setcount(count-1)
})

 

    return(
<div>
    <h1> you have clciked {count} times</h1>
    <button onClick={()=> increase()}> Clcik here to increase</button>
    <button onClick={()=> decrease()}> Clcik here to decrese</button>

</div>
        
    )


}

export default HooksBasics