import React from "react";
import HeroImage from "../assets/images/heroimage.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      // @ts-ignore
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-[120px] "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building and designing software.
            Currently, I love to work on web and mobile application using
            technologies like React, React native, Next JS, Node JS, Angular
            JS,Tailwind css ,Material UI
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
