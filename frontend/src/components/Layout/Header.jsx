import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const Header = ({ active }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`bg-[#FFFFFF] px-6 pt-4 pb-4 ${styles.section}`}>
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="/src/assets/book-me-logo.png"
              className="bg-transparent h-12"
              alt="logo"
              style={{ width: "130px", height: "auto"}}
            />
          </Link>
        </div>
        <div className="hidden md:block">
        <Navbar active={active}/>
        </div>
         
        {/*The navitems */}
        <div className="hidden md:flex">
          <button className="button flex  items-center border p-2 px-4 rounded-md w-auto">
            <div className="flex flex-col">
              <span className="font-bold">
                Buukmenow Demo
              </span>
              <span className="text-xs text-gray-500">Buukmenow@gmail.com</span>
            </div>
            <span className="space w-2"></span>
            <AiOutlineDown
              className="cursor-pointer mt-1"
              onClick={() => setDropdownActive(!dropdownActive)}
            />
          </button>
          {dropdownActive && (
            <>
            <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md">
              <Link to="/demo-1" className="block px-4 py-2 hover:bg-gray-100">
                Demo 1
              </Link>
              <Link to="/demo-2" className="block px-4 py-2 hover:bg-gray-100">
                Demo 2
              </Link>
              <Link to="/demo-3" className="block px-4 py-2 hover:bg-gray-100">
                Demo 3
              </Link>
            </div>
            </>
          
          )}
        </div>
        <div className="md:hidden">
          <button className="button flex items-center border p-2 px-4 rounded-md w-auto" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        
          <Navbar active={3} />
     
      )}
    </div>
  );
};

export default Header;
