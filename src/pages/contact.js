import Image from 'next/image';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import mapImg from '../assets/contact_map.jpeg'

const Contact = () => {
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
        <h2>Contact Us</h2>
        <p>If you need any assistance or have any questions, please don&#39;t hesitate to contact us. You can use the provided form to send us a message, and we will do our best to respond promptly.</p>
      </div>
      <div className='container '>
        <div className='row'>
          <div className='letter-container'>
            <form action="" onSubmit={handleSubmit}>
              <textarea id="msg" name="name" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message"  rows="4"></textarea>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name'/>
              <input type="email" id="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email'/>
              <button className='btn btn-outline' type="submit">Submit</button>
            </form>
          </div>
          <div className='map'>
            <Image src={mapImg} alt="Map" placeholder="blur"/>
          </div>
        </div>
        
        
      </div>

    </div>
  )
}

export default Contact