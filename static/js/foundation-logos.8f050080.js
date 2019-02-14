(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docs/foundation/logos.mdx":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/react/index.js"),a=o.n(n),r=o("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=c(this,i(t).call(this,e))).state={theme:"logo-light",logo:e.light,download:e.download,logoLight:e.light,logoDark:e.dark},o}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.a.Component),o=t,(n=[{key:"changeTheme",value:function(){var e=this.state.theme;console.log("currentTheme",e,"logo",this.state.logo),"logo-dark"===e?this.setState({theme:"logo-light",logo:this.state.logoLight}):this.setState({theme:"logo-dark",logo:this.state.logoDark})}},{key:"download",value:function(){console.log("download",this.state.download),window.open(this.state.download)}},{key:"render",value:function(){return a.a.createElement("div",{className:"logobox"},a.a.createElement("div",{className:"logobox-header"},a.a.createElement("div",{className:"ml-auto"},a.a.createElement("span",null,a.a.createElement("button",{className:"btn btn-link",onClick:this.download.bind(this)},a.a.createElement("span",{className:"fa fa-download"}))),a.a.createElement("span",null,a.a.createElement("button",{className:"btn btn-link",onClick:this.changeTheme.bind(this)},a.a.createElement("span",{className:"fa fa-adjust"}))))),a.a.createElement("div",{className:"logobox-content ".concat(this.state.theme)},a.a.createElement("img",{src:this.state.logo,className:"img-fluid"})))}}])&&l(o.prototype,n),r&&l(o,r),t}(),d=m;m.__docgenInfo={description:"",methods:[{name:"changeTheme",docblock:null,modifiers:[],params:[],returns:null},{name:"download",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LogoBox"};var p=o("./resources/logos/mayadata-light.svg"),g=o.n(p),f=o("./resources/logos/mayadata-dark.svg"),y=o.n(f),h=o("./resources/logos/mdap-light.svg"),b=o.n(h),v=o("./resources/logos/mdap-dark.svg"),w=o.n(v),E=o("./resources/logos/mayaonline-light.svg"),k=o.n(E),O=o("./resources/logos/mayaonline-dark.svg"),j=o.n(O),x=o("./resources/logos/openebs.svg"),_=o.n(x),S=o("./resources/logos/openebs-dark.svg"),T=o.n(S),P=o("./resources/logos/litmus.svg"),N=o.n(P),D=o("./resources/logos/litmus-dark.svg"),M=o.n(D);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function L(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.d(t,"default",function(){return B});var B=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=I(this,J(t).call(this,e))).layout=null,o}var o,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,a.a.Component),o=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;X(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"logos"}},"Logos"),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"mayadata"}},"MayaData"),a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-4"},a.a.createElement(d,{light:g.a,dark:y.a,download:g.a}),a.a.createElement("div",{class:"m-4"}))),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"mayadata-product"}},"MayaData product"),a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-4"},a.a.createElement(d,{light:b.a,dark:w.a,download:b.a}),a.a.createElement("div",{class:"m-4"})),a.a.createElement("div",{class:"col-4"},a.a.createElement(d,{light:k.a,dark:j.a,download:k.a}),a.a.createElement("div",{class:"m-4"}))),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"open-source-projects"}},"Open source projects"),a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-4"},a.a.createElement(d,{light:_.a,dark:T.a,download:_.a}),a.a.createElement("div",{class:"m-4"})),a.a.createElement("div",{class:"col-4"},a.a.createElement(d,{light:N.a,dark:M.a,download:N.a}),a.a.createElement("div",{class:"m-4"}))))}}])&&L(o.prototype,n),s&&L(o,s),t}();B.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./resources/logos/litmus-dark.svg":function(e,t,o){e.exports=o.p+"static/img/litmus-dark.2f1ad839.svg"},"./resources/logos/litmus.svg":function(e,t,o){e.exports=o.p+"static/img/litmus.225e5ecc.svg"},"./resources/logos/mayadata-dark.svg":function(e,t,o){e.exports=o.p+"static/img/mayadata-dark.29c96f60.svg"},"./resources/logos/mayadata-light.svg":function(e,t,o){e.exports=o.p+"static/img/mayadata-light.b49a6828.svg"},"./resources/logos/mayaonline-dark.svg":function(e,t,o){e.exports=o.p+"static/img/mayaonline-dark.635c48c2.svg"},"./resources/logos/mayaonline-light.svg":function(e,t,o){e.exports=o.p+"static/img/mayaonline-light.90616e12.svg"},"./resources/logos/mdap-dark.svg":function(e,t,o){e.exports=o.p+"static/img/mdap-dark.c5ea90d1.svg"},"./resources/logos/mdap-light.svg":function(e,t,o){e.exports=o.p+"static/img/mdap-light.eb69b412.svg"},"./resources/logos/openebs-dark.svg":function(e,t,o){e.exports=o.p+"static/img/openebs-dark.037b3116.svg"},"./resources/logos/openebs.svg":function(e,t,o){e.exports=o.p+"static/img/openebs.e27a9447.svg"}}]);
//# sourceMappingURL=foundation-logos.a102f6bd941a361d2b4a.js.map