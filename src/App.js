import React, { Suspense, useState } from "react";
import { Route, Routes, Navigate, Link, BrowserRouter as Router } from 'react-router-dom';
import CustomLoader from "./components/CustomLoader/CustomLoader";
import BackgroundPhoto from "./assets/background.png"
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const AboutPage = React.lazy(() => import('./pages/About/About'));

// const Home = React.lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./pages/Home/HomePage")), 1000);
//   });
// });
function App(props) {
  // const [imgLoad, setImgLoaded] = useState(false);

  // const onLoadHandler = (loadStatus) => {
  //   console.log(`load status from App component: ${loadStatus}`);
  //   setImgLoaded(loadStatus);
  // }

  return (    
    <Suspense fallback={<CustomLoader />}>
      <Router>
        <Routes>
          {/* <Route path='/' element={<HomePage source={BackgroundPhoto} placeholder={<CustomLoader />}/>} /> */}
            {/* <Route path='/' element={<HomePage onLoad={onLoadHandler} />} /> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/gallery' element={<AboutPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/menu' element={<HomePage />} />
            <Route path='/team' element={<HomePage />} />
            <Route path='/philanthropy' element={<HomePage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;