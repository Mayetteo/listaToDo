import React from "react";
import "./Main.css";
export default function Lista( { array, cancella} ){

    const tutti = array.map(val=>{

        return(
            <ul className="modifica lista" key={val.id}>
                    <li>{val.valore}</li>
                    <button className="btn" onClick={()=>cancella(val.id)}>Del</button>
            </ul>
        );
    });

    return (
        <>
            <div className="riga">
                {tutti}
            </div>
        </>
    )
}