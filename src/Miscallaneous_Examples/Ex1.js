// Create react component to perform the tasks as asked below.
// Add array of 5 objects with properties Name and Age. Check if age is greater than 50 then
// display the person name of who are greater than 50 age. 

import React from "react";

const Ex1=()=>{
    const people = [
    {
    name: 'ABC',
    age: 31,
    },

    {
    name: 'XYZ',
    age: 55,
    },

    {
    name: 'PQR',
    age: 36,
    },

    {
    name: 'EFG',
    age: 69,
    },

    {
    name: 'DEF',
    age: 34,
    }
];

    return(
        <ul>
            {
                people.filter((p)=>p.age>=50).map((p)=>{return(<h3>Name: {p.name}</h3>)})
            }
        </ul>
    )
}

export default Ex1