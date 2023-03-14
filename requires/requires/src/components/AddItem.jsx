import React from 'react';
import { useState } from 'react';

function AddItem({add}) {

    const [formValues, setFormValues] = useState({});

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
        add(formValues)
    
        setFormValues("")

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome do Produto:</span>
                <input type="text" name='produto' onChange={handleChange} value={formValues.produto || ""}/>
            </label>
            <label>
                <span>Preço do Produto</span>
                <input type="text" name='preço' onChange={handleChange} value={formValues.preço || ""}/>
            </label>
            <input type="submit" value="Acrescentar" />
        </form>
    </div>
  )
}

export default AddItem