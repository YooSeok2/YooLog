import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div className="bg-gray-200 w-full bg-gray-200 p-4 flex justify-center flex-col content-center items-center">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className="rounded-full my-2"
              imgStyle={{
                padding: 0,
              }}
            />
            <p className="font-sans my-2">
              <strong>{author}</strong>
            </p>
          </div>
        );
      }}
    />
  );                                                                                                                              
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/lastme.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
