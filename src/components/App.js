import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  state = {
    dragons: [],
  }

  fetchDragons = () => {
    fetch('http://localhost:3001/dragons')
    .then(res => res.json())
    .then(dragons => this.setState({dragons}))
  }

  homeDragons = () => {
    return this.state.dragons.filter(d => d.atWar == false)
  }

  warDragons = () => {
    return this.state.dragons.filter(d => d.atWar)
  }

  toggleWar = (dragonID) => {
    let dragon = this.state.dragons.find(d => d.id === dragonID)
    console.log('app toggle', dragon.atWar)
    //dragon.atWar = !dragon.atWar
    //return this.state
  }

  componentDidMount() {
    this.fetchDragons()
  }

  render() {
    console.log(this.state.dragons)
    console.log('home', this.homeDragons())
    console.log('war', this.warDragons())

    return (
      <div>
        <Home dragons={this.homeDragons()} goToWar={this.toggleWar} />
        <War dragons={this.warDragons()} goHome={this.toggleWar} />
      </div>
    );
  }
}

export default App;
