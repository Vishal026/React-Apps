import React from 'react'
import Namedetails from './Namedetails'

 function NameList() {

    // const names = ['US','UK','Europe']
     

    const names = [{
       id :1,
       Name: 'Vishal',
       City:'Bangalore'

    },
    {
        id :2,
       Name: 'Abhi',
       City:'Mysore'
    },
    {
        id :3,
       Name: 'Manjunath',
       City:'Paris'
    }]

    const nameList = names.map(name => <Namedetails key={name.id} name={name}/>)
    return (
        <div>
            {nameList}
        </div>
    )
}
export default NameList