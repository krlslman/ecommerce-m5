import nodemailer from 'nodemailer';

export default async function sendEmailHandler(req, res) {
  if (req.method === 'POST') {
    console.log("qqweqweqweqweqwe");
    const { name, email, message } = req.body;
    // Create a Nodemailer transporter object
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-gmail-address',
        pass: 'your-gmail-password'
      }
    });

    // Send email using transporter object
    await transporter.sendMail({
      from: `${email}`,
      to: 'your-email-address',
      subject: `Message from ${name}`,
      text: message
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } else {
    res.status(400).json({ message: 'Invalid request method.' });
  }
}

/* In this code, we first import the nodemailer library, which we'll use to send the email. 
Then, we define an async function named sendEmailHandler that checks the request method (POST or not) 
and extracts the name, email, and message fields from the request body. 
We then create a Nodemailer transporter object and use it to send the email. 
Finally, we return a JSON response indicating whether the email was sent successfully or not.
Note that you need to replace the your-gmail-address and your-gmail-password placeholders with 
your actual Gmail address and password, respectively, and the recipient-email-address placeholder 
with the email address of the recipient. Also, make sure to enable "less secure apps" access in your 
Gmail account settings to allow your Next.js app to send emails. */