import React, { useEffect, useState } from 'react'

export const UseEffect = () => {

    useEffect(()=>{
        console.log("estou sendo executado")
    })

    const [ number, setNumber] = useState(1);

    const changeNumber = () =>{
        setNumber(number + 1)
    }

    useEffect (()=>{
        console.log("serei executado apenas um vez")
    },[])


    const [anotherNumber, setAnotherNumber] = useState(0);

    const changeAnotherNumber = () =>{
        setAnotherNumber(anotherNumber + 2)
    }

    useEffect(()=>{

        if(anotherNumber > 0){
            console.log("Serei executado sempre que estado mudar")
        }
        

    }, [anotherNumber])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(anotherNumber > 0)
            {console.log("Passaram-se 2 segundos!")}
        }, 2000)

        return () => clearTimeout(timer)
    },[anotherNumber])
  return (
    <div>
        <h2>UseEffect</h2>
        <p>valor: {number}</p>
        <button onClick={changeNumber}> Soma 1</button>
        <p>Outro valor: {anotherNumber}</p>
        <button onClick={changeAnotherNumber}> Soma 2</button>
    </div>
  )
}
