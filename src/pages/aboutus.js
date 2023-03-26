import React from "react";

const Aboutus = () => {
  return (
    <div className="aboutus container">
      <h2>About us</h2>
      <h3 className="sub-header">How it started</h3>
      <p>
        In a world inundated with emails, fake news, status updates, smartphones
        & connected watches, we exist to bring our community back to the moment
        and deliver that Friday at 5pm feeling every day of the week. This is
        the moment our customer finds balance; when they stop focusing on what
        they should be doing and instead focus on what they want to do.
      </p>
      <h3 className="sub-header">Our Story</h3>
      <div className="photo-and-text-column flex-wrap flex-lg-nowrap justify-content-center">
        <div className="photo-column">
          {/* <img alt="asdasd"
            src="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            width={350}
          ></img> */}
          <img alt="Aboutus image 1"
            src="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            
          ></img>
          <img alt="Aboutus image 2"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            
          ></img>
        </div>
        <div className="text-column">
          <p>
            Cherry was founded in 2011 by a group of friends who found the
            traditional world of men’s capital-F-”Fashion” completely
            unrelatable. We saw pictures of shirtless men with rippling ab
            muscles, some standing outside of storefronts coating you with
            cologne, with the message of “if only you buy our clothes you can
            try to be as cool as we are” - and we were absolutely repelled. At
            the same time, we saw that “shorts” in the marketplace were getting
            longer and longer, with more and more fabric/pocketing/zip-ties &
            whoseewhatsits all over them. Where were the proper length men’s
            shorts that defined generations of shortsmen? Not only were shorts
            becoming completely unrecognizable, but they were also losing their
            personality, their craftsmanship. No one was focusing on this
            forgotten category of men’s apparel, when it’s a product that’s so
            vital to get right. Finally, we founded the company in 2011, just 3
            years after the financial crisis, 4 years after the launch of the
            first iPhone, and in the wake of the rapid rise of Facebook,
            Linkedin and other social networking apps. People were more
            stressed, comparing their lives to others on social media, and
            allowing work to overtake more and more of the work-life balance.
            Enter Cherry - our visceral and irreverent response to all of the
            above. We launched in September of 2011 and were sold out for 2+
            years of our core casual shorts product. In the subsequent years we
            launched swim trunks, aloha shirts, sport shorts, lounge shorts,
            performance polos, t-shirts, hoodies, jackets, and quarter to round
            out the year-round Weekend Wardrobe. Throughout, we maintained a
            consistent focus on building the perfect product for your Weekend,
            and wove every piece of fabric around that objective. Now, we are
            proud to say we have the most well-rounded,
            custom-built-for-the-weekend apparel on the planet and, not only
            that, a brand built by, and for, our community and 100% centered on
            that Friday at 5pm feeling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
