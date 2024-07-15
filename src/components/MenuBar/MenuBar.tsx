
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Image } from 'primereact/image';
import '../MenuBar/MenuBar.css';

import PhotoAlbum from "react-photo-album";
import photos from '../../../data/images.json';

export default function MenuBar() {
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    const end = (
        <ul className='social-media-wrapper'>
            <li className="social-media-item">
                <a href="">
                    <img src="/instagram_icon.png" alt="instagram" className="social-media-icon" />
                </a>
            </li>
            <li className="social-media-item">
                <a href="">
                    <img src="/facebook_icon.png" alt="facebook" className="social-media-icon" />
                </a>
            </li>
            <li className="social-media-item">
                <a href="">
                    <img src="/telegram_icon.png" alt="telegram" className="social-media-icon" />
                </a>
            </li>
            <li className="social-media-item">
                <a href="">
                    <img src="/linkedin_icon.png" alt="linkedin" className="social-media-icon" />
                </a>
            </li>
        </ul>
    );

    const start = (
        <div className='logo-wrapper'>
            <Image src='../daryna-logo.png' width='180px'imageStyle={{
                position: 'fixed', 
                top: '-3.25rem', 
                left: '-1rem', 
                filter: 'invert(0.2)',
                zIndex: '1000'
            }}/>
        </div>
        
    );
    
    return (
        <div className="card card-custom-menu">
            <Menubar start={start} model={items} end={end}/>
        </div>
    )
}
        