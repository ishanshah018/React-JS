import P2 from "./P2"

const P1=()=>{
    const carInfo = { brand: "Kia", name: "Sonet" };

    return(
        <div>
            <h1>Car Details</h1>
            <P2 car={carInfo}/>
        </div>
    );
}

export default P1