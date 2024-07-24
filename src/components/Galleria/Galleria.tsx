
import { useState, FC } from 'react';
import { Galleria } from 'primereact/galleria';
import './Galleria.css'

type Photo = {
    original: string;
    thumbnail: string;
    originalClass: string;
};

const photos = [
    {
      original: "https://lh3.googleusercontent.com/pw/AP1GczMJhYrowIh_Ljd_48bNaLNAva-L6helEH-k60E7cFHlxxQdrLEXyYNgC45o_pxmSf0JrWBMNsJTQgHyFoz-SdKfUGkfkglBG47tFXJNyIIpck0TTuQ1YP1vOHYMkUHZOG_lh7hsSuUkGzG8qrar05Fe=w1546-h1031-s-no-gm?authuser=0",
      thumbnail: "",
      originalClass: "gallery-image",
      
    },
    {
      original: "https://lh3.googleusercontent.com/pw/AP1GczND_WK21qs2orG3n-VtAzZMQRViBtlHILgqwM7wh9Dv5GHI02a67JkZCsgGMuzQ6uj6gemP_nVtix2DpoGM1YRaVi0PjX9lrLRyV3nY17jnWmfh_O3xr_NrwVLU9TVZZnXu_HJmx-oAvOpkwGllskJo=w1546-h1031-s-no-gm?authuser=0",
      thumbnail: "",
      originalClass: "gallery-image",
    },
    {
      original: "https://lh3.googleusercontent.com/pw/AP1GczPf4QeGHU7yROecUM79wNVvC0FUEHlruPBRu5aUcHsrJDQhpZcmz-ZtEkCNHST1_pqy5SRAKDqzA9l3-Ab-CjTMdxBb3yepRfI8edcmbFSupaBX4p8jcoGGT-ZKT-L90wyz5_yKUCVGB9oQtohSFQf9=w1547-h1031-s-no-gm?authuser=0",
      thumbnail: "",
      originalClass: "gallery-image",
    },
    {
      original: "https://lh3.googleusercontent.com/pw/AP1GczOFjGC8by1IIO7e7BhgVuS6Rf3-SLp-SJdNSwrRB3tStyvX_m3vL472CNEEsKqSMfA04LWiyRf2HY1DH6Gw1qQwFWpRnnOEsri2Cd5_gSYOhUQNMCYI7nBbaMqkOdrkMrPEXV4BjMPhgzX7o7G_6ASS=w1546-h1031-s-no-gm?authuser=0",
      thumbnail: "",
      originalClass: "gallery-image",
    },
  ];

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
        