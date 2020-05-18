---
path: '/blog/2020/05/05/kakao'
image: './kakao.png'
title: '카카오 메인화면 Clone By React'
date: '2020-05-05T05:13:46.882Z'
topics: 'HTML+CSS+Vanila JS, React.js'
description: 'JavaScript공부를 위한 카카오 메인페이지를 클론하는 작업을 하다.'
---

![kakao](./kakao.png)

<br>
<br>

# 개요

<br>

>Vanila JS를 공부하고 이를 습득하기 위해 React.js를 이용한 카카오메인페이지 클론하는 프로젝트를 하다. 

요새 JavaScript 프론트엔드 라이브러리가 흥행하고 있습니다. 그 중에서도 3대장이라 불리우는 **Vue.js, Augular.js, React.js**는 혁신을 불러 일으키고 있는데 이 최신 동향에 발 맞추어 나 또한 3대장 중 **React.js를** 애용하고 있습니다. 이번에는 Vanila JS를 공부하기에 좋은 무료 강의자료가 있어서 쭉 진행하였고 무엇이든 만들어 보는것이 공부한 지식을 습득하는데에 가장 큰 도움이 된다고 생각하기에 카카오메인페이지를 만들었습니다.

<br>
<br>


# 기획

<br>

* **KaKao 메인화면**에 개발자코드를 참고하여 react를 사용해서 반응형으로 화면을 구현한다.

![main_tab](./main_tab.PNG)

* **Mobile버전의 메인화면**을 구성한다.

![main_mobi](./main_mobi.PNG)

<br>

* **실제 페이지에 적용된 동적인 기능**을 구현한다. 스크롤 시에 Header고정한다. 슬라이더는 react-bootstrap에서 제공하는 carousel 라이브러리를 이용하였다. Header 각 메뉴 동작 구현하였다.
<br>

**참고자료링크 : https://react-bootstrap.github.io/components/carousel/**</br>

* **구현 시 필요한 resources**는 해당 페이지 개발자 창에서 받아와 쓴다.

<br>
<br>

# 기술 설계
<br>
*생성 폴더 및 파일*<br>
-src<br>
--component<br>
---banner.js<br>
---footer.js<br>
---header.js<br>
---service.js<br>
---summary.js<br>
--images<br>
App.js<br>
App.css<br>
bootstrap.min.css<br>
index.css<br>
index.js
<br>
<br>

* **create-react-app 폴더명**을 통해 작업환경이 준비가 되어있는 상태로 시작한다.이는 facebook에서 관리하는 React Boilerplate code이다. 따로 Boilerplate를 만들어 사용할 경우 버전 관리 및 업데이트에서 시간을 많이 소모해야되고 번거롭다. 당장에 **webpack, babel**은 리엑트를 할 때에 필요한 요소이기에 포함해야 되는데 이들을 세팅하는 일이 엄청 복잡하다. 하지만 **create-react-app** 명령어 하나면 모든게 해결된다.

```renux
    create-react-app react_instagram
```

<br>
<br>

* **슬라이더 기능 구축**을 위해서는 react에서 제공하는 **react-bootstrap**를 받아줘야 합니다.
이 라이브러리에는 수많은 기능들을 제공하는데 그중에서 저는 **carousel**를 사용해 슬라이드를 구현하였습니다. 

```renux
    npm install react-bootstrap
```
--componenet/banner.js
```jsx
    import Carousel from 'react-bootstrap/Carousel';
    import '../bootstrap.min.css';
```
**먼저** 상단에 위와같이 Carousel를 **import**해줍니다. 아래에 **css 파일은** 해당 슬라이드를 커스텀하기 위해서 **react-bootstarp Module폴더에**있는 css를 import해준겁니다.

```jsx
    handleSelect = (selectedIndex, e)=>{
        this.setState({
            index : selectedIndex,
            direction : e.direction
        });
    }
    render(){
        
        return(
            <Header index = {this.state.index}/> //현재 활성화 된 슬라이드에 index를 props값으로 Header.js 컴포넌트에 보내줍니다.
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                <Carousel.Item>
                        //첫번째 슬라이드
                </Carousel.Item>
                <Carousel.Item>
                        //두번째 슬라이드
                </Carousel.Item>
            <Carousel />
        )
    }
```
**Carousel**에서 사용중인 함수를 설명하겠습니다 기본적으로 아래에 **Carousel.Item**에 배치된 순서대로 index를 오름차순으로 가지게 되는데 **activeindex**함수에는 활성화 된 슬라이드 index를 표시합니다. 이는 슬라이드를 선택하거나 넘기는 이벤트를 담당하는 **onSelet**함수에서 제어합니다.
끝으로 활성화 된 index를 state에 담고 이를 **Header**를 통해 Header컴포넌트로 props값을 넘겨줍니다.
<br>
--component/header.js
<br>



3. **Dependancies**
```jsx
    "dependencies": {
    "body-parser": "^1.19.0",
    "concurrently": "^5.0.0",
    "cookie-parser": "^1.4.4",
    "cross-env": "^5.2.0",
    "express": "^4.17.1",
    "immutable": "^4.0.0-rc.12",
    "node-fetch": "^2.6.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router": "^5.0.1",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.0.1",
    "redux-router": "^2.1.2",
    "yarn": "^1.17.3"
  }
```

<br>

* ### Github 주소
**https://github.com/YooSeok2/react_Instagram**

<br>

# 긴 글 읽어주셔서 감사합니다.




