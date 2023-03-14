import { useEffect, useReducer } from 'react'
import { useContext } from "react";
import { SomeContext } from './HookUseContext';



export const HookReducerHuriel = () => {

    const initial = {count: 0}

    const {contextValue} = useContext(SomeContext)


    const counterReducer = (state, action) =>{


        switch (action.sapato){
            case 'decrement':
                return {count: state.count - 1};
            
            case 'increment':
                return { count: state.count + 1};

            case "reset":
                return { count: state.count = 0}

           
            
            default:
                return state;
        }

    }

   

    const [counter, dispatch] = useReducer(counterReducer, initial)


  return (
    <div>
        <button onClick={()=>dispatch({sapato: "decrement"})}>dimunir</button>
        {counter.count}
        <button onClick={()=>dispatch({sapato: "increment"})}>somar</button>
        <button onClick={()=>dispatch({sapato: "reset"})}>reset</button>
        <h2>Use Context</h2>
        <p> valor do context: {contextValue}</p>
     

    </div>
  )
}
