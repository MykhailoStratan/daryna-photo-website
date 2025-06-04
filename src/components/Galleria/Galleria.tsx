
import { useState, FC } from 'react';
import { Galleria } from 'primereact/galleria';
import './Galleria.css'
import photoGallery from '../../../data/images.json';

type Photo = {
    original: string;
    thumbnail: string;
    originalClass: string;
};

const photos: Photo[] = photoGallery.map((img) => ({
    original: img.src,
    thumbnail: '',
    originalClass: 'gallery-image',
}));

export const GalleriaDemo: FC = () => {
    const [images] = useState(photos)


    const itemTemplate = (item: Photo) => {
        return <img src={item.original} style={{ width: '100%', display: 'block', height: 'calc(100vh - 10rem)', objectFit: 'cover',  }} />;
    }

    const nextIcon = () => {
      return (
          <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      )
    }

    const PrevIcon = () => {
        return (
            <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        )
    }


    return (
        <div className="card-carousel"> 
            <Galleria value={images} numVisible={5} circular style={{ maxWidth: '100vw' }} 
                showItemNavigators showItemNavigatorsOnHover showIndicators
                showThumbnails={false} item={itemTemplate} itemNextIcon={nextIcon} itemPrevIcon={PrevIcon}
                autoPlay transitionInterval={2500}/>
        </div>
    )
}
        