import logo from './logo.svg';
import './App.css';
import Navbar from './compoents/nawbar/navbar';
import Banner from './compoents/banner/bannaer';
import Futr from './compoents/futr/futr';
import Product from './compoents/product/product';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Futr />
      <Product />
    </div>
  );
}

export default App;
