import React from 'react'

 function Child(props) {
    return (
        <div>
            <button onClick={ () => props.greet(' from child')}> Greet Parent</button>
        </div>
    )
}
export default Child