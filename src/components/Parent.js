import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

constructor(props) {
    super(props)

    this.state = {
         
        message: 'This is Parent'
    }

    this.callingParent = this.callingParent.bind(this)
}

callingParent(childName) {
alert(`Hello ${this.state.message} from ${childName}`)
}


    render() {
        return (
            <div>
                {/* <button onClick={ this.callingParent.bind(this)}>Click</button>
                <button onClick={ () => this.callingParent()}>Click</button>
                <button onClick={this.callingParent}>Click</button> */}
                <Child  greet={this.callingParent}/>
            </div>
        )
    }
}

export default Parent
