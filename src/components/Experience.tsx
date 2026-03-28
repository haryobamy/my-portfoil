import React from 'react';
import { skillCategories } from '../data/resume';

const Skills = () => {
  return (
    <div
      // @ts-ignore
      name='Skills'
      className='bg-gradient-to-b from-gray-800 to-black w-full py-16 lg:py-32'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Skills
          </p>
          <p className='py-6'>Technologies and tools I work with</p>
        </div>

        {skillCategories.map((category) => (
          <div key={category.category} className='mb-10'>
            <h3 className='text-2xl font-semibold text-cyan-400 mb-4'>
              {category.category}
            </h3>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center'>
              {category.skills.map(({ id, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-4 px-2 rounded-lg bg-gray-900 ${style}`}
                >
                  <p className='text-lg font-medium'>{title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
