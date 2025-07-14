// import './App.css';
import '../src/App.css';
import Product from './components/Product/Product.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>

      {/* <div className='container'>  
        <Product tittle='Product 1' description='This is Product 1' stock= {10} />
        <Product tittle='Product 2' description='This is Product 2' stock= {15} />
        <Product tittle='Product 3' description='This is Product 3' stock= {0} />
      </div> */}

      <BrowserRouter>
        <Route>

          
        </Route>
      </BrowserRouter>


    </>
  )
}

export default App
