import React from 'react';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import reactImage from '../assets/images/react.png';
import nextjs from '../assets/images/nextjs.png';
import materialUi from '../assets/images/materialUi.svg';
import github from '../assets/images/github.png';
import tailwind from '../assets/images/tailwind.png';
import typescript from '../assets/images/typescript.svg';
import angular from '../assets/images/angular.svg';
import nestjs from '../assets/images/nestjs-svgrepo-com.svg';
import node from '../assets/images/nodejs-icon-logo-svgrepo-com.svg';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React/React Native',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: nextjs,
      title: 'Next JS',
      style: 'shadow-white',
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },

    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
    {
      id: 7,
      src: materialUi,
      title: 'Material UI',
      style: 'shadow-blue-600',
    },
    {
      id: 8,
      src: typescript,
      title: 'Typescript',
      style: 'shadow-blue-600',
    },
    {
      id: 9,
      src: angular,
      title: 'Angular',
      style: 'shadow-red-600',
    },
    {
      id: 10,
      src: node,
      title: 'Node Js',
      style: 'shadow-green-600',
    },
    {
      id: 11,
      src: nestjs,
      title: 'Nest Js',
      style: 'shadow-red-600',
    },
  ];
  return (
    <div
      // @ts-ignore
      name='Experience'
      className='bg-gradient-to-b from-gray-800 to-black w-full h-full lg:h-screen lg:pt-[150px]'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Experience
          </p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
