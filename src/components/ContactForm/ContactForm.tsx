import { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from 'primereact/floatlabel';
import emailjs from '@emailjs/browser';

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
  usernameEmail: HTMLInputElement;
  usernameNumber: HTMLInputElement;
  usernameMessage: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function ContactForm() {
  const [sendButtonText, setSendButtonText] = useState('Send');
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueDescription, setValueDescription] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sendButtonText === 'Message sent!') {
      return;
    }
    const phoneRegex = /^[+]?(\d{1,12})?$/;
    const checkFields = valueName && valueEmail && phoneRegex.test(valuePhone);
    if (checkFields) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            from_name: valueName,
            message: valueDescription,
            phone_number: valuePhone,
            email: valueEmail,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );
        setSendButtonText('Message sent!');
      } catch {
        // handle error
      }
    }
  };

  const refreshSendButton = () => {
    if (sendButtonText === 'Message sent!') {
      setSendButtonText('Send');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h1>Book a photoshot</h1>
      <p>Send me your contacts with a short description of your desirable photosession and I will contact you within 24 hours.</p>
      <p>Let's save your most precious moments together!</p>
      <form ref={form} onSubmit={(event) => { sendEmail(event); refreshSendButton(); }}>
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
          <a href="https://www.instagram.com/d.stoikova.photo?igsh=MWwwdnBgdHd1b2w4ZA==">
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
  );
}
