// import './App.css';
import '../src/App.css';
import Product from './components/Product/Product.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';

function App() {
  return (
    <>

      {/* <div className='container'>  
        <Product tittle='Product 1' description='This is Product 1' stock= {10} />
        <Product tittle='Product 2' description='This is Product 2' stock= {15} />
        <Product tittle='Product 3' description='This is Product 3' stock= {0} />
      </div> */}
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      

        
    </>
  )
}

export default App
