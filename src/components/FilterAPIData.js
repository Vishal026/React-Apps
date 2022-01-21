import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableItem from './TableItem'

function FilterAPIData() {
  const[Apidata,setApidata] = useState()
  const[SearchKey, setSearchKey]=useState('')
      

  const callAPI=() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(

        res => {setApidata(res.data)
            
    // console.log(res)
  }
  )
}
  
useEffect(()=>{
    callAPI()
},[]
)
  

// const handleFilterDate =(e)=>{
//     console.log(Apidata)

//     const FilterList = Apidata.filter(f=> Number(f.userId) ===Number(e.target.value) )
//     console.log(FilterList)
//     setApidata(FilterList)

// } 

return (
<div>


       <input name="test" placeholder='Enter title' onChange={(e)=>setSearchKey(e.target.value)}/>
       
  
    <table>
        <thead>
            <th> Userid</th>
            <th>id</th>
            <th>Title</th>
            <th>body</th>
        </thead>


        { Apidata!=undefined && Apidata.
            filter(f=> {
                    if(SearchKey !== '')
                   return Number(f.userId) === Number(SearchKey)
                   else return f
                }
            ).map((e)=> <TableItem key={Apidata.id} {...e}/>)
        
        }
       
    </table>
  
 </div>
)


}
export default FilterAPIData