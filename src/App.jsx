// import './App.css';
import '../src/App.css';
import Product from './components/Product/Product.jsx';

function App() {
  return (
    <>
     <h1 id='hello'>Hello world</h1>
    <Product tittle='Product 1' description='This is Product 1'/>
    <Product tittle='Product 2' description='This is Product 2'/>
    <Product tittle='Product 3' description='This is Product 3'/>
    </>
  )
}

export default App
