import React from 'react';
import { profile } from '../data/resume';

const About = () => {
  return (
    <section
      // @ts-ignore
      name='About Me'
      className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white py-16 lg:py-32'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-5 lg:mt-10'>
          I'm {profile.name}, a Senior Software Engineer with 5+ years of experience
          building scalable, high-performance products across fintech, banking, logistics,
          and e-commerce. My journey into software development started with curiosity
          and online resources, growing into a career where I've owned full product
          lifecycles — from architecture and development to testing and release.
        </p>

        <p className='text-xl mt-6'>
          I specialize in <span className='text-cyan-400'>React Native</span>,
          <span className='text-cyan-400'> React.js</span>,
          <span className='text-cyan-400'> TypeScript</span>,
          <span className='text-cyan-400'> NestJS</span>,
          <span className='text-cyan-400'> C#</span>, and
          <span className='text-cyan-400'> AWS</span>. Whether it's building mobile
          apps that serve thousands of users daily or architecting banking systems
          that handle millions of transactions, I bring the same commitment to
          performance, reliability, and clean code.
        </p>

        <p className='text-xl mt-6'>
          Throughout my career, I've worked remotely with companies across
          <span className='text-gray-400'> UAE</span>,
          <span className='text-gray-400'> Australia</span>, and
          <span className='text-gray-400'> Nigeria</span>, collaborating with
          cross-functional teams to deliver impactful solutions. I've led frontend
          teams, reduced crash rates by up to 80%, migrated entire codebases to
          TypeScript, and built reusable component libraries adopted across multiple projects.
        </p>

        <p className='text-xl mt-6'>
          I'm passionate about performance optimization, security best practices,
          and developer experience. When I'm not coding, I enjoy contributing to
          open source, mentoring fellow developers, and staying current with the
          ever-evolving tech landscape.
        </p>

        <div className='mt-8 flex flex-wrap gap-4'>
          <div className='bg-gray-800 px-4 py-2 rounded-lg'>
            <span className='text-cyan-400 font-bold'>5+</span>
            <span className='text-gray-400 ml-2'>Years Experience</span>
          </div>
          <div className='bg-gray-800 px-4 py-2 rounded-lg'>
            <span className='text-cyan-400 font-bold'>10+</span>
            <span className='text-gray-400 ml-2'>Projects Delivered</span>
          </div>
          <div className='bg-gray-800 px-4 py-2 rounded-lg'>
            <span className='text-cyan-400 font-bold'>4</span>
            <span className='text-gray-400 ml-2'>Industries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
