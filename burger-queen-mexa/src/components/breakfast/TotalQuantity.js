import React from 'react';

function TotalQuantity({totalquantity,setTotalquantity}) {
    let handleAdd=()=>{
        setTotalquantity(totalquantity+1)
    }
    let handleSub=()=>{
        setTotalquantity(totalquantity-1)
    }

    return (
        <div>
            <h2>{totalquantity}</h2>
            <button onClick={()=>handleAdd()} >Sumar</button>
            <button onClick={()=>handleSub()}>Restar</button>
        </div>
    );
}

export default TotalQuantity;