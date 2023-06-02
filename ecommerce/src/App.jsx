import './App.css';
import { MyNavigation } from './components/MyNavigation'
import { Route, Routes } from 'react-router-dom';
import { HomeBody } from './pages/HomeBody';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import { Products } from './pages/Products'
import { ProductsAdmin } from './pages/ProductsAdmin'
import { ProductDetails } from './pages/ProductDetails';
import { ProductDetailsAdmin } from './pages/ProductDetailsAdmin';

import { ProductForm } from './pages/ProductForm';
import { EntryPoint } from './components/EntryPoint';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { LoginAdmin } from './pages/LoginAdmin';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <div className="page-container ">
      <div className="content-wrap">
        <MyNavigation />
            <Routes>
            
              <Route path='/' element={<HomeBody />} />
              <Route path='home' element={<HomeBody />} />
              <Route path='products' element={<Products />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path="about" element={<AboutUs />} />
              <Route path='about' element={<AboutUs />} />
              <Route path='products/:id' element={<ProductDetails />} />
            
              <Route path='admin' element={<LoginAdmin />} />
              <Route path='admin/panel' element={<ProductsAdmin />} />
              <Route path='admin/panel/:id' element={<ProductDetailsAdmin />} />
              <Route path='admin/panel/:id/edit' element={<ProductForm />} />
              <Route path='*' element={<NotFound />} />

            </Routes>
    </div>
    <Footer />
    </div>
  );
}

export default App;
