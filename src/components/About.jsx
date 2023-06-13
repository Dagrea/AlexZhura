import React from 'react';
import avatar from '../assets/about.jpg'

const About = () => {

  return (
    <div className="about" >
    <div><h1>ABOUT ME</h1></div>
   <div className="about_inner">
    <div className="avatar_about">
      <img className="avatar_about_img" src={avatar} alt="avatar" />
    </div>
    <div className="about_text">     
    <div> <h3>A dedicated Front-end Developer based in Ternopil, Ukraine. Ready for relocate</h3></div>
    <p> As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript and React. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.</p>
    </div>
    </div>
    </div>
  );
};

export default About;