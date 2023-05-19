import logo from './logo.svg';
import './App.css';
import Room from './components/room';
import Chat from './components/chat';
import { useState } from 'react';
import io from 'socket.io-client';


const socket = io.connect('http://localhost:5000');

function App() {
  const[username ,setUsername]=useState('')
  const[room ,setRoom]=useState('')
  const[chatScreen ,setchatScreen]=useState(false)
  return (

    <div className="App">
      {
        !chatScreen
          ?<Room username={username} room={room} setUsername={setUsername} setRoom={setRoom} setchatScreen={setchatScreen} socket={socket}/>
          :<Chat socket={socket} username={username} room={room}/>
      }
   
  
       
    </div>
  )
}

export default App;
