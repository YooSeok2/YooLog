# YooLog
***

# 개요

5개월 동안 **현장실습**을 진행하면서 한 프로젝트들을 **나만의 블로그**를 만들어서 정리하면 좋겠다는 생각에 인터넷 검색을 하던 중 **Gatsby**라는 정적사이트생성기를 알게되었다. **Gatsby**는 무료이며 웹 사이트를 빠르고 쉽게 만들기 위한 여러 가지 편의 기능과 오픈소스를 제공한다. **Gastby**에 UI는 **React**로 만들어지고 여러 가지 데이터는 **GraphQL**로 관리하여 받아온다. 배포할 때에는 보통 **Github Page**와 deploy하고 **Netlify**라는 웹 호스팅 서비스를 이용한다.

<br>

* **Gatsby site** : https://www.gatsbyjs.org/

***

# 블로그 생성 및 배포

1. 맘에 드는 **gatsby-starter-kit**를 선택하여 커스텀한다.

*gatsby-starter-kit*는 이미 다른 사람에 의해 만들어진 틀을 의미한다.

```renux
    //Gatby Cli 설치
    npm global add gatsby-cli

    //빈 프로젝트 생성
    gatsby new 폴더명

    //맘에드는 gatsby-starter-kit 선택하여 생성
    gatsby new 폴더명 Git주소
```
<br>

2. gatsby 커스텀하기

*생성된 블로그 폴더에 들어가서 명령어를 입력한다*

```renux
    //개발 모드로 아래 명령어로 실행하여 커스텀하기 위한 코딩을 시작한다. http://localhost:8000로 연결됨.
    gatsby develop
```
*http://localhost:8000/___graphql.로 접속 시 graphql통합개발환경이다.*

<br>

3. 웹 사이트를 **배포**하기위해 먼저 Github과 연동해준다.

```renux
    //기존에 생성되어 있을 수 있는 git 삭제
    rm -rg .git
    
    //git 생성
    git init
    
    //master branch에 git commit
    git commit -m 'git init'
    
    //git remote 설정
    git remote add origin gitrepo주소
    
    //설정된 git repo주소에 push
    git push -u origin master
```

4. **Netlify**를 통해 배포한다.

**참고자료링크 : https://anpigon.github.io/blog/kr/@anpigon/netlify-gatsby--1545785934223/**

위의 링크에 들어가면 **Netlify**로 배포하는 과정을 정말 상세하게 잘 설명해 놓았으니 참고하기 바란다.

***

# 감사합니다




