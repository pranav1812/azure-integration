import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../utils/config'

import ContactTab from './ContactTab';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        try {
            var url= config.rootUrl + `contacts/getContacts?offset=0&pageLimit=20`;
            axios.get(url, {
                headers: {
                    apikey: config.apikey
                }
            }).then(response=> {
                console.log(response.data.contact_list);
                setContacts(response.data.contact_list);
            }).catch(err=> {
                console.log(err);
            })  
        } catch (err) {
            console.log('Failed to load data: ', err.message);
        }
    }, []);

    return (
        <div>
            <h1>Team Contacts</h1>
            
            {
                contacts.length? contacts.map((call, ind)=> (
                    <div>
                        <hr />
                            <ContactTab obj= {call} key= {ind} />
                        <hr />
                    </div>
                )) : 
                <h1>No Contacts to show...</h1>
            }
        </div>
    )
}
