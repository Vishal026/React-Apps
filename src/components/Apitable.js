import axios from 'axios'
import React, { useState } from 'react'
import TableItem from './TableItem'

function Apitable() {        
   const[data,setdata]= useState()
  //  const[singleUserData,setsingleUserDate] = useState()
   const[isloaded,setisloaded] =useState(false)
  // const [apiResponse,setApiResponse] = useState({statusCode:0,isDataLoaded:false,data:[]})
      
       
     const callAPI = () => {
          
      axios.get('https://jsonplaceholder.typicode.com/posts').then(

        res => {setdata(res.data)
        setisloaded(true)
        }
        )
     }

     const APIcallonID =(e) => {
       e.preventDefault()
       console.log(e.target.id.value)
      let id=e.target.id.value;
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(

      singleUserData => {setdata(singleUserData.data)
      setisloaded(true)
      }
      )
     }
  
        
    return (
           
        <div>
          <form onSubmit={APIcallonID}>
          <input type="text" name="id"/>
          <button type="submit"> Get Details BY ID</button>
          </form>
          <button onClick={callAPI} > Click to get Details</button>

          

        <table>
          { isloaded &&
        <thead> 
         <th>userid</th>
         <th>id</th>
         <th>title</th>
        <th>body</th> 
          
    </thead>
}
      { isloaded ?  data.length >1 ? data.map((e) => <TableItem key={e.id}{...e}/> ) : <TableItem key={data.id} {...data}/>
         : <h1> Loading...</h1>
      }
      </table>
        </div>
       
    )
}

export default Apitable