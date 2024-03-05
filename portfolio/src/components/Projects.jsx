import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import colorIt from '../assets/portfolio/imageColorizer.png';
import genderClassifier from '../assets/portfolio/genderClassifier.jpg';
import creditCardFraud from '../assets/portfolio/creditCardFraudDetection.png';
import reactWeather from '../assets/portfolio/weatherVortex.png';
import blogApp from '../assets/portfolio/blogApp.png';
import spellChamp from '../assets/portfolio/spellChamp.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: blogApp,
      demoLink: 'https://github.com/Manishb18/blog_application',
      codeLink: 'https://github.com/Manishb18/blog_application',
    },
    {
      id: 2,
      src: spellChamp,
      demoLink: 'https://spell-champ-by-manish.netlify.app/',
      codeLink: 'https://github.com/Manishb18/Project-Spell-Champ',
    },
    {
      id: 3,
      src: colorIt,
      demoLink: 'https://github.com/Manishb18/Image-Colorizing-System',
      codeLink: 'https://github.com/Manishb18/Image-Colorizing-System',
    },
    {
      id: 4,
      src: reactWeather,
      demoLink: 'https://github.com/Manishb18/WeatherApp',
      codeLink: 'https://github.com/Manishb18/WeatherApp',
      
    },
    {
      id: 5,
      src: genderClassifier,
      demoLink: 'https://github.com/Manishb18/Gender-Detection-System-by-Manish',
      codeLink: 'https://github.com/Manishb18/Gender-Detection-System-by-Manish',
    },
    {
      id: 6,
      src: creditCardFraud,
      demoLink: 'https://github.com/Manishb18/CodSoft_Internship/blob/main/CodSoft_Task_2.ipynb',
      codeLink: 'https://github.com/Manishb18/CodSoft_Internship/blob/main/CodSoft_Task_2.ipynb',
      
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, '_blank');
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, '_blank');
  };

  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map((item) => (
            <div key={item.id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={item.src} alt="" className='rounded-md hover:scale-105 duration-200' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleDemoClick(item.demoLink)}>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleCodeClick(item.codeLink)}>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
