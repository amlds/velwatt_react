import React from 'react'
import io from "socket.io-client"


const Service= (props)=> {
  React.useEffect(()=>{
    const socket = io('localhost:5000')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
   socket.on('serial', (data)=>{
    props.todo(data)
  })
   socket.on('disconnect',()=>console.log('server disconnected'))

 },[])
 return (
   <>

   </>
 )
}

export default Service;
