import './App.css';
import Navbar from './components/Navbar/Navbar';

import { Routes, Route, useLocation } from 'react-router-dom';
import backgrounImg from './assets/images/Rectangle 1.png';
import Hero from './contains/Hero/Hero';
import Login from './contains/Login/Login';
import Signup from './contains/Signup/Signup';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={location.pathname == '/' && 'homePage'}
      style={{
        backgroundImage: location.pathname == '/' && `url('${backgrounImg}')`,
        backgroundSize: 'cover',
        // objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        bgcolor: 'rgb(0,0,0)',
        // minWidth: '100vw',
        minHeight: '100vh',
      }}
    >
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
