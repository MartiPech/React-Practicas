import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import ComprasPage from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"

export const CarritoApp = () => {
  return (
  <>
    <NavBar> 
        <Routes>
            <Route path="/" element={<ComprasPage/>} ></Route>
            <Route path="/carrito" element={<CarritoPage/>} ></Route>
            <Route path="/*" element={<Navigate to="/"/>} ></Route>
        </Routes>
    </NavBar>
  </>
  )
}
