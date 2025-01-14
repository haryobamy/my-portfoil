import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// @ts-ignore
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navlink = [
    {
      name: 'Home',
    },
    {
      name: 'About Me',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Contact Me',
    },
    {
      name: 'Experience',
    },
  ];
  return (
    <div className='flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed '>
      <div>
        <h1 className=' text-3xl lg:text-5xl font-signature ml-2'>
          Badmus Sulaimon Olawole
        </h1>
      </div>

      <ul className='hidden md:flex'>
        {navlink?.map(({ name }, i) => {
          return (
            <li
              key={i}
              className=' px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '
            >
              <Link
                to={name}
                smooth
                duration={500}
                // onClick={() => setNav(!nav)}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
        onClick={() => setNav(!nav)}
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {navlink?.map(({ name }, i) => {
            return (
              <li
                key={i}
                className=' px-4 cursor-pointer capitalize  py-6 text-4xl font-medium text-gray-500 hover:scale-105 duration-200 '
              >
                <Link
                  to={name}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
