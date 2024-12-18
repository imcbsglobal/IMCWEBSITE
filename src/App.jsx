import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Solutions from "./components/Solutions"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"

function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/solutions" element={<Solutions/>}/>
          <Route path="/partners" element={<Partners/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
