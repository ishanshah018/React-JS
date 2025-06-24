// Write React code to render a component to display all array elements in h2 tag using map
// function

import React from "react";

const Map1=()=>{

    const arr=[1,2,3,4,5];

    return(
    <div>
        <h1>Map: Task 2 </h1>
        
        {
            arr.map((value)=>{
                return <h2>Element is {value}</h2>
            })
        }
    </div>
    )
}

export default Map1