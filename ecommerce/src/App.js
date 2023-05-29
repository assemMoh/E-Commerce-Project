import logo from './logo.svg';
import './App.css';
import { MyNavigation } from './components/MyNavigation'
import { MyCarousel } from './components/MyCarousel'
import { CardViewer } from './components/CardViewer';
import { Route, Routes } from 'react-router-dom';
import { HomeBody } from './pages/HomeBody';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
    <MyNavigation />

      <Routes>
        <Route path="/" element={<HomeBody />} />
      </Routes>


    <Footer />

    </div>
  );
}

export default App;
