import './App.css';
import { MyNavigation } from './components/MyNavigation'
import { Route, Routes } from 'react-router-dom';
import { HomeBody } from './pages/HomeBody';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import { Products } from './components/Products'
import { ProductsAdmin } from './components/ProductsAdmin'
import { ProductDetails } from './pages/ProductDetails';
import { ProductForm } from './pages/ProductForm';
import { EntryPoint } from './components/EntryPoint';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {
  return (
    <div className="page-container ">
      <div className="content-wrap">
        <MyNavigation />

        <Routes>
          <Route path='' element={<HomeBody />} />
          <Route path='admin' element={<ProductsAdmin />} />
          <Route path='home' element={<HomeBody />} />
          <Route path='products' element={<Products />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path="about" element={<AboutUs />} />
          <Route path='products/:id' element={<ProductDetails />} />
          <Route path='products/:id/edit' element={<ProductForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
