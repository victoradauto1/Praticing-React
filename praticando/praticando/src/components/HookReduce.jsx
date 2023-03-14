import React from 'react'
import { useReducer } from 'react'

export const HookReduce = () => {

    const [number, dispatch] = useReducer( (state, action)=>{
        return Math.random(state)
    })

  return (
    <div>
        <h2>UseReducer</h2>
        <p>Número:{number} </p>
        <button onClick={dispatch}>Gerar Número</button>
    </div>
  )
}
