import {Route, BrowserRouter, Routes} from "react-router-dom"
import Home from "../screens/Home"
import Login from "../screens/Login"
import Register from "../screens/Register"

const Approutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home/> } />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Approutes