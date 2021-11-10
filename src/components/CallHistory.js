import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../utils/config'

import CallHistoryTab from './CallHistoryTab'

export default function CallHistory() {
    const [callHistory, setCallHistory] = useState([]);

    useEffect(() => {
        try {
            var url= config.rootUrl + `contacts/getCallHistory?userId=${config.userId}&pageLimit=20`;
            axios.get(url, {
                headers: {
                    apikey: config.apikey
                }
            }).then(response=> {
                console.log(response.data.call_list);
                setCallHistory(response.data.call_list);
            }).catch(err=> {
                console.log(err);
            })  
        } catch (err) {
            console.log('Failed to load data: ', err.message);
        }
    }, []);

    return (
        <div>
            <h1>Call History</h1>
            
            {
                callHistory.length? callHistory.map((call, ind)=> (
                    <div>
                        <hr />
                        <CallHistoryTab obj= {call} key= {ind} />
                        <hr />
                    </div>
                )) : 
                <h1>No Call History</h1>
            }
        </div>
    )
}
