import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../..static/data';
import styles from '../../styles/styles';

const Navbar = ({ active }) => {
  return (
    <>
      {/* Nav items */}
      <div className={`flex flex-col items-end md:items-center md:justify-center md:flex md:flex-row ${styles.normalFlex}`}>
        {navItems &&
          navItems.map((item, index) => (
            <div key={index} className=" flex items-center">
              <img src={item.logo} alt={item.title} className="h-6 w-6 mr-2" />
              <Link
                to={item.url}
                className={`px-4 py-2 font-[500] cursor-pointer rounded-full 
                  ${active === index + 1 ? 'bg-gray-200 text-black shadow-lg' : 'text-black 800px:text-[#676666]'} 
                  800px:shadow-none active:text-[#17dd1f] active:shadow-lg transition-all duration-300 ease-in-out`}
              >
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Navbar;
