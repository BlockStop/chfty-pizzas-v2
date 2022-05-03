import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import CustomLoader from "./components/CustomLoader/CustomLoader";
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const AboutPage = React.lazy(() => import('./pages/About/About'));
const MenuPage = React.lazy(() => import('./pages/Menu/Menu'));
const PhilanthropyPage = React.lazy(() => import('./pages/Philanthrophy/Philanthropy'));
const ComingSoonPage = React.lazy(() => import('./pages/ComingSoon/ComingSoon'));

function App(props) {

  return (    
    <Suspense fallback={<CustomLoader />}>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/gallery' element={<ComingSoonPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/team' element={<ComingSoonPage />} />
            <Route path='/philanthropy' element={<PhilanthropyPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;