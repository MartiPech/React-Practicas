import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import ComprasPage from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvide } from "./Context/ProductosProvide"

export const CarritoApp = () => {
  return (
  <>
    <ProductosProvide> 
      <NavBar> 
          <Routes>
              <Route path="/" element={<ComprasPage/>} ></Route>
              <Route path="/carrito" element={<CarritoPage/>} ></Route>
              <Route path="/*" element={<Navigate to="/"/>} ></Route>
          </Routes>
      </NavBar>
    </ProductosProvide>
  </>
  )
}
