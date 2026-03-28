import React from 'react';
import { workExperience } from '../data/resume';

const WorkExperience = () => {
  return (
    <div
      // @ts-ignore
      name='Work Experience'
      className='bg-gradient-to-b from-black to-gray-800 w-full py-16 lg:py-32'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Work Experience
          </p>
          <p className='py-6'>My professional journey</p>
        </div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-700' />

          {workExperience.map((job, index) => (
            <div
              key={job.id}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900' />

              {/* Content */}
              <div
                className={`ml-6 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                }`}
              >
                <div className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300'>
                  <div className={`${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    <span className='text-cyan-400 text-sm font-medium'>
                      {job.period}
                    </span>
                    <h3 className='text-xl font-bold mt-1'>{job.title}</h3>
                    <p className='text-gray-400'>
                      {job.company} · {job.location}
                    </p>
                    <span className='inline-block mt-1 text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded'>
                      {job.type}
                    </span>
                  </div>

                  <ul
                    className={`mt-4 space-y-2 text-gray-300 text-sm ${
                      index % 2 === 0 ? '' : 'md:text-left'
                    }`}
                  >
                    {job.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className='flex items-start'>
                        <span className='text-cyan-400 mr-2 flex-shrink-0'>
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {job.highlights.length > 3 && (
                    <details className='mt-2'>
                      <summary className='text-cyan-400 text-sm cursor-pointer hover:text-cyan-300'>
                        +{job.highlights.length - 3} more achievements
                      </summary>
                      <ul className='mt-2 space-y-2 text-gray-300 text-sm'>
                        {job.highlights.slice(3).map((highlight, i) => (
                          <li key={i} className='flex items-start'>
                            <span className='text-cyan-400 mr-2 flex-shrink-0'>
                              •
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
