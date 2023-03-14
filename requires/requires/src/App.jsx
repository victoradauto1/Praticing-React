import { useState, useEffect } from 'react'
import './App.css'
import AddItem from './components/AddItem';
import ShopList from './components/ShopList';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([url])

  useEffect(()=>{

    const fetchData = async () =>{
      const res = await fetch(url);
      const data =  await res.json();
      setProducts(data)
    }

    fetchData();
  }, []);

  
  const add = async (itemAdd) =>{

      const res = await fetch(url, 
        {method: "POST",
      headers: {"content-type": "Application/json"},
      body: JSON.stringify(itemAdd)}

      );
      
      const newItem = res.json()
      setProducts([...products, newItem]) 

  }
  

  const deleting = async (e) =>{

   
    const itemDel = `${url}/${e}`

    console.log(itemDel)

    const res = await fetch(itemDel, {
      method: "DELETE",
      headers: {"content-type" : "Application/json"}
    });

    
  }
    

  console.log(products)


  return (
    <div className="App">
      <h1>Loja Sua Casa</h1>
      {products.map((set, id)=>(
        <ShopList
        key={id}
        produto={set.produto}
        preço={set.preço}
        id={set.id}
        deleting={()=>{deleting(id)}}
        itemDel={set.itemDel}
        />
      ))}

      <AddItem add={add}/>
      
      
    </div>
  )
}

export default App
