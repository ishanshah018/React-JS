import React from "react";

const Onsubmit=()=>{
    function handlesubmit(e)
    {
        e.preventDefault();
        alert("You clicked on Submit");
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <center>
                    <br></br> 
                    <button>SUBMIT</button>
                </center>
            </form>
        </div>
    )
}

export default Onsubmit