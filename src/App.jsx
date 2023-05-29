import { useState } from 'react'

import { Header } from './componentes/Header'
import { ProductListe } from './componentes/ProductList'
import Nav from './componentes/nav';

function App() {
  
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
  <>
     <Nav
     allProducts ={allProducts}
     setAllProducts={setAllProducts}
     total = {total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}/>
     
    <ProductListe 
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total = {total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}
    />
  </>

  );
}

export default App
