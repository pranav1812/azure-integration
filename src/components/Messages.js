import React, {useState} from 'react'
import config from '../utils/config'
import axios from 'axios';

export default function Messages() {
    var [toNumber, setToNumber] = useState(null);
    var [fromNumber, setFromNumber] = useState(null);
    var [message, setMessage] = useState(null);

    const sendMessage= async()=>{
        var url= config.rootUrl + 'contacts/sendSMS';
        try {
            if(! toNumber || ! fromNumber || ! message){
                alert('Please fill all the fields');
                return;
            }
            var body= {
                archivedAuto: false,
                fromNumber: fromNumber,
                toNumber: toNumber,
                message: message
            }
            await axios.post(url, body, {
                headers: {
                    apikey: config.apikey
                }
            });
            console.log('Message sent');
        } catch (err) {
            console.log(err);
            alert('Error sending message');
        }
    }
    return (
        <div>
            <h1> Send Message </h1>
            <span>To Number: </span> <input onChange= { (e)=> setToNumber(e.target.value) } />
            <span>From Number: </span> <input onChange= { (e)=> setFromNumber(e.target.value) } />
            <span>Message: </span> <input onChange= { (e)=> setMessage(e.target.value) } />
            <button onClick= {sendMessage} >Send</button>
        </div>
    )
}
