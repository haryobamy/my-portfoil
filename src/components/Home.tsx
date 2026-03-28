import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import HeroImage from '../assets/images/home.jpg';
import { profile } from '../data/resume';

const Home = () => {
  return (
    <div
      // @ts-ignore
      name='Home'
      className='w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 flex items-center'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 py-20'>
        <div className='flex flex-col justify-center flex-1'>
          <h2 className='text-4xl lg:text-6xl font-bold text-white'>
            I'm a {profile.title}
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>{profile.summary}</p>
          <div>
            <Link
              to='Portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div className='flex-1 flex justify-center'>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain shadow-xl '
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
