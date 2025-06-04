
import { useState } from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Image } from 'primereact/image';
import './Carousel.css';
import photoGallery from '../../../data/images.json';

type Photo = {
    original: string;
    thumbnail: string;
    originalClass: string;
};

const images: Photo[] = photoGallery.map((img) => ({
    original: img.src,
    thumbnail: '',
    originalClass: 'gallery-image',
}));

export default function ResponsiveDemo() {
    const [products] = useState<Photo[]>(images);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1590px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1589px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1215px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '830px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '630px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const productTemplate = (product: Photo) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <Image src={product.original} width='340px' />
            </div>
        );
    };

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
            <Carousel autoplayInterval={2000} circular={true} value={products} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} prevIcon={PrevIcon} nextIcon={nextIcon} />
        </div>
    )
}
