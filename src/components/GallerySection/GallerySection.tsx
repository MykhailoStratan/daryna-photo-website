import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Carousel from '../Carousel/Carousel';

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

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery-section" id="gallery">
      <h1>Shoot portraits / fashion / lifestyle / weddings </h1>
      <h1>in Vancouver and Lower Mainland</h1>
      <p>Never miss a moment</p>
      <a href="#contact"><button className="btn-standard">Let's make this happen</button></a>
      <Carousel />
      <Lightbox
        slides={photoGallery}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </section>
  );
}
