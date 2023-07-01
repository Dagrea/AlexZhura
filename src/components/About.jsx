import React from 'react';
import avatar from '../assets/about.jpg'

const About = () => {

  return (
    <div className="about" id='about'>
    <div><h1>About me</h1></div>
    <div className="about_inner">
    <div className="avatar_about">
    <img className="avatar_about_img" src={avatar} alt="avatar" />
    </div>
    <div className="about_text">     
    <div> <h3>A dedicated Front-end Developer based in Ternopil, Ukraine. Ready for relocate</h3></div>
    <p> A dedicated Front-end Developer based in Ternopil, Ukraine. Ready to relocate
As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and Redux. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. In my spare time, I prefer to read books or engage in outdoor activities. I love to learn and explore new arenas. </p>
    </div>
    </div>
    </div>
  );
};

export default About;