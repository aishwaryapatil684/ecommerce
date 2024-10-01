
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import ShopCategory from './Pages/ShopCategory';
import Loginsignup from './Pages/Loginsignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Kids from './Pages/Kids';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>


      </Routes>
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
