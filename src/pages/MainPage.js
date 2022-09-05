
import React from 'react';

import backImage from "../images/back1.JPG"
import backImage2 from "../images/back2.jpg"

import FormatContainer from "../components/FormatContainer";
import Icons from "../components/Icons";

import "../styles/MainPage.css";

import home from "../home.js"

const MainPage = () => {

    return (
        <div className="App">

            <div className="topBanner" style={{ backgroundImage: `url(${backImage})` }}/>
            
            <Icons linksList={home.icons}/>
            
            <FormatContainer elements={home.homeElements} columns='2fr 1fr' spacing='1em' />

            <div className="bck" id='experience' style={{ backgroundImage: `url(${backImage2})` }}>
                <div className="projectsclass">

                    <h1>Software</h1>
                    <FormatContainer elements={home.softwareElements} spacing='0.5em' />

                </div>
            </div>

            <div className="bck" id='projects' style={{ backgroundImage: `url(${backImage2})` }}>
                <div className="projectsclass">

                    <h1>Projects</h1>
                    <FormatContainer elements={home.projectsElements} spacing='0.5em' />

                </div>
            </div>

        </div>
    );
}

export default MainPage