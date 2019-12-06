import React,{useState} from 'react';
import { Link } from 'gatsby';
import Hamburger from 'react-hamburger-menu';
import '../../pages/index.css'

const Menu = () => {
  const [open, setOpen]=useState(false);

  const hamburgerOnclick = ()=>{
    setOpen(!open);
  };

  return (
    [open ?
        <ul className="menu list-none pt-6 p-0 flex justify-center">
          <div className ='hamburger'>
          <Hamburger 
              isOpen={open}
              menuClicked={hamburgerOnclick}
              width={30}
              height={30}
              strokeWidth={3}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
          />
          </div>
        <li className="px-2" >
          <Link
            activeClassName="text-blue-400 underline"
            className="text-gray-800 hover:text-blue-400 "
            to={'/'}
          >
            Home
          </Link>
        </li>
        <li className="px-2" >
          <Link
            activeClassName="text-blue-400 underline"
            to={'/about-me/'}
            className="text-gray-800 hover:text-blue-400"
          >
            About me
          </Link>
        </li>
        <li className="px-2" >
          <Link
            activeClassName="text-blue-400 underline"
            className="text-gray-800 hover:text-blue-400"
            to={`/blog/`}
          >
            Projects
          </Link>
        </li>
      </ul>
    : 
      <ul className="menu list-none p-0 pt-6 flex justify-left">
        <div className ='hamburger'>
        <Hamburger 
                isOpen={open}
                menuClicked={hamburgerOnclick}
                width={30}
                height={30}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
          />
        </div>
      </ul>
    ]
  );
};

export default Menu;
