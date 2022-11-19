import React from 'react'
import Tree from '../../components/Tree'
//import Compteur from '../../components/Compteur'

import io from "socket.io-client"

class Game extends React.Component {
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
      <div className="Game">
        {/* <MapGame serial={this.state.serial} /> */}
        <Tree />
        { console.log(this.state) }
        { console.log("Game:"+this.state.serial) }
      </div>
    );
  }
}

export default Game;
