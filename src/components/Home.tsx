import React from "react";
import HeroImage from "../assets/images/heroimage.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      // @ts-ignore
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-[550px] pb-[500px] "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a highly motivated and experienced full-stack developer with a
            passion for building and designing software solutions. With over 3
            years of hands-on experience, I have developed a deep understanding
            of both frontend and backend technologies, allowing me to create
            robust and scalable applications.
            <br />
            Proactive Software Engineer that loves providing creative and
            innovative solutions to real life problems. I am passionate about
            building enterprise solutions for organizations, meeting their basic
            business needs as well as usual working processes. I have gained
            extensive experience in all aspects of Software Engineering,
            including Software Design, Application Programming and Unit Testing.
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
        <div className="">
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
