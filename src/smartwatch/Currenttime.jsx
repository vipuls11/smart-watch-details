import React, { useState } from "react";

const Currenttime=()=>{
    let Time= new Date().toLocaleTimeString();

    const [time, setTime]= useState(Time);


    const Updatetime=()=>{
     Time = new Date().toLocaleTimeString();
     setTime(Time);
    };

    return(
        <>
        <h2>{time}</h2>
        <button onClick={Updatetime}>Onclick time will updated</button>
        </>
    )
}

export default Currenttime;