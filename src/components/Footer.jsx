import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer" >
    <div>Copyright © 2023. All rights are reserved</div>
    <Link to="https://github.com/Dagrea" target="_blank" >
    <div className="footer_github_icon"/>
    </Link>
    </div>
  );
};

export default Footer;