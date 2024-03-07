import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import ml from '../assets/machineLearning.png';
import dl from '../assets/dl.png';
import node from '../assets/node.png';
import reactImage from '../assets/react.png';

export default function Experience() {
    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'

        },
        {
            id: 4,
            src: python,
            title: 'Python',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: github,
            title: 'Github',
            style: 'shadow-gray-500'
        },
        {
            id: 6,
            src: reactImage,
            title: 'ReactJS',
            style: 'shadow-blue-400'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            src: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: ml,
            title: 'Machine Learning',
            style: 'shadow-white'
        },
    ];

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white'>
            <div className='max-w-screen-lg mx-auto p-4'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline '>Experience</p>
                <p className='py-6'>These are my skills</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
                    {skills.map((skill) => (
                        <div key={skill.id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + skill.style}>
                            <img src={skill.src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
