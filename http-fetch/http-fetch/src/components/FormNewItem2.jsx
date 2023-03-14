import React from 'react'
import { useState } from 'react'
import "./FormNewItem.css"

function FormNewItem2({exercises, setExercises, url}) {

    const [formValues, setFormValues] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})

    }

    const handleSubmit= async (e) =>{
        e.preventDefault()

        const res = await fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formValues)
        })

        const newItem = await res.json();

        setExercises((previous) => [...previous, newItem])

       
    
    }


  return (
    <div>
        <fieldset>
            <h3>Cadastrar Novo Exercício</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do Exercício :</span>
                    <input type="text" name="title" onChange={handleChange} value={formValues.title || ""}/>
                </label>
                <label>
                    <span>Grupamento muscular recrutado:</span>
                    <input type="text" name="group"  onChange={handleChange} value={formValues.group || ""}/>
                </label>
                <label>
                    <span>Intensidade:(alterar)</span>
                    <input type="text" name="intensity" onSubmit={handleChange} onChange={handleChange} value={formValues.intensity || ""} />
                </label>
                <label>
                    <span>Efeito obtido na série:</span>
                    <input type="text" name="rating" onChange={handleChange} value={formValues.rating || ""}/>
                </label>
                <label>
                    <span>Contido na série?(alterar)</span>
                    <input type="tetx" name="isSet" onChange={handleChange} value={formValues.isSet || ""}/>
                </label>
                <input type="submit" value="Cadastrar"/>
            </form>
        </fieldset>
    </div>
  )
}


export default FormNewItem2