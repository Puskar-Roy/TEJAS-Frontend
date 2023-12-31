import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Resultt from './components/Result/Resultt.tsx'
import Navbar from "./components/Navbar/Navbar.tsx"
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Resultt/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
