import logo from './logo.svg';
import './App.css';
import { MyNavigation } from './components/MyNavigation'
import { MyCarousel } from './components/MyCarousel'
import { CardViewer } from './components/Products';
import { Route, Routes } from 'react-router-dom';
import { HomeBody } from './pages/HomeBody';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';


function App() {
  return (
    <div className="App " style={{height:'100vh', }}>
      <div className='content'>

        <MyNavigation />
        <Routes>
          <Route path='home' element={<HomeBody />} />

          {/* <Route path="home" element={<HomeBody />} />
        <Route path="" element={<HomeBody />} />
        <Route path="/" element={<HomeBody />} /> */}

          <Route path="about" element={<AboutUs />} />
          {/* <Route path="aboutus" element={<AboutUs />} /> */}

        </Routes>

      </div>
      <Footer />

    </div>
  );
}

export default App;
