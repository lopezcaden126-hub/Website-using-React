
import { Navbar } from './component/Navbar'
import { Aboutbar } from './component/Aboutbar'
import { Home } from './component/Home'
import {Routes,Route } from 'react-router-dom'
function App() {
 
  

  return (
    <Routes>
      <Route path="/Aboutbar" element={<Aboutbar />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Navbar" element={<Navbar />} />
    </Routes>
    
);
}

export default App
