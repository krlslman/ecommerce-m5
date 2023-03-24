import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmailHandler', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    toast.success(`Your message is sent successfully!`)
    setName('');
    setEmail('');
    setMessage('');

    const data = await response.json();
    console.log("data:",data);
    
  };

  return (
    <div className='contact'>
      <div className='container main'>
        <h2>Contact Us</h2>
        <p>If you need any assistance or have any questions, please don&#39;t hesitate to contact us. You can use the provided form to send us a message, and we will do our best to respond promptly.</p>
      </div>
      <div className='container flex'>
        <div className='letter-container'>
          <form action="" onSubmit={handleSubmit}>
            {/* <input type="text" id="msg" name="name" placeholder='Your message'/> */}
            <textarea id="msg" name="name" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message"  rows="4"></textarea>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name'/>
            <input type="email" id="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email'/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className='map'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Long_and_Loop_Street_map.svg' alt="img map" />
        </div>
      </div>

    </div>
  )
}

export default Contact