import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import SignUp from "./pages/pageAuth/SignUp"
import Sign from './pages/pageAuth/Sign'
import Product from './pages/admin/Product'
import Basket from './components/Basket'

function App() {

  return (
    <Router>
      <Basket />
        <Routes>
          <Route path='/' element={<Product/>} />
          <Route path='/user/signup' element={<SignUp/>} />
          <Route path="/user/sign" element={<Sign/>} />
        </Routes>
    </Router>
  )
}

export default App
