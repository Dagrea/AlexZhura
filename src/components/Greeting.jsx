import React, {useState} from 'react';

const Greeting = () => {
  const [isActive, setIsActive] = useState(false);
  let className = 'avatar';
  if (isActive) {
    className += ' avatar_running';
  }
  return (
    <div className="greeting" >
    <div className={className} 
      onMouseEnter={() => setIsActive(current => !current)}
    ></div>
    <h1>Junior Front-End React developer</h1>
    <p>Hello, I am Alexandr Zhuravliov. A passionate Front-end React Developer based in Ukraine. </p>
    </div>
  );
};

export default Greeting;
