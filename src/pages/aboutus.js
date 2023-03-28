import Image from "next/image";
import React from "react";
import imageUpper from '../assets/about_street.jpg'
import imagePortre from '../assets/about_portre.jpg'

const Aboutus = () => {
  return (
    <div className="aboutus container">
      <h2>About us</h2>
      <h3 className="sub-header">How it started</h3>
      <p>
        In a world where distractions are aplenty, it is easy to lose sight of
        what really matters - creating a space that brings you joy and comfort.
        At American Furniture, we are on a mission to help you reclaim that
        feeling of balance and peace in your home. Our collection of beautifully
        crafted furniture pieces are designed to help you escape the chaos of
        the outside world and create a sanctuary that is truly yours. With our
        furniture, you will rediscover the simple pleasure of sitting down,
        relaxing, and enjoying the moment - just like that Friday at 5pm
        feeling, every day of the week. So why wait? Let us help you find the
        perfect pieces to transform your home into a haven of tranquility and
        style.
      </p>
      <h3 className="sub-header">Our Story</h3>
      <div className="photo-and-text-column flex-wrap flex-lg-nowrap justify-content-center">
        <div className="photo-column">
          <div className="image-item">
            <Image src={imageUpper} alt="Aboutus image 1" />
          </div>
          <div className="image-item" style={{ filter: "saturate(0.1) contrast(1.2)" }}>
            <Image src={imagePortre} alt="Aboutus image 2" />
          </div>
        </div>
        <div className="text-column">
          <p>
            At American Furniture, we believe that furniture is more than just a
            functional item - it is a reflection of who you are and what you
            value. That is why we were founded with a mission to create a
            different kind of furniture shopping experience, one that is centered
            on our customers and their needs. We know that the traditional
            furniture industry can be overwhelming and unrelatable, with a focus
            on trendy, mass-produced pieces that lack personality and
            craftsmanship. But we also know that furniture is an investment that
            should last for years to come, and that is why we take the time to
            carefully curate every piece in our collection. From classic,
            timeless designs to modern, cutting-edge styles, we offer furniture
            that not only looks great, but also stands the test of time. We are all 
            about that Friday at 5pm feeling - that moment
            when you can finally relax and enjoy the space you have created. We
            understand that life can be busy and stressful, and that is why we
            believe your home should be a sanctuary where you can escape the
            chaos and find peace. With our furniture, you can create a space
            that is uniquely yours, filled with pieces that bring you joy and
            comfort. But our mission goes beyond just selling furniture. We are
            here to help you create a lifestyle that is centered on what really
            matters - family, friends, and the simple pleasures of life. Whether
            you are looking for a cozy sectional to snuggle up with your loved
            ones or a sturdy dining table to gather around with friends, we have
            everything you need to create a space that is perfect for your unique
            lifestyle. And we are a brand built by and for our
            community. We understand that furniture shopping can be overwhelming
            and confusing, which is why we are committed to providing
            personalized service and support every step of the way. Our team of
            experts is always here to help you find the perfect pieces to
            elevate your space and create that Friday at 5pm feeling every day
            of the week. So why wait? Browse our collection today and discover
            the perfect furniture pieces to transform your home into a haven of
            tranquility and style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
