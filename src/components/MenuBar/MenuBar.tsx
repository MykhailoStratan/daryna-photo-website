
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
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
    
    return (
        <div className="card card-custom-menu">
            <Menubar model={items} />
        </div>
    )
}
        