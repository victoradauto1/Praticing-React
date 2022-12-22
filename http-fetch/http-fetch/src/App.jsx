import React from 'react'
import './App.css'
import { useState, useEffect} from "react";
import WorkoutList from './components/WorkoutList';
import FormNewItem from './components/FormNewItem';

const url = "http://localhost:3000/exercises"

function App() {

  const [exercises, setExercises] = useState([]);

  useEffect(()=>{

    async function FetchData() {

    const res = await fetch(url);

    const data = await res.json();

    setExercises(data)

  };
  
  FetchData()
  },[]);


  return (
    <div className="App">
      <h1> Lista de Exercícios</h1>
      {exercises.map((set)=>(
        <WorkoutList
        key={set.id}
        title={set.title}
        group={set.group}
        intensity={set.intensity}
        rating={set.rating}
        isSet={set.isSet}
         />
      ))}
      <FormNewItem />

    </div>
  )
}

export default App
