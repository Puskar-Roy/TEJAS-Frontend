import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
