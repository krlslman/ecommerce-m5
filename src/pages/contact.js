import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container main'>
        <h2>Contact Us</h2>
        <p>If you need any assistance or have any questions, please don't hesitate to contact us. You can use the provided form to send us a message, and we will do our best to respond promptly.</p>
      </div>
      <div className='container flex'>
        <div className='letter-container'>
          <form action="">
            {/* <input type="text" id="msg" name="name" placeholder='Your message'/> */}
            <textarea id="msg" name="name" placeholder="Your message" rows="4"></textarea>

            <input type="text" id="name" name="name" placeholder='Your name'/>
            
            <input type="email" id="email" name="name" placeholder='Your email'/>
            
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className='map'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Long_and_Loop_Street_map.svg'></img>
        </div>
      </div>

    </div>
  )
}

export default Contact