import React from 'react';

import { Link } from "react-router-dom";

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

const projects = [
  {
    name:'Video Editor Portfolio',
    description: 'This project is a portfolio with examples of the work of a video editor. The project is a landing page with a modern responsive design written in a mobile-first approach.',
    img: project1,
    keywords: ['React', 'CSS', 'i18n'],
    links: ['https://dagrea.github.io/video-editor-portfolio/', 'https://github.com/Dagrea/video-editor-portfolio']
  },
  {
    name:'Book Store',
    description: 'This project is a simple SPA of an online store. The project uses React, Redux toolkit and Material UI',
    img: project2,
    keywords: ['React', 'Redux',  'Material UI'],
    links: ['https://book-store-cyan-one.vercel.app/', 'https://github.com/Dagrea/book-store']
  },
]

const Project = ({data, index}) => {
  return (
    <div className="project" >
    <div className="project_image" >
    <img src={data.img} alt="project" className={'project'+(index+1)+'_image'}/>
    </div>
    <div className="project_text" >
    <div><h3>{data.name}</h3></div>
    <div>{data.description}</div>
    <div className="project_keywords" >
    {data.keywords.map((keyword) => <div className="project_keyword" >{keyword}</div> )}
    </div>
    <div className="project_links" >
    <Link to={data.links[1]} target="_blank" >
    <div className="project_links_items" >
    <div>GitHub</div>
    <div className="project_github_icon"/>
    </div>
    </Link>
    <Link to={data.links[0]} target="_blank" >
    <div className="project_links_items">
    <div>Demo</div>
    <div className="project_react_icon"/>
    </div>
    </Link>
    </div>
    </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>
    <div><h1>Portfolio</h1></div>
    {projects.length > 0 ?
    projects.map((item, index) => ( <Project data={item} index={index} key={index}/> )) :
    <div><h3>New projects coming soon... </h3></div>
    }    
    </div>
  );
};

export default Portfolio;