import { useRef } from 'react';


import React from 'react'

export const UseRef = () => {

    const numberRef = useRef(15)

    const Add = (valor) =>{

        numberRef.current = numberRef.current + valor

        console.log(numberRef.current)


    }


  return (
    <div>
        <h1>useRef</h1>

        { numberRef.current }

        <button onClick={()=> Add(5)}> Somar 5</button>

        
    </div>
  )
}
