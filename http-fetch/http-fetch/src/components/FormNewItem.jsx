import React from 'react'
import { useState } from 'react'
import "./FormNewItem.css"

function FormNewItem() {

    const [formValues, setFormValues] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})

    }

    const handleSubmit= (e) =>{
        e.preventDefault()
        console.log(formValues)

        setFormValues("")
    }

  return (
    <div>
        <fieldset>
            <h3>Cadastrar Novo Exercício</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do Exercício:</span>
                    <input type="text" name="title" onChange={handleChange} value={formValues.title || ""}/>
                </label>
                <label>
                    <span>Grupamento muscular recrutado:</span>
                    <input type="text" name="group"  onChange={handleChange} value={formValues.group || ""}/>
                </label>
                {/* <label>
                    <span>Intensidade:</span>
                    <input type="radio" name="intensity" onSubmit={handleChange} />
                </label> */}
                <label>
                    <span>Efeito obtido na série:</span>
                    <input type="text" name="rating" onChange={handleChange} value={formValues.rating || ""}/>
                </label>
                {/* <label>
                    <span>Contido na série?</span>
                    <input type="radio" name=""  />
                </label> */}
                <input type="submit" value="Cadastrar"/>
            </form>
        </fieldset>
    </div>
  )
}

export default FormNewItem