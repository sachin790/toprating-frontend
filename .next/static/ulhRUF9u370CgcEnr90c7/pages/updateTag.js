(window.webpackJsonp=window.webpackJsonp||[]).push([["fe8a"],{"51sR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updateTag",function(){var e=n("LvrZ");return{page:e.default||e}}])},"8KHB":function(e,t,n){"use strict";var a=n("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=a(n("fz1N")),o=a(n("eKRN")),s=a(n("1+oM")),r=a(n("q1tI")),c=(a(n("17x9")),a(n("TSYQ"))),l=(a(n("2W6z")),n("j4Xf"),a(n("Hk+Y"))),d=function(e){var t={};return e.shadows.forEach(function(e,n){t["elevation".concat(n)]={boxShadow:e}}),(0,s.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function p(e){var t=e.classes,n=e.className,a=e.component,l=e.square,d=e.elevation,p=(0,o.default)(e,["classes","className","component","square","elevation"]),f=(0,c.default)(t.root,t["elevation".concat(d)],(0,i.default)({},t.rounded,!l),n);return r.default.createElement(a,(0,s.default)({className:f},p))}t.styles=d,p.defaultProps={component:"div",elevation:2,square:!1};var f=(0,l.default)(d,{name:"MuiPaper"})(p);t.default=f},EItT:function(e,t,n){"use strict";e.exports=function(e){const t=n("XSpO"),a=e?e.preset:"ru",i={"а":"a","б":"b","в":"v","д":"d","з":"z","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","ь":""};let o;"ru"===a?Object.assign(i,{"г":"g","и":"i","ъ":"","ы":"i","э":"e"}):"uk"===a&&Object.assign(i,{"г":"h","ґ":"g","е":"e","и":"y","і":"i","'":"","’":"","ʼ":""}),"ru"===a?o={...t(i),i:"и","":""}:"uk"===a&&(o={...t(i),"":""});const s="ru"===a?{"е":"ye"}:{"є":"ye","ї":"yi"},r={"ё":"yo","ж":"zh","х":"kh","ц":"ts","ч":"ch","ш":"sh","щ":"shch","ю":"yu","я":"ya"},c={...r,...s},l={...t(c)},d={...i,...c},p={...i,"й":"i"};let f;"ru"===a?Object.assign(p,{"е":"e"}):"uk"===a&&Object.assign(p,{"ї":"i"}),"ru"===a?f={...t(i),i:"и",y:"ы",e:"е","":""}:"uk"===a&&(f={...t(i),"":""});let u={};"uk"===a&&(u={"є":"ie","ю":"iu","я":"ia"});const x={...r,...u},b={...t(x)},m={...p,...x};return{transform:function(e,t){if(!e)return"";const n=e.normalize();let i="",o=!1;for(let s=0;s<n.length;s++){const e=n[s]===n[s].toUpperCase();let r,c=n[s].toLowerCase();" "!==c?("uk"===a&&"зг"===n.slice(s-1,s+1).toLowerCase()?r="gh":0===s||o?(r=d[c],o=!1):r=m[c],void 0===r?i+=e?c.toUpperCase():c:e?r.length>1?i+=r[0].toUpperCase()+r.slice(1):i+=r.toUpperCase():i+=r):(i+=t||" ",o=!0)}return i},reverse:function(e,t){if(!e)return"";const n=e.normalize();let a="",i=!1,s=0;for(;s<n.length;){const e=n[s]===n[s].toUpperCase();let r,c=n[s].toLowerCase(),d=s;if(" "===c||c===t){a+=" ",i=!0,s++;continue}let p=n.slice(s,s+2).toLowerCase();0===s||i?((r=l[p])?s+=2:(r=o[c],s++),i=!1):(r=b[p])?s+=2:(r=f[c],s++),"shch"===n.slice(d,d+4).toLowerCase()?(r="щ",s=d+4):"zgh"===n.slice(d-1,d+2).toLowerCase()&&(r="г",s=d+2),void 0===r?a+=e?c.toUpperCase():c:e?r.length>1?a+=r[0].toUpperCase()+r.slice(1):a+=r.toUpperCase():a+=r}return a}}}},LvrZ:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),i=n.n(a),o=n("O40h"),s=n("kOwS"),r=n("dfwq"),c=n("0iUn"),l=n("sLSF"),d=n("MI3g"),p=n("a7VT"),f=n("AT/M"),u=n("Tit0"),x=n("vYYK"),b=n("MX0m"),m=n.n(b),g=n("q1tI"),k=n.n(g),y=n("vDqi"),j=n.n(y),h=n("qJ/b"),w=n.n(h),v=n("pPbJ"),O=n.n(v),S=n("rhLc"),E=n("JwBy"),C=n("nOHt"),z=n("OcYQ"),q=n("gFX4"),N=n.n(q),L=n("DB6d"),T=n("vL9u"),U=n("NBss"),A=n("T7hD"),I=n("lT5q"),D=(N()(z.c),function(e){function t(){var e,n;Object(c.default)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=Object(d.default)(this,(e=Object(p.default)(t)).call.apply(e,[this].concat(i))),Object(x.a)(Object(f.default)(n),"state",{chipData:[],questionId:n.props.id,tag:n.props.specQuestion.tag,tagie:"",question:n.props.specQuestion.question,ask:!1,data:n.props.data.data,checkTagArray:[],UserClickedLogin:!1,UserClickedSignup:!1}),Object(x.a)(Object(f.default)(n),"getSpecificQuestion",function(e){Object(S.t)(e).then(function(e){n.setState({question:e.data.question})}).catch(function(e){console.log(e)})}),Object(x.a)(Object(f.default)(n),"handleDivClose",function(e){e.target===n.div&&n.setState(function(e){return{showClass:!e}})}),Object(x.a)(Object(f.default)(n),"openLoginOverlay",function(){n.setState({UserClickedLogin:!n.state.UserClickedLogin,UserClickedSignup:!1})}),Object(x.a)(Object(f.default)(n),"openSignupOverlay",function(){n.setState({UserClickedSignup:!n.state.UserClickedSignup,UserClickedLogin:!1})}),Object(x.a)(Object(f.default)(n),"closeLoginOverlay",function(){n.setState({UserClickedLogin:!n.state.UserClickedLogin})}),Object(x.a)(Object(f.default)(n),"closeSignupOverlay",function(){n.setState({UserClickedSignup:!n.state.UserClickedSignup})}),Object(x.a)(Object(f.default)(n),"handleDelete",function(e){return function(){n.setState(function(t){var n=Object(r.default)(t.tag),a=n.indexOf(e);return n.splice(a,1),{tag:n}})}}),Object(x.a)(Object(f.default)(n),"handleSubmit",function(e){e.preventDefault();var t=localStorage.getItem("user_token");JSON.parse(localStorage.getItem("user_details"));if(t){var a=n.state,i=a.tag,o=a.questionId,s=a.question;Object(S.Y)(o,i,s).then(function(e){n.setState({showSnackbar:!0,message:"Tag Added"}),setTimeout(function(){n.setState({showSnackbar:!1})},4e3)}).catch(function(e){n.setState({showErrorSnackbar:!0,message:e.response.data||"Operation Unsuccessful "}),setTimeout(function(){n.setState({showErrorSnackbar:!1})},4e3)})}else alert("Kindly Sign up to add a question")}),Object(x.a)(Object(f.default)(n),"addNewTag",function(e){n.setState(function(e){return{tag:[].concat(Object(r.default)(e.tag),[n.state.tagie]),tagie:"",ask:!1}})}),Object(x.a)(Object(f.default)(n),"add",function(e){n.setState(function(t){return{tag:[].concat(Object(r.default)(t.tag),[e]),tagie:"",ask:!1}})}),Object(x.a)(Object(f.default)(n),"showButton",function(e){var t,a,i=e.target,o=i.name,s=i.value,c=n.state.data.map(function(e){return e.tag}),l=(t=c,(a=[]).concat.apply(a,Object(r.default)(t))).filter(function(e){return-1!==e.toLowerCase().indexOf(s.toLowerCase())});""===s?n.setState(Object(x.a)({ask:!1},o,"")):n.setState(Object(x.a)({checkTagArray:l,ask:!0},o,s))}),Object(x.a)(Object(f.default)(n),"handleQuestionInput",function(e){var t=e.target,a=t.name,i=t.value;n.setState(Object(x.a)({},a,i))}),n}return Object(u.default)(t,e),Object(l.default)(t,[{key:"componentDidMount",value:function(){this.getSpecificQuestion(this.props.id)}},{key:"render",value:function(){var e=this,t=this.state,n=t.tagie,a=t.ask,i=t.question,o=t.checkTagArray,r=t.UserClickedLogin,c=t.UserClickedSignup,l=t.showSnackbar,d=t.showErrorSnackbar,p=t.message;return k.a.createElement(E.a,Object(s.a)({openSignup:this.openSignupOverlay,openLogin:this.openLoginOverlay},this.state),k.a.createElement(I.a,{question:i}),k.a.createElement("div",{className:"jsx-1783110031 cont"},k.a.createElement("form",{className:"jsx-1783110031"},k.a.createElement("div",{className:"jsx-1783110031"},k.a.createElement("textarea",{name:"question",placeholder:"Ask your question here",value:i+"?",readOnly:!0,autoFocus:!0,className:"jsx-1783110031"})),k.a.createElement("div",{className:"jsx-1783110031"},k.a.createElement("input",{type:"text",name:"tagie",value:n,onChange:function(t){return e.showButton(t)},placeholder:"Add Tags",className:"jsx-1783110031"})),k.a.createElement("div",{className:"jsx-1783110031 add-button-class"},k.a.createElement("button",{onClick:this.handleSubmit,disabled:!i,className:"jsx-1783110031 add-question-btn"},"Submit"))),a?k.a.createElement("div",{className:"jsx-1783110031 show-tag"},o.map(function(t,n){return k.a.createElement(g.Fragment,{key:n},function(t,n){return k.a.createElement("strong",{style:{display:"block"},key:n,value:t,onClick:function(){e.add(t)}},t)}(t,n))}),k.a.createElement("em",{className:"jsx-1783110031"},"Tag not found?",k.a.createElement("a",{onClick:this.addNewTag,className:"jsx-1783110031 but"},"Add Tag"))):"",k.a.createElement(O.a,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:"2px",borderRadius:"3px",marginTop:"10px"}},this.state.tag.map(function(t,n){return k.a.createElement(w.a,{key:n,icon:null,label:t,onDelete:e.handleDelete(t)})})),k.a.createElement("div",{onClick:function(t){return e.handleDivClose(t)},ref:function(t){return e.div=t},className:"jsx-1783110031 "+((c?"overlayShowie":"overlay")||"")},k.a.createElement("span",{onClick:this.closeSignupOverlay,className:"jsx-1783110031 close-icon"},k.a.createElement("span",{className:"jsx-1783110031"},"×")),c&&k.a.createElement(T.default,{openLogin:this.openLoginOverlay})),k.a.createElement("div",{onClick:function(t){return e.handleDivClose(t)},ref:function(t){return e.div=t},className:"jsx-1783110031 "+((r?"overlayShowie":"overlay")||"")},k.a.createElement("span",{onClick:this.closeLoginOverlay,className:"jsx-1783110031 close-icon"},k.a.createElement("span",{className:"jsx-1783110031"},"×")),r&&k.a.createElement(L.default,{openSignup:this.openSignupOverlay})),l&&k.a.createElement(U.a,{message:p}),d&&k.a.createElement(A.a,{message:p}),k.a.createElement(m.a,{id:"1783110031"},[".add-button-class.jsx-1783110031{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".show-tag.jsx-1783110031{text-align:center;box-sizing:border-box;padding:5px;margin-top:10px;}","em.jsx-1783110031{font-weight:100;font-family:inherit;display:block;}",".but.jsx-1783110031{outline:none;cursor:pointer;font-weight:600;font-family:inherit;color:rgb(96,51,141) !important;margin-left:3px;padding:0.1em;}",".overlay.jsx-1783110031{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgba(0,0,0,0.05);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}",".overlayShowie.jsx-1783110031{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:#fff;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}",".close-icon.jsx-1783110031{position:absolute;top:20px;left:90%;min-height:20px;max-height:100px;padding:9px;background:#e6ecf0;font-size:55px !important;color:rgb(91,56,141);cursor:pointer;z-index:2000;border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".close-icon.jsx-1783110031>span.jsx-1783110031{position:relative;top:-2px;}",".cont.jsx-1783110031{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;position:relative;top:70px;box-sizing:border-box;}",'input[type="text"].jsx-1783110031{width:30vw;height:40px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;padding:10px;margin:10px 0;font-size:Cabin;font-weight:600;}',"textarea.jsx-1783110031{width:30vw;min-height:18px;height:40px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;padding:10px;resize:none;font-family:Cabin;font-weight:600;}",".add-question-btn.jsx-1783110031{position:relative;width:120px;padding:10px;border:1px solid rgb(96,51,141);outline:none;cursor:pointer;border-radius:4px;background:rgb(96,51,141);font-weight:100;font-family:inherit;color:#fff;}",".add-question-btn.jsx-1783110031:hover{background-color:#e6ecf0;color:rgb(96,51,141);border:1px solid rgb(96,51,141);-webkit-transition:1s;transition:1s;}",".add-question-btn.jsx-1783110031:disabled{cursor:not-allowed;background:#e6e8eb;color:#8d959c;}",".jsx-1783110031::-webkit-input-placeholder{font-weight:bold;font-size:1em;font-family:inherit;}",".jsx-1783110031::-moz-placeholder{font-weight:bold;font-size:1em;font-family:inherit;}",".jsx-1783110031:-ms-input-placeholder{font-weight:bold;font-size:1em;font-family:inherit;}",".jsx-1783110031::placeholder{font-weight:bold;font-size:1em;font-family:inherit;}","h1.jsx-1783110031{font-size:1.3em;text-align:center;word-spacing:0.3px;font-family:inherit;}",'@media screen and (max-width:600px){input[type="text"].jsx-1783110031{width:250px;}textarea.jsx-1783110031{width:250px;}.add-question-btn.jsx-1783110031{margin-top:5px;}}'])))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(i.a.mark(function e(t){var n,a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.id,e.next=3,j()(S.ob);case 3:return a=e.sent,e.next=6,Object(S.t)(n);case 6:return o=e.sent,e.abrupt("return",{data:a.data,id:n,specQuestion:o.data});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(k.a.Component));t.default=Object(C.withRouter)(D)},NBss:function(e,t,n){"use strict";var a=n("MX0m"),i=n.n(a),o=n("q1tI"),s=n.n(o);t.a=function(e){var t=e.message;e.showclass;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"snackbar",className:"jsx-820573979 show"},t),s.a.createElement(i.a,{id:"820573979"},["#snackbar.jsx-820573979{visibility:hidden;min-width:200px;margin-left:-125px;background-color:rgb(67,160,71);color:#fff;text-align:center;border-radius:2px;padding:14px;position:fixed;z-index:1;left:10%;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;bottom:44px;font-size:17px;}","#snackbar.show.jsx-820573979{visibility:visible;-webkit-animation:fadein 0.5s,fadeout 0.5s 2.5s;-webkit-animation:fadein-jsx-820573979 0.5s,fadeout-jsx-820573979 0.5s 2.5s;animation:fadein-jsx-820573979 0.5s,fadeout-jsx-820573979 0.5s 2.5s;}","@-webkit-keyframes fadein{from.jsx-820573979{bottom:0;opacity:0;}to.jsx-820573979{bottom:30px;opacity:1;}}","@-webkit-keyframes fadein-jsx-820573979{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@keyframes fadein-jsx-820573979{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@-webkit-keyframes fadeout{from.jsx-820573979{bottom:30px;opacity:1;}to.jsx-820573979{bottom:0;opacity:0;}}","@-webkit-keyframes fadeout-jsx-820573979{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@keyframes fadeout-jsx-820573979{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@media screen and (max-width:768px){#snackbar.jsx-820573979{left:30%;padding:10px;}}"]))}},T7hD:function(e,t,n){"use strict";var a=n("MX0m"),i=n.n(a),o=n("q1tI"),s=n.n(o);t.a=function(e){var t=e.message;e.showclass;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"snackbar",className:"jsx-2457805773 show"},t),s.a.createElement(i.a,{id:"2457805773"},["#snackbar.jsx-2457805773{visibility:hidden;min-width:200px;margin-left:-125px;background-color:#d32f2f;color:#fff;text-align:center;border-radius:2px;padding:13px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;position:fixed;z-index:1;left:10%;bottom:44px;font-size:17px;}","#snackbar.show.jsx-2457805773{visibility:visible;-webkit-animation:fadein 0.5s,fadeout 0.5s 2.5s;-webkit-animation:fadein-jsx-2457805773 0.5s,fadeout-jsx-2457805773 0.5s 2.5s;animation:fadein-jsx-2457805773 0.5s,fadeout-jsx-2457805773 0.5s 2.5s;}","@-webkit-keyframes fadein{from.jsx-2457805773{bottom:0;opacity:0;}to.jsx-2457805773{bottom:30px;opacity:1;}}","@-webkit-keyframes fadein-jsx-2457805773{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@keyframes fadein-jsx-2457805773{from{bottom:0;opacity:0;}to{bottom:30px;opacity:1;}}","@-webkit-keyframes fadeout{from.jsx-2457805773{bottom:30px;opacity:1;}to.jsx-2457805773{bottom:0;opacity:0;}}","@-webkit-keyframes fadeout-jsx-2457805773{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@keyframes fadeout-jsx-2457805773{from{bottom:30px;opacity:1;}to{bottom:0;opacity:0;}}","@media screen and (max-width:768px){#snackbar.jsx-2457805773{left:30%;padding:10px;}}"]))}},XSpO:function(e,t){var n=9007199254740991,a="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",s=/^(?:0|[1-9]\d*)$/;var r,c,l=Object.prototype,d=l.hasOwnProperty,p=l.toString,f=l.propertyIsEnumerable,u=(r=Object.keys,c=Object,function(e){return r(c(e))});function x(e,t){var n=j(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&h(e)}(e)&&d.call(e,"callee")&&(!f.call(e,"callee")||p.call(e)==a)}(e)?function(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}(e.length,String):[],i=n.length,o=!!i;for(var s in e)!t&&!d.call(e,s)||o&&("length"==s||y(s,i))||n.push(s);return n}var b,m=function(e,t,n){for(var a=-1,i=Object(e),o=n(e),s=o.length;s--;){var r=o[b?s:++a];if(!1===t(i[r],r,i))break}return e};function g(e,t,n,a){return function(e,t){e&&m(e,t,E)}(e,function(e,i,o){t(a,n(e),i,o)}),a}function k(e){if(n=(t=e)&&t.constructor,a="function"==typeof n&&n.prototype||l,t!==a)return u(e);var t,n,a,i=[];for(var o in Object(e))d.call(e,o)&&"constructor"!=o&&i.push(o);return i}function y(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||s.test(e))&&e>-1&&e%1==0&&e<t}var j=Array.isArray;function h(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?p.call(e):"";return t==i||t==o}(e)}var w,v,O,S=(w=function(e,t,n){e[t]=n},O=function(e){return e},v=function(){return O},function(e,t){return g(e,w,v(t),{})});function E(e){return h(e)?x(e):k(e)}e.exports=S},lT5q:function(e,t,n){"use strict";var a=n("MX0m"),i=n.n(a),o=n("q1tI"),s=n.n(o),r=n("zUqs"),c=n("YFqc"),l=n.n(c),d=n("oZBK");t.a=function(e){var t=e.question,n=Object(d.b)(t);return s.a.createElement("div",{className:"jsx-957930783 landing"},s.a.createElement("div",{className:"jsx-957930783 landing-tag"}),s.a.createElement("div",{className:"jsx-957930783 landing-question"},t?t+"?":"loading..."),s.a.createElement("div",{className:"jsx-957930783 landing-details"},s.a.createElement("div",{className:"jsx-957930783 landing-stat-container"},s.a.createElement("div",{className:"jsx-957930783 details"},s.a.createElement(l.a,{href:"/topic/".concat(n)},s.a.createElement("span",{className:"jsx-957930783 option-considered "},s.a.createElement(r.j,null),"See All Options"))))),s.a.createElement(i.a,{id:"957930783"},[".landing-stat-container.jsx-957930783{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative;top:16px;}",".option-considered.jsx-957930783{font-size:0.9em;padding-right:10px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-weight:600;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;text-transform:uppercase;color:rgb(91,56,141);}",".option-considered.jsx-957930783:hover{color:rgb(91,56,141);cursor:pointer;}",".option-considered-text.jsx-957930783{display:block;font-size:0.8em;width:60%;color:#8d959c;margin-right:15px;padding-right:13px;font-weight:400;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;text-transform:uppercase;}",".not.jsx-957930783{display:none;}",".landing.jsx-957930783{width:100%;background:#fdfdfd !important;margin-top:1px;box-sizing:border-box;font-size:15px;font-family:inherit;border:1px solid transparent;}",".time-added.jsx-957930783{padding-right:3px;}",".landing-tag.jsx-957930783{padding:10px 20px;margin-bottom:5px;margin-left:15px;margin-top:15px;}",".tagged.jsx-957930783{display:inline-block;margin-right:10px;padding-right:5px;text-transform:uppercase;font-size:1em;color:rgb(91,56,141);font-weight:600;font-family:inherit;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;}",".landing-question.jsx-957930783{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.2em;font-weight:700;color:rgb(91,56,141);font-family:Cabin;}",".landing-details.jsx-957930783{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:30px;}",".details.jsx-957930783{padding:3px 10px;margin-top:30px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;}","@media screen and (min-width:900px){.landing.jsx-957930783{max-width:100%;background:#fff !important;margin-top:1px auto;box-sizing:border-box;font-family:inherit;padding:24px 0;border:1px solid #e6e8eb;padding-left:48px;padding-right:48px;}.landing-question.jsx-957930783{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:40px;font-weight:700;font-family:Cabin;}}","@media screen and (min-width:768px) and (max-width:900px){.landing-question.jsx-957930783{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}","@media screen and (max-width:768px){.landing-question.jsx-957930783{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:25px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}","@media only screen and (min-width:360px) and (max-width:600px){.landing-question.jsx-957930783{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.landing-details.jsx-957930783 .details.jsx-957930783{padding:3px 9px;margin-top:30px;color:#637381;font-size:3.2vw;font-weight:600;text-transform:uppercase;}}"]))}},oZBK:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});n("EItT");function a(e){return e.replace(/\s+/g,"-")}function i(e){return e.replace(/-/g," ")}},pPbJ:function(e,t,n){"use strict";var a=n("aAFL");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n("8KHB"))}},[["51sR","5d41","9da1"]]]);