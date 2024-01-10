import React, {useState ,useEffect} from 'react'
import { ProductosContext } from './ProductosContext'

export const ProductosProvide = ({children}) => {

  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductos(data);
      console.log(data);
    } catch (error) {
      console.error('Error en el fetch', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);
  return (
    <ProductosContext.ProductosProvide value={{productos}}>
        {children}
    </ProductosContext.ProductosProvide>
  )
}
