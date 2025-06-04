import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Image } from 'primereact/image';
import { memo, useMemo } from 'react';
import '../MenuBar/MenuBar.css';

function MenuBar() {
    const items: MenuItem[] = useMemo(() => [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '#home'
        },
        {
            label: 'Gallery',
            icon: 'pi pi-star',
            url: '#gallery'
        },
        {
            label: 'Pricing',
            icon: 'pi pi-search',
            url: '#pricing'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: '#contact'
        }
    ], []);

    const end = (
        <div className='end-wrapper'>
            <ul className='social-media-wrapper'>
                <li className="social-media-item">
                    <a href="https://www.instagram.com/d.stoikova.photo?igsh=MWwwdnBndHd1b2w4ZA==" target='_blank'>
                        <img src="/instagram_icon.png" alt="instagram" className="social-media-icon" />
                    </a>
                </li>
                <li className="social-media-item">
                    <a href="https://www.facebook.com/profile.php?id=100011219850763" target='_blank'>
                        <img src="/facebook_icon.png" alt="facebook" className="social-media-icon" />
                    </a>
                </li>
                <li className="social-media-item">
                    <a href="https://t.me/Daryna_Stoikova" target='_blank'>
                        <img src="/telegram_icon.png" alt="telegram" className="social-media-icon" />
                    </a>
                </li>
                <li className="social-media-item">
                    <a href="">
                        <img src="/linkedin_icon.png" alt="linkedin" className="social-media-icon" />
                    </a>
                </li>
            </ul>
        </div>
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

export default memo(MenuBar);
        