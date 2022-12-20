
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
                <Nav linksList={home.icons} />
            </div>
            
            <div className='bck' style={{ backgroundImage: `url(${backImage3})` }}>
                <FormatContainer elements={home.homeElements} columns='2fr 1fr' spacing='1em' />
            </div>

            <div className="bck" id='code' style={{ backgroundImage: `url(${backImage2})` }}>
                <div className="projectsclass">

                    <div style={{ backgroundColor: "#4449", paddingLeft: "1em", paddingBottom: "0.1em", paddingTop: "0.1em", borderRadius: "5%" }}>
                        <h1>Code</h1>
                        <h5 style={{ textAlign: 'left' }}>I enjoy solving insteresting problems. My goal always is to create software
                            that can help people & solve real world problems.
                        </h5>
                    </div>
                    <FormatContainer elements={home.softwareElements} spacing='0.5em' />

                </div>
            </div>

            <div className="bck" id='experience' style={{ backgroundImage: `url(${backImage2})` }}>
                <div className="projectsclass">

                    <h1>Experience</h1>
                    <FormatContainer elements={home.experienceElements} spacing='0.5em' />

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