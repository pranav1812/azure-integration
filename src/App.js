// import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React, { useState, useEffect } from 'react';

import DialPad from './components/DialPad';
import CallHistory from './components/CallHistory';
import Contacts from './components/Contacts';

function App() {
  const [tab, setTab] = useState("dialPad");
  useEffect(() => {
    console.log(tab)
  }, [tab]);

  return (
    <div className="App">
      <Navbar bg="dark" >
        <Nav.Item>
        <Nav.Link onClick= {()=> {setTab("dialPad")}}>Dial Pad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick= {()=> {setTab("callHistory")}} >Call History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick= {()=> {setTab("contacts")}} >Contacts</Nav.Link>
        </Nav.Item>
      </Navbar>  
      {
        tab === "dialPad"? <DialPad /> :
        tab === "callHistory"? <CallHistory /> :
        tab === "contacts"? <Contacts /> :
        null
      }
    </div>
  );
}

export default App;
