import React from 'react';
import CardBlogPost from './CardBlogPost';
import { Link } from 'gatsby';

const Posts = ({ posts }) => {
  return (
    <div className="flex flex-col justify-center items-center content-center py-8 md:w-full">
      <div className="container">
        <h2 className="text-2xl font-sans font-bold text-center md:text-left text-gray-800 mx-2 font-bold">
          Projects
        </h2>
      </div>
      <div className="container flex flex-col sm:justify-center md:flex-row items-center">
        {posts.map(({ node }) => (
          <CardBlogPost key={node.id} node={node} />
        ))}
      </div>
      <div className="container flex flex-col sm:justify-center md:flex-row items-center p-4 pb-0">
        <Link
          to="/blog"
          className="bg-gray-300 hover:fill-white hover:bg-blue-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span className="font-sans">Go to project</span>
        </Link>
      </div>
    </div>
  );
};

export default Posts;
