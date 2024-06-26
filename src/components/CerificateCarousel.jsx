import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import mernAngelaYu from "../images/certificates/mern_angelayu.jpg";
import django from "../images/certificates/python_django.jpg";
import deeplearning from "../images/certificates/deeplearning.jpg";
import az900 from "../images/certificates/azure_az900.png"

const CerificateCarousel = () => {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <>
          <img src={az900} alt="Azure - AZ900" />
          <div className="myCarousel">
            <h3>Azure Fundamentals <br/> (A-Z 900)</h3>
            <p>
              Azure fundamentals Cloud certificate ( A-Z 900)
              <br />
              <span style={{cursor:"pointer"}} onClick={()=>{
                window.open("https://learn.microsoft.com/api/credentials/share/en-us/AnshumanNarayan-2631/9517ADE49B11920B?sharingId=1A47C319F7356778");
              }}><u>check authenticity</u></span>
            </p>
          </div>
        </>
        <>
          <img src={mernAngelaYu} alt="mern angela yu" />
          <div className="myCarousel">
            <h3>MERN Web Development Bootcamp</h3>
            <p>
              Complete 2021 web development bootcamp by Angela Yu on Udemy.com
            </p>
          </div>
        </>
        <>
          <img src={django} alt="python and django" />
          <div className="myCarousel">
            <h3>Python and Django Web Developer Bootcamp</h3>
            <p>
              Complete Python and Django Web Developer Bootcamp by Jose Portilla on udemy.com
            </p>
          </div>
        </>
        <>
          <img src={deeplearning} alt="deeplearning" />
          <div className="myCarousel">
            <h3>Deep Learning Specialization</h3>
            <p>
              Deep learning Specialization with Andrew Ng and deeplearning.ai on Coursera.
              <br />
              <span style={{cursor:"pointer"}} onClick={()=>{
                window.open("https://coursera.org/share/f21186963a3209721428733cf519207f");
              }}><u>check authenticity</u></span>
            </p>
          </div>
        </>
        
      </Carousel>
    );
}

export default CerificateCarousel
