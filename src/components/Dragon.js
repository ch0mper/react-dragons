import React, { Component } from 'react'

class Dragon extends Component{

  handleClick = e => {
    this.props.toggleWar(this.props.dragon.id)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h3>{this.props.dragon.name}</h3>
        <img src={this.props.dragon.image} width="80"/>
        <hr/>
      </div>
    )
  }
}

export default Dragon
