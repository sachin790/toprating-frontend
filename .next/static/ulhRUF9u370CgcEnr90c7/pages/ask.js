(window.webpackJsonp=window.webpackJsonp||[]).push([["8e6a"],{"6g8b":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ask",function(){var e=a("o9Up");return{page:e.default||e}}])},"8KHB":function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a("fz1N")),i=n(a("eKRN")),r=n(a("1+oM")),s=n(a("q1tI")),c=(n(a("17x9")),n(a("TSYQ"))),l=(n(a("2W6z")),a("j4Xf"),n(a("Hk+Y"))),u=function(e){var t={};return e.shadows.forEach(function(e,a){t["elevation".concat(a)]={boxShadow:e}}),(0,r.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function d(e){var t=e.classes,a=e.className,n=e.component,l=e.square,u=e.elevation,d=(0,i.default)(e,["classes","className","component","square","elevation"]),f=(0,c.default)(t.root,t["elevation".concat(u)],(0,o.default)({},t.rounded,!l),a);return s.default.createElement(n,(0,r.default)({className:f},d))}t.styles=u,d.defaultProps={component:"div",elevation:2,square:!1};var f=(0,l.default)(u,{name:"MuiPaper"})(d);t.default=f},EItT:function(e,t,a){"use strict";e.exports=function(e){const t=a("XSpO"),n=e?e.preset:"ru",o={"а":"a","б":"b","в":"v","д":"d","з":"z","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","ь":""};let i;"ru"===n?Object.assign(o,{"г":"g","и":"i","ъ":"","ы":"i","э":"e"}):"uk"===n&&Object.assign(o,{"г":"h","ґ":"g","е":"e","и":"y","і":"i","'":"","’":"","ʼ":""}),"ru"===n?i={...t(o),i:"и","":""}:"uk"===n&&(i={...t(o),"":""});const r="ru"===n?{"е":"ye"}:{"є":"ye","ї":"yi"},s={"ё":"yo","ж":"zh","х":"kh","ц":"ts","ч":"ch","ш":"sh","щ":"shch","ю":"yu","я":"ya"},c={...s,...r},l={...t(c)},u={...o,...c},d={...o,"й":"i"};let f;"ru"===n?Object.assign(d,{"е":"e"}):"uk"===n&&Object.assign(d,{"ї":"i"}),"ru"===n?f={...t(o),i:"и",y:"ы",e:"е","":""}:"uk"===n&&(f={...t(o),"":""});let p={};"uk"===n&&(p={"є":"ie","ю":"iu","я":"ia"});const b={...s,...p},m={...t(b)},x={...d,...b};return{transform:function(e,t){if(!e)return"";const a=e.normalize();let o="",i=!1;for(let r=0;r<a.length;r++){const e=a[r]===a[r].toUpperCase();let s,c=a[r].toLowerCase();" "!==c?("uk"===n&&"зг"===a.slice(r-1,r+1).toLowerCase()?s="gh":0===r||i?(s=u[c],i=!1):s=x[c],void 0===s?o+=e?c.toUpperCase():c:e?s.length>1?o+=s[0].toUpperCase()+s.slice(1):o+=s.toUpperCase():o+=s):(o+=t||" ",i=!0)}return o},reverse:function(e,t){if(!e)return"";const a=e.normalize();let n="",o=!1,r=0;for(;r<a.length;){const e=a[r]===a[r].toUpperCase();let s,c=a[r].toLowerCase(),u=r;if(" "===c||c===t){n+=" ",o=!0,r++;continue}let d=a.slice(r,r+2).toLowerCase();0===r||o?((s=l[d])?r+=2:(s=i[c],r++),o=!1):(s=m[d])?r+=2:(s=f[c],r++),"shch"===a.slice(u,u+4).toLowerCase()?(s="щ",r=u+4):"zgh"===a.slice(u-1,u+2).toLowerCase()&&(s="г",r=u+2),void 0===s?n+=e?c.toUpperCase():c:e?s.length>1?n+=s[0].toUpperCase()+s.slice(1):n+=s.toUpperCase():n+=s}return n}}}},NBss:function(e,t,a){"use strict";var n=a("MX0m"),o=a.n(n),i=a("q1tI"),r=a.n(i);t.a=function(e){var t=e.message;e.showclass;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"snackbar",className:"jsx-820573979 show"},t),r.a.createElement(o.a,{id:"820573979"},["#snackbar.jsx-820573979{visibility:hidden;min-width:200px;margin-left:-125px;background-color:rgb(67,160,71);color:#fff;text-align:center;border-radius:2px;padding:14px;position:fixed;z-index:1;left:10%;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;bottom:44px;font-size:17px;}","#snackbar.show.jsx-820573979{visibility:visible;-webkit-animation:fadein 0.5s,fadeout 0.5s 2.5s;-webkit-animation:fadein-jsx-820573979 0.5s,fadeout-jsx-820573979 0.5s 2.5s;animation:fadein-jsx-820573979 0.5s,fadeout-jsx-820573979 0.5s 2.5s;}","@-webkit-keyframes fadein{from.jsx-820573979{bottom:0;opacity:0;}to.jsx-820573979{bottom:30px;opacity:1;}}","@-webkit-keyframes fadein-jsx-820573979{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@keyframes fadein-jsx-820573979{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@-webkit-keyframes fadeout{from.jsx-820573979{bottom:30px;opacity:1;}to.jsx-820573979{bottom:0;opacity:0;}}","@-webkit-keyframes fadeout-jsx-820573979{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@keyframes fadeout-jsx-820573979{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@media screen and (max-width:768px){#snackbar.jsx-820573979{left:30%;padding:10px;}}"]))}},T7hD:function(e,t,a){"use strict";var n=a("MX0m"),o=a.n(n),i=a("q1tI"),r=a.n(i);t.a=function(e){var t=e.message;e.showclass;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"snackbar",className:"jsx-2457805773 show"},t),r.a.createElement(o.a,{id:"2457805773"},["#snackbar.jsx-2457805773{visibility:hidden;min-width:200px;margin-left:-125px;background-color:#d32f2f;color:#fff;text-align:center;border-radius:2px;padding:13px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;position:fixed;z-index:1;left:10%;bottom:44px;font-size:17px;}","#snackbar.show.jsx-2457805773{visibility:visible;-webkit-animation:fadein 0.5s,fadeout 0.5s 2.5s;-webkit-animation:fadein-jsx-2457805773 0.5s,fadeout-jsx-2457805773 0.5s 2.5s;animation:fadein-jsx-2457805773 0.5s,fadeout-jsx-2457805773 0.5s 2.5s;}","@-webkit-keyframes fadein{from.jsx-2457805773{bottom:0;opacity:0;}to.jsx-2457805773{bottom:30px;opacity:1;}}","@-webkit-keyframes fadein-jsx-2457805773{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@keyframes fadein-jsx-2457805773{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@-webkit-keyframes fadeout{from.jsx-2457805773{bottom:30px;opacity:1;}to.jsx-2457805773{bottom:0;opacity:0;}}","@-webkit-keyframes fadeout-jsx-2457805773{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@keyframes fadeout-jsx-2457805773{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@media screen and (max-width:768px){#snackbar.jsx-2457805773{left:30%;padding:10px;}}"]))}},XSpO:function(e,t){var a=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",r=/^(?:0|[1-9]\d*)$/;var s,c,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,f=l.propertyIsEnumerable,p=(s=Object.keys,c=Object,function(e){return s(c(e))});function b(e,t){var a=k(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&y(e)}(e)&&u.call(e,"callee")&&(!f.call(e,"callee")||d.call(e)==n)}(e)?function(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}(e.length,String):[],o=a.length,i=!!o;for(var r in e)!t&&!u.call(e,r)||i&&("length"==r||j(r,o))||a.push(r);return a}var m,x=function(e,t,a){for(var n=-1,o=Object(e),i=a(e),r=i.length;r--;){var s=i[m?r:++n];if(!1===t(o[s],s,o))break}return e};function g(e,t,a,n){return function(e,t){e&&x(e,t,C)}(e,function(e,o,i){t(n,a(e),o,i)}),n}function h(e){if(a=(t=e)&&t.constructor,n="function"==typeof a&&a.prototype||l,t!==n)return p(e);var t,a,n,o=[];for(var i in Object(e))u.call(e,i)&&"constructor"!=i&&o.push(i);return o}function j(e,t){return!!(t=null==t?a:t)&&("number"==typeof e||r.test(e))&&e>-1&&e%1==0&&e<t}var k=Array.isArray;function y(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?d.call(e):"";return t==o||t==i}(e)}var w,v,O,S=(w=function(e,t,a){e[t]=a},O=function(e){return e},v=function(){return O},function(e,t){return g(e,w,v(t),{})});function C(e){return y(e)?b(e):h(e)}e.exports=S},o9Up:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),o=a.n(n),i=a("O40h"),r=a("kOwS"),s=a("dfwq"),c=a("0iUn"),l=a("sLSF"),u=a("MI3g"),d=a("a7VT"),f=a("AT/M"),p=a("Tit0"),b=a("vYYK"),m=a("MX0m"),x=a.n(m),g=a("q1tI"),h=a.n(g),j=a("vDqi"),k=a.n(j),y=a("qJ/b"),w=a.n(y),v=a("pPbJ"),O=a.n(v),S=a("rhLc"),C=a("JwBy"),E=a("nOHt"),N=a("OcYQ"),z=a("gFX4"),L=a.n(z),U=a("DB6d"),q=a("vL9u"),T=a("NBss"),A=a("T7hD"),I=L()(N.c),_=(a("EItT"),function(e){function t(){var e,a;Object(c.default)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return a=Object(u.default)(this,(e=Object(d.default)(t)).call.apply(e,[this].concat(o))),Object(b.a)(Object(f.default)(a),"state",{chipData:[],tag:[],tagie:"",question:"What are the ",ask:!1,data:a.props.data.data,checkTagArray:[],UserClickedLogin:!1,UserClickedSignup:!1}),Object(b.a)(Object(f.default)(a),"handleDivClose",function(e){e.target===a.div&&a.setState(function(e){return{showClass:!e}})}),Object(b.a)(Object(f.default)(a),"openLoginOverlay",function(){a.setState({UserClickedLogin:!a.state.UserClickedLogin,UserClickedSignup:!1})}),Object(b.a)(Object(f.default)(a),"openSignupOverlay",function(){a.setState({UserClickedSignup:!a.state.UserClickedSignup,UserClickedLogin:!1})}),Object(b.a)(Object(f.default)(a),"closeLoginOverlay",function(){a.setState({UserClickedLogin:!a.state.UserClickedLogin})}),Object(b.a)(Object(f.default)(a),"closeSignupOverlay",function(){a.setState({UserClickedSignup:!a.state.UserClickedSignup})}),Object(b.a)(Object(f.default)(a),"handleDelete",function(e){return function(){a.setState(function(t){var a=Object(s.default)(t.tag),n=a.indexOf(e);return a.splice(n,1),{tag:a}})}}),Object(b.a)(Object(f.default)(a),"handleSubmit",function(e){e.preventDefault();var t=localStorage.getItem("user_token"),n=JSON.parse(localStorage.getItem("user_details"));if(t){var o=a.state,i=o.tag,r=o.question;Object(S.ab)(r,i,n._id,I.id).then(function(e){a.setState({tag:[],question:"What are the ",showSnackbar:!0,message:"Question Added"}),setTimeout(function(){a.setState({showSnackbar:!1})},4e3),window.location="/"}).catch(function(e){a.setState({showErrorSnackbar:!0,message:e.response.data||"Operation Unsuccessful "}),setTimeout(function(){a.setState({showErrorSnackbar:!1})},4e3)})}else alert("Kindly Sign up to add a question")}),Object(b.a)(Object(f.default)(a),"addNewTag",function(e){a.setState(function(e){return{tag:[].concat(Object(s.default)(e.tag),[a.state.tagie]),tagie:"",ask:!1}})}),Object(b.a)(Object(f.default)(a),"add",function(e){a.setState(function(t){return{tag:[].concat(Object(s.default)(t.tag),[e]),tagie:"",ask:!1}})}),Object(b.a)(Object(f.default)(a),"showButton",function(e){var t,n,o=e.target,i=o.name,r=o.value,c=a.state.data.map(function(e){return e.tag}),l=(t=c,(n=[]).concat.apply(n,Object(s.default)(t))).filter(function(e){return-1!==e.toLowerCase().indexOf(r.toLowerCase())});""===r?a.setState(Object(b.a)({ask:!1},i,"")):a.setState(Object(b.a)({checkTagArray:l,ask:!0},i,r))}),Object(b.a)(Object(f.default)(a),"handleQuestionInput",function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(b.a)({},n,o))}),a}return Object(p.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.tagie,n=t.ask,o=t.question,i=t.checkTagArray,s=t.UserClickedLogin,c=t.UserClickedSignup,l=t.showSnackbar,u=t.showErrorSnackbar,d=t.message;return h.a.createElement(C.a,Object(r.a)({openSignup:this.openSignupOverlay,openLogin:this.openLoginOverlay},this.state),h.a.createElement("div",{className:"jsx-1783110031 cont"},h.a.createElement("h1",{className:"jsx-1783110031"},"Ask your question, get the best recommendation"),h.a.createElement("form",{className:"jsx-1783110031"},h.a.createElement("div",{className:"jsx-1783110031"},h.a.createElement("textarea",{name:"question",placeholder:"Ask your question here",value:o,onChange:function(t){return e.handleQuestionInput(t)},autoFocus:!0,className:"jsx-1783110031"})),h.a.createElement("div",{className:"jsx-1783110031"},h.a.createElement("input",{type:"text",name:"tagie",value:a,onChange:function(t){return e.showButton(t)},placeholder:"Add Tags",className:"jsx-1783110031"})),h.a.createElement("div",{className:"jsx-1783110031 add-button-class"},h.a.createElement("button",{onClick:this.handleSubmit,disabled:!o,className:"jsx-1783110031 add-question-btn"},"Add Question"))),n?h.a.createElement("div",{className:"jsx-1783110031 show-tag"},i.map(function(t,a){return h.a.createElement(g.Fragment,{key:a},function(t,a){return h.a.createElement("strong",{style:{display:"block"},key:a,value:t,onClick:function(){e.add(t)}},t)}(t,a))}),h.a.createElement("em",{className:"jsx-1783110031"},"Tag not found?",h.a.createElement("a",{onClick:this.addNewTag,className:"jsx-1783110031 but"},"Add Tag"))):"",h.a.createElement(O.a,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:"2px",borderRadius:"3px",marginTop:"10px"}},this.state.tag.map(function(t,a){return h.a.createElement(w.a,{key:a,icon:null,label:t,onDelete:e.handleDelete(t)})})),h.a.createElement("div",{onClick:function(t){return e.handleDivClose(t)},ref:function(t){return e.div=t},className:"jsx-1783110031 "+((c?"overlayShowie":"overlay")||"")},h.a.createElement("span",{onClick:this.closeSignupOverlay,className:"jsx-1783110031 close-icon"},h.a.createElement("span",{className:"jsx-1783110031"},"×")),c&&h.a.createElement(q.default,{openLogin:this.openLoginOverlay})),h.a.createElement("div",{onClick:function(t){return e.handleDivClose(t)},ref:function(t){return e.div=t},className:"jsx-1783110031 "+((s?"overlayShowie":"overlay")||"")},h.a.createElement("span",{onClick:this.closeLoginOverlay,className:"jsx-1783110031 close-icon"},h.a.createElement("span",{className:"jsx-1783110031"},"×")),s&&h.a.createElement(U.default,{openSignup:this.openSignupOverlay})),l&&h.a.createElement(T.a,{message:d}),u&&h.a.createElement(A.a,{message:d}),h.a.createElement(x.a,{id:"1783110031"},[".add-button-class.jsx-1783110031{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".show-tag.jsx-1783110031{text-align:center;box-sizing:border-box;padding:5px;margin-top:10px;}","em.jsx-1783110031{font-weight:100;font-family:inherit;display:block;}",".but.jsx-1783110031{outline:none;cursor:pointer;font-weight:600;font-family:inherit;color:rgb(96,51,141) !important;margin-left:3px;padding:0.1em;}",".overlay.jsx-1783110031{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgba(0,0,0,0.05);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}",".overlayShowie.jsx-1783110031{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:#fff;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}",".close-icon.jsx-1783110031{position:absolute;top:20px;left:90%;min-height:20px;max-height:100px;padding:9px;background:#e6ecf0;font-size:55px !important;color:rgb(91,56,141);cursor:pointer;z-index:2000;border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".close-icon.jsx-1783110031>span.jsx-1783110031{position:relative;top:-2px;}",".cont.jsx-1783110031{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;position:relative;top:70px;box-sizing:border-box;}",'input[type="text"].jsx-1783110031{width:30vw;height:40px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;padding:10px;margin:10px 0;font-size:Cabin;font-weight:600;}',"textarea.jsx-1783110031{width:30vw;min-height:18px;height:40px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;padding:10px;resize:none;font-family:Cabin;font-weight:600;}",".add-question-btn.jsx-1783110031{position:relative;width:120px;padding:10px;border:1px solid rgb(96,51,141);outline:none;cursor:pointer;border-radius:4px;background:rgb(96,51,141);font-weight:100;font-family:inherit;color:#fff;}",".add-question-btn.jsx-1783110031:hover{background-color:#e6ecf0;color:rgb(96,51,141);border:1px solid rgb(96,51,141);-webkit-transition:1s;transition:1s;}",".add-question-btn.jsx-1783110031:disabled{cursor:not-allowed;background:#e6e8eb;color:#8d959c;}",".jsx-1783110031::-webkit-input-placeholder{font-weight:bold;font-size:1em;font-family:inherit;}",".jsx-1783110031::-moz-placeholder{font-weight:bold;font-size:1em;font-family:inherit;}",".jsx-1783110031:-ms-input-placeholder{font-weight:bold;font-size:1em;font-family:inherit;}",".jsx-1783110031::placeholder{font-weight:bold;font-size:1em;font-family:inherit;}","h1.jsx-1783110031{font-size:1.3em;text-align:center;word-spacing:0.3px;font-family:inherit;}",'@media screen and (max-width:600px){input[type="text"].jsx-1783110031{width:250px;}textarea.jsx-1783110031{width:250px;}.add-question-btn.jsx-1783110031{margin-top:5px;}}'])))}}],[{key:"getInitialProps",value:function(){var e=Object(i.default)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()(S.ob);case 2:return t=e.sent,e.abrupt("return",{data:t.data});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),t}(h.a.Component));t.default=Object(E.withRouter)(_)},pPbJ:function(e,t,a){"use strict";var n=a("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("8KHB"))}},[["6g8b","5d41","9da1"]]]);