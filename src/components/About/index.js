import React from 'react';
import avatar from '../../images/lastme.png';

const About = () => (
  <div className="bg-gray-200 flex flex-col md:flex-row-reverse justify-center items-center content-center py-8">
    <div className="container flex flex-col md:flex-row-reverse md:justify-around md:content-center md:items-center">
      <div className="px-6 sm:flex sm:justify-center sm:content-center sm:items-center">
        <img src={avatar} alt="Kim Yoo Seok" className="me_img" />
      </div>
      <div className="px-6 py-2">
        <h3 className="font-sans text-left text-gray-800 my-2 md:text-3xl md:my-4 font-bold">
          김유석
        </h3>

        <p className="font text-gray-800 py-1 md:text-xl leading-tight">
          Full-Stack 개발자를 꿈꾸는 주니어 웹 개발자입니다.
        </p>
        <p className="font text-gray-800 py-1 md:text-xl leading-tight">
          현재{' '}
          <a
            className="no-underline text-blue-400 font-bold"
            href="http://www.cedar.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (주)시더
          </a>{' '}
          에서 현장실습을 하며 그 초석을 다지고 있습니다.
        </p>
        <p className="font text-gray-800 py-1 md:text-xl leading-tight">
          저는 새로운 기술을 습득하기 위해 탐구하는 일을 즐깁니다.
        </p>
        <p className="font text-gray-800 py-1 md:text-xl leading-tight">
          나중에 제가 쌓은 기술을 다른 이들과 공유하고 도움을 주고 싶습니다.
        </p>
        <p className="font text-gray-800 py-1 md:text-xl leading-tight">
          그러기 위해 당장에 주어진 일에{' '}
          <a
            target="_blank"
            href=''
            rel="noopener noreferrer"
            className="no-underline text-blue-400 font-bold"
          >
            최선
          </a>{' '}
          을 다하고 나아가 개발자로서
        </p>
        <p className="font text-gray-800 py-1 md:text-xl leading-tight">
          인정받는 사람이 될 수 있도록 노력할 것입니다.
        </p>
      </div>
    </div>
  </div>
);

export default About;
