import { useState, useEffect } from 'react';
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import { GalleriaDemo } from './components/Galleria/Galleria';
import GallerySection from './components/GallerySection/GallerySection';
import PackagesSection from './components/PackagesSection/PackagesSection';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="App">
      <button className='theme-toggle-floating' onClick={toggleDarkMode}>
        {darkMode ? <i className="pi pi-sun" /> : <i className="pi pi-moon" />}
      </button>

      <section className="main-section" id='home'>
        <MenuBar />
        <GalleriaDemo />
      </section>

      <GallerySection />
      <PackagesSection />
      <ContactForm />
    </div>
  );
}

export default App;
