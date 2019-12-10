import React from 'react';
import { graphql } from 'gatsby';
import yooseok from '../images/yooseok.jpeg'
import Menu from '../components/Header/menu';
import Footer from '../components/Footer'


const About = ({ data }) => {
  
  return (
    <div className="about_main">
      <header className="about_header">
        <Menu />
      </header>
      <div className="about_body">
          <h1 className="my-4 text-left text-3xl md:text-5xl text-animation">
              <span className="text-gray-800 mx-1 font-bold">About</span>
          </h1>
          <div>
            <div>
              <h3 className="about_h3 text-3xl text-blue-400">자기소개</h3>
              <ul className="mb-4 md:mb-8">
                <li className="font font_size m-0 ml-2">
                  <span className="console">Console.log </span>(" name : 김유석, birth : 1993. 04. 19, age : 만 26세 " )
                </li>
                <li className="font font_size m-0 ml-2">
                  <span className="console">Console.log </span> (" state : 서울시 관악구 관악로 28길 80 101동 701호 ")
                </li>
                <li className="font font_size m-0 ml-2">
                  <span className="console">Console.log </span>(" email : rdt419@gmail.com ")
                </li>
                <li className="font font_size m-0 ml-2">
                  <span className="console">Console.log </span>(" skill : JavaScript, React.js, Node, Sequelize ")
                </li>
              </ul>

              <h3 className="about_h3 text-3xl text-blue-400">교육</h3>

              <ul className="mb-4 md:mb-8">
                <li className="font font_size m-0 ml-2">
                  <span className="console">Console.log </span>(" graduated : 서울삼성고등학교 ( 02/2009 ~ 03/2012 ) ")
                </li>
                <li className="font font_size m-0 ml-2">
                  <span className="console">Console.log </span> (" attending : 대림대학교 ( 03/2017 ~ Present ) ")
                </li>
              </ul>

              <h3 className="about_h3 text-3xl text-blue-400">경험</h3>

              <p className="about_p">(주)시더에서 Junior Web Developer _ 07 / 2019 ~ Present</p>
            </div>
            <img src={yooseok}/>

          </div>
      </div>

      <div className="about_footer">
        <Footer/>
      </div>

    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profilePhoto: file(name: { eq: "dad-and-son" }) {
      id
      childImageSharp {
        fluid(maxWidth: 522, maxHeight: 600, grayscale: true) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    companies: allFile(
      filter: { name: { in: ["desarol", "ivcmedia", "el_universo"] } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 450, maxHeight: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default About;
