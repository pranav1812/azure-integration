import React, { useState, useEffect } from 'react'
import config from '../utils/config';
import axios from 'axios';

export default function DialPad() {
    const [number, setNumber] = useState('');
    const [fromNumber, setFromNumber] = useState('');

    useEffect(() => {
        
    });

    const dial= async()=> {
        console.log(number);
        var url= config.rootUrl + `contacts/callToUser?from=${fromNumber}&to=${number}`;
        console.log(url);
        try {
            await axios.get(url, {
                headers: {
                    apikey: config.apikey
                }
            });
        } catch (err) {
            console.log(err.message);
            alert('failed: ', err.message);
        }

    }

    return (
        <div>
            <h1>Dial Pad</h1>
            <span> From Number: </span> <input onChange= {(e)=> {setFromNumber(e.target.value)}} ></input> 
            <span> To Number: </span> <input onChange= {(e)=> {setNumber(e.target.value)}} ></input>
            <button onClick={ dial }>Call</button>
        </div>
    )
}
