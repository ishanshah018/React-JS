import React from "react";

const Filter=()=>{
    const arr=[1,2,3,4,5,3,7,3,9];

    const newarr=arr.filter((value)=>{
        if(value===3)
        {
            return false;
        }
        else
        {
            return true;
        }

    });

    var arr1=arr.join(",");
    var arr2=newarr.join(",");

    return(
        <div>
            <h2>Task 6</h2>
            <h1>Before Applying Filter {arr1}</h1>
            <h1>After Applying Filter {arr2}</h1>
        </div>
    )
}

export default Filter