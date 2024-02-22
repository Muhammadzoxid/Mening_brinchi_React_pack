import logo from './logo.svg';
import './App.css';
import Navbar from './compoents/nawbar/navbar';
import Banner from './compoents/banner/bannaer';
import Futr from './compoents/futr/futr';
import Product from './compoents/product/product';
import Papka from './compoents/yangi_papka1/papka';
import Papka2 from './compoents/product/yangi_papka2/papka2';
import Papka3 from './compoents/papka3/papka3';
import Papka4 from './compoents/papka4/papka4';
import Papka5 from './compoents/papka5/papka5';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Futr />
      <Product />
      <Papka />
      <Papka2 />
      <Papka3 />
      <Papka4 />
      <Papka5 />
    </div>
  );
}

export default App;
