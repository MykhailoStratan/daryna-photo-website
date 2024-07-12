import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

// import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex
import './App.css';

import MenuBar from './components/MenuBar/MenuBar';

import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import React from 'react';
// import photos from '../data/images.json';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Divider } from 'primereact/divider';
import { Image } from 'primereact/image';
import { Fieldset } from 'primereact/fieldset';
import ImageGallery from "react-image-gallery";
import { Gallery } from './components/Gallery/Gallery';

const photoGallery = [
  {
    key: "photo-1",
    src: "/9.jpg",
    width: 4672,
    height: 7008,
    alt: "Nature Scene",
    title: "Sunset over the mountains",
    srcSet: []
  },
  {
    key: "photo-2",
    src: "/2.jpg",
    width: 4672,
    height: 7008,
    alt: "City Skyline",
    title: "Cityscape at night",
    srcSet: []
  },
  {
    key: "photo-3",
    src: "/3.jpg",
    width: 4184,
    height: 6276,
    alt: "Beach Sunset",
    title: "Relaxing sunset on the beach",
    srcSet: []
  },
  {
    key: "photo-4",
    src: "/4.jpg",
    width: 4672,
    height: 7008,
    alt: "Mountain View",
    title: "Scenic mountain landscape",
    srcSet: []
  },
  {
    key: "photo-5",
    src: "/5.jpg",
    width: 4672,
    height: 7008,
    alt: "Forest Pathway",
    title: "Trail through the forest",
    srcSet: []
  },
  {
    key: "photo-6",
    src: "/6.jpg",
    width: 4379,
    height: 6568,
    alt: "Urban Park",
    title: "Park in the heart of the city",
    srcSet: []
  },
  {
    key: "photo-7",
    src: "/7.jpg",
    width: 3678,
    height: 5517,
    alt: "River Reflection",
    title: "Reflections on the river",
    srcSet: []
  },
  {
    key: "photo-8",
    src: "/8.jpg",
    width: 2967,
    height: 4450,
    alt: "New Photo Description",
    title: "New Photo Title",
    srcSet: []
  },
  {
    key: "photo-9",
    src: "/9.jpg",
    width: 3843,
    height: 5765,
    alt: "Another Photo Description",
    title: "Another Photo Title",
    srcSet: []
  },
  {
    key: "photo-10",
    src: "/10.jpg",
    width: 3972,
    height: 2648,
    alt: "Fresh Photo Description",
    title: "Fresh Photo Title",
    srcSet: []
  },
  {
    key: "photo-11",
    src: "/11.jpg",
    width: 4359,
    height: 2906,
    alt: "Latest Photo Description",
    title: "Latest Photo Title",
    srcSet: []
  },
  {
    key: "photo-12",
    src: "/12.jpg",
    width: 4672,
    height: 7008,
    alt: "Newest Photo Description",
    title: "Newest Photo Title",
    srcSet: []
  }
];



function App() {
  const [index, setIndex] = useState(-1);

  const renderPhoto = React.useCallback(
    ({ imageProps: { alt, style, src, ...rest } }: RenderPhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          borderRadius: "0px",
          boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
        src={src}
        {...rest}
      />
    ),[]
  );

  return (
    <div className="App">
      
      <section className="main-section">
        <Gallery/>
        <MenuBar />
        <Image src='../daryna-logo.png' width='250'imageStyle={{position: 'absolute', top: '-50px', left: '-20px', filter: 'invert(0.2)'}}/>
      </section>

        <Divider />

      
      <section className="gallery-section">
        {/* <h1>Portfolio</h1> */}
          <PhotoAlbum layout="columns" photos={photoGallery} renderPhoto={renderPhoto} onClick={({ index }) => setIndex(index)}/>
          <Lightbox
            slides={photoGallery}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        
      </section>
    </div>
  );
}

export default App;