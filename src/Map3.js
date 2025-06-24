// Write React code to render a component which displays images using map function. Map3.js

import React from "react";

import img1 from "./photo.jpg"
import img2 from "./krishnaji.jpg"

const Map3=()=>{
    var arr=[{id:2,img:img1},{id:2,img:img2}]

    return(
        <div>
            <h2>Task 4</h2>

            {
                arr.map((value)=>{
                    return <img src={value.img}/>
                })
            }
        </div>
    )
}

export default Map3