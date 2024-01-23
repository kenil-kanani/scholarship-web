// import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiHome, FiMail, FiFileText, FiSearch } from 'react-icons/fi'; // Import icons from react-icons library
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#6AA84F] p-4 text-[#FFF2DB]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <FiHome className="text-2xl" color='#FFF2DB' />
          </Link>
        </div>
        <div className="space-x-4 flex items-center text-[#FFF2DB] ">
          <Link className='hover:text-[#BD1E59]' to={"/"}>Home</Link>
          <Link className='hover:text-[#BD1E59]' to={"/about-us"}>About Us</Link>
          <Link className='hover:text-[#BD1E59]' to={"/login"}>
            <button className='bg-[#FFF] text-[#6AA84F] px-4 py-1 rounded-xl hover:text-[#BD1E59]'>
              LogIn <FaArrowRight className="inline-block" />
            </button>
          </Link>
          {/* <Link className='hover:text-[#BD1E59]' to={"/contact-us"}>Contact Us</Link> */}
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
