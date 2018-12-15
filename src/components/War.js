import React, { Component } from 'react'
import Dragon from './Dragon'

class War extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
                {this.props.dragons.map(d => (
                  <Dragon dragon={d} toggleWar={this.props.goHome} />
                ))}
            </div>
        )
    }

}

export default War
