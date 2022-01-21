import React, { Component } from 'react'

 class ConditionRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
            isLoggedin :false
        }

        
    }
    
    render() {

        return this.state.isLoggedin ?
        <h1> Welcome Vishal</h1> :
        <h1> Welcome Guest</h1>

        // return this.state.isLoggedin && <h1> Welcome Vishal</h1>  --short circuit method
        // return (
        //     <div>
                
        //     </div>
        // )
    }
}
export default ConditionRendering