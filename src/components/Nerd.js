import { render } from '@testing-library/react'
import react from 'react'
import React, {Component} from 'react'

class Nerd extends Component{
constructor(){
    super()

    this.state = {
        // message : "Welcome to react"
        value :1
    }
}

increaseNumber(){
   this.setState((e) =>{
        // message:'Thank you for subscribing'

        return {
            value:e.value+1
        }
        
    })
}

decreaseNumber() {
       this.setState((e) => {
         
        return {
            value:e.value-1
        }
       })

}

    render() {
        return(
            <div>
            // <h1> Hi {this.props.name} lives in {this.props.city}</h1>
              <h1>Hi {this.state.value} </h1>
            <button onClick={()=>this.increaseNumber()}>Increase</button>
            <button onClick={()=> this.decreaseNumber()}> Decrease</button>
            </div>
        )
    }
}

export default Nerd;


