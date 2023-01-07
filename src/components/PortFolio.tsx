import React from "react";
import moverslyUser from "../assets/images/moversly user.png";
import moverslyAdmin from "../assets/images/Moversly Admin.png";
import zest from "../assets/images/zest.png";
import doubble from "../assets/images/doubbleWeb.png";
const PortFolio = () => {
  const portfolios = [
    {
      id: 1,
      src: moverslyUser,
      href: "https://moversly.com",
    },
    {
      id: 2,
      src: doubble,
      href: "https://doubble.ng/",
    },
    {
      id: 3,
      src: zest,
      href: "https://zest-dev.netlify.app/",
    },
    {
      id: 4,
      src: moverslyAdmin,
      href: "https://admin.moversly.com",
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      //@ts-ignore
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}>Demo</a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
