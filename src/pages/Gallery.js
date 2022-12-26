import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {

  // comment this when running on server (get file names dynamically), otherwise, add each file name (inside gallery) here manually
  let files = ["boi.png",
              "cocabike.jpg",
              "darkforest.jpg",
              "dylansky.jpg",
              "jaritos.JPG",
              "lilhpuse.png",
              "mountain.JPG",
              "mountaintree.JPG",
              "raodbike.jpg",
              "spanish.jpg",
              "spanish2.jpg",
              "spanish3.jpg",
              "toronto.jpg",
              "back1.JPG",
              "back2.jpg",
              "beech.jpg",
              "clouds.jpg",
              "cotty.jpg",
              "fall.jpg",
              "sil.JPG",
              "uke.jpg",
              "waves.jpg"
  ];

  files = shuffleArray(files);

  const images = [];

  // generate gallery layout (2 images/one image)
  let count = 0;
  for (let i = 0; i < files.length; i++) {
    if ((count - 1) % 3 === 0) {
      images.push(
        <div>
          <img className="galleryimg" src={process.env.PUBLIC_URL+"/media/gallery/" + files[i]} alt=""></img>
        </div>
      )
    } else {
      images.push(
        <div>
          <img className="galleryimg" src={process.env.PUBLIC_URL + "/media/gallery/" + files[i]} alt=""></img>
          <img className="galleryimg" src={process.env.PUBLIC_URL + "/media/gallery/" + files[i + 1]} alt=""></img>
        </div>
      )
      i++;
    }
    count++;
  }

  return (
    <div>
      <div className="gwrapper">
        {React.Children.toArray(
          images.map(
            (file) => (
              file
            )
          )
        )}
      </div>
    </div>
  )
}

// Gallery.defaultProps = {

//   files: []

// }


// from: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
  
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));
                  
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
      
  return array;
}

export default Gallery;