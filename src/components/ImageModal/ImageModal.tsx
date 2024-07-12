
import React from 'react'; 
import { Image } from 'primereact/image';
import { FC } from "react";
import '../ImageModal/ImageModal.css';

const ImageModal: FC<{src: string, onClick: () => void}> = ({src, onClick}) => {
    return (
        <div className="card flex justify-content-center card-image-modal">
            <Image src={src} alt="Image" width="250" onClick={() => onClick() } preview />
        </div>
    )
}

export default ImageModal;
        