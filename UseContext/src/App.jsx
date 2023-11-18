import { Route, Routes } from "react-router-dom"
import { NavBar } from "./routes/Components/NavBar"
import { HomeScreen } from './routes/HomeScreen'
import { ContactScreen } from './routes/ContactScreen'
import { AboutScreen } from "./routes/AboutScreen"
import { UsuarioProvider } from "./routes/Context/UsuarioProvider"


export const App = () => {
  return (
    <>
    <h1>Router DOM </h1>
    <UsuarioProvider> 
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
        <Route path='/about' element= {<AboutScreen></AboutScreen>}></Route>
        <Route path='/contact' element= {<ContactScreen></ContactScreen>}></Route>
      </Routes>
    </UsuarioProvider>
    </>
  )
}
