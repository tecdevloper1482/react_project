import React from 'react'


// using Stingify to render the object as a string

// converting string to object using JSON.parse

// other 

const Inline = () => {


    const person ={
        name: 'John',
        age: 30,
        city: 'New York'
    }

    const personString = '"Simran,22,Punjab" '


// we can also use JSON.stringify to render the object as a string
  return (
    <div>
      {JSON.stringify(person)}
      <br />

      {JSON.parse(personString)}
    </div>
  )
}

export default Inline
