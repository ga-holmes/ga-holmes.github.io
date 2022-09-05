const home = {

    // List of elements to be rendered on the home page
    homeElements: [
    
        <div key={1}>
            <p>My name is Garrett, I'm a computer science student at the University of Guelph in Ontario, Canada 
                also working towards a minor in GIS & Environmental Analysis. 
                <br />
                <br />
                I have experience as an outdoor trip leader & river guide in the wilderness areas of Ontario,
                and as an executive member of the UoGuelph Outdoors Club.
                <br />
                In programming, I have worked with all kinds of software from web apps to deep learning & computer vision interfaces.
                <br/>
                <br />
                I also have strong interests in visual arts & have skills in writing music, video production, photography, digital art, & more. 
                This website exists to catalogue my work & as a place to test my skills & experiment.
            </p>
        </div>
        ,
        <div key={2}>
            <img src='/media/self.jpg' alt='' className='imageDefault' />
        </div>
    
    ], softwareElements: [

        <div key={1}>
            <h5 style={{textAlign: 'center'}}>With experience programming since the 8th grade, I enjoy solving insteresting problems. My goal always is to create software 
                that can help people & solve real world problems.
            </h5>

            <h3>Web</h3>
            <p>
                I've worked on numerous web applications using various different tools. As an excercise using basic tools I built a website on HTML & JQuery 
                that could interface with a C program & a backend using MariaDB.
                <br />
                <br />
                Using Python, Flask, & React, I worked in a small team to build a web utility that can search, & view UoGuelph & Carelton courses & their prerequisites 
                by bachelor program, major, minor, etc. with a detailed graphing functionality using <a href="https://reactflow.dev/" style={{textDecoration: 'underline'}}>React Flow</a>.
            </p>
        </div>
        ,
        <img src="/media/tripcentre.JPG" className='imageDefault' alt='' key={2} />

    ],
    experienceElements: [
    
        <div key={1}>
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
        </div>
        ,
        <img src="/media/tripcentre.JPG" className='imageDefault' alt='' key={2} />
    
    ],
    projectsElements: [
            <img src="/media/modimage.jpg" className='imageDefault' key={1} alt='' />
    ],
    icons: [
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
            text: "G A R R E T T _ H O L M E S",
            linkTo: "/"
        },
    ]
}

export default home;