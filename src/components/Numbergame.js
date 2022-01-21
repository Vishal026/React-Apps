import React, { Component } from 'react'

 class Numbergame extends Component {

    constructor() {

        super()

        this.state = {
            count :1
        }

    }

    increaseNumber() {

        this.setState((e) => {

            return{
            count:e.count+1
            }
        })

    }
        decreaseNumber() {
            this.setState((e) => {
                return {
                    count:e.count-1
                }
            })
        }
    
        buttonClick() {
            console.log('clicked the button');
        }
    
    render() {
        return (
            <div>
                <h1> Number is {this.state.count}</h1>
                <button onClick={() =>this.increaseNumber()}> Increase Number</button>
                <button onClick={this.decreaseNumber}>Decrease Number</button>
                <button onClick={this.buttonClick}>ClickButton</button>
            </div>
        )
    }
}

export default Numbergame;