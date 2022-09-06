import { useEffect } from "react";

import MainPage from "./pages/MainPage";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";

import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';

import navScroll from "./script";

import { useLocation } from "react-router-dom";

import home from "./home";

import Icons from "./components/Icons";

function App() {

  const location = useLocation();

  useEffect(() => {
    navScroll()
  }, [location])
  

  return (
    <div>

        <div id="nav">
          <Icons linksList={home.icons} style={{position: 'fixed', display: 'block'}}/>
        </div>

        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/gallery" element={<Gallery/>} />

        </Routes>

    </div>
  );
}

export default App
