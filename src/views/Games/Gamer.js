import React, { useState, useEffect } from 'react';
import io from "socket.io-client"

function Gamer() {
  const [data, setData] = useState({
    serial: 0
  });

  useEffect = () => {
    const socket = io('localhost:5000')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
    socket.on('serial', (data)=>{
      setData({serial: data})
    })
    socket.on('disconnect',()=>console.log('server disconnected'))
  }


  return (
    <div>

    </div>
  );
};

export default Gamer;
