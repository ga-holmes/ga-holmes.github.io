import { useState } from "react";

import MainPage from "./pages/MainPage";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";

import Nav from "./components/Nav";

import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';

function App() {

  const [links] = useState([

    {
      text: 'Home',
      linkTo: '/#'
    },
    {
      text: 'Gallery',
      linkTo: '/gallery'
    },
    {
      text: 'Experience',
      linkTo: '/#experience'
    },
    {
      text: 'Projects',
      linkTo: '/#projects'
    },
  ])

  return (
    <div>
      <Router>

        <Nav linksList={links} />

        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/gallery" element={<Gallery/>} />

        </Routes>

      </Router>
    </div>
  );
}

export default App
