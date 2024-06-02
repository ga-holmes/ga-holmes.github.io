
import React from 'react';

import backImage from "../images/back1.JPG"
import backImage2 from "../images/back2.jpg"
import backImage3 from "../images/self.jpg"

import FormatContainer from "../components/FormatContainer";
import DropdownSection from '../components/DropdownSection.js';

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


            <div className="bck" style={{ backgroundImage: `url(${backImage2})` }}>
                <div className='content'>

                    <FormatContainer elements={home.homeElements}/>

                    {/* <DropdownSection name="Projects">
                        <FormatContainer elements={home.projectsElements} />
                    </DropdownSection> */}

                </div>

                {/* <div className='gameContainer'>

                    <canvas id="game" width="720" height="480"/>

                </div> */}

            </div>

        </div>
    );
}

export default MainPage