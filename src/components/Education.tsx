import React from 'react';
import { education, certifications } from '../data/resume';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div
      // @ts-ignore
      name='Education'
      className='bg-gradient-to-b from-gray-800 to-black w-full py-16 lg:py-32'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Education & Certifications
          </p>
        </div>

        {/* Certifications */}
        <div className='mb-12'>
          <h3 className='text-2xl font-semibold text-cyan-400 mb-6 flex items-center'>
            <FaCertificate className='mr-3' />
            Certifications
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105'
              >
                <div className='flex items-start justify-between'>
                  <div>
                    <h4 className='text-lg font-bold text-white'>
                      {cert.name}
                    </h4>
                    <p className='text-gray-400 mt-1'>{cert.issuer}</p>
                  </div>
                  <span className='bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium'>
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className='text-2xl font-semibold text-cyan-400 mb-6 flex items-center'>
            <FaGraduationCap className='mr-3' />
            Education
          </h3>
          <div className='space-y-6'>
            {education.map((edu) => (
              <div
                key={edu.id}
                className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300'
              >
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                  <div>
                    <h4 className='text-lg font-bold text-white'>
                      {edu.degree}
                    </h4>
                    <p className='text-cyan-400 mt-1'>{edu.field}</p>
                    <p className='text-gray-400 mt-1'>{edu.institution}</p>
                  </div>
                  <span className='mt-2 md:mt-0 text-gray-500 text-sm'>
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
