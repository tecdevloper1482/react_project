// List Rendering in React

// import React from 'react'

// const Listrendering = () => {

//     // static list array
//     const names = ["simran", "suman", "satyam", "satyarth"]
//   return (
//     <div>
//       {names.map((name) => (
//         <h2 key={name}>{name}</h2>
//       ))}
//     </div>
//   )
// }

// export default Listrendering



import React from 'react'

const Listrendering = () => {
    //array of objects

    const users = [
        { id: 1, name: "simran", age: 22 },
        { id: 2, name: "suman", age: 23 },
        { id: 3, name: "satyam", age: 24 },
        { id: 4, name: "satyarth", age: 25 }
    ]

    // print keys and values of objects in array
    

const res= users.map((user) => Object.keys(user).map((key) => (
    <h2 key={user.id + key}>{key}: {user[key]}</h2>
)))

    return (
        <div>
            {res}
        </div>
    )
}

export default Listrendering

