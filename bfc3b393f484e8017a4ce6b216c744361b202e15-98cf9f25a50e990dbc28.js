(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3nLz":function(t,e,n){"use strict";n("t+fG")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},"6oaZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("osku"),a=function(t){return r.data.staticImage.childImageSharp}},"8+s/":function(t,e,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=t(u.map((function(t){return t.props}))),f.canUseDOM?e(s):n&&(s=n(s))}var f=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,u=[],t};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),l()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},"8ypT":function(t,e,n){},Bl7J:function(t,e,n){"use strict";var r=n("IRj2"),a=n("q1tI"),i=n.n(a),o=(n("3nLz"),n("Wbzz")),c=n("6oaZ"),s=function(t){var e=t.siteTitle,n=Object(c.a)().fixed;return i.a.createElement("header",{style:{background:'#229700 url("'+n.src+'") no-repeat local 0% 0%',backgroundSize:"140px",marginBottom:"1.45rem",textAlign:"center"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.Link,{to:"/",style:{color:"white",textShadow:"1px 2px 5px rgba(0,0,0,0.5)",textDecoration:"none"}},e))))};s.defaultProps={siteTitle:""};var u=s;n("8ypT"),e.a=function(t){var e=t.children,n=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},C9fy:function(t,e,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var t=i.call(this);return t==t?a.call(this):"Invalid Date"}))},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Chá do Martin","description":"Site com os links para compras do chá do martin","author":"@gatsbyjs"}}}}')},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Chá do Martin"}}}}')},R48M:function(t,e,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},bmMU:function(t,e,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,s,u,l=r(e),f=r(n);if(l&&f){if((s=e.length)!=n.length)return!1;for(c=s;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=f)return!1;var p=e instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return e.getTime()==n.getTime();var h=e instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return e.toString()==n.toString();var y=a(e);if((s=y.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,y[c]))return!1;if(o&&e instanceof Element&&n instanceof Element)return e===n;for(c=s;0!=c--;)if(!("_owner"===(u=y[c])&&e.$$typeof||t(e[u],n[u])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},klQ5:function(t,e,n){var r=n("emib"),a=n("TUPI"),i=n("rjfK").f,o=n("chL8").f,c=n("mhTz"),s=n("lb9j"),u=r.RegExp,l=u,f=u.prototype,p=/a/g,d=/a/g,h=new u(p)!==p;if(n("QPJK")&&(!h||n("96qb")((function(){return d[n("sOol")("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")})))){u=function(t,e){var n=this instanceof u,r=c(t),i=void 0===e;return!n&&r&&t.constructor===u&&i?t:a(h?new l(r&&!i?t.source:t,e):l((r=t instanceof u)?t.source:t,r&&i?s.call(t):e),n?this:f,u)};for(var m=function(t){t in u||i(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},y=o(l),b=0;y.length>b;)m(y[b++]);f.constructor=u,u.prototype=f,n("IYdN")(r,"RegExp",u)}n("to/b")("RegExp")},osku:function(t){t.exports=JSON.parse('{"data":{"staticImage":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAADIUlEQVQ4y32TeWxMURTG71BbREQitqjQUUukREgIIoQgIrV20ZnpTNtpUyHEkhIhUlsttVWq2tFqSRtK0eIPS1FC6CBq7U5rKR1iFK3MzP0+d14popzk5J333vd+75x7zhHiN0O6UTDDJJAwTqBwl4/2rGBdCi5uy/XGvJHiA3tOWy1e0VOgvlS0arAOFsixNscHQwSyotpp8bbx/riXA5RdkOpng1r0p1brxP8M4QOar5umtgixd0Zf5Cy6w6dniJI8t8p0HI4vGwl79izt/dFoXasZtsA2N8NA6pBhWqsycjA7ksi0QPk3pAbdZaaReFTwSmnaa9rWgDT7CSgnKSCED+LGFPB4FJllJg4Z3Ew3krZQ8vQq8n4u8e6ZpKNsrAZ0lLXxnrtU/ivDCH+B2OEdtdiiX06rH7F81DcFk8w0k2kKlhcHvH3iYcNLD7/UUL55GKTpi5I7KKAG/dlU4fpYqpXKSSKApv71jNCTYf0klowA0gygLYS4kgR+qsXnart0Vt1VxXDyH1VmmHQK9qtRDOk1T26YWc7YYVRQDyMGKqgvETME2D8XOLsOcJTjQ4Udn6rs4Pn4k0iZvxEZ4YuRFja8pdrUhTohdywsZMV5suY6uWYSafAFDX2JyEFApAKa+wMJU6A0qhdOsvIamG0hT8SQx6LpPRZkWY7hxKIuGlUmGq2eSwcue67aHmPlhBKG9iJ2qPMrVR8+vw1csoFb5yApcCgSd24GLyZQHlzgZmqwC/sC3dwzWzLLQKSGHv6747M6JdPqT74obsLnV+6Gmgcul7NG0vkcYYEzkGSZKJkb7VZZQZ5T8PSlEma9h+EDPIweQkTorUImRTWvWHFeZySaXrM4m5Tvya+1bKi+R9Y9Jj+Wk7eOkHGjyY0TGR80RlbeyicbK8ndJjKoh5tmvaTFj4LPrgqc3SPqvVA0jGJj3Ro1sDY1a0fViGyhozQY1UW1srxQcv30kqppXb17zZPJ8U10PqrzbA9tpLEPGTuYap4/aKW6vAo12P8yvrjp21hRFPDjtqvy/N7du6lRYJumBT38FShGbVym8snfAdzwPoiYtimDAAAAAElFTkSuQmCC","width":140,"height":100,"src":"/static/862c1f1acdf0ccfa7a7c1182d6b7330f/b3779/raposinha.png","srcSet":"/static/862c1f1acdf0ccfa7a7c1182d6b7330f/b3779/raposinha.png 1x,\\n/static/862c1f1acdf0ccfa7a7c1182d6b7330f/f24bc/raposinha.png 1.5x,\\n/static/862c1f1acdf0ccfa7a7c1182d6b7330f/67974/raposinha.png 2x"},"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAADIUlEQVQ4y32TeWxMURTG71BbREQitqjQUUukREgIIoQgIrV20ZnpTNtpUyHEkhIhUlsttVWq2tFqSRtK0eIPS1FC6CBq7U5rKR1iFK3MzP0+d14popzk5J333vd+75x7zhHiN0O6UTDDJJAwTqBwl4/2rGBdCi5uy/XGvJHiA3tOWy1e0VOgvlS0arAOFsixNscHQwSyotpp8bbx/riXA5RdkOpng1r0p1brxP8M4QOar5umtgixd0Zf5Cy6w6dniJI8t8p0HI4vGwl79izt/dFoXasZtsA2N8NA6pBhWqsycjA7ksi0QPk3pAbdZaaReFTwSmnaa9rWgDT7CSgnKSCED+LGFPB4FJllJg4Z3Ew3krZQ8vQq8n4u8e6ZpKNsrAZ0lLXxnrtU/ivDCH+B2OEdtdiiX06rH7F81DcFk8w0k2kKlhcHvH3iYcNLD7/UUL55GKTpi5I7KKAG/dlU4fpYqpXKSSKApv71jNCTYf0klowA0gygLYS4kgR+qsXnart0Vt1VxXDyH1VmmHQK9qtRDOk1T26YWc7YYVRQDyMGKqgvETME2D8XOLsOcJTjQ4Udn6rs4Pn4k0iZvxEZ4YuRFja8pdrUhTohdywsZMV5suY6uWYSafAFDX2JyEFApAKa+wMJU6A0qhdOsvIamG0hT8SQx6LpPRZkWY7hxKIuGlUmGq2eSwcue67aHmPlhBKG9iJ2qPMrVR8+vw1csoFb5yApcCgSd24GLyZQHlzgZmqwC/sC3dwzWzLLQKSGHv6747M6JdPqT74obsLnV+6Gmgcul7NG0vkcYYEzkGSZKJkb7VZZQZ5T8PSlEma9h+EDPIweQkTorUImRTWvWHFeZySaXrM4m5Tvya+1bKi+R9Y9Jj+Wk7eOkHGjyY0TGR80RlbeyicbK8ndJjKoh5tmvaTFj4LPrgqc3SPqvVA0jGJj3Ro1sDY1a0fViGyhozQY1UW1srxQcv30kqppXb17zZPJ8U10PqrzbA9tpLEPGTuYap4/aKW6vAo12P8yvrjp21hRFPDjtqvy/N7du6lRYJumBT38FShGbVym8snfAdzwPoiYtimDAAAAAElFTkSuQmCC","aspectRatio":1.408450704225352,"src":"/static/862c1f1acdf0ccfa7a7c1182d6b7330f/497c6/raposinha.png","srcSet":"/static/862c1f1acdf0ccfa7a7c1182d6b7330f/65e33/raposinha.png 100w,\\n/static/862c1f1acdf0ccfa7a7c1182d6b7330f/69585/raposinha.png 200w,\\n/static/862c1f1acdf0ccfa7a7c1182d6b7330f/497c6/raposinha.png 400w,\\n/static/862c1f1acdf0ccfa7a7c1182d6b7330f/2a4de/raposinha.png 600w,\\n/static/862c1f1acdf0ccfa7a7c1182d6b7330f/ee604/raposinha.png 800w,\\n/static/862c1f1acdf0ccfa7a7c1182d6b7330f/6d806/raposinha.png 2368w","sizes":"(max-width: 400px) 100vw, 400px"}}}}}')},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return mt}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,i,o,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("MgzW"),y=n.n(m),b="bodyAttributes",g="htmlAttributes",A="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(T).map((function(t){return T[t]})),"charset"),w="cssText",S="href",E="http-equiv",C="innerHTML",O="itemprop",k="name",P="property",j="rel",x="src",I="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",q="defer",F="encodeSpecialCharacters",D="onChangeClientState",M="titleTemplate",G=Object.keys(R).reduce((function(t,e){return t[R[e]]=e,t}),{}),K=[T.NOSCRIPT,T.SCRIPT,T.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},N=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Q=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},J=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Z=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(t){var e=_(t,T.TITLE),n=_(t,M);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=_(t,L);return e||r||void 0},W=function(t){return _(t,D)||function(){}},B=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return H({},t,e)}),{})},V=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},X=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+U(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var a={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===e.indexOf(s)||n===j&&"canonical"===t[n].toLowerCase()||s===j&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(c)||c!==C&&c!==w&&c!==O||(n=c)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=y()({},r[c],a[c]);r[c]=s}return t}),[]).reverse()},_=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:t.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},at=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,a=t.htmlAttributes,i=t.linkTags,o=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;st(T.BODY,r),st(T.HTML,a),ct(f,p);var d={baseTag:ut(T.BASE,n),linkTags:ut(T.LINK,i),metaTags:ut(T.META,o),noscriptTags:ut(T.NOSCRIPT,c),scriptTags:ut(T.SCRIPT,u),styleTags:ut(T.STYLE,l)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),s(t,h,m)},ot=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),st(T.TITLE,e)},st=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(e),c=0;c<o.length;c++){var s=o[c],u=e[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},ut=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(t,e){return o=e,n.isEqualNode(t)}))?a.splice(o,1):i.push(n)})),a.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:a,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,a=ft(n,r),[h.a.createElement(T.TITLE,a,t)];var t,n,r,a},toString:function(){return function(t,e,n,r){var a=lt(n),i=ot(e);return a?"<"+t+' data-react-helmet="true" '+a+">"+Z(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+Z(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case b:case g:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=R[t]||t;if(n===C||n===w){var r=e.innerHTML||e.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=e[t]})),h.a.createElement(t,a)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var a=Object.keys(r).filter((function(t){return!(t===C||t===w)})).reduce((function(t,e){var a=void 0===r[e]?e:e+'="'+Z(r[e],n)+'"';return t?t+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===K.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,a=t.htmlAttributes,i=t.linkTags,o=t.metaTags,c=t.noscriptTags,s=t.scriptTags,u=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(T.BASE,e,r),bodyAttributes:pt(b,n,r),htmlAttributes:pt(g,a,r),link:pt(T.LINK,i,r),meta:pt(T.META,o,r),noscript:pt(T.NOSCRIPT,c,r),script:pt(T.SCRIPT,s,r),style:pt(T.STYLE,u,r),title:pt(T.TITLE,{title:f,titleAttributes:p},r)}},ht=l()((function(t){return{baseTag:V([S,I],t),bodyAttributes:B(b,t),defer:_(t,q),encode:_(t,F),htmlAttributes:B(g,t),linkTags:X(T.LINK,[j,S],t),metaTags:X(T.META,[k,v,E,P,O],t),noscriptTags:X(T.NOSCRIPT,[C],t),onChangeClientState:W(t),scriptTags:X(T.SCRIPT,[x,C],t),styleTags:X(T.STYLE,[w],t),title:z(t),titleAttributes:B(A,t)}}),(function(t){at&&nt(at),t.defer?at=et((function(){it(t,(function(){at=null}))})):(it(t),at=null)}),dt)((function(){return null})),mt=(a=ht,o=i=function(t){function e(){return Y(this,e),J(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return H({},r,((e={})[n.type]=[].concat(r[n.type]||[],[H({},a,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,a=t.newProps,i=t.newChildProps,o=t.nestedChildren;switch(r.type){case T.TITLE:return H({},a,((e={})[r.type]=o,e.titleAttributes=H({},i),e));case T.BODY:return H({},a,{bodyAttributes:H({},i)});case T.HTML:return H({},a,{htmlAttributes:H({},i)})}return H({},a,((n={})[r.type]=H({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=H({},e);return Object.keys(t).forEach((function(e){var r;n=H({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return h.a.Children.forEach(t,(function(t){if(t&&t.props){var a=t.props,i=a.children,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[G[n]||n]=t[n],e}),e)}(Q(a,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:o,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=Q(t,["children"]),r=H({},n);return e&&(r=this.mapChildrenToProps(e,r)),h.a.createElement(a,r)},N(e,null,[{key:"canUseDOM",set:function(t){a.canUseDOM=t}}]),e}(h.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var t=a.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},o);mt.renderStatic=mt.rewind}).call(this,n("yLpj"))},"t+fG":function(t,e,n){var r=n("P8UN"),a=n("96qb"),i=n("ap2Z"),o=/"/g,c=function(t,e,n,r){var a=String(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),r(r.P+r.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},vrFN:function(t,e,n){"use strict";n("q8oJ"),n("8npG"),n("3nLz");var r=n("EH9Q"),a=n("q1tI"),i=n.n(a),o=n("qhky"),c=n("6oaZ");function s(t){var e=t.description,n=t.lang,a=t.meta,s=t.title,u=r.data.site,l=e||u.siteMetadata.description,f=Object(c.a)().fixed.src;return i.a.createElement(o.a,{htmlAttributes:{lang:n},bodyAttributes:{className:"teste",style:{background:"#00FF00"}.toString()},title:s,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{property:"og:image",content:f},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=bfc3b393f484e8017a4ce6b216c744361b202e15-98cf9f25a50e990dbc28.js.map