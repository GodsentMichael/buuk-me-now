import React, { useState } from "react";
import { AiOutlineDown } from 'react-icons/ai';
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const Header = ({ active }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="/src/assets/book-me-logo.png"
              className="bg-transparent h-12"
              alt="logo"
            />
          </Link>
        </div>
        {/*The navitems */}
<Navbar active={3} />


<div className="relative">
  <button className="button flex  items-center border p-2 px-4 rounded-md w-auto">
    <div className="flex flex-col">
    <span>Buukmenow Demo</span>
    <span className="text-xs">Buukmenow@gmail.com</span>
    </div>
    <span className="space w-2"></span>
    <AiOutlineDown
      className="cursor-pointer mt-1"
      onClick={() => setDropdownActive(!dropdownActive)}
    />
  </button>
  {dropdownActive && (
    <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md">
      <Link to="/demo-1" className="block px-4 py-2 hover:bg-gray-100">Demo 1</Link>
      <Link to="/demo-2" className="block px-4 py-2 hover:bg-gray-100">Demo 2</Link>
      <Link to="/demo-3" className="block px-4 py-2 hover:bg-gray-100">Demo 3</Link>
    </div>
  )}
</div>

</div>
</div>
);
};

export default Header;
