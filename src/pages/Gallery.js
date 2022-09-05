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
              "back2.jpg"
  ];

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
    <div className="gwrapper">
      {React.Children.toArray(
        images.map(
          (file) => (
            file
          )
        )
      )}
    </div>
  )
}

// Gallery.defaultProps = {

//   files: []

// }

export default Gallery;