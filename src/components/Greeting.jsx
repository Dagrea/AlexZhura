import React, {useState} from 'react';

const Greeting = () => {
  const [isActive, setIsActive] = useState(false);
  let className = 'avatar';
  let tech_stack = ['html', 'css', 'sass', 'react', 'redux'];
  if (isActive) {
    className += ' avatar_running';
  }
  return (
    <div className="greeting" id='greeting'>
    <div className={className} 
      onMouseEnter={() => setIsActive(current => !current)}
    ></div>
    <h1>Junior Front-End React developer</h1>
    <p>Hello, I am Alexandr Zhuravliov. A passionate Front-end React Developer based in Ukraine. </p>
    <div className="greeting_icons" >
    {tech_stack.map((tech) => <div className={"greeting_icon_container"}><div className={"greeting_icons_"+tech} /></div>)}
    </div>
    </div>
  );
};

export default Greeting;
