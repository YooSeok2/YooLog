---
path: '/blog/2019/10/14/instagram'
image: './instagram.png'
title: '인스타그램 메인화면 By React'
date: '2019-10-14T05:13:46.882Z'
topics: 'React'
description: '떠오르는 웹계의 신성 React.js를 공부하기 위해 숙주인 페이스북에 대표 SNS인 인스타그램에 메인 화면을 구현하였다.'
---

![instagram](./instagram.png)

<br>
<br>

# 개요

<br>

>javascript는 어느 순간부터 프레임워크 및 라이브러리의 홍수 속에 있는 듯합니다.

어느 네이버 개발자가 한 말이다. 나도 위의 문구에 크게 공감한다. 그 중에서도 3대장이라 불리우는 **Vue.js, Augular.js, React.js**는 혁신을 불러 일으키고 있다. 이 최신 동향에 발 맞추어 나 또한 3대장 중 **React.js를 공부**하기 위해 숙주인 페이스북에 대표 SNS인 인스타그램에 메인화면을 JSX문법을 이용하여 구현하고 React를 더 풍부하게 해주는 여러 라이브러리 중 화면 이동시 유용한 Router와 데이터 관리에 유용한 Redux를 이용해 메인화면에서 가입 시 입력창에 기입된 정보를 넘기어 다른 화면에서 볼 수 있도록 만들었다.

<br>
<br>

# React.js란

<br>

그렇다면 **React.js**는 도대체 뭐길래 그토록 개발자들이 열광하는걸까? 리엑트는 프론트엔드 라이브러리이다. 이 프론트엔드 라이브러리를 설명하자면 우리는 그냥 **정적인 페이지**를 만들기 위해서라면 HTML과 CSS를 사용해서 만들면 된다. 하지만 **동적인 페이지**를 만들려면 여기에 **JavaScript**가 추가된다. 페이지를 동적인 상태로 관리하기 위해서는 많은 상태들을 관리해줘야 되는데 요즘같이 **웹 어플리케이션**이라 불리울 정도로 규모가 커진 페이지를 관리할 때에는 굉장히 복잡해져서 힘들것이다. 여기서 등장한게 바로 **프론트라이브러리**인 것이다. 즉 복잡한 DOM관리나 상태값 관리는 최소화하고 사용자 인터페이스를 구현하는데에만 집중할 수 있도록 도움을 준다. *그 중 하나가 바로 리엑트이고 현재 많은 개발자들에게 사랑받고 있다.* 

<br>
<br>

# 기획

<br>

* **Instagram 메인화면**을 참고하여 개발자 코드를 보지 않고 react를 사용하여 JSX문법과 CSS로 화면을 구현한다.

![main](./main.png)

* **react를 풍부하게 해주는 라이브러리**인 redux 라이브러리를 이용하여 데이터를 관리하고 화면을 이동할 시 router를 이용한다.

![nextpage](./nextpage.png)

* **Input 창**에는 이메일, 성명, 아이디, 비밀번호로 구성하고 가입 버튼을 클릭할 경우 조건에 맞으면 다음 페이지로 넘어가 해당 정보를 보여준다.

![email](./email.png)

* **구현 시 필요한 resources**는 해당 페이지 개발자 창에서 받아와 쓴다.

<br>
<br>

# 기술 설계

<br>

* **create-react-app 폴더명**을 통해 작업환경이 준비가 되어있는 상태로 시작한다.이는 facebook에서 관리하는 React Boilerplate code이다. 따로 Boilerplate를 만들어 사용할 경우 버전 관리 및 업데이트에서 시간을 많이 소모해야되고 번거롭다. 당장에 **webpack, babel**은 리엑트를 할 때에 필요한 요소이기에 포함해야 되는데 이들을 세팅하는 일이 엄청 복잡하다. 하지만 **create-react-app** 명령어 하나면 모든게 해결된다.

```renux
    create-react-app react_instagram
```

* *react-router : npm react-router-dom* react에서 페이지를 이동할 때 유용한 라이브러리이다.</br>

```jsx
    import { Route } from 'react-router-dom';
    import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
    import AboutContainer from '../containers/AboutContainer';
    import { Home } from '../pages';

    <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={AboutContainer}/>
    </BrowserRouter>
```
-> react-router를 사용하기 위해서는 최상단에 BrowserRouter를 명시해주어야 사용이 가능하다.</br>

Route를 통해 해당 페이지에 path설정을 할 수 있으며 component에는 상단에서 연결해 줄 파일과 import할 때 지정한 이름을 써준다. 

<br>

**참고자료링크 : https://github.com/ReactTraining/react-router**</br>


* *redux : npm redux, npm react-redux, npm immutable* 리엑트에서 데이터관리를 수월하게 해주는 라이브러리이다. 

<br>

*생성 폴더 및 파일*<br>
-store<br>
&nbsp;&nbsp;&nbsp;-modules<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;register.js<br>
&nbsp;&nbsp;&nbsp;configure.js<br>
&nbsp;&nbsp;&nbsp;index.js<br>
<br>
-containers<br>
&nbsp;&nbsp;&nbsp;AboutContainer.js<br>
&nbsp;&nbsp;&nbsp;RegisterContainer.js<br>

***

**store/modules/register**     
```jsx
import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';


//액션타입
const INSERT_ADDRESS = 'register/INSERT_ADDRESS';
const INSERT_SIGN = 'register/INSERT_SIGN';
const INSERT_NAME = 'register/INSERT_NAME';
const INSERT_PASSWORD = 'register/INSERT_PASSWORD';
const SET_WARNING='register/SET_WARNING';
const SET_STYLE = 'register/SET_STYLE';
const SET_TO = 'register/SET_TO';

//액션생성함수정의
export const insert_address = createAction(INSERT_ADDRESS);
export const insert_sign = createAction(INSERT_SIGN);
export const insert_name = createAction(INSERT_NAME);
export const insert_password = createAction(INSERT_PASSWORD);
export const set_warning = createAction(SET_WARNING);
export const set_style = createAction(SET_STYLE);
export const set_to = createAction(SET_TO);

//모듈 초기 상태 정의
const initialState = Map({
    address:'',
    sign:'',
    name:'',
    password:'',
    style : '',
    warning : '',
    to : ''
});

//리듀서 함수
export default handleActions({
    [INSERT_ADDRESS] : (state, action) =>{
        return state.set('address', action.payload);
    },
    [INSERT_SIGN] : (state, action) =>{
        return state.set('sign', action.payload);
    },
    [INSERT_NAME] : (state, action) =>{
        return state.set('name', action.payload);
    },
    [INSERT_PASSWORD] : (state, action) =>{
        return state.set('password', action.payload);
    },
    [SET_WARNING] : (state, action)=>{
        return state.set('warning', action.payload);
    },
    [SET_STYLE] : (state, action) =>{
        return state.set('style', action.payload);
    },
    [SET_TO] : (state, action)=>{
        return state.set('to', action.payload);
    }
   
}, initialState);
```
***

**리덕스 모듈 작성 스크립트**이다. 먼저 리액트에서 중요한 불변성을 유지하는데에 편리하기 위해 *immutable*을 사용했다. 리액트에서 **불변성**은 정말 중요한 개념인데 간단히 설명하자면 state값을 직접 수정하면 안되고 새로운 객체를 생성하여 변경해야 된다는 것이다. 스크립트 위부터 액션타입을 정의하고 생성한 액션타입을 액션함수를 정의하면서 연결해준다. 여기서 사용한 **createAction**은 *리덕스 액션 생성 함수* 중 하나인데 직접 함수를 만들어 연결해주는 작업을 생략하고 바로 액션함수를 만들어준다. 그 다음 초기 모듈 상태값을 정의해주고 마지막으로 **handleActions**를 사용하여 리듀서를 만들어 내보내줍니다. 

***
**store/modules/index.js** 
```jsx
import {combineReducers} from 'redux';
import register from './register';

export default combineReducers({
    register
});
```
**하나의 어플리케이션에서 리듀서는 하나여야 한다** 하지만 리듀서가 여러개가 필요할 떄가 있을 수 있기에 여기에서는 여러 리듀서를 합쳐주는 일을 한다. 이때 사용한 함수는 **redux 내장함수인 combineReducers**이다. *export default*로 내보내려는 모듈을 감싸주면된다.

<br>

**store/configure.js**
```jsx
import {createStore} from 'redux';
import modules from './modules';

const configure=()=>{
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(modules, devTools);
return store;
}
export default configure;
```
***
**store/index.js**
```jsx
import configure from './configure';
export default configure();
```
<br>

**createStore는 모듈을 이용해 리듀서 스토어**를 만드는 일을 한다. 여기서 **devTools**는 크롬확장프로그램인데 리덕스 개발을 더욱 편하게 하기 위해 사용했다. 사용하지 않아도 상관없다.

<br>

**src/client/Root.js**
```jsx
import {Provider} from 'react-redux';

const Root = () => (
    
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={AboutContainer}/>       
        </BrowserRouter>
    </Provider>   
);

export default Root;
```
<br>

**Provider**을 통해 리액트 프로젝트에 스토어를 연동해준다.

<br>

**containers/RegisterContainer.js**
```jsx
import React, {Component} from 'react';
import Register from '../pages/Register';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as todoAction from '../store/modules/register';


class RegisterContainer extends Component {
    //입력값으로 address 값 변경
    handleChange_address = (e)=>{
        const {TodoActions} = this.props;
        TodoActions.insert_address(e.target.value);
    }
    //입력값으로 sign 값 변경
    handleChange_sign = (e)=>{
        const {TodoActions}=this.props;
        TodoActions.insert_sign(e.target.value);
        
    }
    //입력값으로 name 값 변경
    handleChange_name = (e)=>{
        const {TodoActions}=this.props;
        TodoActions.insert_name(e.target.value);
       
    }
  
    //입력값으로 password 값 변경
    handleChange_password = (e)=>{
        const {TodoActions}=this.props;
        TodoActions.insert_password(e.target.value);
       
    }

    //조건에 맞게 페이지가 이동할 수 있도록 다음 페이지로 연결해주는 link에 to값을 변경해준다.
    change_page = ()=>{
        const {address, name, sign, password, TodoActions} = this.props;
        
        if(address === '' || name ==='' || sign === '' ||
        password ===''){
            TodoActions.set_style('articleChild2_div1_main_form_div4_warning');
            TodoActions.set_warning('모든 정보를 입력해주세요.');
            TodoActions.set_to('/');

        }else if(address.indexOf('@')===-1 && address.length<10){
            TodoActions.set_style('articleChild2_div1_main_form_div4_warning');
            TodoActions.set_warning('이메일 주소를 확인해주세요.');
            TodoActions.set_to('/');
        }else if(password.length<6){
            TodoActions.set_style('articleChild2_div1_main_form_div4_warning');
            TodoActions.set_warning('비밀번호를 확인해주세요');
            TodoActions.set_to('/');
        }else{
            TodoActions.set_to('/about');
        }
    }

    render(){
        const {handleChange_address,handleChange_name,
            handleChange_password,handleChange_sign, change_page} = this;
        const {style,warning,to, address,name, sign, password}=this.props;
        
        return(
            <Register 
            to={to}
            changepage={change_page}
            address = {handleChange_address}
            name = {handleChange_name}
            sign = {handleChange_sign}
            password = {handleChange_password}
            style ={style}
            warning = {warning}
            ad={address}
            na={name}
            si={sign}
            pass={password}
             />
        );
    }
}

//connect를 이용하여 mapStateToProps와 mapDispatchToprops를 따로 함수로 선언해주지 않고 한번에 내보내 리덕스 스토어와 연동해준다.
export default connect(
({register})=>({
    address : register.get('address'),
    name : register.get('name'),
    sign: register.get('sign'),
    password : register.get('password'),
    warning : register.get('warning'),
    style : register.get('style'),
    to : register.get('to')
    
}),
(dispatch)=>({
    TodoActions : bindActionCreators(todoAction, dispatch)
})
)(RegisterContainer);
```
**주석처리 된 부분을 모두 읽어주세요.** 현재 *Register.js와 RegisterContainer.js*로 나누어서 작업을 하였는데 각자 하는 역할이 다르다. 리덕스에 창시자는 리덕스와 연동된 컴포넌트와 그냥 props값을 전달받아 UI만 보여주는 컴포넌트를 나누었다. 여기서 전자를 바로 Container 컴포넌트라고 부르고 후자를 프리젠테이셔널 컴포넌트라고 부른다. 사실 굳이 둘을 분리해서 작업하지 않아도 상관없지만 효율적인 측면에서 나누어서 구현하는 것이 더 좋다.
여기서 **TodoActions.\***는 모두 **dispatch**하는 부분에 해당하는데 dispatch는 바로 리듀서에 상태값 변경을 요청하는 역할을 한다. register는 해당 모듈 이름으로 비구조화할당하였다.

**참고자료링크 : https://github.com/reduxjs/redux**</br>

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




