import React, {useState} from 'react';

const Portfolio = () => {

  const [projects, setProjects] = useState([]);
  return (
    <div className="" >
    <h1>Portfolio</h1>
    {projects.length > 0 ?
    projects.map((data) => (
      <div>Project {data.name}</div>)) :
    <div><h3>New projects coming soon... </h3></div>
    }    
    </div>
  );
};

export default Portfolio;