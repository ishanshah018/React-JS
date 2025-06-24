import React from "react";

const List=()=>{
    const students = [
    {id: 1, name: 'ABC'},
    {id: 2, name: 'XYZ'},
    {id: 3, name: 'PQR'}
    ];

    return(
        <ul>
            <h3>Task-4: List & Keys </h3>
            {
                students.map((value,index)=>{
                    return <li key={index}>{value.name}</li>
                })
            }
        </ul>
    )
}

export default List