import React from 'react';
import galleryStyle from '/styles/Gallery.module.css';
import Meta from './components/Meta';

import { server } from '../config';

const gallery = ({files}) => {
  
  const images = [];

  // generate gallery layout (2 images/one image)
  let count = 0;
  for (let i = 0; i < files.length; i++) {
    if ((count-1) % 3 === 0) {
      images.push(
        <div>
          <img className={galleryStyle.galleryimg} src={"/images/gallery/" + files[i]} alt=""></img>
        </div>
      )
    } else {
      images.push(
        <div>
          <img className={galleryStyle.galleryimg} src={"/images/gallery/" + files[i]} alt=""></img>
          <img className={galleryStyle.galleryimg} src={"/images/gallery/" + files[i + 1]} alt=""></img>
        </div>
      )
      i++;
    }
    count++;
  }

  return (
    <div className={galleryStyle.gwrapper}>
      <Meta title='Holmes Hub - Gallery'/>

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

gallery.defaultProps = {

  files: []

}

export const getServerSideProps = async () => {
  // get image files from the api
  const res = await fetch(`${server}/api/getImages`);
  const files = await res.json();

  return {
    props: {
      files
    }
  }

}


export default gallery;