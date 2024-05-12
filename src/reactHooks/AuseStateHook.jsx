import React, { useState } from 'react'


const AuseStateHook = () => {
    const[color, setColor] = useState("red")
  return (
    <div>
        <p>My favorit color is {color}</p>  
        <button type="button" onClick={()=> setColor("Blue")}>Blue</button> 
    </div>
  )
}

export default AuseStateHook
