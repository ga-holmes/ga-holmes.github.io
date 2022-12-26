// List of elements to be rendered on the home page
// Serves as a single location to store text & other information that will be used by the site - essentially a makeshift static database in concept
const home = {

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

        <div key={2}>
            <h3><a href="https://csl.uwaterloo.ca/">Collaborative Systems Laboratory</a></h3>
            <img src="/media/58.jpg" className='imageDefault' alt='' key={4} />
            <p>
                As an Undergraduate Research Assistant, I explored recent literature in Precision Livestock Farming 
                with specific regard to computer vision and remote sensing techniques for automatic detection of cattle 
                on pastures and in feedlots. My research led to the independent development of software that could detect 
                the presence of cattle in watering pens after training on a labeled dataset. The script used PyTorch and 
                OpenCV to parse video files and automatically create sub-clips and output labels in a format that could 
                then be used to further train the model. I worked closely with the Resnet, YOLO, and Mask-R-CNN computer vision models.
            </p>
        </div>
        ,
        
        // <div key={3}>
        //     <h3>Web</h3>
        //     <img src="/media/react-cover.png" className='imageDefault' alt='' key={4} />
        //     <p>
        //         I've worked on numerous web applications with a variety of different tools. As an excercise using basic tools I built a website on HTML & JQuery 
        //         that could interface with a C program & a backend using MariaDB.
        //         <br />
        //         <br />
        //         Using Python, Flask, & React, I worked in a small team to build a web utility that can search, & view UoGuelph & Carelton courses & their prerequisites 
        //         by bachelor program, major, minor, etc. with a detailed graphing functionality using <a href="https://reactflow.dev/" style={{textDecoration: 'underline'}}>React Flow</a>.
        //     </p>
        // </div>
        // ,

    ],
    experienceElements: [
        <img src="/media/tripcentre.JPG" className='imageDefault' alt='' key={2} />
    ,
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
    
    ],
    projectsElements: [
        <div>
            <h4>Composer - <a href="https://letterboxd.com/film/sole-of-a-salesman/">Sole of a Salesman by Lliam Bittle</a></h4>
            <iframe className="video" src="https://www.youtube.com/embed/OOtX7AmzdAA" title="Sole Of A Salesman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        ,
        <p>Independent short film soundtrack, written and produced using a variety of digital instruments as well as recorded instruments.</p>
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
            icon: process.env.PUBLIC_URL + "/media/resume.png",
            text: "",
            linkTo: "/media/GarrettHolmesResume.pdf"
        },
        {
            icon: "",
            text: "G A R R E T T _ H O L M E S",
            linkTo: "/#start"
        },
        {
            icon: "",
            text: "code",
            linkTo: "/#code"
        },
        {
            icon: "",
            text: "experience",
            linkTo: "/#experience"
        },
        {
            icon: "",
            text: "projects",
            linkTo: "/#projects"
        },
        {
            icon: "",
            text: "gallery",
            linkTo: "/gallery"
        }
    ]
}

export default home;