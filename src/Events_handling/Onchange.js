// Write react js script to display values in console while changing it in text box. 

const Onchange=()=>{
    function handlechange(event)
    {
        console.log(event.target.value)
    }

    return(
        <div>
            <input type="text" name="firstname" placeholder="Type here to see changes on console " onChange={handlechange}/>
        </div>
    )
}

export default Onchange