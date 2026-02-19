// program to using useeffect hook in react

import React, { useState, useEffect } from 'react'

const Useeffect = () => {

    //useeffect without dependency array

    //     const [state, setstate] = useState(0)
    //     const [state2, setstate2] = useState(0)


    //     useEffect(() => {
    //         console.log("re-render")

    //     })

    //     const increment = () =>{
    //         setstate(prev => prev+1)

    //     }

    //     const decrement = () =>{
    //         setstate2(prev=>prev-1)
    //     }

    //     return (
    //         <div>
    //             <p>Count:{state}</p>
    //             <p>count2:{state2}</p>
    //         <button onClick={increment}>increment</button>
    //         <button onClick={decrement}>decrement</button>


    //         </div>
    //     )
    // }



    // useeffect  with empty dependency array
    //      const [state, setstate] = useState(0)
    //     const [state2, setstate2] = useState(0)


    //     useEffect(() => {
    //         console.log("re-render")

    //     },[])

    //     const increment = () =>{
    //         setstate(prev => prev+1)

    //     }

    //     const decrement = () =>{
    //         setstate2(prev=>prev-1)
    //     }

    //     return (
    //         <div>
    //             <p>Count:{state}</p>
    //             <p>count2:{state2}</p>
    //         <button onClick={increment}>increment</button>
    //         <button onClick={decrement}>decrement</button>


    //         </div>
    //     )
    // }




    //useeffect with dependency array

    //      const [state, setstate] = useState(0)
    //     const [state2, setstate2] = useState(0)


    //     useEffect(() => {
    //         console.log("re-render")

    //     },[state])

    //     const increment = () =>{
    //         setstate(prev => prev+1)

    //     }

    //     const decrement = () =>{
    //         setstate2(prev=>prev-1)
    //     }

    //     return (
    //         <div>
    //             <p>Count:{state}</p>
    //             <p>count2:{state2}</p>
    //         <button onClick={increment}>increment</button>
    //         <button onClick={decrement}>decrement</button>


    //         </div>
    //     )
    // }

    // useeffect with cleanup function






    useEffect(() => {
        let a = 0
        let setid = setInterval(() => {
            a++

            if (a <= 5) {

                console.log("Interval", a)
            }
            else {
                clearInterval(setid)
            }
        }, 1000)
        return () => {
            clearInterval(setid)
            console.log("Cleanup")
        }
    })

    return (
        <div>


        </div>
    )
}






export default Useeffect
