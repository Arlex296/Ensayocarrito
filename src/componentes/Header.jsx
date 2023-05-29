import  { useState } from 'react'
import imagen from '../Imagenes/carro-de-la-compra.png'
export const Header = ({allProducts,
    setAllProducts,
    total,
    countProducts,
    setTotal,
    setCountProducts
    }) => {
  const [active, setActive] = useState(false);
    
  const onDeleteProduct = (product) =>{
       const results = allProducts.filter(
        item => item.id !== product.id
       );
       setTotal(total - product.price * product.quantity);
       setCountProducts(countProducts - product.quantity);
       setAllProducts(results)
  };
    const onClearCart =() => {
         setAllProducts([]);
         setTotal(0);
         setCountProducts(0);

    };



    return (<header>
        {/* <h1>Tienda</h1> */}

        <div className="container-icon">
            <div className="container-cart-icon" onClick={() => setActive(!active)}>
               
               <img src={imagen} className="icon-cart" alt="" />
                <div className="count-products">
                    <span id="contador-productos">{countProducts}</span>
                </div>
            </div>
            <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
           {

              allProducts.length ? (
                <>
                	<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

                <div className="cart-total">
                    <h3>Total:</h3>
                    <span className="total-pagar">${total}</span>
                </div>

                <button className='btn-clear-all' onClick={onClearCart}>Vaciar Carrito</button>
                
                </>
              )  : (
                <p className="cart-empty">El carrito está vacío</p>
              )

           }
               
               
            </div>
        </div>
        
    </header>)
};

export default Header