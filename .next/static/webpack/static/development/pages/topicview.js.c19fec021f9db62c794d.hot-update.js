webpackHotUpdate("static/development/pages/topicview.js",{

/***/ "./components/topicview/optionList.js":
/*!********************************************!*\
  !*** ./components/topicview/optionList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptionList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tab */ "./components/topicview/tab.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");
/* harmony import */ var _pages_signin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../pages/signin */ "./pages/signin.js");
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../pages/signup */ "./pages/signup.js");
/* harmony import */ var _modal_topicviewPopupModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../modal/topicviewPopupModal */ "./components/modal/topicviewPopupModal.js");






















var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_13___default()(_config_config__WEBPACK_IMPORTED_MODULE_12__["default"]);
var imageArr = ["/static/thishouse.png", "/static/avatar.png", "/static/thishouse.png"];

var OptionList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(OptionList, _Component);

  function OptionList() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, OptionList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(OptionList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      inc: 0,
      //inc stands for increase
      dec: 0,
      //dec stands for decrease
      experience: "",
      showClass: false,
      clickedOptionDetails: {},
      user_data: {},
      type: "",
      data: _this.props.data,
      ioResponseLike: false,
      ioResponseDisLike: false,
      UserLoggedIn: true,
      showSignInOverlay: false,
      UserClickedLogin: false,
      UserClickedSignup: false,
      rxn: null,
      showUpdateModal: false,
      show: false,
      updatedOption: "",
      updatedOptionLink: "",
      proTitle: "",
      conTitle: "",
      proDescription: "",
      conDescription: "",
      updateCon: false,
      updatePro: false,
      question: "",
      option: "",
      optionId: "",
      updateImage: false,
      imageLink: "",
      mediaArr: null,
      LikeColor: {},
      DisLikeColor: {},
      LikeNumber: _this.props.LikeNumber,
      DisLikeNumber: _this.props.DisLikeNumber,
      user_id: _this.props.user_id
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getSocketResponse", function () {
      socket.on("rec_added", function (data) {
        if (data.type === "like") {
          _this.setState({
            ioResponseLike: true,
            _like: data.like
          });

          return;
        }

        if (data.type === "dislike") {
          _this.setState({
            ioResponseDisLike: true,
            _dislike: data.dislike
          });

          return;
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDivClose", function (e) {
      if (e.target === _this.div) {
        _this.setState(function (previousState) {
          return {
            showSignInOverlay: !previousState.showSignInOverlay
          };
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "openLoginOverlay", function () {
      _this.setState({
        UserClickedSignup: false,
        UserLoggedIn: false,
        showSignInOverlay: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "openSignupOverlay", function () {
      _this.setState({
        UserClickedSignup: !_this.state.UserClickedSignup,
        UserLoggedIn: true,
        showSignInOverlay: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "openBtn", function () {
      _this.setState({
        showClass: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "closeBtn", function () {
      _this.setState({
        showClass: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "closeModal", function (e) {
      if (e.target === _this.recCard) {
        _this.setState({
          showClass: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDislike", function () {
      var user = JSON.parse(localStorage.getItem("user_details"));

      if (!user) {
        alert("Not registered");
        return;
      }

      _this.setState({
        type: "dislike"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handlelike", function (data) {
      var color = _this.state.LikeColor;
      var colo = _this.state.DisLikeColor;
      var LikeNumber = _this.state.LikeNumber;
      var DisLikeNumber = _this.state.DisLikeNumber;

      if (color[data.option] == "grey" && colo[data.option] == "grey") {
        color[data.option] = "blue";
        LikeNumber[data.option] = LikeNumber[data.option] + 1;
        colo[data.option] = "grey";
      } else if (color[data.option] == "grey" && colo[data.option] == "blue") {
        color[data.option] = "blue";
        LikeNumber[data.option] = LikeNumber[data.option] + 1;
        DisLikeNumber[data.option] = DisLikeNumber[data.option] - 1;
        colo[data.option] = "grey";
      } else {
        LikeNumber[data.option] = LikeNumber[data.option] - 1;
        color[data.option] = "grey";
      }

      _this.setState({
        LikeColor: color,
        DisLikeColor: colo,
        LikeNumber: LikeNumber,
        DisLikeNumber: DisLikeNumber
      });

      var _user = JSON.parse(localStorage.getItem("user_details"));

      var rxn = {
        userId: _user._id,
        option: data.option,
        type: true
      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["AddUserReactionToOption"])(rxn).then(function (res) {}).catch(function (err) {
        console.log(err);
        console.log(err.response.data);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDislike", function (data) {
      var color = _this.state.DisLikeColor;
      var colo = _this.state.LikeColor;
      var LikeNumber = _this.state.LikeNumber;
      var DisLikeNumber = _this.state.DisLikeNumber;

      if (color[data.option] == "grey" && colo[data.option] == "grey") {
        color[data.option] = "blue";
        colo[data.option] = "grey";
        DisLikeNumber[data.option] = DisLikeNumber[data.option] + 1;
      } else if (color[data.option] == "grey" && colo[data.option] == "blue") {
        color[data.option] = "blue";
        colo[data.option] = "grey";
        DisLikeNumber[data.option] = DisLikeNumber[data.option] + 1;
        LikeNumber[data.option] = LikeNumber[data.option] - 1;
      } else {
        color[data.option] = "grey";
        DisLikeNumber[data.option] = DisLikeNumber[data.option] - 1;
      }

      _this.setState({
        DisLikeColor: color,
        LikeColor: colo,
        DisLikeNumber: DisLikeNumber,
        LikeNumber: LikeNumber
      });

      var _user = JSON.parse(localStorage.getItem("user_details"));

      var rxn = {
        userId: _user._id,
        option: data.option,
        type: false
      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["AddUserReactionToOption"])(rxn).then(function (res) {}).catch(function (err) {
        console.log(err);
        console.log(err.response.data);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleInputChange", function (_ref) {
      var _ref$target = _ref.target,
          value = _ref$target.value,
          name = _ref$target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSpam", function (option) {
      var user = JSON.parse(localStorage.getItem("user_details"));

      if (!user) {
        alert("Sign in to carry out this action");
        return;
      }

      var _data = {
        option: option,
        isSpam: true,
        userIdWhoMarkedAsSpam: user._id
      }; //Mark option as spam

      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["MarkOptionAsSpam"])(_data).then(function (response) {
        alert("Option Marked as Spam");
      }).catch(function (error) {
        return console.log(error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "toggle", function () {
      _this.setState({
        modal: !_this.state.modal
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClose", function () {
      _this.setState({
        show: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleShow", function () {
      _this.setState({
        show: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOptionUpdateChange", function (_ref2) {
      var _ref2$target = _ref2.target,
          value = _ref2$target.value,
          name = _ref2$target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSaveUpdatedOption", function () {
      var user = JSON.parse(localStorage.getItem("user_details"));
      var _this$state = _this.state,
          updatedOption = _this$state.updatedOption,
          updatedOptionLink = _this$state.updatedOptionLink,
          optionId = _this$state.optionId;

      if (!user) {
        alert("Login to carry out this action");
        return;
      }

      if (updatedOption === "" || updatedOptionLink === "" || !optionId) {
        alert("no way");
        console.log("no way");
        return;
      }

      var _saveUpdateHistory = {
        option: updatedOption,
        optionId: optionId,
        username: user.username,
        userId: user._id
      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["UpdateOption"])(optionId, user._id, updatedOption, updatedOptionLink).then(function (result) {
        alert("Option Updated");

        _this.setState({
          show: false
        });

        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["SaveUpdateHistory"])(_saveUpdateHistory).then(function () {
          return console.log("saved");
        }).catch(function (err) {
          return console.log(err.response);
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleUpdatePro", function (visible, caption, pro, id, question, option, optionId) {
      _this.setState({
        updatePro: visible,
        proTitle: caption,
        proDescription: pro,
        proId: id,
        question: question,
        option: option,
        optionId: optionId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleUpdateCon", function (visible, caption, con, id, question, option, optionId) {
      _this.setState({
        updateCon: visible,
        conTitle: caption,
        conDescription: con,
        conId: id,
        question: question,
        option: option,
        optionId: optionId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleProUpdate", function () {
      var user = JSON.parse(localStorage.getItem("user_details"));
      var _this$state2 = _this.state,
          proTitle = _this$state2.proTitle,
          proDescription = _this$state2.proDescription,
          proId = _this$state2.proId,
          option = _this$state2.option,
          optionId = _this$state2.optionId,
          question = _this$state2.question;

      if (!user) {
        alert("Login to carry out this action");
        return;
      }

      if (proTitle === "" || proDescription === "") {
        alert("It can't be empty");
        return;
      }

      var data = {
        option: option,
        username: user.username,
        optionId: optionId,
        title: proTitle,
        description: proDescription,
        userId: user._id,
        question: question,
        proId: proId
      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["UpdatePro"])(proId, user._id, proTitle.replace("%", " percent"), proDescription.replace("%", " percent"), option, optionId, question).then(function (result) {
        alert("updated");

        _this.setState({
          updatePro: false
        });

        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["SaveProHistory"])(data).then(function () {
          return console.log("saved");
        }).catch(function (err) {
          return console.log(err.response);
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleConUpdate", function () {
      var user = JSON.parse(localStorage.getItem("user_details"));
      var _this$state3 = _this.state,
          conTitle = _this$state3.conTitle,
          option = _this$state3.option,
          question = _this$state3.question,
          optionId = _this$state3.optionId,
          conDescription = _this$state3.conDescription,
          conId = _this$state3.conId;

      if (!user) {
        alert("Login to carry out this action");
        return;
      }

      if (conTitle === "" || conDescription === "") {
        alert("It can't be empty");
        return;
      }

      var data = {
        option: option,
        username: user.username,
        optionId: optionId,
        title: conTitle,
        description: conDescription,
        userId: user._id,
        question: question,
        conId: conId
      };
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["UpdateCon"])(conId, user._id, conTitle.replace("%", " percent"), conDescription.replace("%", " percent"), option, optionId, question).then(function (result) {
        alert("updated");

        _this.setState({
          updateCon: false
        });

        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["SaveConHistory"])(data).then(function (result) {
          return console.log(result);
        }).catch(function (err) {
          return console.log(err.response);
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleUpdateImage", function () {
      //Parameters here
      var _this$state4 = _this.state,
          newImage = _this$state4.newImage,
          optionId = _this$state4.optionId;
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["AddOptionImage"])(optionId, newImage).then(function (axiosResponse) {
        _this.setState({
          optionImageAdded: true
        });
      }).catch(function (err) {
        _this.setState({
          err: err
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addImageUrlToImageArray", function (_ref3) {
      var _ref3$target = _ref3.target,
          value = _ref3$target.value,
          name = _ref3$target.name;

      _this.setState({
        newImage: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleShowModal", function (visible, mediaArr, optionId) {
      _this.setState({
        updateImage: visible,
        mediaArr: mediaArr,
        optionId: optionId
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(OptionList, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(this.state.user_id.then(
                /*#__PURE__*/
                function () {
                  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                    var LikeColor, DisLikeColor;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["GetUserReactionToLikeOption"])(res, _this2.state.data);

                          case 2:
                            LikeColor = _context.sent;
                            _context.next = 5;
                            return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["GetUserReactionToDisLikeOption"])(res, _this2.state.data);

                          case 5:
                            DisLikeColor = _context.sent;

                            _this2.setState({
                              LikeColor: LikeColor.data,
                              DisLikeColor: DisLikeColor.data
                            });

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSocketResponse();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state5 = this.state,
          showClass = _this$state5.showClass,
          clickedOptionDetails = _this$state5.clickedOptionDetails,
          ioResponseLike = _this$state5.ioResponseLike,
          ioResponseDisLike = _this$state5.ioResponseDisLike,
          UserLoggedIn = _this$state5.UserLoggedIn,
          showSignInOverlay = _this$state5.showSignInOverlay,
          _disliked = _this$state5._disliked,
          _liked = _this$state5._liked,
          UserClickedSignup = _this$state5.UserClickedSignup,
          rxn = _this$state5.rxn,
          show = _this$state5.show,
          optionItems = _this$state5.optionItems,
          proDescription = _this$state5.proDescription,
          proTitle = _this$state5.proTitle,
          conDescription = _this$state5.conDescription,
          conTitle = _this$state5.conTitle,
          updateCon = _this$state5.updateCon,
          updatePro = _this$state5.updatePro,
          link = _this$state5.link,
          mediaArr = _this$state5.mediaArr,
          newImage = _this$state5.newImage,
          optionImageAdded = _this$state5.optionImageAdded;
      var profileImageUrl = this.props.user.image ? this.props.user.image : "/static/wor.jpg";
      var Likecolor = rxn ? "blue" : "grey";
      var disLikeColor = _disliked ? "blue" : "grey";
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, this.props.data.map(function (item) {
        var like = ioResponseLike ? _this3.state._like : item.like;
        var dislike = ioResponseDisLike ? _this3.state._dislike : item.dislike;

        if (item.mediaUrl.length < 2) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            key: item._id,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "card-list"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "option-name"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            style: {
              marginRight: "15px",
              marginLeft: "10px"
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "score-card"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "score"
          }, _this3.state.LikeNumber[item.option] - _this3.state.DisLikeNumber[item.option])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            prefetch: true,
            href: "/option/".concat(item.option)
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "option-name-question"
          }, item.option)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "more-icon"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
            trigger: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "more-icon-button"
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["More"], {
              color: "transparent"
            })),
            on: "click",
            content: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              onClick: function onClick() {
                if (!JSON.parse(localStorage.getItem("user_details"))) {
                  _this3.setState({
                    UserLoggedIn: false,
                    showSignInOverlay: true
                  });

                  return;
                }

                var _unique = {
                  option: item.option,
                  question: item.question,
                  optionImage: item.optionImage ///OptionID and QuestionId may be added

                };

                _this3.setState({
                  clickedOptionDetails: _unique,
                  showClass: true
                });
              },
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, "Add Pros and Cons")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
              href: "/updatehistory/".concat(item.option)
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, "See Update History"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              style: {
                cursor: "pointer"
              },
              onClick: function onClick() {
                _this3.setState({
                  show: true,
                  updatedOption: item.option,
                  updatedOptionLink: item.link,
                  optionId: item._id
                });
              },
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, "Update Option")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              style: {
                color: "#E91E63",
                cursor: "pointer"
              },
              onClick: function onClick() {
                return _this3.handleSpam(item.option);
              },
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
            }, "Mark Option as Spam"))),
            hideOnScroll: true,
            position: "bottom right"
          })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            style: {
              marginBottom: "10px"
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "carousel"
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "little-card"
          }, item.mediaUrl.slice(0, 3).map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: index,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "twoo"
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: item,
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "option-image"
            }));
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            onClick: function onClick() {
              return _this3.handleShowModal(true, item.mediaUrl, item._id);
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "twoo add-media"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: " center",
              flexDirection: "column"
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["AddIcon"], {
            color: "#58647b"
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, "Add Image or Video")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "fix"
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_tab__WEBPACK_IMPORTED_MODULE_14__["default"], {
            experiences: item.experiences,
            userAvatar: item.userImage,
            pros: item.pros,
            cons: item.cons,
            id: item._id,
            option: item.option,
            question: item.question,
            UpdateCon: _this3.handleUpdateCon,
            UpdatePro: _this3.handleUpdatePro
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "rec-btn"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "get-it-btn"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["InsertLink"], {
            color: "#fff"
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            href: "http://".concat(item.link)
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            target: "_blank",
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "btn-content get-it"
          }, item.price && " $ ".concat(item.price), !item.price && " GET IT HERE")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "rec-holder"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
            onClick: function onClick() {
              if (!JSON.parse(localStorage.getItem("user_details"))) {
                _this3.setState({
                  UserLoggedIn: false,
                  showSignInOverlay: true
                });

                return;
              }

              var _unique = {
                option: item.option,
                question: item.question,
                optionImage: item.mediaUrl,
                optionId: item._id ///OptionID and QuestionId may be added

              }; // this.setState(
              //   {
              //     clickedOptionDetails: _unique,
              //     type: "like",
              //     showClass: true
              //   },
              //   () => {
              //     this.setState(previousState => ({
              //       inc: previousState.inc + 1
              //     }));
              //   }
              // );

              {
                _this3.handlelike(_unique);
              }
              ;
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "like-btn"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon lik"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_up"], {
            color: _this3.state.LikeColor[item.option]
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((like ? "btn-content btn-content-active" : "btn-content") || "")
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
          }, _this3.state.LikeNumber[item.option]))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
            onClick: function onClick() {
              if (!JSON.parse(localStorage.getItem("user_details"))) {
                _this3.setState({
                  UserLoggedIn: false,
                  showSignInOverlay: true
                });

                return;
              }

              if (JSON.parse(localStorage.getItem("user_details"))) {
                var _unique = {
                  option: item.option,
                  question: item.question,
                  optionImage: item.mediaUrl,
                  optionId: item._id ///OptionID and QuestionId may be added

                }; // this.setState(
                //   {
                //     clickedOptionDetails: _unique,
                //     type: "dislike",
                //     showClass: true
                //   },
                //   () => {
                //     this.setState(previousState => ({
                //       dec: previousState.dec + 1
                //     }));
                //   }
                // );

                {
                  _this3.handleDislike(_unique);
                }
                ;
                return;
              }
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "dislike-btn"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon dis"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_down"], {
            color: _this3.state.DisLikeColor[item.option]
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((_disliked ? "btn-content btn-content-active" : "btn-content") || "")
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
          }, _this3.state.DisLikeNumber[item.option]))))));
        }

        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: item._id,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "card-list"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "card-list-top-header"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "option-name"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            marginRight: "3px"
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "score-card"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "score"
        }, item.rating)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          prefetch: true,
          as: "/option/".concat(item.option),
          href: "/option/".concat(item.option)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "option-name-question"
        }, item.option)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "more-icon"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "more-icon-button"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["More"], {
            color: "transparent"
          })),
          on: "click",
          content: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            onClick: function onClick() {
              if (!JSON.parse(localStorage.getItem("user_details"))) {
                _this3.setState({
                  UserLoggedIn: false,
                  showSignInOverlay: true
                });

                return;
              }

              var _unique = {
                option: item.option,
                question: item.question,
                optionImage: item.optionImage ///OptionID and QuestionId may be added

              };

              _this3.setState({
                clickedOptionDetails: _unique,
                showClass: true
              });
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, "Add Pros and Cons")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            href: "/updatehistory/".concat(item.option)
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, "See Update History"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            style: {
              cursor: "pointer"
            },
            onClick: function onClick() {
              _this3.setState({
                show: true,
                updatedOption: item.option,
                updatedOptionLink: item.link,
                optionId: item._id
              });
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, "Update Option")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            style: {
              color: "#E91E63",
              cursor: "pointer"
            },
            onClick: function onClick() {
              return _this3.handleSpam(item.option);
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
          }, "Mark Option as Spam"))),
          hideOnScroll: true,
          position: "bottom right"
        })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            marginBottom: "10px"
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "carousel"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "little-card"
        }, item.mediaUrl.slice(0, 2).map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
            key: index,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "twoo"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
            src: item,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "option-image"
          }));
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "fix"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_tab__WEBPACK_IMPORTED_MODULE_14__["default"], {
          experiences: item.experiences,
          userAvatar: item.userImage,
          pros: item.pros,
          cons: item.cons,
          id: item._id,
          option: item.option,
          question: item.question,
          UpdateCon: _this3.handleUpdateCon,
          UpdatePro: _this3.handleUpdatePro
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "rec-btn"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "get-it-btn"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["InsertLink"], {
          color: "#fff"
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "http://".concat(item.link)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          target: "_blank",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "btn-content get-it"
        }, item.price && " $ ".concat(item.price), !item.price && " GET IT HERE")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "rec-holder"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          onClick: function onClick() {
            if (!JSON.parse(localStorage.getItem("user_details"))) {
              _this3.setState({
                UserLoggedIn: false,
                showSignInOverlay: true
              });

              return;
            }

            var _unique = {
              option: item.option,
              question: item.question,
              optionImage: item.mediaUrl,
              optionId: item._id ///OptionID and QuestionId may be added

            }; // this.setState(
            //   {
            //     clickedOptionDetails: _unique,
            //     type: "like",
            //     showClass: true
            //   },
            //   () => {
            //     this.setState(previousState => ({
            //       inc: previousState.inc + 1
            //     }));
            //   }
            // );

            {
              _this3.handlelike(_unique);
            }
            ;
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "like-btn"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon lik"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_up"], {
          color: _this3.state.LikeColor[item.option]
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((like ? "btn-content btn-content-active" : "btn-content") || "")
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
        }, _this3.state.LikeNumber[item.option]))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          onClick: function onClick() {
            if (!JSON.parse(localStorage.getItem("user_details"))) {
              _this3.setState({
                UserLoggedIn: false,
                showSignInOverlay: true
              });

              return;
            }

            if (JSON.parse(localStorage.getItem("user_details"))) {
              var _unique = {
                option: item.option,
                question: item.question,
                optionImage: item.mediaUrl,
                optionId: item._id ///OptionID and QuestionId may be added

              }; // this.setState(
              //   {
              //     clickedOptionDetails: _unique,
              //     type: "dislike",
              //     showClass: true
              //   },
              //   () => {
              //     this.setState(previousState => ({
              //       dec: previousState.dec + 1
              //     }));
              //   }
              // );

              {
                _this3.handleDislike(_unique);
              }
              ;
              return;
            }
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "dislike-btn"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon dis"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_down"], {
          color: _this3.state.DisLikeColor[item.option]
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((_disliked ? "btn-content btn-content-active" : "btn-content") || "")
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
        }, _this3.state.DisLikeNumber[item.option]))))));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this3.handleDivClose(e);
        },
        ref: function ref(el) {
          return _this3.div = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((showSignInOverlay ? "overlayShow showSignin-container" : "overlay") || "")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        onClick: function onClick() {
          _this3.setState({
            showSignInOverlay: false,
            UserLoggedIn: false
          });
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "close"
      }, "\xD7"), !UserLoggedIn && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_pages_signin__WEBPACK_IMPORTED_MODULE_19__["default"], {
        openSignup: this.openSignupOverlay
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this3.handleDivClose(e);
        },
        ref: function ref(el) {
          return _this3.div = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((UserClickedSignup ? "overlayShow showSignin-container" : "overlay") || "")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        onClick: function onClick() {
          _this3.setState({
            UserClickedSignup: false
          });
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "close"
      }, "\xD7"), UserClickedSignup && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_pages_signup__WEBPACK_IMPORTED_MODULE_20__["default"], {
        openLogin: this.openLoginOverlay
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this3.closeModal(e);
        },
        ref: function ref(el) {
          return _this3.recCard = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((showClass ? "overlayShowie" : "overlay") || "")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "add-rec-popup-section"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_modal_topicviewPopupModal__WEBPACK_IMPORTED_MODULE_21__["default"], {
        profileImage: profileImageUrl,
        option: clickedOptionDetails.option,
        closeBtn: this.closeBtn,
        question: clickedOptionDetails.question,
        optionImage: clickedOptionDetails.optionImage,
        optionId: clickedOptionDetails.optionId,
        type: this.state.type,
        socketId: socket.id
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          top: "4%",
          fontSize: "60px",
          cursor: "pointer",
          position: "absolute"
        },
        onClick: this.closeBtn,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "topicview-close-icon"
      }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"], {
        style: {
          marginTop: "70px"
        },
        show: show,
        onHide: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Title, null, "Update Option")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option-form"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        onChange: this.onOptionUpdateChange,
        name: "updatedOption",
        value: this.state.updatedOption,
        style: {
          width: "100px !important"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        value: this.state.updatedOptionLink,
        name: "updatedOptionLink",
        onChange: this.onOptionUpdateChange,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        variant: "secondary",
        onClick: this.handleClose
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        style: {
          backgroundColor: "rgb(91, 56, 141)",
          border: 0
        },
        onClick: function onClick() {
          return _this3.handleSaveUpdatedOption();
        }
      }, "Save Changes")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"], {
        style: {
          marginTop: "70px"
        },
        show: updatePro,
        onHide: function onHide() {
          return _this3.handleUpdatePro(false);
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Title, null, "Update Pro")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option-form"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          return _this3.onOptionUpdateChange(e);
        },
        name: "proTitle",
        value: proTitle,
        style: {
          width: "100px !important"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        value: proDescription,
        name: "proDescription",
        onChange: function onChange(e) {
          return _this3.onOptionUpdateChange(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        variant: "secondary",
        onClick: function onClick() {
          return _this3.handleUpdatePro(false);
        }
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        style: {
          backgroundColor: "rgb(91, 56, 141)",
          border: 0
        },
        onClick: this.handleProUpdate
      }, "Save Changes")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"], {
        style: {
          marginTop: "70px"
        },
        show: updateCon,
        onHide: function onHide() {
          return _this3.handleUpdateCon(false);
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Title, null, "Update Con")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option-form"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          return _this3.onOptionUpdateChange(e);
        },
        name: "conTitle",
        value: conTitle,
        style: {
          width: "100px !important"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        value: conDescription,
        name: "conDescription",
        onChange: function onChange(e) {
          return _this3.onOptionUpdateChange(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        variant: "secondary",
        onClick: function onClick() {
          return _this3.handleUpdateCon(false);
        }
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        style: {
          backgroundColor: "rgb(91, 56, 141)",
          border: 0
        },
        onClick: function onClick() {
          return _this3.handleConUpdate();
        }
      }, "Save Changes")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"], {
        style: {
          marginTop: "70px"
        },
        show: this.state.updateImage,
        onHide: function onHide() {
          return _this3.handleShowModal(false);
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Title, null, "Add Image")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option-form"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "url",
        onChange: function onChange(e) {
          return _this3.onOptionUpdateChange(e);
        },
        onKeyUp: function onKeyUp(e) {
          return _this3.addImageUrlToImageArray(e);
        } // onBlur={}
        ,
        name: "imageLink",
        value: this.state.imageLink,
        style: {
          width: "100px !important"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "image-container"
      }, mediaArr && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, mediaArr.slice(0, 4).map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this3.setState({
              imageLink: item
            });
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: item,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "im"
        }));
      })), newImage ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]])
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: newImage,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "im"
      })) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Placeholder"], {
        style: {
          height: "50px",
          width: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Placeholder"].Image, {
        square: true
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        variant: "secondary",
        onClick: function onClick() {
          return _this3.handleShowModal(false);
        }
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"] // variant="primary"
      , {
        style: {
          backgroundColor: "rgb(91, 56, 141)",
          border: 0
        },
        onClick: function onClick() {
          return _this3.handleUpdateImage();
        },
        disabled: optionImageAdded
      }, optionImageAdded ? "Saved" : "Save Changes")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1464024445",
        dynamic: [profileImageUrl]
      }, ".image-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.image-container.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{width:50px;height:50px;border:1px solid grey;padding:5px;border-radius:4px;margin-right:6px;}.im.__jsx-style-dynamic-selector{max-width:100%;vertical-align:middle;}.card-list.__jsx-style-dynamic-selector{overflow:hidden;background-color:#fdfdfd;margin-bottom:36px;padding:18px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);border:1px solid #e6e8eb;border-radius:15px;min-width:850px;min-height:300px;box-sizing:border-box;font-family:Cabin;}.fix.__jsx-style-dynamic-selector{margin-bottom:30px;}.topicview-close-icon.__jsx-style-dynamic-selector{left:91%;color:rgb(91,56,141);background:#e6ecf0;}.update-option.__jsx-style-dynamic-selector{width:300px;border:1px solid grey;border-radius:3px;padding:10px;outline:0;font-family:inherit;font-weight:600;}.update-option-form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.add-rec-popup-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.update-option-form.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{padding:6px;}.score-card.__jsx-style-dynamic-selector{cursor:pointer;background-image:linear-gradient(135deg,#737373,#171717);color:#fff;text-align:center;width:30px;height:30px;display:inline-block;border-radius:2px;}.score.__jsx-style-dynamic-selector{position:relative;top:4px;}.showSignin-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.close.__jsx-style-dynamic-selector{font-size:56px;position:relative;margin-top:-550px;left:50%;color:rgb(91,56,141);cursor:pointer;}a.__jsx-style-dynamic-selector{color:#222;}.more-icon-button.__jsx-style-dynamic-selector{background:#eee;border:0;cursor:pointer;border-radius:35px;outline:0;height:35px;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.option-name.__jsx-style-dynamic-selector{display:inline-block;width:100%;}.option-name-question.__jsx-style-dynamic-selector:hover{color:rgb(96,56,141);cursor:pointer;}.option-name-question.__jsx-style-dynamic-selector{font-size:24px;position:relative;top:7px;text-transform:Capitalize;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;}.option-image.__jsx-style-dynamic-selector{width:100%;height:100%;margin:0;padding:0;}.little-card.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.little-card.__jsx-style-dynamic-selector .two.__jsx-style-dynamic-selector{padding:5px;background:#fdfdfd;height:180px;width:33.33%;border:1px solid transparent;border-radius:9px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.07);text-align:center;margin-top:15px;margin-right:6px;box-sizing:border-box;}.little-card.__jsx-style-dynamic-selector .twoo.__jsx-style-dynamic-selector{padding:5px;background:#fdfdfd;height:180px;width:50%;border:1px solid transparent;border-radius:9px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.07);text-align:center;margin-top:15px;margin-right:6px;box-sizing:border-box;}.add-media.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#58647b;background-color:#f7f7f7 !important;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hideonMoblie.__jsx-style-dynamic-selector{display:block;}@media screen and (max-width:768px){.hideonMoblie.__jsx-style-dynamic-selector{display:none;}}.little-card.__jsx-style-dynamic-selector .twoo.__jsx-style-dynamic-selector:hover{background:linear-gradient(to left,#fafafa,#eee);cursor:pointer;}.none.__jsx-style-dynamic-selector{cursor:not-allowed !important;color:#c3c3c3 !important;}.my-experience.__jsx-style-dynamic-selector{display:block;padding-bottom:10px;padding-top:10px;}.thumb-icon.__jsx-style-dynamic-selector{position:relative;top:2px;}.btn-content.__jsx-style-dynamic-selector{position:relative;top:-05px;margin-right:3px;color:grey;}.btn-content.get-it.__jsx-style-dynamic-selector{color:#fff !important;}.dis.__jsx-style-dynamic-selector{top:3px;}h2.__jsx-style-dynamic-selector{font-size:1.2em;font-family:inherit;}.option.__jsx-style-dynamic-selector{position:relative;top:-110px;left:100px;font-family:Cabin;}.action-button.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;padding:10px;font-family:inherit;border-radius:2px;border:0;margin-bottom:10px;}.cancel.__jsx-style-dynamic-selector{margin-left:200px;}.submit.__jsx-style-dynamic-selector{margin-left:10px;}.add.__jsx-style-dynamic-selector{position:relative;left:-47px;top:20px;font-size:0.95em;font-weight:600;font-family:inherit;cursor:pointer;}.form-rec-holder.__jsx-style-dynamic-selector{margin-bottom:30px;}.textarea-1.__jsx-style-dynamic-selector{width:40vw;height:60px;border-radius:5px;outline:0;padding:10px;resize:none;font-family:inherit;font-weight:700;}.textarea-2.__jsx-style-dynamic-selector{width:40vw;height:60px;outline:0;padding:10px;resize:none;border:1px solid #e6e8eb;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-family:inherit;font-weight:700;}.__jsx-style-dynamic-selector::-webkit-input-placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.__jsx-style-dynamic-selector::-moz-placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.__jsx-style-dynamic-selector:-ms-input-placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.__jsx-style-dynamic-selector::placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.pro-input-text.__jsx-style-dynamic-selector{width:40vw;height:100%;border-top-right-radius:5px;border-top-left-radius:5px;border:1px solid #e6e8eb;padding:10px;outline:0;font-family:inherit;font-weight:700;}.form-holder.__jsx-style-dynamic-selector{padding-left:10%;padding-top:2px;}.get-it-btn.__jsx-style-dynamic-selector{font-family:Cabin;font-weight:600;font-size:1em;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;height:40px;outline:0;border:2px solid #4a4a4a;cursor:pointer !important;background:#4a4a4a;border-radius:9px;}.more-icon.__jsx-style-dynamic-selector{position:relative;float:right;display:inline-block;cursor:pointer;}.rec-btn.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;margin-top:5px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.rec-btn.__jsx-style-dynamic-selector .rec-holder.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.recommend-text.num.__jsx-style-dynamic-selector{position:relative;top:-2px;left:2px;}.recommend-text.numie.__jsx-style-dynamic-selector{position:relative;top:-4px;left:5px;}@media only screen and (max-width:360px){.rec-btn.__jsx-style-dynamic-selector .rec-holder.__jsx-style-dynamic-selector{position:relative;}}@media only screen and (min-width:360px) and (max-width:470px){.rec-btn.__jsx-style-dynamic-selector .rec-holder.__jsx-style-dynamic-selector{top:10px;position:relative;}.close.__jsx-style-dynamic-selector{font-size:56px;position:relative;margin-top:-500px;left:80%;}}.like-btn.__jsx-style-dynamic-selector{font-size:1.2em;font-family:Cabin;font-weight:600;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;border-top-left-radius:9px;border-bottom-left-radius:9px;outline:0;padding:0;border:0;height:40px;cursor:pointer !important;background:#fff;text-align:center;margin-right:5px;}.dislike-btn.__jsx-style-dynamic-selector{font-size:1.2em;font-family:Cabin;font-weight:600;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;border-top-right-radius:9px;border-bottom-right-radius:9px;height:40px;outline:0;border:0;cursor:pointer !important;color:grey;background:#fff;padding-left:8px;}.overlay.__jsx-style-dynamic-selector{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgba(0,0,0,0.05);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}.overlayShow.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:#fdfdfd;overflow-x:hidden;overflow-y:visible;-webkit-transition:0.5s;transition:0.5s;}.overlayShowie.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}.user-chip.__jsx-style-dynamic-selector{background-image:url(".concat(profileImageUrl, ");background-repeat:no-repeat;background-size:cover;background-position:center;width:50px;height:50px;border-radius:50px;position:relative;top:-60px;left:10px;z-index:1;}.user-rec-img.__jsx-style-dynamic-selector{width:100%;height:200px;}.user-rec-card.__jsx-style-dynamic-selector{position:relative;width:50%;min-height:550px;left:25%;background-color:#fafafa;box-sizing:border-box;border-radius:10px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);margin-bottom:10px;}@media (min-width:768px){.topicview-close-icon.__jsx-style-dynamic-selector{left:80%;}}@media screen and (min-width:320px) and (max-width:509px){.card-list.__jsx-style-dynamic-selector{min-width:0px;width:93vw;min-height:300px;margin-left:0;}}@media (min-width:509px) and (max-width:600px){.card-list.__jsx-style-dynamic-selector{min-width:0px;width:94vw;min-height:300px;margin-left:0;}}@media (min-width:600px) and (max-width:900px){.card-list.__jsx-style-dynamic-selector{min-width:0px;width:94vw;min-height:300px;margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy9vcHRpb25MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTQyQ1csQUFHNEIsQUFJRixBQVFJLEFBS0MsQUFlRyxBQUlWLEFBTUcsQUFTQyxBQU9BLEFBTUQsQUFJRyxBQWFHLEFBS0wsQUFLRSxBQVVKLEFBR0ssQUFZSyxBQUlFLEFBSVIsQUFRSixBQU9XLEFBVVYsQUFlQSxBQWVDLEFBUUMsQUFLQyxBQUtvQyxBQUtyQixBQUloQixBQU1JLEFBTUEsQUFNSSxBQUlkLEFBSVEsQUFLRSxBQU9GLEFBVUUsQUFJRCxBQUlDLEFBVUMsQUFJUixBQVdBLEFBYUssQUFNTCxBQVlNLEFBS0MsQUFhQSxBQVVMLEFBYVMsQUFNSixBQUtBLEFBUUUsQUFXVCxBQVlNLEFBUUQsQUFpQkEsQUFpQkosQUFXQSxBQWFBLEFBY3VDLEFBY3hDLEFBS08sQUFjUCxBQWNLLEFBU0EsQUFTQSxRQTdUbEIsQ0FoTXlCLEFBaVdILEFBNkhwQixFQTlmWSxBQWlHZCxBQStCYyxBQWdKQSxBQVdBLEFBbUJBLEFBNkxDLENBcmNTLEFBc0J4QixBQXFGcUIsQUFlQSxBQXVSWCxBQVdHLEFBYUEsQ0FuUlgsQ0FMRixBQW1Cc0IsQUFrVVAsQUFTQSxBQVNBLENBdGhCUyxBQXlEcUMsQUFzQnpDLEFBaUNBLEFBcVJFLENBaFlLLEFBdUZoQixBQWdJVyxBQVlKLEFBd0RFLEFBNkdBLEFBaUJBLENBeEtwQixBQTREa0IsQ0E3T1IsQUFtSUEsQUFNRSxBQW1CQyxBQWlCYixBQVFhLEFBNkRLLEFBYUosQUE2QkgsQUFLQSxBQVNULEFBeUhVLENBcGRaLEFBZ1BBLENBNEtpQixDQXhVSixBQUlJLENBbUJGLEFBcUZmLEFBdUllLENBbFdTLEFBZ0liLEFBZ0pTLEFBV1IsQUFtQmtCLEFBb0piLEFBYUEsQ0E0QmpCLENBdllpQixBQXdhSSxBQVNBLEFBU0EsQ0FqZHJCLEFBb0lBLENBd0pXLEFBS0EsQUFtQlQsQ0EzS2lCLEFBMFJBLENBdlFOLEFBeUJGLENBbE9VLEFBcUtNLEFBdUlKLENBM0xSLEFBZUEsQ0FoRGYsQUFpQlksQUErR0csQ0F6SkssQUFpQ1YsQUFvS0ssQUE4QmYsQUFtRnNCLENBdldGLEFBb0tELEFBOEZELEFBdUJGLEFBc0ZFLEFBaUJBLENBa0JILENBcFVmLEFBZ0hBLEFBc0lBLEFBS0EsQ0F2V0EsQ0EyUG1CLEFBZ01KLEFBYUEsRUEzV00sQUFxSUQsQ0E3TkMsQUE0R08sQUF3SmhCLENBL0laLEFBMllrQixBQVNBLEFBU0EsRUE3WUgsQUFlSCxDQWhLRSxBQXNORCxBQTBCUyxBQWlRWCxDQXJORyxFQW1DUyxBQXlIZixDQXhaUixBQStKaUIsQ0F5R2pCLEFBNkd1QixBQWlCQSxDQS9VWixBQW1IWCxBQXVFZSxBQTZCYyxBQWdDWixBQStESixBQXNETCxBQWFBLEFBV3NCLENBcmJmLEVBMkhnQixBQXdSdEIsQUF5RGtCLENBN1MzQixBQThEa0IsQ0E1Q2xCLEFBc1RFLEFBU0EsQUFTQSxDQTloQmtCLEFBaUpXLEFBa1R0QixBQWFBLENBdk9ULEFBbUQyQixDQXhMZixDQXhGRyxBQTJFVSxBQXNUdkIsQ0E0Q3FDLEdBMVB2QyxBQWtGYyxBQW1MYSxBQWFLLENBM2FwQixBQTBNUSxDQStGcEIsQ0F2TnVCLEVBbkJULEVBOEpRLENBcE1ULENBbERpQyxDQXBCOUMsQUFtRHlCLEFBT0osQUE0QkksQUE2RkEsQUF1S0QsQ0FsVkwsQUFzQ0csQ0EyT0EsRUE0QkssQ0E2S0gsQUF1QkEsRUExWlAsQUFjSixFQXRDTyxBQWlHQSxBQWdGVCxBQTRDcUIsR0EzSVosR0FtVEEsRUFqTUgsQ0FsUWpCLEFBcUdlLEFBMklNLEFBZ09pQixHQTFhcEIsQUFrWkUsQ0FoV3BCLEFBMkNxQixBQThJSCxBQWtFRCxBQVllLEtBaFNuQixBQWlHaUMsQUEwVGpCLEFBdUJSLEVBcE1OLENBNUorQixFQWtIOUMsQ0FpTXFCLElBN1pyQixBQTBNQSxBQW1HZ0MsQ0FwUmxCLEFBa05kLENBVWlDLEFBNkpmLENBN2FTLEVBa1NmLElBb01rQyxJQWpidkIsQ0FnWkgsQ0FsS0UsQUFzSkosRUFzQkwsV0E5Y1EsQUErY1AsR0EzVE0sQ0FrVEYsQ0F0TEksQ0EzTkYsQUFnRkEsQ0E4SkYsR0FhSixFQXNGZSxBQWlCQyxBQXlEVCxFQW5DckIsS0E1YWtCLEVBb0pBLENBNEpOLEFBcUxTLENBbE1yQixDQTVPQSxBQThFa0IsQ0EySUEsQ0F6SlcsQ0EvQkosQUFnV3pCLENBcFp5QixDQXFFekIsRUF1V29CLENBL0pPLEVBcFJOLEFBbUNBLEFBNkZMLENBNUpHLEVBb0pBLEVBaVBhLENBaFFiLEFBaVJjLENBdElqQyxBQXFOQSxHQWhDQSxJQXhTc0MsQ0FtVDFCLEdBL2NZLEVBcUpBLEdBZkEsQUEwS0ksRUFnS2hCLFVBM0VBLEFBNEVBLEVBM0RFLENBdEVkLEVBL1VvQixFQXFKcEIsR0FmQSxBQStQWSxBQTRFWixJQWpLcUIsQUFzR1QsQ0ExUFMsR0F3S3JCLEVBa0VXLEdBcFlYLENBcVpXLEtBaEJHLElBdEZNLEFBd0dRLFFBakJBLFVBdEY1QixNQTVOcUIsQ0EzREcsQUFPeEIsQUE0QkEsQ0E0VmEsR0FuU2IsS0FrUmtCLEdBa0JBLGFBakJFLEdBa0JELGVBakJBLEVBa0JuQixLQWhRQSxVQStPQSxrQkFoWEEsY0EyREEiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL2NvbXBvbmVudHMvdG9waWN2aWV3L29wdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEFQSV9VUkwgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5pbXBvcnQgQ3VzdG9tVGFiIGZyb20gXCIuL3RhYlwiO1xuaW1wb3J0IHsgUG9wdXAsIFBsYWNlaG9sZGVyLCBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBBZGRJY29uLCBNb3JlLCBUaHVtYl91cCwgVGh1bWJfZG93biwgSW5zZXJ0TGluayB9IGZyb20gXCIuLi9JY29uc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuaW1wb3J0IHtcbiAgX0dFVF9UT1BJQ1MsXG4gIEdFVF9SRUxBVEVEX1RPUElDU19VUkwsXG4gIEdFVF9TUEVDSUZJQ19UT1BJQ19VUkwsXG4gIEFkZFVzZXJSZWFjdGlvblRvT3B0aW9uLFxuICBHZXRVc2VyUmVhY3Rpb25Ub0xpa2VPcHRpb24sXG4gIEdldFVzZXJSZWFjdGlvblRvRGlzTGlrZU9wdGlvbixcbiAgTWFya09wdGlvbkFzU3BhbSxcbiAgVXBkYXRlT3B0aW9uLFxuICBTYXZlVXBkYXRlSGlzdG9yeSxcbiAgR2V0UXVlc3Rpb25VcGRhdGVkQXQsXG4gIEdldFF1ZXN0aW9uTnVtT2ZSZWNzLFxuICBVcGRhdGVDb24sXG4gIFVwZGF0ZVBybyxcbiAgU2F2ZUNvbkhpc3RvcnksXG4gIFNhdmVQcm9IaXN0b3J5LFxuICBBZGRPcHRpb25JbWFnZVxuXG59IGZyb20gXCIuLi8uLi9hcGlSZXF1ZXN0cy9hcGlSZXF1ZXN0c1wiO1xuXG5pbXBvcnQgU2lnbmluIGZyb20gXCIuLi8uLi9wYWdlcy9zaWduaW5cIjtcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4uLy4uL3BhZ2VzL3NpZ251cFwiO1xuaW1wb3J0IFRvcGljVmlld1BvcHVwTW9kYWwgZnJvbSBcIi4uL21vZGFsL3RvcGljdmlld1BvcHVwTW9kYWxcIjtcblxuY29uc3Qgc29ja2V0ID0gaW8oQVBJX1VSTCk7XG5cbmNvbnN0IGltYWdlQXJyID0gW1xuICBcIi9zdGF0aWMvdGhpc2hvdXNlLnBuZ1wiLFxuICBcIi9zdGF0aWMvYXZhdGFyLnBuZ1wiLFxuICBcIi9zdGF0aWMvdGhpc2hvdXNlLnBuZ1wiXG5dO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGluYzogMCwgLy9pbmMgc3RhbmRzIGZvciBpbmNyZWFzZVxuICAgIGRlYzogMCwgLy9kZWMgc3RhbmRzIGZvciBkZWNyZWFzZVxuICAgIGV4cGVyaWVuY2U6IFwiXCIsXG4gICAgc2hvd0NsYXNzOiBmYWxzZSxcbiAgICBjbGlja2VkT3B0aW9uRGV0YWlsczoge30sXG4gICAgdXNlcl9kYXRhOiB7fSxcbiAgICB0eXBlOiBcIlwiLFxuICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcbiAgICBpb1Jlc3BvbnNlTGlrZTogZmFsc2UsXG4gICAgaW9SZXNwb25zZURpc0xpa2U6IGZhbHNlLFxuICAgIFVzZXJMb2dnZWRJbjogdHJ1ZSxcbiAgICBzaG93U2lnbkluT3ZlcmxheTogZmFsc2UsXG4gICAgVXNlckNsaWNrZWRMb2dpbjogZmFsc2UsXG4gICAgVXNlckNsaWNrZWRTaWdudXA6IGZhbHNlLFxuICAgIHJ4bjogbnVsbCxcbiAgICBzaG93VXBkYXRlTW9kYWw6IGZhbHNlLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHVwZGF0ZWRPcHRpb246IFwiXCIsXG4gICAgdXBkYXRlZE9wdGlvbkxpbms6IFwiXCIsXG4gICAgcHJvVGl0bGU6IFwiXCIsXG4gICAgY29uVGl0bGU6IFwiXCIsXG4gICAgcHJvRGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29uRGVzY3JpcHRpb246IFwiXCIsXG4gICAgdXBkYXRlQ29uOiBmYWxzZSxcbiAgICB1cGRhdGVQcm86IGZhbHNlLFxuICAgIHF1ZXN0aW9uOiBcIlwiLFxuICAgIG9wdGlvbjogXCJcIixcbiAgICBvcHRpb25JZDogXCJcIixcbiAgICB1cGRhdGVJbWFnZTogZmFsc2UsXG4gICAgaW1hZ2VMaW5rOiBcIlwiLFxuICAgIG1lZGlhQXJyOiBudWxsLFxuICAgIExpa2VDb2xvciA6IHt9LFxuICAgIERpc0xpa2VDb2xvciA6IHt9LFxuICAgIExpa2VOdW1iZXIgOiB0aGlzLnByb3BzLkxpa2VOdW1iZXIsXG4gICAgRGlzTGlrZU51bWJlciA6IHRoaXMucHJvcHMuRGlzTGlrZU51bWJlcixcbiAgICB1c2VyX2lkIDogdGhpcy5wcm9wcy51c2VyX2lkXG4gIH07XG5cbmFzeW5jIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuIFxuICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJfaWQudGhlbihhc3luYyByZXM9PntcbiAgICBjb25zdCBMaWtlQ29sb3IgPSAgYXdhaXQgR2V0VXNlclJlYWN0aW9uVG9MaWtlT3B0aW9uKHJlcyx0aGlzLnN0YXRlLmRhdGEpO1xuICAgIGNvbnN0IERpc0xpa2VDb2xvciA9IGF3YWl0IEdldFVzZXJSZWFjdGlvblRvRGlzTGlrZU9wdGlvbihyZXMsdGhpcy5zdGF0ZS5kYXRhKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIExpa2VDb2xvciA6IExpa2VDb2xvci5kYXRhLFxuICAgICAgRGlzTGlrZUNvbG9yIDogRGlzTGlrZUNvbG9yLmRhdGFcbiAgICB9KVxuICBcbiAgfSkpO1xuIFxuXG59XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRTb2NrZXRSZXNwb25zZSgpO1xuICAgXG5cbiAgfVxuXG5cbiAgZ2V0U29ja2V0UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgc29ja2V0Lm9uKFwicmVjX2FkZGVkXCIsIGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJsaWtlXCIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW9SZXNwb25zZUxpa2U6IHRydWUsXG4gICAgICAgICAgX2xpa2U6IGRhdGEubGlrZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50eXBlID09PSBcImRpc2xpa2VcIikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpb1Jlc3BvbnNlRGlzTGlrZTogdHJ1ZSxcbiAgICAgICAgICBfZGlzbGlrZTogZGF0YS5kaXNsaWtlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlRGl2Q2xvc2UgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuZGl2KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcbiAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6ICFwcmV2aW91c1N0YXRlLnNob3dTaWduSW5PdmVybGF5XG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIG9wZW5Mb2dpbk92ZXJsYXkgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBVc2VyQ2xpY2tlZFNpZ251cDogZmFsc2UsXG4gICAgICBVc2VyTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBvcGVuU2lnbnVwT3ZlcmxheSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFVzZXJDbGlja2VkU2lnbnVwOiAhdGhpcy5zdGF0ZS5Vc2VyQ2xpY2tlZFNpZ251cCxcbiAgICAgIFVzZXJMb2dnZWRJbjogdHJ1ZSxcbiAgICAgIHNob3dTaWduSW5PdmVybGF5OiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIG9wZW5CdG4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Q2xhc3M6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBjbG9zZUJ0biA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dDbGFzczogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBjbG9zZU1vZGFsID0gZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLnJlY0NhcmQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2xhc3M6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVEaXNsaWtlID0gKCkgPT4ge1xuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBhbGVydChcIk5vdCByZWdpc3RlcmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHR5cGU6IFwiZGlzbGlrZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlbGlrZSA9IChkYXRhKSA9PntcbiAgICAgICBsZXQgY29sb3IgPSB0aGlzLnN0YXRlLkxpa2VDb2xvcjtcbiAgICAgICBsZXQgY29sbyA9IHRoaXMuc3RhdGUuRGlzTGlrZUNvbG9yO1xuICAgICAgIGxldCBMaWtlTnVtYmVyID0gdGhpcy5zdGF0ZS5MaWtlTnVtYmVyO1xuICAgICAgIGxldCBEaXNMaWtlTnVtYmVyID0gdGhpcy5zdGF0ZS5EaXNMaWtlTnVtYmVyO1xuICAgICAgICAgaWYoY29sb3JbZGF0YS5vcHRpb25dPT1cImdyZXlcIiAmJiBjb2xvW2RhdGEub3B0aW9uXSA9PVwiZ3JleVwiKXtcbiAgICAgICAgICBjb2xvcltkYXRhLm9wdGlvbl0gPSBcImJsdWVcIjtcbiAgICAgICAgICBMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSA9IExpa2VOdW1iZXJbZGF0YS5vcHRpb25dICsxO1xuICAgICAgICAgIGNvbG9bZGF0YS5vcHRpb25dID0gXCJncmV5XCI7XG4gICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29sb3JbZGF0YS5vcHRpb25dPT1cImdyZXlcIiAmJiBjb2xvW2RhdGEub3B0aW9uXSA9PVwiYmx1ZVwiKXtcbiAgICAgICAgICBjb2xvcltkYXRhLm9wdGlvbl0gPSBcImJsdWVcIjtcbiAgICAgICAgICBMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSA9IExpa2VOdW1iZXJbZGF0YS5vcHRpb25dICsxO1xuICAgICAgICAgIERpc0xpa2VOdW1iZXJbZGF0YS5vcHRpb25dID0gRGlzTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gLTE7XG4gICAgICAgICAgY29sb1tkYXRhLm9wdGlvbl0gPSBcImdyZXlcIjtcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2V7XG4gICAgICAgICAgTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gPSBMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSAtMTtcbiAgICAgICAgICBjb2xvcltkYXRhLm9wdGlvbl0gPSBcImdyZXlcIjtcbiAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpa2VDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBEaXNMaWtlQ29sb3IgOiBjb2xvLFxuICAgICAgICAgICAgTGlrZU51bWJlciA6IExpa2VOdW1iZXIsXG4gICAgICAgICAgICBEaXNMaWtlTnVtYmVyIDogRGlzTGlrZU51bWJlclxuICAgICAgICAgIH0pO1xuICAgICAgY29uc3QgX3VzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICAgIGNvbnN0IHJ4biA9IHtcbiAgICAgICAgdXNlcklkOiBfdXNlci5faWQsXG4gICAgICAgIG9wdGlvbiA6IGRhdGEub3B0aW9uLFxuICAgICAgICB0eXBlOiB0cnVlXG4gICAgICB9O1xuICAgICAgQWRkVXNlclJlYWN0aW9uVG9PcHRpb24ocnhuKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgXG4gIH1cblxuXG4vLyAgZ2V0TGlrZUJ1dHRvbkNvbG9yPSBvcHRpb24gPT4gIHtcbi8vICAgLy8gY29uc3QgX3VzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbi8vICAgLy8gcmV0dXJuICBHZXRVc2VyUmVhY3Rpb25Ub0xpa2VPcHRpb24oXCI1ZGFkYTc5MDhhNTM5MDM2NTQxMWExMWZcIixvcHRpb24pXG4vLyAgIC8vICAgLnRoZW4ocmVzID0+IHtcbi8vICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuLy8gICAvLyAgICByZXR1cm4gXCJncmVlblwiO1xuLy8gICAvLyAgIH1cbiAgICAgICAgXG4vLyAgIC8vICAgKVxuLy8gICAvLyAgIC5jYXRjaChlcnIgPT57XG4vLyAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAvLyAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpO1xuLy8gICAvLyAgIH0pO1xuLy8gICAgIHJldHVybiBcInllbGxvd1wiO1xuLy8gICB9XG5cbiAgaGFuZGxlRGlzbGlrZSA9IChkYXRhKSA9PntcbiAgICBsZXQgY29sb3IgPSB0aGlzLnN0YXRlLkRpc0xpa2VDb2xvcjtcbiAgICBsZXQgY29sbyA9IHRoaXMuc3RhdGUuTGlrZUNvbG9yXG4gICAgbGV0IExpa2VOdW1iZXIgPSB0aGlzLnN0YXRlLkxpa2VOdW1iZXI7XG4gICAgbGV0IERpc0xpa2VOdW1iZXIgPSB0aGlzLnN0YXRlLkRpc0xpa2VOdW1iZXI7XG4gICAgICAgICAgaWYoY29sb3JbZGF0YS5vcHRpb25dPT1cImdyZXlcIiAmJiBjb2xvW2RhdGEub3B0aW9uXSA9PVwiZ3JleVwiKXtcbiAgICAgICAgICAgY29sb3JbZGF0YS5vcHRpb25dID0gXCJibHVlXCI7XG4gICAgICAgICAgIGNvbG9bZGF0YS5vcHRpb25dID0gXCJncmV5XCJcbiAgICAgICAgICAgRGlzTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gPSBEaXNMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSArMTtcbiAgICAgICAgICB9XG4gICAgICAgICBlbHNlIGlmKGNvbG9yW2RhdGEub3B0aW9uXT09XCJncmV5XCIgJiYgY29sb1tkYXRhLm9wdGlvbl0gPT1cImJsdWVcIil7XG4gICAgICAgICAgICBjb2xvcltkYXRhLm9wdGlvbl0gPSBcImJsdWVcIjtcbiAgICAgICAgICAgIGNvbG9bZGF0YS5vcHRpb25dID0gXCJncmV5XCJcbiAgICAgICAgICAgIERpc0xpa2VOdW1iZXJbZGF0YS5vcHRpb25dID0gRGlzTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gKzE7XG4gICAgICAgICAgICBMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSA9IExpa2VOdW1iZXJbZGF0YS5vcHRpb25dIC0xO1xuICAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgY29sb3JbZGF0YS5vcHRpb25dID0gXCJncmV5XCI7XG4gICAgICAgICAgIERpc0xpa2VOdW1iZXJbZGF0YS5vcHRpb25dID0gRGlzTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICBEaXNMaWtlQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgIExpa2VDb2xvciA6IGNvbG8sXG4gICAgICAgICAgICAgRGlzTGlrZU51bWJlciA6IERpc0xpa2VOdW1iZXIsXG4gICAgICAgICAgICAgTGlrZU51bWJlcjpMaWtlTnVtYmVyXG4gICAgICAgICAgIH0pO1xuICAgICAgY29uc3QgX3VzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICAgIGNvbnN0IHJ4biA9IHtcbiAgICAgICAgdXNlcklkOiBfdXNlci5faWQsXG4gICAgICAgIG9wdGlvbiA6IGRhdGEub3B0aW9uLFxuICAgICAgICB0eXBlOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIEFkZFVzZXJSZWFjdGlvblRvT3B0aW9uKHJ4bilcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChlcnIgPT57XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgXG4gIH1cblxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlLCBuYW1lIH0gfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNwYW0gPSBvcHRpb24gPT4ge1xuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBhbGVydChcIlNpZ24gaW4gdG8gY2Fycnkgb3V0IHRoaXMgYWN0aW9uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBfZGF0YSA9IHtcbiAgICAgIG9wdGlvbixcbiAgICAgIGlzU3BhbTogdHJ1ZSxcbiAgICAgIHVzZXJJZFdob01hcmtlZEFzU3BhbTogdXNlci5faWRcbiAgICB9O1xuICAgIC8vTWFyayBvcHRpb24gYXMgc3BhbVxuICAgIE1hcmtPcHRpb25Bc1NwYW0oX2RhdGEpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiT3B0aW9uIE1hcmtlZCBhcyBTcGFtXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsOiAhdGhpcy5zdGF0ZS5tb2RhbFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTaG93ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uT3B0aW9uVXBkYXRlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlLCBuYW1lIH0gfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNhdmVVcGRhdGVkT3B0aW9uID0gKCkgPT4ge1xuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgY29uc3QgeyB1cGRhdGVkT3B0aW9uLCB1cGRhdGVkT3B0aW9uTGluaywgb3B0aW9uSWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGFsZXJ0KFwiTG9naW4gdG8gY2Fycnkgb3V0IHRoaXMgYWN0aW9uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbiA9PT0gXCJcIiB8fCB1cGRhdGVkT3B0aW9uTGluayA9PT0gXCJcIiB8fCAhb3B0aW9uSWQpIHtcbiAgICAgIGFsZXJ0KFwibm8gd2F5XCIpO1xuICAgICAgY29uc29sZS5sb2coXCJubyB3YXlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBfc2F2ZVVwZGF0ZUhpc3RvcnkgPSB7XG4gICAgICBvcHRpb246IHVwZGF0ZWRPcHRpb24sXG4gICAgICBvcHRpb25JZDogb3B0aW9uSWQsXG4gICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgIHVzZXJJZDogdXNlci5faWRcbiAgICB9O1xuXG4gICAgVXBkYXRlT3B0aW9uKG9wdGlvbklkLCB1c2VyLl9pZCwgdXBkYXRlZE9wdGlvbiwgdXBkYXRlZE9wdGlvbkxpbmspXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBhbGVydChcIk9wdGlvbiBVcGRhdGVkXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gICAgICAgIFNhdmVVcGRhdGVIaXN0b3J5KF9zYXZlVXBkYXRlSGlzdG9yeSlcbiAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcInNhdmVkXCIpKVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVVcGRhdGVQcm8gPSAodmlzaWJsZSwgY2FwdGlvbiwgcHJvLCBpZCwgcXVlc3Rpb24sIG9wdGlvbiwgb3B0aW9uSWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwZGF0ZVBybzogdmlzaWJsZSxcbiAgICAgIHByb1RpdGxlOiBjYXB0aW9uLFxuICAgICAgcHJvRGVzY3JpcHRpb246IHBybyxcbiAgICAgIHByb0lkOiBpZCxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgb3B0aW9uLFxuICAgICAgb3B0aW9uSWRcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVVcGRhdGVDb24gPSAodmlzaWJsZSwgY2FwdGlvbiwgY29uLCBpZCwgcXVlc3Rpb24sIG9wdGlvbiwgb3B0aW9uSWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwZGF0ZUNvbjogdmlzaWJsZSxcbiAgICAgIGNvblRpdGxlOiBjYXB0aW9uLFxuICAgICAgY29uRGVzY3JpcHRpb246IGNvbixcbiAgICAgIGNvbklkOiBpZCxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgb3B0aW9uLFxuICAgICAgb3B0aW9uSWRcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVQcm9VcGRhdGUgPSAoKSA9PiB7XG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICBjb25zdCB7XG4gICAgICBwcm9UaXRsZSxcbiAgICAgIHByb0Rlc2NyaXB0aW9uLFxuICAgICAgcHJvSWQsXG4gICAgICBvcHRpb24sXG4gICAgICBvcHRpb25JZCxcbiAgICAgIHF1ZXN0aW9uXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGFsZXJ0KFwiTG9naW4gdG8gY2Fycnkgb3V0IHRoaXMgYWN0aW9uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9UaXRsZSA9PT0gXCJcIiB8fCBwcm9EZXNjcmlwdGlvbiA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJJdCBjYW4ndCBiZSBlbXB0eVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIG9wdGlvbixcbiAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgb3B0aW9uSWQsXG4gICAgICB0aXRsZTogcHJvVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvRGVzY3JpcHRpb24sXG4gICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgcXVlc3Rpb24sXG4gICAgICBwcm9JZFxuICAgIH07XG5cbiAgICBVcGRhdGVQcm8oXG4gICAgICBwcm9JZCxcbiAgICAgIHVzZXIuX2lkLFxuICAgICAgcHJvVGl0bGUucmVwbGFjZShcIiVcIiwgXCIgcGVyY2VudFwiKSxcbiAgICAgIHByb0Rlc2NyaXB0aW9uLnJlcGxhY2UoXCIlXCIsIFwiIHBlcmNlbnRcIiksXG4gICAgICBvcHRpb24sXG4gICAgICBvcHRpb25JZCxcbiAgICAgIHF1ZXN0aW9uXG4gICAgKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgYWxlcnQoXCJ1cGRhdGVkXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBkYXRlUHJvOiBmYWxzZSB9KTtcbiAgICAgICAgU2F2ZVByb0hpc3RvcnkoZGF0YSlcbiAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcInNhdmVkXCIpKVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDb25VcGRhdGUgPSAoKSA9PiB7XG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICBjb25zdCB7XG4gICAgICBjb25UaXRsZSxcbiAgICAgIG9wdGlvbixcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgb3B0aW9uSWQsXG4gICAgICBjb25EZXNjcmlwdGlvbixcbiAgICAgIGNvbklkXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGFsZXJ0KFwiTG9naW4gdG8gY2Fycnkgb3V0IHRoaXMgYWN0aW9uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25UaXRsZSA9PT0gXCJcIiB8fCBjb25EZXNjcmlwdGlvbiA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJJdCBjYW4ndCBiZSBlbXB0eVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIG9wdGlvbixcbiAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgb3B0aW9uSWQsXG4gICAgICB0aXRsZTogY29uVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogY29uRGVzY3JpcHRpb24sXG4gICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgcXVlc3Rpb24sXG4gICAgICBjb25JZFxuICAgIH07XG5cbiAgICBVcGRhdGVDb24oXG4gICAgICBjb25JZCxcbiAgICAgIHVzZXIuX2lkLFxuICAgICAgY29uVGl0bGUucmVwbGFjZShcIiVcIiwgXCIgcGVyY2VudFwiKSxcbiAgICAgIGNvbkRlc2NyaXB0aW9uLnJlcGxhY2UoXCIlXCIsIFwiIHBlcmNlbnRcIiksXG4gICAgICBvcHRpb24sXG4gICAgICBvcHRpb25JZCxcbiAgICAgIHF1ZXN0aW9uXG4gICAgKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgYWxlcnQoXCJ1cGRhdGVkXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBkYXRlQ29uOiBmYWxzZSB9KTtcbiAgICAgICAgU2F2ZUNvbkhpc3RvcnkoZGF0YSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8gc2hvd1VwZGF0ZUltYWdlTW9kYWwgPSAoKSA9PiB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICB1cGRhdGVJbWFnZTogdHJ1ZVxuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIGhhbmRsZVVwZGF0ZUltYWdlID0gKCkgPT4ge1xuICAgIC8vUGFyYW1ldGVycyBoZXJlXG4gICAgY29uc3QgeyBuZXdJbWFnZSwgb3B0aW9uSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgQWRkT3B0aW9uSW1hZ2Uob3B0aW9uSWQsIG5ld0ltYWdlKVxuICAgICAgLnRoZW4oYXhpb3NSZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wdGlvbkltYWdlQWRkZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy9BZGQgaW1hZ2UgdXJsIHRvIGltYWdlIGFycmF5XG5cbiAgYWRkSW1hZ2VVcmxUb0ltYWdlQXJyYXkgPSAoeyB0YXJnZXQ6IHsgdmFsdWUsIG5hbWUgfSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdJbWFnZTogdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTaG93TW9kYWwgPSAodmlzaWJsZSwgbWVkaWFBcnIsIG9wdGlvbklkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGRhdGVJbWFnZTogdmlzaWJsZSxcbiAgICAgIG1lZGlhQXJyLFxuICAgICAgb3B0aW9uSWRcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd0NsYXNzLFxuICAgICAgY2xpY2tlZE9wdGlvbkRldGFpbHMsXG4gICAgICBpb1Jlc3BvbnNlTGlrZSxcbiAgICAgIGlvUmVzcG9uc2VEaXNMaWtlLFxuICAgICAgVXNlckxvZ2dlZEluLFxuICAgICAgc2hvd1NpZ25Jbk92ZXJsYXksXG4gICAgICBfZGlzbGlrZWQsXG4gICAgICBfbGlrZWQsXG4gICAgICBVc2VyQ2xpY2tlZFNpZ251cCxcbiAgICAgIHJ4bixcbiAgICAgIHNob3csXG4gICAgICBvcHRpb25JdGVtcyxcbiAgICAgIHByb0Rlc2NyaXB0aW9uLFxuICAgICAgcHJvVGl0bGUsXG4gICAgICBjb25EZXNjcmlwdGlvbixcbiAgICAgIGNvblRpdGxlLFxuICAgICAgdXBkYXRlQ29uLFxuICAgICAgdXBkYXRlUHJvLFxuICAgICAgbGluayxcbiAgICAgIG1lZGlhQXJyLFxuICAgICAgbmV3SW1hZ2UsXG4gICAgICBvcHRpb25JbWFnZUFkZGVkXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBwcm9maWxlSW1hZ2VVcmwgPSB0aGlzLnByb3BzLnVzZXIuaW1hZ2VcbiAgICAgID8gdGhpcy5wcm9wcy51c2VyLmltYWdlXG4gICAgICA6IFwiL3N0YXRpYy93b3IuanBnXCI7XG5cbiAgICBjb25zdCBMaWtlY29sb3IgPSByeG4gPyBcImJsdWVcIiA6IFwiZ3JleVwiO1xuICAgIGNvbnN0IGRpc0xpa2VDb2xvciA9IF9kaXNsaWtlZCA/IFwiYmx1ZVwiIDogXCJncmV5XCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICBsZXQgbGlrZSA9IGlvUmVzcG9uc2VMaWtlID8gdGhpcy5zdGF0ZS5fbGlrZSA6IGl0ZW0ubGlrZTtcbiAgICAgICAgICBsZXQgZGlzbGlrZSA9IGlvUmVzcG9uc2VEaXNMaWtlID8gdGhpcy5zdGF0ZS5fZGlzbGlrZSA6IGl0ZW0uZGlzbGlrZTtcblxuICAgICAgICAgIGlmIChpdGVtLm1lZGlhVXJsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1saXN0XCIga2V5PXtpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJvcHRpb24tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJzY29yZS1jYXJkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NvcmVcIj57dGhpcy5zdGF0ZS5MaWtlTnVtYmVyW2l0ZW0ub3B0aW9uXS10aGlzLnN0YXRlLkRpc0xpa2VOdW1iZXJbaXRlbS5vcHRpb25dfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9vcHRpb24vJHtpdGVtLm9wdGlvbn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tbmFtZS1xdWVzdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ub3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vcmUtaWNvbi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZSBjb2xvcj1cInRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaWduSW5PdmVybGF5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3VuaXF1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogaXRlbS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkltYWdlOiBpdGVtLm9wdGlvbkltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy9PcHRpb25JRCBhbmQgUXVlc3Rpb25JZCBtYXkgYmUgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZE9wdGlvbkRldGFpbHM6IF91bmlxdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xhc3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFByb3MgYW5kIENvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VwZGF0ZWhpc3RvcnkvJHtpdGVtLm9wdGlvbn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VlIFVwZGF0ZSBIaXN0b3J5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRPcHRpb246IGl0ZW0ub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZE9wdGlvbkxpbms6IGl0ZW0ubGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBpdGVtLl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlVwZGF0ZSBTcGVjczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI0U5MUU2M1wiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3BhbShpdGVtLm9wdGlvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmsgT3B0aW9uIGFzIFNwYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSByaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXR0bGUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubWVkaWFVcmwuc2xpY2UoMCwgMykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvb1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW19IGNsYXNzTmFtZT1cIm9wdGlvbi1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdvbyBhZGQtbWVkaWFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2hvd01vZGFsKHRydWUsIGl0ZW0ubWVkaWFVcmwsIGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIGNvbG9yPVwiIzU4NjQ3YlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFkZCBJbWFnZSBvciBWaWRlbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeFwiIC8+XG4gICAgICAgICAgICAgICAgPEN1c3RvbVRhYlxuICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZXM9e2l0ZW0uZXhwZXJpZW5jZXN9XG4gICAgICAgICAgICAgICAgICB1c2VyQXZhdGFyPXtpdGVtLnVzZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgIHByb3M9e2l0ZW0ucHJvc31cbiAgICAgICAgICAgICAgICAgIGNvbnM9e2l0ZW0uY29uc31cbiAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbj17aXRlbS5vcHRpb259XG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbj17aXRlbS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgIFVwZGF0ZUNvbj17dGhpcy5oYW5kbGVVcGRhdGVDb259XG4gICAgICAgICAgICAgICAgICBVcGRhdGVQcm89e3RoaXMuaGFuZGxlVXBkYXRlUHJvfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYy1idG5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2V0LWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRodW1iLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnNlcnRMaW5rIGNvbG9yPXtcIiNmZmZcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGh0dHA6Ly8ke2l0ZW0ubGlua31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jb250ZW50IGdldC1pdFwiIHRhcmdldD17XCJfYmxhbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlICYmIGAgJCAke2l0ZW0ucHJpY2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpdGVtLnByaWNlICYmIFwiIEdFVCBJVCBIRVJFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wicmVjLWhvbGRlclwifT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpa2UtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF91bmlxdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBpdGVtLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JbWFnZTogaXRlbS5tZWRpYVVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IGl0ZW0uX2lkXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vT3B0aW9uSUQgYW5kIFF1ZXN0aW9uSWQgbWF5IGJlIGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNsaWNrZWRPcHRpb25EZXRhaWxzOiBfdW5pcXVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwibGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNob3dDbGFzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBpbmM6IHByZXZpb3VzU3RhdGUuaW5jICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaGFuZGxlbGlrZShfdW5pcXVlKX07XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRodW1iLWljb24gbGlrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJfdXAgY29sb3I9e3RoaXMuc3RhdGUuTGlrZUNvbG9yW2l0ZW0ub3B0aW9uXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYnRuLWNvbnRlbnQgYnRuLWNvbnRlbnQtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYnRuLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlY29tbWVuZC10ZXh0IG51bVwiPnt0aGlzLnN0YXRlLkxpa2VOdW1iZXJbaXRlbS5vcHRpb25dfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXNsaWtlLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaWduSW5PdmVybGF5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3VuaXF1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGl0ZW0ub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBpdGVtLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkltYWdlOiBpdGVtLm1lZGlhVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBpdGVtLl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vL09wdGlvbklEIGFuZCBRdWVzdGlvbklkIG1heSBiZSBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2xpY2tlZE9wdGlvbkRldGFpbHM6IF91bmlxdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0eXBlOiBcImRpc2xpa2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNob3dDbGFzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGRlYzogcHJldmlvdXNTdGF0ZS5kZWMgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmhhbmRsZURpc2xpa2UoX3VuaXF1ZSl9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGh1bWItaWNvbiBkaXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYl9kb3duIGNvbG9yPXt0aGlzLnN0YXRlLkRpc0xpa2VDb2xvcltpdGVtLm9wdGlvbl19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlzbGlrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYnRuLWNvbnRlbnQgYnRuLWNvbnRlbnQtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYnRuLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVjb21tZW5kLXRleHQgbnVtXCI+e3RoaXMuc3RhdGUuRGlzTGlrZU51bWJlcltpdGVtLm9wdGlvbl19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWxpc3RcIiBrZXk9e2l0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWxpc3QtdG9wLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJvcHRpb24tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJzY29yZS1jYXJkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiM3B4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjb3JlXCI+e2l0ZW0ucmF0aW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgYXM9e2Avb3B0aW9uLyR7aXRlbS5vcHRpb259YH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9vcHRpb24vJHtpdGVtLm9wdGlvbn1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tbmFtZS1xdWVzdGlvblwiPntpdGVtLm9wdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vcmUtaWNvbi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vcmUgY29sb3I9XCJ0cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgb249XCJjbGlja1wiXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIUpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3VuaXF1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGl0ZW0ub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBpdGVtLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkltYWdlOiBpdGVtLm9wdGlvbkltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vT3B0aW9uSUQgYW5kIFF1ZXN0aW9uSWQgbWF5IGJlIGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRPcHRpb25EZXRhaWxzOiBfdW5pcXVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGFzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFByb3MgYW5kIENvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9e2AvdXBkYXRlaGlzdG9yeS8ke2l0ZW0ub3B0aW9ufWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VlIFVwZGF0ZSBIaXN0b3J5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRPcHRpb246IGl0ZW0ub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRPcHRpb25MaW5rOiBpdGVtLmxpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IGl0ZW0uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VXBkYXRlIFNwZWNzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFOTFFNjNcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTcGFtKGl0ZW0ub3B0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrIE9wdGlvbiBhcyBTcGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaGlkZU9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGxlLWNhcmRcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5tZWRpYVVybC5zbGljZSgwLCAyKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b29cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbX0gY2xhc3NOYW1lPVwib3B0aW9uLWltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhcIiAvPlxuICAgICAgICAgICAgICA8Q3VzdG9tVGFiXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZXM9e2l0ZW0uZXhwZXJpZW5jZXN9XG4gICAgICAgICAgICAgICAgdXNlckF2YXRhcj17aXRlbS51c2VySW1hZ2V9XG4gICAgICAgICAgICAgICAgcHJvcz17aXRlbS5wcm9zfVxuICAgICAgICAgICAgICAgIGNvbnM9e2l0ZW0uY29uc31cbiAgICAgICAgICAgICAgICBpZD17aXRlbS5faWR9XG4gICAgICAgICAgICAgICAgb3B0aW9uPXtpdGVtLm9wdGlvbn1cbiAgICAgICAgICAgICAgICBxdWVzdGlvbj17aXRlbS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICBVcGRhdGVDb249e3RoaXMuaGFuZGxlVXBkYXRlQ29ufVxuICAgICAgICAgICAgICAgIFVwZGF0ZVBybz17dGhpcy5oYW5kbGVVcGRhdGVQcm99XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWMtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ2V0LWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEluc2VydExpbmsgY29sb3I9e1wiI2ZmZlwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BodHRwOi8vJHtpdGVtLmxpbmt9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWNvbnRlbnQgZ2V0LWl0XCIgdGFyZ2V0PXtcIl9ibGFua1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlICYmIGAgJCAke2l0ZW0ucHJpY2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5wcmljZSAmJiBcIiBHRVQgSVQgSEVSRVwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wicmVjLWhvbGRlclwifT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlrZS1idG5cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaWduSW5PdmVybGF5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IF91bmlxdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGl0ZW0ub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGl0ZW0ucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JbWFnZTogaXRlbS5tZWRpYVVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBpdGVtLl9pZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy9PcHRpb25JRCBhbmQgUXVlc3Rpb25JZCBtYXkgYmUgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNsaWNrZWRPcHRpb25EZXRhaWxzOiBfdW5pcXVlLFxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0eXBlOiBcImxpa2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0NsYXNzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBpbmM6IHByZXZpb3VzU3RhdGUuaW5jICsgMVxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5oYW5kbGVsaWtlKF91bmlxdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGh1bWItaWNvbiBsaWtcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1iX3VwIGNvbG9yPXt0aGlzLnN0YXRlLkxpa2VDb2xvcltpdGVtLm9wdGlvbl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZSA/IFwiYnRuLWNvbnRlbnQgYnRuLWNvbnRlbnQtYWN0aXZlXCIgOiBcImJ0bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlY29tbWVuZC10ZXh0IG51bVwiPnt0aGlzLnN0YXRlLkxpa2VOdW1iZXJbaXRlbS5vcHRpb25dfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlzbGlrZS1idG5cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaWduSW5PdmVybGF5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdW5pcXVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGl0ZW0ub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogaXRlbS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSW1hZ2U6IGl0ZW0ubWVkaWFVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBpdGVtLl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLy9PcHRpb25JRCBhbmQgUXVlc3Rpb25JZCBtYXkgYmUgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjbGlja2VkT3B0aW9uRGV0YWlsczogX3VuaXF1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0eXBlOiBcImRpc2xpa2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzaG93Q2xhc3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgZGVjOiBwcmV2aW91c1N0YXRlLmRlYyArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaGFuZGxlRGlzbGlrZShfdW5pcXVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRodW1iLWljb24gZGlzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYl9kb3duIGNvbG9yPXt0aGlzLnN0YXRlLkRpc0xpa2VDb2xvcltpdGVtLm9wdGlvbl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Rpc2xpa2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJidG4tY29udGVudCBidG4tY29udGVudC1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYnRuLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlY29tbWVuZC10ZXh0IG51bVwiPnt0aGlzLnN0YXRlLkRpc0xpa2VOdW1iZXJbaXRlbS5vcHRpb25dfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHsvKiogRm9yIFNpZ25pbiBpcyBoZXJlICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIHNob3dTaWduSW5PdmVybGF5ID8gXCJvdmVybGF5U2hvdyBzaG93U2lnbmluLWNvbnRhaW5lclwiIDogXCJvdmVybGF5XCJcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZURpdkNsb3NlKGUpfVxuICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMuZGl2ID0gZWwpfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgPGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgVXNlckxvZ2dlZEluOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICA8L2VtPlxuICAgICAgICAgIH1cblxuICAgICAgICAgIHshVXNlckxvZ2dlZEluICYmIDxTaWduaW4gb3BlblNpZ251cD17dGhpcy5vcGVuU2lnbnVwT3ZlcmxheX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogRW5kIG9mIFNpZ25pbiAqL31cblxuICAgICAgICB7LyoqIEZvciBTaWdudXAgaXMgaGVyZSAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBVc2VyQ2xpY2tlZFNpZ251cCA/IFwib3ZlcmxheVNob3cgc2hvd1NpZ25pbi1jb250YWluZXJcIiA6IFwib3ZlcmxheVwiXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVEaXZDbG9zZShlKX1cbiAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLmRpdiA9IGVsKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxlbVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIFVzZXJDbGlja2VkU2lnbnVwOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICA8L2VtPlxuICAgICAgICAgIH1cblxuICAgICAgICAgIHtVc2VyQ2xpY2tlZFNpZ251cCAmJiA8U2lnbnVwIG9wZW5Mb2dpbj17dGhpcy5vcGVuTG9naW5PdmVybGF5fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBFbmQgb2YgU2lnbnVwICovfVxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuY2xvc2VNb2RhbChlKX1cbiAgICAgICAgICBjbGFzc05hbWU9e3Nob3dDbGFzcyA/IFwib3ZlcmxheVNob3dpZVwiIDogXCJvdmVybGF5XCJ9XG4gICAgICAgICAgcmVmPXtlbCA9PiAodGhpcy5yZWNDYXJkID0gZWwpfVxuICAgICAgICA+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWRkLXJlYy1wb3B1cC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8VG9waWNWaWV3UG9wdXBNb2RhbFxuICAgICAgICAgICAgICBwcm9maWxlSW1hZ2U9e3Byb2ZpbGVJbWFnZVVybH1cbiAgICAgICAgICAgICAgb3B0aW9uPXtjbGlja2VkT3B0aW9uRGV0YWlscy5vcHRpb259XG4gICAgICAgICAgICAgIGNsb3NlQnRuPXt0aGlzLmNsb3NlQnRufVxuICAgICAgICAgICAgICBxdWVzdGlvbj17Y2xpY2tlZE9wdGlvbkRldGFpbHMucXVlc3Rpb259XG4gICAgICAgICAgICAgIG9wdGlvbkltYWdlPXtjbGlja2VkT3B0aW9uRGV0YWlscy5vcHRpb25JbWFnZX1cbiAgICAgICAgICAgICAgb3B0aW9uSWQ9e2NsaWNrZWRPcHRpb25EZXRhaWxzLm9wdGlvbklkfVxuICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnR5cGV9XG4gICAgICAgICAgICAgIHNvY2tldElkPXtzb2NrZXQuaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRvcDogXCI0JVwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e1widG9waWN2aWV3LWNsb3NlLWljb25cIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xvc2VCdG59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8PlxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjcwcHhcIiB9fVxuICAgICAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+VXBkYXRlIE9wdGlvbjwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBkYXRlLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uT3B0aW9uVXBkYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXBkYXRlZE9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZWRPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4ICFpbXBvcnRhbnRcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBkYXRlLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZWRPcHRpb25MaW5rfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXBkYXRlZE9wdGlvbkxpbmtcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk9wdGlvblVwZGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInJnYig5MSwgNTYsIDE0MSlcIiwgYm9yZGVyOiAwIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTYXZlVXBkYXRlZE9wdGlvbigpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG5cbiAgICAgICAgey8qIFVwZGF0ZSBQcm8gaXMgaGVyZSovfVxuXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNzBweFwiIH19XG4gICAgICAgICAgICBzaG93PXt1cGRhdGVQcm99XG4gICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuaGFuZGxlVXBkYXRlUHJvKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+VXBkYXRlIFBybzwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBkYXRlLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25PcHRpb25VcGRhdGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9UaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9UaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHggIWltcG9ydGFudFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb0Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLm9uT3B0aW9uVXBkYXRlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVXBkYXRlUHJvKGZhbHNlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInJnYig5MSwgNTYsIDE0MSlcIiwgYm9yZGVyOiAwIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQcm9VcGRhdGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cblxuICAgICAgICB7LyogVXBkYXRlIENvbiBpcyBoZXJlKi99XG4gICAgICAgIDw+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNzBweFwiIH19XG4gICAgICAgICAgICBzaG93PXt1cGRhdGVDb259XG4gICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuaGFuZGxlVXBkYXRlQ29uKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+VXBkYXRlIENvbjwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBkYXRlLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25PcHRpb25VcGRhdGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25UaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25UaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHggIWltcG9ydGFudFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLm9uT3B0aW9uVXBkYXRlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVXBkYXRlQ29uKGZhbHNlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInJnYig5MSwgNTYsIDE0MSlcIiwgYm9yZGVyOiAwIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDb25VcGRhdGUoKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuXG4gICAgICAgIHsvKiogVXBkYXRlIEltYWdlICovfVxuXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNzBweFwiIH19XG4gICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnVwZGF0ZUltYWdlfVxuICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB0aGlzLmhhbmRsZVNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPkFkZCBJbWFnZTwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vbk9wdGlvblVwZGF0ZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17ZSA9PiB0aGlzLmFkZEltYWdlVXJsVG9JbWFnZUFycmF5KGUpfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbkJsdXI9e31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlTGlua1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmltYWdlTGlua31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHggIWltcG9ydGFudFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZWRpYUFyciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZWRpYUFyci5zbGljZSgwLCA0KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTGluazogaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtfSBjbGFzc05hbWU9XCJpbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7bmV3SW1hZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtuZXdJbWFnZX0gY2xhc3NOYW1lPVwiaW1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlciBzdHlsZT17eyBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXIuSW1hZ2Ugc3F1YXJlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAvLyB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInJnYig5MSwgNTYsIDE0MSlcIiwgYm9yZGVyOiAwIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVJbWFnZSgpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtvcHRpb25JbWFnZUFkZGVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29wdGlvbkltYWdlQWRkZWQgPyBcIlNhdmVkXCIgOiBcIlNhdmUgQ2hhbmdlc1wifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIGRpdiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcmQtbGlzdCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlOGViO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDg1MHB4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maXgge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9waWN2aWV3LWNsb3NlLWljb24ge1xuICAgICAgICAgICAgICBsZWZ0OiA5MSU7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlY2YwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXBkYXRlLW9wdGlvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51cGRhdGUtb3B0aW9uLWZvcm0ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZC1yZWMtcG9wdXAtc2VjdGlvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXBkYXRlLW9wdGlvbi1mb3JtIGRpdiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjb3JlLWNhcmQge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3MzczNzMsICMxNzE3MTcpO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBza2V3WCgtMjJkZWcpO1xuICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaG93U2lnbmluLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01NTBweDtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDkxLCA1NiwgMTQxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZTZlY2YwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZS1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcHRpb24tbmFtZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3B0aW9uLW5hbWUtcXVlc3Rpb246aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDk2LCA1NiwgMTQxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9wdGlvbi1uYW1lLXF1ZXN0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogN3B4O1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogQ2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3B0aW9uLWltYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGl0dGxlLWNhcmQge1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpdHRsZS1jYXJkIC50d28ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE5cHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGl0dGxlLWNhcmQgLnR3b28ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE5cHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkLW1lZGlhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTg2NDdiO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oaWRlb25Nb2JsaWUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgLmhpZGVvbk1vYmxpZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGl0dGxlLWNhcmQgLnR3b286aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZhZmFmYSwgI2VlZSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vbmUge1xuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYzNjM2MzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubXktZXhwZXJpZW5jZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aHVtYi1pY29uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgLy8gcmlnaHQ6IDFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bi1jb250ZW50IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IC0wNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWNvbnRlbnQuZ2V0LWl0IHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpcyB7XG4gICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IC0xMTBweDtcbiAgICAgICAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYW5jZWwge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdWJtaXQge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdDogLTQ3cHg7XG4gICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3JtLXJlYy1ob2xkZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dGFyZWEtMSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHRhcmVhLTIge1xuICAgICAgICAgICAgICB3aWR0aDogNDB2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU4ZWI7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm8taW5wdXQtdGV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZThlYjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3JtLWhvbGRlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ2V0LWl0LWJ0biB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNGE0YTRhO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9yZS1pY29uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAgICAgICAvLyBsZWZ0OiA5Mi41JTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWMtYnRuIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLnJlYy1idG4gLmdldC1pdC1idG4ge1xuICAgICAgICAgICAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLnJlYy1idG4gLnJlYy1ob2xkZXIge1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWNvbW1lbmQtdGV4dC5udW0ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlY29tbWVuZC10ZXh0Lm51bWllIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgICAucmVjLWJ0biAucmVjLWhvbGRlciB7XG4gICAgICAgICAgICAgICAgLy8gdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAvLyBsZWZ0OiAyMi41JTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIC5tb3JlLWljb24ge1xuICAgICAgICAgICAgICAvLyAgIGxlZnQ6IDgwJTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgICAgICAgICAgICAgLnJlYy1idG4gLnJlYy1ob2xkZXIge1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gLnJlY29tbWVuZC10ZXh0IHtcbiAgICAgICAgICAgICAgLy8gICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgLy8gLm1vcmUtaWNvbiB7XG4gICAgICAgICAgICAgIC8vICAgbGVmdDogODUlO1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA4MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpa2UtYnRuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOXB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXNsaWtlLWJ0biB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcblxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgei1pbmRleDogNjAwMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3ZlcmxheVNob3cge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDUwMDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3ZlcmxheVNob3dpZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgei1pbmRleDogNTAwMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLWNoaXAge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9maWxlSW1hZ2VVcmx9KTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogLTYwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLXJlYy1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXItcmVjLWNhcmQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuXG4gICAgICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAudG9waWN2aWV3LWNsb3NlLWljb24ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgIC8vICAgLmNhcmQtbGlzdCB7XG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgICAgICAvLyAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIC8vICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDUwOXB4KSB7XG4gICAgICAgICAgICAgIC5jYXJkLWxpc3Qge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5M3Z3O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDlweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgIC5jYXJkLWxpc3Qge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NHZ3O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAgIC5jYXJkLWxpc3Qge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NHZ3O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/optionList.js */")));
    }
  }]);

  return OptionList;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=topicview.js.c19fec021f9db62c794d.hot-update.js.map