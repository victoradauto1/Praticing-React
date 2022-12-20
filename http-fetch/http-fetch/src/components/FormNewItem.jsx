import React from 'react'
import { useState } from 'react'

function formNewItem() {

    const [formValues, setFormValues] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        const data = {...formValues, [name]: value}

        setFormValues(data)
    }


  return (
    <div>
        <fieldset>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do Exercício:</span>
                    <input type="text" name="" onSubmit={} />
                </label>
                <label>
                    <span>Grupamento muscular recrutado:</span>
                    <input type="text" name=""  />
                </label>
                <label>
                    <span>Nome do Exercício:</span>
                    <input type="text" name=""  />
                </label>
                <label>
                    <span>Efeito obtido na série:</span>
                    <input type="text" name=""  />
                </label>
                <label>
                    <span>Contido na série?</span>
                    <input type="radio" name=""  />
                </label>
            </form>
        </fieldset>
    </div>
  )
}

export default formNewItem