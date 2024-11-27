import React, { Component } from 'react';

import { AiTwotoneInfoCircle } from "react-icons/ai";

import { useEffect } from "react";

import MainPage from "./pages/MainPage";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";
import Map from './pages/Map';

import { Route, Routes } from 'react-router-dom';

import navScroll from "./scripts/navScroll";
import iconHover from "./scripts/iconHover";
// import game from "./scripts/game";

import { useLocation } from "react-router-dom";

import home from "./home";

import Nav from "./components/Nav";

function App() {

  const location = useLocation();

  useEffect(() => {
    navScroll()
  }, [location])

  useEffect(() => {
    iconHover()
  }, [location])

  // useEffect(() => {
  //   game()
  // }, [location])


  return (
    <div>

      <div id="nav">
        <Nav linksList={home.icons} style={{ position: 'fixed', display: 'flex' }} />
      </div>

      <div id="info" className="infoIcon">
        <AiTwotoneInfoCircle size={50} />
      </div>

      <div id="infoDiv" className='popupDiv'>
        <p>This website is built from scratch using the React web framework, JavaScript, HTML, and CSS. All the code is available on my <a href='https://github.com/ga-holmes/ga-holmes.github.io'>github</a>. I'll be putting any interesting things I make or do on here, feel free to explore!</p>
      </div>

      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/map" element={<Map />} />

      </Routes>

    </div>
  );
}

export default App
