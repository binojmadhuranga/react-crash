// import './App.css';
import '../src/App.css';
import Product from './components/Product/Product.jsx';

function App() {
  return (
    <>

      <div className='container'>  
        <Product tittle='Product 1' description='This is Product 1' stock='10' />
        <Product tittle='Product 2' description='This is Product 2' stock='10' />
        <Product tittle='Product 3' description='This is Product 3' stock='111' />
      </div>
    </>
  )
}

export default App
