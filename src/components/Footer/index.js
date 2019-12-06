import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-gray-200 w-full p-4 md:p-8 items-center">
      <div className="container flex w-full flex flex-col md:flex-row content-center items-center">
        <div className="text-2xl font-bold w-full md:w-1/3 py-2 flex justify-center md:justify-start">
          <Link to={'/'}>
            <h3 className="font-sans">YooLog</h3>
          </Link>
        </div>
        <div className="order-last md:order-none w-full md:w-1/3 py-2 flex justify-center items-center content-center">
          <small class="text-md font-bold font-sans">
            Made with using GatsbyJS and
            Netlify
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
