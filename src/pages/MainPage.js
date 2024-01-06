
import React from 'react';

import backImage from "../images/back1.JPG"
import backImage2 from "../images/back2.jpg"
import backImage3 from "../images/self.jpg"

import FormatContainer from "../components/FormatContainer";

import "../styles/MainPage.css";

import home from "../home.js"

import Nav from '../components/Nav';

const MainPage = () => {

    return (
        <div className="App">

            <div className="topBanner" id="start" style={{ backgroundImage: `url(${backImage})` }}/>

            <div id="icons">
                <Nav linksList={home.icons} style={{display: 'flex'}}/>
            </div>

        </div>
    );
}

export default MainPage