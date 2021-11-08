import React, { useState, useEffect } from 'react'

export default function DialPad() {
    const [number, setNumber] = useState('')
    useEffect(() => {
        
    });
    const dial= async()=> {
        alert(number)
    }
    return (
        <div>
            <h1>Dial Pad</h1>
            <input onChange= {(e)=> {setNumber(e.target.value)}} ></input>
            <button onClick={ dial }>Call</button>
        </div>
    )
}
