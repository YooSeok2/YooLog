(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),c=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),o=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,h=b&&window.IntersectionObserver,A=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function S(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var v=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(A.has(e.target)){var t=A.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),A.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),A.set(e,t)),function(){a.unobserve(e),A.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+l+s+c+a+i+t+n+r+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=l.default.createElement(C,(0,d.default)({src:t},r));return a.length>1?l.default.createElement("picture",null,i(a),n):n},C=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,o=e.onError,u=e.loading,f=e.draggable,m=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},m,{onLoad:s,onError:o,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,c=void 0===s?{}:s,o=e.placeholderStyle,f=void 0===o?{}:o,m=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,h=e.durationFadeIn,A=e.Tag,E=e.itemProp,S=e.loading,v=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,d.default)({opacity:k?1:0,transition:O?"opacity "+h+"ms":"none"},c),z="boolean"==typeof b?"lightgray":b,L={transitionDelay:h+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&L,{},c,{},f),W={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:E};if(p){var q=p,P=q[0];return l.default.createElement(A,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(A,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),z&&l.default.createElement(A,{title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&L)}),P.base64&&l.default.createElement(R,{src:P.base64,spreadProps:W,imageVariants:q,generateSources:y}),P.tracedSVG&&l.default.createElement(R,{src:P.tracedSVG,spreadProps:W,imageVariants:q,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(C,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:v})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:S},P,{imageVariants:q}))}}))}if(g){var J=g,T=J[0],B=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete B.display,l.default.createElement(A,{className:(i||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},z&&l.default.createElement(A,{title:t,style:(0,d.default)({backgroundColor:z,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},O&&L)}),T.base64&&l.default.createElement(R,{src:T.base64,spreadProps:W,imageVariants:J,generateSources:y}),T.tracedSVG&&l.default.createElement(R,{src:T.tracedSVG,spreadProps:W,imageVariants:J,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(J),l.default.createElement(C,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:v})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:S},T,{imageVariants:J}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),I=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string});k.propTypes={resolutions:O,sizes:I,fixed:o.default.oneOfType([O,o.default.arrayOf(O)]),fluid:o.default.oneOfType([I,o.default.arrayOf(I)]),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var z=k;t.default=z},FFGF:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("qCJc"),c=a.n(s);a("EDuE");t.a=function(){var e=Object(i.useState)(!1),t=e[0],a=e[1],s=function(){a(!t)};return[t?r.a.createElement("ul",{className:"pt-6 list-none p-0 w-full flex justify-center"},r.a.createElement("div",{className:"hamburger"},r.a.createElement(c.a,{isOpen:t,menuClicked:s,width:30,height:30,strokeWidth:3,rotate:0,color:"black",borderRadius:0,animationDuration:.5})),r.a.createElement("li",{className:"px-2"},r.a.createElement(n.Link,{activeClassName:"text-blue-400 underline",className:"text-gray-800 hover:text-blue-400 ",to:"/"},"Home")),r.a.createElement("li",{className:"px-2"},r.a.createElement(n.Link,{activeClassName:"text-blue-400 underline",to:"/about-me/",className:"text-gray-800 hover:text-blue-400"},"About me")),r.a.createElement("li",{className:"px-2"},r.a.createElement(n.Link,{activeClassName:"text-blue-400 underline",className:"text-gray-800 hover:text-blue-400",to:"/blog/"},"Projects"))):r.a.createElement("ul",{className:"pt-6 list-none p-0 w-full flex justify-left"},r.a.createElement("div",{className:"hamburger"},r.a.createElement(c.a,{isOpen:t,menuClicked:s,width:30,height:30,strokeWidth:3,rotate:0,color:"black",borderRadius:0,animationDuration:.5})))]}},Fzi1:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz");t.a=function(){return r.a.createElement("footer",{className:"flex flex-col justify-center bg-gray-200 w-full p-4 md:p-8 items-center"},r.a.createElement("div",{className:"container flex w-full flex flex-col md:flex-row content-center items-center"},r.a.createElement("div",{className:"text-2xl font-bold w-full md:w-1/3 py-2 flex justify-center md:justify-start"},r.a.createElement(n.Link,{to:"/"},r.a.createElement("h3",{className:"font-sans"},"YooLog"))),r.a.createElement("div",{className:"order-last md:order-none w-full md:w-1/3 py-2 flex justify-center items-center content-center"},r.a.createElement("small",{class:"text-md font-bold font-sans"},"Made with using GatsbyJS and Netlify"))))}},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,c=function(e,t,a,i){var r=String(n(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},PP7n:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Kim Yoo seok\' Blog"}},"latestsPost":{"edges":[{"node":{"id":"97b4e460-ce3a-5654-8377-d48113e87e55","excerpt":"…","frontmatter":{"date":"November 26, 2019","title":"슬랙 봇을 이용한 사내 출결 관리 시스템","path":"/blog/2019/11/26/slack","description":"채널에 추가된 슬랙 봇이 사용자가 보내는 메세지에 조건에 맞는 키워드가 있을 경우 그 문장을 추출하여 활용한다.","topics":"React and Slack API","image":{"id":"42916a51-2591-5734-ab74-e7ede98eccd9","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABh0lEQVQ4y72TT0sCURTF54P4aVyMSwlaCG4iVAgRxPaGzAeICvIP7dokuMggiKRFYOQiwRQhRgMdXbTIcGJS58+b03sXZqJ0E1gHDtx5vPm98+7ckVzXxTot/SmQcTsuW9rkOM7Klxlj5JVAAfPkwznItm1/3bIsWhMQUXsSe74BQTCGrm7h4XXAnxm3vx/NZhOGYeCner0eRqMR1V5SAvISNzNg9/kDm/enuHhRiffYaqHRaCAWi6Fer6NaraLdbqPf76NWqyGXy6FQKEBVVb8tEkU2bexXWijeDnDVPUPxTsEMc2xvbRMslUohHA4jk8kgGAwiGo0in88jm80iEAigXC5TSgGVRBLX5L05Psf7xh7m1ztgXUUcg4PDI4RCMuLxOJLJJBKJBCKRCNLpNBRFoYSyLKNUKvnXllzm0vUc7reTSxhPFaqFtOEQ4/EYuq5jsVig0+lgMplQP0U9nU5hmiY0TaN0Ql9jw+n+V2aiHwy/1fJgi8YyZ2nOPHsjs8r/86esw59Iv8mfFZbq9wAAAABJRU5ErkJggg==","aspectRatio":1.5,"src":"/static/788a08fb3e2091c377949cd207112922/39a9b/slack.png","srcSet":"/static/788a08fb3e2091c377949cd207112922/0cc6a/slack.png 256w,\\n/static/788a08fb3e2091c377949cd207112922/39a9b/slack.png 420w","srcWebp":"/static/788a08fb3e2091c377949cd207112922/58d49/slack.webp","srcSetWebp":"/static/788a08fb3e2091c377949cd207112922/6306c/slack.webp 256w,\\n/static/788a08fb3e2091c377949cd207112922/58d49/slack.webp 420w","sizes":"(max-width: 420px) 100vw, 420px"}}}}}}]},"allMarkdownRemark":{"edges":[{"node":{"id":"97b4e460-ce3a-5654-8377-d48113e87e55","excerpt":"…","frontmatter":{"date":"November 26, 2019","title":"슬랙 봇을 이용한 사내 출결 관리 시스템","path":"/blog/2019/11/26/slack","description":"채널에 추가된 슬랙 봇이 사용자가 보내는 메세지에 조건에 맞는 키워드가 있을 경우 그 문장을 추출하여 활용한다.","topics":"React and Slack API","image":{"id":"42916a51-2591-5734-ab74-e7ede98eccd9","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABh0lEQVQ4y72TT0sCURTF54P4aVyMSwlaCG4iVAgRxPaGzAeICvIP7dokuMggiKRFYOQiwRQhRgMdXbTIcGJS58+b03sXZqJ0E1gHDtx5vPm98+7ckVzXxTot/SmQcTsuW9rkOM7Klxlj5JVAAfPkwznItm1/3bIsWhMQUXsSe74BQTCGrm7h4XXAnxm3vx/NZhOGYeCner0eRqMR1V5SAvISNzNg9/kDm/enuHhRiffYaqHRaCAWi6Fer6NaraLdbqPf76NWqyGXy6FQKEBVVb8tEkU2bexXWijeDnDVPUPxTsEMc2xvbRMslUohHA4jk8kgGAwiGo0in88jm80iEAigXC5TSgGVRBLX5L05Psf7xh7m1ztgXUUcg4PDI4RCMuLxOJLJJBKJBCKRCNLpNBRFoYSyLKNUKvnXllzm0vUc7reTSxhPFaqFtOEQ4/EYuq5jsVig0+lgMplQP0U9nU5hmiY0TaN0Ql9jw+n+V2aiHwy/1fJgi8YyZ2nOPHsjs8r/86esw59Iv8mfFZbq9wAAAABJRU5ErkJggg==","aspectRatio":1.5,"src":"/static/788a08fb3e2091c377949cd207112922/39a9b/slack.png","srcSet":"/static/788a08fb3e2091c377949cd207112922/0cc6a/slack.png 256w,\\n/static/788a08fb3e2091c377949cd207112922/39a9b/slack.png 420w","srcWebp":"/static/788a08fb3e2091c377949cd207112922/58d49/slack.webp","srcSetWebp":"/static/788a08fb3e2091c377949cd207112922/6306c/slack.webp 256w,\\n/static/788a08fb3e2091c377949cd207112922/58d49/slack.webp 420w","sizes":"(max-width: 420px) 100vw, 420px"}}}}}},{"node":{"id":"db64ef73-da8e-5cfd-8c37-f2ca5d6f47a5","excerpt":"개요 실내 실시간 공기질 측정 모니터링프로젝트를 마치고 얼마 안 지나서 사내에서 진행하는 프로젝트에\\n투입되었다. 바로 경찰청 키오스크이다. 크게…","frontmatter":{"date":"October 25, 2019","title":"경찰청 키오스크","path":"/blog/2019/10/25/policemain","description":"(주)시더에서 실습을 진행하면서 사내에서 진행하는 프로젝트에 투입되서 처음으로 회사에 도움이 되는 일을 맡아서 한 의미있는 일이었다.","topics":"React","image":{"id":"68e69f07-5cc6-541c-aa46-ea812591429b","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACOElEQVQoz2OQ0uqEIAnNbjnddhntDriItHanhFa3pFYXXEROpw0oKKkJFWGAUEAV6vq1Iqo9klrdCnqt8rqt0tod8totekblinrNMjrtYMF2IbV+BZ0mRd1mCbB+kGYZ7XY+5YnJwSFduXZyWs0Cyv38yhMUdRo3dmhcWyquaVAjqNovoNwnqNzr6ZIxp9xASbcJ6EyoZqAlIuq9xuZlrzdznZ4j3Z5j35trWRjmvKFV5e12noIwt/Y0y5ZMh3nVRt92s0yvtORRmCir045wtqxOB79Sf12a2/+jTM/Xcj5YwnFsisShXslbc3h2dMjeXsRzbzHXr/0sN5aJ6hmXi2r0SoODhgEleNQ7SxN9by4Vvbec78psvlsr+B7uEroym/f6Qv5Hq3i29mhaWheJqvfCAxWhGeR5kP19ajplM0pNX2zhftzF/SmP7ekqnksLRCN8ooQU20XVeyAORtcsrd0lotLqEz47rexgkE/O0x1chzVV5jI4XW4R39CvbOKyrKl7t6Z5r7h6B9CN6JpldLqElFo9wxbOWHBKx7T1wlyxCcUO1i5Ft5aKFsW6OQau3Ln3upppv7h6OxbNoNjW7JDV7dazmcgi0d1TYP5iLeOd+Rz3VnIbmuSKa00wcZoK14ZFMyTYhFVa/WOWJWctTEufGBzalZI2JSJlubr5BKC70BRjau6S0OgoqNpa07anoftwWePekvrdrX0HTJyniyE5GLtmqOXKbWJqbcDIByY+EKnThakMiADHxgTqNBVCdAAAAABJRU5ErkJggg==","aspectRatio":1.5523809523809524,"src":"/static/327224e3ada6e12c97f5f9c6cf6041d4/15684/policemain.png","srcSet":"/static/327224e3ada6e12c97f5f9c6cf6041d4/0cc6a/policemain.png 256w,\\n/static/327224e3ada6e12c97f5f9c6cf6041d4/15684/policemain.png 489w","srcWebp":"/static/327224e3ada6e12c97f5f9c6cf6041d4/fff49/policemain.webp","srcSetWebp":"/static/327224e3ada6e12c97f5f9c6cf6041d4/6306c/policemain.webp 256w,\\n/static/327224e3ada6e12c97f5f9c6cf6041d4/fff49/policemain.webp 489w","sizes":"(max-width: 489px) 100vw, 489px"}}}}}},{"node":{"id":"e4d34078-61ff-5805-be9c-8621d57164e8","excerpt":"개요 javascript…","frontmatter":{"date":"October 14, 2019","title":"인스타그램 메인화면 By React","path":"/blog/2019/10/14/instagram","description":"떠오르는 웹계의 신성 React.js를 공부하기 위해 숙주인 페이스북에 대표 SNS인 인스타그램에 메인 화면을 구현하였다.","topics":"React","image":{"id":"464e912a-bf3d-56a7-ac0b-faf41ec61494","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAB0klEQVQoz4WS208aQRTG/cf60gdfGl/bJxNfTFNqo7ZNpIktCdqYUokxweIlqW01kkqJSCtUCnhtCNj0gmBh3WWRle4gMLvr7A3d2W2BtElR8Hub+c7vfGcuHcYFVc/1PCOTh2KWFHMEYmhRUbFxmTqa1rquWyyZnptf7NaM3ZxwDH1/cmPTcWtL5dW62wJuGMWC3N+1658l3gzE3OavQcu3xDL59to7dpup1WC9FVwzShTnfRD+ZA57e/3JmXjcGt27H0nf81VCZDu4ES0zLDXiZOxLcGnt8Pqdwov17NAH+rZLCKWvhrUyI62Mny5OwOlRweMBVme+d7ow6Eahg1pNG/iPgxFQfCb1h0fy2ZB3pjxmq8z7yU4b2szUYdwuGWNNjY5WAyYlNiltPBfcdrbPlOseVsuS/vdeLoGxriO5Wu9yhtgDrfLTgIRxnDZowlAk4+JDNWBc392ngXMtRv2qHJ3w8+FUlCjSZTnFnqZYngJckgYJGqhnWjPc6AiRbHPvPJwLPFvesiyEnroij15+fPw6OOaKDL8K3p16b3KsJo/Av7D/xtYwpgEsCWL+hKNYWOTQ51RuLhCHSMkCyJR4TpR5SWn5w5rOJEgqgMhord/zP7sCnhJr7wAAAABJRU5ErkJggg==","aspectRatio":1.6,"src":"/static/ae51afe1026e668d18c923a111733083/61a6e/instagram.png","srcSet":"/static/ae51afe1026e668d18c923a111733083/0cc6a/instagram.png 256w,\\n/static/ae51afe1026e668d18c923a111733083/774d6/instagram.png 512w,\\n/static/ae51afe1026e668d18c923a111733083/61a6e/instagram.png 728w","srcWebp":"/static/ae51afe1026e668d18c923a111733083/2a492/instagram.webp","srcSetWebp":"/static/ae51afe1026e668d18c923a111733083/6306c/instagram.webp 256w,\\n/static/ae51afe1026e668d18c923a111733083/b12da/instagram.webp 512w,\\n/static/ae51afe1026e668d18c923a111733083/2a492/instagram.webp 728w","sizes":"(max-width: 728px) 100vw, 728px"}}}}}},{"node":{"id":"67808831-9b6a-5668-882d-4669dbb46af4","excerpt":"…","frontmatter":{"date":"September 11, 2019","title":"실내 공기질 측정 모니터링","path":"/blog/2019/09/11/finedust","description":"실내에 오염물질 수치를 알려준다. 적절한 시기에 환기 등에 조치를 취하여 쾌적한 환경을 조성할 수 있게 도움을 준다.","topics":"React","image":{"id":"3841012f-3812-5aab-bec4-78b546673cf3","childImageSharp":{"sizes":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACxElEQVQ4y21UWU8TURTun/PZv+CLf0DiG4QYCEoCLiwJLhTaQpGWlrqBDz6QgIlRE4kSalnakS4D7ez7zJ2Zz3OnFEL0JF/OufdMv/udc25vStEcSIoJzfBg2yE03YOqO9BNrw/j2muGm8CwPHS7JmTZotiHYfqJV3UXKc1w4NgOQvjomE2AoiAANE2DoiiQJIkgw3FccAvDKPG7X89Q2q5SFEPXDSLlohykTGKOwbD66TWys0N4UpyG7BhwnQCO6xH8BJ7P4Ad0rM/BoNHvRNmmgwK4lOfQSX3KdSK0TQFPV+eQGb2LW3du40vtW6KChQxxHCcqGAupJXwdJSr5OiBynut/A3BxKctiMAMJB9UKPtcF7FV3IEoNRPSt5wVUPhGwCJbJoEg+LCuArDow9ABSz4NpBFdtSAhNajC3/doP7JAy2ZPo9JiI6CDKWbbfh+PBsImAvGbbVLIDUVVh2l6i8opQN13Iiobv+0f4eXACmzZdjyGKIgQhKYwY2ABxiJDg0z6HzRzKBzdL5oQmTQjoy44oyQkDGjWfvmXZ1Ds7maSqalSqkaw5XMpzz1i/1/w6pYzLkvkGVxVFMU00xL/G8+FVef8z3pqEkJMNwE3VbXTOZYgXhK6CDnm+7lwouOipSdwWpSQvNJqoE1rnCrXOuqlwQPj7SEA6V8CrTAGZtU2Mz6QxRhifXcbCcgHp5XUsvMxjMbuBkfkVPFoqYSpTxOFp85pwQMqtdnqGbLGC/OZ7lN5t4f7oQww/nsfEiwzSK2vYLhfwtlxGhXIlQUTloIrJbB77x39ulsx7yO1XTcD04jrmcmUs5N9gZHIGQxNTGJl6hqVcHsXVHCrFDXzY+oiV3T2MzT/HveEHdJdPkEoeAuPyEaC/Dn8IurIJodW7hIRmR0ajeY7GmUhxD612F23yIvXyuN7CYbWOutChC2/jL+riCC0jQr+2AAAAAElFTkSuQmCC","aspectRatio":1.427814569536424,"src":"/static/97bb256459b4bd15de2d04bb08ded56a/572fb/finedust.png","srcSet":"/static/97bb256459b4bd15de2d04bb08ded56a/0cc6a/finedust.png 256w,\\n/static/97bb256459b4bd15de2d04bb08ded56a/774d6/finedust.png 512w,\\n/static/97bb256459b4bd15de2d04bb08ded56a/572fb/finedust.png 1024w,\\n/static/97bb256459b4bd15de2d04bb08ded56a/09d41/finedust.png 1078w","srcWebp":"/static/97bb256459b4bd15de2d04bb08ded56a/0e71e/finedust.webp","srcSetWebp":"/static/97bb256459b4bd15de2d04bb08ded56a/6306c/finedust.webp 256w,\\n/static/97bb256459b4bd15de2d04bb08ded56a/b12da/finedust.webp 512w,\\n/static/97bb256459b4bd15de2d04bb08ded56a/0e71e/finedust.webp 1024w,\\n/static/97bb256459b4bd15de2d04bb08ded56a/cad1f/finedust.webp 1078w","sizes":"(max-width: 1024px) 100vw, 1024px"}}}}}}]}}}')},Tn3P:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("9eSz"),c=a.n(s);t.a=function(e){var t=e.node,a=e.widthDesktop,i=void 0===a?"md:w-1/3":a;return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 pb-3 w-5/6 "+i+" relative"},r.a.createElement(n.Link,{className:"no-underline text-black",to:t.frontmatter.path},r.a.createElement(c.a,{sizes:t.frontmatter.image.childImageSharp.sizes}),r.a.createElement("div",{className:"px-4 py-4"},r.a.createElement("h3",{className:"font-sans font-bold text-xl mb-2"},t.frontmatter.title),r.a.createElement("p",{className:"font-sans text-gray-700 text-base"},t.frontmatter.description||t.excerpt)),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},t.frontmatter.topics))))}},Zttt:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("FFGF"),s=a("Fzi1");a("EDuE"),a("ToMx");t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("header",{className:"w-header"},r.a.createElement(n.a,null)),r.a.createElement("main",null,t),r.a.createElement(s.a,null))}},qCJc:function(e,t,a){"use strict";a("91GP"),a("pIFo"),t.__esModule=!0,t.default=s;var i=n(a("q1tI")),r=n(a("17x9"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=(e.width||36)+"px",a=(e.height||30)+"px",r=parseInt(a.replace("px",""))/2+"px",n=e.isOpen||!1,s=e.strokeWidth||2,c="-"+s/2+"px",d=e.animationDuration||"0.4",l=function(e,t,a){return"translate3d(0,"+(e?r:t)+",0) rotate("+(e?a+"deg":"0")+")"},o={container:{width:t,height:a,position:"relative",transform:"rotate("+(e.rotate||0)+"deg)"},lineBase:{display:"block",height:s+"px",width:"100%",background:e.color||"#000",transitionTimingFunction:"ease",transitionDuration:d+"s",borderRadius:(e.borderRadius||0)+"px",transformOrigin:"center",position:"absolute"},firstLine:{transform:l(n,0,45),marginTop:c},secondLine:{transitionTimingFunction:"ease-out",transitionDuration:d/4+"s",opacity:n?"0":"1",top:r,marginTop:c},thirdLine:{transform:l(n,a,-45),marginTop:c}};return i.default.createElement("div",{style:o.container,onClick:e.menuClicked},i.default.createElement("span",{style:Object.assign({},o.lineBase,o.firstLine)}),i.default.createElement("span",{style:Object.assign({},o.lineBase,o.secondLine)}),i.default.createElement("span",{style:Object.assign({},o.lineBase,o.thirdLine)}))}s.propTypes={isOpen:r.default.bool.isRequired,menuClicked:r.default.func.isRequired,width:r.default.number,height:r.default.number,strokeWidth:r.default.number,rotate:r.default.number,color:r.default.string,borderRadius:r.default.number,animationDuration:r.default.number}},vx99:function(e,t,a){"use strict";a.r(t);var i=a("PP7n"),r=a("q1tI"),n=a.n(r),s=a("Wbzz"),c=(a("EDuE"),a("Zttt")),d=a("Tn3P");t.default=function(e){return n.a.createElement(s.StaticQuery,{query:"676908773",render:function(t){var a=t.site.siteMetadata.title,i=t.allMarkdownRemark.edges;return n.a.createElement(c.a,{location:e.location,title:a},n.a.createElement("div",{className:"bg-gray-200 p-4 md:p-8"},n.a.createElement(s.Link,{to:"/"},n.a.createElement("h1",{className:"text-xl md:text-4xl text-center font-sans mt-8 mb-3 font-bold text-gray-800"},"YooLog")),n.a.createElement("h2",{className:"text-lg md:text-2xl text-center mb-8"},"I write about my project")),n.a.createElement("div",{className:"blog_div py-8 mt-8 flex justify-center"},n.a.createElement("div",{className:"flex flex-wrap justify-center items-start"},i.map((function(e){var t=e.node;return n.a.createElement(d.a,{key:t.id,widthDesktop:"md:w-1/2",node:t})})))))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-9abf21a39efcc6281015.js.map