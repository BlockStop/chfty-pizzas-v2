import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import CustomLoader from "./components/CustomLoader/CustomLoader";
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const SecretRecipesPage = React.lazy(() => import('./pages/SecretRecipes/SecretRecipes'));
const AboutPage = React.lazy(() => import('./pages/About/About'));
const MenuPage = React.lazy(() => import('./pages/Menu/Menu'));
const PhilanthropyPage = React.lazy(() => import('./pages/Philanthrophy/Philanthropy'));
const TeamPage = React.lazy(() => import('./pages/Team/Team'));
const ComingSoonPage = React.lazy(() => import('./pages/ComingSoon/ComingSoon'));

function App(props) {

  return (    
    <Suspense fallback={<CustomLoader />}>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/secretrecipes' element={<SecretRecipesPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/philanthropy' element={<PhilanthropyPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;