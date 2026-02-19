import React, { use, useState } from 'react'

const Form = () => {

    const [name ,setName] = useState("")
    const [age,setAge] = useState(0)
    const [gender ,setGender] = useState("")
    const [hobby ,setHobby] = useState("")
  return (
    <div>
    <form action="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={age} onChange={(e) => setAge(e.target.valueAsNumber)} />
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        <input type="text" value={hobby} onChange={(e) => setHobby(e.target.value)} />
    </form>
      
    </div>
  )
}

export default Form
