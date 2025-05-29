// Write React code to render a component with the following data:
// • A heading in italics, blue color, and font-size 25px.
// • An image.
// • An ordered list of 3 fruits.
// • The current time and current date in red color, centered.


import React from 'react'
import img1 from "./photo.jpg"


const Task1 = () => {
    const dt=new Date().toLocaleDateString();
    const tm=new Date().toLocaleTimeString();

return (
    
<div>
    <h1 style={{color:'blue',fontStyle:'italic',fontSize:'25px'}}>Hello this is Task-1 </h1>
    <img src={img1}/>

    <ol>
        <li>Apple</li>
        <li>Lichi</li>
        <li>Orange</li>
    </ol>

<div style={{ color: 'red', textAlign: 'center' }}>
    <h4>Current Date: {dt}</h4>
    <h4>Current Time: {tm}</h4>
</div>
    
</div>
)
}

export default Task1
