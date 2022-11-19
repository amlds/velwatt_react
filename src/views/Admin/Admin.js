import React from 'react'
import io from "socket.io-client"
import Service from '../../services/serial';

const Admin= ()=> {
  /* const [serial, newData] = React.useState('fetching')
  React.useEffect(()=>{
    const socket = io('localhost:5000')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
   socket.on('serial', (data)=>newData(data))
   socket.on('disconnect',()=>newData('server disconnected'))

 },[]) */
 const [serial, setSerial] = React.useState();

 const updateSerial = (data) => {
   setSerial(data);
   console.log("MAP GAME : "+data);
 }
 return (
   <div className="Admin">
    hello you connecte
    {serial}
      <Service todo={updateSerial} />
   </div>
 )
}
export default Admin;
