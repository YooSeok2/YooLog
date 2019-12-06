import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import './index.css'
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import CardBlogPost from '../components/Posts/CardBlogPost';


const BlogIndex = props => {
  return (
    
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          latestsPost: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 300)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  path
                  description
                  topics
                  image {
                    id
                    childImageSharp {
                      sizes(maxWidth: 1024) {
                        ...GatsbyImageSharpSizes_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            skip: 0
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 85)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  path
                  description
                  topics
                  image {
                    id
                    childImageSharp {
                      sizes(maxWidth: 1024) {
                        ...GatsbyImageSharpSizes_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const siteTitle = data.site.siteMetadata.title;
        const posts = data.allMarkdownRemark.edges;
        return (
          
          <Layout location={props.location} title={siteTitle}>
           
            <div className="bg-gray-200 p-4 md:p-8">
              <Link 
                to='/'>
              <h1 className="text-xl md:text-4xl text-center font-sans mt-8 mb-3 font-bold text-gray-800">
                YooLog
              </h1>
              </Link>
              <h2 className="text-lg md:text-2xl text-center mb-8">
                I write about my project
              </h2>
            </div>
              
            <div className="blog_div py-8 mt-8 flex justify-center">
              <div className="flex flex-wrap justify-center items-start">
                {posts.map(({ node }) => {
                  return (
                      <CardBlogPost
                        key={node.id}
                        widthDesktop={'md:w-1/2'}
                        node={node}
                      />
                  );
                })}
                
              </div>
            </div>
          </Layout>
        );
      }}
      
    />
    
  );
};

export default BlogIndex;
