
import React from 'react';

import backImage from "../images/back1.JPG"
import backImage2 from "../images/back2.jpg"
import backImage3 from "../images/self.jpg"

import FormatContainer from "../components/FormatContainer";
import DropdownSection from '../components/DropdownSection.js';

import "../styles/MainPage.css";

import home from "../home.js"

import Nav from '../components/Nav';
import ActionContainer from '../components/ActionContainer';

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

                    <br/>

                    <h1 className='sectionTitle'>P R O J E C T S</h1>
                    
                    <ActionContainer elements={home.projectsElements}  columns='1fr 1fr 1fr' spacing='4em'/>


                    {/* <DropdownSection name="Projects">
                        <FormatContainer elements={home.projectsElements}/>
                    </DropdownSection> */}

                </div>
            </div>


        </div>
    );
}

export default MainPage