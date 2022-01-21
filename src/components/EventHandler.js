import React, { Component } from 'react'

class EventHandler extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          count:0
     }
 }
 

  clickButton() {
      console.log(this)
  }

    render() {
        return (
            <div>
                <button onClick={this.clickButton}> Clickevent</button>

            </div>
        )
    }
}

export default EventHandler
