import React, { useEffect, useState } from 'react';
import { projects } from '../data/resume';
import { FaExternalLinkAlt, FaGithub, FaMobileAlt } from 'react-icons/fa';

// Import existing images
import moverslyUser from '../assets/images/moversly user.png';
import zest from '../assets/images/zest.png';
import doubble from '../assets/images/doubbleWeb.png';

// Map project names to their images (for existing projects)
const projectImages: Record<string, string> = {
  Moversly: moverslyUser,
  Doubble: doubble,
  'Zest Payment': zest,
};

const PortFolio = () => {
  const [githubData, setGithubData] = useState<any>({});

  const fetchData = async () => {
    fetch('https://api.github.com/users/haryobamy')
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      //@ts-ignore
      name='Portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-16 lg:py-32'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work</p>
        </div>

        {/* GitHub Profile */}
        <div className='flex flex-col items-center justify-center mb-12 bg-gray-900 p-6 rounded-lg'>
          <img
            src={githubData?.avatar_url}
            className='rounded-full w-24 h-24 border-4 border-cyan-500'
            alt='GitHub Avatar'
          />
          <p className='font-signature text-2xl mt-3'>{githubData?.name}</p>
          <div className='flex gap-4 mt-2 text-gray-400'>
            <span>
              <span className='text-cyan-400 font-bold'>
                {githubData?.public_repos}
              </span>{' '}
              Public Repos
            </span>
            <span>
              <span className='text-cyan-400 font-bold'>
                {githubData?.followers}
              </span>{' '}
              Followers
            </span>
          </div>
          <a
            href='https://github.com/haryobamy'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-3 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors'
          >
            <FaGithub /> View GitHub Profile
          </a>
        </div>

        {/* Projects Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1'
            >
              {/* Project Image or Placeholder */}
              {projectImages[project.name] ? (
                <img
                  src={projectImages[project.name]}
                  alt={project.name}
                  className='w-full h-48 object-cover'
                />
              ) : (
                <div className='w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center'>
                  <span className='text-4xl font-bold text-cyan-400/50'>
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* Project Info */}
              <div className='p-5'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {project.name}
                </h3>
                <p className='text-gray-400 text-sm mb-4 line-clamp-3'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='text-xs bg-gray-800 text-cyan-400 px-2 py-1 rounded'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-3'>
                  {project.href && (
                    <a
                      href={project.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-sm bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors'
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Apps Section */}
        <div className='mt-16'>
          <h3 className='text-2xl font-semibold text-cyan-400 mb-6 flex items-center'>
            <FaMobileAlt className='mr-3' />
            Mobile Apps (React Native)
          </h3>
          <div className='bg-gray-900 p-6 rounded-lg'>
            <p className='text-gray-400 mb-4'>
              I've built several React Native applications available on iOS and Android:
            </p>
            <ul className='space-y-3 text-gray-300'>
              <li className='flex items-start'>
                <span className='text-cyan-400 mr-2'>•</span>
                <div>
                  <span className='font-semibold'>GoFlexNow Driver App</span> - Delivery driver app with real-time order assignments, GPS navigation, live status updates via WebSockets, and earnings tracking
                </div>
              </li>
              <li className='flex items-start'>
                <span className='text-cyan-400 mr-2'>•</span>
                <div>
                  <span className='font-semibold'>GoFlexNow Customer App</span> - On-demand delivery, food ordering, and bill payments with real-time driver tracking and push notifications
                </div>
              </li>
              <li className='flex items-start'>
                <span className='text-cyan-400 mr-2'>•</span>
                <div>
                  <span className='font-semibold'>Shiga App</span> - Full production mobile app with wallet, transaction history, real-time delivery tracking, and push notifications
                </div>
              </li>
              <li className='flex items-start'>
                <span className='text-cyan-400 mr-2'>•</span>
                <div>
                  <span className='font-semibold'>Moversly Mobile</span> - iOS & Android app for international moving coordination with 30% user engagement growth
                </div>
              </li>
              <li className='flex items-start'>
                <span className='text-cyan-400 mr-2'>•</span>
                <div>
                  <span className='font-semibold'>Bonafide Crypto</span> - Crypto wallet app with portfolio tracking, payments, and cross-border transfers
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
