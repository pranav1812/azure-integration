import React, {useState, useEffect} from 'react';
import ls from 'local-storage';

export default function SaveAPIkey() {
    var [apiKey, setApiKey] = useState(ls.get('apiKey'));
    var [reload, setReload] = useState(1);
    useEffect(() => {
        console.log(ls.get('apiKey'));
    } , [reload]);
    return (
        <div>
            {
                ls.get('apiKey') ? (
                    <div> 
                        <h4>stored API key: </h4> 
                        <span> {ls.get('apiKey')} </span>
                    </div>
                ) : 
                <h3>NO API key selected so far</h3> 
            }
            <span>Enter new API key: </span>
            <input type="text" onChange={(e) => setApiKey(e.target.value)} />
            <button onClick={() => {
                ls.set('apiKey', apiKey); 
                setReload((reload+1)%2)}
            }>Save</button>
            
        </div>
    )
}
