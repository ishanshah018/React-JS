// Create a component to perform the tasks as described below:
// 1. Add a text field and a submit button.
//  - While changing the value in the text field, display it below the form.
//  - Display this text field value in an alert box upon submitting it.
// 2. Add a button to perform click and double-click event tasks.
//  - On click event, display message in h3 tag “You clicked once”.
//  - On double-click event, display message in h3 tag “You clicked twice”.
//  - These message should be displayed below the button

import React from "react";

const Ex3=()=>{
        function handlesubmit(e)
        {
            e.preventDefault();
            alert(document.getElementById("uname").value);            
        }

        function handlechange(e)
        {
            document.getElementById("test").innerHTML=e.target.value;
        }

        function handleclick()
        {
            document.getElementById("test1").innerHTML="You Clicked Once"
        }

        function handledoubleclick()
        {
            document.getElementById("test1").innerHTML="You Clicked Twice"
        }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" id="uname" onChange={handlechange}/>
                <input type="submit"/>
            </form>

            <h2 id="test">On Change event</h2>


            <button onClick={handleclick} onDoubleClick={handledoubleclick}>CLICK</button>

            <h3 id="test1">Clicking Events</h3>
        </div>
    )
}

export default Ex3;