// import './App.css';
import '../src/App.css';
import Product from './components/Product/Product.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

function App() {
  return (
    <>

      {/* <div className='container'>  
        <Product tittle='Product 1' description='This is Product 1' stock= {10} />
        <Product tittle='Product 2' description='This is Product 2' stock= {15} />
        <Product tittle='Product 3' description='This is Product 3' stock= {0} />
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
