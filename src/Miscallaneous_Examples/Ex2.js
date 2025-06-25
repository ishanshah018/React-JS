// Create react app to display students of CSE branch

import React from "react";

const Ex2=()=>{
    let students = [
    { id: "001", name: "N1", Branch: "CSE" },
    { id: "002", name: "N2", Branch: "CE" },
    { id: "003", name: "N3", Branch: "CSE" },
    { id: "004", name: "N4", Branch: "CSE" },
    { id: "005", name: "N5", Branch: "IT" }
    ];

    return(
        <div>
            <ul>
                {
                    students.filter((s)=>s.Branch==="CSE").map((s)=>{return(<h3>Students of CSE Branch are: {s.name}</h3>)})
                }
            </ul>
        </div>
    )
}

export default Ex2