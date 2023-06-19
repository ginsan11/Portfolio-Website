import React, { useState, useEffect } from 'react';
//import FsLightbox from 'fslightbox-react';
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Slideshow, Video, Zoom } from "yet-another-react-lightbox/plugins";


function ImgSlider(props) {

    const set2 = [
        { src: "https://i.imgur.com/Nm2dhpw.png"},
        { src: "https://i.imgur.com/eaCDyhX.png"},
        { src: "https://i.imgur.com/x4BtQNb.png"},
        { src: "https://i.imgur.com/qkcYrS8.png"},
        { src: "https://i.imgur.com/t2lEAuE.png"}
    ]

    const set1 = [
        { src: "https://i.imgur.com/fsyrScY.jpg", width: 320, height: 213 },
        { src: "https://i.imgur.com/fsyrScY.jpg", width: 640, height: 427 }
    ]


    return (
      <div className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2  py-32">
        <div className="absolute top-4 right-8">
        <Lightbox
        open={props.trigger}
        close={() => props.setTrigger(false)}
        plugins={[Fullscreen, Slideshow, Video, Zoom]}
        slides={props.srcset}
      />
        </div>
      </div>
    );
  }
  
  export default ImgSlider;