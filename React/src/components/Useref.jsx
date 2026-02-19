import React ,{useRef,useState,useEffect} from 'react'

// const Useref = () => {

//     const actionbtn = useRef(null)
//     const onclickhandler = () =>{
//         actionbtn.current.value = "Hello Simran!"
//         actionbtn.current.focus();
//     }
//   return (
//     <div>
//       <input type="text" ref={actionbtn} />
//       <button onClick={onclickhandler}>Click me</button>

//     </div>
//   )
// }

// export default Useref

const Useref = () => {


    const [count ,setcount] = useState(0)
    const countref =useRef();
    const initial = useRef(count)

    const onclickhandler =()=>{
        setcount(prev => prev+1)
    }

    useEffect(() =>{
        countref.current = count
    },[count])

   
  return (
    <div>
        <p>initial: {initial.current}</p>
        <h1>Count:{count}</h1>
        <p>Previous count:{countref.current}</p>
        <button onClick={onclickhandler}>Increment</button>
     
      
    </div>
  )
}

export default Useref
