import { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Project", path: "/projects" },
    { id: 3, text: "Fundraising", path: "/fundraising" },
    { id: 4, text: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] px-8">
        AgriTech
      </h1>
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-full h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed top-0 bottom-0 left-[-100%] w-full ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 mt-8">
          AgriTech
        </h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 text-center"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
