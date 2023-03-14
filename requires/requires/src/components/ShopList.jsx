import React from 'react';


function ShopList({produto, preço, deleting}) {
  

  return (
    <div>
      
        <h2>{produto}</h2>
        <p>Valor: R$ {preço}</p>
        <button onClick={deleting}>Excluir</button>
        

    </div>
  )
}

export default ShopList