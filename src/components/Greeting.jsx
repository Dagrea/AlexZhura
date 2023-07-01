import React, {useState} from 'react';

const Greeting = () => {
  const [isActive, setIsActive] = useState(false);
  let className = 'avatar';
  let tech_stack = ['html', 'css', 'sass', 'react', 'redux'];
  if (isActive) {
    className += ' avatar_running';
  }
  let text = 'React developer\nFront-End\nJunior'
  return (
    <div className="home" id='greeting'>
    <div className={className} 
      onMouseEnter={() => setIsActive(current => !current)}
    ></div>
    <div className="home_text" >
    <h1>{text}</h1>
    <p>Hello, I am Alexandr Zhuravliov. A passionate Front-end React Developer based in Ukraine. </p>
    </div>
    <div className="home_icons" >
    {tech_stack.map((tech) => <div className={"greeting_icon_container"}><div className={"greeting_icons_"+tech} /></div>)}
    </div>
    </div>
  );
};

export default Greeting;
