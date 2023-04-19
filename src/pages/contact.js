import Image from 'next/image';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
// import mapImg from '../assets/contact_map.jpg'
import useTranslation from 'next-translate/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => { // TODO : fix
    // e.preventDefault();

    // const response = await fetch('/api/sendEmailHandler', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, message })
    // });
    toast.success(`Your message is sent successfully!`)
    // setName('');
    // setEmail('');
    // setMessage('');

    // const data = await response.json();    
  };

  return (
    <div className='contact'>
      <div className='container main'>
        <h2>{t('contact:title')}</h2>
        <p>{t('contact:paragraph_1')}</p>
      </div>
      <div className='container '>
        <div className='row'>
          <div className='letter-container'>
            <form action="" onSubmit={handleSubmit}>
              <textarea id="msg" name="name" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t('contact:Message_placeholder')} rows="4"></textarea>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t('contact:Name_placeholder')}/>
              <input type="email" id="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('contact:Email_placeholder')}/>
              <button className='btn btn-outline' type="submit">{t('contact:Submit')}</button>
            </form>
          </div>
          <div className='map'>
            <Image src={process.env.contact_map} alt="Map" objectFit='cover' width={500} height={500}/>
          </div>
        </div>
        
        
      </div>

    </div>
  )
}

export default Contact