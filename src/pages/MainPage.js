
import React from 'react';

import backImage from "../images/back1.JPG"
import backImage2 from "../images/back2.jpg"

import FormatContainer from "../components/FormatContainer";
import Icons from "../components/Icons";

import "../styles/MainPage.css";

const MainPage = () => {

    const icons = [
        {
            icon: process.env.PUBLIC_URL + "/media/github-logo.png",
            text: "",
            linkTo: 'https://github.com/ga-holmes'
        },
        {
            icon: process.env.PUBLIC_URL + "/media/linkedin.png",
            text: "",
            linkTo: "https://www.linkedin.com/in/garrett-holmes-b4a219225/"
        },
        {
            icon: "",
            text: "Resume",
            linkTo: "GarrettHolmesResume.pdf"
        },
    ]

    // List of elements to be rendered on the home page
    const homeElements = [

        <div key={1}>
            <p>Garrett Holmes is a student at the University of Guelph in Ontario, Canada. 
                He is working towards a Bachelors degree in Computing with a major in Computer 
                Science & a minor in GIS & Environmental Analysis. 
                <br />
                <br /> 
                With a main focus on programming and software development using a variety of languages like 
                C, Java, JavaScript, and Python, I enjoy writing interesting and challenging programs.
                <br/>
                I also practice music, photography, and 3D modelling / 2D animation using Blender.
            </p>
        </div>
        ,
        <div key={2}>
            <img src='/media/self.jpg' alt='' className='imageDefault'/>
        </div>

    ]

    return (
        <div className="App" style={{ backgroundImage: `url(${backImage})` }}>
            <div className="topBanner">
                <span>Garrett <span className="name">Holmes</span></span>
            </div>

            <Icons linksList={icons}/>

            <div className="bck" style={{ background: '#69828c5f' }}>
                <FormatContainer elements={homeElements} columns='2fr 1fr' spacing='1em' />
            </div>
            <div className="bck" id='experience' style={{ backgroundImage: `url(${backImage2})` }}>
                <div className="projectsclass">

                    <h1>Experience</h1>
                    <FormatContainer elements={React.Children.toArray([
                        
                        <>
                            <a href='https://www.kandalore.com/'><h3>Camp Kandalore</h3></a>
                            <p>At Kandalore, where I worked in the summers of 2019 and 2021, my main role was guiding canoe trips
                                with groups of up to 10 campers lasting from 3 to 7 days in length. The main focus on these trips was 
                                creating a welcoming and educational environment where campers could learn and grow.
                                    <br />
                                    <br />
                                In the summer of 2021 I ran a 7 day trip down the spanish river, navigating long lakes, portages, and whitewater sets.
                                    <br />
                                    <br />
                                Meanwhile in camp, I had an actve role in organizing the trip centre, where all our trip gear/maps/etc. 
                                was kept, as well as fixing boats before and after they were on trips. </p>
                        </>
                        ,
                        <img src="/media/tripcentre.JPG" className='imageDefault' alt='' key={2}/>

                    ])} spacing='0.5em' />

                </div>
            </div>

            <div className="bck" id='projects' style={{ backgroundImage: `url(${backImage2})` }}>
                <div className="projectsclass">

                    <h1>Projects</h1>
                    <FormatContainer elements={React.Children.toArray([
                        <>
                            <h3>this.this</h3>
                            <p>This website is built on the Next.js framework for javascript, and is generated entirely with React.
                                <br/>
                                The /gallery route makes use of a Next.js api call to getImages.js. The call gets a list of file names
                                 in the public/images/gallery folder and sends them to the front end. The page then generates the layout 
                                 that is seen on the page. Unfortunately (since this is hosted as a static page), none of this is currently functioning, 
                                 along with other Next.js features like dynamically pre-rendering the pages on the server side.
                            </p>
                        </>
                        ,
                        <img src="/media/NextJS_Logo.jpg" className='imageDefault' key={2} alt='' />

                    ])} spacing='0.5em' />
                    <FormatContainer elements={React.Children.toArray([
                        <>
                            <h3>Modding Skyrim</h3>
                            <p>Skyrim is a popular open-world fantasy game that has had an extremely popular modding comminity since the games release in 2011.
                                <br/>
                                Currently I am working on a mod that introduces a new quest, a small new environment to explore, and a new dungeon.
                                This process involves hand-making a new landmass, bulding rooms, environments, cave systems using the tools in the skyrim creation kit.
                                As well as writing event based scripts in the papyrus language and dealing with object, object placement, enemies, character properties, etc.
                                <br/>
                                Over a number fo years I released several (mostly silly) mods, which can be viewed or downloaded 
                                <a href='https://www.nexusmods.com/skyrim/users/23367519' target='_blank' rel='noreferrer' style={{color: 'blue'}}> here.</a>
                            </p>
                        </>
                        ,
                        <img src="/media/modimage.jpg" className='imageDefault' key={2} alt='' />

                    ])} spacing='0.5em' />

                </div>
            </div>

        </div>
    );
}

export default MainPage