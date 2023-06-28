import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  return (
    <div className="navbar">
    <Link smooth to="/#greeting"><div className="navbar_logo">Alexandr Zhuravliov</div></Link>
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
            <ul class="menu">
                <li><Link smooth to="/#greeting">Home</Link></li>
                <li><Link smooth to="/#about">About</Link></li>
                <li><Link smooth to="/#portfolio">Portfolio</Link></li>
                <li><Link smooth to="/#contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;