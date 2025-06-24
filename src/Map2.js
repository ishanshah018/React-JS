// Write React code to render a component having an array of strings and convert it in Uppercase using map method.

import React  from "react";

const Map2=()=>{

const arr=["a","b","c","d","e"];

return(
    <div>
        <h1>This is Task 3</h1>

        {
            arr.map((value)=>{
                return <h2>Uppercase is: {value.toUpperCase()}</h2>
            })
        }
    </div>
)
}

export default Map2