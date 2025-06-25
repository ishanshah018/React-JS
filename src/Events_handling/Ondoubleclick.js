import React from "react";

const Ondoubleclick=()=>{
    function handledoubleclick()
    {
        alert("Double clicked")
    }

    return(
        <div>
            <center>
                <button onDoubleClick={handledoubleclick}>Click Double Times</button>
            </center>
        </div>
    )
}

export default Ondoubleclick;