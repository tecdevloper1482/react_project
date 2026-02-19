// array of object with unique ids, then iterate over keys and values of that array of object and  without and with using List rendering 

import React from 'react'

const Hook1 = () => {

    const users = [
        { id: 1, name: "simran", age: 22 },
        { id: 2, name: "suman", age: 23 },
        { id: 3, name: "satyam", age: 24 },
        { id: 4, name: "satyarth", age: 25 }
    ]
// without using list rendering

    // const res = users.map((user) => 
    //     {return Object.entries(user).map(([key, value]) => {
    //         const key1 = user.id + key
    //         return <h2 key={key1}>{key}: {value}</h2>
    //     })})

    // with using list rendering
    // showing unique keys and values of objects in array of objects
    

    const res= users.map((user) => Object.keys(user).map((key) => (
        <h2 key={user.id + key}>{key}: {user[key]}</h2>
    )))



  return (
    <div>
        {res}
      
    </div>
  )
}

export default Hook1
