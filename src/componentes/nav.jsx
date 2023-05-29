import React from 'react';
import Header from './Header';


const Nav = ({ allProducts, setAllProducts, total, setTotal, setCountProducts }) => {
    return (
      <nav>
        <div>
          <p>logo</p>
        </div>
        <ul>
          <li>Home</li>
          <li>Perfil</li>
          <li>
            <Header
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              setCountProducts={setCountProducts}
            />
          </li>
          <li>Contacto</li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;