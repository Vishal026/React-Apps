import React from 'react'

export default function TableItem(props) {

    const{id,userId,title,body} = props;

    return (

      // <table>
      //    <thead> 
      //    <th>userid</th>
      //     <th>id</th>
      //     <th>title</th>
      //    <th>body</th> 
      //    </thead>
      //    </table>
     
         <tr> 
          <td> {userId}</td>
          <td> {id}</td>
          <td> {title}</td>
          <td> {body}</td>

      </tr>  
  
    )
}
