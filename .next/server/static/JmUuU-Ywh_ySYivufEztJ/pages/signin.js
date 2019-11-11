module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "42Y9":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DB6d");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "DB6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/facebookCustomButton.js



var facebookCustomButton_FacebookLoginButton = function FacebookLoginButton(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("button", {
    className: "jsx-422926688" + " " + "loginBtn loginBtn--facebook"
  }, props.action), external_react_default.a.createElement(style_default.a, {
    id: "422926688"
  }, [".loginBtn.jsx-422926688{box-sizing:border-box;position:relative;width :250px;margin-top:0.8em;margin-bottom :1.5em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:0.2em;font-size:1em;color:#fff;font-weight :600;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);}", ".loginBtn.jsx-422926688:before{content :\"\", box-sizing :border-box;position :absolute;top :0;left :0;width :34px;height :100%;}", ".loginBtn.jsx-422926688:focus{outline :none;}", ".loginBtn.jsx-422926688:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1);}", ".loginBtn--facebook.jsx-422926688{background-color :#4C69BA;background-image :linear-gradient(#4C69BA,#3B55A0);text-shadow :0 -1px 0 #354C8C;}", ".loginBtn--facebook.jsx-422926688:before{border-right :#364e92 1px solid;background :url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;}", ".loginBtn--facebook.jsx-422926688:hover,.loginBtn--facebook.jsx-422926688:focus{background-color :#5B7BD5;background-image :linear-gradient(#5B7BD5,#4864b1);}"]));
};

/* harmony default export */ var facebookCustomButton = (facebookCustomButton_FacebookLoginButton);
// CONCATENATED MODULE: ./components/googleCustomButton.js



var googleCustomButton_GoogleCustomButton = function GoogleCustomButton(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("button", {
    className: "jsx-3588572961" + " " + "loginBtn loginBtn--google"
  }, " ", props.action, " "), external_react_default.a.createElement(style_default.a, {
    id: "3588572961"
  }, [".loginBtn.jsx-3588572961{box-sizing:border-box;position:relative;width :250px;margin-bottom:0.8em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:6px;font-size:16px;color:#637381;font-weight :600;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);}", ".loginBtn.jsx-3588572961:before{content :\"\", box-sizing :border-box;position :absolute;top :0;left :0;width :34px;height :100%;}", ".loginBtn.jsx-3588572961:focus{outline :none;}", ".loginBtn.jsx-3588572961:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1);}", ".loginBtn--google.jsx-3588572961{background :#fff;}", ".loginBtn--google.jsx-3588572961:before{border-right :#BB3F30 1px solid;background :url(\"/static/icon-google.png\") 6px 6px no-repeat;}", ".loginBtn--google.jsx-3588572961:hover,.loginBtn--google.jsx-3588572961: focus.jsx-3588572961{background :#E74B37;}"]));
};

/* harmony default export */ var googleCustomButton = (googleCustomButton_GoogleCustomButton);
// EXTERNAL MODULE: ./apiRequests/apiRequests.js
var apiRequests = __webpack_require__("rhLc");

// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__("rCsO");
var external_react_google_login_default = /*#__PURE__*/__webpack_require__.n(external_react_google_login_);

// EXTERNAL MODULE: external "react-facebook-login"
var external_react_facebook_login_ = __webpack_require__("42Y9");
var external_react_facebook_login_default = /*#__PURE__*/__webpack_require__.n(external_react_facebook_login_);

// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// CONCATENATED MODULE: ./pages/signin.js






















var signin_Signin =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Signin, _Component);

  function Signin() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Signin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      email: "",
      password: "",
      error: "",
      loading: false,
      showClass: false,
      msg: "",
      err: false //
      //myloading: true

    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "openBtn", function () {
      //alert("click");
      _this.setState({
        showClass: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeBtn", function () {
      _this.setState({
        showClass: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDivClose", function (e) {
      if (e.target === _this.div) {
        _this.setState(function (previousState) {
          return {
            showClass: !previousState
          };
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleForgot", function (e) {
      e.preventDefault();
      Object(apiRequests["ob" /* forgotPasswordFunction */])(_this.state.email).then(function (result) {
        _this.setState({
          msg: "Password Sent to your email",
          err: false
        });
      }).catch(function (error) {
        _this.setState({
          msg: error.response.data.msg,
          err: true
        });
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (_ref) {
      var _ref$target = _ref.target,
          name = _ref$target.name,
          value = _ref$target.value;

      _this.setState(Object(defineProperty["a" /* default */])({}, name, value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      _this.setState({
        loading: true
      });

      Object(apiRequests["pb" /* login */])(email.trim(), password).then(function (result) {
        if (result) {
          localStorage.setItem("user_token", result.data.result.token);
          localStorage.setItem("user_details", stringify_default()(result.data.data)); //this.props.closeLogin();

          window.location.reload(); //Router.push("/");
        } // console.log(result.data.data)

      }).catch(function (error) {
        if (error.response.status === 400) {
          _this.setState({
            error: error.response.data,
            loading: false
          });
        }
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Signin, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var user_data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return JSON.parse(localStorage.getItem("user_details"));

              case 2:
                user_data = _context.sent;

                if (user_data !== null) {
                  router_default.a.push("/");
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var responseGoogle = function responseGoogle(response) {
        if (response.tokenId) {
          var _response$profileObj = response.profileObj,
              _email = _response$profileObj.email,
              imageUrl = _response$profileObj.imageUrl,
              givenName = _response$profileObj.givenName;

          var username = _email.substring(0, _email.lastIndexOf("@"));

          Object(apiRequests["rb" /* mySocial */])(_email, username, "", imageUrl, givenName).then(function (result) {
            // console.log(result.data.data._id)
            response.profileObj._id = result.data.data._id;
            response.profileObj.username = username; //result.data.data._id
            //  localStorage.setItem("user_token", response.tokenId);

            localStorage.setItem("user_token", result.data.result.token);
            localStorage.setItem("user_details", stringify_default()(response.profileObj));
            window.location.reload();
          }).catch(function (error) {
            // console.log(error.response);
            _this2.setState({
              error: error.response.data.msg
            });
          });
        }
      };

      var responseFacebook = function responseFacebook(response) {
        console.log(response);
        var profileObj = {};
        var em = response.email;
        profileObj.email = response.email;
        profileObj.imageUrl = response.picture.data.url;
        profileObj.givenName = response.name;
        profileObj.username = em.substring(0, em.lastIndexOf("@"));
        var email = profileObj.email,
            imageUrl = profileObj.imageUrl,
            givenName = profileObj.givenName,
            username = profileObj.username;
        Object(apiRequests["rb" /* mySocial */])(email, username, "", imageUrl, givenName).then(function (result) {
          console.log(result); // console.log(result.data.data._id)

          profileObj._id = result.data.data._id; // profileObj.username = username;
          //result.data.data._id
          // localStorage.setItem("user_token", response.userID);

          localStorage.setItem("user_token", result.data.result.token);
          localStorage.setItem("user_details", stringify_default()(profileObj));
          window.location.reload();
        }).catch(function (error) {
          console.log(error); // console.log(error.response);
          // this.setState({
          //   error: error.response.data.msg
          // });
        });
      };

      var _this$state2 = this.state,
          email = _this$state2.email,
          password = _this$state2.password,
          error = _this$state2.error,
          loading = _this$state2.loading,
          showClass = _this$state2.showClass,
          msg = _this$state2.msg,
          err = _this$state2.err;
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.handleDivClose(e);
        },
        id: showClass ? "overlayShow" : "overlay",
        ref: function ref(el) {
          return _this2.div = el;
        }
      }, external_react_default.a.createElement("div", {
        className: "custom-sign"
      }, external_react_default.a.createElement("div", {
        className: "form-card"
      }, external_react_default.a.createElement("em", {
        className: err ? "err" : "suc"
      }, msg ? msg : ""), external_react_default.a.createElement("span", {
        className: "close-iconn",
        onClick: this.closeBtn
      }, "\xD7"), external_react_default.a.createElement("strong", {
        style: {
          marginBottom: "5px",
          fontFamily: "Cabin"
        }
      }, "Forgot Password"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
        type: "email",
        className: "input",
        value: email,
        name: "email",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Enter your email",
        autoFocus: true
      })), external_react_default.a.createElement("button", {
        className: "btn-log",
        onClick: function onClick(e) {
          return _this2.handleForgot(e);
        }
      }, "Submit")))), external_react_default.a.createElement("div", {
        className: "jsx-3459788843" + " " + "custom-signin"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("img", {
        src: "/static/new-icon.png",
        alt: "logo",
        width: 70,
        className: "jsx-3459788843" + " " + "img-logo-style"
      })), external_react_default.a.createElement("div", {
        className: "jsx-3459788843" + " " + "form-card"
      }, external_react_default.a.createElement("em", {
        style: {
          color: "rgb(96, 51, 141)",
          fontWeight: 600
        },
        className: "jsx-3459788843"
      }, "Welcome back!"), external_react_default.a.createElement(external_react_facebook_login_default.a, {
        appId: "538947710271871",
        fields: "name,email,picture",
        cssClass: "loginBtn loginBtn--facebook",
        icon: "fa-facebook",
        callback: responseFacebook,
        textButton: "Sign in with Facebook"
      }), external_react_default.a.createElement(external_react_google_login_default.a, {
        clientId: config["b" /* GOOGLE_CLIENT_KEY */] //go to the config folder to add your client key
        ,
        onSuccess: responseGoogle,
        onFailure: responseGoogle,
        className: "google-auth-button",
        buttonText: "Sign in with Google"
      }), external_react_default.a.createElement("span", {
        style: {
          color: "#637381",
          fontWeight: 400,
          fontFamily: "inherit"
        },
        className: "jsx-3459788843"
      }, "Or"), error && external_react_default.a.createElement("em", {
        style: {
          color: "red"
        },
        className: "jsx-3459788843"
      }, " ", error, " "), external_react_default.a.createElement("form", {
        className: "jsx-3459788843"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3459788843"
      }, external_react_default.a.createElement("input", {
        type: "email",
        value: email,
        name: "email",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Email",
        autoFocus: true,
        className: "jsx-3459788843" + " " + "input"
      })), external_react_default.a.createElement("div", {
        className: "jsx-3459788843"
      }, external_react_default.a.createElement("input", {
        type: "password",
        value: password,
        name: "password",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Password",
        className: "jsx-3459788843" + " " + "input"
      })), external_react_default.a.createElement("button", {
        onClick: this.handleSubmit,
        disabled: !password,
        className: "jsx-3459788843" + " " + "btn-login"
      }, loading ? external_react_default.a.createElement("i", {
        className: "jsx-3459788843" + " " + "fa fa-spinner fa-spin"
      }) : "Login"), external_react_default.a.createElement("div", {
        style: {
          textAlign: "center",
          fontFamily: "Cabin",
          color: "#637381",
          padding: "2px",
          fontSize: "12px"
        },
        className: "jsx-3459788843"
      }, external_react_default.a.createElement("a", {
        style: {
          cursor: "pointer"
        },
        onClick: this.openBtn,
        className: "jsx-3459788843"
      }, "Forgot password?")))), external_react_default.a.createElement("div", {
        className: "jsx-3459788843" + " " + "already-registered"
      }, "Ooh I haven't signed up!", external_react_default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.props.openSignup();
        },
        style: {
          marginLeft: "5px",
          textDecoration: "none"
        },
        className: "jsx-3459788843" + " " + "join"
      }, "Join")), external_react_default.a.createElement(style_default.a, {
        id: "3459788843"
      }, [".suc{color:green;}", ".err{color:red;}", ".close-iconn{position:absolute;top:25px;left:80%;font-size:80px !important;color:#fdfdfd;cursor:pointer;}", ".google-auth-button{width:250px !important;border-radius:6px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1) !important;box-sizing:border-box !important;position:relative;left:0px !important;height:38px;top:5px !important;border-radius:5px !important;text-align:center !important;margin-top:-15px !important;margin-bottom:10px !important;}", ".google-auth-button:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,0.1) !important;}", ".google-auth-button>span{color:#000 !important;font-size:16px !important;font-weight:600 !important;font-family:\"Cabin\" !important;white-space:nowrap !important;}", ".google-auth-button>div{height:20px !important;margin-top:-20px !important;margin-left:7px !important;}", ".custom-signin .form-card{background:#fdfdfd;width:400px;min-height:380px;-webkit-box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;margin-top:-20px;}", ".custom-signin{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;min-height:100%;-webkit-transition:2s;transition:2s;}", ".custom-sign{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;min-height:100%;-webkit-transition:2s;transition:2s;}", ".custom-sign .form-card{background:#fdfdfd;min-width:300px;min-height:200px;-webkit-box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;-webkit-transition:2s;transition:2s;}", ".custom-signin .form-card div{padding:5px 10px;margin-top:6px;}", ".input{padding:10px;width:250px !important;height:38px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;font-family:inherit;line-height:2px;font-size:1em;font-weight:600;}", "::-webkit-input-placeholder{font-family:inherit;}", "::-moz-placeholder{font-family:inherit;}", ":-ms-input-placeholder{font-family:inherit;}", "::placeholder{font-family:inherit;}", ".btn-login{width:100px;height:45px;border:0;border-radius:6px;cursor:pointer;background-color:rgb(96,51,141);text-transform:uppercase;font-family:inherit;font-size:16px;font-weight:200;color:#f2f2f2;outline:0;display:relative;margin-left:85px;margin-top:9px;}", ".btn-login:hover{background-color:#e6ecf0;color:rgb(96,51,141);border:2px solid rgb(96,51,141);padding:0;}", ".btn-login:disabled{cursor:not-allowed;background:#e6e8eb;color:#8d959c;}", "a{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}", ".img-logo-style{position:absolute;top:32px;}", ".already-registered{text-align:center;font-family:inherit;margin:20px 0px;}", ".join{cursor:pointer !important;color:rgb(91,56,141) !important;font-weight:600 !important;}", ".loginBtn>i{position:relative;left:-20px;}", ".loginBtn{box-sizing:border-box;position:relative;width:250px;margin-top:0.8em;margin-bottom:1.5em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:0.2em;font-size:15px;color:#fff;font-weight:600;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);font-family:inherit;}", ".loginBtn:before{content:\"\";box-sizing:border-box;position:absolute;top:0;left:0;width:34px;height:100%;}", ".loginBtn:focus{outline:none;}", ".loginBtn:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,0.1);}", ".loginBtn--facebook{background-color:#4c69ba;background-image:linear-gradient(#4c69ba,#3b55a0);text-shadow:0 -1px 0 #354c8c;}", ".loginBtn--facebook:before{border-right:#364e92 1px solid;}", ".loginBtn--facebook:hover,.loginBtn--facebook:focus{background-color:#5b7bd5;background-image:linear-gradient(#5b7bd5,#4864b1);}", "#overlay{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", "#overlayShow{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".btn-log{width:100px;height:45px;border:0;border-radius:6px;cursor:pointer;background-color:rgb(96,51,141);font-family:inherit;font-size:16px;font-weight:200;color:#f2f2f2;outline:0;display:relative;margin-top:9px;}", "@media screen and (max-width:767px){.custom-signin .form-card{width:300px;height:250px;}.img-logo-style{position:absolute;top:24px;}input[type=\"text\"],input[type=\"password\"]{padding:5px;}.custom-signin .form-card div{padding:5px 10px;margin-top:10px;}.already-registered{margin:4px 0px;}}"])));
    }
  }]);

  return Signin;
}(external_react_["Component"]);

/* harmony default export */ var signin = __webpack_exports__["default"] = (signin_Signin);

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "OcYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLIENT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_CLIENT_KEY; });
// const API_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://srv.toprating.tk"
//     : "http://localhost:5000";
// export default API_URL;
// export const CLIENT_API =
//   process.env.NODE_ENV === "production"
//     ? `https://toprating.tk`
//     : `http://localhost:3001`;
// export const GOOGLE_CLIENT_KEY = `597561721865-s08p7p1gm09ripitr3a1h3fg34q1pfju.apps.googleusercontent.com`; //add your google api key here
var API_URL = "https://toprating790.herokuapp.com";
/* harmony default export */ __webpack_exports__["c"] = (API_URL);
var CLIENT_API =  true ? "https://toprating.tk" : undefined;
var GOOGLE_CLIENT_KEY = "597561721865-s08p7p1gm09ripitr3a1h3fg34q1pfju.apps.googleusercontent.com"; //add your google api key here

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rhLc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return _GET_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return _GET_RECS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return _GET_QUESTION_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GET_SPECIFIC_TOPIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_RELATED_TOPICS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return mySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return mySocial; });
/* unused harmony export AddOption */
/* unused harmony export getOption */
/* unused harmony export Add */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return addAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return updateUser; });
/* unused harmony export userGoogleSignin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return NewAddTopic; });
/* unused harmony export getAllTopics */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddNewOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return forgotPasswordFunction; });
/* unused harmony export checkIfUserExist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return user_recommendation; });
/* unused harmony export checkIfTagExist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddUserReactionToOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return GetUserReactionToLikeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return GetUserReactionToDisLikeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return MarkOptionAsSpam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return SaveUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return SaveProHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return SaveConHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return GetOptionUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return GetProUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return GetConUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return GetRecHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return UpdateOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return UpdatePro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return UpdateCon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return GetQuestionUpdatedAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return GetQuestionNumOfRecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GET_USER_KARMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GET_USER_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return USER_HAS_SEEN_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GET_SPECIFIC_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return VIEW_A_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GET_USER_WHO_ADDED_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GET_SPECIFIC_QUESTION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_ALL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return SPECIFIC_QUESTION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_OPTION_PRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_OPTION_CON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_OPTION_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_OPTION_PRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_OPTION_Con; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FETCH_OPTION_REC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GET_SPECIFIC_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return SortRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return SortQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return GetNextQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return GetAQuestionFromQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return GetProDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return GetConDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GetOptionPros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return GetOptionCons; });
/* unused harmony export getUserKarmaAndDateJoined */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return GetQuestionTotalRecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return GetOptionSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddOptionSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FetchAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FetchSpecificQuestionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddOptionImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return GetTopicRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return FollowQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return GetFollowedQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return GetTopicsByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return GetOtherTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return ManageTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return GetQuestionUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return FilterTopicsByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return GetQuestionsAddedByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CheckIfUserAddedQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CheckIfQuestionHasBeenRejected; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OcYQ");

 //Welcome, all requests to the server are made here
//======================================================================================================

var Auth = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/auth");
var URL = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/topic");
var newOption = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/add/topic");

var _optionRoute = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option");

var _Option_Rec = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/add/recommendation");

var _forgotPass = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/auth/forgot/password");

var _GET_TOPICS = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/get/topics");

var _addNewOption = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/add");

var _GET_RECS = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/get/recommendations");
var _GET_QUESTION_ACTIVITY = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/get/questionActivity");
var GET_SPECIFIC_TOPIC_URL = function GET_SPECIFIC_TOPIC_URL(name) {
  return "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/topic/").concat(name);
};
var GET_RELATED_TOPICS_URL = function GET_RELATED_TOPICS_URL(name) {
  return "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"], "/option/get/related/").concat(name);
}; //========================================================================================================

/* End of production Apis */

var addTopicURL = URL + "/add";
var editTopicURL = URL + "/edit";
var getTopicURL = URL + "/get";
var addAvata = URL + "/upload/avatar";
var updateProfile = Auth + "/profile/edit";
var googleUserSignin = Auth + "/google/signin";
var checkIfUserExistUrl = "".concat(Auth, "/check");
var login = function login(email, password) {
  var GetUserAuthToken = function GetUserAuthToken() {
    return localStorage.getItem("user_token");
  };

  var axiosConfig = {
    headers: {
      "x-access-request-source": "rating",
      "x-access-token": GetUserAuthToken()
    }
  };
  var holder = {
    email: email,
    password: password
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(Auth, "/login"), holder, axiosConfig);
};
var mySignup = function mySignup(email, username, password, imageUrl, displayname, tokenId) {
  var type = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "top-rating";
  var holder = {
    email: email,
    username: username,
    password: password,
    displayname: displayname,
    image: imageUrl,
    tokenid: tokenId,
    type: type
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(Auth, "/signup"), holder);
};
var mySocial = function mySocial(email, username, password, imageUrl, displayname) {
  var holder = {
    email: email,
    username: username,
    password: password,
    displayname: displayname,
    image: imageUrl
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(Auth, "/social_login"), holder);
};
var AddOption = function AddOption(id, option, link) {
  var holder = {
    id: id,
    option: option,
    link: link
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(editTopicURL, holder);
};
var getOption = function getOption() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTopicURL);
};
var Add = function Add(_question, _tag) {
  var holder = {
    question: _question,
    tag: _tag
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(addTopicURL, holder);
};
var addAvatar = function addAvatar(url, id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(addAvata, {
    url: url,
    id: id
  });
};
var updateUser = function updateUser(id, email, displayName, userName, password) {
  var _holder = {
    email: email,
    displayName: displayName,
    userName: userName,
    password: password,
    id: id
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(updateProfile, _holder);
};
var userGoogleSignin = function userGoogleSignin(token) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(googleUserSignin, token);
};
var NewAddTopic = function NewAddTopic(question, tag, userId, socketId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(newOption, {
    question: question,
    tag: tag,
    userId: userId,
    socketId: socketId
  });
};
var getAllTopics = function getAllTopics() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_GET_TOPICS);
};
var AddNewOption = function AddNewOption(id, option, link, mediaUrl, price) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_addNewOption, {
    id: id,
    option: option,
    link: link,
    mediaUrl: mediaUrl,
    price: price
  });
};
var forgotPasswordFunction = function forgotPasswordFunction(_email) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_forgotPass, {
    _email: _email
  });
};
var checkIfUserExist = function checkIfUserExist(_email) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(checkIfUserExistUrl, {
    _email: _email
  });
};
var user_recommendation = function user_recommendation(holder) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_Option_Rec, holder);
};
var checkIfTagExist = function checkIfTagExist(tag) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/tag?tag=").concat(tag));
};
var AddUserReactionToOption = function AddUserReactionToOption(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/add/option_reaction"), data);
};
var GetUserReactionToLikeOption = function GetUserReactionToLikeOption(id, option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/get/likeoption_reaction"), {
    userid: id,
    option: option
  });
};
var GetUserReactionToDisLikeOption = function GetUserReactionToDisLikeOption(id, option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/get/dislikeoption_reaction"), {
    userid: id,
    option: option
  });
};
var MarkOptionAsSpam = function MarkOptionAsSpam(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/markAsSpam"), data);
}; //OptionUpdateHistory

var SaveUpdateHistory = function SaveUpdateHistory(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/save/optionUpdateHistory"), data);
}; //ProUpdateHistory

var SaveProHistory = function SaveProHistory(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/save/proUpdateHistory"), data);
}; //ConUpdateHistory

var SaveConHistory = function SaveConHistory(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/save/conUpdateHistory"), data);
}; //GetOptionUpdateHistory

var GetOptionUpdateHistory = function GetOptionUpdateHistory(option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/optionUpdateHistory?option=").concat(option));
}; //GetProUpdateHistory

var GetProUpdateHistory = function GetProUpdateHistory(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/proUpdateHistory?id=").concat(id));
}; //GetConUpdateHistory

var GetConUpdateHistory = function GetConUpdateHistory(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/conUpdateHistory?id=").concat(id));
};
var GetRecHistory = function GetRecHistory(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/user/rec-history?id=").concat(id));
};
var UpdateOption = function UpdateOption(id, uid, option, link) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_optionRoute, "/update/option?id=").concat(id, "&uid=").concat(uid, "&option=").concat(option, "&link=").concat(link));
};
var UpdatePro = function UpdatePro(id, uid, proTitle, proDescription, option, optionId, question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_optionRoute, "/update/pro?id=").concat(id, "&uid=").concat(uid, "&protitle=").concat(proTitle, "&description=").concat(proDescription, "&optionId=").concat(optionId, "&option=").concat(option, "&question=").concat(question));
};
var UpdateCon = function UpdateCon(id, uid, conTitle, conDescription, option, optionId, question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_optionRoute, "/update/con?id=").concat(id, "&uid=").concat(uid, "&contitle=").concat(conTitle, "&description=").concat(conDescription, "&optionId=").concat(optionId, "&option=").concat(option, "&question=").concat(question));
}; //Pro and con update history will come here

var GetQuestionUpdatedAt = function GetQuestionUpdatedAt(question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/question/updatedAt?question=").concat(question));
};
var GetQuestionNumOfRecs = function GetQuestionNumOfRecs(option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/numOfRecs?option=").concat(option));
};
var GET_USER_KARMA = function GET_USER_KARMA(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/user/karma?id=").concat(id));
};
var GET_USER_NOTIFICATION = function GET_USER_NOTIFICATION(userid) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/user/notification?id=").concat(userid));
};
var USER_HAS_SEEN_NOTIFICATION = function USER_HAS_SEEN_NOTIFICATION(socketId, userId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_optionRoute, "/user/hasViewedNotification?socketId=").concat(socketId, "&id=").concat(userId));
};
var GET_SPECIFIC_QUESTION = function GET_SPECIFIC_QUESTION(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/question?id=").concat(id));
};
var VIEW_A_USER = function VIEW_A_USER(username) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(Auth, "/view/user?username=").concat(username));
};
var GET_USER_WHO_ADDED_QUESTION = function GET_USER_WHO_ADDED_QUESTION(question) {
  //Gets the username of User who added question
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/user/username?question=").concat(question));
};
var GET_SPECIFIC_QUESTION_OPTIONS = function GET_SPECIFIC_QUESTION_OPTIONS(question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/question/options?question=").concat(question));
};
var GET_ALL_OPTIONS = function GET_ALL_OPTIONS() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/all/options"));
}; //Used in the QuestionCard

var SPECIFIC_QUESTION_OPTIONS = function SPECIFIC_QUESTION_OPTIONS(question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/specific-question/options?question=").concat(question));
}; //Used in TopicviewPopupModal to add pro to optionProModel

var ADD_OPTION_PRO = function ADD_OPTION_PRO(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/add/option/pro"), data);
}; //Used in TopicviewPopupModal to add pro to optionProModel

var ADD_OPTION_CON = function ADD_OPTION_CON(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/add/option/con"), data);
}; //Get an option detail

var GET_OPTION_DETAILS = function GET_OPTION_DETAILS(option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/option/details?option=").concat(option));
};
var FETCH_OPTION_PRO = function FETCH_OPTION_PRO(option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/fetch/option/pro?option=").concat(option));
};
var FETCH_OPTION_Con = function FETCH_OPTION_Con(option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/fetch/option/con?option=").concat(option));
};
var FETCH_OPTION_REC = function FETCH_OPTION_REC(option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/fetch/option/rec?option=").concat(option));
}; //Fetch all topics using the optioni as a query

var GET_SPECIFIC_TOPIC = function GET_SPECIFIC_TOPIC(name) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/topic/").concat(name));
}; //Sorting of question and Rec card are here

var SortRecommendations = function SortRecommendations(period) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/sort/recs?by=").concat(period));
};
var SortQuestions = function SortQuestions(period) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/sort/topics?by=").concat(period));
};
var GetNextQuestion = function GetNextQuestion(question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/next-question?question=").concat(question));
};
var GetAQuestionFromQuestions = function GetAQuestionFromQuestions() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/questions"));
}; //Get

var GetProDetail = function GetProDetail(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/option-pro-detail?id=").concat(id));
};
var GetConDetail = function GetConDetail(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/option-con-detail?id=").concat(id));
}; //Get option pros

var GetOptionPros = function GetOptionPros(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/option-pros?id=").concat(id));
}; //Get option cons

var GetOptionCons = function GetOptionCons(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/option-cons?id=").concat(id));
}; //Get userCreatedTime and Karma

var getUserKarmaAndDateJoined = function getUserKarmaAndDateJoined(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/user-karma?id=").concat(id));
}; //Get a questions total rec

var GetQuestionTotalRecs = function GetQuestionTotalRecs(question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/question-recs?question=").concat(question));
}; //fetch optionSpecs

var GetOptionSpecs = function GetOptionSpecs(option) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/option-specs?option=").concat(option));
}; //Add optionSpecs

var AddOptionSpec = function AddOptionSpec(payload) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/add/option-spec"), payload);
}; //Get a user's profile avatar

var FetchAvatar = function FetchAvatar(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/fetch/user-avatar?id=").concat(id));
}; //Get Question Id

var FetchSpecificQuestionId = function FetchSpecificQuestionId(question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/specific-question-id?question=").concat(question));
}; //Add or update option Image

var AddOptionImage = function AddOptionImage(optionId, imageUrl) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/add/option-image"), {
    optionId: optionId,
    imageUrl: imageUrl
  });
}; //Get question recommendations

var GetTopicRecommendations = function GetTopicRecommendations(topic) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get-topic-recs?topic=").concat(topic));
}; //Follow a question

var FollowQuestion = function FollowQuestion(questionId, userId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/follow-question"), {
    questionId: questionId,
    userId: userId
  });
}; //Get followed  question

var GetFollowedQuestion = function GetFollowedQuestion(questionId, userId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get-followed-question?questionId=").concat(questionId, "&userId=").concat(userId));
}; //Get recommendations by tag

var GetTopicsByTag = function GetTopicsByTag(tag, filter) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get-topics-by-tag?tag=").concat(tag));
}; //Get other tags

var GetOtherTags = function GetOtherTags(tag) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get-other-popular-tags?tag=").concat(tag));
}; //Mangage Tag

var ManageTag = function ManageTag(questionId, tag, question) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(_optionRoute, "/manage-tag"), {
    questionId: questionId,
    tag: tag,
    question: question
  });
}; //GetQuestionUpdateHistory

var GetQuestionUpdateHistory = function GetQuestionUpdateHistory(questionId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get/question-update-history?questionId=").concat(questionId));
}; //Get recommendations by tag

var FilterTopicsByTag = function FilterTopicsByTag(tag) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/filter-tags?filter=").concat(tag));
}; //Get questionsAdded by user

var GetQuestionsAddedByUser = function GetQuestionsAddedByUser(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/get-questions-added?id=").concat(id));
}; //Check if user added a question

var CheckIfUserAddedQuestion = function CheckIfUserAddedQuestion(question, id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/check-if-user-added-question?question=").concat(question, "&id=").concat(id));
}; //Check if question has been rejected

var CheckIfQuestionHasBeenRejected = function CheckIfQuestionHasBeenRejected(question, id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_optionRoute, "/check-if-question-rejected?question=").concat(question));
};

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });