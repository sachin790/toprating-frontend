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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "A3Na":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Cg2A");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("rhLc");
/* harmony import */ var _lib_dateConversion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("WaSu");













var PopupModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(PopupModal, _Component);

  function PopupModal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, PopupModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(PopupModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      optionImage: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(PopupModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //Get this
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__[/* GET_OPTION_DETAILS */ "r"])(this.props.option).then(function (result) {
        _this2.setState({
          optionImage: result.data.mediaUrl[0]
        });
      }).catch(function (err) {
        _this2.setState({
          err: err.response
        }); // console.log(err);

      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          createdAt = _this$props.createdAt,
          option = _this$props.option,
          username = _this$props.username,
          pro = _this$props.pro,
          con = _this$props.con,
          experience = _this$props.experience,
          userImage = _this$props.userImage;
      var url = userImage ? userImage : "/static/gravatar2.png";

      var _date = new Date(createdAt);

      var newDate = Object(_lib_dateConversion__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(), _date);
      var tempBgImge = this.state.optionImage ? this.state.optionImage : "/static/image.png";
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-theme"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "bg-theme"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          // border: "1px solid red",
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(   180deg,   rgba(28, 41, 62, 0.2) 0,rgba(28, 41, 62, 0.3) 30%,rgba(7, 15, 29, 0.9))"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]])
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: tempBgImge,
        alt: "bg-image",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-bg-img"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          zIndex: 2000,
          marginTop: "-74px"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]])
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "user-chip"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-question-info"
      }, username, " recommends"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-question-inf"
      }, option)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "main-section-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-date"
      }, "Last updated ", newDate, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-experience"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          paddingTop: "10px",
          paddingBottom: "10px"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-experience-title"
      }, "My Experience"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-experience-content"
      }, experience)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-recommendation"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, pro.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          marginTop: "20px"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-reason-i-recommend"
      }, "Reasons I recommend it"), pro.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: index,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-pro"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "rec-card-content-pro"
        }, "+"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "rec-item"
        }, " " + item));
      })) : ""), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, con.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-reason-i-recommend"
      }, "Reasons I wouldn't recommend this"), con.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: index,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "modal-con"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "rec-card-content-con"
        }, "\u2212"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["3615822989", [url]]]) + " " + "rec-item"
        }, " " + item));
      })) : "")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3615822989",
        dynamic: [url]
      }, [".modal-theme.__jsx-style-dynamic-selector{position:relative;width:100%;height:100vh;left:0;box-sizing:border-box;background:#fdfdfd;border-radius:1px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);}", ".clear-fix.__jsx-style-dynamic-selector{border:1px solid blue;}", ".main-section-container.__jsx-style-dynamic-selector{margin-top:10px;position:relative;}", ".bg-theme.__jsx-style-dynamic-selector{overflow:hidden;width:100%;height:250px;background-image:linear-gradient( 180deg, rgba(28,41,62,0.2) 0, rgba(28,41,62,0.3) 30%, rgba(7,15,29,0.9) );background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".modal-content.__jsx-style-dynamic-selector{min-height:100%;}", ".modal-experience.__jsx-style-dynamic-selector{padding-left:30px;padding-right:10px;border:0;font-size:14px;margin-bottom:10px;}", ".modal-bg-img.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}", ".modal-date.__jsx-style-dynamic-selector{padding-left:30px;margin-top:15px;margin-bottom:15px;color:#8d959c;font-size:11px;}", ".modal-pro.__jsx-style-dynamic-selector{padding-left:30px;padding-right:10px;margin-bottom:20px;font-size:16px;color:#595959;}", ".modal-con.__jsx-style-dynamic-selector{padding-left:30px;padding-right:10px;font-size:16px;color:#595959;}", ".user-chip.__jsx-style-dynamic-selector{background-image:url(".concat(url, ");background-repeat:no-repeat;background-position:center;background-size:cover;width:60px;height:60px;border-radius:60px;margin-left:30px;margin-top:10px;overflow:hidden;border:1px solid #fdfdfd;}"), ".modal-reason-i-recommend.__jsx-style-dynamic-selector{padding-left:30px;font-weight:600;font-size:16px;}", ".modal-fix.__jsx-style-dynamic-selector{margin-top:10px;padding:10px;}", ".modal-question-info.__jsx-style-dynamic-selector{margin-left:94px;margin-top:-56px;color:#fff;font-size:22px;font-weight:600;}", ".modal-question-inf.__jsx-style-dynamic-selector{margin-left:94px;color:#fff;font-size:21px;font-weight:600;}", ".modal-question-info.modal-user-name.__jsx-style-dynamic-selector{margin-bottom:10px;}", ".modal-experience-content.__jsx-style-dynamic-selector{font-size:16px;color:#595959;font-family:\"Cabin\";}", ".rec-card-content-con.__jsx-style-dynamic-selector,.rec-card-content-pro.__jsx-style-dynamic-selector{font-weight:bold;margin-right:6px;font-size:40px;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;text-transform:uppercase;}", ".rec-card-content-con.__jsx-style-dynamic-selector{color:#cb1a4a;}", ".rec-card-content-pro.__jsx-style-dynamic-selector{color:#1d9127;}", "@media (min-width:768px) and (max-width:900px){.modal-theme.__jsx-style-dynamic-selector{max-width:650px;}}", "@media (min-width:900px){.modal-theme.__jsx-style-dynamic-selector{max-width:625px;height:100vh;margin-left:-6.9%;}.modal-experience.__jsx-style-dynamic-selector{font-size:1em;}.modal-date.__jsx-style-dynamic-selector{font-size:16px;padding-top:20px;padding-bottom:5px;color:#595959;}.rec-item.__jsx-style-dynamic-selector{position:relative;top:-6px;}.modal-reason-i-recommend.__jsx-style-dynamic-selector{font-size:24px;font-weight:600;line-height:1.4;color:#595959;}.modal-experience-title.__jsx-style-dynamic-selector{font-size:24px;font-weight:600;line-height:1.3;font-family:inherit;color:#595959;}}"])));
    }
  }]);

  return PopupModal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PopupModal);

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

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

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
      Object(apiRequests["qb" /* forgotPasswordFunction */])(_this.state.email).then(function (result) {
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

      Object(apiRequests["rb" /* login */])(email.trim(), password).then(function (result) {
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

          Object(apiRequests["tb" /* mySocial */])(_email, username, "", imageUrl, givenName).then(function (result) {
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
        Object(apiRequests["tb" /* mySocial */])(email, username, "", imageUrl, givenName).then(function (result) {
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

/***/ "E8iq":
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "JwBy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: ./components/Header.js + 3 modules
var Header = __webpack_require__("b0oO");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/toprating.js




var toprating_TopRating = function TopRating(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-899178264" + " " + "topRatingCard"
  }, external_react_default.a.createElement("div", {
    className: "jsx-899178264" + " " + "join-us-header"
  }, "Top rating"), external_react_default.a.createElement("div", {
    className: "jsx-899178264" + " " + "sidebar-text"
  }, "TopRating  helps you make informed decisions. Tell us what you\u2019re passionate about to get your personalized feed and help others."), external_react_default.a.createElement(link_default.a, {
    href: "/ask"
  }, external_react_default.a.createElement("button", {
    className: "jsx-899178264"
  }, "Let's go!")), external_react_default.a.createElement(style_default.a, {
    id: "899178264"
  }, [".join-us-header.jsx-899178264{font-size:18px;font-weight:600;line-height:24px;color:#0d0d0d;margin:12px auto;}", ".Sidebar-text.jsx-899178264,.join-us-header.jsx-899178264{line-height:24px;margin-bottom:18px;}", ".Sidebar-text.jsx-899178264{font-size:0.3em;font-weight:400;-webkit-letter-spacing:.1px;-moz-letter-spacing:.1px;-ms-letter-spacing:.1px;letter-spacing:.1px;text-transform:none;font-family :verdana;}", "button.jsx-899178264{width :100px;height :40px;border :0;border-radius :6px;cursor :pointer;background-color :rgb(96,51,141);font-family :inherit;font-size :13px;font-weight :bold;color :#f2f2f2;outline :0;margin-top :6px;}", "button.jsx-899178264:hover{background-color :#e6ecf0;color :rgb(96,51,141);border :1px solid rgb(96,51,141);}", ".topRatingCard.jsx-899178264{overflow:hidden;box-shadow:0 4px 19px 0 rgba(0,0,0,.05);border:1px solid #e6e8eb;background-color:#fff;max-height:454px;width:257px;margin-bottom:36px;padding:18px;text-align :center;top :460px;-webkit-animation :bounce-jsx-899178264 3s ease-in-out infinite;animation :bounce-jsx-899178264 3s ease-in-out infinite;-webkit-animation-direction :alternate;animation-direction :alternate;}", "@-webkit-keyframes bounce-jsx-899178264{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}", "@keyframes bounce-jsx-899178264{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}"]));
};

/* harmony default export */ var toprating = (toprating_TopRating);
// EXTERNAL MODULE: ./components/Icons.js
var Icons = __webpack_require__("zUqs");

// EXTERNAL MODULE: external "react-tooltip"
var external_react_tooltip_ = __webpack_require__("E8iq");
var external_react_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_react_tooltip_);

// CONCATENATED MODULE: ./utils/headerButton.js






var headerButton_HeaderButton = function HeaderButton() {
  return external_react_default.a.createElement("div", {
    className: "jsx-1274034057"
  }, external_react_default.a.createElement(external_react_tooltip_default.a, {
    effect: "solid",
    place: "top"
  }), external_react_default.a.createElement(link_default.a, {
    prefetch: true,
    href: "/ask"
  }, external_react_default.a.createElement("button", {
    "data-tip": 'Ask a Question',
    className: "jsx-1274034057"
  }, external_react_default.a.createElement(Icons["a" /* AddIcon */], null))), external_react_default.a.createElement(style_default.a, {
    id: "1274034057"
  }, ["button.jsx-1274034057{width :50px;height :50px;border :0;border-radius :50px;padding :12px;cursor :pointer;background-color :rgb(96,51,141);text-transform :uppercase;font-family :verdana;font-size :10px;font-weight :bold;color :#f2f2f2;outline :0;display :inline-block;box-shadow :0 0 0px 2px rgba(0,0,0,0.12);overflow :hidden;}", "button.jsx-1274034057:hover{color :rgb(96,51,141);border :2px solid rgb(96,51,141);}"]));
};

/* harmony default export */ var headerButton = (headerButton_HeaderButton);
// CONCATENATED MODULE: ./layouts/Layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout_default; });
/* unused harmony export MainBody */










 //import Recommendation from "../components/Recommendation";




var Layout_default =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      checkuser: null
    });

    return _this;
  }

  Object(createClass["a" /* default */])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        checkuser: JSON.parse(localStorage.getItem("user_details"))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var indexPage = this.props.indexPage;
      var user = false;
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Header["a" /* default */], this.props), external_react_default.a.createElement("div", {
        className: "jsx-3053040980" + " " + "sidebar2"
      }), external_react_default.a.createElement("br", {
        className: "jsx-3053040980"
      }), external_react_default.a.createElement("br", {
        className: "jsx-3053040980"
      }), external_react_default.a.createElement("br", {
        className: "jsx-3053040980"
      }), this.props.askie && external_react_default.a.createElement("div", {
        className: "jsx-3053040980" + " " + "callToAction"
      }, external_react_default.a.createElement(headerButton, null)), external_react_default.a.createElement(Layout_MainBody, null, this.props.children), user && external_react_default.a.createElement("div", {
        className: "jsx-3053040980" + " " + "sidebar"
      }, external_react_default.a.createElement(toprating, null)), external_react_default.a.createElement(style_default.a, {
        id: "3053040980"
      }, [".sidebar.jsx-3053040980{left:71.5%;position:relative;top:85%;}", ".sidebar2.jsx-3053040980{display:inline-block;left:02%;position:fixed;}", ".myClass.jsx-3053040980{cursor:pointer;}", ".callToAction.jsx-3053040980{position:fixed;top:90%;left:82%;z-index:1000;display:none;}", "@media screen and (max-width:600px){.sidebar.jsx-3053040980{display:none;}.callToAction.jsx-3053040980{position:fixed;top:90%;left:78%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}", "@media screen and (width:768px){.callToAction.jsx-3053040980{position:fixed;top:43%;left:60%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}", "@media screen and (width:320px){.callToAction.jsx-3053040980{position:fixed;top:90%;left:75%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}", "@media screen and (width:375px){.callToAction.jsx-3053040980{position:fixed;top:76%;left:75%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}", "@media screen and (width:414px){.callToAction.jsx-3053040980{position:fixed;top:70%;left:75%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}", "@media screen and (width:1024px){.callToAction.jsx-3053040980{position:fixed;top:34%;left:58%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}"]));
    }
  }]);

  return _default;
}(external_react_["Component"]);


var Layout_MainBody =
/*#__PURE__*/
function (_Component2) {
  Object(inherits["a" /* default */])(MainBody, _Component2);

  function MainBody() {
    Object(classCallCheck["a" /* default */])(this, MainBody);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MainBody).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MainBody, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, this.props.children);
    }
  }]);

  return MainBody;
}(external_react_["Component"]);

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

/***/ "KQAP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var myStyle = {
  card: {
    overflow: 'hidden',
    boxShadow: '0 4px 16px 0 rgba(0,0,0,.05)',
    border: '1px solid #e6e8eb',
    borderRadius: '15px',
    backgroundColor: '#fff',
    height: '500px',
    width: '550px',
    marginBottom: '36px',
    padding: '18px',
    boxSizing: 'border-box'
  },
  questionCard: {
    overflow: 'hidden',
    boxShadow: '0 4px 16px 0 rgba(0,0,0,.05)',
    border: '1px solid #e6e8eb',
    borderRadius: '15px',
    backgroundColor: '#fff',
    maxHeight: '560px',
    width: '400px',
    marginBottom: '36px',
    padding: '18px',
    boxSizing: 'border-box'
  },
  searchContentCard: {
    overflow: 'hidden',
    boxShadow: '0 4px 19px 0 rgba(0,0,0,.05)',
    border: '1px solid #e6e8eb',
    borderRadius: '5px',
    backgroundColor: '#fff',
    minHeight: '334px',
    width: '520px',
    marginBottom: '36px',
    padding: '18px'
  },
  unique: {
    backgroundColor: '#e6ecf0',
    overflow: "hidden",
    padding: "12px 19px",
    width: '520px',
    borderRadius: '5px',
    marginRight: '40px',
    textAlign: 'center',
    boxShadow: '0 4px 16px 0 rgba(0,0,0,.05)',
    position: 'relative',
    right: '18px',
    top: '89px',
    fontFamily: 'BasicSans,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: '#8c8c8c',
    fontWeight: 'bold'
  },
  textarea: {
    height: '20px',
    lineHeight: '18px',
    fontSize: '14px',
    padding: '9px',
    paddingRight: '48px',
    margin: 0,
    borderRadius: '9px',
    border: 'none',
    backgroundColor: '#ecf0f0',
    resize: "none",
    outline: 0,
    width: '88%'
  },
  ReactionButton: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: ".4px",
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
    borderRadius: '4px',
    boxShadow: 'inset 0 0 0 1.5px #4d4d4d',
    color: '#4d4d4d',
    padding: '0 6px',
    verticalAlign: 'middle',
    cursor: 'pointer',
    outline: 0
  },
  topRatingCard: {
    overflow: 'hidden',
    boxShadow: '0 4px 19px 0 rgba(0,0,0,.05)',
    border: '1px solid #e6e8eb',
    borderRadius: '15px',
    backgroundColor: '#fff',
    maxHeight: '454px',
    width: '230px',
    marginBottom: '36px',
    padding: '18px',
    textAlign: 'center',
    animation: 'bounce 1s infinite'
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = (myStyle);

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

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

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

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

// EXTERNAL MODULE: ./layouts/Layout.js + 2 modules
var Layout = __webpack_require__("JwBy");

// EXTERNAL MODULE: ./utils/css/style.js
var css_style = __webpack_require__("KQAP");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Icons.js
var Icons = __webpack_require__("zUqs");

// EXTERNAL MODULE: ./apiRequests/apiRequests.js
var apiRequests = __webpack_require__("rhLc");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// CONCATENATED MODULE: ./components/homepage/IrecommendCard.js












var IrecommendCard_IrecommendCard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(IrecommendCard, _Component);

  function IrecommendCard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, IrecommendCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(IrecommendCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      clear: false,
      search: "",
      store: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getAllOptions", function () {
      Object(apiRequests["q" /* GET_ALL_OPTIONS */])().then(function (axiosResponse) {
        _this.setState({
          allOptions: axiosResponse.data,
          store: axiosResponse.data
        });
      }).catch(function (err) {
        _this.setState({
          err: err.response
        }); // console.log(err);

      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getOptions", function (question) {
      Object(apiRequests["u" /* GET_SPECIFIC_QUESTION_OPTIONS */])(question).then(function (options) {
        if (options && options.data) {
          _this.setState({
            options: options.data
          });
        }
      }).catch(function (err) {
        _this.setState({
          err: err.response
        }); // console.log(err);

      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSearch", function (_ref) {
      var _this$setState;

      var _ref$target = _ref.target,
          value = _ref$target.value,
          name = _ref$target.name;

      var filterData = _this.state.allOptions.filter(function (item) {
        return item.option.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });

      _this.setState((_this$setState = {}, Object(defineProperty["a" /* default */])(_this$setState, name, value), Object(defineProperty["a" /* default */])(_this$setState, "allOptions", filterData), _this$setState), function () {
        if (value !== "") {
          _this.setState({
            clear: true
          });
        } else {
          _this.setState({
            clear: false,
            allOptions: _this.state.store
          });
        }
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClear", function () {
      _this.setState({
        search: "",
        clear: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(IrecommendCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("++++++++++++");
      console.log(this.props.question);
      console.log("++++++++++++++"); //Do something here

      this.getOptions(this.props.question);
      this.getAllOptions();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          clear = _this$state.clear,
          search = _this$state.search,
          options = _this$state.options,
          allOptions = _this$state.allOptions;

      var _options = options ? options : [];

      var _allOptions = allOptions ? allOptions : [];

      return external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "i-recommend-card"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "i-recommend-card-header"
      }, external_react_default.a.createElement("span", {
        className: "jsx-1635217728"
      }, "I Recommend"), external_react_default.a.createElement("span", {
        className: "jsx-1635217728"
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.props.closeIRecommendCard();
        },
        style: {
          position: "relative",
          top: "-2px",
          fontSize: "18px"
        },
        className: "jsx-1635217728" + " " + "close-popup-iconie"
      }, "\xD7"))), external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "i-recommend-search-container"
      }, external_react_default.a.createElement("input", {
        placeholder: "Search for a product",
        type: "text",
        value: search,
        name: "search",
        ref: function ref(input) {
          return _this2.search = input;
        },
        onChange: function onChange(e) {
          return _this2.onSearch(e);
        },
        className: "jsx-1635217728" + " " + "i-recommend-search"
      }), clear && external_react_default.a.createElement("span", {
        onClick: this.onClear,
        className: "jsx-1635217728" + " " + "clear"
      }, "clear")), external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "fix"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "i-recommend-search-container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "select-an-option"
      }, "Selec a product from this Question"), _options.map(function (item, index) {
        return external_react_default.a.createElement("div", {
          key: index,
          onClick: function onClick() {
            var user = JSON.parse(localStorage.getItem("user_details"));

            if (!user) {
              _this2.props.closeIRecommendCard();

              _this2.props.login();

              return;
            } else {
              _this2.props.handleShowIrecommend(item.option, item.like, _this2.props.question);
            }
          },
          style: {
            cursor: "pointer"
          },
          className: "jsx-1635217728"
        }, external_react_default.a.createElement("span", {
          className: "jsx-1635217728" + " " + "option-image"
        }, item.mediaUrl[0] ? external_react_default.a.createElement("img", {
          width: 40,
          height: 40,
          src: item.mediaUrl[0],
          alt: "image",
          className: "jsx-1635217728" + " " + "option-pic"
        }) : external_react_default.a.createElement("img", {
          width: 40,
          height: 40,
          src: "/static/image.png",
          alt: "image",
          className: "jsx-1635217728" + " " + "option-pic"
        })), external_react_default.a.createElement("span", {
          style: {
            fontSize: "13px"
          },
          className: "jsx-1635217728"
        }, external_react_default.a.createElement("span", {
          style: {
            position: "relative",
            top: "-05px"
          },
          className: "jsx-1635217728"
        }, item.option ? item.option : "loading..."), external_react_default.a.createElement("span", {
          className: "jsx-1635217728" + " " + "option-text"
        }, item.like ? item.like : 0, " Recommendations")));
      }))), external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "i-recommend-card-divider"
      }), external_react_default.a.createElement("div", {
        className: "jsx-1635217728" + " " + "i-recommend-card-add"
      }, external_react_default.a.createElement("em", {
        className: "jsx-1635217728"
      }, "Option not found?"), external_react_default.a.createElement(link_default.a, {
        href: "/addoption/".concat(this.props.questionId)
      }, external_react_default.a.createElement("button", {
        className: "jsx-1635217728" + " " + "button"
      }, "Add Option"))), external_react_default.a.createElement(style_default.a, {
        id: "1635217728"
      }, [".i-recommend-card.jsx-1635217728{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-height:620px;min-height:520px;width:100%;background:#fafafa;border-radius:8px;font-size:18px;overflow-x:hidden;overflow-y:auto;}", ".fix.jsx-1635217728{overflow-y:auto;overflow-x:hidden;}", ".i-recommend-card-header.jsx-1635217728{background:#fdfdfd;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:20px;border-top-left-radius:8px;border-top-right-radius:8px;font-weight:600;text-transform:capitalize;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);}", ".i-recommend-search-container.jsx-1635217728{margin-left:20px;margin-top:15px;box-sizing:border-box;}", ".select-an-option.jsx-1635217728{text-transform:Uppercase;font-size:15px;color:#8d959c;}", ".i-recommend-search.jsx-1635217728{border-top:0;border-left:0;border-right:0;outline:0;width:95%;background:transparent;}", ".jsx-1635217728::-webkit-input-placeholder{font-size:14px;}", ".jsx-1635217728::-moz-placeholder{font-size:14px;}", ".jsx-1635217728:-ms-input-placeholder{font-size:14px;}", ".jsx-1635217728::placeholder{font-size:14px;}", ".clear.jsx-1635217728{position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;left:85%;top:-25px;font-size:14px;cursor:pointer;color:#8d959c;}", ".clear.jsx-1635217728:hover{color:rgb(91,56,141);}", ".option-pic.jsx-1635217728{margin-top:5px;border-radius:5px;margin-right:5px;border:1px solid #ecebeb;overflow:hidden;}", ".option-text.jsx-1635217728{position:relative;left:46px;top:-25px;display:block;}", ".i-recommend-card-divider.jsx-1635217728{border-top:1px solid rgb(91,56,141);}", ".i-recommend-card-add.jsx-1635217728{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;margin-bottom:10px;}", ".button.jsx-1635217728{font-size:0.8em;font-weight:500;border-radius:3px !important;background:rgb(96,51,151);color:#fdfdfd;text-align:center !important;outline:0;padding:5px;cursor:pointer;margin-left:3px;border:1px solid rgb(96,51,141);}", ".close-popup-iconie.jsx-1635217728{cursor:pointer;position:absolute;height:30px;width:30px;color:rgb(91,56,141);border-radius:50px;background:#e6ecf0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "em.jsx-1635217728{font-size:15px;margin-right:2px;}", ".button.jsx-1635217728:hover{background-color:#e6ecf0;color:rgb(96,51,141);border:1px solid rgb(96,51,141);-webkit-transition:1s;transition:1s;}", "@media (min-width:768px){.i-recommend-card.jsx-1635217728{max-width:400px;}}"]));
    }
  }]);

  return IrecommendCard;
}(external_react_["Component"]);

/* harmony default export */ var homepage_IrecommendCard = (IrecommendCard_IrecommendCard);
// CONCATENATED MODULE: ./components/homepage/iRecommend.js











var iRecommend_IRecommend =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(IRecommend, _Component);

  function IRecommend() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, IRecommend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(IRecommend)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      irecommendCard: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowIrecommend", function () {
      _this.setState(function (previousState) {
        return {
          irecommendCard: !previousState.irecommendCard
        };
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(IRecommend, [{
    key: "render",
    value: function render() {
      var irecommendCard = this.state.irecommendCard;
      var showIrecommendCard = this.props.showIrecommendCard;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        onClick: showIrecommendCard,
        className: "jsx-3585841262" + " " + "i-rec-container"
      }, external_react_default.a.createElement("span", {
        className: "jsx-3585841262" + " " + "i-rec-content"
      }, "I REC..."), external_react_default.a.createElement("span", {
        className: "jsx-3585841262" + " " + "i-rec-icon-container"
      }, external_react_default.a.createElement("svg", {
        style: {
          width: "23px",
          height: "23px"
        },
        viewBox: "0 0 24 24",
        className: "jsx-3585841262"
      }, external_react_default.a.createElement("path", {
        fill: "#fdfdfd",
        d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z",
        className: "jsx-3585841262"
      })))), external_react_default.a.createElement(style_default.a, {
        id: "3585841262"
      }, [".i-rec-container.jsx-3585841262{cursor:pointer;background:rgb(91,56,141);border-radius:22px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".i-rec-content.jsx-3585841262{padding-left:10px;font-size:0.5em;font-weight:600;text-align:center;color:#fff;}", ".i-rec-icon-container.jsx-3585841262{position:relative;top:3px;padding-left:0px;}", "@media (min-width:768px){.i-rec-container.jsx-3585841262{cursor:pointer;background:rgb(91,56,141);box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.i-rec-content.jsx-3585841262{padding-left:15px;padding-right:0px;font-size:12px;font-weight:600;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;font-family:\"Cabin\";}.i-rec-icon-container.jsx-3585841262{position:relative;top:3px;padding-left:12px;}}", "@media (max-width:480px){.i-rec-container.jsx-3585841262{cursor:pointer;background:rgb(91,56,141);width:70px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.i-rec-content.jsx-3585841262{font-size:0.5em;}}"]));
    }
  }]);

  return IRecommend;
}(external_react_["Component"]);

/* harmony default export */ var iRecommend = (iRecommend_IRecommend);
// EXTERNAL MODULE: ./lib/removeSpaces.js
var removeSpaces = __webpack_require__("oZBK");

// EXTERNAL MODULE: ./components/modal/topicviewPopupModal.js
var topicviewPopupModal = __webpack_require__("tdmr");

// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// CONCATENATED MODULE: ./components/homepage/QuestionCard.js





















var socket = external_socket_io_client_default()(config["c" /* default */]);

var QuestionCard_QuestionCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(QuestionCard, _React$Component);

  function QuestionCard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, QuestionCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(QuestionCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      title: "",
      description: "",
      option: [],
      mediaUrl: [],
      showIrecommendCard: false,
      showAddRecommendation: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getQuestionNumOfRecs", function (question) {
      Object(apiRequests["O" /* GetQuestionNumOfRecs */])(question).then(function (axiosResponse) {
        _this.setState({
          QuestionRecs: axiosResponse.data
        });
      }).catch(function (error) {
        console.log(error.response);
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getQuestionOptions", function (question) {
      Object(apiRequests["bb" /* SPECIFIC_QUESTION_OPTIONS */])(question).then(function (options) {
        _this.setState({
          option: options.data
        });
      }).catch(function (err) {
        console.log(err);
      }); //To do something here
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleAddRecommendation", function (selectedOption, selectedOptionImage, selectedOptionQuestion) {
      _this.setState(function (previousState) {
        return {
          showAddRecommendation: !previousState.showAddRecommendation,
          showIrecommendCard: false,
          selectedOption: selectedOption,
          selectedOptionImage: selectedOptionImage,
          selectedOptionQuestion: selectedOptionQuestion
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeIRecommendCard", function () {
      _this.setState({
        showIrecommendCard: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowIrecommend", function () {
      _this.setState(function (previousState) {
        return {
          showIrecommendCard: !previousState.showIrecommendCard
        };
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(QuestionCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Get the number of Recommendations
      this.getQuestionNumOfRecs(this.props.question);
      this.getQuestionOptions(this.props.question);
    } //GetQuestionNumOfRecs

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          question = _this$props.question,
          tag = _this$props.tag,
          optionImage = _this$props.optionImage;
      var _this$state = this.state,
          mediaUrl = _this$state.mediaUrl,
          option = _this$state.option,
          QuestionRecs = _this$state.QuestionRecs,
          selectedOption = _this$state.selectedOption,
          selectedOptionImage = _this$state.selectedOptionImage,
          selectedOptionQuestion = _this$state.selectedOptionQuestion,
          showIrecommendCard = _this$state.showIrecommendCard,
          showAddRecommendation = _this$state.showAddRecommendation;
      var newQuestionString = Object(removeSpaces["b" /* default */])(question); // console.log(option);
      //const mediaUrl = "/static/image.png";

      if (option.length > 3) {
        var numRemaining = option.length - 3;
        return external_react_default.a.createElement("div", {
          className: "jsx-4140138677" + " " + "card-list-item"
        }, external_react_default.a.createElement("div", {
          style: {
            marginBottom: "15px"
          },
          className: "jsx-4140138677"
        }, external_react_default.a.createElement("span", {
          style: {
            marginRight: "10px"
          },
          className: "jsx-4140138677"
        }, external_react_default.a.createElement("a", {
          className: "jsx-4140138677" + " " + "question-tab"
        }, QuestionRecs ? QuestionRecs + " Recs" : "0 Recs")), external_react_default.a.createElement("span", {
          className: "jsx-4140138677" + " " + "rounded question-rounded"
        }, "\u2022"), tag.map(function (item, i) {
          return external_react_default.a.createElement("a", {
            key: i,
            className: "jsx-4140138677" + " " + "question-tab"
          }, item);
        }), external_react_default.a.createElement("span", {
          className: "jsx-4140138677" + " " + "more-icon"
        }, external_react_default.a.createElement(iRecommend, {
          showIrecommendCard: this.handleShowIrecommend
        }))), external_react_default.a.createElement(link_default.a, {
          prefetch: true,
          as: "/topic/".concat(newQuestionString),
          href: "/topic/".concat(newQuestionString)
        }, external_react_default.a.createElement("a", {
          className: "jsx-4140138677" + " " + "question-header"
        }, question + "?")), external_react_default.a.createElement("div", {
          className: "jsx-4140138677" + " " + "little-card"
        }, option ? external_react_default.a.createElement(external_react_default.a.Fragment, null, option.slice(0, 3).map(function (itemie) {
          return external_react_default.a.createElement(link_default.a, {
            prefetch: true,
            as: "/topic/".concat(encodeURI(newQuestionString)),
            href: "/topic/".concat(encodeURI(newQuestionString)),
            key: itemie._id
          }, external_react_default.a.createElement("div", {
            className: "jsx-4140138677" + " " + "two"
          }, itemie.mediaUrl ? external_react_default.a.createElement("img", {
            src: itemie.mediaUrl[0],
            className: "jsx-4140138677" + " " + "option-image"
          }) : external_react_default.a.createElement("img", {
            src: "/static/image.png",
            className: "jsx-4140138677" + " " + "option-image"
          }), itemie.option));
        })) : "", external_react_default.a.createElement("div", {
          className: "jsx-4140138677" + " " + "two more-options"
        }, "+", numRemaining, " more")), external_react_default.a.createElement("div", {
          className: "jsx-4140138677" + " " + "button-holder"
        }), external_react_default.a.createElement(style_default.a, {
          id: "4140138677"
        }, [".more-icon.jsx-4140138677{position:relative;float:right;}", ".more-options.jsx-4140138677{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#757575;}", ".more-icon-button.jsx-4140138677{background:#eee;border:0;cursor:pointer;border-radius:35px;outline:0;height:35px;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".more-icon-button-a.jsx-4140138677{color:rgb(91,56,141);font-family:Cabin;}", ".question-rounded.jsx-4140138677{position:relative;left:-6px;}", ".rounded.jsx-4140138677{border-radius:10px;position:relative;color:#757575;font-size:20px;}", ".question-tab.jsx-4140138677{margin-right:4px;font-size:0.9em;padding:4px;cursor:pointer;text-transform:uppercase;color:#757575 !important;font-weight:400;word-spacing:0.3px;}", ".option-image.jsx-4140138677{width:100%;height:100px;margin:0;padding:0;}", ".card-list-item.jsx-4140138677{overflow:hidden;background-color:#fdfdfd;margin-bottom:36px;padding:18px;border:1px solid #e6e8eb;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);box-sizing:border-box;border-radius:1px;}", ".card-list-item.jsx-4140138677 p.jsx-4140138677{font-weight:600;font-size:1.2em;}", "hr.hr.jsx-4140138677{border-top:1px solid #fdfdfd;}", ".little-card.jsx-4140138677{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".little-card.jsx-4140138677 .two.jsx-4140138677{padding:5px;background:#eee;height:136px;margin:5px;width:150px;border:1px solid transparent;border-radius:2px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.07);text-align:center;margin-top:15px;}", ".little-card.jsx-4140138677 .two.jsx-4140138677:hover{background:linear-gradient(to left,#fafafa,#eee);cursor:pointer;}", ".little-card.jsx-4140138677 .two.jsx-4140138677:hover{background:linear-gradient(to left,#fafafa,#eee);cursor:pointer;}", ".button-holder.jsx-4140138677{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".btn.jsx-4140138677{margin-top:5px;background-color:rgb(96,51,141);white-space:nowrap;outline:0;cursor:pointer;font-size:0.8em;font-weight:500;border:1px solid transparent;border-radius:2px;color:#fff;font-family:Cabin !important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "p.jsx-4140138677{font-family:verdana;}", ".image-style.jsx-4140138677 img.jsx-4140138677{width:100%;height:20%;cursor:pointer;}", ".question-header.jsx-4140138677{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.15s;transition:color 0.15s;font-family:inherit;font-size:1.6em;font-weight:600;color:#222;overflow:hidden;}", ".question-header.jsx-4140138677:hover{color:#757575;}", "@media only screen and (min-width:240px) and (max-width:360px){.question-header.jsx-4140138677{font-size:3.6vw;}}", "@media only screen and (min-width:360px) and (max-width:420px){.question-header.jsx-4140138677{font-size:3.6vw;}}", "@media only screen and (min-width:420px) and (max-width:600px){.question-header.jsx-4140138677{font-size:3.6vw;}}", "@media only screen and (min-width:600px) and (max-width:720px){.question-header.jsx-4140138677{font-size:3.6vw;}}", "@media only screen and (min-width:720px) and (max-width:900px){.question-header.jsx-4140138677{font-size:2.6vw;}}", "@media only screen and (min-width:900px) and (max-width:1020px){.question-header.jsx-4140138677{font-size:2.6vw;}}"]));
      }

      return external_react_default.a.createElement("div", {
        className: "jsx-953011331" + " " + "card-list-item"
      }, external_react_default.a.createElement("div", {
        style: {
          marginBottom: "15px"
        },
        className: "jsx-953011331"
      }, external_react_default.a.createElement("span", {
        style: {
          marginRight: "10px"
        },
        className: "jsx-953011331"
      }, external_react_default.a.createElement("a", {
        className: "jsx-953011331" + " " + "question-tab"
      }, QuestionRecs ? QuestionRecs + " Recs" : "0 Recs")), external_react_default.a.createElement("span", {
        className: "jsx-953011331" + " " + "rounded question-rounded"
      }, "\u2022"), tag.map(function (item, i) {
        console.log("+++++++++");
        console.log(item);
        console.log("+++++++++");
        return external_react_default.a.createElement("a", {
          key: i,
          className: "jsx-953011331" + " " + "question-tab"
        }, item);
      }), external_react_default.a.createElement("span", {
        className: "jsx-953011331" + " " + "more-icon"
      }, external_react_default.a.createElement(iRecommend, {
        showIrecommendCard: this.handleShowIrecommend
      }))), external_react_default.a.createElement("div", {
        style: {
          width: "100%"
        },
        className: "jsx-953011331"
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        as: "/topic/".concat(newQuestionString),
        href: "/topic/".concat(newQuestionString)
      }, external_react_default.a.createElement("a", {
        className: "jsx-953011331" + " " + "question-header"
      }, this.props.question + "?"))), external_react_default.a.createElement("div", {
        className: "jsx-953011331" + " " + "little-card"
      }, option ? external_react_default.a.createElement(external_react_default.a.Fragment, null, option.map(function (item, i) {
        return external_react_default.a.createElement(link_default.a, {
          as: "/topic/".concat(newQuestionString),
          prefetch: true,
          href: "/topic/".concat(newQuestionString),
          key: i
        }, external_react_default.a.createElement("div", {
          key: i,
          className: "jsx-953011331" + " " + "two"
        }, item.mediaUrl ? external_react_default.a.createElement("img", {
          src: item.mediaUrl[0],
          className: "jsx-953011331" + " " + "option-image"
        }) : external_react_default.a.createElement("img", {
          src: "/static/image.png",
          className: "jsx-953011331" + " " + "option-image"
        }), item.option));
      })) : "", external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/addoption/".concat(this.props.questionId)
      }, external_react_default.a.createElement("div", {
        className: "jsx-953011331" + " " + "two more-options"
      }, external_react_default.a.createElement("div", {
        style: {
          // paddingBottom: "10px",
          // position: "relative",
          marginTop: "35px",
          color: "#757575"
        },
        className: "jsx-953011331"
      }, external_react_default.a.createElement(Icons["a" /* AddIcon */], {
        color: "#757575"
      })), "Add Option"))), showIrecommendCard && external_react_default.a.createElement("div", {
        className: "jsx-953011331" + " " + ((showIrecommendCard ? "showOverlay-2" : "overlay") || "")
      }, external_react_default.a.createElement("section", {
        className: "jsx-953011331" + " " + "section-theme section-theme-i-rec showIrec"
      }, external_react_default.a.createElement(homepage_IrecommendCard, Object(esm_extends["a" /* default */])({
        handleShowIrecommend: this.handleAddRecommendation,
        closeIRecommendCard: this.closeIRecommendCard
      }, this.props)))), //Show add recommedation overlay
      external_react_default.a.createElement("div", {
        className: "jsx-953011331" + " " + ((showAddRecommendation ? "showOverlayie" : "overlay") || "")
      }, external_react_default.a.createElement("section", {
        className: "jsx-953011331" + " " + "section-theme section-theme-i-rec-1 topicview"
      }, external_react_default.a.createElement(topicviewPopupModal["a" /* default */], {
        question: selectedOptionQuestion,
        option: selectedOption,
        optionImage: selectedOptionImage,
        type: "like",
        socketId: socket.id
      })), external_react_default.a.createElement("div", {
        style: {
          fontSize: "55px",
          padding: "9px",
          textAlign: "center"
        },
        onClick: function onClick() {
          _this2.setState({
            showAddRecommendation: false
          });
        },
        className: "jsx-953011331" + " " + "close-popup-iconie"
      }, external_react_default.a.createElement("span", {
        style: {
          position: "relative",
          top: "-2px"
        },
        className: "jsx-953011331"
      }, "\xD7"))), external_react_default.a.createElement(style_default.a, {
        id: "953011331"
      }, [".more-icon.jsx-953011331{position:relative;float:right;}", ".showOverlay-2.jsx-953011331{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".showOverlayie.jsx-953011331{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".overlay.jsx-953011331{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".section-theme.jsx-953011331{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".section-theme-i-rec.jsx-953011331{margin-top:0%;}", ".section-theme-i-rec-1.jsx-953011331{margin-top:0%;}", "@media (min-width:768px){.close-popup-iconie.jsx-953011331{cursor:pointer;position:absolute;height:40px;width:40px;color:rgb(91,56,141);border-radius:50px;background:#e6ecf0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.i-rec.jsx-953011331{top:10%;left:60%;}.section-theme-i-rec.jsx-953011331{margin-top:5%;position:relative;left:20%;}}", ".more-options.jsx-953011331{color:#757575;}", ".more-icon-button.jsx-953011331{border:0;z-index:3000;background:#eee;cursor:pointer;border-radius:35px;outline:0;height:35px;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".more-icon-button-a.jsx-953011331{color:rgb(91,56,141);font-family:Cabin;}", ".question-rounded.jsx-953011331{position:relative;left:-6px;}", ".rounded.jsx-953011331{border-radius:10px;position:relative;color:#757575;font-size:20px;}", ".question-tab.jsx-953011331{margin-right:4px;font-size:0.9em;padding:4px;cursor:pointer;color:#757575 !important;text-transform:uppercase;font-weight:400;word-spacing:0.3px;}", ".option-image.jsx-953011331{width:100%;height:100px;margin:0;padding:0;}", ".card-list-item.jsx-953011331{overflow:hidden;background-color:#fdfdfd;margin-bottom:36px;padding:18px;border:1px solid #e6e8eb;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);border-radius:1px;box-sizing:border-box;}", ".card-list-item.jsx-953011331 p.jsx-953011331{font-weight:600;font-size:1.2em;}", "hr.hr.jsx-953011331{border-top:1px solid #fdfdfd;}", ".little-card.jsx-953011331{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".little-card.jsx-953011331 .two.jsx-953011331{padding:5px;background:#eee;height:136px;margin:5px;width:150px;border:1px solid transparent;border-radius:2px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.07);text-align:center;margin-top:15px;}", ".little-card.jsx-953011331 .two.jsx-953011331:hover{background:linear-gradient(to left,#fafafa,#eee);cursor:pointer;}", ".button-holder.jsx-953011331{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".btn.jsx-953011331{margin-top:5px;background-color:rgb(96,51,141);white-space:nowrap;outline:0;cursor:pointer;font-size:0.8em;font-weight:500;border:2px solid transparent;border-radius:2px;color:#fff;font-family:Cabin !important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "p.jsx-953011331{font-family:verdana;}", ".image-style.jsx-953011331 img.jsx-953011331{width:100%;height:20%;cursor:pointer;}", ".question-header.jsx-953011331{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.15s;transition:color 0.15s;font-family:inherit;font-size:1.6em;font-weight:600;color:#222;overflow:hidden;}", ".question-header.jsx-953011331:hover{color:#757575;}", "@media only screen and (min-width:240px) and (max-width:360px){.question-header.jsx-953011331{font-size:3.6vw;}}", "@media only screen and (min-width:360px) and (max-width:420px){.question-header.jsx-953011331{font-size:3.6vw;}}", "@media only screen and (min-width:420px) and (max-width:600px){.question-header.jsx-953011331{font-size:3.6vw;}}", "@media only screen and (min-width:600px) and (max-width:720px){.question-header.jsx-953011331{font-size:3.6vw;}}", "@media only screen and (min-width:720px) and (max-width:900px){.question-header.jsx-953011331{font-size:2.6vw;}}", "@media only screen and (min-width:900px) and (max-width:1020px){.question-header.jsx-953011331{font-size:2.6vw;}}"]));
    }
  }]);

  return QuestionCard;
}(external_react_default.a.Component);

/* harmony default export */ var homepage_QuestionCard = (QuestionCard_QuestionCard);
// EXTERNAL MODULE: ./components/modal/popupModal.js
var popupModal = __webpack_require__("A3Na");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/homepage/recComponent.js






















var recComponent_socket = external_socket_io_client_default()(config["c" /* default */]);

var recComponent_RecComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(RecComponent, _React$Component);

  function RecComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, RecComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(RecComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      openPopup: false,
      maxItem: 4,
      showUpIcon: false,
      color: false,
      showIrecommendCard: false,
      showAddRecommendation: false,
      selectedOption: "",
      selectedOptionImage: "",
      selectedOptionQuestion: "",
      optionImage: null
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getOptionImage", function (option) {
      Object(apiRequests["r" /* GET_OPTION_DETAILS */])(option).then(function (result) {
        _this.setState({
          optionImage: result.data.mediaUrl[0]
        });
      }).catch(function (err) {// console.log(err);
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getQuestionNumOfRecs", function (option) {
      Object(apiRequests["O" /* GetQuestionNumOfRecs */])(option).then(function (axiosResponse) {
        // console.log(axiosResponse.data);
        _this.setState({
          QuestionRecs: axiosResponse.data
        });
      }).catch(function (error) {// console.log(error.response);
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getUserWhoAddedQuestion", function (question) {
      Object(apiRequests["z" /* GET_USER_WHO_ADDED_QUESTION */])(question).then(function (axiosResponse) {
        _this.setState({
          userWhoAddedQuestion: axiosResponse.data.username
        });
      }).catch(function (err) {// console.log(err);
      }); //do something here
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getSpecificQuestionId", function (question) {
      Object(apiRequests["n" /* FetchSpecificQuestionId */])(question).then(function (axiosResponse) {
        _this.setState({
          questionId: axiosResponse.data.id
        });
      }).catch(function (err) {
        _this.setState({
          err: err
        });
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOpenPopup", function () {
      //alert("click");
      _this.setState({
        openPopup: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeBtn", function () {
      _this.setState({
        openPopup: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowMore", function () {
      _this.setState({
        maxItem: 10
      }, function () {
        _this.setState(function (previousState) {
          return {
            showUpIcon: !previousState.showUpIcon
          };
        });
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowUpIcon", function () {
      _this.setState({
        maxItem: 1
      }, _this.setState(function (previousState) {
        return {
          showUpIcon: !previousState.showUpIcon
        };
      }));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowIrecommend", function () {
      _this.setState(function (previousState) {
        return {
          showIrecommendCard: !previousState.showIrecommendCard
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeIRecommendCard", function () {
      _this.setState({
        showIrecommendCard: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleAddRecommendation", function (selectedOption, selectedOptionImage, selectedOptionQuestion) {
      _this.setState(function (previousState) {
        return {
          showAddRecommendation: !previousState.showAddRecommendation,
          showIrecommendCard: false,
          selectedOption: selectedOption,
          selectedOptionImage: selectedOptionImage,
          selectedOptionQuestion: selectedOptionQuestion
        };
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(RecComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Get the number of Recommendations
      this.getQuestionNumOfRecs(this.props.option);
      this.getUserWhoAddedQuestion(this.props.question);
      this.getOptionImage(this.props.option);
      this.getSpecificQuestionId(this.props.question);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          openPopup = _this$state.openPopup,
          maxItem = _this$state.maxItem,
          showUpIcon = _this$state.showUpIcon,
          QuestionRecs = _this$state.QuestionRecs,
          userWhoAddedQuestion = _this$state.userWhoAddedQuestion,
          color = _this$state.color,
          showIrecommendCard = _this$state.showIrecommendCard,
          showAddRecommendation = _this$state.showAddRecommendation,
          selectedOption = _this$state.selectedOption,
          selectedOptionImage = _this$state.selectedOptionImage,
          selectedOptionQuestion = _this$state.selectedOptionQuestion,
          optionImage = _this$state.optionImage,
          questionId = _this$state.questionId;
      var url = "/static/avatar.png";

      var _color = color ? "rgb(91,56,141)" : "#000";

      var _this$props = this.props,
          con = _this$props.con,
          option = _this$props.option,
          experience = _this$props.experience,
          pro = _this$props.pro,
          question = _this$props.question,
          username = _this$props.username,
          tag = _this$props.tag,
          userId = _this$props.userId,
          createdAt = _this$props.createdAt,
          userImage = _this$props.userImage;
      var newQuestionString = Object(removeSpaces["b" /* default */])(question);
      var defaultCardImageStyle = {
        backgroundImage: "url('/static/im.png')"
      };
      var cardImageStyle = optionImage ? {
        backgroundImage: "url(".concat(optionImage, ")")
      } : defaultCardImageStyle;

      var tagie = function tagie() {
        return tag.slice(0, 5);
      };

      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card card-list-item has-footer"
      }, external_react_default.a.createElement("div", {
        style: defaultCardImageStyle,
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-image images-image-list-item-image"
      }, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-image-gradient"
      }, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-question-header"
      }, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-question-header-flex"
      }, external_react_default.a.createElement("h4", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-question-title  rec-card-question-header-content"
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        as: "/topic/".concat(newQuestionString),
        href: "/topic/".concat(newQuestionString)
      }, external_react_default.a.createElement("a", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "question-title-hover"
      }, question + "?"))), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]])
      }, external_react_default.a.createElement(external_react_bootstrap_["OverlayTrigger"], {
        key: "top",
        placement: "top",
        overlay: external_react_default.a.createElement(external_react_bootstrap_["Tooltip"], null, "Recommend or add the options you think are the best")
      }, external_react_default.a.createElement("span", {
        className: style_default.a.dynamic([["2386962203", [url]]])
      }, external_react_default.a.createElement(iRecommend, {
        width: 23,
        height: 23,
        showIrecommendCard: this.handleShowIrecommend
      }))))), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + " card-list-stats-item on-mobile num-rec "
      }, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + " card-list-stats-item a"
      }, external_react_default.a.createElement("a", {
        className: style_default.a.dynamic([["2386962203", [url]]])
      }, " ", QuestionRecs ? QuestionRecs : 0, " Recs ")), external_react_default.a.createElement("div", {
        style: {
          fontSize: "30px"
        },
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "card-list-stats-seperator "
      }, external_react_default.a.createElement("span", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rounded"
      }, "\u2022")), external_react_default.a.createElement("span", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "card-list-tags"
      }, tag.length < 5 && external_react_default.a.createElement(external_react_["Fragment"], null, tag.map(function (item, i) {
        var newItem = item;
        return external_react_default.a.createElement(link_default.a, {
          prefetch: true,
          as: "/tags/".concat(newItem),
          href: "/tags/".concat(newItem)
        }, external_react_default.a.createElement("div", {
          key: i,
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "card-list-stats-item a"
        }, external_react_default.a.createElement("a", {
          className: style_default.a.dynamic([["2386962203", [url]]])
        }, item)));
      })), tag.length > 5 && external_react_default.a.createElement(external_react_["Fragment"], null, tagie.map(function (item, i) {
        return external_react_default.a.createElement("div", {
          key: i,
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "card-list-stats-item a"
        }, external_react_default.a.createElement("a", {
          className: style_default.a.dynamic([["2386962203", [url]]])
        }, item));
      }), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + " card-list-stats-item "
      }, external_react_default.a.createElement("a", {
        className: style_default.a.dynamic([["2386962203", [url]]])
      }, "+", tag.length - tagie.length, " more")))))), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-image-content"
      }, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-user-rec"
      }, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-user-rec-avatar"
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/user/".concat(username)
      }, external_react_default.a.createElement("a", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + " avatar hide-mobile bigger"
      }, userImage ? external_react_default.a.createElement("img", {
        src: userImage,
        alt: username,
        className: style_default.a.dynamic([["2386962203", [url]]])
      }) : external_react_default.a.createElement("img", {
        src: "/static/gravatar2.png",
        alt: "image",
        className: style_default.a.dynamic([["2386962203", [url]]])
      }) // <Placeholder style={{ height: 150, width: 150 }}>
      //   <Placeholder.Image square />
      // </Placeholder>
      , "}")), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/user/".concat(username)
      }, external_react_default.a.createElement("a", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "avatar show-mobile big"
      }, this.props.userImage ? external_react_default.a.createElement("img", {
        src: this.props.userImage,
        alt: this.props.username,
        className: style_default.a.dynamic([["2386962203", [url]]])
      }) : external_react_default.a.createElement(external_semantic_ui_react_["Placeholder"], {
        style: {
          height: 150,
          width: 150
        }
      }, external_react_default.a.createElement(external_semantic_ui_react_["Placeholder"].Image, {
        square: true
      }))))), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-user-rec-content"
      }, external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-user-rec-content-header"
      }, "Recommendation by ", username), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/topic/".concat(newQuestionString)
      }, external_react_default.a.createElement("a", {
        title: option,
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + " rec-card-title"
      }, option))))))), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-content"
      }, external_react_default.a.createElement("h3", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-description rec-card-experience content"
      }, experience), pro && external_react_default.a.createElement(external_react_["Fragment"], null, pro.slice(0, maxItem).map(function (item, i) {
        return external_react_default.a.createElement("div", {
          key: i,
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-description"
        }, external_react_default.a.createElement("span", {
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-content-pro"
        }, "+ "), external_react_default.a.createElement("span", {
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "content rec-text"
        }, item));
      })), con && external_react_default.a.createElement(external_react_["Fragment"], null, con.slice(0, maxItem).map(function (item, i) {
        return external_react_default.a.createElement("div", {
          key: i,
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-description"
        }, external_react_default.a.createElement("span", {
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-content-con"
        }, "\u2212 "), external_react_default.a.createElement("span", {
          className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "content rec-text"
        }, item));
      })), !showUpIcon && external_react_default.a.createElement("div", {
        // onClick={this.handleShowMore}
        onClick: this.handleOpenPopup,
        onMouseEnter: function onMouseEnter() {
          _this2.setState({
            color: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this2.setState({
            color: false
          });
        },
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-view-more"
      }, external_react_default.a.createElement("span", {
        onMouseEnter: function onMouseEnter() {
          _this2.setState({
            color: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this2.setState({
            color: false
          });
        },
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-view-more-icon"
      }, external_react_default.a.createElement(Icons["u" /* ViewMore */], {
        color: color ? "rgb(91, 56, 141)" : "#595959",
        height: 16,
        width: 16
      })), external_react_default.a.createElement("span", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "rec-card-view-more-text"
      }, "SEE FULL"))), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + ((openPopup ? "showOverlay" : "overla") || "")
      }, external_react_default.a.createElement("section", {
        style: {
          justifyContent: "flex-end"
        },
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "section-theme"
      }, external_react_default.a.createElement(popupModal["a" /* default */], this.props)), external_react_default.a.createElement("div", {
        style: {
          fontSize: "55px",
          padding: "9px",
          textAlign: "center"
        },
        onClick: this.closeBtn,
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "close-popup-icon i-rec-popup"
      }, external_react_default.a.createElement("span", {
        className: style_default.a.dynamic([["2386962203", [url]]])
      }, "\xD7"))), showIrecommendCard && external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + ((showIrecommendCard ? "showOverlay-2" : "overlay") || "")
      }, external_react_default.a.createElement("section", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "section-theme section-theme-i-rec showIrec"
      }, external_react_default.a.createElement(homepage_IrecommendCard, Object(esm_extends["a" /* default */])({
        handleShowIrecommend: this.handleAddRecommendation,
        closeIRecommendCard: this.closeIRecommendCard,
        questionId: questionId
      }, this.props)))), //Show add recommedation overlay
      external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + ((showAddRecommendation ? "showOverlayie" : "overlay") || "")
      }, external_react_default.a.createElement("section", {
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "section-theme section-theme-i-rec-1 topicview"
      }, external_react_default.a.createElement(topicviewPopupModal["a" /* default */], {
        question: selectedOptionQuestion,
        option: selectedOption,
        optionImage: selectedOptionImage,
        type: "like",
        socketId: recComponent_socket.id
      })), external_react_default.a.createElement("div", {
        style: {
          fontSize: "55px",
          padding: "9px",
          textAlign: "center"
        },
        onClick: function onClick() {
          _this2.setState({
            showAddRecommendation: false
          });
        },
        className: style_default.a.dynamic([["2386962203", [url]]]) + " " + "close-popup-iconie"
      }, external_react_default.a.createElement("span", {
        style: {
          position: "relative",
          top: "-2px"
        },
        className: style_default.a.dynamic([["2386962203", [url]]])
      }, "\xD7"))), external_react_default.a.createElement(style_default.a, {
        id: "2386962203",
        dynamic: [url]
      }, [".user-chip.__jsx-style-dynamic-selector{background-image:url(".concat(url, ");background-position :center;backgroud-repeat :no-repeat;width:50px;height:50px;border-radius:50px;position:relative;}"), ".i-rec-popup.__jsx-style-dynamic-selector{top :2%;}", ".rec-card-experience.__jsx-style-dynamic-selector{background-image :url(\"/static/quotes.svg\");background-repeat :no-repeat;background-size:27px 24px;}", ".close-popup-icon.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;background :#444;left :88%;height :40px;width :40px;color:#fff;border-radius :50px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;}", ".close-popup-icon.__jsx-style-dynamic-selector:hover{background :rbg(91,56,141) !important;}", ".close-popup-iconie.__jsx-style-dynamic-selector{top:2%;cursor:pointer;position:absolute;left :90%;height :40px;width :40px;color:rgb(91,56,141);border-radius :50px;background :#e6ecf0;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;}", ".section-theme-i-rec.__jsx-style-dynamic-selector{margin-top :0%;}", ".section-theme-i-rec-1.__jsx-style-dynamic-selector{margin-top :0%;}", ".close-popup-icon.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{position :relative;top :-2px;}", ".content.__jsx-style-dynamic-selector{font-weight :400px;-webkit-letter-spacing :0.1px;-moz-letter-spacing :0.1px;-ms-letter-spacing :0.1px;letter-spacing :0.1px;line-height :1.9;font-size :16px;}", ".rec-text.__jsx-style-dynamic-selector{position :relative;top :-1px;}", ".section-theme.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "@media(min-width :768px){.close-popup-iconie.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;height :40px;width :40px;color:rgb(91,56,141);border-radius :50px;background :#e6ecf0;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;}.close-popup-icon.__jsx-style-dynamic-selector{top:92vh;cursor:pointer;position:absolute;margin-left :-365px;height :40px;width :40px;color:#fff;border-radius :50px;background :#444;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;}.close-popup-icon.__jsx-style-dynamic-selector:hover{background-color :rgb(91,56,141);}.i-rec.__jsx-style-dynamic-selector{top :10%;left :60%;}.section-theme-i-rec.__jsx-style-dynamic-selector{margin-top :5%;position :relative;left :20%;}}", ".rounded.__jsx-style-dynamic-selector{border-radius :10px;position :relative;color :hsla(0,0%,98.8%,.8) !important;font-size :20px;}", ".rec-time.__jsx-style-dynamic-selector{font-weight :600;font-size :16px;}", ".rec-card-view-more.__jsx-style-dynamic-selector{float :right;cursor :pointer;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;margin-bottom :10px;}", ".rec-card-view-more.__jsx-style-dynamic-selector:hover{color :rgb(91,56,141);}", ".rec-card-view-more-icon.__jsx-style-dynamic-selector{position :relative;top :3px;padding-right :4px;}", ".rec-card-view-more-text.__jsx-style-dynamic-selector{font-size :12px;font-weight :600;word-spacing :.2px;}", ".pro-section.__jsx-style-dynamic-selector{padding:0.5em;color:#000;}", ".pro-section.__jsx-style-dynamic-selector>em.__jsx-style-dynamic-selector{display:block;font-size:0.9em;font-family:inherit;}", ".experience.__jsx-style-dynamic-selector{font-size:0.9em;padding:0.5em;}", ".user-rec-img.__jsx-style-dynamic-selector{width:100%;height:200px;}", ".overlay.__jsx-style-dynamic-selector{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".overla.__jsx-style-dynamic-selector{height:100%;width:0;position:fixed;z-index:6000;top:0;right:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;}", ".showOverlay.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;right:0;background-color:hsla(0,0%,97%,.78);overflow-x:hidden;}", ".showOverlay-2.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;overflow-x:hidden;}", ".showOverlayie.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;}", ".closebtn.__jsx-style-dynamic-selector{position:absolute;bottom:50px;}", ".fluke.__jsx-style-dynamic-selector{position :relative;left :45%;top :-140px;}", ".num-rec.__jsx-style-dynamic-selector{position :relative;top :-100px;}", ".card-list-stats-item.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin-right :4px;font-size :0.9em;padding :2px;border-radius :2px;text-transform :Uppercase;color :hsla(0,0%,98.8%,.8);font-weight :500;word-spacing :0.3px;cursor :pointer;}", ".card-list-stats-item.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-weight :800;color :#fcfcfc;cursor :pointer;}", ".card-list-stats-item.a.__jsx-style-dynamic-selector{text-shadow:0 2px 2px rgba(0,0,0,.6);}", ".card-list-stats-item.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector:hover{color :#fff;}", "textarea.__jsx-style-dynamic-selector{font-size:14px;font-weight:400;line-height:18px;border:1px solid #d9d9d9;outline:none;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;display:block;font-family:inherit;line-height:24px;padding:0 12px;width:100%;margin-top:12px;}", "button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:none;line-height:36px;padding:0 18px;background-color:transparent;white-space:nowrap;border-radius:0;}", ".rec-card.card-list-item.has-footer.__jsx-style-dynamic-selector{overflow:hidden;background-color:#fff;margin-bottom:16px;box-shadow:0 4px 16px 0 rgba(0,0,0,.05);padding:0;border-radius :1px;}", ".card-list-item.has-footer.__jsx-style-dynamic-selector{padding-bottom:12px;}", ".rec-card-question-header.__jsx-style-dynamic-selector{margin-bottom:12px;}", ".rec-card-question-header-flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".card-list-stats.__jsx-style-dynamic-selector{font-size:13px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;margin-bottom:6px;max-height:24px;overflow:hidden;margin-top :-40px;}", ".card-list-stats-item.__jsx-style-dynamic-selector{display:inline-block;margin-right:12px;position :relative;bottom :120px z-index :4000;}", "@media (max-width :720px){.card-list-stats.__jsx-style-dynamic-selector{margin-top :-60px;}}", "@media (min-width :900px){.close-popup-icon.__jsx-style-dynamic-selector{left :75%;}}", ".card-list-stats-seperator.__jsx-style-dynamic-selector{display:inline-block;margin-right:12px;color :#fdfdfd;text-shadow:0 2px 2px rgba(0,0,0,.6);}", ".rec-card-question-title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color :#fdfdfd;font-family :Cabin;text-shadow:0 2px 2px rgba(0,0,0,.6);font-weight :800;}", ".rec-card-question-title.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector:hover{color :hsla(0,0%,98.8%,.8);}", ".rec-card-question-title.__jsx-style-dynamic-selector{font-size:1.6em;font-weight:600;line-height:30px;display:block;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;word-break:break-word;margin:auto;color:#fdfdfd !important;padding:30px 0px;margin-top :8px;font-weight :800;}", ".rec-card-question-header-button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:12px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;height:30px;}", ".FAB.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;height:48px;background:#1b9ad1;color:#fdfdfd;border-radius:30px;vertical-align:top;-webkit-transition:background-color .15s;transition:background-color .15s;}", ".FAB.micro.__jsx-style-dynamic-selector{height:24px;border-radius:12px;}", ".FAB-label.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;line-height:43px;margin-left:21px;margin-right:6px;vertical-align:text-bottom;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;white-space:nowrap;}", ".FAB.micro.__jsx-style-dynamic-selector .FAB-label.__jsx-style-dynamic-selector{line-height:24px;margin-left:12px;margin-right:6px;}", ".rec-card-image.__jsx-style-dynamic-selector{position:relative;width:100%;min-height:201px;background:50%/cover no-repeat;color:#fff;height:100%;}", ".rec-card-image.__jsx-style-dynamic-selector:hover{background-color:rgba(0,0,0,.6);}", ".rec-card-image-gradient.__jsx-style-dynamic-selector{padding:24px;color:white;position:relative;width:100%;min-height:inherit;height:100%;background-image:linear-gradient(180deg,rgba(0,0,0,.6),rgba(0,0,0,.6));}", ".rec-card-image-gradient.__jsx-style-dynamic-selector:hover{background-image:linear-gradient(180deg,rgba(0,0,0,.75),rgba(0,0,0,.75));}", ".rec-card-image-link.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;z-index:100;}", ".rec-card-image-content.__jsx-style-dynamic-selector{left:24px;max-width:calc(100% - 48px);bottom:18px;z-index:101;}", ".rec-card-user-rec.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".rec-card-user-rec-avatar.__jsx-style-dynamic-selector{margin-right:12px;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-top :05px;}", ".avatar.__jsx-style-dynamic-selector{position:relative;display:inline-block;overflow:hidden;background:50%/contain no-repeat #fff;border-radius:50%;width:24px;height:24px;font-weight:700;text-align:center;color:#58647b;vertical-align:top;box-shadow:inset 0 0 0 1.5px #4d4d4d,0 0 0 1px #e6e8eb;z-index:100;}", ".avatar.bigger.__jsx-style-dynamic-selector{height:48px;width:48px;}", ".avatar.big.__jsx-style-dynamic-selector{height:36px;width:36px;}", ".show-mobile.__jsx-style-dynamic-selector{display:none !important;}", ".rec-card-user-rec-content.__jsx-style-dynamic-selector{font-size:14px;font-weight:400;line-height:18px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;overflow:hidden;margin-top :05px;}", ".rec-card-title.__jsx-style-dynamic-selector{font-size:24px;font-weight:600;line-height:30px;display:block;line-height:33px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-shadow:0 1px 2px rgba(0,0,0,.36);color :#fdfdfd;}", "div.__jsx-style-dynamic-selector .rec-card-content.__jsx-style-dynamic-selector{padding:24px;color :rgba(0,0,0,0.6);cursor :pointer;}", "div.__jsx-style-dynamic-selector .rec-card-content.__jsx-style-dynamic-selector:hover{color:#4d4d4d;}", ".rec-card-description.__jsx-style-dynamic-selector{font-size:16px;font-weight:400;line-height:24px;-webkit-letter-spacing:.1px;-moz-letter-spacing:.1px;-ms-letter-spacing:.1px;letter-spacing:.1px;text-transform:none;}", ".rec-card-content-con.__jsx-style-dynamic-selector,.rec-card-content-pro.__jsx-style-dynamic-selector{font-weight:bold;margin-right:5px;font-size :22px;-webkit-letter-spacing :0.4px;-moz-letter-spacing :0.4px;-ms-letter-spacing :0.4px;letter-spacing :0.4px;text-transform :uppercase;}", ".rec-card-content-con.__jsx-style-dynamic-selector{color:#cb1a4a;}", ".rec-card-content-pro.__jsx-style-dynamic-selector{color:#1d9127;}", ".community-recommendation-body.__jsx-style-dynamic-selector{position:relative;display:inline-block;padding-left:12px;color:#595959;}", ".community-recommendation-body-testimonial.__jsx-style-dynamic-selector{word-break:break-word;}", ".community-recommendation-body-testimonial.__jsx-style-dynamic-selector:before{position:absolute;top:0;left:0;width:27px;height:24px;background-size:27px 24px;background-image:url(\"\");content:\"\";}", ".community-recommendation-rec-text.__jsx-style-dynamic-selector{display:inline-block;}", ".community-recommendation-rec-footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding-top:12px;line-height:30px;padding-bottom:18px;}", ".community-recommendation-rec-reaction-button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".reaction-button-set-link.__jsx-style-dynamic-selector{margin-right:10px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}", ".reaction-button.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:30px;line-height:30px;border-radius:4px;box-shadow:inset 0 0 0 1.5px #4d4d4d;color:#4d4d4d;padding:0 6px;vertical-align:middle;}", ".reaction-button.has-text.__jsx-style-dynamic-selector{font-weight:700;}", ".icon-trophy.__jsx-style-dynamic-selector{color:#f2b203;}", ".reaction-button-text.__jsx-style-dynamic-selector{margin:0 3px 0 6px;}", ".community-recommendation-rec-footer-link.__jsx-style-dynamic-selector{font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:24px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", ".community-recommendation-rec-footer-comments-icon.__jsx-style-dynamic-selector{height:24px !important;width:24px !important;vertical-align:text-bottom;color:#4d4d4d;}", ".community-recommendation-rec-expand-link.__jsx-style-dynamic-selector{margin-left:auto !important;color:#4d4d4d;}", ".icon-expand.__jsx-style-dynamic-selector{height:18px !important;width:18px !important;margin-right:3px;}", ".card-list-seperator.__jsx-style-dynamic-selector{width:100%;height:1px;background-color:#e6e8eb;}", ".rec-card-comment.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding-top:12px;}", ".rec-card-comment-avatar.__jsx-style-dynamic-selector{margin-right:6px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", ".avatar.__jsx-style-dynamic-selector:before,.avatar.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;height:100%;}", ".avatar.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{left:0;}", ".rec-card-comment-input-container.__jsx-style-dynamic-selector{position:relative;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", "textarea.rec-card-comment-input.__jsx-style-dynamic-selector{height:36px;line-height:18px;font-size:14px;padding:9px;padding-right:48px;margin:0;border-radius:9px;border:none;background-color:#ecf0f0;resize:none;}", ".rec-card-comment-input-submit.__jsx-style-dynamic-selector{position:absolute;bottom:0;right:0;padding:9px;font-size:12px;line-height:16px;font-weight:700;color:#1b9ad1;text-transform:uppercase;-webkit-transition:.15s;transition:.15s;}", ".rec-card-comment-input-submit.disabled.__jsx-style-dynamic-selector{color:#8d959c;}", "a.disabled.__jsx-style-dynamic-selector{pointer-events:none;cursor:default;}", "@media (max-width:1023px){.rec-card-image-content.__jsx-style-dynamic-selector{left:18px;margin-right:18px;}}", "@media screen (min-width :768px) and (max-width :900px ){.num-rec.__jsx-style-dynamic-selector{position :relative;top :-80px;}}", "@media screen (min-width :900px) and (max-width :1220px ){.num-rec.__jsx-style-dynamic-selector{position :relative;top :-120px;border :1px soild red;}}", "@media (max-width:767px){.card-list-item.__jsx-style-dynamic-selector{margin:0 0 30px;padding:12px;}.rec-card-question-title.__jsx-style-dynamic-selector{font-size:19px;line-height:30px;padding:20px 0px 15px 0px;}.rec-card-image.__jsx-style-dynamic-selector{width:calc(100% + 24px);left:-12px;min-height:138px;}.num-rec.__jsx-style-dynamic-selector{position :relative;top :-80px;}.card-list-stats-item.a.__jsx-style-dynamic-selector{background :none;color :#595959 !important;}.card-list-stats-item.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color :#fdfdfd;font-weight :800;}.rec-card-image-content.__jsx-style-dynamic-selector{bottom:12px;}.rec-card-user-rec-avatar.__jsx-style-dynamic-selector{margin-right:6px;}.hide-mobile.__jsx-style-dynamic-selector{display:none !important;}.show-mobile.__jsx-style-dynamic-selector{display:block !important;}.rec-card-title.__jsx-style-dynamic-selector{font-size:21px;line-height:30px;}.community-recommendation-body.__jsx-style-dynamic-selector{padding-left:0;}.community-recommendation-body-testimonial.__jsx-style-dynamic-selector:before{-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px);}.community-recommendation-rec-footer.__jsx-style-dynamic-selector{padding-bottom:12px;}}", "@media (max-width:424px){.rec-card-image.__jsx-style-dynamic-selector{min-height:120px;}.num-rec.__jsx-style-dynamic-selector{position :relative;top :-110px;}.reaction-button.__jsx-style-dynamic-selector{padding-left:6px;padding-right:6px;}.community-recommendation-rec-footer-link.__jsx-style-dynamic-selector{margin-left:12px;}.rec-card-content.__jsx-style-dynamic-selector{padding:12px;}.rec-card-description.__jsx-style-dynamic-selector{font-size:1rem;}}"])));
    }
  }]);

  return RecComponent;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/feedCard.js
var feedCard = __webpack_require__("W33c");

// CONCATENATED MODULE: ./components/homepage/IRecommend2.js










var IRecommend2_IRecommend2 =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(IRecommend2, _Component);

  function IRecommend2() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, IRecommend2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(IRecommend2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      irecommendCard: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowIrecommend", function () {
      _this.setState(function (previousState) {
        return {
          irecommendCard: !previousState.irecommendCard
        };
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(IRecommend2, [{
    key: "render",
    value: function render() {
      var showIrecommendCard = this.props.showIrecommendCard;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        onClick: showIrecommendCard,
        className: "jsx-4023593169" + " " + "i-rec-container"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4023593169" + " " + "i-rec-content"
      }, "I RECOMMEND..."), external_react_default.a.createElement("span", {
        className: "jsx-4023593169" + " " + "i-rec-icon-container"
      }, external_react_default.a.createElement("svg", {
        style: {
          width: "33px",
          height: "33px"
        },
        viewBox: "0 0 24 24",
        className: "jsx-4023593169"
      }, external_react_default.a.createElement("path", {
        fill: "#fdfdfd",
        d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z",
        className: "jsx-4023593169"
      })))), external_react_default.a.createElement(style_default.a, {
        id: "4023593169"
      }, [".i-rec-container.jsx-4023593169{cursor:pointer;background:rgb(91,56,141);border-radius:22px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".i-rec-content.jsx-4023593169{margin-left:9px;font-size:0.6em;font-weight:600;}", ".i-rec-icon-container.jsx-4023593169{position:relative;top:3px;padding-left:3px;}", "@media (min-width:768px){.i-rec-container.jsx-4023593169{cursor:pointer;background:rgb(91,56,141);box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.i-rec-content.jsx-4023593169{padding-left:10px;padding-right:4px;font-size:12px;font-weight:600;}.i-rec-icon-container.jsx-4023593169{position:relative;top:3px;}}"]));
    }
  }]);

  return IRecommend2;
}(external_react_["Component"]);

/* harmony default export */ var homepage_IRecommend2 = (IRecommend2_IRecommend2);
// CONCATENATED MODULE: ./components/homepage/helpRecommendCard.js















var helpRecommendCard_HelpRecommendCard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HelpRecommendCard, _Component);

  function HelpRecommendCard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HelpRecommendCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HelpRecommendCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      data: _this.props.topics.data.slice(0, 1)
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleNextQuestion", function () {
      if (_this.question) {
        var question = _this.state.data[0].question.replace("?", "");

        Object(apiRequests["G" /* GetNextQuestion */])(question).then(function (result) {
          _this.setState({
            data: result.data
          });
        }).then(function () {
          _this.props.holdQuestion(_this.state.data[0].question.replace("?", ""));

          _this.props.holdId(_this.state.data[0]._id);
        }).catch(function (err) {
          return console.log(err);
        });
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HelpRecommendCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.question) {
        // this.props.holdQuestion(this.question.innerHTML.replace("?", ""));
        Object(apiRequests["A" /* GetAQuestionFromQuestions */])().then(function (result) {
          _this2.setState({
            data: result.data
          });

          _this2.props.holdQuestion(_this2.state.data[0].question.replace("?", ""));

          _this2.props.holdId(_this2.state.data[0]._id);
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var data = this.state.data;
      return external_react_default.a.createElement("div", null, data.length != 0 ? external_react_default.a.createElement("div", {
        className: "jsx-2211287403" + " " + "card-list-item"
      }, external_react_default.a.createElement("h5", {
        className: "jsx-2211287403" + " " + "card-list-answer-subtitle"
      }, external_react_default.a.createElement("span", {
        className: "jsx-2211287403"
      }, "What is your take on this question?"), external_react_default.a.createElement("button", {
        onClick: this.handleNextQuestion,
        className: "jsx-2211287403" + " " + "button-skip"
      }, "Skip")), data.map(function (item) {
        var newQuestionString = Object(removeSpaces["b" /* default */])(item.question);
        return external_react_default.a.createElement("span", {
          key: item._id,
          className: "jsx-2211287403" + " " + "card-list-answer-title"
        }, external_react_default.a.createElement(link_default.a, {
          href: "/topic/".concat(newQuestionString)
        }, external_react_default.a.createElement("a", {
          href: "#",
          ref: function ref(e) {
            return _this3.question = e;
          },
          id: item,
          className: "jsx-2211287403"
        }, item.question, "?")));
      }), external_react_default.a.createElement("div", {
        className: "jsx-2211287403" + " " + "card-list-seperator"
      }), external_react_default.a.createElement("div", {
        className: "jsx-2211287403" + " " + "card-list-footer center"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2211287403" + " " + "help-recommend-holder"
      }, external_react_default.a.createElement("span", {
        className: "jsx-2211287403" + " " + "help-recommend-call-to-action"
      }, external_react_default.a.createElement(external_react_bootstrap_["OverlayTrigger"], {
        key: "top",
        placement: "top",
        overlay: external_react_default.a.createElement(external_react_bootstrap_["Tooltip"], null, "Recommend or add the options you think are the best")
      }, external_react_default.a.createElement("span", {
        className: "jsx-2211287403"
      }, external_react_default.a.createElement(homepage_IRecommend2, {
        showIrecommendCard: this.props.showIrecommendCard
      })))))), external_react_default.a.createElement(style_default.a, {
        id: "2211287403"
      }, [".card-list-answer-subtitle.jsx-2211287403{line-height:4px;margin-top:18px;color:#4e4376 !important;font-family:Cabin;font-weight:600;font-size:16px;}", ".help-recommend-holder.jsx-2211287403{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".button-skip.jsx-2211287403{position:relative;top:-15px;font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;float:right;height:36px;background-color:#e6e8eb;border-radius:9px;color:#8d959c;outline:0;border:0;padding:0 18px;white-space:nowrap;cursor:pointer;}", ".help-recommend-call-to-action.jsx-2211287403{padding:5px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;cursor:pointer;color:#fff;}", ".card-list-answer-title.jsx-2211287403 a.jsx-2211287403{-webkit-text-decoration:none;text-decoration:none;font-family:Cabin;font-size:inherit;color:#000 !important;line-height:1.2;text-align:center;}", ".card-list-answer-title.jsx-2211287403{margin:auto;font-size:21px;font-weight:600;line-height:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:102px;position:relative;margin:0;padding:6px 0;width:100%;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".card-list-item.jsx-2211287403{overflow:hidden;background:#fdfdfd;margin-bottom:5px;padding:18px;border:1px solid #e6e8eb;border-radius:2px;max-height:300px;min-height:200px;border-radius:1px;}", "@media (max-width:767px){.card-list-answer-title.jsx-2211287403{font-size:18px;line-height:30px;}.card-list-item.jsx-2211287403{margin:0 0 30px;padding:12px;}}"])) : null);
    }
  }]);

  return HelpRecommendCard;
}(external_react_["Component"]);

/* harmony default export */ var helpRecommendCard = (helpRecommendCard_HelpRecommendCard);
// CONCATENATED MODULE: ./components/homepage/topbarComponent.js











var topbarComponent_TopBar =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(TopBar, _Component);

  function TopBar() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, TopBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(TopBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      day: false,
      week: false,
      month: false,
      all: true
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleDay", function () {
      _this.setState({
        day: true,
        week: false,
        month: false,
        all: false
      }, function () {
        _this.props.sort("day");
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleMonth", function () {
      _this.setState({
        day: false,
        week: false,
        month: true,
        all: false
      }, function () {
        _this.props.sort("month");
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleWeek", function () {
      _this.setState({
        day: false,
        week: true,
        month: false,
        all: false
      }, function () {
        _this.props.sort("week");
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleAll", function () {
      _this.setState({
        day: false,
        week: false,
        month: false,
        all: true
      }, function () {
        _this.props.sort("all");
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(TopBar, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          week = _this$state.week,
          day = _this$state.day,
          month = _this$state.month,
          all = _this$state.all;
      return external_react_default.a.createElement("div", {
        className: "jsx-3163037673" + " " + "homepage-top-bar"
      }, external_react_default.a.createElement("div", {
        onClick: this.handleDay,
        className: "jsx-3163037673" + " " + ((day ? "tab-holder active" : "tab-holder") || "")
      }, external_react_default.a.createElement("a", {
        className: "jsx-3163037673" + " " + ((day ? "a-active" : "a-inactive") || "")
      }, external_react_default.a.createElement(Icons["g" /* DayIcon */], {
        color: day ? "rgb(91, 56, 141) " : "rgb(117,86,113)"
      }), external_react_default.a.createElement("span", {
        className: "jsx-3163037673" + " " + "icon-text"
      }, "Day"))), external_react_default.a.createElement("div", {
        onClick: this.handleWeek,
        className: "jsx-3163037673" + " " + ((week ? "tab-holder active" : "tab-holder") || "")
      }, external_react_default.a.createElement("a", {
        className: "jsx-3163037673" + " " + ((week ? "a-active" : "a-inactive") || "")
      }, external_react_default.a.createElement(Icons["v" /* WeekIcon */], {
        color: week ? "rgb(91, 56, 141) " : "rgb(117,86,113)"
      }), external_react_default.a.createElement("span", {
        className: "jsx-3163037673" + " " + "icon-text"
      }, "Week"))), external_react_default.a.createElement("div", {
        onClick: this.handleMonth,
        className: "jsx-3163037673" + " " + ((month ? "tab-holder active" : "tab-holder") || "")
      }, external_react_default.a.createElement("a", {
        className: "jsx-3163037673" + " " + ((month ? "a-active" : "a-inactive") || "")
      }, external_react_default.a.createElement(Icons["l" /* MonthIcon */], {
        color: month ? "rgb(91, 56, 141) " : "rgb(117,86,113)"
      }), external_react_default.a.createElement("span", {
        className: "jsx-3163037673" + " " + "icon-text"
      }, "Month"))), external_react_default.a.createElement("div", {
        onClick: this.handleAll,
        className: "jsx-3163037673" + " " + ((all ? "tab-holder active" : "tab-holder") || "")
      }, external_react_default.a.createElement("a", {
        className: "jsx-3163037673" + " " + ((all ? "a-active" : "a-inactive") || "")
      }, external_react_default.a.createElement(Icons["b" /* AllIcon */], {
        color: all ? "rgb(91, 56, 141) " : "rgb(117,86,113)"
      }), external_react_default.a.createElement("span", {
        className: "jsx-3163037673" + " " + "icon-text"
      }, "All Time"))), external_react_default.a.createElement(style_default.a, {
        id: "3163037673"
      }, [".homepage-top-bar.jsx-3163037673{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;background:#e6e8eb;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:50px;border-radius:15px;}", ".tab-holder.jsx-3163037673{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-top:1px solid #e6e8eb;border-left:1px solid #e6e8eb;border-right:1px solid #e6e8eb;-webkit-flex-basis:200px;-ms-flex-preferred-size:200px;flex-basis:200px;background-color:#f4f6f8;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}", ".a-inactive.jsx-3163037673{font-weight:400;color:rgb(117,86,113) !important;font-family:\"Cabin\";font-size:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".a-active.jsx-3163037673{color:rgb(91,56,141) !important;font-family:\"Cabin\";font-size:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".active.jsx-3163037673{background:#fdfdfd;}", ".icon-text.jsx-3163037673{position:relative;}"]));
    }
  }]);

  return TopBar;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/homepage/homepage.js





















var homepage_socket = external_socket_io_client_default()(config["c" /* default */]);

var homepage_HomePage =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HomePage, _Component);

  function HomePage() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HomePage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      showQuestion: false,
      showRec: true,
      improve: false,
      showIrecommendCard: false,
      showAddRecommendation: false,
      selectedOption: "",
      selectedOptionImage: "",
      selectedOptionQuestion: "",
      topics: _this.props.topics,
      recommendations: _this.props.recommendations,
      question: "",
      id: ""
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSortBy", function (period) {
      //Fetch items here
      Object(apiRequests["gb" /* SortRecommendations */])(period).then(function (result) {
        // console.log(result.data);
        _this.setState({
          recommendations: result.data
        });
      }).catch(function (error) {
        console.log(error);
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSortQuestions", function (period) {
      Object(apiRequests["fb" /* SortQuestions */])(period).then(function (result) {
        _this.setState({
          topics: result.data
        }); // console.log(result.data);

      }).catch(function (error) {
        return console.log(error);
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showQuestionCard", function () {
      _this.setState({
        showQuestion: true,
        showRec: false,
        improve: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleShowIrecommend", function () {
      _this.setState(function (previousState) {
        return {
          showIrecommendCard: !previousState.showIrecommendCard
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleAddRecommendation", function (selectedOption, selectedOptionImage, selectedOptionQuestion) {
      _this.setState(function (previousState) {
        return {
          showAddRecommendation: !previousState.showAddRecommendation,
          showIrecommendCard: false,
          selectedOption: selectedOption,
          selectedOptionImage: selectedOptionImage,
          selectedOptionQuestion: selectedOptionQuestion
        };
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "addSelectedOption", function (option, image) {
      _this.setState({
        selectedOption: option,
        selectedOptionImage: image
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "hideQuestionCard", function () {
      _this.setState({
        showQuestion: false,
        showRec: true,
        improve: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showImprove", function () {
      _this.setState({
        improve: true,
        showQuestion: false,
        showRec: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getQuestion", function (question) {
      console.log("yea am here", question);

      _this.setState({
        question: question
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getId", function (id) {
      console.log("yea am here", id);

      _this.setState({
        id: id
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HomePage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          showQuestion = _this$state.showQuestion,
          showRec = _this$state.showRec,
          improve = _this$state.improve,
          showAddRecommendation = _this$state.showAddRecommendation,
          selectedOption = _this$state.selectedOption,
          selectedOptionQuestion = _this$state.selectedOptionQuestion,
          selectedOptionImage = _this$state.selectedOptionImage,
          showIrecommendCard = _this$state.showIrecommendCard,
          topics = _this$state.topics,
          recommendations = _this$state.recommendations;
      var props = this.props;
      var highlight = "nav-header-item highlight";
      var customStyle = {
        display: "flex",
        justifyContent: "center"
      };
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "home-page"
      }, external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "home-page-view"
      }, external_react_default.a.createElement("div", {
        style: {
          background: "transparent",
          boxShadow: "none"
        },
        className: "jsx-30808399" + " " + "nav-header scrollable show-mobile"
      }, external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "nav-header-content page-content"
      }, external_react_default.a.createElement("div", {
        style: customStyle,
        className: "jsx-30808399" + " " + "nav-header-list"
      }, external_react_default.a.createElement("a", {
        onClick: this.hideQuestionCard,
        className: "jsx-30808399" + " " + ((showRec ? highlight : "nav-header-item") || "")
      }, "Recommendations"), external_react_default.a.createElement("a", {
        onClick: this.showQuestionCard,
        className: "jsx-30808399" + " " + ((showQuestion ? highlight : " nav-header-item ") || "")
      }, "Question"), external_react_default.a.createElement("a", {
        onClick: this.showImprove,
        className: "jsx-30808399" + " " + ((improve ? highlight : " nav-header-item ") || "")
      }, "Top")))), external_react_default.a.createElement("div", {
        className: "jsx-30808399"
      }, external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "page-content"
      }, external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "new-feed-container"
      }, external_react_default.a.createElement(feedCard["a" /* default */], this.props)), external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "home-page-feed card-list"
      }, external_react_default.a.createElement(helpRecommendCard, Object(esm_extends["a" /* default */])({
        showIrecommendCard: this.handleShowIrecommend
      }, this.props, {
        holdQuestion: this.getQuestion,
        holdId: this.getId
      })), external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "rec-card-list"
      }, showRec && external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "rec-card-list-header"
      }, "Recent"), showQuestion && external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "rec-card-list-header"
      }, "Recent"), improve && external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "rec-card-list-header"
      }, "Sort Question Populartiy By"), improve && external_react_default.a.createElement(topbarComponent_TopBar, {
        sort: this.handleSortQuestions
      }), showQuestion && external_react_default.a.createElement(external_react_default.a.Fragment, null, topics.data.map(function (item) {
        return external_react_default.a.createElement(homepage_QuestionCard, {
          key: item._id,
          question: item.question,
          questionId: item._id,
          optionImage: item.optionImage,
          tag: item.tag,
          option: item.option,
          login: _this2.props.login
        });
      })), showRec && external_react_default.a.createElement(external_react_default.a.Fragment, null, recommendations.result.map(function (item) {
        return external_react_default.a.createElement(recComponent_RecComponent, {
          id: item._id,
          key: item._id,
          tag: item.tag,
          question: item.question,
          data: props,
          option: item.option,
          userImage: item.userImage,
          username: item.username,
          experience: item.experience,
          pro: item.pro,
          con: item.con,
          proTitle: item.proTitle,
          conTitle: item.conTitle,
          userId: item.userId,
          createdAt: item.createdAt,
          login: _this2.props.login
        });
      })), improve && external_react_default.a.createElement(external_react_default.a.Fragment, null, topics.data.map(function (item) {
        return external_react_default.a.createElement(homepage_QuestionCard, {
          key: item._id,
          question: item.question,
          questionId: item._id,
          optionImage: item.optionImage,
          tag: item.tag,
          option: item.option
        });
      }))))))), external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + "feed"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-30808399" + " " + "feed-card"
      }, external_react_default.a.createElement("li", {
        className: "jsx-30808399"
      }, external_react_default.a.createElement("a", {
        onClick: this.hideQuestionCard,
        className: "jsx-30808399" + " " + ((showRec ? "a-feedie highlight" : "a-feed") || "")
      }, external_react_default.a.createElement("i", {
        className: "jsx-30808399" + " " + "fas fa-poll-h"
      }), "Recommendations")), external_react_default.a.createElement("li", {
        className: "jsx-30808399"
      }, external_react_default.a.createElement("a", {
        onClick: this.showQuestionCard,
        className: "jsx-30808399" + " " + ((showQuestion ? "a-feedie highlight" : "a-feed") || "")
      }, external_react_default.a.createElement("i", {
        style: {
          position: "relative",
          left: "-4px"
        },
        className: "jsx-30808399"
      }, external_react_default.a.createElement(Icons["o" /* QuestionBox */], {
        width: "24px",
        height: "24px",
        color: showQuestion ? "rgb(91, 56, 141)" : "#58647b"
      })), external_react_default.a.createElement("span", {
        style: {
          position: "relative",
          left: "-6px",
          top: "-4px"
        },
        className: "jsx-30808399"
      }, "Questions"))), external_react_default.a.createElement("li", {
        className: "jsx-30808399"
      }, external_react_default.a.createElement("a", {
        onClick: this.showImprove,
        className: "jsx-30808399" + " " + ((improve ? "a-feedie highlight" : "a-feed") || "")
      }, external_react_default.a.createElement("i", {
        style: {
          position: "relative",
          left: "-4px"
        },
        className: "jsx-30808399"
      }, external_react_default.a.createElement(Icons["q" /* StarBoxIcon */], {
        width: "24px",
        height: "24px",
        color: improve ? "rgb(91, 56, 141)" : "#58647b"
      })), external_react_default.a.createElement("span", {
        style: {
          position: "relative",
          left: "-6px",
          top: "-4px"
        },
        className: "jsx-30808399"
      }, "Top")))))), showIrecommendCard && external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + ((showIrecommendCard ? "showOverlay" : "overlay") || "")
      }, external_react_default.a.createElement("section", {
        className: "jsx-30808399" + " " + "section-theme section-theme-i-rec-1"
      }, external_react_default.a.createElement(homepage_IrecommendCard, {
        question: this.state.question,
        questionId: this.state.id,
        handleShowIrecommend: this.handleAddRecommendation,
        login: this.props.login,
        closeIRecommendCard: this.handleShowIrecommend
      }))), //Show add recommedation overlay
      external_react_default.a.createElement("div", {
        className: "jsx-30808399" + " " + ((showAddRecommendation ? "showOverlayie" : "overlay") || "")
      }, external_react_default.a.createElement("section", {
        className: "jsx-30808399" + " " + "section-theme section-theme-i-rec"
      }, external_react_default.a.createElement(topicviewPopupModal["a" /* default */], {
        question: selectedOptionQuestion,
        option: selectedOption,
        optionImage: selectedOptionImage,
        type: "like",
        socketId: homepage_socket.id
      })), external_react_default.a.createElement("div", {
        style: {
          fontSize: "55px",
          padding: "9px",
          textAlign: "center"
        },
        onClick: function onClick() {
          _this2.setState({
            showAddRecommendation: false
          });
        },
        className: "jsx-30808399" + " " + "close-popup-iconie"
      }, external_react_default.a.createElement("span", {
        style: {
          position: "relative",
          top: "-2px"
        },
        className: "jsx-30808399"
      }, "\xD7"))), external_react_default.a.createElement(style_default.a, {
        id: "30808399"
      }, ["@media (min-width:1024px){.new-feed-container.jsx-30808399{position:relative;float:right;left:-3.6%;top:42px;}}", "@media screen and (min-width:1024px) and (max-width:1280px){.new-feed-container.jsx-30808399{left:-12px;}}", "@media (max-width:1024px){.new-feed-container.jsx-30808399{display:none;}}", "@media (max-width:767px){.feed.jsx-30808399{display:none;}.feed-card.jsx-30808399{display:none;}}", ".overlay.jsx-30808399{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".showOverlay.jsx-30808399{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".showOverlayie.jsx-30808399{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}", ".section-theme-i-rec.jsx-30808399{margin-top:0%;}", ".section-theme-i-rec-1.jsx-30808399{margin-top:25%;}", ".close-popup-icon.jsx-30808399>span.jsx-30808399{position:relative;top:-2px;}", ".section-theme.jsx-30808399{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "@media (min-width:768px){.close-popup-iconie.jsx-30808399{top:0;cursor:pointer;position:absolute;left:66%;height:40px;width:40px;color:rgb(91,56,141);border-radius:50px;background:#e6ecf0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.close-popup-iconie-irec.jsx-30808399{top:53.2%;cursor:pointer;position:absolute;left:61.5%;height:40px;width:40px;color:rgb(91,56,141);border-radius:50px;background:#e6ecf0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}", ".feedCardWhenUserisLogged.jsx-30808399{position:fixed;top:15.4%;left:72.3%;}", ".feedCardWhenUserIsNotLogged.jsx-30808399{position:relative;left:905px;top:-123px;}", ".feedCard.jsx-30808399{position:absolute;left:80.03%;}", ".feed.jsx-30808399{display:block;box-sizing:border-box;position:absolute;left:5.8%;top:42px !important;}", "i.jsx-30808399{position:relative;padding-right:5px;top:1px;}", "li.jsx-30808399{list-style-type:none;margin-bottom:10px;padding-right:20px;cursor:pointer;overflow:hidden;box-sizing:border-box;}", "li.jsx-30808399 .a-feed.jsx-30808399{font-size:1.2em;font-family:inherit;font-weight:600;text-spacing:0.9px;color:#58647b !important;padding:0px;}", "li.jsx-30808399 .a-feedie.jsx-30808399{font-size:1.2em;font-family:inherit;font-weight:600;text-spacing:0.9px;color:rgb(91,56,141) !important;padding:0px;}", ".active.jsx-30808399{background:#e9ebee;}", ".card-list-item.jsx-30808399{overflow:hidden;background-color:#fdfdfd;margin-bottom:0px;padding:18px;border:1px solid #e6e8eb;border-radius:5px;}", "h1.jsx-30808399,h2.jsx-30808399,h3.jsx-30808399,h4.jsx-30808399,h5.jsx-30808399,h6.jsx-30808399{font-weight:inherit;line-height:24px;font-size:inherit;color:#0d0d0d;}", ".home-page.jsx-30808399{height:100vh;font-size:16px;font-weight:400;line-height:24px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;text-transform:none;}", ".home-page-view.jsx-30808399{max-width:none;min-width:320px;width:auto;margin:0 auto;padding:0;}", ".page-content.jsx-30808399{max-width:1280px;margin:0 auto;padding-left:36px;padding-right:36px;}", ".page-content.jsx-30808399:after{content:\"\";display:block;clear:both;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".tag-selector-header.jsx-30808399{position:relative;background-image:linear-gradient(135deg,#2b5876,#4e4376);-webkit-transition:height 0.2s;transition:height 0.2s;min-height:252px;}", ".tag-selector-tag-builder.jsx-30808399{position:absolute;left:50%;width:100%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;-ms-flex-line-pack:space-between;align-content:space-between;padding-top:24px;padding-bottom:24px;color:#fff;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}", ".tag-selector-tag-builder-content.jsx-30808399{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;max-width:100%;}", ".tag-selector-tag-builder-section.jsx-30808399{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;max-width:50%;text-align:center;margin:0 36px;}", ".tag-selector-tag-builder-section.jsx-30808399:first-child{margin-left:0;}", ".tag-selector-tag-builder-label.jsx-30808399{font-size:18px;font-weight:600;line-height:24px;margin-bottom:12px;}", ".tag-selector-search.jsx-30808399{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:624px;margin:0 12px;}", ".icon.tag-selector-search-icon.jsx-30808399{position:absolute;left:0;width:18px;height:18px;color:#b3b3b3;margin:0 12px;font-size:18px;line-height:36px;}", "input[type=\"text\"].tag-selector-search-input.jsx-30808399{font-size:14px;font-weight:400;line-height:18px;border:1px solid #d9d9d9;outline:none;border-radius:4px;display:block;font-family:inherit;line-height:24px;padding:0 12px;width:100%;margin-top:12px;height:36px;padding-left:42px;margin:0;line-height:36px;border-radius:4px;border:none;}", ".tag-selector-tag-builder-copy.jsx-30808399{margin-top:18px;}", ".tag-selector-tag-builder-list.jsx-30808399{margin-top:12px;overflow:hidden;}", ".tag-selector-tag-builder-list.suggested.jsx-30808399{max-height:108px;}", ".tag-selector-tag.jsx-30808399{color:inherit;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.15s;transition:color 0.15s;font-size:13px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:27px;padding:0 9px;margin:3px;border-radius:15px;box-shadow:inset 0 0 0 1.5px #4d4d4d;color:#4d4d4d;white-space:nowrap;-webkit-transition:background-color 0.15s;transition:background-color 0.15s;height:21px;line-height:21px;margin:0 1.5px 3px;color:#fff;box-shadow:inset 0 0 0 1.5px hsla(0,0%,100%,0.4);}", ".tag-selector-tag-builder-submit.jsx-30808399{-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;margin-top:24px;text-align:center;}", "button.jsx-30808399{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:none;line-height:36px;padding:0 18px;background-color:transparent;white-space:nowrap;border-radius:0;}", "button.jsx-30808399:hover{cursor:pointer;}", ".text-button.jsx-30808399{color:#fff;min-width:120px;font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;}", ".text-button.jsx-30808399:hover{background-color:transparent;}", ".primary-button.jsx-30808399{min-width:120px;font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;box-shadow:none;border-radius:9px;color:#fff;background-color:#1b9ad1;}", ".nav-header.jsx-30808399{width:100%;position:relative;overflow:hidden;box-shadow:0 0 0 1px #e6e8eb;line-height:36px;background-color:#fdfdfd;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);height:36px;}", ".nav-header.scrollable.jsx-30808399{overflow-x:auto;}", ".show-mobile.jsx-30808399{display:none;}", ".nav-header-content.jsx-30808399{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".nav-header.scrollable.jsx-30808399 .nav-header-content.jsx-30808399{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap;}", ".nav-header-list.jsx-30808399{-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-basis:100px;-ms-flex-preferred-size:100px;flex-basis:100px;}", ".nav-header.scrollable.jsx-30808399 .nav-header-list.jsx-30808399{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "a.jsx-30808399{color:#000;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.15s;transition:color 0.15s;}", ".nav-header-item.jsx-30808399{font-size:11px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#58647b !important;margin-right:13px;vertical-align:top;font-family:Cabin;}", ".nav-header-item.selected.jsx-30808399{position:relative;color:#1b9ad1;}", ".nav-sidebar.jsx-30808399{position:relative;width:258px;min-height:24px;padding-top:42px;}", ".nav-sidebar.left.jsx-30808399{float:left;}", ".nav-sidebar.left.jsx-30808399 .nav-sidebar-content.jsx-30808399{padding-right:60px;}", ".nav-sidebar-content.jsx-30808399{width:258px;}", ".home-page-feed.jsx-30808399{padding-top:42px;padding-bottom:48px;margin-right:300px;margin-left:258px;padding-right:27px;box-shadow:none;}", ".card-list-answer-skip.jsx-30808399{font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;float:right;height:36px;border-radius:9px;color:#60338d;}", ".card-list-answer-subtitle.jsx-30808399{line-height:4px;margin:auto;}", ".card-list-answer-title.jsx-30808399{margin:auto;font-size:18px;font-weight:600;line-height:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:102px;padding:6px 0;text-align:center;}", ".card-list-footer.jsx-30808399{padding-top:18px;}", ".card-list-footer.center.jsx-30808399{text-align:center;}", ".FAB.jsx-30808399{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;text-align:center;height:48px;color:#fff !important;text-align:center !important;border-radius:5px;vertical-align:top;font-size:10px;-webkit-transition:background-color 0.15s;transition:background-color 0.15s;}", ".FAB.small.jsx-30808399{height:42px;border-radius:21px;}", "a.jsx-30808399{color:#000 !important;}", ".rec-card-list.jsx-30808399{margin-bottom:30px;}", ".rec-card-list-header.jsx-30808399{font-size:18px;font-weight:600;line-height:27px;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;line-height:48px;color:#4d4d4d;}", "@media (max-width:1279px){.home-page-feed.jsx-30808399{margin-left:204px;margin-right:240px;}}", "@media (max-width:1023px){.tag-selector-header.jsx-30808399{min-height:270px;}.home-page-feed.jsx-30808399{padding-right:0;margin-right:auto;box-shadow:none;padding-top:42px;}}", "@media (max-width:767px){.page-content.jsx-30808399{padding-left:12px;padding-right:12px;}.tag-selector-header.jsx-30808399{min-height:497px;}.tag-selector-tag-builder-content.jsx-30808399{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.tag-selector-tag-builder-section.jsx-30808399{margin:0 0 36px;max-width:none;}.tag-selector-tag-builder-label.jsx-30808399{line-height:27px;margin-bottom:24px;}.tag-selector-tag-builder-list.jsx-30808399{margin-top:18px;}.tag-selector-tag-builder-list.jsx-30808399{max-height:80px;}.tag-selector-tag-builder-submit.jsx-30808399{margin-top:0;}.show-mobile.jsx-30808399{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.nav-sidebar.jsx-30808399{display:none;}.home-page-feed.jsx-30808399{margin-left:auto;padding-top:30px;}.home-page-view.jsx-30808399{background-color:inherit;}.card-list-item.jsx-30808399{margin:0 0 30px;padding:12px;}.card-list-answer-title.jsx-30808399{font-size:21px;line-height:30px;}.card-list-footer.jsx-30808399{padding-top:12px;}.FAB-label.jsx-30808399{line-height:42px;margin-left:18px;margin-right:6px;}.rec-card-list-header.jsx-30808399{font-size:18px;line-height:24px;line-height:36px;margin-top:24px;margin-bottom:24px;padding-left:12px;}}", "@media only screen and (min-width:768px) and (max-width:900px){.feed.jsx-30808399{left:0;}}", "@media only screen and (min-width:900px) and (max-width:1025px){.feed.jsx-30808399{left:0px;}}", "@media only screen and (min-width:1025px) and (max-width:1281px){.feed.jsx-30808399{left:0px;}}"])));
    }
  }]);

  return HomePage;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__("rCsO");

// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__("tQzz");
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);

// CONCATENATED MODULE: ./components/landingPage.js









var landingPage_LandingPage = function LandingPage(_ref) {
  var openSignup = _ref.openSignup;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "jsx-3254415445" + " " + "landing"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3254415445" + " " + "landing-page"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3254415445"
  }, external_react_default.a.createElement(external_react_typist_default.a, {
    cursor: {
      hideWhenDone: true
    }
  }, "Top and bias free recommendations always!")), external_react_default.a.createElement("p", {
    className: "jsx-3254415445"
  }, "Top rating is more than just a review web app. You get the top and best products always"), external_react_default.a.createElement("div", {
    className: "jsx-3254415445" + " " + "user-action"
  }, external_react_default.a.createElement("span", {
    className: "jsx-3254415445"
  }, external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return openSignup();
    },
    className: "jsx-3254415445" + " " + "loginBtnn loginBtnn--facebook"
  }, external_react_default.a.createElement("i", {
    className: "jsx-3254415445" + " " + "fab fa-facebook-f"
  }), "Sign up with Facebook")), external_react_default.a.createElement("span", {
    className: "jsx-3254415445"
  }, external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return openSignup();
    },
    className: "jsx-3254415445" + " " + "google-auth-buttonn"
  }, external_react_default.a.createElement("img", {
    src: "https://img.icons8.com/color/24/000000/google-logo.png",
    className: "jsx-3254415445"
  }), "Sign up with Google")), external_react_default.a.createElement("span", {
    className: "jsx-3254415445" + " " + "sign-up-with-email"
  }, external_react_default.a.createElement("strong", {
    onClick: function onClick() {
      return openSignup();
    },
    className: "jsx-3254415445"
  }, "Sign up with Email"))))), external_react_default.a.createElement(style_default.a, {
    id: "3254415445"
  }, [".landing.jsx-3254415445{position :relative;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;margin :0;padding :0;background-image:linear-gradient(135deg,rgb(91,56,141),#4e4376);width :100%;overflow :hidden;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;padding-bottom :120px;}", ".landing-page.jsx-3254415445{position :relative;top :52px;text-align :center;box-sizing :border-box;}", "h1.jsx-3254415445{color :#fff;font-size :2.75em;font-weight :600;font-family :Cabin;line-height:1.18181818;}", "p.jsx-3254415445{color :#fff;font-size:1.35em;-webkit-letter-spacing:.3px;-moz-letter-spacing:.3px;-ms-letter-spacing:.3px;letter-spacing:.3px;line-height:1.4;}", ".get-started.jsx-3254415445{width :150px;outline :0;color :#fdfdfd;background :rgb(96,51,141);height :40px;border-radius :2px;white-space :no-wrap;font-weight :600;}", ".user-action.jsx-3254415445 span.jsx-3254415445{padding :0px 5px;}", ".loginBtnn.jsx-3254415445 i.jsx-3254415445{margin-right :8px !important;margin-left :10px !important;}", ".loginBtnn.jsx-3254415445{box-sizing:border-box;position:relative;width :200px !important;height :38px;margin-top:0.8em;margin-bottom :1.5em;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:0.2em;font-size:1em;color:#fff;font-weight :600;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);font-family :\"Cabin\";cursor :pointer;}", ".loginBtnn.jsx-3254415445:before{content :\"\", box-sizing :border-box;position :absolute;top :0;left :0;width :34px;height :100%;}", ".loginBtnn.jsx-3254415445:focus{outline :none;}", ".loginBtnn.jsx-3254415445:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1);}", ".loginBtnn--facebook.jsx-3254415445{background-color :#4C69BA;background-image :linear-gradient(#4C69BA,#3B55A0);}", ".loginBtnn--facebook.jsx-3254415445:before{border-right :#364e92 1px solid;}", ".loginBtnn--facebook.jsx-3254415445:hover,.loginBtnn--facebook.jsx-3254415445:focus{background-color :#5B7BD5;background-image :linear-gradient(#5B7BD5,#4864b1);}", ".google-auth-buttonn.jsx-3254415445{min-width :200px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1) !important;box-sizing:border-box !important;position :relative;height :38px;outline :0;text-align :center !important;margin-top :0.8em;margin-bottom :1.5em;font-family :\"Cabin\";font-weight :600;font-size:1em;line-height:34px;white-space:nowrap;border-radius:0.2em;color :#4d4d4d;background :#fdfdfd;border :0;cursor :pointer;}", ".google-auth-buttonn.jsx-3254415445 img.jsx-3254415445{margin-right :9px;margin-left :-28px;}", ".google-auth-buttonn.jsx-3254415445:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1) !important;}", ".sign-up-with-email.jsx-3254415445{position :relative;font-family :\"Cabin\";cursor :pointer;display :block;color :#fff;}", ".sign-up-with-email.jsx-3254415445:hover{color :#4C69BA;}", "@media(max-width :767px){h1.jsx-3254415445{font-size :2em;}p.jsx-3254415445{font-size:1.2em;}}"]));
};

/* harmony default export */ var landingPage = (landingPage_LandingPage);
// EXTERNAL MODULE: ./pages/signin.js + 2 modules
var signin = __webpack_require__("DB6d");

// EXTERNAL MODULE: ./pages/signup.js
var signup = __webpack_require__("vL9u");

// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_default; });




















var pages_default =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      showModal: false,
      data: _this.props.topics.data,
      showClass: false,
      recommendations: _this.props.recommendations,
      quest: false,
      userIsLogged: false,
      questionActivity: _this.props.questionAct.data,
      UserClickedLogin: false,
      UserClickedSignup: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "check", function () {
      var check = JSON.parse(localStorage.getItem("user_details"));

      if (check) {
        _this.setState({
          userIsLogged: true
        });
      } else {
        _this.setState({
          userIsLogged: false
        });
      }
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "openLoginOverlay", function () {
      //alert("click");
      _this.setState({
        UserClickedLogin: !_this.state.UserClickedLogin,
        UserClickedSignup: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "openSignupOverlay", function () {
      _this.setState({
        UserClickedSignup: !_this.state.UserClickedSignup,
        UserClickedLogin: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeLoginOverlay", function () {
      _this.setState({
        UserClickedLogin: !_this.state.UserClickedLogin
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeSignupOverlay", function () {
      _this.setState({
        UserClickedSignup: !_this.state.UserClickedSignup
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.check();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          showClass = _this$state.showClass,
          userIsLogged = _this$state.userIsLogged,
          UserClickedLogin = _this$state.UserClickedLogin,
          UserClickedSignup = _this$state.UserClickedSignup;
      var url = "/static/wor.jpg";
      return external_react_default.a.createElement(Layout["a" /* default */], Object(esm_extends["a" /* default */])({
        openSignup: this.openSignupOverlay,
        openLogin: this.openLoginOverlay,
        indexPage: true
      }, this.state), !userIsLogged && external_react_default.a.createElement(landingPage, {
        openSignup: this.openSignupOverlay
      }), external_react_default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.handleDivClose(e);
        },
        ref: function ref(el) {
          return _this2.div = el;
        },
        className: style_default.a.dynamic([["2002179179", [url]]]) + " " + ((UserClickedSignup ? "overlayShow" : "overlay") || "")
      }, external_react_default.a.createElement("span", {
        onClick: this.closeSignupOverlay,
        className: style_default.a.dynamic([["2002179179", [url]]]) + " " + "close-icon"
      }, external_react_default.a.createElement("span", {
        className: style_default.a.dynamic([["2002179179", [url]]])
      }, "\xD7")), UserClickedSignup && external_react_default.a.createElement(signup["default"], {
        openLogin: this.openLoginOverlay
      })), external_react_default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.handleDivClose(e);
        },
        ref: function ref(el) {
          return _this2.div = el;
        },
        className: style_default.a.dynamic([["2002179179", [url]]]) + " " + ((UserClickedLogin ? "overlayShow" : "overlay") || "")
      }, external_react_default.a.createElement("span", {
        onClick: this.closeLoginOverlay,
        className: style_default.a.dynamic([["2002179179", [url]]]) + " " + "close-icon"
      }, external_react_default.a.createElement("span", {
        className: style_default.a.dynamic([["2002179179", [url]]])
      }, "\xD7")), UserClickedLogin && external_react_default.a.createElement(signin["default"], {
        openSignup: this.openSignupOverlay
      })), external_react_default.a.createElement("div", {
        className: style_default.a.dynamic([["2002179179", [url]]]) + " " + "home"
      }, external_react_default.a.createElement(homepage_HomePage, Object(esm_extends["a" /* default */])({}, this.state, {
        topics: this.props.topics,
        handleShowOverflow: this.openBtn,
        login: this.openLoginOverlay
      }))), external_react_default.a.createElement(style_default.a, {
        id: "2002179179",
        dynamic: [url]
      }, [".feed.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;position:relative;left:80px;top:-590px;}", ".fluke.__jsx-style-dynamic-selector{position:relative;left:45%;top:-140px;}", ".fluke-action.__jsx-style-dynamic-selector{display:inline-block;cursor:pointer;margin-top:-20px;}", "i.__jsx-style-dynamic-selector{position:relative;padding-right:5px;top:1px;}", ".close.__jsx-style-dynamic-selector{position:absolute;top:25px;left:10%;font-size:80px !important;color:rgb(91,56,141);background:#e6ecf0;cursor:pointer !important;}", "li.__jsx-style-dynamic-selector{list-style-type:none;margin-bottom:10px;padding-right:20px;cursor:pointer;overflow:hidden;box-sizing:border-box;}", "li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:1.2em;font-family:inherit;font-weight:600;text-spacing:0.9px;color:#253858 !important;padding:0px;}", ".active.__jsx-style-dynamic-selector{background:#e9ebee;}", ".home.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;left:-1vw;}", ".user-chip.__jsx-style-dynamic-selector{background:url(".concat(url, ") no-repeat;width:50px;height:50px;border-radius:50px;position:relative;margin-bottom:1px;left:5px;}"), ".pro-section.__jsx-style-dynamic-selector{padding:0.5em;color:#000;}", ".pro-section.__jsx-style-dynamic-selector>em.__jsx-style-dynamic-selector{display:block;font-size:0.9em;font-family:inherit;}", ".experience.__jsx-style-dynamic-selector{font-size:0.9em;padding:0.5em;}", ".user-rec-img.__jsx-style-dynamic-selector{width:100%;height:200px;}", ".user-rec-card.__jsx-style-dynamic-selector{position:relative;width:55%;min-height:450px;top:10%;left:20%;background-color:#eee;box-sizing:border-box;border-radius:5px;}", ".overlay.__jsx-style-dynamic-selector{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;}", ".overlayShow.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:#fdfdfd;overflow-x:hidden;}", ".closebtn.__jsx-style-dynamic-selector{position:absolute;bottom:50px;}", ".close-icon.__jsx-style-dynamic-selector{position:absolute;top:20px;left:90%;min-height:20px;max-height:100px;padding:9px;background:#e6ecf0;font-size:55px !important;color:rgb(91,56,141);cursor:pointer;z-index:2000;border-radius:5px;}", ".close-icon.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{position:relative;top:-2px;}", "@media only screen and (min-width:360px) and (max-width:480px){.home.__jsx-style-dynamic-selector{left:0;}.fluke.__jsx-style-dynamic-selector{left:34.5% !important;top:-65px;}}", "@media only screen and (min-width:768px) and (max-width:900px){.fluke.__jsx-style-dynamic-selector{top:-100px;}}", "@media only screen and (min-width:480px) and (max-width:768px){.fluke.__jsx-style-dynamic-selector{top:-98px;}}"]));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var response, recResponse, questionActivityResponse;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default()(apiRequests["ob" /* _GET_TOPICS */]);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return external_axios_default()(apiRequests["nb" /* _GET_RECS */]);

              case 5:
                recResponse = _context.sent;
                _context.next = 8;
                return external_axios_default()(apiRequests["mb" /* _GET_QUESTION_ACTIVITY */]);

              case 8:
                questionActivityResponse = _context.sent;
                return _context.abrupt("return", {
                  topics: response.data,
                  recommendations: recResponse.data,
                  questionAct: questionActivityResponse.data
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(external_react_default.a.Component);



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

/***/ "Sndy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

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

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "W33c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);




var FeedCard = function FeedCard(_ref) {
  var questionActivity = _ref.questionActivity,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Recent Activities" : _ref$title,
      _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? "#fdfdfd" : _ref$bg,
      _ref$borderR = _ref.borderR,
      borderR = _ref$borderR === void 0 ? "15px" : _ref$borderR;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2667928553" + " " + "new-question-added"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: "260px",
      background: bg,
      overflow: "hidden",
      zIndex: 1,
      borderRadius: borderR
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
    style: {
      border: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    className: "card-header"
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"], null, questionActivity.map(function (activity) {
    var _date = new Date(activity.createdAt);

    var date = _date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    var _image = activity.user_image ? activity.user_image : "/static/avatar.png";

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Event, {
      key: activity._id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Label, {
      image: _image
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Date, {
      content: "".concat(date)
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Summary, null, activity.user, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2667928553"
    }, "added"), " a question", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2667928553"
    }, activity.question, "?"), ".")));
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2667928553"
  }, [".new-question-added{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;overflow:hidden;}", ".card-header{color:#4e4376 !important;background:transparent;font-family:Cabin;border-bottom:none;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (FeedCard);

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

/***/ "WaSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateConversion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeDifference; });
/* unused harmony export timeConverter */
function DateConversion(mydate) {
  var _d = new Date(mydate);

  var date = _d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return date;
}
function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
}
function timeConverter(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months";
  } else {
    return Math.round(elapsed / msPerYear) + " years";
  }
}

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

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/searchFilterCard.js




var searchFilterCard_SearchFilterCard = function SearchFilterCard(_ref) {
  var data = _ref.data;
  return external_react_default.a.createElement("div", {
    className: "jsx-507669326" + " " + "search-filter-card"
  }, data.slice(0, 4).map(function (item) {
    return external_react_default.a.createElement(external_react_["Fragment"], {
      key: item._id
    }, external_react_default.a.createElement("div", {
      key: item._id,
      className: "jsx-507669326" + " " + "search-filter-image"
    }, item.optionImage[0] ? external_react_default.a.createElement("img", {
      src: item.optionImage[0],
      alt: "item",
      className: "jsx-507669326"
    }) : external_react_default.a.createElement("img", {
      src: "/static/image.png",
      alt: "item",
      className: "jsx-507669326"
    })), external_react_default.a.createElement("div", {
      className: "jsx-507669326" + " " + "search-filter-text"
    }, external_react_default.a.createElement(link_default.a, {
      href: "/topic/".concat(item.question)
    }, external_react_default.a.createElement("a", {
      className: "jsx-507669326"
    }, item.question))));
  }), external_react_default.a.createElement("div", {
    className: "jsx-507669326" + " " + "search-filter-callToAction"
  }, external_react_default.a.createElement("hr", {
    className: "jsx-507669326"
  }), external_react_default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    className: "jsx-507669326"
  }, "Can't find what you are looking for?"), external_react_default.a.createElement(link_default.a, {
    href: "/ask"
  }, external_react_default.a.createElement("button", {
    className: "jsx-507669326"
  }, "Add Question"))), external_react_default.a.createElement(style_default.a, {
    id: "507669326"
  }, [".search-filter-card.jsx-507669326{box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify-all;-webkit-justify-content:justify-all;-ms-flex-pack:justify-all;justify-content:justify-all;background-color:#f2f2f2;width:40.8vw;height:370px;margin-top:1px;margin-left:22px;z-index:2000 !important;position:fixed;y-overflow:scroll;}", "a.jsx-507669326{-webkit-text-decoration:none;text-decoration:none;font-family:Cabin;color:rgb(96,51,141);}", ".search-filter-card.jsx-507669326 .search-filter-image.jsx-507669326 img.jsx-507669326{position:relative;width:60px;height:auto;padding:10px;}", ".search-filter-card.jsx-507669326 .search-filter-text.jsx-507669326{position:relative;top:-28px;left:05vw;}", ".search-filter-callToAction.jsx-507669326{box-sizing:border-box;}", ".search-filter-callToAction.jsx-507669326 button.jsx-507669326{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;background:rgb(96,51,141);padding:10px;z-index:2000;text-align:center;font-family:verdana;text-transform:uppercase;font-size:10px;font-weight:bold;color:#f2f2f2;outline:0;border:0;border-radius:6px;width:120px;height:auto;position:absolute;left:32.5vh;margin-top:5px;-webkit-box-shadow:0px 0px 8px 2px #bf237166;-moz-box-shadow:0px 0px 8px 2px #bf237166;box-shadow:0px 0px 8px 2px #bf237166;-webkit-transition:1s;transition:1s;}", "@media screen and (max-width:600px){.search-filter-card.jsx-507669326{min-width:80vw;margin-left:-20px;margin-top:5px;}.search-filter-card.jsx-507669326 .search-filter-text.jsx-507669326{position:relative;left:06vw;padding:0px 30px;}.search-filter-card.jsx-507669326 .search-filter-image.jsx-507669326 img.jsx-507669326{position:relative;width:60px;height:auto;padding:10px;margin-right:3px;}.search-filter-callToAction.jsx-507669326 button.jsx-507669326{left:24vw;margin-top:5px;}}"]));
};

/* harmony default export */ var searchFilterCard = (searchFilterCard_SearchFilterCard);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./components/Icons.js
var Icons = __webpack_require__("zUqs");

// CONCATENATED MODULE: ./utils/headerForm.js














var headerForm_HeaderForm =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HeaderForm, _Component);

  function HeaderForm() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HeaderForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HeaderForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      show: false,
      search: "",
      //show searchFilterCard,
      data: _this.props.data,
      searchItem: []
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChange", function (e, previousState) {
      e.preventDefault();

      var filterData = _this.state.data.filter(function (item) {
        return item.question.toLowerCase().indexOf(_this.search.value.toLowerCase()) !== -1;
      });

      var check = _this.search.value;

      if (check !== "") {
        _this.setState({
          show: true
        }, function () {
          _this.setState({
            searchItem: filterData
          });
        });
      } else {
        _this.setState({
          show: false
        });
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(HeaderForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          show = _this$state.show,
          searchItem = _this$state.searchItem;
      return external_react_default.a.createElement("div", {
        className: "jsx-1027911684" + " " + "header-form-container"
      }, external_react_default.a.createElement("form", {
        className: "jsx-1027911684"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1027911684" + " " + "form-input-container"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1027911684" + " " + "main-header-search-icon"
      }, external_react_default.a.createElement(Icons["p" /* SearchIcon */], null)), external_react_default.a.createElement("input", {
        type: "text",
        ref: function ref(input) {
          return _this2.search = input;
        },
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        placeholder: "Search...",
        autoComplete: "off",
        className: "jsx-1027911684" + " " + "header-form-input"
      }))), show && external_react_default.a.createElement(searchFilterCard, {
        data: searchItem,
        text: "Work in Progress is my shepherd"
      }), external_react_default.a.createElement(style_default.a, {
        id: "1027911684"
      }, [".form-input-container.jsx-1027911684{box-sizing:border-box;display:inline-block;}", ".form-input-container.jsx-1027911684 .main-header-search-icon.jsx-1027911684{position:relative;top:5px;left:94%;margin-left:2px;}", "input[type=\"text\"].jsx-1027911684{width:40.8vw;height:30px;padding:1.2em;background-color:#eee;border:0.8px solid transparent;border-radius:2px;margin:0;color:rgb(96,51,141);font-weight:600;font-size:16px;outline:0;line-height:10px;font-family:inherit;overflow:hidden;box-sizing:border-box;}", ".header-form-input.jsx-1027911684:hover{box-shadow:0 4px 16px 0 rgba(0,0,0,0.2);-webkit-transition:1s;transition:1s;}", "input[type=\"search\"].jsx-1027911684:focus{box-shadow:0 4px 16px 0 rgba(0,0,0,0.2);-webkit-transition:1s;transition:1s;}", ".jsx-1027911684::-webkit-input-placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}", ".jsx-1027911684::-moz-placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}", ".jsx-1027911684:-ms-input-placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}", ".jsx-1027911684::placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}", ".jsx-1027911684:-ms-input-placeholder{color:rgb(96,51,141);}", ".jsx-1027911684::-ms-input-placeholder{color:rgb(96,51,141);}", "@media screen and (max-width:600px){input[type=\"text\"].jsx-1027911684{width:45vw;height:30px;padding:5px;border:0;color:rgb(96,51,141);font-weight:600;font-size:16px;outline:0;box-shadow:none !important;line-height:24px;overflow:hidden;margin-top:2px;border-radius:2px;}ul.jsx-1027911684{left:0;padding:0;}.form-input-container.jsx-1027911684 .main-header-search-icon.jsx-1027911684{position:absolute;top:7.5px;left:82%;}.jsx-1027911684:placeholder{color:#000;font-weight:100;opacity:1;font-family:inherit !important;padding:0 !important;font-size:0.1rem;}}"]));
    }
  }]);

  return HeaderForm;
}(external_react_["Component"]);

/* harmony default export */ var headerForm = (headerForm_HeaderForm);
// EXTERNAL MODULE: external "@material-ui/core/Chip"
var Chip_ = __webpack_require__("Sndy");
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__("IfcR");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./apiRequests/apiRequests.js
var apiRequests = __webpack_require__("rhLc");

// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// CONCATENATED MODULE: ./components/Navbar.js














 //import Bell from "../utils/bell";








var socket = external_socket_io_client_default()(config["c" /* default */]);

var Navbar_Badgie = function Badgie(props) {
  //handles the notification and badge
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Badge_default.a, {
    color: "secondary",
    badgeContent: props.numOfNotifications || 0
  }, external_react_default.a.createElement("i", {
    className: "jsx-3371798987" + " " + "far fa-bell icon-bell"
  })), external_react_default.a.createElement(style_default.a, {
    id: "3371798987"
  }, [".icon-bell.jsx-3371798987{color:rgb(91,56,141) !important;background-color:rbg(91,56,141) !important;font-size:25px;}"]));
};

var Navbar_NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NavBar, _React$Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      Chipie: false,
      data: "",
      seen: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetchUserKarma", function () {
      var _data = JSON.parse(localStorage.getItem("user_details"));

      if (_data) {
        Object(apiRequests["x" /* GET_USER_KARMA */])(_data._id).then(function (axiosRes) {
          // console.log(axiosRes.data.karma);
          _this.setState({
            userKarma: axiosRes.data.karma
          });
        }).catch(function (err) {
          _this.setState({
            err: err
          });
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetchUserNotification", function () {
      var _data = JSON.parse(localStorage.getItem("user_details"));

      if (_data) {
        Object(apiRequests["y" /* GET_USER_NOTIFICATION */])(_data._id).then(function (axiosResponse) {
          var _num = axiosResponse.data.viewed ? 0 : 1; //console.log(axiosResponse.data.notification);


          _this.setState({
            notification: axiosResponse.data.notification,
            numOfNotifications: _num,
            seen: axiosResponse.data.viewed
          });
        }).catch(function (error) {
          _this.setState({
            error: error
          }); // console.log(error);

        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "checkUser", function () {
      var data = JSON.parse(localStorage.getItem("user_details")); //let isRegistered = true //fake check;

      if (data !== "" && data !== null) {
        _this.setState({
          Chipie: true,
          data: data
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleSeenNotifications", function () {
      var data = JSON.parse(localStorage.getItem("user_details"));

      if (data) {
        if (_this.state.numOfNotifications !== 0) {
          _this.setState({
            numOfNotifications: _this.state.numOfNotifications - 1
          }, function () {
            var data = JSON.parse(localStorage.getItem("user_details"));
            Object(apiRequests["hb" /* USER_HAS_SEEN_NOTIFICATION */])(socket.id, data._id).then(function (res) {
              _this.setState({
                res: res
              }); // console.log(res);

            }).catch(function (err) {
              _this.setState({
                err: err
              });
            });
          });
        }
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleLogout", function (e) {
      new promise_default.a(function (resolve, reject) {
        if (e) {
          resolve(localStorage.removeItem("user_details"));
        } else {
          reject("Yo do nothing");
        }
      }).then(function () {
        router_default.a.push("/");
        localStorage.removeItem("user_token");
        window.location.reload();
      }).catch(function (error) {
        _this.setState({
          error: error
        });
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(NavBar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var _this2 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                socket.on("user_viewed_notification", function (data) {
                  //console.log(data, " I am here na");
                  _this2.setState({
                    seen: data.viewed
                  }, function () {
                    if (_this2.state.numOfNotifications !== 0) {
                      _this2.setState({
                        numOfNotifications: _this2.state.numOfNotifications - 1
                      });
                    }
                  });
                });
                this.checkUser();
                this.fetchUserKarma();
                this.fetchUserNotification();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    // UserHasSeen = myData => {
    //   var setIt;
    //   for (let item in myData) {
    //     if (item.seen === false) {
    //       setIt = true;
    //       item.seen = setIt;
    //     }
    //   }
    //   var _len = myData.filter(item => {
    //     return item.seen !== false;
    //   });
    //   this.setState({
    //     len: _len.length
    //   });
    // };
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          Chipie = _this$state.Chipie,
          data = _this$state.data,
          userKarma = _this$state.userKarma,
          notification = _this$state.notification,
          numOfNotifications = _this$state.numOfNotifications,
          seen = _this$state.seen,
          viewed = _this$state.viewed; // I love destructuring

      if (!Chipie) {
        return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("nav", {
          className: "jsx-2081961410" + " " + "navbar-style"
        }, external_react_default.a.createElement("ul", {
          className: "jsx-2081961410"
        }, external_react_default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "logo-style"
        }, external_react_default.a.createElement(link_default.a, {
          prefetch: true,
          href: "/"
        }, external_react_default.a.createElement("img", {
          src: "/static/new-icon.png",
          alt: "logo",
          width: "60px",
          className: "jsx-2081961410"
        }))), external_react_default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "header-form-style"
        }, external_react_default.a.createElement(headerForm, {
          data: this.props.data
        })), external_react_default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "not-login-action"
        }, external_react_default.a.createElement("a", {
          onClick: function onClick() {
            return _this3.props.openSignup();
          },
          className: "jsx-2081961410"
        }, "Get started")), external_react_default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "not-signup-action"
        }, external_react_default.a.createElement("a", {
          onClick: function onClick() {
            return _this3.props.openLogin();
          },
          className: "jsx-2081961410"
        }, "Sign in")), external_react_default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "header-call-to-action"
        }, external_react_default.a.createElement(link_default.a, {
          href: "/ask"
        }, external_react_default.a.createElement("button", {
          className: "jsx-2081961410" + " " + "header-btn-ask"
        }, "Add Question"))))), external_react_default.a.createElement(style_default.a, {
          id: "2081961410"
        }, [".logo-style.jsx-2081961410{position:relative;top:-10px;left:-6.5vw;cursor:pointer;}", ".navbar-style.jsx-2081961410{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fdfdfd;width:100%;height:58px;box-sizing:border-box;box-shadow:0 3px 2px -2px rgba(200,200,200,0.4);position:fixed;margin-bottom:50px;z-index:2000;top:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;}", "ul.jsx-2081961410{box-sizing:border-box;display:inline-block;position:relative;top:11px;left:-40px;}", "ul.jsx-2081961410 li.jsx-2081961410{list-style-type:none;float:left;padding:0px 5px;}", ".header-form-style.jsx-2081961410{position:relative;left:-3vw;top:-1px;}", ".not-login-action.jsx-2081961410 a.jsx-2081961410{position:relative;left:01vw;font-weight:800;color:rgb(91,56,141) !important;top:0.6vw;font-size:1.2em;cursor:pointer;}", ".not-signup-action.jsx-2081961410 a.jsx-2081961410{position:relative;left:4vw;font-weight:600;color:rgb(91,56,141) !important;top:0.6vw;cursor:pointer;}", ".header-call-to-action.jsx-2081961410{position:relative;left:7.5vw;}", ".header-btn-ask.jsx-2081961410{position:relative;min-width:130px !important;outline:none !important;height:35px !important;font-size:1em;font-weight:600;border-radius:3px !important;background:rgb(96,51,141);color:#fdfdfd;text-align:center !important;padding:0px 5px !important;outline:0 !important;cursor:pointer;border:1px solid rgb(96,51,141);}", "@media (width:360px){.logo-style.jsx-2081961410{margin-left:4px;top:-12px;}}", "@media screen and (max-width:720px){.header-call-to-action.jsx-2081961410{display:none;}.header-btn-ask.jsx-2081961410{display:none;}.header-form-style.jsx-2081961410{left:-23px;}.logo-style.jsx-2081961410{left:-10px;top:-12px;}.not-login-action.jsx-2081961410 a.jsx-2081961410{top:-25px;left:41vw;font-size:4.2vw;word-spacing:0.001em;}.not-signup-action.jsx-2081961410 a.jsx-2081961410{top:-25px;left:40vw;font-size:4.2vw;word-spacing:0.001em;}.navbar-style.jsx-2081961410{background:#fdfdfd;width:100%;height:58px;box-sizing:border-box;box-shadow:0 3px 2px -2px rgba(200,200,200,0.2);position:fixed;margin-bottom:50px;z-index:2000;}}"]));
      }

      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("nav", {
        className: "jsx-3499757639" + " " + "navbar-style"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-3499757639"
      }, external_react_default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "logo-style"
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/"
      }, external_react_default.a.createElement("img", {
        src: "/static/new-icon.png",
        alt: "logo",
        width: "60px",
        className: "jsx-3499757639"
      }))), external_react_default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "notification-style"
      }, external_react_default.a.createElement("a", {
        className: "jsx-3499757639"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Popup"], {
        trigger: external_react_default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "anchor-style"
        }, external_react_default.a.createElement(Navbar_Badgie, {
          numOfNotifications: numOfNotifications
        }), external_react_default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "span-notification"
        }, "Notifications")),
        content: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
          onMouseOver: this.handleSeenNotifications,
          className: "jsx-3499757639"
        }, external_react_default.a.createElement(external_react_["Fragment"], null, seen ? "None yet" : notification))),
        on: "click",
        hideOnScroll: true,
        position: "bottom center",
        style: {
          background: "#f0eff5",
          zIndex: 9000
        }
      }))), external_react_default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "karma-style"
      }, external_react_default.a.createElement("a", {
        className: "jsx-3499757639" + " " + "anchor-style"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Popup"], {
        trigger: external_react_default.a.createElement("span", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement("i", {
          className: "jsx-3499757639" + " " + "far fa-star icon-bell"
        }), external_react_default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "span-coin"
        }, "Coins")),
        content: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
          className: "jsx-3499757639"
        }, userKarma ? external_react_default.a.createElement(external_react_["Fragment"], null, userKarma) : "Nothing yet")),
        on: "click",
        hideOnScroll: true,
        position: "bottom center",
        style: {
          background: "#f0eff5",
          zIndex: 9000
        }
      }))), external_react_default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "header-form-style"
      }, external_react_default.a.createElement(headerForm, {
        data: this.props.data
      })), external_react_default.a.createElement("ul", {
        className: "jsx-3499757639" + " " + "profile-icon-style"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Popup"], {
        trigger: external_react_default.a.createElement("span", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement(Chip_default.a, {
          label: external_react_default.a.createElement(Icons["t" /* UserIcon */], null),
          style: {
            width: "40px",
            height: "40px",
            borderRadius: "24px"
          }
        })),
        content: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, external_react_default.a.createElement(link_default.a, {
          as: "/profile/".concat(this.state.data.username),
          href: "/profile/".concat(this.state.data.username)
        }, external_react_default.a.createElement("a", {
          className: "jsx-3499757639" + " " + "anchor-style"
        }, external_react_default.a.createElement("span", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement(Icons["n" /* ProfileIcon */], {
          color: "rgb(91, 56, 141)"
        })), external_react_default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Profile")))), external_react_default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, external_react_default.a.createElement(link_default.a, {
          href: "/ask"
        }, external_react_default.a.createElement("a", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement("span", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement(Icons["o" /* QuestionBox */], {
          color: "rgb(91, 56, 141)"
        })), external_react_default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Question")))), external_react_default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, external_react_default.a.createElement(link_default.a, {
          href: "/ask"
        }, external_react_default.a.createElement("a", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement("span", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement(Icons["d" /* Bellie */], {
          color: "rgb(91, 56, 141)"
        })), external_react_default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Notifications")))), external_react_default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, external_react_default.a.createElement("a", {
          onClick: function onClick(e) {
            return _this3.handleLogout(e);
          },
          className: "jsx-3499757639" + " " + "add-cursor"
        }, external_react_default.a.createElement("span", {
          className: "jsx-3499757639"
        }, external_react_default.a.createElement(Icons["k" /* LogoutIcon */], {
          color: "rgb(91, 56, 141)"
        })), external_react_default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Logout")))),
        on: "click",
        hideOnScroll: true,
        position: "bottom center",
        style: {
          background: "#f0eff5",
          zIndex: 9000
        }
      })), external_react_default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "header-call-to-action"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/ask"
      }, external_react_default.a.createElement("button", {
        className: "jsx-3499757639" + " " + "header-btn-ask"
      }, "Add Question"))))), external_react_default.a.createElement(style_default.a, {
        id: "3499757639"
      }, [".icon-bell.jsx-3499757639{color:rgb(91,56,141) !important;font-size :25px;}", ".inner-list.jsx-3499757639{list-style-type :none;}", "a.jsx-3499757639 span.jsx-3499757639{color:#58647b;}", "span.icon-text.jsx-3499757639{position :relative;top :-5px;margin-left :5px;}", ".anchor-style.jsx-3499757639{cursor :pointer;}", ".span-coin.jsx-3499757639{font-size :1.04;font-family :inherit;font-weight :600;color :#666;padding :0 4px;position :relative;top :-2px;}", ".add-cursor.jsx-3499757639{cursor :pointer;}", "a.jsx-3499757639{color :#000 !important;font-family :inherit;}", ".span-notification.jsx-3499757639{font-size :1.04;font-family :inherit;font-weight :600;color :#666;padding :0 2px;position :relative;top :2px;margin-left :5px;}", ".navbar-style.jsx-3499757639{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;background:#fdfdfd;width:100%;height:58px;box-sizing:border-box;position:fixed;margin-bottom:50px;z-index:2000;top :0;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;}", "ul.jsx-3499757639{display :inline-block !important;box-sizing :border-box;position :relative;left :48px;}", "ul.jsx-3499757639 li.jsx-3499757639{list-style-type:none;float :left;margin-top :15px;padding :0px 5px;}", ".header-call-to-action.jsx-3499757639{position :relative;left :30px;top :-4px;}", ".profile-icon-style.jsx-3499757639{position :relative;left :-220px;top :10px;}", ".karma-style.jsx-3499757639{position :relative;left :-70px;display :block;}", ".notification-style.jsx-3499757639{position :relative;left :-90px;top :1px;display :block;}", ".notification-style.jsx-3499757639 li.jsx-3499757639 a.jsx-3499757639{text-align :center;}", ".logo-style.jsx-3499757639{position :relative;left :-110px;top :-15px;cursor :pointer;}", ".header-form-style.jsx-3499757639{position :relative;left :-75px;top :-5px;}", ".header-btn-ask.jsx-3499757639{position:relative;min-width:130px !important;outline:none !important;height:35px !important;font-size:1em;font-weight:600;border-radius:3px !important;background :rgb(96,51,141);color :#fdfdfd;text-align:center !important;padding:0px 5px !important;outline:0 !important;cursor:pointer;border:1px solid rgb(96,51,141);}", ".profile-icon-style.jsx-3499757639 .profile.jsx-3499757639{visibility:hidden;width:110px;min-height:10vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#eee;color:#000;text-align:center;border-radius:6px;padding:5px 5px;position:absolute;z-index:1;top:95%;left:50%;margin-top:12px;margin-left:-35px;}", ".profile-icon-style.jsx-3499757639 .profile.jsx-3499757639::after{content:\"\";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #eee transparent;}", ".profile-icon-style.jsx-3499757639:hover .profile.jsx-3499757639{visibility:visible;}", ".notification-style.jsx-3499757639 .work.jsx-3499757639{visibility:hidden;width:120px;height:150px;background:#eee;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:96%;left:50%;margin-left:-60px;margin-top:5px;}", ".notification-style.jsx-3499757639 .work.jsx-3499757639::after{content:\"\";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #eee transparent;}", ".notification-style.jsx-3499757639:hover .work.jsx-3499757639{visibility:visible;}", ".karma-style.jsx-3499757639 .work.jsx-3499757639{visibility:hidden;width:120px;height:150px;background:#eee;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:65%;left:50%;margin-top:15px;margin-left:-60px;}", ".karma-style.jsx-3499757639 .work.jsx-3499757639::after{content:\"\";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #eee transparent;}", ".karma-style.jsx-3499757639:hover .work.jsx-3499757639{visibility:visible;}", "@media screen and (max-width:600px){.header-call-to-action.jsx-3499757639{display:none !important;}.header-btn-ask.jsx-3499757639{display:none !important;}.karma-style.jsx-3499757639{display:none !important;}.notification-style.jsx-3499757639{display:none !important;}.header-form-style.jsx-3499757639{left:-100px;top :0px;}.logo-style.jsx-3499757639{left:-90px;}.profile-icon-style.jsx-3499757639{left :30vw;top :-35px;}}", "@media screen and (width :411px){.profile-icon-style.jsx-3499757639{left :40vw;top :-35px;}.logo-style.jsx-3499757639{left:-80px;}.header-form-style.jsx-3499757639{left:-85px;top :0px;}@media screen and (width :375px){.profile-icon-style.jsx-3499757639{left :38px !important;top :-35px;}}}"]));
    }
  }]);

  return NavBar;
}(external_react_default.a.Component);

/* harmony default export */ var Navbar = (Navbar_NavBar);
// CONCATENATED MODULE: ./components/Header.js





var Header_Header = function Header(_ref) {
  var data = _ref.data,
      openSignup = _ref.openSignup,
      openLogin = _ref.openLogin,
      closeSignup = _ref.closeSignup,
      closeLogin = _ref.closeLogin,
      title = _ref.title;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
    className: "jsx-24557130"
  }, title ? title : "Get the best always ", " | Top Ratings "), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("meta", {
    name: "author",
    content: "Narcisse Egonu",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "Review, Product review, best, quality product",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/png",
    sizes: "192x192",
    href: "/static/icon/favicon.png",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet",
    className: "jsx-24557130"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Cabin|Muli",
    rel: "stylesheet",
    className: "jsx-24557130"
  })), external_react_default.a.createElement(Navbar, {
    openLogin: openLogin,
    openSignup: openSignup,
    data: data
  }), external_react_default.a.createElement(style_default.a, {
    id: "24557130"
  }, ["body,html{background:#f4f6f8 !important;font-family:\"Cabin\" !important;margin:0;padding:0;color:#000;}", "*{box-sizing:border-box;}", "a{-webkit-text-decoration:none;text-decoration:none;}"]));
};

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);

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

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

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

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oZBK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveSpacesAddHyphen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSpacesRemoveHyphen; });
function RemoveSpacesAddHyphen(string) {
  //Removes spaces
  var newString = string.replace(/\s+/g, "-");
  return newString;
}
function AddSpacesRemoveHyphen(string) {
  var oldString = string.replace(/-/g, " ");
  return oldString;
}

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return _GET_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return _GET_RECS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return _GET_QUESTION_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GET_SPECIFIC_TOPIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_RELATED_TOPICS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return mySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return mySocial; });
/* unused harmony export AddOption */
/* unused harmony export getOption */
/* unused harmony export Add */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return addAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return updateUser; });
/* unused harmony export userGoogleSignin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return NewAddTopic; });
/* unused harmony export getAllTopics */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddNewOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return forgotPasswordFunction; });
/* unused harmony export checkIfUserExist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return user_recommendation; });
/* unused harmony export checkIfTagExist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddUserReactionToOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return GetUserReactionToLikeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return GetLikeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return GetDisLikeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return GetUserReactionToDisLikeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return MarkOptionAsSpam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return SaveUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return SaveProHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return SaveConHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return GetOptionUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return GetProUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return GetConUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return GetRecHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return UpdateOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return UpdatePro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return UpdateCon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return GetQuestionUpdatedAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return GetQuestionNumOfRecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GET_USER_KARMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GET_USER_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return USER_HAS_SEEN_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GET_SPECIFIC_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return VIEW_A_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GET_USER_WHO_ADDED_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GET_SPECIFIC_QUESTION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_ALL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return SPECIFIC_QUESTION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_OPTION_PRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_OPTION_CON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_OPTION_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_OPTION_PRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_OPTION_Con; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FETCH_OPTION_REC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GET_SPECIFIC_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return SortRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return SortQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GetNextQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return GetAQuestionFromQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return GetProDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return GetConDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return GetOptionPros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return GetOptionCons; });
/* unused harmony export getUserKarmaAndDateJoined */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return GetQuestionTotalRecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return GetOptionSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddOptionSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FetchAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FetchSpecificQuestionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddOptionImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return GetTopicRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return FollowQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return GetFollowedQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return GetTopicsByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return GetOtherTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return ManageTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return GetQuestionUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return FilterTopicsByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return GetQuestionsAddedByUser; });
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
var GetLikeNumber = function GetLikeNumber(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/get/GetLikeNumber"), data);
};
var GetDisLikeNumber = function GetDisLikeNumber(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_optionRoute, "/get/GetDisLikeNumber"), data);
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

/***/ "tQzz":
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "tdmr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfwq");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("rhLc");












var TopicViewPopupModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TopicViewPopupModal, _Component);

  function TopicViewPopupModal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, TopicViewPopupModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TopicViewPopupModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      pro: [],
      con: [],
      addPro: "",
      addCon: "",
      experience: "",
      addMoreDetails: [],
      _addMoreDetails2: [],
      proDetails: "",
      conDetails: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleSubmit", function () {
      var _user = JSON.parse(localStorage.getItem("user_details"));

      var _this$state = _this.state,
          pro = _this$state.pro,
          con = _this$state.con,
          experience = _this$state.experience,
          addMoreDetails = _this$state.addMoreDetails,
          _addMoreDetails2 = _this$state._addMoreDetails2;
      var _this$props = _this.props,
          question = _this$props.question,
          type = _this$props.type,
          option = _this$props.option,
          optionImage = _this$props.optionImage,
          socketId = _this$props.socketId;
      var _data = {
        pro: pro,
        con: con,
        experience: experience,
        addMoreDetails: addMoreDetails,
        _addMoreDetails2: _addMoreDetails2,
        username: _user.username,
        //displayname maybe used instead
        userId: _user._id,
        userImage: _user.image,
        option: option,
        optionImage: optionImage,
        question: question,
        type: type,
        socketId: socketId
      };

      var _type = type === "like" ? true : false;

      var rxn = {
        userId: _user._id,
        option: option,
        type: _type
      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__[/* user_recommendation */ "vb"])(_data).then(function (result) {
        return console.log(result);
      }).catch(function (error) {
        return console.log(error);
      });
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__[/* AddUserReactionToOption */ "f"])(rxn).then(function (res) {
        return console.log(res.data);
      }).catch(function (err) {
        return console.log(err.response.data);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleInputChange", function (_ref) {
      var _ref$target = _ref.target,
          value = _ref$target.value,
          name = _ref$target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "closeBtn", function () {
      _this.setState({
        showClass: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleAddCon", function (e) {
      e.preventDefault();
      var _this$state2 = _this.state,
          user = _this$state2.user,
          addCon = _this$state2.addCon,
          conDetails = _this$state2.conDetails;
      var _this$props2 = _this.props,
          option = _this$props2.option,
          optionId = _this$props2.optionId,
          question = _this$props2.question;
      var con_data = {
        option: option,
        option_id: optionId,
        user_id: user._id,
        title: addCon,
        description: conDetails,
        question: question,
        userImage: user.image //UserImage may be added

      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__[/* ADD_OPTION_CON */ "a"])(con_data).then(function (axiosResponse) {
        // console.log(axiosResponse);
        _this.setState(function (previousState) {
          return {
            con: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(previousState.con), [addCon]),
            _addMoreDetails2: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(previousState._addMoreDetails2), [conDetails]),
            addCon: "",
            conDetails: ""
          };
        }); //remove in production


        alert("con added");
      }).catch(function (axiosResponseError) {
        console.log(axiosResponseError);
      }); //this.setState(previousState => ({ inc: previousState.inc + 1 }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "_handleAddPro", function (e) {
      e.preventDefault();
      var _this$state3 = _this.state,
          user = _this$state3.user,
          addPro = _this$state3.addPro,
          proDetails = _this$state3.proDetails;
      var _this$props3 = _this.props,
          option = _this$props3.option,
          optionId = _this$props3.optionId,
          question = _this$props3.question;
      var pro_data = {
        option: option,
        option_id: optionId,
        user_id: user._id,
        title: addPro,
        description: proDetails,
        question: question,
        userImage: user.image
      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__[/* ADD_OPTION_PRO */ "b"])(pro_data).then(function (axiosResponse) {
        // console.log(axiosResponse);
        _this.setState(function (previousState) {
          return {
            pro: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(previousState.pro), [addPro]),
            addMoreDetails: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(previousState.addMoreDetails), [proDetails]),
            addPro: "",
            proDetails: ""
          };
        }); //remove in production


        alert("pro added");
      }).catch(function (axiosResponseError) {
        console.log(axiosResponseError);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TopicViewPopupModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Get user Details
      var user = JSON.parse(localStorage.getItem("user_details"));

      if (user) {
        this.setState({
          user: user
        });
      } else {
        this.setState({
          user: {}
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          addCon = _this$state4.addCon,
          addPro = _this$state4.addPro,
          experience = _this$state4.experience,
          conDetails = _this$state4.conDetails,
          proDetails = _this$state4.proDetails;
      var _this$props4 = this.props,
          option = _this$props4.option,
          optionImage = _this$props4.optionImage;
      var profileImage = "/static/gravatar.png";
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        ref: function ref(el) {
          return _this2.recCardie = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "user-rec-card"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]])
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "bg-image-theme"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: optionImage ? optionImage : "/static/wor.jpg",
        alt: "text",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "user-rec-img"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "user-chip"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "option-theme"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "rec-recommendation"
      }, "My Recommendation"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "rec-option"
      }, option ? option : ""))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "form-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]])
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "my-experience"
      }, "My Experience"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        value: experience,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e);
        },
        name: "experience",
        placeholder: "Kindly share your experience using this product. What are the options you considered, if any",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "textarea-1"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "form-rec-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "my-experience"
      }, "Reasons I recommend this"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]])
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        placeholder: "Add pro caption here",
        name: "addPro",
        value: addPro,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "pro-input-text"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        placeholder: "Add additional details",
        value: proDetails,
        name: "proDetails",
        onChange: function onChange(e) {
          return _this2.handleInputChange(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "textarea-2"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        onClick: this._handleAddPro,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + ((addPro ? "add" : "add none") || "")
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "add-rec-text"
      }, " Add pro")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "form-rec-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "my-experience"
      }, "Reasons I wouldn't recommend this"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]])
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        placeholder: "Add con caption here",
        name: "addCon",
        value: addCon,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "pro-input-text"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        value: conDetails,
        name: "conDetails",
        onChange: function onChange(e) {
          return _this2.handleInputChange(e);
        },
        placeholder: "Add additional details",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "textarea-2"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        onClick: this.handleAddCon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + ((addCon ? "add" : "add none") || "")
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "add-rec-text"
      }, " Add con")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "call-to-action-holder"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: this.props.closeBtn,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "action-button cancel"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        disabled: !experience,
        onClick: this.handleSubmit,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a.dynamic([["914885280", [profileImage]]]) + " " + "action-button submit"
      }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "914885280",
        dynamic: [profileImage]
      }, [".user-rec-card.__jsx-style-dynamic-selector{position:relative;width:100%;max-width:640px;min-height:550px;left:0;top:0;background-color:#fdfdfd;box-sizing:border-box;overflow:hidden;border-radius:15px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);margin-bottom:10px;}", ".option-theme.__jsx-style-dynamic-selector{margin-top:-105px;margin-left:75px;}", ".rec-recommendation.__jsx-style-dynamic-selector{display:block;position:relative;font-size:20px !important;text-transform:capitalize;color:#fff;line-height:1.2;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}", ".rec-option.__jsx-style-dynamic-selector{font-size:20px !important;color:#fff;text-transform:capitalize;position:relative;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}", ".option-theme.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{font-size:1.13em;font-weight:550;}", ".bg-image-theme.__jsx-style-dynamic-selector{border:1px solid grey;overflow:hidden;width:100%;height:250px;background-image:linear-gradient( 180deg, rgba(28,41,62,0.2) 0, rgba(28,41,62,0.3) 30%, rgba(7,15,29,0.9) );background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".form-holder.__jsx-style-dynamic-selector{padding-left:40px;padding-right:10px;}", ".my-experience.__jsx-style-dynamic-selector{display:block;padding-bottom:10px;padding-top:10px;margin-top:20px;}", ".call-to-action-holder.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".textarea-1.__jsx-style-dynamic-selector{width:95%;height:60px;border-radius:5px;outline:0;padding:10px;resize:none;font-family:inherit;font-weight:500;border:1px solid #e6e8eb;}", ".form-rec-holder.__jsx-style-dynamic-selector{margin-bottom:30px;}", ".pro-input-text.__jsx-style-dynamic-selector{width:95%;height:100%;border-top-right-radius:5px;border-top-left-radius:5px;border:1px solid #e6e8eb;padding:10px;outline:0;font-family:inherit;font-weight:500;}", ".textarea-2.__jsx-style-dynamic-selector{width:95%;height:60px;outline:0;padding:10px;resize:none;border:1px solid #e6e8eb;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-family:inherit;font-weight:500;}", ".action-button.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;padding:10px;font-family:inherit;border-radius:2px;border:0;margin-bottom:15px;}", ".submit.__jsx-style-dynamic-selector{background-color:rgb(91,56,141);color:#fff;cursor:pointer;margin-left:10px;border:1px solid transparent;}", ".cancel.__jsx-style-dynamic-selector{background-color:#cb1a4a;color:#fff;}", ".submit.__jsx-style-dynamic-selector:hover{color:rgb(91,56,141);background-color:transparent;border:1px solid rgb(91,56,141);}", ".user-rec-img.__jsx-style-dynamic-selector{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;vertical-align:middle;}", ".user-chip.__jsx-style-dynamic-selector{background-image:url(".concat(profileImage, ");background-repeat:no-repeat;background-size:cover;background-position:center;width:50px;height:50px;border-radius:50px;position:relative;top:-60px;left:10px;z-index:1;}"), ".add.__jsx-style-dynamic-selector{font-size:0.95em;font-weight:600;font-family:inherit;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;left:-30px;}", ".none.__jsx-style-dynamic-selector{cursor:not-allowed !important;color:#c3c3c3 !important;}"])));
    }
  }]);

  return TopicViewPopupModal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TopicViewPopupModal);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("rCsO");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("42Y9");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("rhLc");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("OcYQ");


















var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "state", {
      email: "",
      password: "",
      username: "",
      displayName: "",
      loading: false,
      joined: false,
      message: "",
      error: "",
      errors: {
        email: "",
        password: ""
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password,
          username = _this$state.username,
          displayName = _this$state.displayName;

      _this.setState({
        loading: true
      });

      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__[/* mySignup */ "sb"])(email, username, password, displayName).then(function (result) {
        _this.setState({
          loading: false
        });

        new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
          if (result.data.status == 400) {
            resolve(setTimeout(function () {
              _this.setState({
                message: result.data.message
              });
            }, 1500));
          } else if (result.data.status == 200) {
            resolve(setTimeout(function () {
              _this.setState({
                joined: true
              });
            }, 1500));
            localStorage.setItem("user_token", result.data.result.token);
            localStorage.setItem("user_details", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result.data.data)); //this.props.closeLogin();

            window.location.reload(); //Router.push("/");
          }
        }).then(function () {// Router.push("/");
          // window.location.reload();
        });
      }).catch(function (error) {
        _this.setState({
          loading: false
        }); // console.log(error);

      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "handleChange", function (_ref) {
      var _this$setState;

      var _ref$target = _ref.target,
          name = _ref$target.name,
          value = _ref$target.value;
      var errors = _this.state.errors;
      var validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

      switch (name) {
        case "email":
          errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
          break;

        case "password":
          errors.password = value.length < 8 ? "Password must be 8 characters long!" : "";
          break;

        default:
          break;
      }

      _this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this$setState, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this$setState, "errors", errors), _this$setState));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Signup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          error = _this$state2.error,
          errors = _this$state2.errors;

      var responseGoogle = function responseGoogle(response) {
        if (response.tokenId) {
          var _response$profileObj = response.profileObj,
              _email = _response$profileObj.email,
              imageUrl = _response$profileObj.imageUrl,
              givenName = _response$profileObj.givenName;

          var _username = _email.substring(0, _email.lastIndexOf("@"));

          Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__[/* mySocial */ "tb"])(_email, _username, "", imageUrl, givenName).then(function (result) {
            // console.log(result.data.data._id)
            response.profileObj._id = result.data.data._id;
            response.profileObj.username = _username; //result.data.data._id
            //  localStorage.setItem("user_token", response.tokenId);

            localStorage.setItem("user_token", result.data.result.token);
            localStorage.setItem("user_details", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response.profileObj));
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
        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__[/* mySocial */ "tb"])(email, username, "", imageUrl, givenName).then(function (result) {
          console.log(result); // console.log(result.data.data._id)

          profileObj._id = result.data.data._id; // profileObj.username = username;
          //result.data.data._id
          // localStorage.setItem("user_token", response.userID);

          localStorage.setItem("user_token", result.data.result.token);
          localStorage.setItem("user_details", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(profileObj));
          window.location.reload();
        }).catch(function (error) {
          console.log(error); // console.log(error.response);
          // this.setState({
          //   error: error.response.data.msg
          // });
        });
      };

      var _this$state3 = this.state,
          email = _this$state3.email,
          password = _this$state3.password,
          username = _this$state3.username,
          displayName = _this$state3.displayName,
          loading = _this$state3.loading,
          joined = _this$state3.joined,
          message = _this$state3.message;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3956229106" + " " + "custom-signin"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/new-icon.png",
        alt: "logo",
        width: 70,
        className: "jsx-3956229106" + " " + "img-logo-style"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3956229106" + " " + "form-card"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        style: {
          color: "rgb(96, 51, 141)",
          fontWeight: 600,
          marginTop: "10px"
        },
        className: "jsx-3956229106"
      }, error ? error : "Welcome, Create an Account!"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_facebook_login__WEBPACK_IMPORTED_MODULE_14___default.a, {
        appId: "538947710271871",
        fields: "name,email,picture",
        textButton: "Sign up with Facebook",
        cssClass: "loginButton loginButton--facebook",
        icon: "fab fa-facebook-f",
        callback: responseFacebook
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_13___default.a, {
        clientId: _config_config__WEBPACK_IMPORTED_MODULE_16__[/* GOOGLE_CLIENT_KEY */ "b"],
        onSuccess: responseGoogle,
        onFailure: responseGoogle,
        className: "google-auth-button",
        buttonText: "Sign up with Google"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          color: "#637381",
          fontWeight: 400,
          fontFamily: "inherit",
          marginBottom: "-10px"
        },
        className: "jsx-3956229106"
      }, "Or"), joined ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        style: {
          color: "green"
        },
        className: "jsx-3956229106"
      }, "Joined successfully") : "", message != "" ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        style: {
          color: "red"
        },
        className: "jsx-3956229106"
      }, message) : "", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        className: "jsx-3956229106"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          marginTop: "-3px"
        },
        className: "jsx-3956229106"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3956229106"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        value: username,
        name: "username",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Username",
        autoFocus: true,
        className: "jsx-3956229106"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3956229106"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        value: email,
        name: "email",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Email",
        className: "jsx-3956229106"
      }), errors.email.length > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          display: "flex",
          justifyContent: "center",
          color: "#cb1a4a",
          textalign: "center"
        },
        className: "jsx-3956229106" + " " + "error"
      }, errors.email)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3956229106"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        value: displayName,
        name: "displayName",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Display name(optional)",
        className: "jsx-3956229106"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3956229106"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "password",
        value: password,
        name: "password",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Password",
        className: "jsx-3956229106"
      }), errors.password.length > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          display: "flex",
          justifyContent: "center",
          color: "#cb1a4a",
          textalign: "center"
        },
        className: "jsx-3956229106" + " " + "error"
      }, errors.password)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        onClick: this.handleSubmit,
        disabled: !password,
        className: "jsx-3956229106" + " " + "signup-btn"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-3956229106" + " " + "fa fa-spinner fa-spin"
      }) : "Join"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3956229106" + " " + "i-have-account"
      }, "I have signed up!", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.props.openLogin();
        },
        style: {
          marginLeft: "5px",
          textDecoration: "none"
        },
        className: "jsx-3956229106" + " " + "join"
      }, "login")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3956229106"
      }, [".google-auth-button{width :250px !important;border-radius:6px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1) !important;box-sizing:border-box !important;position :relative;left :0px !important;height :38px;top :5px !important;border-radius :5px !important;text-align :center !important;margin-top :-15px !important;margin-bottom :10px !important;}", ".google-auth-button:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1) !important;}", ".google-auth-button>span{color:#000 !important;font-size:15px !important;font-weight :600 !important;font-family :\"Cabin\" !important;white-space:nowrap !important;}", ".google-auth-button>div{height :18px !important;margin-top :-16px !important;margin-left :7px !important;}", ".custom-signin .form-card{background:#fdfdfd;width:400px;min-height:320px;-webkit-box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;z-index:1000;}", ".custom-signin{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:70px;box-sizing:border-box;min-height:100%;-webkit-transition :2s;transition :2s;margin-top :50px;}", ".custom-signin .form-card div{padding:5px 0px;margin-top:10px;}", "input[type=\"text\"],input[type=\"password\"],input[type=\"email\"]{padding:10px;width:250px;height:38px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;font-family:inherit !important;font-size :1em;font-weight :600;}", "::-webkit-input-placeholder{font-family:inherit;}", "::-moz-placeholder{font-family:inherit;}", ":-ms-input-placeholder{font-family:inherit;}", "::placeholder{font-family:inherit;}", ".signup-btn{width:100px;height:45px;border:0;border-radius:6px;cursor:pointer;background-color:rgb(96,51,141);text-transform:uppercase;font-family:inherit;font-size:16px;font-weight:200;color:#f2f2f2;outline:0;display:relative;margin-left:75px;margin-top:10px;margin-bottom:15px;}", ".join{cursor:pointer !important;color:rgb(91,56,141) !important;font-weight:600 !important;}", ".signup-btn:hover{background-color:#e6ecf0;color:rgb(96,51,141);border:2px solid rgb(96,51,141);}", ".signup-btn:disabled{cursor:not-allowed;background:#e6e8eb;color:#8d959c;}", "a{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}", ".img-logo-style{position:absolute;top:-70px;}", ".i-have-account{textalign:center;fontfamily:inherit;margin-top:5px;margin-bottom:15px;}", ".loginButton>i{position :relative;left :-20px;}", ".loginButton{box-sizing:border-box;position:relative;width :250px;margin-top:0.8em;margin-bottom :1.5em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:0.2em;color:#fff;font-family :inherit;font-weight :600;font-size :15px !important;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);text-transform :none !important;}", ".loginButton:before{content :\"\", box-sizing :border-box;position :absolute;top :0;left :0;width :34px;height :100%;}", ".loginButton:focus{outline :none;}", ".loginButton:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1);}", ".loginButton--facebook{background-color :#4C69BA;background-image :linear-gradient(#4C69BA,#3B55A0);text-shadow :0 -1px 0 #354C8C;}", ".loginButton--facebook:before{border-right :#364e92 1px solid;}", ".loginButton--facebook:hover,.loginButton--facebook:focus{background-color :#5B7BD5;background-image :linear-gradient(#5B7BD5,#4864b1);}", "@media screen and (max-width:600px){.custom-signin .form-card{width:300px;min-height:300px;}.custom-signin{top:70px;}.img-logo-style{top:-65px;}input[type=\"text\"],input[type=\"password\"]{padding:5px;}.custom-signin .form-card div{padding:5px 10px;margin-top:10px;}.i-have-account{position:relative;}.signup-btn{margin-left:85px;}}"])));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

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

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zUqs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccountEditIcon */
/* unused harmony export SquareEditIcon */
/* unused harmony export AddLinkIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddIcon; });
/* unused harmony export SettingIcon */
/* unused harmony export DislikeIcon */
/* unused harmony export LikeIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SearchIcon; });
/* unused harmony export BellIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return UserIcon; });
/* unused harmony export StarIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ViewMore; });
/* unused harmony export Collapse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return More; });
/* unused harmony export Landing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Thumb_up; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Thumb_down; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return InsertLink; });
/* unused harmony export LandingSvg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CardDownArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CardUpArrow; });
/* unused harmony export AddRecommendation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ProfileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return QuestionBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Bellie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LogoutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LeftArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MonthIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return WeekIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AllIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return StarBoxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return InfoCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Banned; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);




var AccountEditIcon = function AccountEditIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#000",
    d: "M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z"
  }));
};
var SquareEditIcon = function SquareEditIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#000000",
    d: "M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
  }));
};
var AddLinkIcon = function AddLinkIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#000000",
    d: "M7,7H11V9H7A3,3 0 0,0 4,12A3,3 0 0,0 7,15H11V17H7A5,5 0 0,1 2,12A5,5 0 0,1 7,7M17,7A5,5 0 0,1 22,12H20A3,3 0 0,0 17,9H13V7H17M8,11H16V13H8V11M17,12H19V15H22V17H19V20H17V17H14V15H17V12Z"
  }));
};
var AddIcon = function AddIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000" : _ref$color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
  }));
};
var SettingIcon = function SettingIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#eee",
    d: "M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
  }));
};
var DislikeIcon = function DislikeIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#000000",
    d: "M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"
  }));
};
var LikeIcon = function LikeIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#000000",
    d: "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
  }));
};
var SearchIcon = function SearchIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "20px",
      height: "20px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#60338d",
    d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
  }));
};
var BellIcon = function BellIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "5px",
      height: "5px"
    },
    viewBox: "0 0 24 24",
    className: "jsx-96149225" + " " + "bell-style"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#eee",
    d: "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",
    className: "jsx-96149225"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "96149225"
  }, [".bell-style.jsx-96149225{width:20px;height:20px;}", "@media screen and (max-width:600px){.bell-style.jsx-96149225{width:10px;height:10px;}}"]));
};
var UserIcon = function UserIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    className: "jsx-2215463236" + " " + "user-icon-style"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#000000",
    d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z",
    className: "jsx-2215463236"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2215463236"
  }, [".user-icon-style.jsx-2215463236{width:24px;height:24px;}", "@media screen and (max-width:600px){.user-icon-style.jsx-2215463236{width:35px;height:35px;}}"]));
};
var StarIcon = function StarIcon() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    className: "jsx-7440837" + " " + "star-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#60338d",
    d: "M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z",
    className: "jsx-7440837"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "7440837"
  }, [".star-icon.jsx-7440837{width:34px;height:34px;}"]));
};
var ViewMore = function ViewMore(_ref2) {
  var width = _ref2.width,
      color = _ref2.color,
      height = _ref2.height;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    className: "view-more",
    d: "M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
  }));
};
var Collapse = function Collapse() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#000000",
    d: "M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z"
  }));
};
var More = function More(_ref3) {
  var color = _ref3.color,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? "30" : _ref3$width,
      _ref3$height = _ref3.height,
      height = _ref3$height === void 0 ? "30" : _ref3$height;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "more-icon-style",
    width: width,
    height: height,
    style: {
      boxShadow: " 0 4px 19px 0 rgba(0,0,0,.01), cursor : pointer"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: color ? color : "#fdfdfd"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }));
};
var Landing = function Landing() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1402.05 179.91"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cls-1",
    d: "M0,271.58S217.2,120.09,403.11,120.09c197.94,0,442.48,136.49,658.47,136.49s340.48-120,340.48-120V300H0Z",
    transform: "translate(0 -120.09)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n    .cls-1{\n      fill: #f4f6f8;\n    }\n    "));
};
var Thumb_up = function Thumb_up(_ref4) {
  var color = _ref4.color,
      _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? "34px" : _ref4$height,
      _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? "34px" : _ref4$width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "animate-icon",
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"
  }));
};
var Thumb_down = function Thumb_down(_ref5) {
  var _ref5$width = _ref5.width,
      width = _ref5$width === void 0 ? "34px" : _ref5$width,
      color = _ref5.color,
      _ref5$height = _ref5.height,
      height = _ref5$height === void 0 ? "34px" : _ref5$height;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z"
  }));
};
var InsertLink = function InsertLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: props.color,
    d: "M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"
  }));
};
var LandingSvg = function LandingSvg() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1402.05 179.91"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: "cls-1",
    "data-name": "Layer 2",
    d: "M0,28.42S217.2,179.91,403.11,179.91c197.94,0,442.48-136.49,658.47-136.49s340.48,120,340.48,120V0H0Z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n   .cls-1{\n     fill: #fdfdfd;\n   }\n\n    "));
};
var CardDownArrow = function CardDownArrow(_ref6) {
  var width = _ref6.width,
      height = _ref6.height,
      color = _ref6.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};
var CardUpArrow = function CardUpArrow(_ref7) {
  var width = _ref7.width,
      height = _ref7.height,
      color = _ref7.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }));
};
var AddRecommendation = function AddRecommendation(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "34",
    height: "34",
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"
  }));
};
var ProfileIcon = function ProfileIcon(_ref8) {
  var color = _ref8.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "20px",
      height: "20px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
  }));
};
var QuestionBox = function QuestionBox(_ref9) {
  var _ref9$width = _ref9.width,
      width = _ref9$width === void 0 ? "20px" : _ref9$width,
      _ref9$height = _ref9.height,
      height = _ref9$height === void 0 ? "20px" : _ref9$height,
      color = _ref9.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
  }));
};
var Bellie = function Bellie(_ref10) {
  var color = _ref10.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "20px",
      height: "20px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"
  }));
};
var LogoutIcon = function LogoutIcon(_ref11) {
  var color = _ref11.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "20px",
      height: "20px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z"
  }));
};
var LeftArrow = function LeftArrow() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "rgb(91, 56, 141)",
    d: "M14 7l-5 5 5 5V7z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z"
  }));
};
var MonthIcon = function MonthIcon(_ref12) {
  var color = _ref12.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "23px",
      height: "23px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
  }));
};
var WeekIcon = function WeekIcon(_ref13) {
  var color = _ref13.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "23px",
      height: "23px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M6,1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1M5,7V19H19V7H5M7,9H17V11H7V9Z"
  }));
};
var DayIcon = function DayIcon(_ref14) {
  var color = _ref14.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "23px",
      height: "23px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
  }));
};
var AllIcon = function AllIcon(_ref15) {
  var color = _ref15.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "23px",
      height: "23px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
  }));
};
var StarBoxIcon = function StarBoxIcon(_ref16) {
  var color = _ref16.color,
      height = _ref16.height,
      width = _ref16.width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: width,
      height: height
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M15.58,17L14.63,12.92L17.79,10.19L13.62,9.83L12,6L10.38,9.84L6.21,10.2L9.37,12.93L8.42,17L12,14.84L15.58,17Z"
  }));
};
var InfoCircle = function InfoCircle(_ref17) {
  var _ref17$color = _ref17.color,
      color = _ref17$color === void 0 ? "#000" : _ref17$color,
      height = _ref17.height,
      width = _ref17.width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
  }));
};
var Banned = function Banned(_ref18) {
  var color = _ref18.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      width: "24px",
      height: "24px"
    },
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: color,
    d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z"
  }));
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });