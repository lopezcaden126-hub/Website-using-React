import  { Addproduct } from "./component/Addproduct";
import { Footer } from './component/Footer'
import { Header } from './component/Header'
import { Home } from './component/Home'
import { Reviews } from './component/Reviews';
import {Routes,Route } from 'react-router-dom'
 
function App() {
 
  

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/Header" element={<Header />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Reviews" element={<Reviews/>} />
      <Route path="/Addproduct" element={<Addproduct/>} />
    </Routes>
    
);
}

export default App;
