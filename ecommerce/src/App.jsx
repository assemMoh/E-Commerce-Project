import './App.css';
import { MyNavigation } from './components/MyNavigation'
import { Route, Routes } from 'react-router-dom';
import { HomeBody } from './pages/HomeBody';
import Footer from './components/Footer';
import { Products } from './pages/Products'
import { ProductsAdmin } from './pages/ProductsAdmin'
import { ProductDetails } from './pages/ProductDetails';
import { ProductDetailsAdmin } from './pages/ProductDetailsAdmin';

import { ProductForm } from './pages/ProductForm';
import { LoginAdmin } from './pages/LoginAdmin';
import { NotFound } from './pages/NotFound';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPageUser } from './pages/AboutPageUser';
import { ProductDetailsPage } from './pages/ProductDetailsPage';



function App() {
  return (
    <div className="page-container ">
      <div className="content-wrap">
        {/* <MyNavigation /> */}
            <Routes>
              
              <Route path='/' element={<HomeBody />} />
              <Route path='home' element={<HomeBody />} />
              
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />

              <Route path='products' element={<ProductsPage />} />
              <Route path='products/:id' element={<ProductDetailsPage />} />

              <Route path='about' element={<AboutPage />} />
              <Route path='aboutuser' element={<AboutPageUser />} />
              
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
