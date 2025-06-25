import React from "react";

const Onclick=()=>{
    function handleclick()
    {
        alert("Welcome to Tasks");
    }

    return(
        <div>
            <center>
                <button onClick={handleclick}>Click Me </button>
            </center>
        </div>
    );
}

export default Onclick