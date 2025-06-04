
import { memo } from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Image } from 'primereact/image';
import './Carousel.css';

type Photo = {
    original: string;
    thumbnail: string;
    originalClass: string;
};

const images = [
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczOld6PSubj59q9QjcN2hEuPig-6P2SfBsPvIZ6K2V5HcpkqIas8nt1hbB1nFdhSjZnm_pB4JqNO0Usly5WwaeujkZrYmfdWsFCbfa4P-vuyYAuu00lldPcNpFlLYgIv0KsN1b85SWFaOk-fTwb67q2t=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczM6XgTxBQ4i551o8FvmSll-d96sVtWZT_blQ14arM1gHzK7Yf4BuVNqGChXeYKW5G892P81hxABiFQcLEK7V79dRPFS518b5J-0OiDvFn8CD33_BzTByks4G4Wia2rS4AzXKNhpeqhzoDk-szJTNLki=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczNa6ZIUeJ5dKSxFY4G1qD4GmJ3IEd5P7rrVMt3OWSfsZduXuLlXZAGa8lh49dDqexXcOOuFiy7OAbwfJpjuaHXy7jqOYXyAJFyOPr5C6l0uyCj4AJ4fyj0qqoO4-5OSti4JIg7MOsCmgppAsu2isCZK=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczOdr4dkqh4icZL7BmjHis-PMcsHc6Jmob0MMXYLYRdApDcSl8JmAx0PcH5Sdy95m-w8xWibet-x7ddr_lKz1oByIN0RgTG736iX8TOZf5KHYJqS_fxMyCYdE6QqXZKmQr-wn_hkDKmjOW5hWxKycRKZ=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczOVv4Jok36xcSNDvETYjKpaggUtqJ7wjcF-OJZSTl5bIrq9Bg0t-gOPl2eRREjQl916ScWQFLIDWAWpzQRn8XasG7myQv03s9-g-XQit7aZxriDuSbi-SgZ0YwdBHG4lvNRC2EhUPmSjPmgn1TG3Fi3=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczOk_Ek3dPyaEcHXABxzUzgdhYo7dX6D3ORrpJiTt-EkdFSBHVTXdL4RxvNdWjAw8Y2pqUDXlK_nuN3zipBcO8tHNWatgx04rwpvwBwL56Ry9wdZ4ekZYhDb0l6x8kea1ALF5SI68RUNdmAwfB826l57=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczOxZWAnIH9xCXNZZU4X3UygCjypaEQN37CP9IGjIiBSOLL1Ddix94zp7RDB3ibDjKoYtxZOdAIJLMTOGg3xs1wC6PZYT6onh73JDa6awAXyLGavcO2ErtrGIGaDvrTpUk-Ee_gRawJkKCBkeiBc9N2K=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczMUFKYGT01gydJFZ1ZgejSUTiVVFLCKJ4ko48eNo3-C2i9eF8LdN5G6XaWl7VRZWnidyrE-8NtbRsiXUzXQvXLMzOUK6DPNsJDDF9Y6d1CYzkRFEHG3z6pAy5zN5y5EuYxLUPZq4fFkWanZT0kpLxXO=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczPRDuLukVNN_1-2wrvzf4d9urAYP877PGchnEDxiNNsx-8ntV-CSiQablsdCRFY2QJC5E5dCqMEPgcG-YO7wBm5pos4Iyq8uvfi6kuj4mY9m2aEtj7RMlcaQ9ss2L5dtYqCpZVNlHasZrsQjv_ofu05=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczNnJycaEbSrdny2QWD4-LmRJc17Eh81UP2C_M3_q04I869GTHWiSJkgOG1DLdkRIQvBGhFiztAvRWAPe5siZJG-5SCT_YgfaIFCAJEF206i5aqWQ1xIyZSWAGCUbSE_TfIqOpCRi5swTC74FtR2gzph=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
    {
        original: "https://lh3.googleusercontent.com/pw/AP1GczNAYUTS09FCBQqtuaZF_R4MdqOeVmtK3lpn-2_O__Gc6C1N0TAYGlckTn0kntA-1SvgS5Cv2mQmooQnCgJ59Kz8qoZvLRgWZsIA1GxvaBRO31yZegtPYo-JvqVoXb01MLnj5LF7AqIRAeQqKfQYiPtp=w687-h1031-s-no-gm?authuser=0",
        thumbnail: "",
        originalClass: "gallery-image",
    },
];

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

const productTemplate = (product: Photo) => (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <Image src={product.original} width='340px' />
    </div>
);

const NextIcon = () => (
    <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const PrevIcon = () => (
    <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);

function ResponsiveDemo() {
    return (
        <div className="card-carousel">
            <Carousel
                autoplayInterval={2000}
                circular
                value={images}
                numScroll={1}
                numVisible={4}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                prevIcon={PrevIcon}
                nextIcon={NextIcon}
            />
        </div>
    );
}

export default memo(ResponsiveDemo);
