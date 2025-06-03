import { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';

// import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';

import React from 'react';
// import photos from '../data/images.json';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Image } from 'primereact/image';
import { FloatLabel } from "primereact/floatlabel";
import Carousel from './components/Carousel/Carousel';
import { InputTextarea } from 'primereact/inputtextarea';
import { GalleriaDemo } from './components/Galleria/Galleria';

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

import emailjs from '@emailjs/browser';

interface FormElements extends HTMLFormControlsCollection {
    usernameInput: HTMLInputElement,
    usernameEmail: HTMLInputElement,
    usernameNumber: HTMLInputElement,
    usernameMessage: HTMLInputElement,

}
interface UsernameFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

function App() {
  const [sendButtonText, setSendButtonText] = useState("Send");

  const [index, setIndex] = useState(-1);
  const [valueName, setValueName] = useState<string>('');
  const [valueEmail, setValueEmail] = useState<string>('');
  const [valuePhone, setValuePhone] = useState<string>('');
  const [valueDescription, setValueDescription] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sendButtonText === "Message sent!") {
      return;
    }
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service

    const phoneValue = form.current?.querySelector<HTMLInputElement>('#usernameNumber')?.value;
    const phoneRegex = /^[+]?(\d{1,12})?$/;
    const checkFields = form.current?.querySelector<UsernameFormElement>('#usernameInput')?.value &&
        form.current?.querySelector<HTMLInputElement>('#usernameEmail')?.value &&
        phoneValue && phoneRegex.test(phoneValue);
    if (checkFields) {
        console.log('everything filled')
        console.log(form.current?.querySelector<HTMLInputElement>('#usernameEmail')?.value)
        await emailjs.send('service_xb3e2hb', 'template_v05ze2p', {from_name: valueName, message: valueDescription, phone_number: valuePhone, email: valueEmail}, 
          'z1YXTwT-sFp7R5tpZ')
          .then((result) => {
              console.log(result.text, result.status, result.text);
              setSendButtonText('Message sent!');
          }, (error) => {
              console.log(error.text);
          });
    } else {
        console.log('nuhia')
    }
    
  };  

  const refreshSendButton = () => {
    if (sendButtonText === "Message sent!") {
      setSendButtonText("Send");
    }
  }

  // const renderPhoto = React.useCallback(
  //   ({ imageProps: { alt, style, src, ...rest } }: RenderPhotoProps) => (
  //     <img
  //       alt={alt}
  //       style={{
  //         ...style,
  //         borderRadius: "0px",
  //         boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
  //         transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //       }}
  //       src={src}
  //       {...rest}
  //     />
  //   ),[]
  // );

  

  return (
    <div className="App">
      
      <section className="main-section" id='home'>
        <MenuBar/>
        <GalleriaDemo/>
        
      </section>

        {/* <Divider /> */}
      <section className="gallery-section" id='gallery'>
        {/* <h1>Portfolio</h1> */}
        <h1>Shoot portraits / fashion / lifestyle / weddings </h1>
        <h1>in Vancouver and Lower Mainland</h1>
        <p>Never miss a moment</p>
        <a href='#contact'><button className='btn-standard'>Let's make this happen</button></a>
        <Carousel/>
          {/* <PhotoAlbum layout="columns" photos={photoGallery} renderPhoto={renderPhoto} onClick={({ index }) => setIndex(index)}/> */}
          <Lightbox
            slides={photoGallery}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
      </section>
      <section className="package-section" id='pricing'>
        <h1>Package Pricing</h1>
        <div className="package-block">
          <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeWCw-Tx2eP7R2PgRice8ARnoB2-NhESHBHklBqYp7aNkdd-y3EQKuN7rm2CO2S4XUihQCqwX7OPl-MuLKAf1cJ0nDOdLhJr1eWow4yiVp-6efJ1WC4W7Actli0ClkPn2rI-iFMVisROuqZNYV0YFB=w687-h1031-s-no-gm?authuser=0'} width='350px'/>
          <div className="package-description">
            <h3>Portrait / Lifestyle photosession</h3>
            <p><span>Service - </span><span>Studio*/indoor/outdoor session</span></p>
            <p className='note'><span>*Studio price not included</span></p>
            <table>
              <tr>
                <th>Time</th>
                <th>Result</th>
                <th>Price</th>
                <th>Link</th>
              </tr>
              <tr>
                <td>1 hour</td>
                <td>~50 edited photos, 10 retouched</td>
                <td>200$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
              <tr>
                <td>2 hours</td>
                <td>~100 photos, 25 retouched</td>
                <td>350$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="package-block">
          <div className="package-description">
            <h3>Wedding / Elopement / Engagement / Event </h3>
            <p><span>Service - </span><span>a separate plan for each occasion will be created and discussed in details</span></p>
            {/* <p className='note'><span>*Studio price not included</span></p> */}
            <table>
              <tr>
                <th>Time</th>
                <th>Result</th>
                <th>Price</th>
                <th>Link</th>
              </tr>
              <tr>
                <td>half of day</td>
                <td>unlimited photo count</td>
                <td>from 750$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
              <tr>
                <td>whole day</td>
                <td>unlimited photo count</td>
                <td>from 1500$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
            </table>
          </div>
          <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeirh5s5YeKSbuj14BLwrBqys-DdMI4NgLrV3U8L3tHApZ8hnDgF3TXh3ZOvdK7YOc6mh183doTPjvf5XczVXnsea34i731tx4sxd4iCUw06RnaBgPGi0lJdxh6ENVAj2gdUW7ckmAspckY87wWV0g=w688-h1031-s-no-gm?authuser=0'} width='350px'/>
        </div>
        <div className="package-block">
          <Image src={'https://lh3.googleusercontent.com/pw/AP1GczMWGmYKVhZ5Kg_vC7s2Zp3CcvcX3z6IYfZ-j6lR0YHARw0kcGil-5VWEOmoP2KJk51EYL9XLxbXHAqrC_sgcN-1rmoaJQrNvt48lYC_9YMC4pZ-RqYFtjPv5KcYMwj29MBxJzFBOOtOx4E_EAxetsx5=w825-h1031-s-no-gm?authuser=0'} width='350px'/>
          <div className="package-description">
            <h3>Commercial projects</h3>
            <p>Ready for a short-term and long-term commercial projects</p>
            <a href="#contact"><button className='commercial-btn'>Contact for details</button></a>
          </div>
        </div>

        <div className="package-block-mobile" style={{display: 'none'}}>
          
          <div className="package-description">
            <h3>Portrait / Lifestyle photosession</h3>
            <p><span>Service - </span><span>Studio*/indoor/outdoor session</span></p>
            <p className='note'><span>*Studio price not included</span></p>
            
          </div>
          <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeWCw-Tx2eP7R2PgRice8ARnoB2-NhESHBHklBqYp7aNkdd-y3EQKuN7rm2CO2S4XUihQCqwX7OPl-MuLKAf1cJ0nDOdLhJr1eWow4yiVp-6efJ1WC4W7Actli0ClkPn2rI-iFMVisROuqZNYV0YFB=w687-h1031-s-no-gm?authuser=0'} width='350px'/>
          <table>
              <tr>
                <th>Time</th>
                <th>Result</th>
                <th>Price</th>
                <th>Link</th>
              </tr>
              <tr>
                <td>1 hour</td>
                <td>~50 edited photos, 10 retouched</td>
                <td>200$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
              <tr>
                <td>2 hours</td>
                <td>~100 photos, 25 retouched</td>
                <td>350$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
            </table>
        </div>
        <div className="package-block-mobile" style={{display: 'none'}}>
          <div className="package-description">
            <h3>Wedding / Elopement / Engagement / Event </h3>
            <p><span>Service - </span><span>a separate plan for each occasion will be created and discussed in details</span></p>
            {/* <p className='note'><span>*Studio price not included</span></p> */}
            
          </div>
          <Image src={'https://lh3.googleusercontent.com/pw/AP1GczPeirh5s5YeKSbuj14BLwrBqys-DdMI4NgLrV3U8L3tHApZ8hnDgF3TXh3ZOvdK7YOc6mh183doTPjvf5XczVXnsea34i731tx4sxd4iCUw06RnaBgPGi0lJdxh6ENVAj2gdUW7ckmAspckY87wWV0g=w688-h1031-s-no-gm?authuser=0'} width='350px'/>
          <table>
              <tr>
                <th>Time</th>
                <th>Result</th>
                <th>Price</th>
                <th>Link</th>
              </tr>
              <tr>
                <td>half of day</td>
                <td>unlimited photo count</td>
                <td>from 750$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
              <tr>
                <td>whole day</td>
                <td>unlimited photo count</td>
                <td>from 1500$</td>
                <td><a href="#contact"><button>Book</button></a></td>
              </tr>
            </table>
        </div>
        <div className="package-block-mobile" style={{display: 'none'}}>
          <div className="package-description">
            <h3>Commercial projects</h3>
            <p>Ready for a short-term and long-term commercial projects</p>
            <Image src={'https://lh3.googleusercontent.com/pw/AP1GczMWGmYKVhZ5Kg_vC7s2Zp3CcvcX3z6IYfZ-j6lR0YHARw0kcGil-5VWEOmoP2KJk51EYL9XLxbXHAqrC_sgcN-1rmoaJQrNvt48lYC_9YMC4pZ-RqYFtjPv5KcYMwj29MBxJzFBOOtOx4E_EAxetsx5=w825-h1031-s-no-gm?authuser=0'} width='350px'/>
            <a href="#contact"><button className='commercial-btn'>Contact for details</button></a>
          </div>
        </div>
      </section>
      <section className="contact-section" id='contact'>
        <h1>Book a photoshot</h1>
        <p>Send me your contacts with a short description of your desirable photosession and I will contact you within 24 hours.</p>
        <p>Let's save your most precious moments together!</p>
        <form ref={form} onSubmit={(event) => {sendEmail(event), refreshSendButton()}}>
          <div className="card-input">
              <FloatLabel>
                  <InputText id="usernameInput" value={valueName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueName(e.target.value)} />
                  <label htmlFor="usernameInput">Name</label>
              </FloatLabel>
          </div>
          <div className="card-input">
              <FloatLabel>
                  <InputText id="usernameEmail" keyfilter="email" value={valueEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueEmail(e.target.value)} />
                  <label htmlFor="usernameEmail">Email</label>
              </FloatLabel>
          </div>
          <div className="card-input">
              <FloatLabel>
                  <InputText id="usernameNumber" keyfilter={/^[+]?(\d{1,12})?$/} validateOnly value={valuePhone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValuePhone(e.target.value)} />
                  <label htmlFor="usernameNumber">Phone number</label>
              </FloatLabel>
          </div>
          <div className="card-input">
              <FloatLabel>
                  <InputTextarea id="usernameMessage" value={valueDescription} onChange={(e) => setValueDescription(e.target.value)} rows={5} cols={30} />
                  <label htmlFor="usernameMessage">Description</label>
              </FloatLabel>
          </div>
          <input className="submit btn-standard" type="submit" value={sendButtonText} />
        </form>
        <ul className='contact-social social-media-wrapper'>
            <li className="social-media-item">
                <a href="https://www.instagram.com/d.stoikova.photo?igsh=MWwwdnBndHd1b2w4ZA==">
                    <img src="/instagram_icon.png" alt="instagram" className="social-media-icon" />
                </a>
            </li>
            <li className="social-media-item">
                <a href="https://www.facebook.com/profile.php?id=100011219850763">
                    <img src="/facebook_icon.png" alt="facebook" className="social-media-icon" />
                </a>
            </li>
            <li className="social-media-item">
                <a href="https://t.me/Daryna_Stoikova">
                    <img src="/telegram_icon.png" alt="telegram" className="social-media-icon" />
                </a>
            </li>
            <li className="social-media-item">
                <a href="">
                    <img src="/linkedin_icon.png" alt="linkedin" className="social-media-icon" />
                </a>
            </li>
        </ul>
      </section>
    </div>
  );
}

export default App;