import React, { Suspense, useState } from "react";
import { Route, Routes, Navigate, Link, BrowserRouter as Router } from 'react-router-dom';
import CustomLoader from "./components/CustomLoader/CustomLoader";
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home/HomePage'));

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
          <Route path='/' element={<HomePage />} />
            {/* <Route path='/' element={<HomePage onLoad={onLoadHandler} />} /> */}
            <Route path='/gallery' element={<HomePage />} />
            <Route path='/about' element={<HomePage />} />
            <Route path='/menu' element={<HomePage />} />
            <Route path='/team' element={<HomePage />} />
            <Route path='/philanthropy' element={<HomePage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;