import './App.css';
import { MyNavigation } from './components/MyNavigation'
import { Route, Routes } from 'react-router-dom';
import { HomeBody } from './pages/HomeBody';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import { Products } from './components/Products'


function App() {
  return (
    <div className="page-container ">
      <div className="content-wrap">
        <MyNavigation />

        <Routes>
          <Route path='' element={<HomeBody />} />
          <Route path='home' element={<HomeBody />} />
          <Route path='products' element={<Products />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
}

export default App;
