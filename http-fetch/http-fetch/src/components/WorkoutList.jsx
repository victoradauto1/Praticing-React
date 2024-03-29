import React from 'react';
import "./WorkoutList.css"

function WorkoutList({id, title, group, intensity, rating, isSet, deleting}) {
  return (
    <div>
        <h2 key={id}>{title}</h2>
        <ul>
            <li>grupo muscular: {group}</li>
            <li>intensidade:{intensity}</li>
            <li>efeito na série: {rating} </li>
        </ul>
        {isSet? <p className='contido'>Exercício contido na Série Atual</p> : <p className='fora'>Exercício não aproveitado</p>}
        <button onClick={deleting}>Excluir</button>
    </div>
  )
}

export default WorkoutList