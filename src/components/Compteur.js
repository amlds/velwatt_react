import React from "react";
import io from "socket.io-client"

class Compteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serial: 0
    };
  }

  componentDidMount() {
    const socket = io('localhost:5000')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
    socket.on('serial', (data)=>{
      this.setState({serial: data})
      console.log("compteur : "+data)
      console.log("compteur 2 : "+ this.state.serial)
    })
    socket.on('disconnect',()=>console.log('server disconnected'))
  }

  render() {
    return (
      <div className="Compteur">
        {this.state.serial}
      </div>
    );
  }
}

export default Compteur;
