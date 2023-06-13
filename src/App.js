import React, {useState, useEffect, useCallback} from 'react';
import './styles/css/App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Greeting from './components/Greeting.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import debounce from "lodash/debounce";

function App() {
  const [isScroll, setIsScroll] = useState(false);
  const setFalse = () => {
    setIsScroll(false);
  };
  const debouncedHandleOnScroll = useCallback(debounce(()=>{setFalse()}, 100),
    []);
  const handleOnScroll = () => {
    if(!isScroll) {
      setIsScroll(true);
    }
    debouncedHandleOnScroll();
  };
  return (
    <div className={isScroll ? 'App' : 'App scroll-hide'} onScroll={handleOnScroll}>  
      <Navbar/>
      <div className="content">
      <div className="content_inner">
      <Greeting/>
      <About/>
      <Portfolio/>
      <Contact/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;