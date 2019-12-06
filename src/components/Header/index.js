import React from 'react';
import '../../pages/index.css'

const Header = () => (
  <div className="header_main md:h-80">
    <div className="container py-4 flex flex-col items-center content-center md:justify-start sm:justify-center">
      <h1 className="my-4 text-center flex flex-col md:flex-row text-4xl md:text-6xl text-animation">
        <span className="text-gray-800 mx-1 font-bold">Hi I'm</span>
        <span className="text-blue-400 mx-1 font-bold">YooSeok Kim</span>
      </h1>
      <h2 className="text-gray-800 text-center text-xl font-bold md:text-3xl font-bold">
       Junior Web Developer
      </h2>
    </div>
  </div>
);

export default Header;
