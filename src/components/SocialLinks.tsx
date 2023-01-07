import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const socials = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "",
      style: " rounded-tr-md",
    },
    {
      id: 2,
      name: "Github",
      icon: <FaGithub size={30} />,
      href: "https://github.com/haryobamy",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:haryobamy.badmus@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/resume.pdf",
      style: " rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socials?.map(({ name, style, href, icon, id, download }) => {
          return (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
            >
              {" "}
              <a
                href={href}
                target="_blank"
                download={download}
                rel="noreferrer"
                className=" flex justify-between items-center w-full text-white"
              >
                <>
                  {name} {icon}
                </>
              </a>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
