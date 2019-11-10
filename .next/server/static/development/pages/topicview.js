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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apiRequests/apiRequests.js":
/*!************************************!*\
  !*** ./apiRequests/apiRequests.js ***!
  \************************************/
/*! exports provided: Auth, _GET_TOPICS, _GET_RECS, _GET_QUESTION_ACTIVITY, GET_SPECIFIC_TOPIC_URL, GET_RELATED_TOPICS_URL, login, mySignup, mySocial, AddOption, getOption, Add, addAvatar, updateUser, userGoogleSignin, NewAddTopic, getAllTopics, AddNewOption, forgotPasswordFunction, checkIfUserExist, user_recommendation, checkIfTagExist, AddUserReactionToOption, GetUserReactionToLikeOption, GetUserReactionToDisLikeOption, MarkOptionAsSpam, SaveUpdateHistory, SaveProHistory, SaveConHistory, GetOptionUpdateHistory, GetProUpdateHistory, GetConUpdateHistory, GetRecHistory, UpdateOption, UpdatePro, UpdateCon, GetQuestionUpdatedAt, GetQuestionNumOfRecs, GET_USER_KARMA, GET_USER_NOTIFICATION, USER_HAS_SEEN_NOTIFICATION, GET_SPECIFIC_QUESTION, VIEW_A_USER, GET_USER_WHO_ADDED_QUESTION, GET_SPECIFIC_QUESTION_OPTIONS, GET_ALL_OPTIONS, SPECIFIC_QUESTION_OPTIONS, ADD_OPTION_PRO, ADD_OPTION_CON, GET_OPTION_DETAILS, FETCH_OPTION_PRO, FETCH_OPTION_Con, FETCH_OPTION_REC, GET_SPECIFIC_TOPIC, SortRecommendations, SortQuestions, GetNextQuestion, GetAQuestionFromQuestions, GetProDetail, GetConDetail, GetOptionPros, GetOptionCons, getUserKarmaAndDateJoined, GetQuestionTotalRecs, GetOptionSpecs, AddOptionSpec, FetchAvatar, FetchSpecificQuestionId, AddOptionImage, GetTopicRecommendations, FollowQuestion, GetFollowedQuestion, GetTopicsByTag, GetOtherTags, ManageTag, GetQuestionUpdateHistory, FilterTopicsByTag, GetQuestionsAddedByUser, CheckIfUserAddedQuestion, CheckIfQuestionHasBeenRejected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_GET_TOPICS", function() { return _GET_TOPICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_GET_RECS", function() { return _GET_RECS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_GET_QUESTION_ACTIVITY", function() { return _GET_QUESTION_ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SPECIFIC_TOPIC_URL", function() { return GET_SPECIFIC_TOPIC_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RELATED_TOPICS_URL", function() { return GET_RELATED_TOPICS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySignup", function() { return mySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySocial", function() { return mySocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOption", function() { return AddOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOption", function() { return getOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAvatar", function() { return addAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignin", function() { return userGoogleSignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAddTopic", function() { return NewAddTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTopics", function() { return getAllTopics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewOption", function() { return AddNewOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPasswordFunction", function() { return forgotPasswordFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfUserExist", function() { return checkIfUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_recommendation", function() { return user_recommendation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfTagExist", function() { return checkIfTagExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserReactionToOption", function() { return AddUserReactionToOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserReactionToLikeOption", function() { return GetUserReactionToLikeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserReactionToDisLikeOption", function() { return GetUserReactionToDisLikeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkOptionAsSpam", function() { return MarkOptionAsSpam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUpdateHistory", function() { return SaveUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveProHistory", function() { return SaveProHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveConHistory", function() { return SaveConHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOptionUpdateHistory", function() { return GetOptionUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProUpdateHistory", function() { return GetProUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConUpdateHistory", function() { return GetConUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRecHistory", function() { return GetRecHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOption", function() { return UpdateOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePro", function() { return UpdatePro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCon", function() { return UpdateCon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQuestionUpdatedAt", function() { return GetQuestionUpdatedAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQuestionNumOfRecs", function() { return GetQuestionNumOfRecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_KARMA", function() { return GET_USER_KARMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_NOTIFICATION", function() { return GET_USER_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_HAS_SEEN_NOTIFICATION", function() { return USER_HAS_SEEN_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SPECIFIC_QUESTION", function() { return GET_SPECIFIC_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_A_USER", function() { return VIEW_A_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_WHO_ADDED_QUESTION", function() { return GET_USER_WHO_ADDED_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SPECIFIC_QUESTION_OPTIONS", function() { return GET_SPECIFIC_QUESTION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_OPTIONS", function() { return GET_ALL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIFIC_QUESTION_OPTIONS", function() { return SPECIFIC_QUESTION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_OPTION_PRO", function() { return ADD_OPTION_PRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_OPTION_CON", function() { return ADD_OPTION_CON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_OPTION_DETAILS", function() { return GET_OPTION_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_OPTION_PRO", function() { return FETCH_OPTION_PRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_OPTION_Con", function() { return FETCH_OPTION_Con; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_OPTION_REC", function() { return FETCH_OPTION_REC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SPECIFIC_TOPIC", function() { return GET_SPECIFIC_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortRecommendations", function() { return SortRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortQuestions", function() { return SortQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNextQuestion", function() { return GetNextQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAQuestionFromQuestions", function() { return GetAQuestionFromQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProDetail", function() { return GetProDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConDetail", function() { return GetConDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOptionPros", function() { return GetOptionPros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOptionCons", function() { return GetOptionCons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserKarmaAndDateJoined", function() { return getUserKarmaAndDateJoined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQuestionTotalRecs", function() { return GetQuestionTotalRecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOptionSpecs", function() { return GetOptionSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOptionSpec", function() { return AddOptionSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchAvatar", function() { return FetchAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSpecificQuestionId", function() { return FetchSpecificQuestionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOptionImage", function() { return AddOptionImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTopicRecommendations", function() { return GetTopicRecommendations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowQuestion", function() { return FollowQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFollowedQuestion", function() { return GetFollowedQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTopicsByTag", function() { return GetTopicsByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOtherTags", function() { return GetOtherTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTag", function() { return ManageTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQuestionUpdateHistory", function() { return GetQuestionUpdateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTopicsByTag", function() { return FilterTopicsByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQuestionsAddedByUser", function() { return GetQuestionsAddedByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIfUserAddedQuestion", function() { return CheckIfUserAddedQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIfQuestionHasBeenRejected", function() { return CheckIfQuestionHasBeenRejected; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./config/config.js");

 //Welcome, all requests to the server are made here
//======================================================================================================

var Auth = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/auth");
var URL = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/topic");
var newOption = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/add/topic");

var _optionRoute = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option");

var _Option_Rec = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/add/recommendation");

var _forgotPass = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/auth/forgot/password");

var _GET_TOPICS = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/get/topics");

var _addNewOption = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/add");

var _GET_RECS = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/get/recommendations");
var _GET_QUESTION_ACTIVITY = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/get/questionActivity");
var GET_SPECIFIC_TOPIC_URL = function GET_SPECIFIC_TOPIC_URL(name) {
  return "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/topic/").concat(name);
};
var GET_RELATED_TOPICS_URL = function GET_RELATED_TOPICS_URL(name) {
  return "".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"], "/option/get/related/").concat(name);
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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");





var Header = function Header(_ref) {
  var data = _ref.data,
      openSignup = _ref.openSignup,
      openLogin = _ref.openLogin,
      closeSignup = _ref.closeSignup,
      closeLogin = _ref.closeLogin,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-24557130"
  }, title ? title : "Get the best always ", " | Top Ratings "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: "Narcisse Egonu",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "keywords",
    content: "Review, Product review, best, quality product",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/png",
    sizes: "192x192",
    href: "/static/icon/favicon.png",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet",
    className: "jsx-24557130"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Cabin|Muli",
    rel: "stylesheet",
    className: "jsx-24557130"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    openLogin: openLogin,
    openSignup: openSignup,
    data: data
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "24557130"
  }, "body,html{background:#f4f6f8 !important;font-family:\"Cabin\" !important;margin:0;padding:0;color:#000;}*{box-sizing:border-box;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RE8sQUFJeUMsQUFTUixBQUlELHNCQUh2QixRQVRpQyxvQkFhakMsV0FYVyxTQUNDLFVBQ0MsV0FDYiIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL05hdmJhclwiO1xuXG5jb25zdCBIZWFkZXIgPSAoe1xuICBkYXRhLFxuICBvcGVuU2lnbnVwLFxuICBvcGVuTG9naW4sXG4gIGNsb3NlU2lnbnVwLFxuICBjbG9zZUxvZ2luLFxuICB0aXRsZVxufSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlID8gdGl0bGUgOiBcIkdldCB0aGUgYmVzdCBhbHdheXMgXCJ9IHwgVG9wIFJhdGluZ3MgPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiTmFyY2lzc2UgRWdvbnVcIiAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgY29udGVudD1cIlJldmlldywgUHJvZHVjdCByZXZpZXcsIGJlc3QsIHF1YWxpdHkgcHJvZHVjdFwiXG4gICAgICAvPlxuXG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgIHNpemVzPVwiMTkyeDE5MlwiXG4gICAgICAgIGhyZWY9XCIvc3RhdGljL2ljb24vZmF2aWNvbi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzguMC4xL25vcm1hbGl6ZS5taW4uY3NzXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS84LjAuMS9ub3JtYWxpemUuY3NzXCJcbiAgICAgIC8+XG5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTUwb0JVSEVtdnBRKzFsVzR5NTdQVEZtaENhWHAwTUw1ZDYwTTFNN3VIMitucVVpdnpJZWJobmRPSksyOGFudmZcIlxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhYmlufE11bGlcIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPE5hdkJhciBvcGVuTG9naW49e29wZW5Mb2dpbn0gb3BlblNpZ251cD17b3BlblNpZ251cH0gZGF0YT17ZGF0YX0gLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIGJvZHksXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGY2ZjggIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJDYWJpblwiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLy8gZm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Icons.js":
/*!*****************************!*\
  !*** ./components/Icons.js ***!
  \*****************************/
/*! exports provided: AccountEditIcon, SquareEditIcon, AddLinkIcon, AddIcon, SettingIcon, DislikeIcon, LikeIcon, SearchIcon, BellIcon, UserIcon, StarIcon, ViewMore, Collapse, More, Landing, Thumb_up, Thumb_down, InsertLink, LandingSvg, CardDownArrow, CardUpArrow, AddRecommendation, ProfileIcon, QuestionBox, Bellie, LogoutIcon, LeftArrow, MonthIcon, WeekIcon, DayIcon, AllIcon, StarBoxIcon, InfoCircle, Banned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditIcon", function() { return AccountEditIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareEditIcon", function() { return SquareEditIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLinkIcon", function() { return AddLinkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIcon", function() { return AddIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingIcon", function() { return SettingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DislikeIcon", function() { return DislikeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeIcon", function() { return LikeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellIcon", function() { return BellIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarIcon", function() { return StarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMore", function() { return ViewMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "More", function() { return More; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return Landing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumb_up", function() { return Thumb_up; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumb_down", function() { return Thumb_down; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertLink", function() { return InsertLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingSvg", function() { return LandingSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDownArrow", function() { return CardDownArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardUpArrow", function() { return CardUpArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecommendation", function() { return AddRecommendation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileIcon", function() { return ProfileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBox", function() { return QuestionBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bellie", function() { return Bellie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutIcon", function() { return LogoutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftArrow", function() { return LeftArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthIcon", function() { return MonthIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekIcon", function() { return WeekIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayIcon", function() { return DayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllIcon", function() { return AllIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarBoxIcon", function() { return StarBoxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCircle", function() { return InfoCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banned", function() { return Banned; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
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
  }, ".bell-style.jsx-96149225{width:20px;height:20px;}@media screen and (max-width:600px){.bell-style.jsx-96149225{width:10px;height:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL0ljb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGTyxBQUdzQixBQU1FLFdBTEQsQUFNRSxZQUxoQixBQU1FIiwiZmlsZSI6Ii9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL0ljb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTZWFyY2gsIGZhQ2FyZXREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgQWNjb3VudEVkaXRJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIGQ9XCJNMjEuNywxMy4zNUwyMC43LDE0LjM1TDE4LjY1LDEyLjNMMTkuNjUsMTEuM0MxOS44NiwxMS4wOSAyMC4yMSwxMS4wOSAyMC40MiwxMS4zTDIxLjcsMTIuNThDMjEuOTEsMTIuNzkgMjEuOTEsMTMuMTQgMjEuNywxMy4zNU0xMiwxOC45NEwxOC4wNiwxMi44OEwyMC4xMSwxNC45M0wxNC4wNiwyMUgxMlYxOC45NE0xMiwxNEM3LjU4LDE0IDQsMTUuNzkgNCwxOFYyMEgxMFYxOC4xMUwxNCwxNC4xMUMxMy4zNCwxNC4wMyAxMi42NywxNCAxMiwxNE0xMiw0QTQsNCAwIDAsMCA4LDhBNCw0IDAgMCwwIDEyLDEyQTQsNCAwIDAsMCAxNiw4QTQsNCAwIDAsMCAxMiw0WlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgU3F1YXJlRWRpdEljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQWRkTGlua0ljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgZD1cIk03LDdIMTFWOUg3QTMsMyAwIDAsMCA0LDEyQTMsMyAwIDAsMCA3LDE1SDExVjE3SDdBNSw1IDAgMCwxIDIsMTJBNSw1IDAgMCwxIDcsN00xNyw3QTUsNSAwIDAsMSAyMiwxMkgyMEEzLDMgMCAwLDAgMTcsOUgxM1Y3SDE3TTgsMTFIMTZWMTNIOFYxMU0xNywxMkgxOVYxNUgyMlYxN0gxOVYyMEgxN1YxN0gxNFYxNUgxN1YxMlpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFkZEljb24gPSAoeyBjb2xvciA9IFwiIzAwMFwiIH0pID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMyw3SDExVjExSDdWMTNIMTFWMTdIMTNWMTNIMTdWMTFIMTNWN1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNldHRpbmdJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjZWVlXCJcbiAgICAgIGQ9XCJNMTIsOEE0LDQgMCAwLDEgMTYsMTJBNCw0IDAgMCwxIDEyLDE2QTQsNCAwIDAsMSA4LDEyQTQsNCAwIDAsMSAxMiw4TTEyLDEwQTIsMiAwIDAsMCAxMCwxMkEyLDIgMCAwLDAgMTIsMTRBMiwyIDAgMCwwIDE0LDEyQTIsMiAwIDAsMCAxMiwxME0xMCwyMkM5Ljc1LDIyIDkuNTQsMjEuODIgOS41LDIxLjU4TDkuMTMsMTguOTNDOC41LDE4LjY4IDcuOTYsMTguMzQgNy40NCwxNy45NEw0Ljk1LDE4Ljk1QzQuNzMsMTkuMDMgNC40NiwxOC45NSA0LjM0LDE4LjczTDIuMzQsMTUuMjdDMi4yMSwxNS4wNSAyLjI3LDE0Ljc4IDIuNDYsMTQuNjNMNC41NywxMi45N0w0LjUsMTJMNC41NywxMUwyLjQ2LDkuMzdDMi4yNyw5LjIyIDIuMjEsOC45NSAyLjM0LDguNzNMNC4zNCw1LjI3QzQuNDYsNS4wNSA0LjczLDQuOTYgNC45NSw1LjA1TDcuNDQsNi4wNUM3Ljk2LDUuNjYgOC41LDUuMzIgOS4xMyw1LjA3TDkuNSwyLjQyQzkuNTQsMi4xOCA5Ljc1LDIgMTAsMkgxNEMxNC4yNSwyIDE0LjQ2LDIuMTggMTQuNSwyLjQyTDE0Ljg3LDUuMDdDMTUuNSw1LjMyIDE2LjA0LDUuNjYgMTYuNTYsNi4wNUwxOS4wNSw1LjA1QzE5LjI3LDQuOTYgMTkuNTQsNS4wNSAxOS42Niw1LjI3TDIxLjY2LDguNzNDMjEuNzksOC45NSAyMS43Myw5LjIyIDIxLjU0LDkuMzdMMTkuNDMsMTFMMTkuNSwxMkwxOS40MywxM0wyMS41NCwxNC42M0MyMS43MywxNC43OCAyMS43OSwxNS4wNSAyMS42NiwxNS4yN0wxOS42NiwxOC43M0MxOS41NCwxOC45NSAxOS4yNywxOS4wNCAxOS4wNSwxOC45NUwxNi41NiwxNy45NUMxNi4wNCwxOC4zNCAxNS41LDE4LjY4IDE0Ljg3LDE4LjkzTDE0LjUsMjEuNThDMTQuNDYsMjEuODIgMTQuMjUsMjIgMTQsMjJIMTBNMTEuMjUsNEwxMC44OCw2LjYxQzkuNjgsNi44NiA4LjYyLDcuNSA3Ljg1LDguMzlMNS40NCw3LjM1TDQuNjksOC42NUw2LjgsMTAuMkM2LjQsMTEuMzcgNi40LDEyLjY0IDYuOCwxMy44TDQuNjgsMTUuMzZMNS40MywxNi42Nkw3Ljg2LDE1LjYyQzguNjMsMTYuNSA5LjY4LDE3LjE0IDEwLjg3LDE3LjM4TDExLjI0LDIwSDEyLjc2TDEzLjEzLDE3LjM5QzE0LjMyLDE3LjE0IDE1LjM3LDE2LjUgMTYuMTQsMTUuNjJMMTguNTcsMTYuNjZMMTkuMzIsMTUuMzZMMTcuMiwxMy44MUMxNy42LDEyLjY0IDE3LjYsMTEuMzcgMTcuMiwxMC4yTDE5LjMxLDguNjVMMTguNTYsNy4zNUwxNi4xNSw4LjM5QzE1LjM4LDcuNSAxNC4zMiw2Ljg2IDEzLjEyLDYuNjJMMTIuNzUsNEgxMS4yNVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IERpc2xpa2VJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgIGQ9XCJNMTksMTVIMjNWM0gxOU0xNSwzSDZDNS4xNywzIDQuNDYsMy41IDQuMTYsNC4yMkwxLjE0LDExLjI3QzEuMDUsMTEuNSAxLDExLjc0IDEsMTJWMTRBMiwyIDAgMCwwIDMsMTZIOS4zMUw4LjM2LDIwLjU3QzguMzQsMjAuNjcgOC4zMywyMC43NyA4LjMzLDIwLjg4QzguMzMsMjEuMyA4LjUsMjEuNjcgOC43NywyMS45NEw5LjgzLDIzTDE2LjQxLDE2LjQxQzE2Ljc4LDE2LjA1IDE3LDE1LjU1IDE3LDE1VjVDMTcsMy44OSAxNi4xLDMgMTUsM1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IExpa2VJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgIGQ9XCJNMjMsMTBDMjMsOC44OSAyMi4xLDggMjEsOEgxNC42OEwxNS42NCwzLjQzQzE1LjY2LDMuMzMgMTUuNjcsMy4yMiAxNS42NywzLjExQzE1LjY3LDIuNyAxNS41LDIuMzIgMTUuMjMsMi4wNUwxNC4xNywxTDcuNTksNy41OEM3LjIyLDcuOTUgNyw4LjQ1IDcsOVYxOUEyLDIgMCAwLDAgOSwyMUgxOEMxOC44MywyMSAxOS41NCwyMC41IDE5Ljg0LDE5Ljc4TDIyLjg2LDEyLjczQzIyLjk1LDEyLjUgMjMsMTIuMjYgMjMsMTJWMTBNMSwyMUg1VjlIMVYyMVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiM2MDMzOGRcIlxuICAgICAgZD1cIk05LjUsM0E2LjUsNi41IDAgMCwxIDE2LDkuNUMxNiwxMS4xMSAxNS40MSwxMi41OSAxNC40NCwxMy43M0wxNC43MSwxNEgxNS41TDIwLjUsMTlMMTksMjAuNUwxNCwxNS41VjE0LjcxTDEzLjczLDE0LjQ0QzEyLjU5LDE1LjQxIDExLjExLDE2IDkuNSwxNkE2LjUsNi41IDAgMCwxIDMsOS41QTYuNSw2LjUgMCAwLDEgOS41LDNNOS41LDVDNyw1IDUsNyA1LDkuNUM1LDEyIDcsMTQgOS41LDE0QzEyLDE0IDE0LDEyIDE0LDkuNUMxNCw3IDEyLDUgOS41LDVaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBCZWxsSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT17XCJiZWxsLXN0eWxlXCJ9XG4gICAgc3R5bGU9e3sgd2lkdGg6IFwiNXB4XCIsIGhlaWdodDogXCI1cHhcIiB9fVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjZWVlXCJcbiAgICAgIGQ9XCJNMjEsMTlWMjBIM1YxOUw1LDE3VjExQzUsNy45IDcuMDMsNS4xNyAxMCw0LjI5QzEwLDQuMTkgMTAsNC4xIDEwLDRBMiwyIDAgMCwxIDEyLDJBMiwyIDAgMCwxIDE0LDRDMTQsNC4xIDE0LDQuMTkgMTQsNC4yOUMxNi45Nyw1LjE3IDE5LDcuOSAxOSwxMVYxN0wyMSwxOU0xNCwyMUEyLDIgMCAwLDEgMTIsMjNBMiwyIDAgMCwxIDEwLDIxXCJcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuYmVsbC1zdHlsZSB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuYmVsbC1zdHlsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVXNlckljb24gPSAoKSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtcInVzZXItaWNvbi1zdHlsZVwifSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJNNy4wNywxOC4yOEM3LjUsMTcuMzggMTAuMTIsMTYuNSAxMiwxNi41QzEzLjg4LDE2LjUgMTYuNSwxNy4zOCAxNi45MywxOC4yOEMxNS41NywxOS4zNiAxMy44NiwyMCAxMiwyMEMxMC4xNCwyMCA4LjQzLDE5LjM2IDcuMDcsMTguMjhNMTguMzYsMTYuODNDMTYuOTMsMTUuMDkgMTMuNDYsMTQuNSAxMiwxNC41QzEwLjU0LDE0LjUgNy4wNywxNS4wOSA1LjY0LDE2LjgzQzQuNjIsMTUuNSA0LDEzLjgyIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxMy44MiAxOS4zOCwxNS41IDE4LjM2LDE2LjgzTTEyLDZDMTAuMDYsNiA4LjUsNy41NiA4LjUsOS41QzguNSwxMS40NCAxMC4wNiwxMyAxMiwxM0MxMy45NCwxMyAxNS41LDExLjQ0IDE1LjUsOS41QzE1LjUsNy41NiAxMy45NCw2IDEyLDZNMTIsMTFBMS41LDEuNSAwIDAsMSAxMC41LDkuNUExLjUsMS41IDAgMCwxIDEyLDhBMS41LDEuNSAwIDAsMSAxMy41LDkuNUExLjUsMS41IDAgMCwxIDEyLDExWlwiXG4gICAgLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnVzZXItaWNvbi1zdHlsZSB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAudXNlci1pY29uLXN0eWxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBTdGFySWNvbiA9ICgpID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9XCJzdGFyLWljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cIiM2MDMzOGRcIiBkPVwiTTEyLDFMOSw5TDEsMTJMOSwxNUwxMiwyM0wxNSwxNUwyMywxMkwxNSw5TDEyLDFaXCIgLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnN0YXItaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFZpZXdNb3JlID0gKHsgd2lkdGgsIGNvbG9yLCBoZWlnaHQgfSkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGNsYXNzTmFtZT17XCJ2aWV3LW1vcmVcIn1cbiAgICAgIGQ9XCJNMTAsMjFWMTlINi40MUwxMC45MSwxNC41TDkuNSwxMy4wOUw1LDE3LjU5VjE0SDNWMjFIMTBNMTQuNSwxMC45MUwxOSw2LjQxVjEwSDIxVjNIMTRWNUgxNy41OUwxMy4wOSw5LjVMMTQuNSwxMC45MVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgICAgZD1cIk0xOS41LDMuMDlMMTUsNy41OVY0SDEzVjExSDIwVjlIMTYuNDFMMjAuOTEsNC41TDE5LjUsMy4wOU00LDEzVjE1SDcuNTlMMy4wOSwxOS41TDQuNSwyMC45MUw5LDE2LjQxVjIwSDExVjEzSDRaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IE1vcmUgPSAoeyBjb2xvciwgd2lkdGggPSBcIjMwXCIsIGhlaWdodCA9IFwiMzBcIiB9KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICBjbGFzc05hbWU9XCJtb3JlLWljb24tc3R5bGVcIlxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwiIDAgNHB4IDE5cHggMCByZ2JhKDAsMCwwLC4wMSksIGN1cnNvciA6IHBvaW50ZXJcIiB9fVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICA+XG4gICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPXtjb2xvciA/IGNvbG9yIDogXCIjZmRmZGZkXCJ9IC8+XG4gICAgPHBhdGggZD1cIk02IDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS02IDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelwiIC8+XG4gIDwvc3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBMYW5kaW5nID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgaWQ9XCJMYXllcl8xXCJcbiAgICBkYXRhLW5hbWU9XCJMYXllciAxXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB2aWV3Qm94PVwiMCAwIDE0MDIuMDUgMTc5LjkxXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXG4gICAgICBkPVwiTTAsMjcxLjU4UzIxNy4yLDEyMC4wOSw0MDMuMTEsMTIwLjA5YzE5Ny45NCwwLDQ0Mi40OCwxMzYuNDksNjU4LjQ3LDEzNi40OXMzNDAuNDgtMTIwLDM0MC40OC0xMjBWMzAwSDBaXCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0xMjAuMDkpXCJcbiAgICAvPlxuICAgIDxzdHlsZT5cbiAgICAgIHtgXG4gICAgLmNscy0xe1xuICAgICAgZmlsbDogI2Y0ZjZmODtcbiAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUaHVtYl91cCA9ICh7IGNvbG9yLCAgaGVpZ2h0ID0gXCIzNHB4XCIsIHdpZHRoID0gXCIzNHB4XCIgfSkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pY29uXCJcbiAgICBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9IFxuICAgICAgZD1cIk01LDlWMjFIMVY5SDVNOSwyMUEyLDIgMCAwLDEgNywxOVY5QzcsOC40NSA3LjIyLDcuOTUgNy41OSw3LjU5TDE0LjE3LDFMMTUuMjMsMi4wNkMxNS41LDIuMzMgMTUuNjcsMi43IDE1LjY3LDMuMTFMMTUuNjQsMy40M0wxNC42OSw4SDIxQzIyLjExLDggMjMsOC45IDIzLDEwVjEyQzIzLDEyLjI2IDIyLjk1LDEyLjUgMjIuODYsMTIuNzNMMTkuODQsMTkuNzhDMTkuNTQsMjAuNSAxOC44MywyMSAxOCwyMUg5TTksMTlIMTguMDNMMjEsMTJWMTBIMTIuMjFMMTMuMzQsNC42OEw5LDkuMDNWMTlaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUaHVtYl9kb3duID0gKHsgd2lkdGggPSBcIjM0cHhcIiwgY29sb3IsIGhlaWdodCA9IFwiMzRweFwiIH0pID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgICBkPVwiTTE5LDE1VjNIMjNWMTVIMTlNMTUsM0EyLDIgMCAwLDEgMTcsNVYxNUMxNywxNS41NSAxNi43OCwxNi4wNSAxNi40MSwxNi40MUw5LjgzLDIzTDguNzcsMjEuOTRDOC41LDIxLjY3IDguMzMsMjEuMyA4LjMzLDIwLjg4TDguMzYsMjAuNTdMOS4zMSwxNkgzQzEuODksMTYgMSwxNS4xIDEsMTRWMTJDMSwxMS43NCAxLjA1LDExLjUgMS4xNCwxMS4yN0w0LjE2LDQuMjJDNC40NiwzLjUgNS4xNywzIDYsM0gxNU0xNSw1SDUuOTdMMywxMlYxNEgxMS43OEwxMC42NSwxOS4zMkwxNSwxNC45N1Y1WlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgSW5zZXJ0TGluayA9IHByb3BzID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtwcm9wcy5jb2xvcn1cbiAgICAgIGQ9XCJNMy45LDEyQzMuOSwxMC4yOSA1LjI5LDguOSA3LDguOUgxMVY3SDdBNSw1IDAgMCwwIDIsMTJBNSw1IDAgMCwwIDcsMTdIMTFWMTUuMUg3QzUuMjksMTUuMSAzLjksMTMuNzEgMy45LDEyTTgsMTNIMTZWMTFIOFYxM00xNyw3SDEzVjguOUgxN0MxOC43MSw4LjkgMjAuMSwxMC4yOSAyMC4xLDEyQzIwLjEsMTMuNzEgMTguNzEsMTUuMSAxNywxNS4xSDEzVjE3SDE3QTUsNSAwIDAsMCAyMiwxMkE1LDUgMCAwLDAgMTcsN1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IExhbmRpbmdTdmcgPSAoKSA9PiAoXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQwMi4wNSAxNzkuOTFcIj5cbiAgICA8cGF0aFxuICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxuICAgICAgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiXG4gICAgICBkPVwiTTAsMjguNDJTMjE3LjIsMTc5LjkxLDQwMy4xMSwxNzkuOTFjMTk3Ljk0LDAsNDQyLjQ4LTEzNi40OSw2NTguNDctMTM2LjQ5czM0MC40OCwxMjAsMzQwLjQ4LDEyMFYwSDBaXCJcbiAgICAvPlxuICAgIDxzdHlsZT5cbiAgICAgIHtgXG4gICAuY2xzLTF7XG4gICAgIGZpbGw6ICNmZGZkZmQ7XG4gICB9XG5cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IENhcmREb3duQXJyb3cgPSAoeyB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD17d2lkdGh9XG4gICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgICBkPVwiTTcuNDEgOC41OUwxMiAxMy4xN2w0LjU5LTQuNThMMTggMTBsLTYgNi02LTYgMS40MS0xLjQxelwiXG4gICAgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBDYXJkVXBBcnJvdyA9ICh7IHdpZHRoLCBoZWlnaHQsIGNvbG9yIH0pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTIgOGwtNiA2IDEuNDEgMS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNnpcIlxuICAgIC8+XG4gICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMFYwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQWRkUmVjb21tZW5kYXRpb24gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjM0XCJcbiAgICAgIGhlaWdodD1cIjM0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD17XCJub25lXCJ9IC8+XG4gICAgICA8cGF0aCBkPVwiTTIxIDMuMDFIM2MtMS4xIDAtMiAuOS0yIDJWOWgyVjQuOTloMTh2MTQuMDNIM1YxNUgxdjQuMDFjMCAxLjEuOSAxLjk4IDIgMS45OGgxOGMxLjEgMCAyLS44OCAyLTEuOTh2LTE0YzAtMS4xMS0uOS0yLTItMnpNMTEgMTZsNC00LTQtNHYzSDF2MmgxMHYzelwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZUljb24gPSAoeyBjb2xvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgIGQ9XCJNMTIsMTkuMkM5LjUsMTkuMiA3LjI5LDE3LjkyIDYsMTZDNi4wMywxNCAxMCwxMi45IDEyLDEyLjlDMTQsMTIuOSAxNy45NywxNCAxOCwxNkMxNi43MSwxNy45MiAxNC41LDE5LjIgMTIsMTkuMk0xMiw1QTMsMyAwIDAsMSAxNSw4QTMsMyAwIDAsMSAxMiwxMUEzLDMgMCAwLDEgOSw4QTMsMyAwIDAsMSAxMiw1TTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkMyMiw2LjQ3IDE3LjUsMiAxMiwyWlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uQm94ID0gKHsgd2lkdGggPSBcIjIwcHhcIiwgaGVpZ2h0ID0gXCIyMHB4XCIsIGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgIGQ9XCJNMTEsMThIMTNWMTZIMTFWMThNMTIsNkE0LDQgMCAwLDAgOCwxMEgxMEEyLDIgMCAwLDEgMTIsOEEyLDIgMCAwLDEgMTQsMTBDMTQsMTIgMTEsMTEuNzUgMTEsMTVIMTNDMTMsMTIuNzUgMTYsMTIuNSAxNiwxMEE0LDQgMCAwLDAgMTIsNk01LDNIMTlBMiwyIDAgMCwxIDIxLDVWMTlBMiwyIDAgMCwxIDE5LDIxSDVBMiwyIDAgMCwxIDMsMTlWNUEyLDIgMCAwLDEgNSwzWlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJlbGxpZSA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk0yMSwxOVYyMEgzVjE5TDUsMTdWMTFDNSw3LjkgNy4wMyw1LjE3IDEwLDQuMjlDMTAsNC4xOSAxMCw0LjEgMTAsNEEyLDIgMCAwLDEgMTIsMkEyLDIgMCAwLDEgMTQsNEMxNCw0LjEgMTQsNC4xOSAxNCw0LjI5QzE2Ljk3LDUuMTcgMTksNy45IDE5LDExVjE3TDIxLDE5TTE0LDIxQTIsMiAwIDAsMSAxMiwyM0EyLDIgMCAwLDEgMTAsMjFcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBMb2dvdXRJY29uID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTE0LjA4LDE1LjU5TDE2LjY3LDEzSDdWMTFIMTYuNjdMMTQuMDgsOC40MUwxNS41LDdMMjAuNSwxMkwxNS41LDE3TDE0LjA4LDE1LjU5TTE5LDNBMiwyIDAgMCwxIDIxLDVWOS42N0wxOSw3LjY3VjVINVYxOUgxOVYxNi4zM0wyMSwxNC4zM1YxOUEyLDIgMCAwLDEgMTksMjFINUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNIMTlaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTGVmdEFycm93ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9ezI0fVxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGZpbGw9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgZD1cIk0xNCA3bC01IDUgNSA1Vjd6XCIgLz5cbiAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0yNCAwdjI0SDBWMGgyNHpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1vbnRoSWNvbiA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIzcHhcIiwgaGVpZ2h0OiBcIjIzcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk05LDEwVjEySDdWMTBIOU0xMywxMFYxMkgxMVYxMEgxM00xNywxMFYxMkgxNVYxMEgxN00xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5LDE5VjhINVYxOUgxOU05LDE0VjE2SDdWMTRIOU0xMywxNFYxNkgxMVYxNEgxM00xNywxNFYxNkgxNVYxNEgxN1pcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBXZWVrSWNvbiA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIzcHhcIiwgaGVpZ2h0OiBcIjIzcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk02LDFIOFYzSDE2VjFIMThWM0gxOUEyLDIgMCAwLDEgMjEsNVYxOUEyLDIgMCAwLDEgMTksMjFINUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNINlYxTTUsN1YxOUgxOVY3SDVNNyw5SDE3VjExSDdWOVpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBEYXlJY29uID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjNweFwiLCBoZWlnaHQ6IFwiMjNweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTcsMTBIMTJWMTVIN00xOSwxOUg1VjhIMTlNMTksM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQWxsSWNvbiA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIzcHhcIiwgaGVpZ2h0OiBcIjIzcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk0xOSwxOUg1VjhIMTlNMTksM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNNMTYuNTMsMTEuMDZMMTUuNDcsMTBMMTAuNTksMTQuODhMOC40NywxMi43Nkw3LjQxLDEzLjgyTDEwLjU5LDE3TDE2LjUzLDExLjA2WlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFN0YXJCb3hJY29uID0gKHsgY29sb3IsIGhlaWdodCwgd2lkdGggfSkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTksM0EyLDIgMCAwLDEgMjEsNVYxOUMyMSwyMC4xMSAyMC4xLDIxIDE5LDIxSDVBMiwyIDAgMCwxIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDE5TTE1LjU4LDE3TDE0LjYzLDEyLjkyTDE3Ljc5LDEwLjE5TDEzLjYyLDkuODNMMTIsNkwxMC4zOCw5Ljg0TDYuMjEsMTAuMkw5LjM3LDEyLjkzTDguNDIsMTdMMTIsMTQuODRMMTUuNTgsMTdaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBJbmZvQ2lyY2xlID0gKHsgY29sb3IgPSBcIiMwMDBcIiwgaGVpZ2h0LCB3aWR0aCB9KSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgICBkPVwiTTEzLDlIMTFWN0gxM00xMywxN0gxMVYxMUgxM00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEJhbm5lZCA9ICh7IGNvbG9yIH0pID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJNMTIsNEE4LDggMCAwLDAgNCwxMkM0LDEzLjg1IDQuNjMsMTUuNTUgNS42OCwxNi45MUwxNi45MSw1LjY4QzE1LjU1LDQuNjMgMTMuODUsNCAxMiw0TTEyLDIwQTgsOCAwIDAsMCAyMCwxMkMyMCwxMC4xNSAxOS4zNyw4LjQ1IDE4LjMyLDcuMDlMNy4wOSwxOC4zMkM4LjQ1LDE5LjM3IDEwLjE1LDIwIDEyLDIwWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/Icons.js */"));
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
  }, ".user-icon-style.jsx-2215463236{width:24px;height:24px;}@media screen and (max-width:600px){.user-icon-style.jsx-2215463236{width:35px;height:35px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL0ljb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHTyxBQUdzQixBQU1FLFdBTEQsQUFNRSxZQUxoQixBQU1FIiwiZmlsZSI6Ii9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL0ljb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTZWFyY2gsIGZhQ2FyZXREb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgQWNjb3VudEVkaXRJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgIGQ9XCJNMjEuNywxMy4zNUwyMC43LDE0LjM1TDE4LjY1LDEyLjNMMTkuNjUsMTEuM0MxOS44NiwxMS4wOSAyMC4yMSwxMS4wOSAyMC40MiwxMS4zTDIxLjcsMTIuNThDMjEuOTEsMTIuNzkgMjEuOTEsMTMuMTQgMjEuNywxMy4zNU0xMiwxOC45NEwxOC4wNiwxMi44OEwyMC4xMSwxNC45M0wxNC4wNiwyMUgxMlYxOC45NE0xMiwxNEM3LjU4LDE0IDQsMTUuNzkgNCwxOFYyMEgxMFYxOC4xMUwxNCwxNC4xMUMxMy4zNCwxNC4wMyAxMi42NywxNCAxMiwxNE0xMiw0QTQsNCAwIDAsMCA4LDhBNCw0IDAgMCwwIDEyLDEyQTQsNCAwIDAsMCAxNiw4QTQsNCAwIDAsMCAxMiw0WlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgU3F1YXJlRWRpdEljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQWRkTGlua0ljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgZD1cIk03LDdIMTFWOUg3QTMsMyAwIDAsMCA0LDEyQTMsMyAwIDAsMCA3LDE1SDExVjE3SDdBNSw1IDAgMCwxIDIsMTJBNSw1IDAgMCwxIDcsN00xNyw3QTUsNSAwIDAsMSAyMiwxMkgyMEEzLDMgMCAwLDAgMTcsOUgxM1Y3SDE3TTgsMTFIMTZWMTNIOFYxMU0xNywxMkgxOVYxNUgyMlYxN0gxOVYyMEgxN1YxN0gxNFYxNUgxN1YxMlpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFkZEljb24gPSAoeyBjb2xvciA9IFwiIzAwMFwiIH0pID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMyw3SDExVjExSDdWMTNIMTFWMTdIMTNWMTNIMTdWMTFIMTNWN1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNldHRpbmdJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjZWVlXCJcbiAgICAgIGQ9XCJNMTIsOEE0LDQgMCAwLDEgMTYsMTJBNCw0IDAgMCwxIDEyLDE2QTQsNCAwIDAsMSA4LDEyQTQsNCAwIDAsMSAxMiw4TTEyLDEwQTIsMiAwIDAsMCAxMCwxMkEyLDIgMCAwLDAgMTIsMTRBMiwyIDAgMCwwIDE0LDEyQTIsMiAwIDAsMCAxMiwxME0xMCwyMkM5Ljc1LDIyIDkuNTQsMjEuODIgOS41LDIxLjU4TDkuMTMsMTguOTNDOC41LDE4LjY4IDcuOTYsMTguMzQgNy40NCwxNy45NEw0Ljk1LDE4Ljk1QzQuNzMsMTkuMDMgNC40NiwxOC45NSA0LjM0LDE4LjczTDIuMzQsMTUuMjdDMi4yMSwxNS4wNSAyLjI3LDE0Ljc4IDIuNDYsMTQuNjNMNC41NywxMi45N0w0LjUsMTJMNC41NywxMUwyLjQ2LDkuMzdDMi4yNyw5LjIyIDIuMjEsOC45NSAyLjM0LDguNzNMNC4zNCw1LjI3QzQuNDYsNS4wNSA0LjczLDQuOTYgNC45NSw1LjA1TDcuNDQsNi4wNUM3Ljk2LDUuNjYgOC41LDUuMzIgOS4xMyw1LjA3TDkuNSwyLjQyQzkuNTQsMi4xOCA5Ljc1LDIgMTAsMkgxNEMxNC4yNSwyIDE0LjQ2LDIuMTggMTQuNSwyLjQyTDE0Ljg3LDUuMDdDMTUuNSw1LjMyIDE2LjA0LDUuNjYgMTYuNTYsNi4wNUwxOS4wNSw1LjA1QzE5LjI3LDQuOTYgMTkuNTQsNS4wNSAxOS42Niw1LjI3TDIxLjY2LDguNzNDMjEuNzksOC45NSAyMS43Myw5LjIyIDIxLjU0LDkuMzdMMTkuNDMsMTFMMTkuNSwxMkwxOS40MywxM0wyMS41NCwxNC42M0MyMS43MywxNC43OCAyMS43OSwxNS4wNSAyMS42NiwxNS4yN0wxOS42NiwxOC43M0MxOS41NCwxOC45NSAxOS4yNywxOS4wNCAxOS4wNSwxOC45NUwxNi41NiwxNy45NUMxNi4wNCwxOC4zNCAxNS41LDE4LjY4IDE0Ljg3LDE4LjkzTDE0LjUsMjEuNThDMTQuNDYsMjEuODIgMTQuMjUsMjIgMTQsMjJIMTBNMTEuMjUsNEwxMC44OCw2LjYxQzkuNjgsNi44NiA4LjYyLDcuNSA3Ljg1LDguMzlMNS40NCw3LjM1TDQuNjksOC42NUw2LjgsMTAuMkM2LjQsMTEuMzcgNi40LDEyLjY0IDYuOCwxMy44TDQuNjgsMTUuMzZMNS40MywxNi42Nkw3Ljg2LDE1LjYyQzguNjMsMTYuNSA5LjY4LDE3LjE0IDEwLjg3LDE3LjM4TDExLjI0LDIwSDEyLjc2TDEzLjEzLDE3LjM5QzE0LjMyLDE3LjE0IDE1LjM3LDE2LjUgMTYuMTQsMTUuNjJMMTguNTcsMTYuNjZMMTkuMzIsMTUuMzZMMTcuMiwxMy44MUMxNy42LDEyLjY0IDE3LjYsMTEuMzcgMTcuMiwxMC4yTDE5LjMxLDguNjVMMTguNTYsNy4zNUwxNi4xNSw4LjM5QzE1LjM4LDcuNSAxNC4zMiw2Ljg2IDEzLjEyLDYuNjJMMTIuNzUsNEgxMS4yNVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IERpc2xpa2VJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgIGQ9XCJNMTksMTVIMjNWM0gxOU0xNSwzSDZDNS4xNywzIDQuNDYsMy41IDQuMTYsNC4yMkwxLjE0LDExLjI3QzEuMDUsMTEuNSAxLDExLjc0IDEsMTJWMTRBMiwyIDAgMCwwIDMsMTZIOS4zMUw4LjM2LDIwLjU3QzguMzQsMjAuNjcgOC4zMywyMC43NyA4LjMzLDIwLjg4QzguMzMsMjEuMyA4LjUsMjEuNjcgOC43NywyMS45NEw5LjgzLDIzTDE2LjQxLDE2LjQxQzE2Ljc4LDE2LjA1IDE3LDE1LjU1IDE3LDE1VjVDMTcsMy44OSAxNi4xLDMgMTUsM1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IExpa2VJY29uID0gKCkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgIGQ9XCJNMjMsMTBDMjMsOC44OSAyMi4xLDggMjEsOEgxNC42OEwxNS42NCwzLjQzQzE1LjY2LDMuMzMgMTUuNjcsMy4yMiAxNS42NywzLjExQzE1LjY3LDIuNyAxNS41LDIuMzIgMTUuMjMsMi4wNUwxNC4xNywxTDcuNTksNy41OEM3LjIyLDcuOTUgNyw4LjQ1IDcsOVYxOUEyLDIgMCAwLDAgOSwyMUgxOEMxOC44MywyMSAxOS41NCwyMC41IDE5Ljg0LDE5Ljc4TDIyLjg2LDEyLjczQzIyLjk1LDEyLjUgMjMsMTIuMjYgMjMsMTJWMTBNMSwyMUg1VjlIMVYyMVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiM2MDMzOGRcIlxuICAgICAgZD1cIk05LjUsM0E2LjUsNi41IDAgMCwxIDE2LDkuNUMxNiwxMS4xMSAxNS40MSwxMi41OSAxNC40NCwxMy43M0wxNC43MSwxNEgxNS41TDIwLjUsMTlMMTksMjAuNUwxNCwxNS41VjE0LjcxTDEzLjczLDE0LjQ0QzEyLjU5LDE1LjQxIDExLjExLDE2IDkuNSwxNkE2LjUsNi41IDAgMCwxIDMsOS41QTYuNSw2LjUgMCAwLDEgOS41LDNNOS41LDVDNyw1IDUsNyA1LDkuNUM1LDEyIDcsMTQgOS41LDE0QzEyLDE0IDE0LDEyIDE0LDkuNUMxNCw3IDEyLDUgOS41LDVaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBCZWxsSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT17XCJiZWxsLXN0eWxlXCJ9XG4gICAgc3R5bGU9e3sgd2lkdGg6IFwiNXB4XCIsIGhlaWdodDogXCI1cHhcIiB9fVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjZWVlXCJcbiAgICAgIGQ9XCJNMjEsMTlWMjBIM1YxOUw1LDE3VjExQzUsNy45IDcuMDMsNS4xNyAxMCw0LjI5QzEwLDQuMTkgMTAsNC4xIDEwLDRBMiwyIDAgMCwxIDEyLDJBMiwyIDAgMCwxIDE0LDRDMTQsNC4xIDE0LDQuMTkgMTQsNC4yOUMxNi45Nyw1LjE3IDE5LDcuOSAxOSwxMVYxN0wyMSwxOU0xNCwyMUEyLDIgMCAwLDEgMTIsMjNBMiwyIDAgMCwxIDEwLDIxXCJcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuYmVsbC1zdHlsZSB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuYmVsbC1zdHlsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVXNlckljb24gPSAoKSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtcInVzZXItaWNvbi1zdHlsZVwifSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJNNy4wNywxOC4yOEM3LjUsMTcuMzggMTAuMTIsMTYuNSAxMiwxNi41QzEzLjg4LDE2LjUgMTYuNSwxNy4zOCAxNi45MywxOC4yOEMxNS41NywxOS4zNiAxMy44NiwyMCAxMiwyMEMxMC4xNCwyMCA4LjQzLDE5LjM2IDcuMDcsMTguMjhNMTguMzYsMTYuODNDMTYuOTMsMTUuMDkgMTMuNDYsMTQuNSAxMiwxNC41QzEwLjU0LDE0LjUgNy4wNywxNS4wOSA1LjY0LDE2LjgzQzQuNjIsMTUuNSA0LDEzLjgyIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxMy44MiAxOS4zOCwxNS41IDE4LjM2LDE2LjgzTTEyLDZDMTAuMDYsNiA4LjUsNy41NiA4LjUsOS41QzguNSwxMS40NCAxMC4wNiwxMyAxMiwxM0MxMy45NCwxMyAxNS41LDExLjQ0IDE1LjUsOS41QzE1LjUsNy41NiAxMy45NCw2IDEyLDZNMTIsMTFBMS41LDEuNSAwIDAsMSAxMC41LDkuNUExLjUsMS41IDAgMCwxIDEyLDhBMS41LDEuNSAwIDAsMSAxMy41LDkuNUExLjUsMS41IDAgMCwxIDEyLDExWlwiXG4gICAgLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnVzZXItaWNvbi1zdHlsZSB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAudXNlci1pY29uLXN0eWxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBTdGFySWNvbiA9ICgpID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9XCJzdGFyLWljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cIiM2MDMzOGRcIiBkPVwiTTEyLDFMOSw5TDEsMTJMOSwxNUwxMiwyM0wxNSwxNUwyMywxMkwxNSw5TDEyLDFaXCIgLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnN0YXItaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFZpZXdNb3JlID0gKHsgd2lkdGgsIGNvbG9yLCBoZWlnaHQgfSkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGNsYXNzTmFtZT17XCJ2aWV3LW1vcmVcIn1cbiAgICAgIGQ9XCJNMTAsMjFWMTlINi40MUwxMC45MSwxNC41TDkuNSwxMy4wOUw1LDE3LjU5VjE0SDNWMjFIMTBNMTQuNSwxMC45MUwxOSw2LjQxVjEwSDIxVjNIMTRWNUgxNy41OUwxMy4wOSw5LjVMMTQuNSwxMC45MVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgICAgZD1cIk0xOS41LDMuMDlMMTUsNy41OVY0SDEzVjExSDIwVjlIMTYuNDFMMjAuOTEsNC41TDE5LjUsMy4wOU00LDEzVjE1SDcuNTlMMy4wOSwxOS41TDQuNSwyMC45MUw5LDE2LjQxVjIwSDExVjEzSDRaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IE1vcmUgPSAoeyBjb2xvciwgd2lkdGggPSBcIjMwXCIsIGhlaWdodCA9IFwiMzBcIiB9KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICBjbGFzc05hbWU9XCJtb3JlLWljb24tc3R5bGVcIlxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwiIDAgNHB4IDE5cHggMCByZ2JhKDAsMCwwLC4wMSksIGN1cnNvciA6IHBvaW50ZXJcIiB9fVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICA+XG4gICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPXtjb2xvciA/IGNvbG9yIDogXCIjZmRmZGZkXCJ9IC8+XG4gICAgPHBhdGggZD1cIk02IDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS02IDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelwiIC8+XG4gIDwvc3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBMYW5kaW5nID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgaWQ9XCJMYXllcl8xXCJcbiAgICBkYXRhLW5hbWU9XCJMYXllciAxXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB2aWV3Qm94PVwiMCAwIDE0MDIuMDUgMTc5LjkxXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXG4gICAgICBkPVwiTTAsMjcxLjU4UzIxNy4yLDEyMC4wOSw0MDMuMTEsMTIwLjA5YzE5Ny45NCwwLDQ0Mi40OCwxMzYuNDksNjU4LjQ3LDEzNi40OXMzNDAuNDgtMTIwLDM0MC40OC0xMjBWMzAwSDBaXCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0xMjAuMDkpXCJcbiAgICAvPlxuICAgIDxzdHlsZT5cbiAgICAgIHtgXG4gICAgLmNscy0xe1xuICAgICAgZmlsbDogI2Y0ZjZmODtcbiAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUaHVtYl91cCA9ICh7IGNvbG9yLCAgaGVpZ2h0ID0gXCIzNHB4XCIsIHdpZHRoID0gXCIzNHB4XCIgfSkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pY29uXCJcbiAgICBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9IFxuICAgICAgZD1cIk01LDlWMjFIMVY5SDVNOSwyMUEyLDIgMCAwLDEgNywxOVY5QzcsOC40NSA3LjIyLDcuOTUgNy41OSw3LjU5TDE0LjE3LDFMMTUuMjMsMi4wNkMxNS41LDIuMzMgMTUuNjcsMi43IDE1LjY3LDMuMTFMMTUuNjQsMy40M0wxNC42OSw4SDIxQzIyLjExLDggMjMsOC45IDIzLDEwVjEyQzIzLDEyLjI2IDIyLjk1LDEyLjUgMjIuODYsMTIuNzNMMTkuODQsMTkuNzhDMTkuNTQsMjAuNSAxOC44MywyMSAxOCwyMUg5TTksMTlIMTguMDNMMjEsMTJWMTBIMTIuMjFMMTMuMzQsNC42OEw5LDkuMDNWMTlaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUaHVtYl9kb3duID0gKHsgd2lkdGggPSBcIjM0cHhcIiwgY29sb3IsIGhlaWdodCA9IFwiMzRweFwiIH0pID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgICBkPVwiTTE5LDE1VjNIMjNWMTVIMTlNMTUsM0EyLDIgMCAwLDEgMTcsNVYxNUMxNywxNS41NSAxNi43OCwxNi4wNSAxNi40MSwxNi40MUw5LjgzLDIzTDguNzcsMjEuOTRDOC41LDIxLjY3IDguMzMsMjEuMyA4LjMzLDIwLjg4TDguMzYsMjAuNTdMOS4zMSwxNkgzQzEuODksMTYgMSwxNS4xIDEsMTRWMTJDMSwxMS43NCAxLjA1LDExLjUgMS4xNCwxMS4yN0w0LjE2LDQuMjJDNC40NiwzLjUgNS4xNywzIDYsM0gxNU0xNSw1SDUuOTdMMywxMlYxNEgxMS43OEwxMC42NSwxOS4zMkwxNSwxNC45N1Y1WlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgSW5zZXJ0TGluayA9IHByb3BzID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtwcm9wcy5jb2xvcn1cbiAgICAgIGQ9XCJNMy45LDEyQzMuOSwxMC4yOSA1LjI5LDguOSA3LDguOUgxMVY3SDdBNSw1IDAgMCwwIDIsMTJBNSw1IDAgMCwwIDcsMTdIMTFWMTUuMUg3QzUuMjksMTUuMSAzLjksMTMuNzEgMy45LDEyTTgsMTNIMTZWMTFIOFYxM00xNyw3SDEzVjguOUgxN0MxOC43MSw4LjkgMjAuMSwxMC4yOSAyMC4xLDEyQzIwLjEsMTMuNzEgMTguNzEsMTUuMSAxNywxNS4xSDEzVjE3SDE3QTUsNSAwIDAsMCAyMiwxMkE1LDUgMCAwLDAgMTcsN1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IExhbmRpbmdTdmcgPSAoKSA9PiAoXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQwMi4wNSAxNzkuOTFcIj5cbiAgICA8cGF0aFxuICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxuICAgICAgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiXG4gICAgICBkPVwiTTAsMjguNDJTMjE3LjIsMTc5LjkxLDQwMy4xMSwxNzkuOTFjMTk3Ljk0LDAsNDQyLjQ4LTEzNi40OSw2NTguNDctMTM2LjQ5czM0MC40OCwxMjAsMzQwLjQ4LDEyMFYwSDBaXCJcbiAgICAvPlxuICAgIDxzdHlsZT5cbiAgICAgIHtgXG4gICAuY2xzLTF7XG4gICAgIGZpbGw6ICNmZGZkZmQ7XG4gICB9XG5cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IENhcmREb3duQXJyb3cgPSAoeyB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD17d2lkdGh9XG4gICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgICBkPVwiTTcuNDEgOC41OUwxMiAxMy4xN2w0LjU5LTQuNThMMTggMTBsLTYgNi02LTYgMS40MS0xLjQxelwiXG4gICAgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBDYXJkVXBBcnJvdyA9ICh7IHdpZHRoLCBoZWlnaHQsIGNvbG9yIH0pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTIgOGwtNiA2IDEuNDEgMS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNnpcIlxuICAgIC8+XG4gICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMFYwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQWRkUmVjb21tZW5kYXRpb24gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjM0XCJcbiAgICAgIGhlaWdodD1cIjM0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD17XCJub25lXCJ9IC8+XG4gICAgICA8cGF0aCBkPVwiTTIxIDMuMDFIM2MtMS4xIDAtMiAuOS0yIDJWOWgyVjQuOTloMTh2MTQuMDNIM1YxNUgxdjQuMDFjMCAxLjEuOSAxLjk4IDIgMS45OGgxOGMxLjEgMCAyLS44OCAyLTEuOTh2LTE0YzAtMS4xMS0uOS0yLTItMnpNMTEgMTZsNC00LTQtNHYzSDF2MmgxMHYzelwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZUljb24gPSAoeyBjb2xvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgIGQ9XCJNMTIsMTkuMkM5LjUsMTkuMiA3LjI5LDE3LjkyIDYsMTZDNi4wMywxNCAxMCwxMi45IDEyLDEyLjlDMTQsMTIuOSAxNy45NywxNCAxOCwxNkMxNi43MSwxNy45MiAxNC41LDE5LjIgMTIsMTkuMk0xMiw1QTMsMyAwIDAsMSAxNSw4QTMsMyAwIDAsMSAxMiwxMUEzLDMgMCAwLDEgOSw4QTMsMyAwIDAsMSAxMiw1TTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkMyMiw2LjQ3IDE3LjUsMiAxMiwyWlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uQm94ID0gKHsgd2lkdGggPSBcIjIwcHhcIiwgaGVpZ2h0ID0gXCIyMHB4XCIsIGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgIGQ9XCJNMTEsMThIMTNWMTZIMTFWMThNMTIsNkE0LDQgMCAwLDAgOCwxMEgxMEEyLDIgMCAwLDEgMTIsOEEyLDIgMCAwLDEgMTQsMTBDMTQsMTIgMTEsMTEuNzUgMTEsMTVIMTNDMTMsMTIuNzUgMTYsMTIuNSAxNiwxMEE0LDQgMCAwLDAgMTIsNk01LDNIMTlBMiwyIDAgMCwxIDIxLDVWMTlBMiwyIDAgMCwxIDE5LDIxSDVBMiwyIDAgMCwxIDMsMTlWNUEyLDIgMCAwLDEgNSwzWlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJlbGxpZSA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk0yMSwxOVYyMEgzVjE5TDUsMTdWMTFDNSw3LjkgNy4wMyw1LjE3IDEwLDQuMjlDMTAsNC4xOSAxMCw0LjEgMTAsNEEyLDIgMCAwLDEgMTIsMkEyLDIgMCAwLDEgMTQsNEMxNCw0LjEgMTQsNC4xOSAxNCw0LjI5QzE2Ljk3LDUuMTcgMTksNy45IDE5LDExVjE3TDIxLDE5TTE0LDIxQTIsMiAwIDAsMSAxMiwyM0EyLDIgMCAwLDEgMTAsMjFcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBMb2dvdXRJY29uID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTE0LjA4LDE1LjU5TDE2LjY3LDEzSDdWMTFIMTYuNjdMMTQuMDgsOC40MUwxNS41LDdMMjAuNSwxMkwxNS41LDE3TDE0LjA4LDE1LjU5TTE5LDNBMiwyIDAgMCwxIDIxLDVWOS42N0wxOSw3LjY3VjVINVYxOUgxOVYxNi4zM0wyMSwxNC4zM1YxOUEyLDIgMCAwLDEgMTksMjFINUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNIMTlaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTGVmdEFycm93ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9ezI0fVxuICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGZpbGw9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgZD1cIk0xNCA3bC01IDUgNSA1Vjd6XCIgLz5cbiAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0yNCAwdjI0SDBWMGgyNHpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1vbnRoSWNvbiA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIzcHhcIiwgaGVpZ2h0OiBcIjIzcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk05LDEwVjEySDdWMTBIOU0xMywxMFYxMkgxMVYxMEgxM00xNywxMFYxMkgxNVYxMEgxN00xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5LDE5VjhINVYxOUgxOU05LDE0VjE2SDdWMTRIOU0xMywxNFYxNkgxMVYxNEgxM00xNywxNFYxNkgxNVYxNEgxN1pcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBXZWVrSWNvbiA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIzcHhcIiwgaGVpZ2h0OiBcIjIzcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk02LDFIOFYzSDE2VjFIMThWM0gxOUEyLDIgMCAwLDEgMjEsNVYxOUEyLDIgMCAwLDEgMTksMjFINUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNINlYxTTUsN1YxOUgxOVY3SDVNNyw5SDE3VjExSDdWOVpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBEYXlJY29uID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjNweFwiLCBoZWlnaHQ6IFwiMjNweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTcsMTBIMTJWMTVIN00xOSwxOUg1VjhIMTlNMTksM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQWxsSWNvbiA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIzcHhcIiwgaGVpZ2h0OiBcIjIzcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk0xOSwxOUg1VjhIMTlNMTksM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVBMiwyIDAgMCwwIDE5LDNNMTYuNTMsMTEuMDZMMTUuNDcsMTBMMTAuNTksMTQuODhMOC40NywxMi43Nkw3LjQxLDEzLjgyTDEwLjU5LDE3TDE2LjUzLDExLjA2WlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFN0YXJCb3hJY29uID0gKHsgY29sb3IsIGhlaWdodCwgd2lkdGggfSkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTksM0EyLDIgMCAwLDEgMjEsNVYxOUMyMSwyMC4xMSAyMC4xLDIxIDE5LDIxSDVBMiwyIDAgMCwxIDMsMTlWNUEyLDIgMCAwLDEgNSwzSDE5TTE1LjU4LDE3TDE0LjYzLDEyLjkyTDE3Ljc5LDEwLjE5TDEzLjYyLDkuODNMMTIsNkwxMC4zOCw5Ljg0TDYuMjEsMTAuMkw5LjM3LDEyLjkzTDguNDIsMTdMMTIsMTQuODRMMTUuNTgsMTdaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBJbmZvQ2lyY2xlID0gKHsgY29sb3IgPSBcIiMwMDBcIiwgaGVpZ2h0LCB3aWR0aCB9KSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgICBkPVwiTTEzLDlIMTFWN0gxM00xMywxN0gxMVYxMUgxM00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEJhbm5lZCA9ICh7IGNvbG9yIH0pID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJNMTIsNEE4LDggMCAwLDAgNCwxMkM0LDEzLjg1IDQuNjMsMTUuNTUgNS42OCwxNi45MUwxNi45MSw1LjY4QzE1LjU1LDQuNjMgMTMuODUsNCAxMiw0TTEyLDIwQTgsOCAwIDAsMCAyMCwxMkMyMCwxMC4xNSAxOS4zNyw4LjQ1IDE4LjMyLDcuMDlMNy4wOSwxOC4zMkM4LjQ1LDE5LjM3IDEwLjE1LDIwIDEyLDIwWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/Icons.js */"));
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
  }, ".star-icon.jsx-7440837{width:34px;height:34px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL0ljb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JTyxBQUdzQixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL2NvbXBvbmVudHMvSWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFDYXJldERvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50RWRpdEljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgZD1cIk0yMS43LDEzLjM1TDIwLjcsMTQuMzVMMTguNjUsMTIuM0wxOS42NSwxMS4zQzE5Ljg2LDExLjA5IDIwLjIxLDExLjA5IDIwLjQyLDExLjNMMjEuNywxMi41OEMyMS45MSwxMi43OSAyMS45MSwxMy4xNCAyMS43LDEzLjM1TTEyLDE4Ljk0TDE4LjA2LDEyLjg4TDIwLjExLDE0LjkzTDE0LjA2LDIxSDEyVjE4Ljk0TTEyLDE0QzcuNTgsMTQgNCwxNS43OSA0LDE4VjIwSDEwVjE4LjExTDE0LDE0LjExQzEzLjM0LDE0LjAzIDEyLjY3LDE0IDEyLDE0TTEyLDRBNCw0IDAgMCwwIDgsOEE0LDQgMCAwLDAgMTIsMTJBNCw0IDAgMCwwIDE2LDhBNCw0IDAgMCwwIDEyLDRaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBTcXVhcmVFZGl0SWNvbiA9ICgpID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPVwiIzAwMDAwMFwiXG4gICAgICBkPVwiTTUsM0MzLjg5LDMgMywzLjg5IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlINVY1SDEyVjNINU0xNy43OCw0QzE3LjYxLDQgMTcuNDMsNC4wNyAxNy4zLDQuMkwxNi4wOCw1LjQxTDE4LjU4LDcuOTFMMTkuOCw2LjdDMjAuMDYsNi40NCAyMC4wNiw2IDE5LjgsNS43NUwxOC4yNSw0LjJDMTguMTIsNC4wNyAxNy45NSw0IDE3Ljc4LDRNMTUuMzcsNi4xMkw4LDEzLjVWMTZIMTAuNUwxNy44Nyw4LjYyTDE1LjM3LDYuMTJaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBBZGRMaW5rSWNvbiA9ICgpID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPVwiIzAwMDAwMFwiXG4gICAgICBkPVwiTTcsN0gxMVY5SDdBMywzIDAgMCwwIDQsMTJBMywzIDAgMCwwIDcsMTVIMTFWMTdIN0E1LDUgMCAwLDEgMiwxMkE1LDUgMCAwLDEgNyw3TTE3LDdBNSw1IDAgMCwxIDIyLDEySDIwQTMsMyAwIDAsMCAxNyw5SDEzVjdIMTdNOCwxMUgxNlYxM0g4VjExTTE3LDEySDE5VjE1SDIyVjE3SDE5VjIwSDE3VjE3SDE0VjE1SDE3VjEyWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQWRkSWNvbiA9ICh7IGNvbG9yID0gXCIjMDAwXCIgfSkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEzLDdIMTFWMTFIN1YxM0gxMVYxN0gxM1YxM0gxN1YxMUgxM1Y3WlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgU2V0dGluZ0ljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiNlZWVcIlxuICAgICAgZD1cIk0xMiw4QTQsNCAwIDAsMSAxNiwxMkE0LDQgMCAwLDEgMTIsMTZBNCw0IDAgMCwxIDgsMTJBNCw0IDAgMCwxIDEyLDhNMTIsMTBBMiwyIDAgMCwwIDEwLDEyQTIsMiAwIDAsMCAxMiwxNEEyLDIgMCAwLDAgMTQsMTJBMiwyIDAgMCwwIDEyLDEwTTEwLDIyQzkuNzUsMjIgOS41NCwyMS44MiA5LjUsMjEuNThMOS4xMywxOC45M0M4LjUsMTguNjggNy45NiwxOC4zNCA3LjQ0LDE3Ljk0TDQuOTUsMTguOTVDNC43MywxOS4wMyA0LjQ2LDE4Ljk1IDQuMzQsMTguNzNMMi4zNCwxNS4yN0MyLjIxLDE1LjA1IDIuMjcsMTQuNzggMi40NiwxNC42M0w0LjU3LDEyLjk3TDQuNSwxMkw0LjU3LDExTDIuNDYsOS4zN0MyLjI3LDkuMjIgMi4yMSw4Ljk1IDIuMzQsOC43M0w0LjM0LDUuMjdDNC40Niw1LjA1IDQuNzMsNC45NiA0Ljk1LDUuMDVMNy40NCw2LjA1QzcuOTYsNS42NiA4LjUsNS4zMiA5LjEzLDUuMDdMOS41LDIuNDJDOS41NCwyLjE4IDkuNzUsMiAxMCwySDE0QzE0LjI1LDIgMTQuNDYsMi4xOCAxNC41LDIuNDJMMTQuODcsNS4wN0MxNS41LDUuMzIgMTYuMDQsNS42NiAxNi41Niw2LjA1TDE5LjA1LDUuMDVDMTkuMjcsNC45NiAxOS41NCw1LjA1IDE5LjY2LDUuMjdMMjEuNjYsOC43M0MyMS43OSw4Ljk1IDIxLjczLDkuMjIgMjEuNTQsOS4zN0wxOS40MywxMUwxOS41LDEyTDE5LjQzLDEzTDIxLjU0LDE0LjYzQzIxLjczLDE0Ljc4IDIxLjc5LDE1LjA1IDIxLjY2LDE1LjI3TDE5LjY2LDE4LjczQzE5LjU0LDE4Ljk1IDE5LjI3LDE5LjA0IDE5LjA1LDE4Ljk1TDE2LjU2LDE3Ljk1QzE2LjA0LDE4LjM0IDE1LjUsMTguNjggMTQuODcsMTguOTNMMTQuNSwyMS41OEMxNC40NiwyMS44MiAxNC4yNSwyMiAxNCwyMkgxME0xMS4yNSw0TDEwLjg4LDYuNjFDOS42OCw2Ljg2IDguNjIsNy41IDcuODUsOC4zOUw1LjQ0LDcuMzVMNC42OSw4LjY1TDYuOCwxMC4yQzYuNCwxMS4zNyA2LjQsMTIuNjQgNi44LDEzLjhMNC42OCwxNS4zNkw1LjQzLDE2LjY2TDcuODYsMTUuNjJDOC42MywxNi41IDkuNjgsMTcuMTQgMTAuODcsMTcuMzhMMTEuMjQsMjBIMTIuNzZMMTMuMTMsMTcuMzlDMTQuMzIsMTcuMTQgMTUuMzcsMTYuNSAxNi4xNCwxNS42MkwxOC41NywxNi42NkwxOS4zMiwxNS4zNkwxNy4yLDEzLjgxQzE3LjYsMTIuNjQgMTcuNiwxMS4zNyAxNy4yLDEwLjJMMTkuMzEsOC42NUwxOC41Niw3LjM1TDE2LjE1LDguMzlDMTUuMzgsNy41IDE0LjMyLDYuODYgMTMuMTIsNi42MkwxMi43NSw0SDExLjI1WlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRGlzbGlrZUljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgZD1cIk0xOSwxNUgyM1YzSDE5TTE1LDNINkM1LjE3LDMgNC40NiwzLjUgNC4xNiw0LjIyTDEuMTQsMTEuMjdDMS4wNSwxMS41IDEsMTEuNzQgMSwxMlYxNEEyLDIgMCAwLDAgMywxNkg5LjMxTDguMzYsMjAuNTdDOC4zNCwyMC42NyA4LjMzLDIwLjc3IDguMzMsMjAuODhDOC4zMywyMS4zIDguNSwyMS42NyA4Ljc3LDIxLjk0TDkuODMsMjNMMTYuNDEsMTYuNDFDMTYuNzgsMTYuMDUgMTcsMTUuNTUgMTcsMTVWNUMxNywzLjg5IDE2LjEsMyAxNSwzWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgTGlrZUljb24gPSAoKSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgZD1cIk0yMywxMEMyMyw4Ljg5IDIyLjEsOCAyMSw4SDE0LjY4TDE1LjY0LDMuNDNDMTUuNjYsMy4zMyAxNS42NywzLjIyIDE1LjY3LDMuMTFDMTUuNjcsMi43IDE1LjUsMi4zMiAxNS4yMywyLjA1TDE0LjE3LDFMNy41OSw3LjU4QzcuMjIsNy45NSA3LDguNDUgNyw5VjE5QTIsMiAwIDAsMCA5LDIxSDE4QzE4LjgzLDIxIDE5LjU0LDIwLjUgMTkuODQsMTkuNzhMMjIuODYsMTIuNzNDMjIuOTUsMTIuNSAyMywxMi4yNiAyMywxMlYxME0xLDIxSDVWOUgxVjIxWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoSWNvbiA9ICgpID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPVwiIzYwMzM4ZFwiXG4gICAgICBkPVwiTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEJlbGxJY29uID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPXtcImJlbGwtc3R5bGVcIn1cbiAgICBzdHlsZT17eyB3aWR0aDogXCI1cHhcIiwgaGVpZ2h0OiBcIjVweFwiIH19XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiNlZWVcIlxuICAgICAgZD1cIk0yMSwxOVYyMEgzVjE5TDUsMTdWMTFDNSw3LjkgNy4wMyw1LjE3IDEwLDQuMjlDMTAsNC4xOSAxMCw0LjEgMTAsNEEyLDIgMCAwLDEgMTIsMkEyLDIgMCAwLDEgMTQsNEMxNCw0LjEgMTQsNC4xOSAxNCw0LjI5QzE2Ljk3LDUuMTcgMTksNy45IDE5LDExVjE3TDIxLDE5TTE0LDIxQTIsMiAwIDAsMSAxMiwyM0EyLDIgMCAwLDEgMTAsMjFcIlxuICAgIC8+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5iZWxsLXN0eWxlIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5iZWxsLXN0eWxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBVc2VySWNvbiA9ICgpID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e1widXNlci1pY29uLXN0eWxlXCJ9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk03LjA3LDE4LjI4QzcuNSwxNy4zOCAxMC4xMiwxNi41IDEyLDE2LjVDMTMuODgsMTYuNSAxNi41LDE3LjM4IDE2LjkzLDE4LjI4QzE1LjU3LDE5LjM2IDEzLjg2LDIwIDEyLDIwQzEwLjE0LDIwIDguNDMsMTkuMzYgNy4wNywxOC4yOE0xOC4zNiwxNi44M0MxNi45MywxNS4wOSAxMy40NiwxNC41IDEyLDE0LjVDMTAuNTQsMTQuNSA3LjA3LDE1LjA5IDUuNjQsMTYuODNDNC42MiwxNS41IDQsMTMuODIgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDEzLjgyIDE5LjM4LDE1LjUgMTguMzYsMTYuODNNMTIsNkMxMC4wNiw2IDguNSw3LjU2IDguNSw5LjVDOC41LDExLjQ0IDEwLjA2LDEzIDEyLDEzQzEzLjk0LDEzIDE1LjUsMTEuNDQgMTUuNSw5LjVDMTUuNSw3LjU2IDEzLjk0LDYgMTIsNk0xMiwxMUExLjUsMS41IDAgMCwxIDEwLjUsOS41QTEuNSwxLjUgMCAwLDEgMTIsOEExLjUsMS41IDAgMCwxIDEzLjUsOS41QTEuNSwxLjUgMCAwLDEgMTIsMTFaXCJcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudXNlci1pY29uLXN0eWxlIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC51c2VyLWljb24tc3R5bGUge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFN0YXJJY29uID0gKCkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT1cInN0YXItaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBmaWxsPVwiIzYwMzM4ZFwiIGQ9XCJNMTIsMUw5LDlMMSwxMkw5LDE1TDEyLDIzTDE1LDE1TDIzLDEyTDE1LDlMMTIsMVpcIiAvPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuc3Rhci1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVmlld01vcmUgPSAoeyB3aWR0aCwgY29sb3IsIGhlaWdodCB9KSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgY2xhc3NOYW1lPXtcInZpZXctbW9yZVwifVxuICAgICAgZD1cIk0xMCwyMVYxOUg2LjQxTDEwLjkxLDE0LjVMOS41LDEzLjA5TDUsMTcuNTlWMTRIM1YyMUgxME0xNC41LDEwLjkxTDE5LDYuNDFWMTBIMjFWM0gxNFY1SDE3LjU5TDEzLjA5LDkuNUwxNC41LDEwLjkxWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxuICAgICAgICBkPVwiTTE5LjUsMy4wOUwxNSw3LjU5VjRIMTNWMTFIMjBWOUgxNi40MUwyMC45MSw0LjVMMTkuNSwzLjA5TTQsMTNWMTVINy41OUwzLjA5LDE5LjVMNC41LDIwLjkxTDksMTYuNDFWMjBIMTFWMTNINFpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgTW9yZSA9ICh7IGNvbG9yLCB3aWR0aCA9IFwiMzBcIiwgaGVpZ2h0ID0gXCIzMFwiIH0pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGNsYXNzTmFtZT1cIm1vcmUtaWNvbi1zdHlsZVwiXG4gICAgd2lkdGg9e3dpZHRofVxuICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIHN0eWxlPXt7IGJveFNoYWRvdzogXCIgMCA0cHggMTlweCAwIHJnYmEoMCwwLDAsLjAxKSwgY3Vyc29yIDogcG9pbnRlclwiIH19XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gID5cbiAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9e2NvbG9yID8gY29sb3IgOiBcIiNmZGZkZmRcIn0gLz5cbiAgICA8cGF0aCBkPVwiTTYgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0xMiAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptLTYgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6XCIgLz5cbiAgPC9zdmc+XG4pO1xuZXhwb3J0IGNvbnN0IExhbmRpbmcgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICBpZD1cIkxheWVyXzFcIlxuICAgIGRhdGEtbmFtZT1cIkxheWVyIDFcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTQwMi4wNSAxNzkuOTFcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcbiAgICAgIGQ9XCJNMCwyNzEuNThTMjE3LjIsMTIwLjA5LDQwMy4xMSwxMjAuMDljMTk3Ljk0LDAsNDQyLjQ4LDEzNi40OSw2NTguNDcsMTM2LjQ5czM0MC40OC0xMjAsMzQwLjQ4LTEyMFYzMDBIMFpcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTEyMC4wOSlcIlxuICAgIC8+XG4gICAgPHN0eWxlPlxuICAgICAge2BcbiAgICAuY2xzLTF7XG4gICAgICBmaWxsOiAjZjRmNmY4O1xuICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRodW1iX3VwID0gKHsgY29sb3IsICBoZWlnaHQgPSBcIjM0cHhcIiwgd2lkdGggPSBcIjM0cHhcIiB9KSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJhbmltYXRlLWljb25cIlxuICAgIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn0gXG4gICAgICBkPVwiTTUsOVYyMUgxVjlINU05LDIxQTIsMiAwIDAsMSA3LDE5VjlDNyw4LjQ1IDcuMjIsNy45NSA3LjU5LDcuNTlMMTQuMTcsMUwxNS4yMywyLjA2QzE1LjUsMi4zMyAxNS42NywyLjcgMTUuNjcsMy4xMUwxNS42NCwzLjQzTDE0LjY5LDhIMjFDMjIuMTEsOCAyMyw4LjkgMjMsMTBWMTJDMjMsMTIuMjYgMjIuOTUsMTIuNSAyMi44NiwxMi43M0wxOS44NCwxOS43OEMxOS41NCwyMC41IDE4LjgzLDIxIDE4LDIxSDlNOSwxOUgxOC4wM0wyMSwxMlYxMEgxMi4yMUwxMy4zNCw0LjY4TDksOS4wM1YxOVpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRodW1iX2Rvd24gPSAoeyB3aWR0aCA9IFwiMzRweFwiLCBjb2xvciwgaGVpZ2h0ID0gXCIzNHB4XCIgfSkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTksMTVWM0gyM1YxNUgxOU0xNSwzQTIsMiAwIDAsMSAxNyw1VjE1QzE3LDE1LjU1IDE2Ljc4LDE2LjA1IDE2LjQxLDE2LjQxTDkuODMsMjNMOC43NywyMS45NEM4LjUsMjEuNjcgOC4zMywyMS4zIDguMzMsMjAuODhMOC4zNiwyMC41N0w5LjMxLDE2SDNDMS44OSwxNiAxLDE1LjEgMSwxNFYxMkMxLDExLjc0IDEuMDUsMTEuNSAxLjE0LDExLjI3TDQuMTYsNC4yMkM0LjQ2LDMuNSA1LjE3LDMgNiwzSDE1TTE1LDVINS45N0wzLDEyVjE0SDExLjc4TDEwLjY1LDE5LjMyTDE1LDE0Ljk3VjVaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBJbnNlcnRMaW5rID0gcHJvcHMgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e3Byb3BzLmNvbG9yfVxuICAgICAgZD1cIk0zLjksMTJDMy45LDEwLjI5IDUuMjksOC45IDcsOC45SDExVjdIN0E1LDUgMCAwLDAgMiwxMkE1LDUgMCAwLDAgNywxN0gxMVYxNS4xSDdDNS4yOSwxNS4xIDMuOSwxMy43MSAzLjksMTJNOCwxM0gxNlYxMUg4VjEzTTE3LDdIMTNWOC45SDE3QzE4LjcxLDguOSAyMC4xLDEwLjI5IDIwLjEsMTJDMjAuMSwxMy43MSAxOC43MSwxNS4xIDE3LDE1LjFIMTNWMTdIMTdBNSw1IDAgMCwwIDIyLDEyQTUsNSAwIDAsMCAxNyw3WlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgTGFuZGluZ1N2ZyA9ICgpID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDAyLjA1IDE3OS45MVwiPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXG4gICAgICBkYXRhLW5hbWU9XCJMYXllciAyXCJcbiAgICAgIGQ9XCJNMCwyOC40MlMyMTcuMiwxNzkuOTEsNDAzLjExLDE3OS45MWMxOTcuOTQsMCw0NDIuNDgtMTM2LjQ5LDY1OC40Ny0xMzYuNDlzMzQwLjQ4LDEyMCwzNDAuNDgsMTIwVjBIMFpcIlxuICAgIC8+XG4gICAgPHN0eWxlPlxuICAgICAge2BcbiAgIC5jbHMtMXtcbiAgICAgZmlsbDogI2ZkZmRmZDtcbiAgIH1cblxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQ2FyZERvd25BcnJvdyA9ICh7IHdpZHRoLCBoZWlnaHQsIGNvbG9yIH0pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNNy40MSA4LjU5TDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNiAxLjQxLTEuNDF6XCJcbiAgICAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IENhcmRVcEFycm93ID0gKHsgd2lkdGgsIGhlaWdodCwgY29sb3IgfSkgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9e3dpZHRofVxuICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgZD1cIk0xMiA4bC02IDYgMS40MSAxLjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02elwiXG4gICAgLz5cbiAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBBZGRSZWNvbW1lbmRhdGlvbiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMzRcIlxuICAgICAgaGVpZ2h0PVwiMzRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPXtcIm5vbmVcIn0gLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjEgMy4wMUgzYy0xLjEgMC0yIC45LTIgMlY5aDJWNC45OWgxOHYxNC4wM0gzVjE1SDF2NC4wMWMwIDEuMS45IDEuOTggMiAxLjk4aDE4YzEuMSAwIDItLjg4IDItMS45OHYtMTRjMC0xLjExLS45LTItMi0yek0xMSAxNmw0LTQtNC00djNIMXYyaDEwdjN6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlSWNvbiA9ICh7IGNvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk0xMiwxOS4yQzkuNSwxOS4yIDcuMjksMTcuOTIgNiwxNkM2LjAzLDE0IDEwLDEyLjkgMTIsMTIuOUMxNCwxMi45IDE3Ljk3LDE0IDE4LDE2QzE2LjcxLDE3LjkyIDE0LjUsMTkuMiAxMiwxOS4yTTEyLDVBMywzIDAgMCwxIDE1LDhBMywzIDAgMCwxIDEyLDExQTMsMyAwIDAsMSA5LDhBMywzIDAgMCwxIDEyLDVNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQzIyLDYuNDcgMTcuNSwyIDEyLDJaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUXVlc3Rpb25Cb3ggPSAoeyB3aWR0aCA9IFwiMjBweFwiLCBoZWlnaHQgPSBcIjIwcHhcIiwgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPXtjb2xvcn1cbiAgICAgICAgZD1cIk0xMSwxOEgxM1YxNkgxMVYxOE0xMiw2QTQsNCAwIDAsMCA4LDEwSDEwQTIsMiAwIDAsMSAxMiw4QTIsMiAwIDAsMSAxNCwxMEMxNCwxMiAxMSwxMS43NSAxMSwxNUgxM0MxMywxMi43NSAxNiwxMi41IDE2LDEwQTQsNCAwIDAsMCAxMiw2TTUsM0gxOUEyLDIgMCAwLDEgMjEsNVYxOUEyLDIgMCAwLDEgMTksMjFINUEyLDIgMCAwLDEgMywxOVY1QTIsMiAwIDAsMSA1LDNaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQmVsbGllID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTIxLDE5VjIwSDNWMTlMNSwxN1YxMUM1LDcuOSA3LjAzLDUuMTcgMTAsNC4yOUMxMCw0LjE5IDEwLDQuMSAxMCw0QTIsMiAwIDAsMSAxMiwyQTIsMiAwIDAsMSAxNCw0QzE0LDQuMSAxNCw0LjE5IDE0LDQuMjlDMTYuOTcsNS4xNyAxOSw3LjkgMTksMTFWMTdMMjEsMTlNMTQsMjFBMiwyIDAgMCwxIDEyLDIzQTIsMiAwIDAsMSAxMCwyMVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IExvZ291dEljb24gPSAoeyBjb2xvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgIGQ9XCJNMTQuMDgsMTUuNTlMMTYuNjcsMTNIN1YxMUgxNi42N0wxNC4wOCw4LjQxTDE1LjUsN0wyMC41LDEyTDE1LjUsMTdMMTQuMDgsMTUuNTlNMTksM0EyLDIgMCAwLDEgMjEsNVY5LjY3TDE5LDcuNjdWNUg1VjE5SDE5VjE2LjMzTDIxLDE0LjMzVjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUMzLDMuODkgMy44OSwzIDUsM0gxOVpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBMZWZ0QXJyb3cgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17MjR9XG4gICAgICBoZWlnaHQ9ezI0fVxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZmlsbD1cInJnYig5MSwgNTYsIDE0MSlcIiBkPVwiTTE0IDdsLTUgNSA1IDVWN3pcIiAvPlxuICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTI0IDB2MjRIMFYwaDI0elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTW9udGhJY29uID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjNweFwiLCBoZWlnaHQ6IFwiMjNweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTksMTBWMTJIN1YxMEg5TTEzLDEwVjEySDExVjEwSDEzTTE3LDEwVjEySDE1VjEwSDE3TTE5LDNBMiwyIDAgMCwxIDIxLDVWMTlBMiwyIDAgMCwxIDE5LDIxSDVDMy44OSwyMSAzLDIwLjEgMywxOVY1QTIsMiAwIDAsMSA1LDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTksMTlWOEg1VjE5SDE5TTksMTRWMTZIN1YxNEg5TTEzLDE0VjE2SDExVjE0SDEzTTE3LDE0VjE2SDE1VjE0SDE3WlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFdlZWtJY29uID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjNweFwiLCBoZWlnaHQ6IFwiMjNweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTYsMUg4VjNIMTZWMUgxOFYzSDE5QTIsMiAwIDAsMSAyMSw1VjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUMzLDMuODkgMy44OSwzIDUsM0g2VjFNNSw3VjE5SDE5VjdINU03LDlIMTdWMTFIN1Y5WlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IERheUljb24gPSAoeyBjb2xvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyM3B4XCIsIGhlaWdodDogXCIyM3B4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD17Y29sb3J9XG4gICAgICAgIGQ9XCJNNywxMEgxMlYxNUg3TTE5LDE5SDVWOEgxOU0xOSwzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM1pcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBBbGxJY29uID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgc3R5bGU9e3sgd2lkdGg6IFwiMjNweFwiLCBoZWlnaHQ6IFwiMjNweFwiIH19IHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICBkPVwiTTE5LDE5SDVWOEgxOU0xOSwzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUEyLDIgMCAwLDAgMTksM00xNi41MywxMS4wNkwxNS40NywxMEwxMC41OSwxNC44OEw4LjQ3LDEyLjc2TDcuNDEsMTMuODJMMTAuNTksMTdMMTYuNTMsMTEuMDZaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgU3RhckJveEljb24gPSAoeyBjb2xvciwgaGVpZ2h0LCB3aWR0aCB9KSA9PiAoXG4gIDxzdmcgc3R5bGU9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgZD1cIk0xOSwzQTIsMiAwIDAsMSAyMSw1VjE5QzIxLDIwLjExIDIwLjEsMjEgMTksMjFINUEyLDIgMCAwLDEgMywxOVY1QTIsMiAwIDAsMSA1LDNIMTlNMTUuNTgsMTdMMTQuNjMsMTIuOTJMMTcuNzksMTAuMTlMMTMuNjIsOS44M0wxMiw2TDEwLjM4LDkuODRMNi4yMSwxMC4yTDkuMzcsMTIuOTNMOC40MiwxN0wxMiwxNC44NEwxNS41OCwxN1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEluZm9DaXJjbGUgPSAoeyBjb2xvciA9IFwiIzAwMFwiLCBoZWlnaHQsIHdpZHRoIH0pID0+IChcbiAgPHN2ZyBzdHlsZT17eyB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIgfX0gdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAgIGQ9XCJNMTMsOUgxMVY3SDEzTTEzLDE3SDExVjExSDEzTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgQmFubmVkID0gKHsgY29sb3IgfSkgPT4gKFxuICA8c3ZnIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiB9fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgZD1cIk0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQTEwLDEwIDAgMCwxIDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMiw0QTgsOCAwIDAsMCA0LDEyQzQsMTMuODUgNC42MywxNS41NSA1LjY4LDE2LjkxTDE2LjkxLDUuNjhDMTUuNTUsNC42MyAxMy44NSw0IDEyLDRNMTIsMjBBOCw4IDAgMCwwIDIwLDEyQzIwLDEwLjE1IDE5LjM3LDguNDUgMTguMzIsNy4wOUw3LjA5LDE4LjMyQzguNDUsMTkuMzcgMTAuMTUsMjAgMTIsMjBaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/Icons.js */"));
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

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_headerForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/headerForm */ "./utils/headerForm.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Icons */ "./components/Icons.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_21__);














 //import Bell from "../utils/bell";








var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_21___default()(_config_config__WEBPACK_IMPORTED_MODULE_20__["default"]);

var Badgie = function Badgie(props) {
  //handles the notification and badge
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "secondary",
    badgeContent: props.numOfNotifications || 0
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
    className: "jsx-3371798987" + " " + "far fa-bell icon-bell"
  })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "3371798987"
  }, ".icon-bell.jsx-3371798987{color:rgb(91,56,141) !important;background-color:rbg(91,56,141) !important;font-size:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1MsQUFHK0MsZ0NBQ1csMkNBQzlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWRlckZvcm0gZnJvbSBcIi4uL3V0aWxzL2hlYWRlckZvcm1cIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCI7XG4vL2ltcG9ydCBCZWxsIGZyb20gXCIuLi91dGlscy9iZWxsXCI7XG5pbXBvcnQgQmFkZ2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCI7XG5pbXBvcnQge1xuICBVc2VySWNvbixcbiAgU3Rhckljb24sXG4gIFByb2ZpbGVJY29uLFxuICBRdWVzdGlvbkJveCxcbiAgQmVsbGllLFxuICBMb2dvdXRJY29uXG59IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUG9wdXAsIEZlZWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7XG4gIEdFVF9VU0VSX0tBUk1BLFxuICBHRVRfVVNFUl9OT1RJRklDQVRJT04sXG4gIFVTRVJfSEFTX1NFRU5fTk9USUZJQ0FUSU9OXG59IGZyb20gXCIuLi9hcGlSZXF1ZXN0cy9hcGlSZXF1ZXN0c1wiO1xuaW1wb3J0IEFQSV9VUkwgZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuY29uc3Qgc29ja2V0ID0gaW8oQVBJX1VSTCk7XG5cbmNvbnN0IEJhZGdpZSA9IGZ1bmN0aW9uIEJhZGdpZShwcm9wcykge1xuICAvL2hhbmRsZXMgdGhlIG5vdGlmaWNhdGlvbiBhbmQgYmFkZ2VcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8QmFkZ2UgY29sb3I9XCJzZWNvbmRhcnlcIiBiYWRnZUNvbnRlbnQ9e3Byb3BzLm51bU9mTm90aWZpY2F0aW9ucyB8fCAwfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWJlbGwgaWNvbi1iZWxsXCIgLz5cblxuICAgICAgICB7Lyo8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImljb24tYmVsbFwiIGljb249e2ZhQmVsbH0gLz4gKi99XG4gICAgICA8L0JhZGdlPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuaWNvbi1iZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByYmcoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgQ2hpcGllOiBmYWxzZSxcbiAgICBkYXRhOiBcIlwiLFxuICAgIHNlZW46IGZhbHNlXG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc29ja2V0Lm9uKFwidXNlcl92aWV3ZWRfbm90aWZpY2F0aW9uXCIsIGRhdGEgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLCBcIiBJIGFtIGhlcmUgbmFcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VlbjogZGF0YS52aWV3ZWRcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm51bU9mTm90aWZpY2F0aW9ucyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG51bU9mTm90aWZpY2F0aW9uczogdGhpcy5zdGF0ZS5udW1PZk5vdGlmaWNhdGlvbnMgLSAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoZWNrVXNlcigpO1xuICAgIHRoaXMuZmV0Y2hVc2VyS2FybWEoKTtcbiAgICB0aGlzLmZldGNoVXNlck5vdGlmaWNhdGlvbigpO1xuICB9XG5cbiAgZmV0Y2hVc2VyS2FybWEgPSAoKSA9PiB7XG4gICAgbGV0IF9kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgaWYgKF9kYXRhKSB7XG4gICAgICBHRVRfVVNFUl9LQVJNQShfZGF0YS5faWQpXG4gICAgICAgIC50aGVuKGF4aW9zUmVzID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhheGlvc1Jlcy5kYXRhLmthcm1hKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVzZXJLYXJtYTogYXhpb3NSZXMuZGF0YS5rYXJtYVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZmV0Y2hVc2VyTm90aWZpY2F0aW9uID0gKCkgPT4ge1xuICAgIGxldCBfZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIGlmIChfZGF0YSkge1xuICAgICAgR0VUX1VTRVJfTk9USUZJQ0FUSU9OKF9kYXRhLl9pZClcbiAgICAgICAgLnRoZW4oYXhpb3NSZXNwb25zZSA9PiB7XG4gICAgICAgICAgbGV0IF9udW0gPSBheGlvc1Jlc3BvbnNlLmRhdGEudmlld2VkID8gMCA6IDE7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhheGlvc1Jlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9uKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbjogYXhpb3NSZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgIG51bU9mTm90aWZpY2F0aW9uczogX251bSxcbiAgICAgICAgICAgIHNlZW46IGF4aW9zUmVzcG9uc2UuZGF0YS52aWV3ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tVc2VyID0gKCkgPT4ge1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgLy9sZXQgaXNSZWdpc3RlcmVkID0gdHJ1ZSAvL2Zha2UgY2hlY2s7XG5cbiAgICBpZiAoZGF0YSAhPT0gXCJcIiAmJiBkYXRhICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgQ2hpcGllOiB0cnVlLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU2Vlbk5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUubnVtT2ZOb3RpZmljYXRpb25zICE9PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgbnVtT2ZOb3RpZmljYXRpb25zOiB0aGlzLnN0YXRlLm51bU9mTm90aWZpY2F0aW9ucyAtIDFcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG5cbiAgICAgICAgICAgIFVTRVJfSEFTX1NFRU5fTk9USUZJQ0FUSU9OKHNvY2tldC5pZCwgZGF0YS5faWQpXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUxvZ291dCA9IGUgPT4ge1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KFwiWW8gZG8gbm90aGluZ1wiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcl90b2tlblwiKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8gVXNlckhhc1NlZW4gPSBteURhdGEgPT4ge1xuICAvLyAgIHZhciBzZXRJdDtcbiAgLy8gICBmb3IgKGxldCBpdGVtIGluIG15RGF0YSkge1xuICAvLyAgICAgaWYgKGl0ZW0uc2VlbiA9PT0gZmFsc2UpIHtcbiAgLy8gICAgICAgc2V0SXQgPSB0cnVlO1xuICAvLyAgICAgICBpdGVtLnNlZW4gPSBzZXRJdDtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgdmFyIF9sZW4gPSBteURhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAvLyAgICAgcmV0dXJuIGl0ZW0uc2VlbiAhPT0gZmFsc2U7XG4gIC8vICAgfSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBsZW46IF9sZW4ubGVuZ3RoXG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIENoaXBpZSxcbiAgICAgIGRhdGEsXG4gICAgICB1c2VyS2FybWEsXG4gICAgICBub3RpZmljYXRpb24sXG4gICAgICBudW1PZk5vdGlmaWNhdGlvbnMsXG4gICAgICBzZWVuLFxuICAgICAgdmlld2VkXG4gICAgfSA9IHRoaXMuc3RhdGU7IC8vIEkgbG92ZSBkZXN0cnVjdHVyaW5nXG5cbiAgICBpZiAoIUNoaXBpZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0eWxlXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9uZXctaWNvbi5wbmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9XCI2MHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlci1mb3JtLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlckZvcm0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSAvPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJub3QtbG9naW4tYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuU2lnbnVwKCl9PkdldCBzdGFydGVkPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm90LXNpZ251cC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5Mb2dpbigpfT5TaWduIGluPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItY2FsbC10by1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFkZXItYnRuLWFza1wiPkFkZCBRdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNi41dnc7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5uYXZiYXItc3R5bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDsgLyojZjZmNGY5ZGU7Ki9cbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAycHggLTJweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdWwgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRlci1mb3JtLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTN2dztcbiAgICAgICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubm90LWxvZ2luLWFjdGlvbiBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDF2dztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwLjZ2dztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5ub3Qtc2lnbnVwLWFjdGlvbiBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogNHZ3O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig5MSwgNTYsIDE0MSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDAuNnZ3O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkZXItY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3LjV2dztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkZXItYnRuLWFzayB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmRmZGZkO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgKHdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAgICAgLmhlYWRlci1jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5oZWFkZXItYnRuLWFzayB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5oZWFkZXItZm9ybS1zdHlsZSB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAtMjNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28tc3R5bGUge1xuICAgICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ub3QtbG9naW4tYWN0aW9uIGEge1xuICAgICAgICAgICAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDQxdnc7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuMnZ3O1xuICAgICAgICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAwLjAwMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubm90LXNpZ251cC1hY3Rpb24gYSB7XG4gICAgICAgICAgICAgICAgICB0b3A6IC0yNXB4O1xuICAgICAgICAgICAgICAgICAgbGVmdDogNDB2dztcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4ydnc7XG4gICAgICAgICAgICAgICAgICB3b3JkLXNwYWNpbmc6IDAuMDAxZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5hdmJhci1zdHlsZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkOyAvKkkgbG92ZSB0aGlzIGNvbG9yICNkN2NkZTAqL1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0eWxlXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ28tc3R5bGVcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbmV3LWljb24ucG5nXCIgYWx0PVwibG9nb1wiIHdpZHRoPVwiNjBweFwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuY2hvci1zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCYWRnaWUgbnVtT2ZOb3RpZmljYXRpb25zPXtudW1PZk5vdGlmaWNhdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxCYWRnaWUgbnVtT2ZOb3RpZmljYXRpb25zPXtsZW59IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW4tbm90aWZpY2F0aW9uXCI+Tm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlU2Vlbk5vdGlmaWNhdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PntzZWVuID8gXCJOb25lIHlldFwiIDogbm90aWZpY2F0aW9ufTwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgaGlkZU9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZjBlZmY1XCIsIHpJbmRleDogOTAwMCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwia2FybWEtc3R5bGVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXIgaWNvbi1iZWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLWNvaW5cIj5Db2luczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckthcm1hID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+e3VzZXJLYXJtYX08L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOb3RoaW5nIHlldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgIGhpZGVPblNjcm9sbFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2YwZWZmNVwiLCB6SW5kZXg6IDkwMDAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlci1mb3JtLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxIZWFkZXJGb3JtIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZmlsZS1pY29uLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxVc2VySWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbm5lci1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2ZpbGUvJHt0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZmlsZS8ke3RoaXMuc3RhdGUuZGF0YS51c2VybmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvci1zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUljb24gY29sb3I9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXRleHRcIj5Qcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubmVyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkJveCBjb2xvcj1cInJnYig5MSwgNTYsIDE0MSlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tdGV4dFwiPlF1ZXN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubmVyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCZWxsaWUgY29sb3I9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXRleHRcIj5Ob3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImlubmVyLWxpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJhZGQtY3Vyc29yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlTG9nb3V0KGUpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb3V0SWNvbiBjb2xvcj1cInJnYig5MSwgNTYsIDE0MSlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi10ZXh0XCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICBoaWRlT25TY3JvbGxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSBjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2YwZWZmNVwiLCB6SW5kZXg6IDkwMDAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItY2FsbC10by1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc2tcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlYWRlci1idG4tYXNrXCI+QWRkIFF1ZXN0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcblxuICAgICAgICAgICAgLmljb24tYmVsbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbm5lci1saXN0IHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlIDogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIHNwYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogIzU4NjQ3YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4uaWNvbi10ZXh0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wIDogLTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5jaG9yLXN0eWxlIHtcbiAgICAgICAgICAgICAgY3Vyc29yIDogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwYW4tY29pbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDEuMDQ7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQgOiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yIDogIzY2NjtcbiAgICAgICAgICAgICAgcGFkZGluZyA6IDAgNHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3AgOiAtMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkLWN1cnNvciB7XG4gICAgICAgICAgICAgIGN1cnNvciA6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvciA6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHkgOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3Bhbi1ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemUgOiAxLjA0O1xuICAgICAgICAgICAgICBmb250LWZhbWlseSA6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xuICAgICAgICAgICAgICBjb2xvciA6ICM2NjY7XG4gICAgICAgICAgICAgIHBhZGRpbmcgOiAwIDJweDtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wIDogMnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZiYXItc3R5bGUge1xuICAgICAgICAgICAgICBkaXNwbGF5IDogZmxleDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDsgLyojZjZmNGY5ZGU7Ki9cbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgICAgICB0b3AgOiAwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdCA6IDQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICBmbG9hdCA6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3AgOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nIDogMHB4IDVweDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC5oZWFkZXItY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogMzBweDtcbiAgICAgICAgICAgICAgdG9wIDogLTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogLTIyMHB4O1xuICAgICAgICAgICAgICB0b3AgOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmthcm1hLXN0eWxlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdCA6IC03MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5IDogYmxvY2s7XG4gICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24tc3R5bGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogLTkwcHg7XG4gICAgICAgICAgICAgIHRvcCA6IDFweDtcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uLXN0eWxlIGxpIGEge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQgOiAtMTEwcHg7XG4gICAgICAgICAgICAgIHRvcCA6IC0xNXB4O1xuICAgICAgICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXItZm9ybS1zdHlsZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQgOiAtNzVweDtcbiAgICAgICAgICAgICAgdG9wIDogLTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlci1idG4tYXNrIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZCA6IHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgIGNvbG9yIDogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGUgLnByb2ZpbGUge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTB2dztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIHRvcDogOTUlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2ZpbGUtaWNvbi1zdHlsZSAucHJvZmlsZTo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2ZpbGUtaWNvbi1zdHlsZTpob3ZlciAucHJvZmlsZSB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24tc3R5bGUgLndvcmsge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB0b3A6IDk2JTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdHlsZSAud29yazo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdHlsZTpob3ZlciAud29yayB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rYXJtYS1zdHlsZSAud29yayB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIHRvcDogNjUlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmthcm1hLXN0eWxlIC53b3JrOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua2FybWEtc3R5bGU6aG92ZXIgLndvcmsge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAuaGVhZGVyLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVhZGVyLWJ0bi1hc2sge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5rYXJtYS1zdHlsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdHlsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRlci1mb3JtLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XG4gICAgICAgICAgICAgICAgdG9wIDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJvZmlsZS1pY29uLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0IDogMzB2dztcbiAgICAgICAgICAgICAgICB0b3AgOiAtMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggOiA0MTFweCkge1xuICAgICAgICAgICAgICAucHJvZmlsZS1pY29uLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0IDogNDB2dztcbiAgICAgICAgICAgICAgICB0b3AgOiAtMzVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlci1mb3JtLXN0eWxlIHtcbiAgICAgICAgICAgICAgbGVmdDogLTg1cHg7XG4gICAgICAgICAgICAgIHRvcCA6IDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoIDozNzVweCl7XG4gICAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGV7XG4gICAgICAgICAgICAgICAgbGVmdCA6IDM4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3AgOiAtMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/Navbar.js */"));
};

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NavBar, _React$Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      Chipie: false,
      data: "",
      seen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "fetchUserKarma", function () {
      var _data = JSON.parse(localStorage.getItem("user_details"));

      if (_data) {
        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_19__["GET_USER_KARMA"])(_data._id).then(function (axiosRes) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "fetchUserNotification", function () {
      var _data = JSON.parse(localStorage.getItem("user_details"));

      if (_data) {
        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_19__["GET_USER_NOTIFICATION"])(_data._id).then(function (axiosResponse) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "checkUser", function () {
      var data = JSON.parse(localStorage.getItem("user_details")); //let isRegistered = true //fake check;

      if (data !== "" && data !== null) {
        _this.setState({
          Chipie: true,
          data: data
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSeenNotifications", function () {
      var data = JSON.parse(localStorage.getItem("user_details"));

      if (data) {
        if (_this.state.numOfNotifications !== 0) {
          _this.setState({
            numOfNotifications: _this.state.numOfNotifications - 1
          }, function () {
            var data = JSON.parse(localStorage.getItem("user_details"));
            Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_19__["USER_HAS_SEEN_NOTIFICATION"])(socket.id, data._id).then(function (res) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleLogout", function (e) {
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        if (e) {
          resolve(localStorage.removeItem("user_details"));
        } else {
          reject("Yo do nothing");
        }
      }).then(function () {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/");
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(NavBar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("nav", {
          className: "jsx-2081961410" + " " + "navbar-style"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
          className: "jsx-2081961410"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "logo-style"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          prefetch: true,
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
          src: "/static/new-icon.png",
          alt: "logo",
          width: "60px",
          className: "jsx-2081961410"
        }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "header-form-style"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_utils_headerForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
          data: this.props.data
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "not-login-action"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          onClick: function onClick() {
            return _this3.props.openSignup();
          },
          className: "jsx-2081961410"
        }, "Get started")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "not-signup-action"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          onClick: function onClick() {
            return _this3.props.openLogin();
          },
          className: "jsx-2081961410"
        }, "Sign in")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-2081961410" + " " + "header-call-to-action"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/ask"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          className: "jsx-2081961410" + " " + "header-btn-ask"
        }, "Add Question"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "2081961410"
        }, ".logo-style.jsx-2081961410{position:relative;top:-10px;left:-6.5vw;cursor:pointer;}.navbar-style.jsx-2081961410{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fdfdfd;width:100%;height:58px;box-sizing:border-box;box-shadow:0 3px 2px -2px rgba(200,200,200,0.4);position:fixed;margin-bottom:50px;z-index:2000;top:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;}ul.jsx-2081961410{box-sizing:border-box;display:inline-block;position:relative;top:11px;left:-40px;}ul.jsx-2081961410 li.jsx-2081961410{list-style-type:none;float:left;padding:0px 5px;}.header-form-style.jsx-2081961410{position:relative;left:-3vw;top:-1px;}.not-login-action.jsx-2081961410 a.jsx-2081961410{position:relative;left:01vw;font-weight:800;color:rgb(91,56,141) !important;top:0.6vw;font-size:1.2em;cursor:pointer;}.not-signup-action.jsx-2081961410 a.jsx-2081961410{position:relative;left:4vw;font-weight:600;color:rgb(91,56,141) !important;top:0.6vw;cursor:pointer;}.header-call-to-action.jsx-2081961410{position:relative;left:7.5vw;}.header-btn-ask.jsx-2081961410{position:relative;min-width:130px !important;outline:none !important;height:35px !important;font-size:1em;font-weight:600;border-radius:3px !important;background:rgb(96,51,141);color:#fdfdfd;text-align:center !important;padding:0px 5px !important;outline:0 !important;cursor:pointer;border:1px solid rgb(96,51,141);}@media (width:360px){.logo-style.jsx-2081961410{margin-left:4px;top:-12px;}}@media screen and (max-width:720px){.header-call-to-action.jsx-2081961410{display:none;}.header-btn-ask.jsx-2081961410{display:none;}.header-form-style.jsx-2081961410{left:-23px;}.logo-style.jsx-2081961410{left:-10px;top:-12px;}.not-login-action.jsx-2081961410 a.jsx-2081961410{top:-25px;left:41vw;font-size:4.2vw;word-spacing:0.001em;}.not-signup-action.jsx-2081961410 a.jsx-2081961410{top:-25px;left:40vw;font-size:4.2vw;word-spacing:0.001em;}.navbar-style.jsx-2081961410{background:#fdfdfd;width:100%;height:58px;box-sizing:border-box;box-shadow:0 3px 2px -2px rgba(200,200,200,0.2);position:fixed;margin-bottom:50px;z-index:2000;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwT2EsQUFHbUMsQUFNTCxBQWVTLEFBUUQsQUFNSCxBQU1BLEFBVUEsQUFTQSxBQUtBLEFBa0JBLEFBT0gsQUFJQSxBQUlGLEFBR0EsQUFLRCxBQU1BLEFBT1MsVUFaVCxBQU1BLENBZFosQUFHWSxFQVhaLEFBSUEsR0FYWSxFQW5GRixBQW1DQSxBQU1BLEFBVUQsQUFTRSxBQUtnQixDQXNEZCxDQVpLLEFBTUEsQ0FwRlAsQUF5RVgsQ0FqRnFCLElBK0RyQixDQWhDZ0IsQ0FuREosQUFtQ0gsQUFNTyxDQW1CbEIsQ0EyRGdCLEVBMUZFLElBOEVPLEFBTUEsQ0E3RXpCLEdBbkNpQixFQXVIUyxDQW5HTixBQStCZ0IsQ0FWQSxDQXVCVixHQW5DMUIsT0E1QkEsRUEwR0UsQUFNQSxJQTVGUyxHQW1HNEMsS0F2RDlCLENBM0NaLElBbEJRLENBZ0RULENBVkEsS0FuQlosSUE4QmlCLENBVkMsTUF1QkYsQ0E3REgsT0FpRGIsRUFWaUIsRUF0Q0gsRUE2REksTUFzREMsSUFsSEssQ0FzQ3hCLEtBdUIrQixLQXNEUixXQWxIOEIsUUFtSHBDLEtBdERhLFFBdUQ1QixrQkF0RGMsU0E3REMsS0E4RGMsVUE3RFYsbUJBQ04sQUE2RGMsYUE1RHJCLE1BQ2lCLFFBNERGLHFCQUNOLGVBQ21CLGdDQUNwQyx1QkE5RGtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkZXJGb3JtIGZyb20gXCIuLi91dGlscy9oZWFkZXJGb3JtXCI7XG5pbXBvcnQgQ2hpcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcFwiO1xuLy9pbXBvcnQgQmVsbCBmcm9tIFwiLi4vdXRpbHMvYmVsbFwiO1xuaW1wb3J0IEJhZGdlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiO1xuaW1wb3J0IHtcbiAgVXNlckljb24sXG4gIFN0YXJJY29uLFxuICBQcm9maWxlSWNvbixcbiAgUXVlc3Rpb25Cb3gsXG4gIEJlbGxpZSxcbiAgTG9nb3V0SWNvblxufSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBvcHVwLCBGZWVkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQge1xuICBHRVRfVVNFUl9LQVJNQSxcbiAgR0VUX1VTRVJfTk9USUZJQ0FUSU9OLFxuICBVU0VSX0hBU19TRUVOX05PVElGSUNBVElPTlxufSBmcm9tIFwiLi4vYXBpUmVxdWVzdHMvYXBpUmVxdWVzdHNcIjtcbmltcG9ydCBBUElfVVJMIGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmNvbnN0IHNvY2tldCA9IGlvKEFQSV9VUkwpO1xuXG5jb25zdCBCYWRnaWUgPSBmdW5jdGlvbiBCYWRnaWUocHJvcHMpIHtcbiAgLy9oYW5kbGVzIHRoZSBub3RpZmljYXRpb24gYW5kIGJhZGdlXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCIgYmFkZ2VDb250ZW50PXtwcm9wcy5udW1PZk5vdGlmaWNhdGlvbnMgfHwgMH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1iZWxsIGljb24tYmVsbFwiIC8+XG5cbiAgICAgICAgey8qPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJpY29uLWJlbGxcIiBpY29uPXtmYUJlbGx9IC8+ICovfVxuICAgICAgPC9CYWRnZT5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmljb24tYmVsbCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDkxLCA1NiwgMTQxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmJnKDkxLCA1NiwgMTQxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIENoaXBpZTogZmFsc2UsXG4gICAgZGF0YTogXCJcIixcbiAgICBzZWVuOiBmYWxzZVxuICB9O1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNvY2tldC5vbihcInVzZXJfdmlld2VkX25vdGlmaWNhdGlvblwiLCBkYXRhID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coZGF0YSwgXCIgSSBhbSBoZXJlIG5hXCIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlZW46IGRhdGEudmlld2VkXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5udW1PZk5vdGlmaWNhdGlvbnMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBudW1PZk5vdGlmaWNhdGlvbnM6IHRoaXMuc3RhdGUubnVtT2ZOb3RpZmljYXRpb25zIC0gMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVja1VzZXIoKTtcbiAgICB0aGlzLmZldGNoVXNlckthcm1hKCk7XG4gICAgdGhpcy5mZXRjaFVzZXJOb3RpZmljYXRpb24oKTtcbiAgfVxuXG4gIGZldGNoVXNlckthcm1hID0gKCkgPT4ge1xuICAgIGxldCBfZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIGlmIChfZGF0YSkge1xuICAgICAgR0VUX1VTRVJfS0FSTUEoX2RhdGEuX2lkKVxuICAgICAgICAudGhlbihheGlvc1JlcyA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYXhpb3NSZXMuZGF0YS5rYXJtYSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1c2VyS2FybWE6IGF4aW9zUmVzLmRhdGEua2FybWFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGZldGNoVXNlck5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgX2RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICBpZiAoX2RhdGEpIHtcbiAgICAgIEdFVF9VU0VSX05PVElGSUNBVElPTihfZGF0YS5faWQpXG4gICAgICAgIC50aGVuKGF4aW9zUmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBfbnVtID0gYXhpb3NSZXNwb25zZS5kYXRhLnZpZXdlZCA/IDAgOiAxO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coYXhpb3NSZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBub3RpZmljYXRpb246IGF4aW9zUmVzcG9uc2UuZGF0YS5ub3RpZmljYXRpb24sXG4gICAgICAgICAgICBudW1PZk5vdGlmaWNhdGlvbnM6IF9udW0sXG4gICAgICAgICAgICBzZWVuOiBheGlvc1Jlc3BvbnNlLmRhdGEudmlld2VkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNoZWNrVXNlciA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIC8vbGV0IGlzUmVnaXN0ZXJlZCA9IHRydWUgLy9mYWtlIGNoZWNrO1xuXG4gICAgaWYgKGRhdGEgIT09IFwiXCIgJiYgZGF0YSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIENoaXBpZTogdHJ1ZSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVNlZW5Ob3RpZmljYXRpb25zID0gKCkgPT4ge1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm51bU9mTm90aWZpY2F0aW9ucyAhPT0gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG51bU9mTm90aWZpY2F0aW9uczogdGhpcy5zdGF0ZS5udW1PZk5vdGlmaWNhdGlvbnMgLSAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuXG4gICAgICAgICAgICBVU0VSX0hBU19TRUVOX05PVElGSUNBVElPTihzb2NrZXQuaWQsIGRhdGEuX2lkKVxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBoYW5kbGVMb2dvdXQgPSBlID0+IHtcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChcIllvIGRvIG5vdGhpbmdcIik7XG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJfdG9rZW5cIik7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vIFVzZXJIYXNTZWVuID0gbXlEYXRhID0+IHtcbiAgLy8gICB2YXIgc2V0SXQ7XG4gIC8vICAgZm9yIChsZXQgaXRlbSBpbiBteURhdGEpIHtcbiAgLy8gICAgIGlmIChpdGVtLnNlZW4gPT09IGZhbHNlKSB7XG4gIC8vICAgICAgIHNldEl0ID0gdHJ1ZTtcbiAgLy8gICAgICAgaXRlbS5zZWVuID0gc2V0SXQ7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHZhciBfbGVuID0gbXlEYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgLy8gICAgIHJldHVybiBpdGVtLnNlZW4gIT09IGZhbHNlO1xuICAvLyAgIH0pO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgbGVuOiBfbGVuLmxlbmd0aFxuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBDaGlwaWUsXG4gICAgICBkYXRhLFxuICAgICAgdXNlckthcm1hLFxuICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgbnVtT2ZOb3RpZmljYXRpb25zLFxuICAgICAgc2VlbixcbiAgICAgIHZpZXdlZFxuICAgIH0gPSB0aGlzLnN0YXRlOyAvLyBJIGxvdmUgZGVzdHJ1Y3R1cmluZ1xuXG4gICAgaWYgKCFDaGlwaWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhci1zdHlsZVwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nby1zdHlsZVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbmV3LWljb24ucG5nXCIgYWx0PVwibG9nb1wiIHdpZHRoPVwiNjBweFwiIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItZm9ybS1zdHlsZVwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJGb3JtIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gLz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm90LWxvZ2luLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3BlblNpZ251cCgpfT5HZXQgc3RhcnRlZDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vdC1zaWdudXAtYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuTG9naW4oKX0+U2lnbiBpbjwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyLWNhbGwtdG8tYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc2tcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhZGVyLWJ0bi1hc2tcIj5BZGQgUXVlc3Rpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAubG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTYuNXZ3O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubmF2YmFyLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7IC8qI2Y2ZjRmOWRlOyovXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkZXItZm9ybS1zdHlsZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zdnc7XG4gICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5vdC1sb2dpbi1hY3Rpb24gYSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAxdnc7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDkxLCA1NiwgMTQxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRvcDogMC42dnc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubm90LXNpZ251cC1hY3Rpb24gYSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDR2dztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwLjZ2dztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVhZGVyLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogNy41dnc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVhZGVyLWJ0bi1hc2sge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDk2LCA1MSwgMTQxKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhICh3aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICAgICAgICAubG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgICAgIC5oZWFkZXItY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGVhZGVyLWJ0bi1hc2sge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGVhZGVyLWZvcm0tc3R5bGUge1xuICAgICAgICAgICAgICAgICAgbGVmdDogLTIzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubm90LWxvZ2luLWFjdGlvbiBhIHtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiA0MXZ3O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjJ2dztcbiAgICAgICAgICAgICAgICAgIHdvcmQtc3BhY2luZzogMC4wMDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5vdC1zaWdudXAtYWN0aW9uIGEge1xuICAgICAgICAgICAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwdnc7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuMnZ3O1xuICAgICAgICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAwLjAwMWVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uYXZiYXItc3R5bGUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDsgLypJIGxvdmUgdGhpcyBjb2xvciAjZDdjZGUwKi9cbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhci1zdHlsZVwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL25ldy1pY29uLnBuZ1wiIGFsdD1cImxvZ29cIiB3aWR0aD1cIjYwcHhcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1zdHlsZVwiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmNob3Itc3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2llIG51bU9mTm90aWZpY2F0aW9ucz17bnVtT2ZOb3RpZmljYXRpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QmFkZ2llIG51bU9mTm90aWZpY2F0aW9ucz17bGVufSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLW5vdGlmaWNhdGlvblwiPk5vdGlmaWNhdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVNlZW5Ob3RpZmljYXRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD57c2VlbiA/IFwiTm9uZSB5ZXRcIiA6IG5vdGlmaWNhdGlvbn08L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgIGhpZGVPblNjcm9sbFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2YwZWZmNVwiLCB6SW5kZXg6IDkwMDAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImthcm1hLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvci1zdHlsZVwiPlxuICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyIGljb24tYmVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbi1jb2luXCI+Q29pbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJLYXJtYSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50Pnt1c2VyS2FybWF9PC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiTm90aGluZyB5ZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb249XCJjbGlja1wiXG4gICAgICAgICAgICAgICAgICBoaWRlT25TY3JvbGxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tIGNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmMGVmZjVcIiwgekluZGV4OiA5MDAwIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItZm9ybS1zdHlsZVwiPlxuICAgICAgICAgICAgICA8SGVhZGVyRm9ybSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2ZpbGUtaWNvbi1zdHlsZVwiPlxuICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Q2hpcFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VXNlckljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5uZXItbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wcm9maWxlLyR7dGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2ZpbGUvJHt0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3Itc3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVJY29uIGNvbG9yPVwicmdiKDkxLCA1NiwgMTQxKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi10ZXh0XCI+UHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbm5lci1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25Cb3ggY29sb3I9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXRleHRcIj5RdWVzdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbm5lci1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmVsbGllIGNvbG9yPVwicmdiKDkxLCA1NiwgMTQxKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi10ZXh0XCI+Tm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJpbm5lci1saXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYWRkLWN1cnNvclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZUxvZ291dChlKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ291dEljb24gY29sb3I9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tdGV4dFwiPkxvZ291dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb249XCJjbGlja1wiXG4gICAgICAgICAgICAgICAgaGlkZU9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmMGVmZjVcIiwgekluZGV4OiA5MDAwIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyLWNhbGwtdG8tYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXNrXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFkZXItYnRuLWFza1wiPkFkZCBRdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG5cbiAgICAgICAgICAgIC5pY29uLWJlbGwge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDkxLCA1NiwgMTQxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBmb250LXNpemUgOiAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5uZXItbGlzdCB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZSA6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM1ODY0N2I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmljb24tdGV4dCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcCA6IC01cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuY2hvci1zdHlsZSB7XG4gICAgICAgICAgICAgIGN1cnNvciA6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcGFuLWNvaW4ge1xuICAgICAgICAgICAgICBmb250LXNpemUgOiAxLjA0O1xuICAgICAgICAgICAgICBmb250LWZhbWlseSA6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xuICAgICAgICAgICAgICBjb2xvciA6ICM2NjY7XG4gICAgICAgICAgICAgIHBhZGRpbmcgOiAwIDRweDtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wIDogLTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZC1jdXJzb3Ige1xuICAgICAgICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3IgOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwYW4tbm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplIDogMS4wNDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHkgOiBpbmhlcml0O1xuICAgICAgICAgICAgICBmb250LXdlaWdodCA6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3IgOiAjNjY2O1xuICAgICAgICAgICAgICBwYWRkaW5nIDogMCAycHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcCA6IDJweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyLXN0eWxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGZsZXg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7IC8qI2Y2ZjRmOWRlOyovXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgICAgICAgICAgdG9wIDogMDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm94LXNpemluZyA6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQgOiA0OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgZmxvYXQgOiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wIDogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZyA6IDBweCA1cHg7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAuaGVhZGVyLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdCA6IDMwcHg7XG4gICAgICAgICAgICAgIHRvcCA6IC00cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZmlsZS1pY29uLXN0eWxlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdCA6IC0yMjBweDtcbiAgICAgICAgICAgICAgdG9wIDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5rYXJtYS1zdHlsZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQgOiAtNzBweDtcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uLXN0eWxlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdCA6IC05MHB4O1xuICAgICAgICAgICAgICB0b3AgOiAxcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdHlsZSBsaSBhIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tc3R5bGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogLTExMHB4O1xuICAgICAgICAgICAgICB0b3AgOiAtMTVweDtcbiAgICAgICAgICAgICAgY3Vyc29yIDogcG9pbnRlcjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyLWZvcm0tc3R5bGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogLTc1cHg7XG4gICAgICAgICAgICAgIHRvcCA6IC01cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXItYnRuLWFzayB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQgOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICBjb2xvciA6ICNmZGZkZmQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICAucHJvZmlsZS1pY29uLXN0eWxlIC5wcm9maWxlIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdnc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB0b3A6IDk1JTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGUgLnByb2ZpbGU6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGU6aG92ZXIgLnByb2ZpbGUge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uLXN0eWxlIC53b3JrIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgdG9wOiA5NiU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24tc3R5bGUgLndvcms6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24tc3R5bGU6aG92ZXIgLndvcmsge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua2FybWEtc3R5bGUgLndvcmsge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB0b3A6IDY1JTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rYXJtYS1zdHlsZSAud29yazo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmthcm1hLXN0eWxlOmhvdmVyIC53b3JrIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgLmhlYWRlci1jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRlci1idG4tYXNrIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAua2FybWEtc3R5bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5ub3RpZmljYXRpb24tc3R5bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkZXItZm9ybS1zdHlsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMHB4O1xuICAgICAgICAgICAgICAgIHRvcCA6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogLTkwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByb2ZpbGUtaWNvbi1zdHlsZSB7XG4gICAgICAgICAgICAgICAgbGVmdCA6IDMwdnc7XG4gICAgICAgICAgICAgICAgdG9wIDogLTM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoIDogNDExcHgpIHtcbiAgICAgICAgICAgICAgLnByb2ZpbGUtaWNvbi1zdHlsZSB7XG4gICAgICAgICAgICAgICAgbGVmdCA6IDQwdnc7XG4gICAgICAgICAgICAgICAgdG9wIDogLTM1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogLTgwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXItZm9ybS1zdHlsZSB7XG4gICAgICAgICAgICAgIGxlZnQ6IC04NXB4O1xuICAgICAgICAgICAgICB0b3AgOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA6Mzc1cHgpe1xuICAgICAgICAgICAgICAucHJvZmlsZS1pY29uLXN0eWxle1xuICAgICAgICAgICAgICAgIGxlZnQgOiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG9wIDogLTM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/Navbar.js */"));
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("nav", {
        className: "jsx-3499757639" + " " + "navbar-style"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        className: "jsx-3499757639"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "logo-style"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        prefetch: true,
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "/static/new-icon.png",
        alt: "logo",
        width: "60px",
        className: "jsx-3499757639"
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "notification-style"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "jsx-3499757639"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "anchor-style"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Badgie, {
          numOfNotifications: numOfNotifications
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "span-notification"
        }, "Notifications")),
        content: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          onMouseOver: this.handleSeenNotifications,
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, seen ? "None yet" : notification))),
        on: "click",
        hideOnScroll: true,
        position: "bottom center",
        style: {
          background: "#f0eff5",
          zIndex: 9000
        }
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "karma-style"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "jsx-3499757639" + " " + "anchor-style"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
          className: "jsx-3499757639" + " " + "far fa-star icon-bell"
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "span-coin"
        }, "Coins")),
        content: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639"
        }, userKarma ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, userKarma) : "Nothing yet")),
        on: "click",
        hideOnScroll: true,
        position: "bottom center",
        style: {
          background: "#f0eff5",
          zIndex: 9000
        }
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "header-form-style"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_utils_headerForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: this.props.data
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        className: "jsx-3499757639" + " " + "profile-icon-style"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14___default.a, {
          label: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["UserIcon"], null),
          style: {
            width: "40px",
            height: "40px",
            borderRadius: "24px"
          }
        })),
        content: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          as: "/profile/".concat(this.state.data.username),
          href: "/profile/".concat(this.state.data.username)
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          className: "jsx-3499757639" + " " + "anchor-style"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["ProfileIcon"], {
          color: "rgb(91, 56, 141)"
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Profile")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/ask"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["QuestionBox"], {
          color: "rgb(91, 56, 141)"
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Question")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/ask"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Bellie"], {
          color: "rgb(91, 56, 141)"
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Notifications")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "jsx-3499757639" + " " + "inner-list"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          onClick: function onClick(e) {
            return _this3.handleLogout(e);
          },
          className: "jsx-3499757639" + " " + "add-cursor"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["LogoutIcon"], {
          color: "rgb(91, 56, 141)"
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "jsx-3499757639" + " " + "icon-text"
        }, "Logout")))),
        on: "click",
        hideOnScroll: true,
        position: "bottom center",
        style: {
          background: "#f0eff5",
          zIndex: 9000
        }
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "jsx-3499757639" + " " + "header-call-to-action"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/ask"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        className: "jsx-3499757639" + " " + "header-btn-ask"
      }, "Add Question"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3499757639"
      }, ".icon-bell.jsx-3499757639{color:rgb(91,56,141) !important;font-size :25px;}.inner-list.jsx-3499757639{list-style-type :none;}a.jsx-3499757639 span.jsx-3499757639{color:#58647b;}span.icon-text.jsx-3499757639{position :relative;top :-5px;margin-left :5px;}.anchor-style.jsx-3499757639{cursor :pointer;}.span-coin.jsx-3499757639{font-size :1.04;font-family :inherit;font-weight :600;color :#666;padding :0 4px;position :relative;top :-2px;}.add-cursor.jsx-3499757639{cursor :pointer;}a.jsx-3499757639{color :#000 !important;font-family :inherit;}.span-notification.jsx-3499757639{font-size :1.04;font-family :inherit;font-weight :600;color :#666;padding :0 2px;position :relative;top :2px;margin-left :5px;}.navbar-style.jsx-3499757639{display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;background:#fdfdfd;width:100%;height:58px;box-sizing:border-box;position:fixed;margin-bottom:50px;z-index:2000;top :0;-webkit-box-pack:center;-webkit-justify-content :center;-ms-flex-pack:center;justify-content :center;}ul.jsx-3499757639{display :inline-block !important;box-sizing :border-box;position :relative;left :48px;}ul.jsx-3499757639 li.jsx-3499757639{list-style-type:none;float :left;margin-top :15px;padding :0px 5px;}.header-call-to-action.jsx-3499757639{position :relative;left :30px;top :-4px;}.profile-icon-style.jsx-3499757639{position :relative;left :-220px;top :10px;}.karma-style.jsx-3499757639{position :relative;left :-70px;display :block;}.notification-style.jsx-3499757639{position :relative;left :-90px;top :1px;display :block;}.notification-style.jsx-3499757639 li.jsx-3499757639 a.jsx-3499757639{text-align :center;}.logo-style.jsx-3499757639{position :relative;left :-110px;top :-15px;cursor :pointer;}.header-form-style.jsx-3499757639{position :relative;left :-75px;top :-5px;}.header-btn-ask.jsx-3499757639{position:relative;min-width:130px !important;outline:none !important;height:35px !important;font-size:1em;font-weight:600;border-radius:3px !important;background :rgb(96,51,141);color :#fdfdfd;text-align:center !important;padding:0px 5px !important;outline:0 !important;cursor:pointer;border:1px solid rgb(96,51,141);}.profile-icon-style.jsx-3499757639 .profile.jsx-3499757639{visibility:hidden;width:110px;min-height:10vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#eee;color:#000;text-align:center;border-radius:6px;padding:5px 5px;position:absolute;z-index:1;top:95%;left:50%;margin-top:12px;margin-left:-35px;}.profile-icon-style.jsx-3499757639 .profile.jsx-3499757639::after{content:\"\";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #eee transparent;}.profile-icon-style.jsx-3499757639:hover .profile.jsx-3499757639{visibility:visible;}.notification-style.jsx-3499757639 .work.jsx-3499757639{visibility:hidden;width:120px;height:150px;background:#eee;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:96%;left:50%;margin-left:-60px;margin-top:5px;}.notification-style.jsx-3499757639 .work.jsx-3499757639::after{content:\"\";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #eee transparent;}.notification-style.jsx-3499757639:hover .work.jsx-3499757639{visibility:visible;}.karma-style.jsx-3499757639 .work.jsx-3499757639{visibility:hidden;width:120px;height:150px;background:#eee;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;top:65%;left:50%;margin-top:15px;margin-left:-60px;}.karma-style.jsx-3499757639 .work.jsx-3499757639::after{content:\"\";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #eee transparent;}.karma-style.jsx-3499757639:hover .work.jsx-3499757639{visibility:visible;}@media screen and (max-width:600px){.header-call-to-action.jsx-3499757639{display:none !important;}.header-btn-ask.jsx-3499757639{display:none !important;}.karma-style.jsx-3499757639{display:none !important;}.notification-style.jsx-3499757639{display:none !important;}.header-form-style.jsx-3499757639{left:-100px;top :0px;}.logo-style.jsx-3499757639{left:-90px;}.profile-icon-style.jsx-3499757639{left :30vw;top :-35px;}}@media screen and (width :411px){.profile-icon-style.jsx-3499757639{left :40vw;top :-35px;}.logo-style.jsx-3499757639{left:-80px;}.header-form-style.jsx-3499757639{left:-85px;top :0px;}@media screen and (width :375px){.profile-icon-style.jsx-3499757639{left :38px !important;top :-35px;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnZ0JXLEFBSWlELEFBS1osQUFLUixBQUdLLEFBS0gsQUFJQSxBQVVBLEFBSU8sQUFLUCxBQVVGLEFBYW1CLEFBT1osQUFTRixBQUtBLEFBS0EsQUFTQSxBQU9BLEFBSUEsQUFRQSxBQU1ELEFBbUJBLEFBbUJQLEFBV1EsQUFJRCxBQWlCUCxBQVdRLEFBSUQsQUFpQlAsQUFXUSxBQUtPLEFBSUEsQUFJQSxBQUlBLEFBSVosQUFJRCxBQUdBLEFBT0EsQUFLQSxBQUlGLEFBTWEsV0E1SE4sQUFnQ0EsQUFnQ0EsQUFvQ2xCLEFBR2EsQUFPQSxBQUtmLEFBSVcsQ0F2QkUsRUF4UGIsRUFRQSxBQUl1QixBQVV2QixBQVN1QixFQW1GTSxBQW1CZixBQWtDQSxBQWdDQSxDQXBNRixBQW1FQyxBQUtFLEFBS0QsQUFTQSxBQU9kLEFBSWUsQUFRRCxBQXVEZCxBQWdDQSxBQWdDQSxDQTZDQSxDQW5OYyxBQTRMWixDQTlQRixBQXFRRSxBQU9BLEFBY2EsQ0EzUFEsQ0E4TXJCLEFBSUEsQUFJQSxBQUlBLEtBaFBpQixBQXFKTCxBQWdDQSxBQWdDQSxDQWxKRixBQStETSxBQWtDSCxBQWdDQSxDQXZIRSxBQVNOLEFBbUJDLENBdkhNLEFBc0ZOLEFBeUJDLENBL0NZLEFBUU4sQUF3TmpCLElBelFpQixBQW1CQSxHQXdDbkIsQUFtQmlCLENBbUJqQixBQTRDVyxBQWdDQSxBQWdDQSxDQTdJWCxDQXlCa0IsQUFtRUEsQUFnQ0EsQ0E5S2xCLENBd0YwQixDQTlHMUIsQUE2RUEsQUFxRGUsRUFoSmYsRUF3RW1CLEFBNEZBLEFBZ0NBLEFBZ0NBLElBN01MLEFBbUJBLENBMkRkLENBckNxQixHQWlEckIsQUFrRWEsQUFnQ0EsT0EzTEksQUFtQkEsQ0E4QmpCLEFBNEZtQixBQWdDQSxBQWdDQSxFQXhHTSxDQXVETCxBQWdDQSxLQW5KUCxHQWZRLEdBekJBLEFBbUJBLEdBMEhBLEFBZ0NBLEFBZ0NBLEVBcEtyQixFQW1Ib0IsQUFnQ0EsSUF2RkosS0EzRUgsR0F6QkQsQUFtQkQsR0EwSDZDLEFBZ0NBLEFBZ0NBLEdBeEd0QyxBQXVERixBQWdDQSxFQWxLRixDQU5LLENBbkJuQixVQTBCd0IsQUE0RkEsQUFzQ0osQUFnQ0EsRUF2RlcsSUFqRi9CLFlBeUlZLEFBZ0NBLElBbEtLLE1BbUlQLEFBZ0NBLEdBeEZxQixLQXlEcEIsQUFnQ0EsQ0FuS1UsQUFpSHJCLEFBZ0NBLEFBZ0NBLFFBN0NvQixBQWdDRixXQW5LSCxFQTBFRSxHQTBGRyxFQWhDSCxNQW5JUixJQTBFc0IsR0F6RUwsRUF3RlIsQUEyQ2xCLENBZ0NBLGVBMUVhLFFBZmdCLEdBZ0JULGtCQUNBLE1BaEJHLFlBaUJMLFNBaEJELE9BaUJHLFFBaEJnQixVQWlCeEIsRUE3RlosUUE4RlUsUUFDQyxJQWxCWCxLQW1Ca0IsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWRlckZvcm0gZnJvbSBcIi4uL3V0aWxzL2hlYWRlckZvcm1cIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCI7XG4vL2ltcG9ydCBCZWxsIGZyb20gXCIuLi91dGlscy9iZWxsXCI7XG5pbXBvcnQgQmFkZ2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCI7XG5pbXBvcnQge1xuICBVc2VySWNvbixcbiAgU3Rhckljb24sXG4gIFByb2ZpbGVJY29uLFxuICBRdWVzdGlvbkJveCxcbiAgQmVsbGllLFxuICBMb2dvdXRJY29uXG59IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUG9wdXAsIEZlZWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7XG4gIEdFVF9VU0VSX0tBUk1BLFxuICBHRVRfVVNFUl9OT1RJRklDQVRJT04sXG4gIFVTRVJfSEFTX1NFRU5fTk9USUZJQ0FUSU9OXG59IGZyb20gXCIuLi9hcGlSZXF1ZXN0cy9hcGlSZXF1ZXN0c1wiO1xuaW1wb3J0IEFQSV9VUkwgZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuY29uc3Qgc29ja2V0ID0gaW8oQVBJX1VSTCk7XG5cbmNvbnN0IEJhZGdpZSA9IGZ1bmN0aW9uIEJhZGdpZShwcm9wcykge1xuICAvL2hhbmRsZXMgdGhlIG5vdGlmaWNhdGlvbiBhbmQgYmFkZ2VcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8QmFkZ2UgY29sb3I9XCJzZWNvbmRhcnlcIiBiYWRnZUNvbnRlbnQ9e3Byb3BzLm51bU9mTm90aWZpY2F0aW9ucyB8fCAwfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWJlbGwgaWNvbi1iZWxsXCIgLz5cblxuICAgICAgICB7Lyo8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImljb24tYmVsbFwiIGljb249e2ZhQmVsbH0gLz4gKi99XG4gICAgICA8L0JhZGdlPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuaWNvbi1iZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByYmcoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgQ2hpcGllOiBmYWxzZSxcbiAgICBkYXRhOiBcIlwiLFxuICAgIHNlZW46IGZhbHNlXG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc29ja2V0Lm9uKFwidXNlcl92aWV3ZWRfbm90aWZpY2F0aW9uXCIsIGRhdGEgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLCBcIiBJIGFtIGhlcmUgbmFcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VlbjogZGF0YS52aWV3ZWRcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm51bU9mTm90aWZpY2F0aW9ucyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG51bU9mTm90aWZpY2F0aW9uczogdGhpcy5zdGF0ZS5udW1PZk5vdGlmaWNhdGlvbnMgLSAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoZWNrVXNlcigpO1xuICAgIHRoaXMuZmV0Y2hVc2VyS2FybWEoKTtcbiAgICB0aGlzLmZldGNoVXNlck5vdGlmaWNhdGlvbigpO1xuICB9XG5cbiAgZmV0Y2hVc2VyS2FybWEgPSAoKSA9PiB7XG4gICAgbGV0IF9kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgaWYgKF9kYXRhKSB7XG4gICAgICBHRVRfVVNFUl9LQVJNQShfZGF0YS5faWQpXG4gICAgICAgIC50aGVuKGF4aW9zUmVzID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhheGlvc1Jlcy5kYXRhLmthcm1hKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVzZXJLYXJtYTogYXhpb3NSZXMuZGF0YS5rYXJtYVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZmV0Y2hVc2VyTm90aWZpY2F0aW9uID0gKCkgPT4ge1xuICAgIGxldCBfZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIGlmIChfZGF0YSkge1xuICAgICAgR0VUX1VTRVJfTk9USUZJQ0FUSU9OKF9kYXRhLl9pZClcbiAgICAgICAgLnRoZW4oYXhpb3NSZXNwb25zZSA9PiB7XG4gICAgICAgICAgbGV0IF9udW0gPSBheGlvc1Jlc3BvbnNlLmRhdGEudmlld2VkID8gMCA6IDE7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhheGlvc1Jlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9uKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbjogYXhpb3NSZXNwb25zZS5kYXRhLm5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgIG51bU9mTm90aWZpY2F0aW9uczogX251bSxcbiAgICAgICAgICAgIHNlZW46IGF4aW9zUmVzcG9uc2UuZGF0YS52aWV3ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tVc2VyID0gKCkgPT4ge1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgLy9sZXQgaXNSZWdpc3RlcmVkID0gdHJ1ZSAvL2Zha2UgY2hlY2s7XG5cbiAgICBpZiAoZGF0YSAhPT0gXCJcIiAmJiBkYXRhICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgQ2hpcGllOiB0cnVlLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU2Vlbk5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUubnVtT2ZOb3RpZmljYXRpb25zICE9PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgbnVtT2ZOb3RpZmljYXRpb25zOiB0aGlzLnN0YXRlLm51bU9mTm90aWZpY2F0aW9ucyAtIDFcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG5cbiAgICAgICAgICAgIFVTRVJfSEFTX1NFRU5fTk9USUZJQ0FUSU9OKHNvY2tldC5pZCwgZGF0YS5faWQpXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUxvZ291dCA9IGUgPT4ge1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KFwiWW8gZG8gbm90aGluZ1wiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcl90b2tlblwiKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8gVXNlckhhc1NlZW4gPSBteURhdGEgPT4ge1xuICAvLyAgIHZhciBzZXRJdDtcbiAgLy8gICBmb3IgKGxldCBpdGVtIGluIG15RGF0YSkge1xuICAvLyAgICAgaWYgKGl0ZW0uc2VlbiA9PT0gZmFsc2UpIHtcbiAgLy8gICAgICAgc2V0SXQgPSB0cnVlO1xuICAvLyAgICAgICBpdGVtLnNlZW4gPSBzZXRJdDtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgdmFyIF9sZW4gPSBteURhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAvLyAgICAgcmV0dXJuIGl0ZW0uc2VlbiAhPT0gZmFsc2U7XG4gIC8vICAgfSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBsZW46IF9sZW4ubGVuZ3RoXG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIENoaXBpZSxcbiAgICAgIGRhdGEsXG4gICAgICB1c2VyS2FybWEsXG4gICAgICBub3RpZmljYXRpb24sXG4gICAgICBudW1PZk5vdGlmaWNhdGlvbnMsXG4gICAgICBzZWVuLFxuICAgICAgdmlld2VkXG4gICAgfSA9IHRoaXMuc3RhdGU7IC8vIEkgbG92ZSBkZXN0cnVjdHVyaW5nXG5cbiAgICBpZiAoIUNoaXBpZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0eWxlXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9uZXctaWNvbi5wbmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9XCI2MHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlci1mb3JtLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlckZvcm0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSAvPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJub3QtbG9naW4tYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuU2lnbnVwKCl9PkdldCBzdGFydGVkPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm90LXNpZ251cC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5Mb2dpbigpfT5TaWduIGluPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItY2FsbC10by1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFkZXItYnRuLWFza1wiPkFkZCBRdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNi41dnc7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5uYXZiYXItc3R5bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDsgLyojZjZmNGY5ZGU7Ki9cbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAycHggLTJweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjAwMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdWwgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRlci1mb3JtLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTN2dztcbiAgICAgICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubm90LWxvZ2luLWFjdGlvbiBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDF2dztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwLjZ2dztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5ub3Qtc2lnbnVwLWFjdGlvbiBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogNHZ3O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig5MSwgNTYsIDE0MSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDAuNnZ3O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkZXItY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3LjV2dztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkZXItYnRuLWFzayB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmRmZGZkO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgKHdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAgICAgLmhlYWRlci1jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5oZWFkZXItYnRuLWFzayB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5oZWFkZXItZm9ybS1zdHlsZSB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAtMjNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28tc3R5bGUge1xuICAgICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ub3QtbG9naW4tYWN0aW9uIGEge1xuICAgICAgICAgICAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDQxdnc7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuMnZ3O1xuICAgICAgICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAwLjAwMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubm90LXNpZ251cC1hY3Rpb24gYSB7XG4gICAgICAgICAgICAgICAgICB0b3A6IC0yNXB4O1xuICAgICAgICAgICAgICAgICAgbGVmdDogNDB2dztcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4ydnc7XG4gICAgICAgICAgICAgICAgICB3b3JkLXNwYWNpbmc6IDAuMDAxZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5hdmJhci1zdHlsZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkOyAvKkkgbG92ZSB0aGlzIGNvbG9yICNkN2NkZTAqL1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0eWxlXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ28tc3R5bGVcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbmV3LWljb24ucG5nXCIgYWx0PVwibG9nb1wiIHdpZHRoPVwiNjBweFwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuY2hvci1zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCYWRnaWUgbnVtT2ZOb3RpZmljYXRpb25zPXtudW1PZk5vdGlmaWNhdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxCYWRnaWUgbnVtT2ZOb3RpZmljYXRpb25zPXtsZW59IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW4tbm90aWZpY2F0aW9uXCI+Tm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlU2Vlbk5vdGlmaWNhdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PntzZWVuID8gXCJOb25lIHlldFwiIDogbm90aWZpY2F0aW9ufTwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgaGlkZU9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZjBlZmY1XCIsIHpJbmRleDogOTAwMCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwia2FybWEtc3R5bGVcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXIgaWNvbi1iZWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLWNvaW5cIj5Db2luczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckthcm1hID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+e3VzZXJLYXJtYX08L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOb3RoaW5nIHlldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgIGhpZGVPblNjcm9sbFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2YwZWZmNVwiLCB6SW5kZXg6IDkwMDAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlci1mb3JtLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxIZWFkZXJGb3JtIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZmlsZS1pY29uLXN0eWxlXCI+XG4gICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxDaGlwXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxVc2VySWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbm5lci1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2ZpbGUvJHt0aGlzLnN0YXRlLmRhdGEudXNlcm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZmlsZS8ke3RoaXMuc3RhdGUuZGF0YS51c2VybmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvci1zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUljb24gY29sb3I9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXRleHRcIj5Qcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubmVyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkJveCBjb2xvcj1cInJnYig5MSwgNTYsIDE0MSlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tdGV4dFwiPlF1ZXN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubmVyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCZWxsaWUgY29sb3I9XCJyZ2IoOTEsIDU2LCAxNDEpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXRleHRcIj5Ob3RpZmljYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImlubmVyLWxpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJhZGQtY3Vyc29yXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlTG9nb3V0KGUpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb3V0SWNvbiBjb2xvcj1cInJnYig5MSwgNTYsIDE0MSlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi10ZXh0XCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICBoaWRlT25TY3JvbGxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSBjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2YwZWZmNVwiLCB6SW5kZXg6IDkwMDAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItY2FsbC10by1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc2tcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlYWRlci1idG4tYXNrXCI+QWRkIFF1ZXN0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcblxuICAgICAgICAgICAgLmljb24tYmVsbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbm5lci1saXN0IHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlIDogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIHNwYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogIzU4NjQ3YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4uaWNvbi10ZXh0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wIDogLTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5jaG9yLXN0eWxlIHtcbiAgICAgICAgICAgICAgY3Vyc29yIDogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwYW4tY29pbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDEuMDQ7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQgOiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yIDogIzY2NjtcbiAgICAgICAgICAgICAgcGFkZGluZyA6IDAgNHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3AgOiAtMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkLWN1cnNvciB7XG4gICAgICAgICAgICAgIGN1cnNvciA6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvciA6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHkgOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3Bhbi1ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemUgOiAxLjA0O1xuICAgICAgICAgICAgICBmb250LWZhbWlseSA6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xuICAgICAgICAgICAgICBjb2xvciA6ICM2NjY7XG4gICAgICAgICAgICAgIHBhZGRpbmcgOiAwIDJweDtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wIDogMnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZiYXItc3R5bGUge1xuICAgICAgICAgICAgICBkaXNwbGF5IDogZmxleDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDsgLyojZjZmNGY5ZGU7Ki9cbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgICAgICB0b3AgOiAwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdCA6IDQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICBmbG9hdCA6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3AgOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nIDogMHB4IDVweDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC5oZWFkZXItY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogMzBweDtcbiAgICAgICAgICAgICAgdG9wIDogLTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogLTIyMHB4O1xuICAgICAgICAgICAgICB0b3AgOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmthcm1hLXN0eWxlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdCA6IC03MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5IDogYmxvY2s7XG4gICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24tc3R5bGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0IDogLTkwcHg7XG4gICAgICAgICAgICAgIHRvcCA6IDFweDtcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uLXN0eWxlIGxpIGEge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQgOiAtMTEwcHg7XG4gICAgICAgICAgICAgIHRvcCA6IC0xNXB4O1xuICAgICAgICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXItZm9ybS1zdHlsZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQgOiAtNzVweDtcbiAgICAgICAgICAgICAgdG9wIDogLTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlci1idG4tYXNrIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZCA6IHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgIGNvbG9yIDogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGUgLnByb2ZpbGUge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTB2dztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIHRvcDogOTUlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2ZpbGUtaWNvbi1zdHlsZSAucHJvZmlsZTo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2ZpbGUtaWNvbi1zdHlsZTpob3ZlciAucHJvZmlsZSB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24tc3R5bGUgLndvcmsge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB0b3A6IDk2JTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdHlsZSAud29yazo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdHlsZTpob3ZlciAud29yayB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rYXJtYS1zdHlsZSAud29yayB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIHRvcDogNjUlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmthcm1hLXN0eWxlIC53b3JrOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua2FybWEtc3R5bGU6aG92ZXIgLndvcmsge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAuaGVhZGVyLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVhZGVyLWJ0bi1hc2sge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5rYXJtYS1zdHlsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdHlsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRlci1mb3JtLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XG4gICAgICAgICAgICAgICAgdG9wIDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJvZmlsZS1pY29uLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0IDogMzB2dztcbiAgICAgICAgICAgICAgICB0b3AgOiAtMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggOiA0MTFweCkge1xuICAgICAgICAgICAgICAucHJvZmlsZS1pY29uLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0IDogNDB2dztcbiAgICAgICAgICAgICAgICB0b3AgOiAtMzVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sb2dvLXN0eWxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlci1mb3JtLXN0eWxlIHtcbiAgICAgICAgICAgICAgbGVmdDogLTg1cHg7XG4gICAgICAgICAgICAgIHRvcCA6IDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoIDozNzVweCl7XG4gICAgICAgICAgICAgIC5wcm9maWxlLWljb24tc3R5bGV7XG4gICAgICAgICAgICAgICAgbGVmdCA6IDM4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3AgOiAtMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/Navbar.js */"));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/facebookCustomButton.js":
/*!********************************************!*\
  !*** ./components/facebookCustomButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var FacebookLoginButton = function FacebookLoginButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-422926688" + " " + "loginBtn loginBtn--facebook"
  }, props.action), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "422926688"
  }, ".loginBtn.jsx-422926688{box-sizing:border-box;position:relative;width :250px;margin-top:0.8em;margin-bottom :1.5em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:0.2em;font-size:1em;color:#fff;font-weight :600;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);}.loginBtn.jsx-422926688:before{content :\"\", box-sizing :border-box;position :absolute;top :0;left :0;width :34px;height :100%;}.loginBtn.jsx-422926688:focus{outline :none;}.loginBtn.jsx-422926688:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1);}.loginBtn--facebook.jsx-422926688{background-color :#4C69BA;background-image :linear-gradient(#4C69BA,#3B55A0);text-shadow :0 -1px 0 #354C8C;}.loginBtn--facebook.jsx-422926688:before{border-right :#364e92 1px solid;background :url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;}.loginBtn--facebook.jsx-422926688:hover,.loginBtn--facebook.jsx-422926688:focus{background-color :#5B7BD5;background-image :linear-gradient(#5B7BD5,#4864b1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL2ZhY2Vib29rQ3VzdG9tQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUdpQyxBQWtCRyxBQVNULEFBSStCLEFBSW5CLEFBTU0sQUFJTixjQWpCOUIsUUEzQm9CLElBbUNvQyxBQVVBLE1BSnNELElBdkJ2RixJQWpCUixLQThCZixRQTdCbUIsRUFpQlIsT0FDQyxRQWpCVyxBQWtCUCxPQWVrQixBQVVsQyxLQXhCaUIsU0FsQk8sSUFtQnhCLFlBY0EsTUFoQ2MsWUFDSSxhQW9DbEIsR0FuQ21CLGlCQUNFLG1CQUNDLG9CQUNOLGNBQ0gsV0FDTSxpQkFDeUIsd0NBQzVDIiwiZmlsZSI6Ii9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL2ZhY2Vib29rQ3VzdG9tQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgRmFjZWJvb2tMb2dpbkJ1dHRvbiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luQnRuIGxvZ2luQnRuLS1mYWNlYm9va1wiPntwcm9wcy5hY3Rpb259PC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sb2dpbkJ0biB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGggOiAyNTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjhlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMS41ZW07XG4gICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xuICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgICAubG9naW5CdG46YmVmb3Jle1xuICAgICAgICAgICAgY29udGVudCA6IFwiXCIsXG4gICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3AgOiAwO1xuICAgICAgICAgICAgbGVmdCA6IDA7XG4gICAgICAgICAgICB3aWR0aCA6IDM0cHg7XG4gICAgICAgICAgICBoZWlnaHQgOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luQnRuOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmUgOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luQnRuOmFjdGl2ZXtcbiAgICAgICAgICAgIGJveC1zaGFkb3cgOiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dpbkJ0bi0tZmFjZWJvb2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICM0QzY5QkE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlIDogbGluZWFyLWdyYWRpZW50KCM0QzY5QkEsICMzQjU1QTApO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3cgOiAwIC0xcHggMCAjMzU0QzhDO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmV7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQgOiAjMzY0ZTkyIDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLCAubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjNUI3QkQ1O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZSA6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NGIxKTtcbiAgICAgICAgfVxuXG5cblxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rTG9naW5CdXR0b247XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/facebookCustomButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FacebookLoginButton);

/***/ }),

/***/ "./components/googleCustomButton.js":
/*!******************************************!*\
  !*** ./components/googleCustomButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var GoogleCustomButton = function GoogleCustomButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-3588572961" + " " + "loginBtn loginBtn--google"
  }, " ", props.action, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3588572961"
  }, ".loginBtn.jsx-3588572961{box-sizing:border-box;position:relative;width :250px;margin-bottom:0.8em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:6px;font-size:16px;color:#637381;font-weight :600;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);}.loginBtn.jsx-3588572961:before{content :\"\", box-sizing :border-box;position :absolute;top :0;left :0;width :34px;height :100%;}.loginBtn.jsx-3588572961:focus{outline :none;}.loginBtn.jsx-3588572961:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1);}.loginBtn--google.jsx-3588572961{background :#fff;}.loginBtn--google.jsx-3588572961:before{border-right :#BB3F30 1px solid;background :url(\"/static/icon-google.png\") 6px 6px no-repeat;}.loginBtn--google.jsx-3588572961:hover,.loginBtn--google.jsx-3588572961: focus.jsx-3588572961{background :#E74B37;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL2dvb2dsZUN1c3RvbUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPTyxBQUltQyxBQWlCQyxBQVNULEFBSStCLEFBSTVCLEFBSWUsQUFLWixjQWhCeEIsR0FRQSxHQVNBLEVBM0NzQixVQXNDMkMsSUFyQjFDLElBaEJOLEtBNkJqQixRQTVCd0IsRUFnQmIsT0FDQyxRQUNJLEdBakJVLFNBa0JULFdBa0JqQixFQW5DZ0IsQUFrQmhCLFlBakJvQixnQkFDQyxpQkFDRSxtQkFDRCxrQkFDSCxlQUNELGNBQ0csaUJBQzBCLHdDQUMvQyIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy9nb29nbGVDdXN0b21CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdvb2dsZUN1c3RvbUJ1dHRvbiA9IHByb3BzID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW5CdG4gbG9naW5CdG4tLWdvb2dsZVwiPiB7cHJvcHMuYWN0aW9ufSA8L2J1dHRvbj5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuXG4gICAgICAgIC5sb2dpbkJ0biB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGggOiAyNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzYzNzM4MTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgICAubG9naW5CdG46YmVmb3Jle1xuICAgICAgICAgICAgY29udGVudCA6IFwiXCIsXG4gICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3AgOiAwO1xuICAgICAgICAgICAgbGVmdCA6IDA7XG4gICAgICAgICAgICB3aWR0aCA6IDM0cHg7XG4gICAgICAgICAgICBoZWlnaHQgOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luQnRuOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmUgOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luQnRuOmFjdGl2ZXtcbiAgICAgICAgICAgIGJveC1zaGFkb3cgOiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dpbkJ0bi0tZ29vZ2xlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodCA6ICNCQjNGMzAgMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZCA6IHVybChcIi9zdGF0aWMvaWNvbi1nb29nbGUucG5nXCIpIDZweCA2cHggbm8tcmVwZWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsIC5sb2dpbkJ0bi0tZ29vZ2xlOiBmb2N1c3tcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiAjRTc0QjM3O1xuICAgICAgICB9XG5cblxuICAgICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVDdXN0b21CdXR0b247XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/googleCustomButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleCustomButton);

/***/ }),

/***/ "./components/modal/topicviewPopupModal.js":
/*!*************************************************!*\
  !*** ./components/modal/topicviewPopupModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");












var TopicViewPopupModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TopicViewPopupModal, _Component);

  function TopicViewPopupModal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TopicViewPopupModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TopicViewPopupModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function () {
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
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__["user_recommendation"])(_data).then(function (result) {
        return console.log(result);
      }).catch(function (error) {
        return console.log(error);
      });
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__["AddUserReactionToOption"])(rxn).then(function (res) {
        return console.log(res.data);
      }).catch(function (err) {
        return console.log(err.response.data);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleInputChange", function (_ref) {
      var _ref$target = _ref.target,
          value = _ref$target.value,
          name = _ref$target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeBtn", function () {
      _this.setState({
        showClass: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAddCon", function (e) {
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
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__["ADD_OPTION_CON"])(con_data).then(function (axiosResponse) {
        // console.log(axiosResponse);
        _this.setState(function (previousState) {
          return {
            con: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState.con), [addCon]),
            _addMoreDetails2: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState._addMoreDetails2), [conDetails]),
            addCon: "",
            conDetails: ""
          };
        }); //remove in production


        alert("con added");
      }).catch(function (axiosResponseError) {
        console.log(axiosResponseError);
      }); //this.setState(previousState => ({ inc: previousState.inc + 1 }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_handleAddPro", function (e) {
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
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_10__["ADD_OPTION_PRO"])(pro_data).then(function (axiosResponse) {
        // console.log(axiosResponse);
        _this.setState(function (previousState) {
          return {
            pro: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState.pro), [addPro]),
            addMoreDetails: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState.addMoreDetails), [proDetails]),
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TopicViewPopupModal, [{
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
      }, ".user-rec-card.__jsx-style-dynamic-selector{position:relative;width:100%;max-width:640px;min-height:550px;left:0;top:0;background-color:#fdfdfd;box-sizing:border-box;overflow:hidden;border-radius:15px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);margin-bottom:10px;}.option-theme.__jsx-style-dynamic-selector{margin-top:-105px;margin-left:75px;}.rec-recommendation.__jsx-style-dynamic-selector{display:block;position:relative;font-size:20px !important;text-transform:capitalize;color:#fff;line-height:1.2;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}.rec-option.__jsx-style-dynamic-selector{font-size:20px !important;color:#fff;text-transform:capitalize;position:relative;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}.option-theme.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{font-size:1.13em;font-weight:550;}.bg-image-theme.__jsx-style-dynamic-selector{border:1px solid grey;overflow:hidden;width:100%;height:250px;background-image:linear-gradient( 180deg, rgba(28,41,62,0.2) 0, rgba(28,41,62,0.3) 30%, rgba(7,15,29,0.9) );background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.form-holder.__jsx-style-dynamic-selector{padding-left:40px;padding-right:10px;}.my-experience.__jsx-style-dynamic-selector{display:block;padding-bottom:10px;padding-top:10px;margin-top:20px;}.call-to-action-holder.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.textarea-1.__jsx-style-dynamic-selector{width:95%;height:60px;border-radius:5px;outline:0;padding:10px;resize:none;font-family:inherit;font-weight:500;border:1px solid #e6e8eb;}.form-rec-holder.__jsx-style-dynamic-selector{margin-bottom:30px;}.pro-input-text.__jsx-style-dynamic-selector{width:95%;height:100%;border-top-right-radius:5px;border-top-left-radius:5px;border:1px solid #e6e8eb;padding:10px;outline:0;font-family:inherit;font-weight:500;}.textarea-2.__jsx-style-dynamic-selector{width:95%;height:60px;outline:0;padding:10px;resize:none;border:1px solid #e6e8eb;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-family:inherit;font-weight:500;}.action-button.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;padding:10px;font-family:inherit;border-radius:2px;border:0;margin-bottom:15px;}.submit.__jsx-style-dynamic-selector{background-color:rgb(91,56,141);color:#fff;cursor:pointer;margin-left:10px;border:1px solid transparent;}.cancel.__jsx-style-dynamic-selector{background-color:#cb1a4a;color:#fff;}.submit.__jsx-style-dynamic-selector:hover{color:rgb(91,56,141);background-color:transparent;border:1px solid rgb(91,56,141);}.user-rec-img.__jsx-style-dynamic-selector{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;vertical-align:middle;}.user-chip.__jsx-style-dynamic-selector{background-image:url(".concat(profileImage, ");background-repeat:no-repeat;background-size:cover;background-position:center;width:50px;height:50px;border-radius:50px;position:relative;top:-60px;left:10px;z-index:1;}.add.__jsx-style-dynamic-selector{font-size:0.95em;font-weight:600;font-family:inherit;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;left:-30px;}.none.__jsx-style-dynamic-selector{cursor:not-allowed !important;color:#c3c3c3 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL21vZGFsL3RvcGljdmlld1BvcHVwTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNFFhLEFBR21DLEFBZUEsQUFLSixBQVVZLEFBUVQsQUFLSyxBQXFCSixBQUlKLEFBTUQsQUFNSCxBQVlTLEFBSVQsQUFZQSxBQWFNLEFBU2tCLEFBT1QsQUFLRixBQU1aLEFBVXdDLEFBY2xDLEFBYWEsVUF4R2xCLEFBZ0JBLEFBWUEsQ0F3Q1csR0FoSUwsQUFnREUsRUFxREosQ0FuRkEsQUFzSUEsQ0E1S0wsQUFlTSxBQWlERSxDQTRCckIsRUFrRCtCLENBbkdiLEFBc0NFLEFBZ0JVLEFBWWxCLEdBNEJDLENBM0dBLEdBN0JLLENBd0xTLEVBcEtDLEFBeUZiLEFBWUEsQUFRRixDQTNGYixBQXNJc0IsQ0F4R0gsQ0FyRG5CLENBMEhBLENBM0c0QixBQWtDNUIsQ0FyQmEsRUFzQ0QsR0FpREssRUFqSUUsQUE2R0wsQUFZUSxJQTlFUCxDQXNDQSxBQWVjLEFBNkNPLENBekVsQixBQXdGWSxFQWdCYixFQVlqQixFQTFFMkIsQ0ExRkMsQUE4R1QsSUFqSVYsQUFnRE4sQ0FuQmlCLEFBb0ROLEVBd0NNLEVBckRwQixDQXdHZSxDQTNLUCxLQXNFaUIsQ0FyRUUsQUFnRkwsQUFnRFMsRUFsQ0osRUE0REgsRUE5SEQsQ0FnRlMsQUErQmhDLENBbkJXLENBdEdFLFFBdUdRLEdBdEdILEFBOERBLEtBaEZNLENBMEpLLENBNURkLEVBa0NmLE1BZXFCLENBNUhFLEFBOERJLEFBd0MzQixDQWJpQyxHQWJyQixPQTlGTSxHQStGSSxHQTJEVCxRQXpFYixFQWhGcUIsQ0EwSlAsR0FjYSxDQTdETCxFQVpKLE1BNERHLE1BMUp5QixJQStGOUMsRUFZa0IsT0FoRVcsQUFnSFQsR0F6RkMsTUEwQ3JCLEdBbkZBLE1BbUlZLFNBaEhrQixDQTNDVCxBQTRKVCxLQWhCRyxLQWlCSCxJQTdJWixLQWZBLENBNkpBLE9BbEh3QixjQTJISixRQXpIQSxVQTBIUCxRQXpIWSxDQW1CekIsRUF1R0EsU0E1QmEsV0FDQyxZQUNVLHNCQUN4QiwwQ0FoR3FCLDZGQUVyQiIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC90b3BpY3ZpZXdQb3B1cE1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgdXNlcl9yZWNvbW1lbmRhdGlvbixcbiAgQWRkVXNlclJlYWN0aW9uVG9PcHRpb24sXG4gIEFERF9PUFRJT05fQ09OLFxuICBBRERfT1BUSU9OX1BST1xufSBmcm9tIFwiLi4vLi4vYXBpUmVxdWVzdHMvYXBpUmVxdWVzdHNcIjtcblxuY2xhc3MgVG9waWNWaWV3UG9wdXBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBybzogW10sXG4gICAgY29uOiBbXSxcbiAgICBhZGRQcm86IFwiXCIsXG4gICAgYWRkQ29uOiBcIlwiLFxuICAgIGV4cGVyaWVuY2U6IFwiXCIsXG4gICAgYWRkTW9yZURldGFpbHM6IFtdLFxuICAgIF9hZGRNb3JlRGV0YWlsczI6IFtdLFxuICAgIHByb0RldGFpbHM6IFwiXCIsXG4gICAgY29uRGV0YWlsczogXCJcIlxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vR2V0IHVzZXIgRGV0YWlsc1xuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyOiB7fVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnN0IF91c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgY29uc3Qge1xuICAgICAgcHJvLFxuICAgICAgY29uLFxuICAgICAgZXhwZXJpZW5jZSxcbiAgICAgIGFkZE1vcmVEZXRhaWxzLFxuICAgICAgX2FkZE1vcmVEZXRhaWxzMlxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgcXVlc3Rpb24sIHR5cGUsIG9wdGlvbiwgb3B0aW9uSW1hZ2UsIHNvY2tldElkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IF9kYXRhID0ge1xuICAgICAgcHJvLFxuICAgICAgY29uLFxuICAgICAgZXhwZXJpZW5jZSxcbiAgICAgIGFkZE1vcmVEZXRhaWxzLFxuICAgICAgX2FkZE1vcmVEZXRhaWxzMixcbiAgICAgIHVzZXJuYW1lOiBfdXNlci51c2VybmFtZSwgLy9kaXNwbGF5bmFtZSBtYXliZSB1c2VkIGluc3RlYWRcbiAgICAgIHVzZXJJZDogX3VzZXIuX2lkLFxuICAgICAgdXNlckltYWdlOiBfdXNlci5pbWFnZSxcbiAgICAgIG9wdGlvbjogb3B0aW9uLFxuICAgICAgb3B0aW9uSW1hZ2UsXG4gICAgICBxdWVzdGlvbixcbiAgICAgIHR5cGUsXG4gICAgICBzb2NrZXRJZFxuICAgIH07XG5cbiAgICBjb25zdCBfdHlwZSA9IHR5cGUgPT09IFwibGlrZVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHJ4biA9IHtcbiAgICAgIHVzZXJJZDogX3VzZXIuX2lkLFxuICAgICAgb3B0aW9uLFxuICAgICAgdHlwZTogX3R5cGVcbiAgICB9O1xuXG4gICAgdXNlcl9yZWNvbW1lbmRhdGlvbihfZGF0YSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG5cbiAgICBBZGRVc2VyUmVhY3Rpb25Ub09wdGlvbihyeG4pXG4gICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzLmRhdGEpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSkpO1xuICB9O1xuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlLCBuYW1lIH0gfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGNsb3NlQnRuID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0NsYXNzOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUFkZENvbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHVzZXIsIGFkZENvbiwgY29uRGV0YWlscyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9wdGlvbiwgb3B0aW9uSWQsIHF1ZXN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY29uX2RhdGEgPSB7XG4gICAgICBvcHRpb24sXG4gICAgICBvcHRpb25faWQ6IG9wdGlvbklkLFxuICAgICAgdXNlcl9pZDogdXNlci5faWQsXG4gICAgICB0aXRsZTogYWRkQ29uLFxuICAgICAgZGVzY3JpcHRpb246IGNvbkRldGFpbHMsXG4gICAgICBxdWVzdGlvbixcbiAgICAgIHVzZXJJbWFnZTogdXNlci5pbWFnZVxuICAgICAgLy9Vc2VySW1hZ2UgbWF5IGJlIGFkZGVkXG4gICAgfTtcblxuICAgIEFERF9PUFRJT05fQ09OKGNvbl9kYXRhKVxuICAgICAgLnRoZW4oYXhpb3NSZXNwb25zZSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF4aW9zUmVzcG9uc2UpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xuICAgICAgICAgIGNvbjogWy4uLnByZXZpb3VzU3RhdGUuY29uLCBhZGRDb25dLFxuICAgICAgICAgIF9hZGRNb3JlRGV0YWlsczI6IFsuLi5wcmV2aW91c1N0YXRlLl9hZGRNb3JlRGV0YWlsczIsIGNvbkRldGFpbHNdLFxuICAgICAgICAgIGFkZENvbjogXCJcIixcbiAgICAgICAgICBjb25EZXRhaWxzOiBcIlwiXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvL3JlbW92ZSBpbiBwcm9kdWN0aW9uXG5cbiAgICAgICAgYWxlcnQoXCJjb24gYWRkZWRcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGF4aW9zUmVzcG9uc2VFcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGF4aW9zUmVzcG9uc2VFcnJvcik7XG4gICAgICB9KTtcblxuICAgIC8vdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7IGluYzogcHJldmlvdXNTdGF0ZS5pbmMgKyAxIH0pKTtcbiAgfTtcblxuICBfaGFuZGxlQWRkUHJvID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgdXNlciwgYWRkUHJvLCBwcm9EZXRhaWxzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb3B0aW9uLCBvcHRpb25JZCwgcXVlc3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBwcm9fZGF0YSA9IHtcbiAgICAgIG9wdGlvbixcbiAgICAgIG9wdGlvbl9pZDogb3B0aW9uSWQsXG4gICAgICB1c2VyX2lkOiB1c2VyLl9pZCxcbiAgICAgIHRpdGxlOiBhZGRQcm8sXG4gICAgICBkZXNjcmlwdGlvbjogcHJvRGV0YWlscyxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgdXNlckltYWdlOiB1c2VyLmltYWdlXG4gICAgfTtcblxuICAgIEFERF9PUFRJT05fUFJPKHByb19kYXRhKVxuICAgICAgLnRoZW4oYXhpb3NSZXNwb25zZSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF4aW9zUmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcbiAgICAgICAgICBwcm86IFsuLi5wcmV2aW91c1N0YXRlLnBybywgYWRkUHJvXSxcbiAgICAgICAgICBhZGRNb3JlRGV0YWlsczogWy4uLnByZXZpb3VzU3RhdGUuYWRkTW9yZURldGFpbHMsIHByb0RldGFpbHNdLFxuICAgICAgICAgIGFkZFBybzogXCJcIixcbiAgICAgICAgICBwcm9EZXRhaWxzOiBcIlwiXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvL3JlbW92ZSBpbiBwcm9kdWN0aW9uXG4gICAgICAgIGFsZXJ0KFwicHJvIGFkZGVkXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChheGlvc1Jlc3BvbnNlRXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhheGlvc1Jlc3BvbnNlRXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWRkQ29uLCBhZGRQcm8sIGV4cGVyaWVuY2UsIGNvbkRldGFpbHMsIHByb0RldGFpbHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBvcHRpb24sIG9wdGlvbkltYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IFwiL3N0YXRpYy9ncmF2YXRhci5wbmdcIjtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlYy1jYXJkXCIgcmVmPXtlbCA9PiAodGhpcy5yZWNDYXJkaWUgPSBlbCl9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWltYWdlLXRoZW1lXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e29wdGlvbkltYWdlID8gb3B0aW9uSW1hZ2UgOiBcIi9zdGF0aWMvd29yLmpwZ1wifVxuICAgICAgICAgICAgICAgIGFsdD1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItcmVjLWltZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jaGlwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLXRoZW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJyZWMtcmVjb21tZW5kYXRpb25cIn0+TXkgUmVjb21tZW5kYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlYy1vcHRpb25cIj57b3B0aW9uID8gb3B0aW9uIDogXCJcIn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taG9sZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LWV4cGVyaWVuY2VcIj5NeSBFeHBlcmllbmNlPC9oMj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBlcmllbmNlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJleHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhLTFcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLaW5kbHkgc2hhcmUgeW91ciBleHBlcmllbmNlIHVzaW5nIHRoaXMgcHJvZHVjdC4gV2hhdCBhcmUgdGhlIG9wdGlvbnMgeW91IGNvbnNpZGVyZWQsIGlmIGFueVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tcmVjLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS1leHBlcmllbmNlXCI+UmVhc29ucyBJIHJlY29tbWVuZCB0aGlzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvLWlucHV0LXRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJBZGQgcHJvIGNhcHRpb24gaGVyZVwifVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkUHJvXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZFByb31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWEtMlwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGFkZGl0aW9uYWwgZGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9EZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FkZFBybyA/IFwiYWRkXCIgOiBcImFkZCBub25lXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUFkZFByb31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLXJlYy10ZXh0XCI+IEFkZCBwcm88L2E+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXJlYy1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktZXhwZXJpZW5jZVwiPlxuICAgICAgICAgICAgICAgICAgUmVhc29ucyBJIHdvdWxkbid0IHJlY29tbWVuZCB0aGlzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQWRkIGNvbiBjYXB0aW9uIGhlcmVcIn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZENvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByby1pbnB1dC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZENvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbkRldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWEtMlwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGFkZGl0aW9uYWwgZGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthZGRDb24gPyBcImFkZFwiIDogXCJhZGQgbm9uZVwifVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZENvbn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkLXJlYy10ZXh0XCI+IEFkZCBjb248L2E+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FsbC10by1hY3Rpb24taG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZUJ0bn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gY2FuY2VsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWV4cGVyaWVuY2V9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b24gc3VibWl0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnVzZXItcmVjLWNhcmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5vcHRpb24tdGhlbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5yZWMtcmVjb21tZW5kYXRpb24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5yZWMtb3B0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm9wdGlvbi10aGVtZSA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xM2VtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJnLWltYWdlLXRoZW1lIHtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgICAgICAgcmdiYSgyOCwgNDEsIDYyLCAwLjIpIDAsXG4gICAgICAgICAgICAgICAgICByZ2JhKDI4LCA0MSwgNjIsIDAuMykgMzAlLFxuICAgICAgICAgICAgICAgICAgcmdiYSg3LCAxNSwgMjksIDAuOSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZm9ybS1ob2xkZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5teS1leHBlcmllbmNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jYWxsLXRvLWFjdGlvbi1ob2xkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC50ZXh0YXJlYS0xIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU4ZWI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZm9ybS1yZWMtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnByby1pbnB1dC10ZXh0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlOGViO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRleHRhcmVhLTIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZThlYjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3VibWl0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2FuY2VsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IxYTRhO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnN1Ym1pdDpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig5MSwgNTYsIDE0MSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkxLCA1NiwgMTQxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC51c2VyLXJlYy1pbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC51c2VyLWNoaXAge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2ZpbGVJbWFnZX0pO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogLTYwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmFkZCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYWRkLXJlYy10ZXh0IHtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5ub25lIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNjM2MzYzMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9waWNWaWV3UG9wdXBNb2RhbDtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/modal/topicviewPopupModal.js */"))));
    }
  }]);

  return TopicViewPopupModal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TopicViewPopupModal);

/***/ }),

/***/ "./components/searchFilterCard.js":
/*!****************************************!*\
  !*** ./components/searchFilterCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var SearchFilterCard = function SearchFilterCard(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-507669326" + " " + "search-filter-card"
  }, data.slice(0, 4).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: item._id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: item._id,
      className: "jsx-507669326" + " " + "search-filter-image"
    }, item.optionImage[0] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.optionImage[0],
      alt: "item",
      className: "jsx-507669326"
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/image.png",
      alt: "item",
      className: "jsx-507669326"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-507669326" + " " + "search-filter-text"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/topic/".concat(item.question)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-507669326"
    }, item.question))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-507669326" + " " + "search-filter-callToAction"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-507669326"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    className: "jsx-507669326"
  }, "Can't find what you are looking for?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ask"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-507669326"
  }, "Add Question"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "507669326"
  }, ".search-filter-card.jsx-507669326{box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify-all;-webkit-justify-content:justify-all;-ms-flex-pack:justify-all;justify-content:justify-all;background-color:#f2f2f2;width:40.8vw;height:370px;margin-top:1px;margin-left:22px;z-index:2000 !important;position:fixed;y-overflow:scroll;}a.jsx-507669326{-webkit-text-decoration:none;text-decoration:none;font-family:Cabin;color:rgb(96,51,141);}.search-filter-card.jsx-507669326 .search-filter-image.jsx-507669326 img.jsx-507669326{position:relative;width:60px;height:auto;padding:10px;}.search-filter-card.jsx-507669326 .search-filter-text.jsx-507669326{position:relative;top:-28px;left:05vw;}.search-filter-callToAction.jsx-507669326{box-sizing:border-box;}.search-filter-callToAction.jsx-507669326 button.jsx-507669326{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;background:rgb(96,51,141);padding:10px;z-index:2000;text-align:center;font-family:verdana;text-transform:uppercase;font-size:10px;font-weight:bold;color:#f2f2f2;outline:0;border:0;border-radius:6px;width:120px;height:auto;position:absolute;left:32.5vh;margin-top:5px;-webkit-box-shadow:0px 0px 8px 2px #bf237166;-moz-box-shadow:0px 0px 8px 2px #bf237166;box-shadow:0px 0px 8px 2px #bf237166;-webkit-transition:1s;transition:1s;}@media screen and (max-width:600px){.search-filter-card.jsx-507669326{min-width:80vw;margin-left:-20px;margin-top:5px;}.search-filter-card.jsx-507669326 .search-filter-text.jsx-507669326{position:relative;left:06vw;padding:0px 30px;}.search-filter-card.jsx-507669326 .search-filter-image.jsx-507669326 img.jsx-507669326{position:relative;width:60px;height:auto;padding:10px;margin-right:3px;}.search-filter-callToAction.jsx-507669326 button.jsx-507669326{left:24vw;margin-top:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3NlYXJjaEZpbHRlckNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NTLEFBR3lELEFBZ0J2QixBQU1ILEFBT0EsQUFNSSxBQUlELEFBMkJKLEFBS0csQUFLQSxBQVFSLFVBQ0ssS0FsQkcsR0E1Q1QsQUFPRCxBQTBDRSxBQUtDLElBekNmLEdBa0RFLEdBdkRVLEFBMENTLENBakRQLEFBc0RFLElBVkcsS0FwQ25CLEdBL0J3QixBQXdCVCxBQXNERSxJQUxmLEdBTEEsRUFwRGtCLEFBdUJILElBZGpCLEFBc0RxQixTQTlFTixFQXVDZSxHQXZCTCxHQStEdkIsa0JBOURGLEVBdUJlLGFBQ0EsYUFDSyxrQkFDRSxFQTFDRSxrQkEyQ0cseUJBQ1YsZUFDRSxpQkFDSCxHQTdDYyxXQThDbEIsVUFDRCxTQUNTLGtCQUNOLFlBQ0EsWUFDTSxrQkFDTixZQUNHLGVBQzhCLEVBckRwQix5QkFDWixhQUNBLEtBb0Q2QixRQW5EM0IsZUFDRSxpQkFDTyxFQWtEYSxzQkFqRHRCLGVBQ0csQUFpREosa0JBaERoQixrQkFpREEiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL2NvbXBvbmVudHMvc2VhcmNoRmlsdGVyQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBTZWFyY2hGaWx0ZXJDYXJkID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZmlsdGVyLWNhcmRcIj5cbiAgICAgIHtkYXRhLnNsaWNlKDAsIDQpLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpdGVtLl9pZH0+XG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5faWR9IGNsYXNzTmFtZT1cInNlYXJjaC1maWx0ZXItaW1hZ2VcIj5cbiAgICAgICAgICAgICAge2l0ZW0ub3B0aW9uSW1hZ2VbMF0gPyAoXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0ub3B0aW9uSW1hZ2VbMF19IGFsdD1cIml0ZW1cIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9zdGF0aWMvaW1hZ2UucG5nXCJ9IGFsdD1cIml0ZW1cIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1maWx0ZXItdGV4dFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3RvcGljLyR7aXRlbS5xdWVzdGlvbn1gfT5cbiAgICAgICAgICAgICAgICA8YT57aXRlbS5xdWVzdGlvbn08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZmlsdGVyLWNhbGxUb0FjdGlvblwiPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICBDYW4ndCBmaW5kIHdoYXQgeW91IGFyZSBsb29raW5nIGZvcj9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXNrXCI+XG4gICAgICAgICAgPGJ1dHRvbj5BZGQgUXVlc3Rpb248L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5zZWFyY2gtZmlsdGVyLWNhcmQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGp1c3RpZnktYWxsO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgIHdpZHRoOiA0MC44dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDM3MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB5LW92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgICAgICAgICBjb2xvcjogcmdiKDk2LCA1MSwgMTQxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VhcmNoLWZpbHRlci1jYXJkIC5zZWFyY2gtZmlsdGVyLWltYWdlIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlYXJjaC1maWx0ZXItY2FyZCAuc2VhcmNoLWZpbHRlci10ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTI4cHg7XG4gICAgICAgICAgICBsZWZ0OiAwNXZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWFyY2gtZmlsdGVyLWNhbGxUb0FjdGlvbiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWFyY2gtZmlsdGVyLWNhbGxUb0FjdGlvbiBidXR0b24ge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDk2LCA1MSwgMTQxKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAzMi41dmg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjYmYyMzcxNjY7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjYmYyMzcxNjY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggI2JmMjM3MTY2O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5zZWFyY2gtZmlsdGVyLWNhcmQge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDgwdnc7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlYXJjaC1maWx0ZXItY2FyZCAuc2VhcmNoLWZpbHRlci10ZXh0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0OiAwNnZ3O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWFyY2gtZmlsdGVyLWNhcmQgLnNlYXJjaC1maWx0ZXItaW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlYXJjaC1maWx0ZXItY2FsbFRvQWN0aW9uIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGxlZnQ6IDI0dnc7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRmlsdGVyQ2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/searchFilterCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchFilterCard);

/***/ }),

/***/ "./components/topicview/UserAddedQuestionCard.js":
/*!*******************************************************!*\
  !*** ./components/topicview/UserAddedQuestionCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_2__);




var UserAddedQuestionCard = function UserAddedQuestionCard(_ref) {
  var url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1082840909" + " " + "card-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1082840909" + " " + "hello"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1082840909" + " " + "hello-header"
  }, "Thanks for asking this question!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1082840909" + " " + "text"
  }, "The Community will add options and share their opinions."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1082840909" + " " + "text"
  }, "Meanwhile, share your question to get answers from your network."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      marginTop: "5px"
    },
    className: "jsx-1082840909"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1082840909" + " " + "span"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareButton"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"], {
    size: 32,
    round: true,
    url: url
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1082840909" + " " + "span"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterShareButton"], {
    url: url
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"], {
    size: 32,
    round: true
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1082840909"
  }, ".card-list.jsx-1082840909{overflow:hidden;background-color:#fdfdfd;margin-bottom:36px;padding:18px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);border:1px solid #e6e8eb;border-radius:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;font-family:Cabin;}.text.jsx-1082840909{font-size:16px;text-align:center;}.hello-header.jsx-1082840909{margin-bottom:20px;font-size:18px;font-weight:600;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;}.span.jsx-1082840909{padding:10px;}.hello.jsx-1082840909{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media (min-width:900px){.card-list.jsx-1082840909{overflow:hidden;background-color:#fdfdfd;margin-bottom:36px;padding:18px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);border:1px solid #e6e8eb;border-radius:15px;min-width:850px;min-height:250px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;font-family:Cabin;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy9Vc2VyQWRkZWRRdWVzdGlvbkNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQixBQUd5QixBQWtCRCxBQUtJLEFBT04sQUFJQSxBQVFLLGFBWHBCLEVBWm9CLENBbEJPLEFBMENFLEdBbkJaLGNBSmpCLENBS2tCLE9BdkJHLEFBMENFLFNBbEJBLFVBdkJSLEFBMENFLGFBekM2QixBQTBDRSxDQVh2Qix3Q0E5QkUsQUEwQ0UseUJBekNSLEFBMENFLFlBckJ2QixPQWxCZSxBQXdDSyxlQWJDLENBY0EsaUJBQ0oseUNBekNRLGlDQTBDRSxDQWZILGlFQTFCSCxhQTJCckIsb0JBZXVCLDREQXpDQyxzQkFDSixXQXlDTSxPQXZDMUIsZUF3Q3NCLGtCQUVwQiIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy90b3BpY3ZpZXcvVXNlckFkZGVkUXVlc3Rpb25DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tJY29uLFxuICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gIEVtYWlsU2hhcmVCdXR0b24sXG4gIEVtYWlsSWNvbixcbiAgVHdpdHRlckljb25cbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5jb25zdCBVc2VyQWRkZWRRdWVzdGlvbkNhcmQgPSAoeyB1cmwgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlzdFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG8taGVhZGVyXCI+VGhhbmtzIGZvciBhc2tpbmcgdGhpcyBxdWVzdGlvbiE8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICBUaGUgQ29tbXVuaXR5IHdpbGwgYWRkIG9wdGlvbnMgYW5kIHNoYXJlIHRoZWlyIG9waW5pb25zLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgTWVhbndoaWxlLCBzaGFyZSB5b3VyIHF1ZXN0aW9uIHRvIGdldCBhbnN3ZXJzIGZyb20geW91ciBuZXR3b3JrLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5cIj5cbiAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfSB1cmw9e3VybH0gLz5cbiAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuXCI+XG4gICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvbiB1cmw9e3VybH0+XG4gICAgICAgICAgICA8VHdpdHRlckljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfSAvPlxuICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FyZC1saXN0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU4ZWI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIC8vIG1pbi13aWR0aDogNDUwcHg7XG4gICAgICAgIC8vIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVsbG8taGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICB9XG5cbiAgICAgIC5zcGFuIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmhlbGxvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAgICAgICAuY2FyZC1saXN0IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU4ZWI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDg1MHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBZGRlZFF1ZXN0aW9uQ2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/UserAddedQuestionCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserAddedQuestionCard);

/***/ }),

/***/ "./components/topicview/optionCardComponent.js":
/*!*****************************************************!*\
  !*** ./components/topicview/optionCardComponent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");











var ScoreCard = {
  display: "inline-block",
  height: "40px",
  width: "40px",
  borderRadius: "4px",
  backgroundImage: "linear-gradient(135deg,#737373,#171717)"
};
var Score = {
  position: "relative",
  top: "5px",
  padding: "0px 8px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  color: "#fff",
  fontSize: "16px"
};
var customStyle = {
  width: "850px",
  borderRadius: "15px",
  overflow: "hidden",
  backgroundColor: "#fdfdfd",
  marginBottom: "36px",
  padding: "18px",
  boxShadow: "0 4px 16px 0 rgba(0, 0, 0, .05)",
  border: "1px solid #e6e8eb",
  color: "#4d4d4d",
  fontSize: "16px"
};
var TableHeadCustomStyle = {
  textTransform: "uppercase"
};
var TableOption = {
  cursor: "pointer"
};
var ViewMoreStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var InfoCircleStyle = {
  position: "relative",
  top: "5px",
  marginLeft: " 4px",
  cursor: "pointer"
};

var OptionCardie =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(OptionCardie, _React$Component);

  function OptionCardie() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OptionCardie);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OptionCardie)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      InfoCircleColor: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeCircleInfoColor", function (bool) {
      _this.setState({
        InfoCircleColor: bool
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OptionCardie, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var InfoCircleColor = this.state.InfoCircleColor;
      var _this$props = this.props,
          optionConsidered = _this$props.optionConsidered,
          data = _this$props.data;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2259390477" + " " + "option-considered-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2259390477"
      }, optionConsidered, " Options Considered"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: InfoCircleStyle,
        onMouseEnter: function onMouseEnter() {
          _this2.handleChangeCircleInfoColor(true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.handleChangeCircleInfoColor(false);
        },
        className: "jsx-2259390477"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-2259390477"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__["InfoCircle"], {
          color: InfoCircleColor ? "rgb(91, 56, 141)" : "#000"
        })),
        content: "These ".concat(optionConsidered, " options are being considered by the community.\n                     Please vote for the option you think should be highly recommended."),
        position: "bottom center",
        style: {
          backgroundColor: "#444",
          color: " #fff"
        }
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2259390477"
      }, ".option-considered-card.jsx-2259390477{width:750px !important, border-radius:15px, overflow:hidden, background-color:#fdfdfd, margin-bottom:36px, padding:18px, box-shadow:0 4px 16px 0 rgba(0,0,0,.05), border:1px solid #e6e8eb;}.option-considered-container.jsx-2259390477{font-size:20px;font-weight:700;line-height:27px;position:relative;text-transform:uppercase;-webkit-letter-spacing :0.4px;-moz-letter-spacing :0.4px;-ms-letter-spacing :0.4px;letter-spacing :0.4px;}@media screen and (max-width:768px){.option-considered-container.jsx-2259390477{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy9vcHRpb25DYXJkQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJVyxBQVlZLEFBRW9CLEFBVUEsYUFDZixFQVZnQixnQkFDQyxpQkFDQyxrQkFDTyx5QkFDSCxnR0FQMUIsU0FRRSIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy90b3BpY3ZpZXcvb3B0aW9uQ2FyZENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlciwgVGFibGUsIFBvcHVwIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3TW9yZSwgSW5mb0NpcmNsZSB9IGZyb20gXCIuLi9JY29uc1wiO1xuXG5jb25zdCBTY29yZUNhcmQgPSB7XG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gIGhlaWdodDogXCI0MHB4XCIsXG4gIHdpZHRoOiBcIjQwcHhcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywjNzM3MzczLCMxNzE3MTcpXCJcbn07XG5cbmNvbnN0IFNjb3JlID0ge1xuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB0b3A6IFwiNXB4XCIsXG4gIHBhZGRpbmc6IFwiMHB4IDhweFwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBmb250U2l6ZTogXCIxNnB4XCJcbn07XG5cbmNvbnN0IGN1c3RvbVN0eWxlID0ge1xuICB3aWR0aDogXCI4NTBweFwiLFxuICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZGZkZmRcIixcbiAgbWFyZ2luQm90dG9tOiBcIjM2cHhcIixcbiAgcGFkZGluZzogXCIxOHB4XCIsXG4gIGJveFNoYWRvdzogXCIwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAuMDUpXCIsXG4gIGJvcmRlcjogXCIxcHggc29saWQgI2U2ZThlYlwiLFxuICBjb2xvcjogXCIjNGQ0ZDRkXCIsXG4gIGZvbnRTaXplOiBcIjE2cHhcIlxufTtcblxuY29uc3QgVGFibGVIZWFkQ3VzdG9tU3R5bGUgPSB7XG4gIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbn07XG5cbmNvbnN0IFRhYmxlT3B0aW9uID0ge1xuICBjdXJzb3I6IFwicG9pbnRlclwiXG59O1xuXG5jb25zdCBWaWV3TW9yZVN0eWxlID0ge1xuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxufTtcblxuY29uc3QgSW5mb0NpcmNsZVN0eWxlID0ge1xuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB0b3A6IFwiNXB4XCIsXG4gIG1hcmdpbkxlZnQ6IFwiIDRweFwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiXG59O1xuXG5jbGFzcyBPcHRpb25DYXJkaWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBJbmZvQ2lyY2xlQ29sb3I6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlQ2lyY2xlSW5mb0NvbG9yID0gYm9vbCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBJbmZvQ2lyY2xlQ29sb3I6IGJvb2xcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBJbmZvQ2lyY2xlQ29sb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBvcHRpb25Db25zaWRlcmVkLCBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWNvbnNpZGVyZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHNwYW4+e29wdGlvbkNvbnNpZGVyZWR9IE9wdGlvbnMgQ29uc2lkZXJlZDwvc3Bhbj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e0luZm9DaXJjbGVTdHlsZX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUNpcmNsZUluZm9Db2xvcih0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VDaXJjbGVJbmZvQ29sb3IoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8SW5mb0NpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17SW5mb0NpcmNsZUNvbG9yID8gXCJyZ2IoOTEsIDU2LCAxNDEpXCIgOiBcIiMwMDBcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2BUaGVzZSAke29wdGlvbkNvbnNpZGVyZWR9IG9wdGlvbnMgYXJlIGJlaW5nIGNvbnNpZGVyZWQgYnkgdGhlIGNvbW11bml0eS5cbiAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB2b3RlIGZvciB0aGUgb3B0aW9uIHlvdSB0aGluayBzaG91bGQgYmUgaGlnaGx5IHJlY29tbWVuZGVkLmB9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tIGNlbnRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNDQ0XCIsIGNvbG9yOiBcIiAjZmZmXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxUYWJsZSBjZWxsZWQgcGFkZGVkIHN0eWxlPXtjdXN0b21TdHlsZX0+XG4gICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIHN0eWxlPXtUYWJsZUhlYWRDdXN0b21TdHlsZX0+XG4gICAgICAgICAgICAgICAgUmF0aW5nXG4gICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgc3R5bGU9e1RhYmxlSGVhZEN1c3RvbVN0eWxlfT5cbiAgICAgICAgICAgICAgICBPcHRpb25cbiAgICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBzdHlsZT17VGFibGVIZWFkQ3VzdG9tU3R5bGV9PlxuICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgc3R5bGU9e1RhYmxlSGVhZEN1c3RvbVN0eWxlfT5cbiAgICAgICAgICAgICAgICBTaXplXG4gICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgc3R5bGU9e1RhYmxlSGVhZEN1c3RvbVN0eWxlfT5PczwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICBcbiAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3cga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17U2NvcmVDYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtTY29yZX0+e2l0ZW0ucmF0aW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGwgc3R5bGU9e1RhYmxlT3B0aW9ufT57aXRlbS5vcHRpb259PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+LTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAtIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+LTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgPC9UYWJsZT4gKi99XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgIFxuICAgICAgICAgICAgLm9wdGlvbi1jb25zaWRlcmVkLWNhcmQge1xuICAgICAgICAgICAgICB3aWR0aDogNzUwcHggIWltcG9ydGFudCxcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZCxcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweCxcbiAgICAgICAgICAgICAgcGFkZGluZzogMThweCxcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgLjA1KSxcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZThlYlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub3B0aW9uLWNvbnNpZGVyZWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZyA6IDAuNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLm9wdGlvbi1jb25zaWRlcmVkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25DYXJkaWU7XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/optionCardComponent.js */"));
    }
  }]);

  return OptionCardie;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OptionCardie);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tab */ "./components/topicview/tab.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__);
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
      LikeColor: _this.props.LikeColor,
      DisLikeColor: _this.props.DisLikeColor,
      LikeNumber: _this.props.LikeNumber,
      DisLikeNumber: _this.props.DisLikeNumber // user_id : this.props.user_id

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
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var LikeColor, DisLikeColor;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.getSocketResponse();

                if (!JSON.parse(localStorage.getItem("user_details"))) {
                  _context.next = 9;
                  break;
                }

                _context.next = 4;
                return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["GetUserReactionToLikeOption"])(JSON.parse(localStorage.getItem("user_details"))._id, this.state.data);

              case 4:
                LikeColor = _context.sent;
                _context.next = 7;
                return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_18__["GetUserReactionToDisLikeOption"])(JSON.parse(localStorage.getItem("user_details"))._id, this.state.data);

              case 7:
                DisLikeColor = _context.sent;
                this.setState({
                  LikeColor: LikeColor.data,
                  DisLikeColor: DisLikeColor.data
                });

              case 9:
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
    value: function render() {
      var _this2 = this;

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
        var like = ioResponseLike ? _this2.state._like : item.like;
        var dislike = ioResponseDisLike ? _this2.state._dislike : item.dislike;

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
          }, _this2.state.LikeNumber[item.option] - _this2.state.DisLikeNumber[item.option])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
                  _this2.setState({
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

                _this2.setState({
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
                _this2.setState({
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
                return _this2.handleSpam(item.option);
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
              return _this2.handleShowModal(true, item.mediaUrl, item._id);
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
            UpdateCon: _this2.handleUpdateCon,
            UpdatePro: _this2.handleUpdatePro
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
                _this2.setState({
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
                _this2.handlelike(_unique);
              }
              ;
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "like-btn"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon lik"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_up"], {
            color: _this2.state.LikeColor[item.option]
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((like ? "btn-content btn-content-active" : "btn-content") || "")
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
          }, _this2.state.LikeNumber[item.option]))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
            onClick: function onClick() {
              if (!JSON.parse(localStorage.getItem("user_details"))) {
                _this2.setState({
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
                  _this2.handleDislike(_unique);
                }
                ;
                return;
              }
            },
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "dislike-btn"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon dis"
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_down"], {
            color: _this2.state.DisLikeColor[item.option]
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((_disliked ? "btn-content btn-content-active" : "btn-content") || "")
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
          }, _this2.state.DisLikeNumber[item.option]))))));
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
                _this2.setState({
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

              _this2.setState({
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
              _this2.setState({
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
              return _this2.handleSpam(item.option);
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
          UpdateCon: _this2.handleUpdateCon,
          UpdatePro: _this2.handleUpdatePro
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
              _this2.setState({
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
              _this2.handlelike(_unique);
            }
            ;
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "like-btn"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon lik"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_up"], {
          color: _this2.state.LikeColor[item.option]
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((like ? "btn-content btn-content-active" : "btn-content") || "")
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
        }, _this2.state.LikeNumber[item.option]))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          onClick: function onClick() {
            if (!JSON.parse(localStorage.getItem("user_details"))) {
              _this2.setState({
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
                _this2.handleDislike(_unique);
              }
              ;
              return;
            }
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "dislike-btn"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "thumb-icon dis"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["Thumb_down"], {
          color: _this2.state.DisLikeColor[item.option]
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((_disliked ? "btn-content btn-content-active" : "btn-content") || "")
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "recommend-text num"
        }, _this2.state.DisLikeNumber[item.option]))))));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.handleDivClose(e);
        },
        ref: function ref(el) {
          return _this2.div = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((showSignInOverlay ? "overlayShow showSignin-container" : "overlay") || "")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        onClick: function onClick() {
          _this2.setState({
            showSignInOverlay: false,
            UserLoggedIn: false
          });
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "close"
      }, "\xD7"), !UserLoggedIn && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_pages_signin__WEBPACK_IMPORTED_MODULE_19__["default"], {
        openSignup: this.openSignupOverlay
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.handleDivClose(e);
        },
        ref: function ref(el) {
          return _this2.div = el;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + ((UserClickedSignup ? "overlayShow showSignin-container" : "overlay") || "")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("em", {
        onClick: function onClick() {
          _this2.setState({
            UserClickedSignup: false
          });
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "close"
      }, "\xD7"), UserClickedSignup && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_pages_signup__WEBPACK_IMPORTED_MODULE_20__["default"], {
        openLogin: this.openLoginOverlay
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.closeModal(e);
        },
        ref: function ref(el) {
          return _this2.recCard = el;
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
          return _this2.handleSaveUpdatedOption();
        }
      }, "Save Changes")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"], {
        style: {
          marginTop: "70px"
        },
        show: updatePro,
        onHide: function onHide() {
          return _this2.handleUpdatePro(false);
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
          return _this2.onOptionUpdateChange(e);
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
          return _this2.onOptionUpdateChange(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        variant: "secondary",
        onClick: function onClick() {
          return _this2.handleUpdatePro(false);
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
          return _this2.handleUpdateCon(false);
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
          return _this2.onOptionUpdateChange(e);
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
          return _this2.onOptionUpdateChange(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a.dynamic([["1464024445", [profileImageUrl]]]) + " " + "update-option"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        variant: "secondary",
        onClick: function onClick() {
          return _this2.handleUpdateCon(false);
        }
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        style: {
          backgroundColor: "rgb(91, 56, 141)",
          border: 0
        },
        onClick: function onClick() {
          return _this2.handleConUpdate();
        }
      }, "Save Changes")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"], {
        style: {
          marginTop: "70px"
        },
        show: this.state.updateImage,
        onHide: function onHide() {
          return _this2.handleShowModal(false);
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
          return _this2.onOptionUpdateChange(e);
        },
        onKeyUp: function onKeyUp(e) {
          return _this2.addImageUrlToImageArray(e);
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
            return _this2.setState({
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
          return _this2.handleShowModal(false);
        }
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["Button"] // variant="primary"
      , {
        style: {
          backgroundColor: "rgb(91, 56, 141)",
          border: 0
        },
        onClick: function onClick() {
          return _this2.handleUpdateImage();
        },
        disabled: optionImageAdded
      }, optionImageAdded ? "Saved" : "Save Changes")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1464024445",
        dynamic: [profileImageUrl]
      }, ".image-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.image-container.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{width:50px;height:50px;border:1px solid grey;padding:5px;border-radius:4px;margin-right:6px;}.im.__jsx-style-dynamic-selector{max-width:100%;vertical-align:middle;}.card-list.__jsx-style-dynamic-selector{overflow:hidden;background-color:#fdfdfd;margin-bottom:36px;padding:18px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);border:1px solid #e6e8eb;border-radius:15px;min-width:850px;min-height:300px;box-sizing:border-box;font-family:Cabin;}.fix.__jsx-style-dynamic-selector{margin-bottom:30px;}.topicview-close-icon.__jsx-style-dynamic-selector{left:91%;color:rgb(91,56,141);background:#e6ecf0;}.update-option.__jsx-style-dynamic-selector{width:300px;border:1px solid grey;border-radius:3px;padding:10px;outline:0;font-family:inherit;font-weight:600;}.update-option-form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.add-rec-popup-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.update-option-form.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{padding:6px;}.score-card.__jsx-style-dynamic-selector{cursor:pointer;background-image:linear-gradient(135deg,#737373,#171717);color:#fff;text-align:center;width:30px;height:30px;display:inline-block;border-radius:2px;}.score.__jsx-style-dynamic-selector{position:relative;top:4px;}.showSignin-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.close.__jsx-style-dynamic-selector{font-size:56px;position:relative;margin-top:-550px;left:50%;color:rgb(91,56,141);cursor:pointer;}a.__jsx-style-dynamic-selector{color:#222;}.more-icon-button.__jsx-style-dynamic-selector{background:#eee;border:0;cursor:pointer;border-radius:35px;outline:0;height:35px;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.option-name.__jsx-style-dynamic-selector{display:inline-block;width:100%;}.option-name-question.__jsx-style-dynamic-selector:hover{color:rgb(96,56,141);cursor:pointer;}.option-name-question.__jsx-style-dynamic-selector{font-size:24px;position:relative;top:7px;text-transform:Capitalize;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;}.option-image.__jsx-style-dynamic-selector{width:100%;height:100%;margin:0;padding:0;}.little-card.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.little-card.__jsx-style-dynamic-selector .two.__jsx-style-dynamic-selector{padding:5px;background:#fdfdfd;height:180px;width:33.33%;border:1px solid transparent;border-radius:9px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.07);text-align:center;margin-top:15px;margin-right:6px;box-sizing:border-box;}.little-card.__jsx-style-dynamic-selector .twoo.__jsx-style-dynamic-selector{padding:5px;background:#fdfdfd;height:180px;width:50%;border:1px solid transparent;border-radius:9px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.07);text-align:center;margin-top:15px;margin-right:6px;box-sizing:border-box;}.add-media.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#58647b;background-color:#f7f7f7 !important;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hideonMoblie.__jsx-style-dynamic-selector{display:block;}@media screen and (max-width:768px){.hideonMoblie.__jsx-style-dynamic-selector{display:none;}}.little-card.__jsx-style-dynamic-selector .twoo.__jsx-style-dynamic-selector:hover{background:linear-gradient(to left,#fafafa,#eee);cursor:pointer;}.none.__jsx-style-dynamic-selector{cursor:not-allowed !important;color:#c3c3c3 !important;}.my-experience.__jsx-style-dynamic-selector{display:block;padding-bottom:10px;padding-top:10px;}.thumb-icon.__jsx-style-dynamic-selector{position:relative;top:2px;}.btn-content.__jsx-style-dynamic-selector{position:relative;top:-05px;margin-right:3px;color:grey;}.btn-content.get-it.__jsx-style-dynamic-selector{color:#fff !important;}.dis.__jsx-style-dynamic-selector{top:3px;}h2.__jsx-style-dynamic-selector{font-size:1.2em;font-family:inherit;}.option.__jsx-style-dynamic-selector{position:relative;top:-110px;left:100px;font-family:Cabin;}.action-button.__jsx-style-dynamic-selector{font-size:1.2em;font-weight:600;padding:10px;font-family:inherit;border-radius:2px;border:0;margin-bottom:10px;}.cancel.__jsx-style-dynamic-selector{margin-left:200px;}.submit.__jsx-style-dynamic-selector{margin-left:10px;}.add.__jsx-style-dynamic-selector{position:relative;left:-47px;top:20px;font-size:0.95em;font-weight:600;font-family:inherit;cursor:pointer;}.form-rec-holder.__jsx-style-dynamic-selector{margin-bottom:30px;}.textarea-1.__jsx-style-dynamic-selector{width:40vw;height:60px;border-radius:5px;outline:0;padding:10px;resize:none;font-family:inherit;font-weight:700;}.textarea-2.__jsx-style-dynamic-selector{width:40vw;height:60px;outline:0;padding:10px;resize:none;border:1px solid #e6e8eb;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-family:inherit;font-weight:700;}.__jsx-style-dynamic-selector::-webkit-input-placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.__jsx-style-dynamic-selector::-moz-placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.__jsx-style-dynamic-selector:-ms-input-placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.__jsx-style-dynamic-selector::placeholder{font-size:0.9em;font-family:Cabin;font-weight:600;}.pro-input-text.__jsx-style-dynamic-selector{width:40vw;height:100%;border-top-right-radius:5px;border-top-left-radius:5px;border:1px solid #e6e8eb;padding:10px;outline:0;font-family:inherit;font-weight:700;}.form-holder.__jsx-style-dynamic-selector{padding-left:10%;padding-top:2px;}.get-it-btn.__jsx-style-dynamic-selector{font-family:Cabin;font-weight:600;font-size:1em;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;height:40px;outline:0;border:2px solid #4a4a4a;cursor:pointer !important;background:#4a4a4a;border-radius:9px;}.more-icon.__jsx-style-dynamic-selector{position:relative;float:right;display:inline-block;cursor:pointer;}.rec-btn.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;margin-top:5px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.rec-btn.__jsx-style-dynamic-selector .rec-holder.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.recommend-text.num.__jsx-style-dynamic-selector{position:relative;top:-2px;left:2px;}.recommend-text.numie.__jsx-style-dynamic-selector{position:relative;top:-4px;left:5px;}@media only screen and (max-width:360px){.rec-btn.__jsx-style-dynamic-selector .rec-holder.__jsx-style-dynamic-selector{position:relative;}}@media only screen and (min-width:360px) and (max-width:470px){.rec-btn.__jsx-style-dynamic-selector .rec-holder.__jsx-style-dynamic-selector{top:10px;position:relative;}.close.__jsx-style-dynamic-selector{font-size:56px;position:relative;margin-top:-500px;left:80%;}}.like-btn.__jsx-style-dynamic-selector{font-size:1.2em;font-family:Cabin;font-weight:600;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;border-top-left-radius:9px;border-bottom-left-radius:9px;outline:0;padding:0;border:0;height:40px;cursor:pointer !important;background:#fff;text-align:center;margin-right:5px;}.dislike-btn.__jsx-style-dynamic-selector{font-size:1.2em;font-family:Cabin;font-weight:600;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;border-top-right-radius:9px;border-bottom-right-radius:9px;height:40px;outline:0;border:0;cursor:pointer !important;color:grey;background:#fff;padding-left:8px;}.overlay.__jsx-style-dynamic-selector{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgba(0,0,0,0.05);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}.overlayShow.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:#fdfdfd;overflow-x:hidden;overflow-y:visible;-webkit-transition:0.5s;transition:0.5s;}.overlayShowie.__jsx-style-dynamic-selector{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}.user-chip.__jsx-style-dynamic-selector{background-image:url(".concat(profileImageUrl, ");background-repeat:no-repeat;background-size:cover;background-position:center;width:50px;height:50px;border-radius:50px;position:relative;top:-60px;left:10px;z-index:1;}.user-rec-img.__jsx-style-dynamic-selector{width:100%;height:200px;}.user-rec-card.__jsx-style-dynamic-selector{position:relative;width:50%;min-height:550px;left:25%;background-color:#fafafa;box-sizing:border-box;border-radius:10px;box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);margin-bottom:10px;}@media (min-width:768px){.topicview-close-icon.__jsx-style-dynamic-selector{left:80%;}}@media screen and (min-width:320px) and (max-width:509px){.card-list.__jsx-style-dynamic-selector{min-width:0px;width:93vw;min-height:300px;margin-left:0;}}@media (min-width:509px) and (max-width:600px){.card-list.__jsx-style-dynamic-selector{min-width:0px;width:94vw;min-height:300px;margin-left:0;}}@media (min-width:600px) and (max-width:900px){.card-list.__jsx-style-dynamic-selector{min-width:0px;width:94vw;min-height:300px;margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy9vcHRpb25MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXUyQ1csQUFHNEIsQUFJRixBQVFJLEFBS0MsQUFlRyxBQUlWLEFBTUcsQUFTQyxBQU9BLEFBTUQsQUFJRyxBQWFHLEFBS0wsQUFLRSxBQVVKLEFBR0ssQUFZSyxBQUlFLEFBSVIsQUFRSixBQU9XLEFBVVYsQUFlQSxBQWVDLEFBUUMsQUFLQyxBQUtvQyxBQUtyQixBQUloQixBQU1JLEFBTUEsQUFNSSxBQUlkLEFBSVEsQUFLRSxBQU9GLEFBVUUsQUFJRCxBQUlDLEFBVUMsQUFJUixBQVdBLEFBYUssQUFNTCxBQVlNLEFBS0MsQUFhQSxBQVVMLEFBYVMsQUFNSixBQUtBLEFBUUUsQUFXVCxBQVlNLEFBUUQsQUFpQkEsQUFpQkosQUFXQSxBQWFBLEFBY3VDLEFBY3hDLEFBS08sQUFjUCxBQWNLLEFBU0EsQUFTQSxRQTdUbEIsQ0FoTXlCLEFBaVdILEFBNkhwQixFQTlmWSxBQWlHZCxBQStCYyxBQWdKQSxBQVdBLEFBbUJBLEFBNkxDLENBcmNTLEFBc0J4QixBQXFGcUIsQUFlQSxBQXVSWCxBQVdHLEFBYUEsQ0FuUlgsQ0FMRixBQW1Cc0IsQUFrVVAsQUFTQSxBQVNBLENBdGhCUyxBQXlEcUMsQUFzQnpDLEFBaUNBLEFBcVJFLENBaFlLLEFBdUZoQixBQWdJVyxBQVlKLEFBd0RFLEFBNkdBLEFBaUJBLENBeEtwQixBQTREa0IsQ0E3T1IsQUFtSUEsQUFNRSxBQW1CQyxBQWlCYixBQVFhLEFBNkRLLEFBYUosQUE2QkgsQUFLQSxBQVNULEFBeUhVLENBcGRaLEFBZ1BBLENBNEtpQixDQXhVSixBQUlJLENBbUJGLEFBcUZmLEFBdUllLENBbFdTLEFBZ0liLEFBZ0pTLEFBV1IsQUFtQmtCLEFBb0piLEFBYUEsQ0E0QmpCLENBdllpQixBQXdhSSxBQVNBLEFBU0EsQ0FqZHJCLEFBb0lBLENBd0pXLEFBS0EsQUFtQlQsQ0EzS2lCLEFBMFJBLENBdlFOLEFBeUJGLENBbE9VLEFBcUtNLEFBdUlKLENBM0xSLEFBZUEsQ0FoRGYsQUFpQlksQUErR0csQ0F6SkssQUFpQ1YsQUFvS0ssQUE4QmYsQUFtRnNCLENBdldGLEFBb0tELEFBOEZELEFBdUJGLEFBc0ZFLEFBaUJBLENBa0JILENBcFVmLEFBZ0hBLEFBc0lBLEFBS0EsQ0F2V0EsQ0EyUG1CLEFBZ01KLEFBYUEsRUEzV00sQUFxSUQsQ0E3TkMsQUE0R08sQUF3SmhCLENBL0laLEFBMllrQixBQVNBLEFBU0EsRUE3WUgsQUFlSCxDQWhLRSxBQXNORCxBQTBCUyxBQWlRWCxDQXJORyxFQW1DUyxBQXlIZixDQXhaUixBQStKaUIsQ0F5R2pCLEFBNkd1QixBQWlCQSxDQS9VWixBQW1IWCxBQXVFZSxBQTZCYyxBQWdDWixBQStESixBQXNETCxBQWFBLEFBV3NCLENBcmJmLEVBMkhnQixBQXdSdEIsQUF5RGtCLENBN1MzQixBQThEa0IsQ0E1Q2xCLEFBc1RFLEFBU0EsQUFTQSxDQTloQmtCLEFBaUpXLEFBa1R0QixBQWFBLENBdk9ULEFBbUQyQixDQXhMZixDQXhGRyxBQTJFVSxBQXNUdkIsQ0E0Q3FDLEdBMVB2QyxBQWtGYyxBQW1MYSxBQWFLLENBM2FwQixBQTBNUSxDQStGcEIsQ0F2TnVCLEVBbkJULEVBOEpRLENBcE1ULENBbERpQyxDQXBCOUMsQUFtRHlCLEFBT0osQUE0QkksQUE2RkEsQUF1S0QsQ0FsVkwsQUFzQ0csQ0EyT0EsRUE0QkssQ0E2S0gsQUF1QkEsRUExWlAsQUFjSixFQXRDTyxBQWlHQSxBQWdGVCxBQTRDcUIsR0EzSVosR0FtVEEsRUFqTUgsQ0FsUWpCLEFBcUdlLEFBMklNLEFBZ09pQixHQTFhcEIsQUFrWkUsQ0FoV3BCLEFBMkNxQixBQThJSCxBQWtFRCxBQVllLEtBaFNuQixBQWlHaUMsQUEwVGpCLEFBdUJSLEVBcE1OLENBNUorQixFQWtIOUMsQ0FpTXFCLElBN1pyQixBQTBNQSxBQW1HZ0MsQ0FwUmxCLEFBa05kLENBVWlDLEFBNkpmLENBN2FTLEVBa1NmLElBb01rQyxJQWpidkIsQ0FnWkgsQ0FsS0UsQUFzSkosRUFzQkwsV0E5Y1EsQUErY1AsR0EzVE0sQ0FrVEYsQ0F0TEksQ0EzTkYsQUFnRkEsQ0E4SkYsR0FhSixFQXNGZSxBQWlCQyxBQXlEVCxFQW5DckIsS0E1YWtCLEVBb0pBLENBNEpOLEFBcUxTLENBbE1yQixDQTVPQSxBQThFa0IsQ0EySUEsQ0F6SlcsQ0EvQkosQUFnV3pCLENBcFp5QixDQXFFekIsRUF1V29CLENBL0pPLEVBcFJOLEFBbUNBLEFBNkZMLENBNUpHLEVBb0pBLEVBaVBhLENBaFFiLEFBaVJjLENBdElqQyxBQXFOQSxHQWhDQSxJQXhTc0MsQ0FtVDFCLEdBL2NZLEVBcUpBLEdBZkEsQUEwS0ksRUFnS2hCLFVBM0VBLEFBNEVBLEVBM0RFLENBdEVkLEVBL1VvQixFQXFKcEIsR0FmQSxBQStQWSxBQTRFWixJQWpLcUIsQUFzR1QsQ0ExUFMsR0F3S3JCLEVBa0VXLEdBcFlYLENBcVpXLEtBaEJHLElBdEZNLEFBd0dRLFFBakJBLFVBdEY1QixNQTVOcUIsQ0EzREcsQUFPeEIsQUE0QkEsQ0E0VmEsR0FuU2IsS0FrUmtCLEdBa0JBLGFBakJFLEdBa0JELGVBakJBLEVBa0JuQixLQWhRQSxVQStPQSxrQkFoWEEsY0EyREEiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL2NvbXBvbmVudHMvdG9waWN2aWV3L29wdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEFQSV9VUkwgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5pbXBvcnQgQ3VzdG9tVGFiIGZyb20gXCIuL3RhYlwiO1xuaW1wb3J0IHsgUG9wdXAsIFBsYWNlaG9sZGVyLCBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBBZGRJY29uLCBNb3JlLCBUaHVtYl91cCwgVGh1bWJfZG93biwgSW5zZXJ0TGluayB9IGZyb20gXCIuLi9JY29uc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuaW1wb3J0IHtcbiAgX0dFVF9UT1BJQ1MsXG4gIEdFVF9SRUxBVEVEX1RPUElDU19VUkwsXG4gIEdFVF9TUEVDSUZJQ19UT1BJQ19VUkwsXG4gIEFkZFVzZXJSZWFjdGlvblRvT3B0aW9uLFxuICBHZXRVc2VyUmVhY3Rpb25Ub0xpa2VPcHRpb24sXG4gIEdldFVzZXJSZWFjdGlvblRvRGlzTGlrZU9wdGlvbixcbiAgTWFya09wdGlvbkFzU3BhbSxcbiAgVXBkYXRlT3B0aW9uLFxuICBTYXZlVXBkYXRlSGlzdG9yeSxcbiAgR2V0UXVlc3Rpb25VcGRhdGVkQXQsXG4gIEdldFF1ZXN0aW9uTnVtT2ZSZWNzLFxuICBVcGRhdGVDb24sXG4gIFVwZGF0ZVBybyxcbiAgU2F2ZUNvbkhpc3RvcnksXG4gIFNhdmVQcm9IaXN0b3J5LFxuICBBZGRPcHRpb25JbWFnZVxuXG59IGZyb20gXCIuLi8uLi9hcGlSZXF1ZXN0cy9hcGlSZXF1ZXN0c1wiO1xuXG5pbXBvcnQgU2lnbmluIGZyb20gXCIuLi8uLi9wYWdlcy9zaWduaW5cIjtcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4uLy4uL3BhZ2VzL3NpZ251cFwiO1xuaW1wb3J0IFRvcGljVmlld1BvcHVwTW9kYWwgZnJvbSBcIi4uL21vZGFsL3RvcGljdmlld1BvcHVwTW9kYWxcIjtcblxuY29uc3Qgc29ja2V0ID0gaW8oQVBJX1VSTCk7XG5cbmNvbnN0IGltYWdlQXJyID0gW1xuICBcIi9zdGF0aWMvdGhpc2hvdXNlLnBuZ1wiLFxuICBcIi9zdGF0aWMvYXZhdGFyLnBuZ1wiLFxuICBcIi9zdGF0aWMvdGhpc2hvdXNlLnBuZ1wiXG5dO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGluYzogMCwgLy9pbmMgc3RhbmRzIGZvciBpbmNyZWFzZVxuICAgIGRlYzogMCwgLy9kZWMgc3RhbmRzIGZvciBkZWNyZWFzZVxuICAgIGV4cGVyaWVuY2U6IFwiXCIsXG4gICAgc2hvd0NsYXNzOiBmYWxzZSxcbiAgICBjbGlja2VkT3B0aW9uRGV0YWlsczoge30sXG4gICAgdXNlcl9kYXRhOiB7fSxcbiAgICB0eXBlOiBcIlwiLFxuICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcbiAgICBpb1Jlc3BvbnNlTGlrZTogZmFsc2UsXG4gICAgaW9SZXNwb25zZURpc0xpa2U6IGZhbHNlLFxuICAgIFVzZXJMb2dnZWRJbjogdHJ1ZSxcbiAgICBzaG93U2lnbkluT3ZlcmxheTogZmFsc2UsXG4gICAgVXNlckNsaWNrZWRMb2dpbjogZmFsc2UsXG4gICAgVXNlckNsaWNrZWRTaWdudXA6IGZhbHNlLFxuICAgIHJ4bjogbnVsbCxcbiAgICBzaG93VXBkYXRlTW9kYWw6IGZhbHNlLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHVwZGF0ZWRPcHRpb246IFwiXCIsXG4gICAgdXBkYXRlZE9wdGlvbkxpbms6IFwiXCIsXG4gICAgcHJvVGl0bGU6IFwiXCIsXG4gICAgY29uVGl0bGU6IFwiXCIsXG4gICAgcHJvRGVzY3JpcHRpb246IFwiXCIsXG4gICAgY29uRGVzY3JpcHRpb246IFwiXCIsXG4gICAgdXBkYXRlQ29uOiBmYWxzZSxcbiAgICB1cGRhdGVQcm86IGZhbHNlLFxuICAgIHF1ZXN0aW9uOiBcIlwiLFxuICAgIG9wdGlvbjogXCJcIixcbiAgICBvcHRpb25JZDogXCJcIixcbiAgICB1cGRhdGVJbWFnZTogZmFsc2UsXG4gICAgaW1hZ2VMaW5rOiBcIlwiLFxuICAgIG1lZGlhQXJyOiBudWxsLFxuICAgIExpa2VDb2xvciA6IHRoaXMucHJvcHMuTGlrZUNvbG9yLFxuICAgIERpc0xpa2VDb2xvciA6IHRoaXMucHJvcHMuRGlzTGlrZUNvbG9yLFxuICAgIExpa2VOdW1iZXIgOiB0aGlzLnByb3BzLkxpa2VOdW1iZXIsXG4gICAgRGlzTGlrZU51bWJlciA6IHRoaXMucHJvcHMuRGlzTGlrZU51bWJlcixcbiAgICAvLyB1c2VyX2lkIDogdGhpcy5wcm9wcy51c2VyX2lkXG4gIH07XG5cbiBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICB0aGlzLmdldFNvY2tldFJlc3BvbnNlKCk7XG4gIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpKXtcbiAgICBjb25zdCBMaWtlQ29sb3IgPSAgYXdhaXQgR2V0VXNlclJlYWN0aW9uVG9MaWtlT3B0aW9uKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpLl9pZCx0aGlzLnN0YXRlLmRhdGEpO1xuICAgIGNvbnN0IERpc0xpa2VDb2xvciA9IGF3YWl0ICBHZXRVc2VyUmVhY3Rpb25Ub0Rpc0xpa2VPcHRpb24oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSkuX2lkLHRoaXMuc3RhdGUuZGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBMaWtlQ29sb3IgOiBMaWtlQ29sb3IuZGF0YSxcbiAgICAgIERpc0xpa2VDb2xvciA6IERpc0xpa2VDb2xvci5kYXRhXG4gICAgfSlcbiAgXG4gIH1cbiBcblxufVxuXG5cblxuICBnZXRTb2NrZXRSZXNwb25zZSA9ICgpID0+IHtcbiAgICBzb2NrZXQub24oXCJyZWNfYWRkZWRcIiwgZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS50eXBlID09PSBcImxpa2VcIikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpb1Jlc3BvbnNlTGlrZTogdHJ1ZSxcbiAgICAgICAgICBfbGlrZTogZGF0YS5saWtlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwiZGlzbGlrZVwiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlvUmVzcG9uc2VEaXNMaWtlOiB0cnVlLFxuICAgICAgICAgIF9kaXNsaWtlOiBkYXRhLmRpc2xpa2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVEaXZDbG9zZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5kaXYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xuICAgICAgICBzaG93U2lnbkluT3ZlcmxheTogIXByZXZpb3VzU3RhdGUuc2hvd1NpZ25Jbk92ZXJsYXlcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgb3BlbkxvZ2luT3ZlcmxheSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFVzZXJDbGlja2VkU2lnbnVwOiBmYWxzZSxcbiAgICAgIFVzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgICBzaG93U2lnbkluT3ZlcmxheTogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIG9wZW5TaWdudXBPdmVybGF5ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgVXNlckNsaWNrZWRTaWdudXA6ICF0aGlzLnN0YXRlLlVzZXJDbGlja2VkU2lnbnVwLFxuICAgICAgVXNlckxvZ2dlZEluOiB0cnVlLFxuICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgb3BlbkJ0biA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dDbGFzczogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGNsb3NlQnRuID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0NsYXNzOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIGNsb3NlTW9kYWwgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMucmVjQ2FyZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDbGFzczogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGhhbmRsZURpc2xpa2UgPSAoKSA9PiB7XG4gIC8vICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgLy8gICBpZiAoIXVzZXIpIHtcbiAgLy8gICAgIGFsZXJ0KFwiTm90IHJlZ2lzdGVyZWRcIik7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgdHlwZTogXCJkaXNsaWtlXCJcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICBoYW5kbGVsaWtlID0gKGRhdGEpID0+e1xuICAgICAgIGxldCBjb2xvciA9IHRoaXMuc3RhdGUuTGlrZUNvbG9yO1xuICAgICAgIGxldCBjb2xvID0gdGhpcy5zdGF0ZS5EaXNMaWtlQ29sb3I7XG4gICAgICAgbGV0IExpa2VOdW1iZXIgPSB0aGlzLnN0YXRlLkxpa2VOdW1iZXI7XG4gICAgICAgbGV0IERpc0xpa2VOdW1iZXIgPSB0aGlzLnN0YXRlLkRpc0xpa2VOdW1iZXI7XG4gICAgICAgICBpZihjb2xvcltkYXRhLm9wdGlvbl09PVwiZ3JleVwiICYmIGNvbG9bZGF0YS5vcHRpb25dID09XCJncmV5XCIpe1xuICAgICAgICAgIGNvbG9yW2RhdGEub3B0aW9uXSA9IFwiYmx1ZVwiO1xuICAgICAgICAgIExpa2VOdW1iZXJbZGF0YS5vcHRpb25dID0gTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gKzE7XG4gICAgICAgICAgY29sb1tkYXRhLm9wdGlvbl0gPSBcImdyZXlcIjtcbiAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjb2xvcltkYXRhLm9wdGlvbl09PVwiZ3JleVwiICYmIGNvbG9bZGF0YS5vcHRpb25dID09XCJibHVlXCIpe1xuICAgICAgICAgIGNvbG9yW2RhdGEub3B0aW9uXSA9IFwiYmx1ZVwiO1xuICAgICAgICAgIExpa2VOdW1iZXJbZGF0YS5vcHRpb25dID0gTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gKzE7XG4gICAgICAgICAgRGlzTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gPSBEaXNMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSAtMTtcbiAgICAgICAgICBjb2xvW2RhdGEub3B0aW9uXSA9IFwiZ3JleVwiO1xuICAgICAgICAgfVxuICAgICAgICAgZWxzZXtcbiAgICAgICAgICBMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSA9IExpa2VOdW1iZXJbZGF0YS5vcHRpb25dIC0xO1xuICAgICAgICAgIGNvbG9yW2RhdGEub3B0aW9uXSA9IFwiZ3JleVwiO1xuICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgTGlrZUNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIERpc0xpa2VDb2xvciA6IGNvbG8sXG4gICAgICAgICAgICBMaWtlTnVtYmVyIDogTGlrZU51bWJlcixcbiAgICAgICAgICAgIERpc0xpa2VOdW1iZXIgOiBEaXNMaWtlTnVtYmVyXG4gICAgICAgICAgfSk7XG4gICAgICBjb25zdCBfdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgICAgY29uc3QgcnhuID0ge1xuICAgICAgICB1c2VySWQ6IF91c2VyLl9pZCxcbiAgICAgICAgb3B0aW9uIDogZGF0YS5vcHRpb24sXG4gICAgICAgIHR5cGU6IHRydWVcbiAgICAgIH07XG4gICAgICBBZGRVc2VyUmVhY3Rpb25Ub09wdGlvbihyeG4pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICBcbiAgfVxuXG5cbi8vICBnZXRMaWtlQnV0dG9uQ29sb3I9IG9wdGlvbiA9PiAge1xuLy8gICAvLyBjb25zdCBfdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuLy8gICAvLyByZXR1cm4gIEdldFVzZXJSZWFjdGlvblRvTGlrZU9wdGlvbihcIjVkYWRhNzkwOGE1MzkwMzY1NDExYTExZlwiLG9wdGlvbilcbi8vICAgLy8gICAudGhlbihyZXMgPT4ge1xuLy8gICAvLyAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4vLyAgIC8vICAgIHJldHVybiBcImdyZWVuXCI7XG4vLyAgIC8vICAgfVxuICAgICAgICBcbi8vICAgLy8gICApXG4vLyAgIC8vICAgLmNhdGNoKGVyciA9Pntcbi8vICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4vLyAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSk7XG4vLyAgIC8vICAgfSk7XG4vLyAgICAgcmV0dXJuIFwieWVsbG93XCI7XG4vLyAgIH1cblxuICBoYW5kbGVEaXNsaWtlID0gKGRhdGEpID0+e1xuICAgIGxldCBjb2xvciA9IHRoaXMuc3RhdGUuRGlzTGlrZUNvbG9yO1xuICAgIGxldCBjb2xvID0gdGhpcy5zdGF0ZS5MaWtlQ29sb3JcbiAgICBsZXQgTGlrZU51bWJlciA9IHRoaXMuc3RhdGUuTGlrZU51bWJlcjtcbiAgICBsZXQgRGlzTGlrZU51bWJlciA9IHRoaXMuc3RhdGUuRGlzTGlrZU51bWJlcjtcbiAgICAgICAgICBpZihjb2xvcltkYXRhLm9wdGlvbl09PVwiZ3JleVwiICYmIGNvbG9bZGF0YS5vcHRpb25dID09XCJncmV5XCIpe1xuICAgICAgICAgICBjb2xvcltkYXRhLm9wdGlvbl0gPSBcImJsdWVcIjtcbiAgICAgICAgICAgY29sb1tkYXRhLm9wdGlvbl0gPSBcImdyZXlcIlxuICAgICAgICAgICBEaXNMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSA9IERpc0xpa2VOdW1iZXJbZGF0YS5vcHRpb25dICsxO1xuICAgICAgICAgIH1cbiAgICAgICAgIGVsc2UgaWYoY29sb3JbZGF0YS5vcHRpb25dPT1cImdyZXlcIiAmJiBjb2xvW2RhdGEub3B0aW9uXSA9PVwiYmx1ZVwiKXtcbiAgICAgICAgICAgIGNvbG9yW2RhdGEub3B0aW9uXSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgY29sb1tkYXRhLm9wdGlvbl0gPSBcImdyZXlcIlxuICAgICAgICAgICAgRGlzTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gPSBEaXNMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSArMTtcbiAgICAgICAgICAgIExpa2VOdW1iZXJbZGF0YS5vcHRpb25dID0gTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gLTE7XG4gICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICBjb2xvcltkYXRhLm9wdGlvbl0gPSBcImdyZXlcIjtcbiAgICAgICAgICAgRGlzTGlrZU51bWJlcltkYXRhLm9wdGlvbl0gPSBEaXNMaWtlTnVtYmVyW2RhdGEub3B0aW9uXSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgIERpc0xpa2VDb2xvcjogY29sb3IsXG4gICAgICAgICAgICAgTGlrZUNvbG9yIDogY29sbyxcbiAgICAgICAgICAgICBEaXNMaWtlTnVtYmVyIDogRGlzTGlrZU51bWJlcixcbiAgICAgICAgICAgICBMaWtlTnVtYmVyOkxpa2VOdW1iZXJcbiAgICAgICAgICAgfSk7XG4gICAgICBjb25zdCBfdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgICAgY29uc3QgcnhuID0ge1xuICAgICAgICB1c2VySWQ6IF91c2VyLl9pZCxcbiAgICAgICAgb3B0aW9uIDogZGF0YS5vcHRpb24sXG4gICAgICAgIHR5cGU6IGZhbHNlXG4gICAgICB9O1xuICAgICAgQWRkVXNlclJlYWN0aW9uVG9PcHRpb24ocnhuKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICBcbiAgfVxuXG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUsIG5hbWUgfSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3BhbSA9IG9wdGlvbiA9PiB7XG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIGFsZXJ0KFwiU2lnbiBpbiB0byBjYXJyeSBvdXQgdGhpcyBhY3Rpb25cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IF9kYXRhID0ge1xuICAgICAgb3B0aW9uLFxuICAgICAgaXNTcGFtOiB0cnVlLFxuICAgICAgdXNlcklkV2hvTWFya2VkQXNTcGFtOiB1c2VyLl9pZFxuICAgIH07XG4gICAgLy9NYXJrIG9wdGlvbiBhcyBzcGFtXG4gICAgTWFya09wdGlvbkFzU3BhbShfZGF0YSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgYWxlcnQoXCJPcHRpb24gTWFya2VkIGFzIFNwYW1cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH07XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWw6ICF0aGlzLnN0YXRlLm1vZGFsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3cgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSk7XG4gIH07XG5cbiAgb25PcHRpb25VcGRhdGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUsIG5hbWUgfSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2F2ZVVwZGF0ZWRPcHRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKTtcbiAgICBjb25zdCB7IHVwZGF0ZWRPcHRpb24sIHVwZGF0ZWRPcHRpb25MaW5rLCBvcHRpb25JZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgYWxlcnQoXCJMb2dpbiB0byBjYXJyeSBvdXQgdGhpcyBhY3Rpb25cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9uID09PSBcIlwiIHx8IHVwZGF0ZWRPcHRpb25MaW5rID09PSBcIlwiIHx8ICFvcHRpb25JZCkge1xuICAgICAgYWxlcnQoXCJubyB3YXlcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHdheVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IF9zYXZlVXBkYXRlSGlzdG9yeSA9IHtcbiAgICAgIG9wdGlvbjogdXBkYXRlZE9wdGlvbixcbiAgICAgIG9wdGlvbklkOiBvcHRpb25JZCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgdXNlcklkOiB1c2VyLl9pZFxuICAgIH07XG5cbiAgICBVcGRhdGVPcHRpb24ob3B0aW9uSWQsIHVzZXIuX2lkLCB1cGRhdGVkT3B0aW9uLCB1cGRhdGVkT3B0aW9uTGluaylcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGFsZXJ0KFwiT3B0aW9uIFVwZGF0ZWRcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgICAgU2F2ZVVwZGF0ZUhpc3RvcnkoX3NhdmVVcGRhdGVIaXN0b3J5KVxuICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwic2F2ZWRcIikpXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVVwZGF0ZVBybyA9ICh2aXNpYmxlLCBjYXB0aW9uLCBwcm8sIGlkLCBxdWVzdGlvbiwgb3B0aW9uLCBvcHRpb25JZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBkYXRlUHJvOiB2aXNpYmxlLFxuICAgICAgcHJvVGl0bGU6IGNhcHRpb24sXG4gICAgICBwcm9EZXNjcmlwdGlvbjogcHJvLFxuICAgICAgcHJvSWQ6IGlkLFxuICAgICAgcXVlc3Rpb24sXG4gICAgICBvcHRpb24sXG4gICAgICBvcHRpb25JZFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVVwZGF0ZUNvbiA9ICh2aXNpYmxlLCBjYXB0aW9uLCBjb24sIGlkLCBxdWVzdGlvbiwgb3B0aW9uLCBvcHRpb25JZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBkYXRlQ29uOiB2aXNpYmxlLFxuICAgICAgY29uVGl0bGU6IGNhcHRpb24sXG4gICAgICBjb25EZXNjcmlwdGlvbjogY29uLFxuICAgICAgY29uSWQ6IGlkLFxuICAgICAgcXVlc3Rpb24sXG4gICAgICBvcHRpb24sXG4gICAgICBvcHRpb25JZFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVByb1VwZGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIGNvbnN0IHtcbiAgICAgIHByb1RpdGxlLFxuICAgICAgcHJvRGVzY3JpcHRpb24sXG4gICAgICBwcm9JZCxcbiAgICAgIG9wdGlvbixcbiAgICAgIG9wdGlvbklkLFxuICAgICAgcXVlc3Rpb25cbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgYWxlcnQoXCJMb2dpbiB0byBjYXJyeSBvdXQgdGhpcyBhY3Rpb25cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb1RpdGxlID09PSBcIlwiIHx8IHByb0Rlc2NyaXB0aW9uID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkl0IGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgb3B0aW9uLFxuICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICBvcHRpb25JZCxcbiAgICAgIHRpdGxlOiBwcm9UaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9EZXNjcmlwdGlvbixcbiAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICBxdWVzdGlvbixcbiAgICAgIHByb0lkXG4gICAgfTtcblxuICAgIFVwZGF0ZVBybyhcbiAgICAgIHByb0lkLFxuICAgICAgdXNlci5faWQsXG4gICAgICBwcm9UaXRsZS5yZXBsYWNlKFwiJVwiLCBcIiBwZXJjZW50XCIpLFxuICAgICAgcHJvRGVzY3JpcHRpb24ucmVwbGFjZShcIiVcIiwgXCIgcGVyY2VudFwiKSxcbiAgICAgIG9wdGlvbixcbiAgICAgIG9wdGlvbklkLFxuICAgICAgcXVlc3Rpb25cbiAgICApXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBhbGVydChcInVwZGF0ZWRcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGVQcm86IGZhbHNlIH0pO1xuICAgICAgICBTYXZlUHJvSGlzdG9yeShkYXRhKVxuICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwic2F2ZWRcIikpXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNvblVwZGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvblRpdGxlLFxuICAgICAgb3B0aW9uLFxuICAgICAgcXVlc3Rpb24sXG4gICAgICBvcHRpb25JZCxcbiAgICAgIGNvbkRlc2NyaXB0aW9uLFxuICAgICAgY29uSWRcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgYWxlcnQoXCJMb2dpbiB0byBjYXJyeSBvdXQgdGhpcyBhY3Rpb25cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvblRpdGxlID09PSBcIlwiIHx8IGNvbkRlc2NyaXB0aW9uID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkl0IGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgb3B0aW9uLFxuICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICBvcHRpb25JZCxcbiAgICAgIHRpdGxlOiBjb25UaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb25EZXNjcmlwdGlvbixcbiAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICBxdWVzdGlvbixcbiAgICAgIGNvbklkXG4gICAgfTtcblxuICAgIFVwZGF0ZUNvbihcbiAgICAgIGNvbklkLFxuICAgICAgdXNlci5faWQsXG4gICAgICBjb25UaXRsZS5yZXBsYWNlKFwiJVwiLCBcIiBwZXJjZW50XCIpLFxuICAgICAgY29uRGVzY3JpcHRpb24ucmVwbGFjZShcIiVcIiwgXCIgcGVyY2VudFwiKSxcbiAgICAgIG9wdGlvbixcbiAgICAgIG9wdGlvbklkLFxuICAgICAgcXVlc3Rpb25cbiAgICApXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBhbGVydChcInVwZGF0ZWRcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGVDb246IGZhbHNlIH0pO1xuICAgICAgICBTYXZlQ29uSGlzdG9yeShkYXRhKVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICAvLyBzaG93VXBkYXRlSW1hZ2VNb2RhbCA9ICgpID0+IHtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIHVwZGF0ZUltYWdlOiB0cnVlXG4gIC8vICAgfSk7XG4gIC8vIH07XG5cbiAgaGFuZGxlVXBkYXRlSW1hZ2UgPSAoKSA9PiB7XG4gICAgLy9QYXJhbWV0ZXJzIGhlcmVcbiAgICBjb25zdCB7IG5ld0ltYWdlLCBvcHRpb25JZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBBZGRPcHRpb25JbWFnZShvcHRpb25JZCwgbmV3SW1hZ2UpXG4gICAgICAudGhlbihheGlvc1Jlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3B0aW9uSW1hZ2VBZGRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyOiBlcnJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICAvL0FkZCBpbWFnZSB1cmwgdG8gaW1hZ2UgYXJyYXlcblxuICBhZGRJbWFnZVVybFRvSW1hZ2VBcnJheSA9ICh7IHRhcmdldDogeyB2YWx1ZSwgbmFtZSB9IH0pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld0ltYWdlOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dNb2RhbCA9ICh2aXNpYmxlLCBtZWRpYUFyciwgb3B0aW9uSWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwZGF0ZUltYWdlOiB2aXNpYmxlLFxuICAgICAgbWVkaWFBcnIsXG4gICAgICBvcHRpb25JZFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzaG93Q2xhc3MsXG4gICAgICBjbGlja2VkT3B0aW9uRGV0YWlscyxcbiAgICAgIGlvUmVzcG9uc2VMaWtlLFxuICAgICAgaW9SZXNwb25zZURpc0xpa2UsXG4gICAgICBVc2VyTG9nZ2VkSW4sXG4gICAgICBzaG93U2lnbkluT3ZlcmxheSxcbiAgICAgIF9kaXNsaWtlZCxcbiAgICAgIF9saWtlZCxcbiAgICAgIFVzZXJDbGlja2VkU2lnbnVwLFxuICAgICAgcnhuLFxuICAgICAgc2hvdyxcbiAgICAgIG9wdGlvbkl0ZW1zLFxuICAgICAgcHJvRGVzY3JpcHRpb24sXG4gICAgICBwcm9UaXRsZSxcbiAgICAgIGNvbkRlc2NyaXB0aW9uLFxuICAgICAgY29uVGl0bGUsXG4gICAgICB1cGRhdGVDb24sXG4gICAgICB1cGRhdGVQcm8sXG4gICAgICBsaW5rLFxuICAgICAgbWVkaWFBcnIsXG4gICAgICBuZXdJbWFnZSxcbiAgICAgIG9wdGlvbkltYWdlQWRkZWRcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHByb2ZpbGVJbWFnZVVybCA9IHRoaXMucHJvcHMudXNlci5pbWFnZVxuICAgICAgPyB0aGlzLnByb3BzLnVzZXIuaW1hZ2VcbiAgICAgIDogXCIvc3RhdGljL3dvci5qcGdcIjtcblxuICAgIGNvbnN0IExpa2Vjb2xvciA9IHJ4biA/IFwiYmx1ZVwiIDogXCJncmV5XCI7XG4gICAgY29uc3QgZGlzTGlrZUNvbG9yID0gX2Rpc2xpa2VkID8gXCJibHVlXCIgOiBcImdyZXlcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIGxldCBsaWtlID0gaW9SZXNwb25zZUxpa2UgPyB0aGlzLnN0YXRlLl9saWtlIDogaXRlbS5saWtlO1xuICAgICAgICAgIGxldCBkaXNsaWtlID0gaW9SZXNwb25zZURpc0xpa2UgPyB0aGlzLnN0YXRlLl9kaXNsaWtlIDogaXRlbS5kaXNsaWtlO1xuXG4gICAgICAgICAgaWYgKGl0ZW0ubWVkaWFVcmwubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWxpc3RcIiBrZXk9e2l0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm9wdGlvbi1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInNjb3JlLWNhcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzY29yZVwiPnt0aGlzLnN0YXRlLkxpa2VOdW1iZXJbaXRlbS5vcHRpb25dLXRoaXMuc3RhdGUuRGlzTGlrZU51bWJlcltpdGVtLm9wdGlvbl19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgL29wdGlvbi8ke2l0ZW0ub3B0aW9ufWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi1uYW1lLXF1ZXN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5vcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vcmUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9yZS1pY29uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlIGNvbG9yPVwidHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIUpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckxvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdW5pcXVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBpdGVtLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBpdGVtLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSW1hZ2U6IGl0ZW0ub3B0aW9uSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vL09wdGlvbklEIGFuZCBRdWVzdGlvbklkIG1heSBiZSBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkT3B0aW9uRGV0YWlsczogX3VuaXF1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGFzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgUHJvcyBhbmQgQ29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXBkYXRlaGlzdG9yeS8ke2l0ZW0ub3B0aW9ufWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWUgVXBkYXRlIEhpc3Rvcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZE9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkT3B0aW9uTGluazogaXRlbS5saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IGl0ZW0uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VXBkYXRlIFNwZWNzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRTkxRTYzXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTcGFtKGl0ZW0ub3B0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFyayBPcHRpb24gYXMgU3BhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tIHJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdHRsZS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5tZWRpYVVybC5zbGljZSgwLCAzKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29vXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbX0gY2xhc3NOYW1lPVwib3B0aW9uLWltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0d29vIGFkZC1tZWRpYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTaG93TW9kYWwodHJ1ZSwgaXRlbS5tZWRpYVVybCwgaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCIgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gY29sb3I9XCIjNTg2NDdiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWRkIEltYWdlIG9yIFZpZGVvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4XCIgLz5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tVGFiXG4gICAgICAgICAgICAgICAgICBleHBlcmllbmNlcz17aXRlbS5leHBlcmllbmNlc31cbiAgICAgICAgICAgICAgICAgIHVzZXJBdmF0YXI9e2l0ZW0udXNlckltYWdlfVxuICAgICAgICAgICAgICAgICAgcHJvcz17aXRlbS5wcm9zfVxuICAgICAgICAgICAgICAgICAgY29ucz17aXRlbS5jb25zfVxuICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICAgICAgb3B0aW9uPXtpdGVtLm9wdGlvbn1cbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtpdGVtLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgVXBkYXRlQ29uPXt0aGlzLmhhbmRsZVVwZGF0ZUNvbn1cbiAgICAgICAgICAgICAgICAgIFVwZGF0ZVBybz17dGhpcy5oYW5kbGVVcGRhdGVQcm99XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZXQtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGh1bWItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluc2VydExpbmsgY29sb3I9e1wiI2ZmZlwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgaHR0cDovLyR7aXRlbS5saW5rfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWNvbnRlbnQgZ2V0LWl0XCIgdGFyZ2V0PXtcIl9ibGFua1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2UgJiYgYCAkICR7aXRlbS5wcmljZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IWl0ZW0ucHJpY2UgJiYgXCIgR0VUIElUIEhFUkVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJyZWMtaG9sZGVyXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlrZS1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckxvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2lnbkluT3ZlcmxheTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3VuaXF1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBpdGVtLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGl0ZW0ucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkltYWdlOiBpdGVtLm1lZGlhVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogaXRlbS5faWRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLy9PcHRpb25JRCBhbmQgUXVlc3Rpb25JZCBtYXkgYmUgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2xpY2tlZE9wdGlvbkRldGFpbHM6IF91bmlxdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdHlwZTogXCJsaWtlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0NsYXNzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGluYzogcHJldmlvdXNTdGF0ZS5pbmMgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5oYW5kbGVsaWtlKF91bmlxdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGh1bWItaWNvbiBsaWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYl91cCBjb2xvcj17dGhpcy5zdGF0ZS5MaWtlQ29sb3JbaXRlbS5vcHRpb25dfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJidG4tY29udGVudCBidG4tY29udGVudC1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJidG4tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVjb21tZW5kLXRleHQgbnVtXCI+e3RoaXMuc3RhdGUuTGlrZU51bWJlcltpdGVtLm9wdGlvbl19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpc2xpa2UtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdW5pcXVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGl0ZW0ucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSW1hZ2U6IGl0ZW0ubWVkaWFVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IGl0ZW0uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vT3B0aW9uSUQgYW5kIFF1ZXN0aW9uSWQgbWF5IGJlIGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjbGlja2VkT3B0aW9uRGV0YWlsczogX3VuaXF1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwiZGlzbGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2hvd0NsYXNzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgZGVjOiBwcmV2aW91c1N0YXRlLmRlYyArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaGFuZGxlRGlzbGlrZShfdW5pcXVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYi1pY29uIGRpc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRodW1iX2Rvd24gY29sb3I9e3RoaXMuc3RhdGUuRGlzTGlrZUNvbG9yW2l0ZW0ub3B0aW9uXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9kaXNsaWtlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJidG4tY29udGVudCBidG4tY29udGVudC1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJidG4tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWNvbW1lbmQtdGV4dCBudW1cIj57dGhpcy5zdGF0ZS5EaXNMaWtlTnVtYmVyW2l0ZW0ub3B0aW9uXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlzdFwiIGtleT17aXRlbS5faWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbGlzdC10b3AtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm9wdGlvbi1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInNjb3JlLWNhcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIzcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NvcmVcIj57aXRlbS5yYXRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICBhcz17YC9vcHRpb24vJHtpdGVtLm9wdGlvbn1gfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL29wdGlvbi8ke2l0ZW0ub3B0aW9ufWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi1uYW1lLXF1ZXN0aW9uXCI+e2l0ZW0ub3B0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vcmUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9yZS1pY29uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZSBjb2xvcj1cInRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2lnbkluT3ZlcmxheTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdW5pcXVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGl0ZW0ucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSW1hZ2U6IGl0ZW0ub3B0aW9uSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy9PcHRpb25JRCBhbmQgUXVlc3Rpb25JZCBtYXkgYmUgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZE9wdGlvbkRldGFpbHM6IF91bmlxdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsYXNzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgUHJvcyBhbmQgQ29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj17YC91cGRhdGVoaXN0b3J5LyR7aXRlbS5vcHRpb259YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWUgVXBkYXRlIEhpc3Rvcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZE9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZE9wdGlvbkxpbms6IGl0ZW0ubGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogaXRlbS5faWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5VcGRhdGUgU3BlY3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI0U5MUU2M1wiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNwYW0oaXRlbS5vcHRpb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmsgT3B0aW9uIGFzIFNwYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSByaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXR0bGUtY2FyZFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLm1lZGlhVXJsLnNsaWNlKDAsIDIpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvb1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtfSBjbGFzc05hbWU9XCJvcHRpb24taW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeFwiIC8+XG4gICAgICAgICAgICAgIDxDdXN0b21UYWJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlcz17aXRlbS5leHBlcmllbmNlc31cbiAgICAgICAgICAgICAgICB1c2VyQXZhdGFyPXtpdGVtLnVzZXJJbWFnZX1cbiAgICAgICAgICAgICAgICBwcm9zPXtpdGVtLnByb3N9XG4gICAgICAgICAgICAgICAgY29ucz17aXRlbS5jb25zfVxuICAgICAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgICBvcHRpb249e2l0ZW0ub3B0aW9ufVxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtpdGVtLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIFVwZGF0ZUNvbj17dGhpcy5oYW5kbGVVcGRhdGVDb259XG4gICAgICAgICAgICAgICAgVXBkYXRlUHJvPXt0aGlzLmhhbmRsZVVwZGF0ZVByb31cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYy1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZXQtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRodW1iLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5zZXJ0TGluayBjb2xvcj17XCIjZmZmXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YGh0dHA6Ly8ke2l0ZW0ubGlua31gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tY29udGVudCBnZXQtaXRcIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2UgJiYgYCAkICR7aXRlbS5wcmljZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpdGVtLnByaWNlICYmIFwiIEdFVCBJVCBIRVJFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJyZWMtaG9sZGVyXCJ9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaWtlLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckxvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBsZXQgX3VuaXF1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogaXRlbS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkltYWdlOiBpdGVtLm1lZGlhVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IGl0ZW0uX2lkXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vL09wdGlvbklEIGFuZCBRdWVzdGlvbklkIG1heSBiZSBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2xpY2tlZE9wdGlvbkRldGFpbHM6IF91bmlxdWUsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwibGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzaG93Q2xhc3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGluYzogcHJldmlvdXNTdGF0ZS5pbmMgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmhhbmRsZWxpa2UoX3VuaXF1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYi1pY29uIGxpa1wiPlxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJfdXAgY29sb3I9e3RoaXMuc3RhdGUuTGlrZUNvbG9yW2l0ZW0ub3B0aW9uXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlID8gXCJidG4tY29udGVudCBidG4tY29udGVudC1hY3RpdmVcIiA6IFwiYnRuLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVjb21tZW5kLXRleHQgbnVtXCI+e3RoaXMuc3RhdGUuTGlrZU51bWJlcltpdGVtLm9wdGlvbl19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXNsaWtlLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckxvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kZXRhaWxzXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF91bmlxdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBpdGVtLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JbWFnZTogaXRlbS5tZWRpYVVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IGl0ZW0uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vL09wdGlvbklEIGFuZCBRdWVzdGlvbklkIG1heSBiZSBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNsaWNrZWRPcHRpb25EZXRhaWxzOiBfdW5pcXVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwiZGlzbGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNob3dDbGFzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBkZWM6IHByZXZpb3VzU3RhdGUuZGVjICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5oYW5kbGVEaXNsaWtlKF91bmlxdWUpfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGh1bWItaWNvbiBkaXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRodW1iX2Rvd24gY29sb3I9e3RoaXMuc3RhdGUuRGlzTGlrZUNvbG9yW2l0ZW0ub3B0aW9uXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBfZGlzbGlrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJ0bi1jb250ZW50IGJ0bi1jb250ZW50LWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJidG4tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVjb21tZW5kLXRleHQgbnVtXCI+e3RoaXMuc3RhdGUuRGlzTGlrZU51bWJlcltpdGVtLm9wdGlvbl19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgICAgey8qKiBGb3IgU2lnbmluIGlzIGhlcmUgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgc2hvd1NpZ25Jbk92ZXJsYXkgPyBcIm92ZXJsYXlTaG93IHNob3dTaWduaW4tY29udGFpbmVyXCIgOiBcIm92ZXJsYXlcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlRGl2Q2xvc2UoZSl9XG4gICAgICAgICAgcmVmPXtlbCA9PiAodGhpcy5kaXYgPSBlbCl9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8ZW1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBzaG93U2lnbkluT3ZlcmxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBVc2VyTG9nZ2VkSW46IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeyFVc2VyTG9nZ2VkSW4gJiYgPFNpZ25pbiBvcGVuU2lnbnVwPXt0aGlzLm9wZW5TaWdudXBPdmVybGF5fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBFbmQgb2YgU2lnbmluICovfVxuXG4gICAgICAgIHsvKiogRm9yIFNpZ251cCBpcyBoZXJlICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFVzZXJDbGlja2VkU2lnbnVwID8gXCJvdmVybGF5U2hvdyBzaG93U2lnbmluLWNvbnRhaW5lclwiIDogXCJvdmVybGF5XCJcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZURpdkNsb3NlKGUpfVxuICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMuZGl2ID0gZWwpfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgPGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgVXNlckNsaWNrZWRTaWdudXA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAge1VzZXJDbGlja2VkU2lnbnVwICYmIDxTaWdudXAgb3BlbkxvZ2luPXt0aGlzLm9wZW5Mb2dpbk92ZXJsYXl9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEVuZCBvZiBTaWdudXAgKi99XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5jbG9zZU1vZGFsKGUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17c2hvd0NsYXNzID8gXCJvdmVybGF5U2hvd2llXCIgOiBcIm92ZXJsYXlcIn1cbiAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLnJlY0NhcmQgPSBlbCl9XG4gICAgICAgID5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhZGQtcmVjLXBvcHVwLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxUb3BpY1ZpZXdQb3B1cE1vZGFsXG4gICAgICAgICAgICAgIHByb2ZpbGVJbWFnZT17cHJvZmlsZUltYWdlVXJsfVxuICAgICAgICAgICAgICBvcHRpb249e2NsaWNrZWRPcHRpb25EZXRhaWxzLm9wdGlvbn1cbiAgICAgICAgICAgICAgY2xvc2VCdG49e3RoaXMuY2xvc2VCdG59XG4gICAgICAgICAgICAgIHF1ZXN0aW9uPXtjbGlja2VkT3B0aW9uRGV0YWlscy5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgb3B0aW9uSW1hZ2U9e2NsaWNrZWRPcHRpb25EZXRhaWxzLm9wdGlvbkltYWdlfVxuICAgICAgICAgICAgICBvcHRpb25JZD17Y2xpY2tlZE9wdGlvbkRldGFpbHMub3B0aW9uSWR9XG4gICAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUudHlwZX1cbiAgICAgICAgICAgICAgc29ja2V0SWQ9e3NvY2tldC5pZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdG9wOiBcIjQlXCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ0b3BpY3ZpZXctY2xvc2UtaWNvblwifVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZUJ0bn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNzBweFwiIH19XG4gICAgICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5VcGRhdGUgT3B0aW9uPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVwZGF0ZS1vcHRpb24tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25PcHRpb25VcGRhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGRhdGVkT3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlZE9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHggIWltcG9ydGFudFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlZE9wdGlvbkxpbmt9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1cGRhdGVkT3B0aW9uTGlua1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uT3B0aW9uVXBkYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDkxLCA1NiwgMTQxKVwiLCBib3JkZXI6IDAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNhdmVVcGRhdGVkT3B0aW9uKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cblxuICAgICAgICB7LyogVXBkYXRlIFBybyBpcyBoZXJlKi99XG5cbiAgICAgICAgPD5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI3MHB4XCIgfX1cbiAgICAgICAgICAgIHNob3c9e3VwZGF0ZVByb31cbiAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVQcm8oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5VcGRhdGUgUHJvPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVwZGF0ZS1vcHRpb24tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vbk9wdGlvblVwZGF0ZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb1RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweCAhaW1wb3J0YW50XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwZGF0ZS1vcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9EZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25PcHRpb25VcGRhdGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVQcm8oZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDkxLCA1NiwgMTQxKVwiLCBib3JkZXI6IDAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVByb1VwZGF0ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuXG4gICAgICAgIHsvKiBVcGRhdGUgQ29uIGlzIGhlcmUqL31cbiAgICAgICAgPD5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI3MHB4XCIgfX1cbiAgICAgICAgICAgIHNob3c9e3VwZGF0ZUNvbn1cbiAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVDb24oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5VcGRhdGUgQ29uPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVwZGF0ZS1vcHRpb24tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGRhdGUtb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vbk9wdGlvblVwZGF0ZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvblRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvblRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweCAhaW1wb3J0YW50XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwZGF0ZS1vcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25EZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25PcHRpb25VcGRhdGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVVcGRhdGVDb24oZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDkxLCA1NiwgMTQxKVwiLCBib3JkZXI6IDAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNvblVwZGF0ZSgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG5cbiAgICAgICAgey8qKiBVcGRhdGUgSW1hZ2UgKi99XG5cbiAgICAgICAgPD5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI3MHB4XCIgfX1cbiAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUudXBkYXRlSW1hZ2V9XG4gICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuaGFuZGxlU2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+QWRkIEltYWdlPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInVwZGF0ZS1vcHRpb24tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwZGF0ZS1vcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLm9uT3B0aW9uVXBkYXRlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXtlID0+IHRoaXMuYWRkSW1hZ2VVcmxUb0ltYWdlQXJyYXkoZSl9XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQmx1cj17fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2VMaW5rfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweCAhaW1wb3J0YW50XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge21lZGlhQXJyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAge21lZGlhQXJyLnNsaWNlKDAsIDQpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaW5rOiBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW19IGNsYXNzTmFtZT1cImltXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHtuZXdJbWFnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25ld0ltYWdlfSBjbGFzc05hbWU9XCJpbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyIHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlci5JbWFnZSBzcXVhcmUgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIC8vIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDkxLCA1NiwgMTQxKVwiLCBib3JkZXI6IDAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVVwZGF0ZUltYWdlKCl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e29wdGlvbkltYWdlQWRkZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7b3B0aW9uSW1hZ2VBZGRlZCA/IFwiU2F2ZWRcIiA6IFwiU2F2ZSBDaGFuZ2VzXCJ9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIgZGl2IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FyZC1saXN0IHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU4ZWI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogODUwcHg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZpeCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50b3BpY3ZpZXctY2xvc2UtaWNvbiB7XG4gICAgICAgICAgICAgIGxlZnQ6IDkxJTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig5MSwgNTYsIDE0MSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmVjZjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51cGRhdGUtb3B0aW9uIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVwZGF0ZS1vcHRpb24tZm9ybSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkLXJlYy1wb3B1cC1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51cGRhdGUtb3B0aW9uLWZvcm0gZGl2IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NvcmUtY2FyZCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzczNzM3MywgIzE3MTcxNyk7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNrZXdYKC0yMmRlZyk7XG4gICAgICAgICAgICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3dTaWduaW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU1MHB4O1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNlNmVjZjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlLWljb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9wdGlvbi1uYW1lIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcHRpb24tbmFtZS1xdWVzdGlvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTYsIDU2LCAxNDEpO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3B0aW9uLW5hbWUtcXVlc3Rpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBDYXBpdGFsaXplO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcHRpb24taW1hZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saXR0bGUtY2FyZCB7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGl0dGxlLWNhcmQgLnR3byB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saXR0bGUtY2FyZCAudHdvbyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hZGQtbWVkaWEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICM1ODY0N2I7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpZGVvbk1vYmxpZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAuaGlkZW9uTW9ibGllIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saXR0bGUtY2FyZCAudHdvbzpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmFmYWZhLCAjZWVlKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubm9uZSB7XG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgY29sb3I6ICNjM2MzYzMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5teS1leHBlcmllbmNlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRodW1iLWljb24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAvLyByaWdodDogMXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWNvbnRlbnQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogLTA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4tY29udGVudC5nZXQtaXQge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGlzIHtcbiAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogLTExMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAxMDBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhbmNlbCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1Ym1pdCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0OiAtNDdweDtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvcm0tcmVjLWhvbGRlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXh0YXJlYS0xIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dGFyZWEtMiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZThlYjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWJpbjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByby1pbnB1dC10ZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlOGViO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvcm0taG9sZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5nZXQtaXQtYnRuIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0YTRhNGE7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb3JlLWljb24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICAgICAgIC8vIGxlZnQ6IDkyLjUlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlYy1idG4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAucmVjLWJ0biAuZ2V0LWl0LWJ0biB7XG4gICAgICAgICAgICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAucmVjLWJ0biAucmVjLWhvbGRlciB7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlY29tbWVuZC10ZXh0Lm51bSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVjb21tZW5kLXRleHQubnVtaWUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAgIC5yZWMtYnRuIC5yZWMtaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQ6IDIyLjUlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gLm1vcmUtaWNvbiB7XG4gICAgICAgICAgICAgIC8vICAgbGVmdDogODAlO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xuICAgICAgICAgICAgICAucmVjLWJ0biAucmVjLWhvbGRlciB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyAucmVjb21tZW5kLXRleHQge1xuICAgICAgICAgICAgICAvLyAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAvLyAubW9yZS1pY29uIHtcbiAgICAgICAgICAgICAgLy8gICBsZWZ0OiA4NSU7XG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGlrZS1idG4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpc2xpa2UtYnRuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB6LWluZGV4OiA2MDAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vdmVybGF5U2hvdyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgei1pbmRleDogNTAwMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vdmVybGF5U2hvd2llIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB6LWluZGV4OiA1MDAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXItY2hpcCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2ZpbGVJbWFnZVVybH0pO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAtNjBweDtcbiAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXItcmVjLWltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXNlci1yZWMtY2FyZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTUwcHg7XG5cbiAgICAgICAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIC50b3BpY3ZpZXctY2xvc2UtaWNvbiB7XG4gICAgICAgICAgICAgICAgbGVmdDogODAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgLy8gICAuY2FyZC1saXN0IHtcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogNzB2dztcbiAgICAgICAgICAgIC8vICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgLy8gICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTA5cHgpIHtcbiAgICAgICAgICAgICAgLmNhcmQtbGlzdCB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkzdnc7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwOXB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgLmNhcmQtbGlzdCB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk0dnc7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgICAgLmNhcmQtbGlzdCB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk0dnc7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/optionList.js */")));
    }
  }]);

  return OptionList;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ }),

/***/ "./components/topicview/reactionBanner.js":
/*!************************************************!*\
  !*** ./components/topicview/reactionBanner.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");




var ReactionBanner = function ReactionBanner() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1031489175" + " " + "reaction-banner-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      paddingLeft: "15px" // justifyContent: "center"
      // alignItems: "center"

    },
    className: "jsx-1031489175" + " " + "cont"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1031489175" + " " + "banned-icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["Banned"], {
    color: "#4d4d4d"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1031489175" + " " + "text"
  }, "This question has been marked as", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      paddingLeft: "4px",
      paddingRight: "4px"
    },
    className: "jsx-1031489175"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-1031489175"
  }, "Not a Fit")), "for the format of Toprating.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1031489175"
  }, ".reaction-banner-container.jsx-1031489175{width:100%;background-color:#fdfdfd;padding-top:20px;padding-bottom:20px;overflow:hidden;border:1px solid #e6e8eb;}.text.jsx-1031489175{font-size:16px;margin-left:30px;color:#4d4d4d;font-weight:400;line-height:24px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;text-transform:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.cont.jsx-1031489175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-width:900px){.cont.jsx-1031489175{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy9yZWFjdGlvbkJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qk8sQUFHc0IsQUFTSSxBQWNGLEFBT0UsV0E3QlUsSUFTUixpQkFDSCxJQVRHLFVBVUQsT0FUSSxTQVVILFdBVEQsQ0FvQk8sQUFPTSxLQWpCUixVQVRJLHlCQUMzQiwyREFtQnFCLE1BT25CLENBakJvQixvQkFDUCxrRUFVZixRQVRpQix5REFHakIiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL2NvbXBvbmVudHMvdG9waWN2aWV3L3JlYWN0aW9uQmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFubmVkIH0gZnJvbSBcIi4uL0ljb25zXCI7XG5jb25zdCBSZWFjdGlvbkJhbm5lciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdGlvbi1iYW5uZXItY29udGFpbmVyXCI+XG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIlxuICAgICAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAvLyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwiY29udFwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFubmVkLWljb25cIj5cbiAgICAgICAgPEJhbm5lZCBjb2xvcj17XCIjNGQ0ZDRkXCJ9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIFRoaXMgcXVlc3Rpb24gaGFzIGJlZW4gbWFya2VkIGFzXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiLCBwYWRkaW5nUmlnaHQ6IFwiNHB4XCIgfX0+XG4gICAgICAgICAgPGI+Tm90IGEgRml0PC9iPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIGZvciB0aGUgZm9ybWF0IG9mIFRvcHJhdGluZy5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnJlYWN0aW9uLWJhbm5lci1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlOGViO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbiAgICAgICAgICAvLyAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgLmNvbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGlvbkJhbm5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/reactionBanner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ReactionBanner);

/***/ }),

/***/ "./components/topicview/recFeed.js":
/*!*****************************************!*\
  !*** ./components/topicview/recFeed.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);




var RecFeedCard = function RecFeedCard(_ref) {
  var recommendations = _ref.recommendations,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Recent Activities" : _ref$title,
      _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? "#fdfdfd" : _ref$bg,
      _ref$borderR = _ref.borderR,
      borderR = _ref$borderR === void 0 ? "15px" : _ref$borderR;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1281871301" + " " + "new-question-added"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: "260px",
      background: bg,
      overflow: "hidden",
      boxShadow: "none",
      borderRadius: borderR
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    style: {
      border: "none"
    },
    className: "card-header"
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
    style: {
      border: "none",
      position: "relative",
      left: "-15px",
      zIndex: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"], {
    style: {
      border: "none"
    }
  }, recommendations.map(function (activity) {
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
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Feed"].Summary, {
      style: {
        letterSpacing: "0.4px",
        fontSize: "16px"
      }
    }, activity.username + " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: {
        color: "rgb(0,0,0, 0.4)"
      },
      className: "jsx-1281871301"
    }, "recommended "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-1281871301"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1281871301"
    }, activity.option, "."))));
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1281871301"
  }, ".new-question-added{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;overflow:hidden;}.card-header{font-size:18px !important;font-family:Cabin !important;background:transparent;color:#000 !important;font-weight:470;position:relative;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;font-weight:600;text-transform:capitalize;left:-30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy9yZWNGZWVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFUyxBQUcwQixBQVFhLDBCQUNHLDZCQUNOLG1CQVRELElBVUEsc0JBQ04sZ0JBQ0Usa0JBQ0csa0JBWkUsbUZBYVAsZ0JBWk0sQUFhSSxzQkFaVixJQWFMLFdBQ2IsQ0FiQSIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy90b3BpY3ZpZXcvcmVjRmVlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgRmVlZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jb25zdCBSZWNGZWVkQ2FyZCA9ICh7XG4gIHJlY29tbWVuZGF0aW9ucyxcbiAgdGl0bGUgPSBcIlJlY2VudCBBY3Rpdml0aWVzXCIsXG4gIGJnID0gXCIjZmRmZGZkXCIsXG4gIGJvcmRlclIgPSBcIjE1cHhcIlxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXF1ZXN0aW9uLWFkZGVkXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjI2MHB4XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZyxcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPENhcmQuSGVhZGVyIHN0eWxlPXt7IGJvcmRlcjogXCJub25lXCIgfX0gY2xhc3NOYW1lPXtcImNhcmQtaGVhZGVyXCJ9PlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgIDxDYXJkLkNvbnRlbnRcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIGxlZnQ6IFwiLTE1cHhcIixcbiAgICAgICAgICAgICAgekluZGV4OiAxXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGZWVkIHN0eWxlPXt7IGJvcmRlcjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgIHtyZWNvbW1lbmRhdGlvbnMubWFwKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBfZGF0ZSA9IG5ldyBEYXRlKGFjdGl2aXR5LmNyZWF0ZWRBdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IF9kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgICAgICAgICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IF9pbWFnZSA9IGFjdGl2aXR5LnVzZXJfaW1hZ2VcbiAgICAgICAgICAgICAgICAgID8gYWN0aXZpdHkudXNlcl9pbWFnZVxuICAgICAgICAgICAgICAgICAgOiBcIi9zdGF0aWMvYXZhdGFyLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RmVlZC5FdmVudCBrZXk9e2FjdGl2aXR5Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsIGltYWdlPXtfaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEZlZWQuRGF0ZSBjb250ZW50PXtgJHtkYXRlfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LnVzZXJuYW1lICsgXCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMCwwLDAsIDAuNClcIiB9fT5yZWNvbW1lbmRlZCA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnthY3Rpdml0eS5vcHRpb259LjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5ldy1xdWVzdGlvbi1hZGRlZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDcwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjRmVlZENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/recFeed.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (RecFeedCard);

/***/ }),

/***/ "./components/topicview/relatedOptionsComponent.js":
/*!*********************************************************!*\
  !*** ./components/topicview/relatedOptionsComponent.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recFeed */ "./components/topicview/recFeed.js");





function RelatedOptions(_ref) {
  var relatedTopics = _ref.relatedTopics,
      recommendations = _ref.recommendations;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2692949923" + " " + "related-question"
  }, "Related Questions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2692949923" + " " + "related-question-list"
  }, relatedTopics.map(function (related_topic) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: related_topic._id,
      style: {
        marginBottom: "10px"
      },
      className: "jsx-2692949923"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: true,
      href: "/topic/".concat(related_topic.question),
      key: related_topic._id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2692949923" + " " + "related-topic-question"
    }, related_topic.question, "?")));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "45px"
    },
    className: "jsx-2692949923"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_recFeed__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Activity",
    bg: "transparent",
    borderR: 0,
    recommendations: recommendations
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2692949923"
  }, ".related-question.jsx-2692949923{font-size:18px;font-family:inherit;font-weight:470;position:relative;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;top:40px;left:20px;font-weight:bold;text-transform:capitalize;}.card-header.jsx-2692949923{color:#000;background:transparent;font-family:Cabin;border-bottom:none;position:relative;left:-20px;}.related-topic-question.jsx-2692949923{-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;line-height:18px;}.related-question-list.jsx-2692949923 div.jsx-2692949923{overflow-wrap:break-word;width:400px;font-size:0.95em;font-family:inherit;font-weight:600;margin-top:10px;margin-bottom:10px;box-sizing:border-box;position:relative;top:40px;left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy9yZWxhdGVkT3B0aW9uc0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1MsQUFHNEIsQUFZSixBQVFVLEFBS0ksV0FaRixJQVpILFVBeUJSLFNBWk0sQ0FaRixFQXlCQyxjQXhCQyxDQVlDLEVBYUMsZUF4QkMsRUFZSCxHQWFGLGVBWkwsQ0FhSyxVQVpsQixDQUdtQixLQVVFLFlBVHJCLE9BVXdCLHNCQUNKLGtCQUNULEtBN0JBLElBOEJDLEtBN0JBLEtBOEJaLEtBN0JtQixpQkFDUywwQkFDNUIiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL2NvbXBvbmVudHMvdG9waWN2aWV3L3JlbGF0ZWRPcHRpb25zQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlY0ZlZWRDYXJkIGZyb20gXCIuL3JlY0ZlZWRcIjtcbmZ1bmN0aW9uIFJlbGF0ZWRPcHRpb25zKHsgcmVsYXRlZFRvcGljcywgcmVjb21tZW5kYXRpb25zIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtcXVlc3Rpb25cIj5SZWxhdGVkIFF1ZXN0aW9uczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGVkLXF1ZXN0aW9uLWxpc3RcIj5cbiAgICAgICAge3JlbGF0ZWRUb3BpY3MubWFwKHJlbGF0ZWRfdG9waWMgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cmVsYXRlZF90b3BpYy5faWR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICBocmVmPXtgL3RvcGljLyR7cmVsYXRlZF90b3BpYy5xdWVzdGlvbn1gfVxuICAgICAgICAgICAgICAgIGtleT17cmVsYXRlZF90b3BpYy5faWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWxhdGVkLXRvcGljLXF1ZXN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7cmVsYXRlZF90b3BpYy5xdWVzdGlvbn0/XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI0NXB4XCIgfX0+XG4gICAgICAgICAgPFJlY0ZlZWRDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkFjdGl2aXR5XCJcbiAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgYm9yZGVyUj17MH1cbiAgICAgICAgICAgIHJlY29tbWVuZGF0aW9ucz17cmVjb21tZW5kYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnJlbGF0ZWQtcXVlc3Rpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDcwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xuICAgICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWxhdGVkLXRvcGljLXF1ZXN0aW9uIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWxhdGVkLXF1ZXN0aW9uLWxpc3QgZGl2IHtcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWxhdGVkT3B0aW9ucztcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/relatedOptionsComponent.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (RelatedOptions);

/***/ }),

/***/ "./components/topicview/tab.js":
/*!*************************************!*\
  !*** ./components/topicview/tab.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);














var CustomTab =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomTab, _React$Component);

  function CustomTab() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomTab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      experiences: [],
      pros: [],
      cons: [],
      showUpIcon: false,
      maxItem: 2,
      all: true,
      pro: false,
      //show pros false
      con: false,
      //show cons false
      experience: false //show experiences false

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleShowMore", function () {
      _this.setState({
        maxItem: 10,
        showUpIcon: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleShowLess", function () {
      _this.setState({
        maxItem: 2,
        showUpIcon: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showAll", function () {
      _this.setState(function (previousState) {
        return {
          all: true,
          pro: false,
          con: false,
          experience: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showExperiences", function () {
      _this.setState(function (previousState) {
        return {
          experience: true,
          pro: false,
          con: false,
          all: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showPros", function () {
      _this.setState(function (previousState) {
        return {
          pro: !previousState.pro,
          con: false,
          all: false,
          experience: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showCons", function () {
      _this.setState(function (previousState) {
        return {
          con: true,
          pro: false,
          all: false,
          experience: false
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //do something here
      this.getOptionCons(this.props.id);
      this.getOptionPros(this.props.id);
    }
  }, {
    key: "getOptionPros",
    value: function getOptionPros(id) {
      var _this2 = this;

      //Do something here
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_11__["GetOptionPros"])(id).then(function (result) {
        // console.log(result.data);
        _this2.setState({
          pros: result.data
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "getOptionCons",
    value: function getOptionCons(id) {
      var _this3 = this;

      //Do something here
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_11__["GetOptionCons"])(id).then(function (result) {
        // console.log(result.data);
        _this3.setState({
          cons: result.data
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          all = _this$state.all,
          experience = _this$state.experience,
          pro = _this$state.pro,
          con = _this$state.con,
          pros = _this$state.pros,
          cons = _this$state.cons,
          showUpIcon = _this$state.showUpIcon,
          maxItem = _this$state.maxItem;
      var _this$props = this.props,
          experiences = _this$props.experiences,
          id = _this$props.id;
      var holder = [];
      var allItems = holder.concat(pros, cons); // holder.push(this.props.pros, this.props.cons, experiences);
      // // holder.push(pros, cons, experiences);
      // const flattenArray = arr => {
      //   return [].concat(...arr);
      // };
      // const flattenedArray = flattenArray(holder);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tab"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.showAll,
        className: "jsx-691326785" + " " + ((all ? "tablinks active" : "tablinks") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-691326785" + " " + ((all ? "activeAll" : "") || "")
      }, "All ", pros.length + cons.length)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.showExperiences,
        className: "jsx-691326785" + " " + ((experience ? "tablinks active" : "tablinks") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-691326785" + " " + ((experience ? "activeAll" : "") || "")
      }, "Experiences ", experiences ? experiences.length : 0)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.showPros,
        className: "jsx-691326785" + " " + ((pro ? "tablinks active" : "tablinks") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-691326785" + " " + ((pro ? "activeAll" : "") || "")
      }, "Pros ", pros ? pros.length : 0)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.showCons,
        className: "jsx-691326785" + " " + ((con ? "tablinks active" : "tablinks") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-691326785" + " " + ((con ? "activeAll" : "") || "")
      }, "Cons ", cons ? cons.length : 0))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "fix"
      }), all && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tabcontent"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tab-content-holder"
      }, allItems ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, allItems.slice(0, maxItem).map(function (item, i) {
        var userImage = item.userImage ? item.userImage : "/static/gravatar.png";
        var check = item.type === "pro";
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: i,
          className: "jsx-691326785" + " " + "tab-content-item"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "profile-image"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: userImage,
          alt: "user",
          className: "jsx-691326785" + " " + "user-image"
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "user-rec-details"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + ((check ? "rec-card-content-pro" : "rec-card-content-con") || "")
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-691326785"
        }, check ? "Pro" : "Con", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "jsx-691326785" + " " + "more-icon"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["More"], {
            color: "transparent"
          })),
          content: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            as: "/option-pro?id=".concat(item._id),
            href: "/option-pro?id=".concat(item._id)
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            className: "jsx-691326785"
          }, "See Update History"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            onClick: function onClick() {
              return _this4.props.UpdatePro(true, item.title, item.description, item._id, _this4.props.question, _this4.props.option, _this4.props.id);
            },
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            style: {
              cursor: "pointer"
            },
            className: "jsx-691326785"
          }, check ? "Update Pro" : "Update Con"))),
          hideOnScroll: true,
          position: "bottom right",
          on: "click"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "caption"
        }, item.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-691326785" + " " + "text"
        }, item.description)));
      })) : ""), !showUpIcon && allItems.length !== 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowMore,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "See All", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardDownArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      })), showUpIcon && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowLess,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "Hide", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardUpArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      }))), experience && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tabcontent"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tab-content-holder"
      }, experiences ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, experiences.slice(0, maxItem).map(function (item, i) {
        var userImage = _this4.props.userAvatar ? _this4.props.userAvatar : "/static/gravatar.png";
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: i,
          className: "jsx-691326785" + " " + "tab-content-item"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "profile-image"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: userImage,
          alt: "user",
          className: "jsx-691326785" + " " + "user-image"
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "user-rec-details"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "rec-card-content-experience"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-691326785" + " " + "text"
        }, item)));
      })) : ""), !showUpIcon && experiences.length !== 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowMore,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "See All", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardDownArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      })), showUpIcon && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowLess,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "Hide", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardUpArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      }))), pro && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tabcontent"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tab-content-holder"
      }, pros ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, pros.slice(0, maxItem).map(function (item, i) {
        var userImage = item.userImage ? item.userImage : "/static/gravatar.png";
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: item._id,
          className: "jsx-691326785" + " " + "tab-content-item"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "profile-image"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: userImage,
          alt: "user",
          className: "jsx-691326785" + " " + "user-image"
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "user-rec-details"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "rec-card-content-pro"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-691326785"
        }, "Pro", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "jsx-691326785" + " " + "more-icon"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["More"], {
            color: "transparent"
          })),
          content: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            as: "/option-pro?id=".concat(item._id),
            href: "/option-pro?id=".concat(item._id)
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            className: "jsx-691326785"
          }, "See Update History"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            onClick: function onClick() {
              return _this4.props.UpdatePro(true, item.title, item.description, item._id, _this4.props.question, _this4.props.option, _this4.props.id);
            },
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            style: {
              cursor: "pointer"
            },
            className: "jsx-691326785"
          }, "Update Pro"))),
          hideOnScroll: true,
          position: "bottom right",
          on: "click"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "caption"
        }, item.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-691326785" + " " + "text"
        }, item.description)));
      })) : ""), !showUpIcon && pros.length !== 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowMore,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "See All", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardDownArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      })), showUpIcon && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowLess,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "Hide", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardUpArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      }))), con && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tabcontent"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-691326785" + " " + "tab-content-holder"
      }, cons ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, cons.slice(0, maxItem).map(function (item, i) {
        var userImage = item.userImage ? item.userImage : "/static/gravatar.png";
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: item._id,
          className: "jsx-691326785" + " " + "tab-content-item"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "profile-image"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: userImage,
          alt: "user",
          className: "jsx-691326785" + " " + "user-image"
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "user-rec-details"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "rec-card-content-con"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "jsx-691326785"
        }, "Con", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Popup"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "jsx-691326785" + " " + "more-icon"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["More"], {
            color: "transparent"
          })),
          content: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            as: "/option-con?id=".concat(item._id),
            href: "/option-con?id=".concat(item._id)
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            className: "jsx-691326785"
          }, "See Update History"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            onClick: function onClick() {
              return _this4.props.UpdateCon(true, item.title, item.description, item._id, _this4.props.question, _this4.props.option, _this4.props.id);
            },
            className: "jsx-691326785"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            style: {
              cursor: "pointer"
            },
            className: "jsx-691326785"
          }, "Update Con"))),
          hideOnScroll: true,
          position: "bottom right",
          on: "click"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-691326785" + " " + "caption"
        }, item.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "jsx-691326785" + " " + "text"
        }, item.description)));
      })) : ""), !showUpIcon && cons.length !== 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowMore,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "See All", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardDownArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      })), showUpIcon && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.handleShowLess,
        className: "jsx-691326785" + " " + "view-more-item"
      }, "Hide", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_9__["CardUpArrow"], {
        width: 24,
        height: 24,
        color: "#fff"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "691326785"
      }, ".tab.jsx-691326785{overflow:hidden;margin-top:8px;font-family:Cabin;}.fix.jsx-691326785{margin-bottom:20px;}a.jsx-691326785{color:#000;}h3.jsx-691326785{position:relative;left:15px;font-family:Cabin !important;font-weight:600;color:rgb(91,56,141);}.tablinks.jsx-691326785{color:#444;text-transform:uppercase;white-space:nowrap;font-size:400;font-family:inherit;}.tab-p.jsx-691326785{text-align:center;padding:10px;height:auto;}.tab-content-holder.jsx-691326785{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0;margin:auto;width:100%;box-sizing:border-box;}.tab-content-item.jsx-691326785{display:block;width:50%;}.tab-text.jsx-691326785{overflow-wrap:break-word;box-sizing:border-box;white-space:normal;margin-bottom:4px;max-width:200px;height:auto;overflow-x:hidden;padding:2px;text-align:center;border-radius:4px;}.rec-card-content-con.jsx-691326785,.rec-card-content-pro.jsx-691326785,.rec-card-content-experience.jsx-691326785{font-weight:bold;margin-right:15px;font-size:14px;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;text-transform:uppercase;}.rec-card-content-con.jsx-691326785{color:#cb1a4a;}.rec-card-content-pro.jsx-691326785{color:#1d9127;}.rec-card-content-experience.jsx-691326785{color:#1b9ad1;}.tab.jsx-691326785 button.jsx-691326785{background-color:transparent;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;-webkit-transition:0.3s;transition:0.3s;font-size:0.9em;font-family:Cabin;}.activeAll.jsx-691326785{font-weight:600;}.activeExperience.jsx-691326785{color:#000;font-weight:600;}.activePro.jsx-691326785{color:#000;font-weight:600;}.activeCon.jsx-691326785{color:#000;font-weight:600;}.active.jsx-691326785{background-color:#ddd !important;border-radius:5px;font-weight:600;}.tabcontent.jsx-691326785{display:block;padding:6px 12px;border-top:none;}.profile-image.jsx-691326785{border-radius:50px;width:50px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;border:1px solid grey;}.user-image.jsx-691326785{width:100%;padding:2px;}.user-rec-details.jsx-691326785{position:relative;left:15%;top:-50px;width:85%;box-sizing:border-box;word-break:normal;}.caption.jsx-691326785{font-weight:600;color:#0d0d0d;line-height:24px;font-size:1.3em;}.text.jsx-691326785{font-size:18px;font-weight:500;color:#595959;word-break:break-word;}.more-icon.jsx-691326785{border:0;cursor:pointer;border-radius:35px;outline:0;padding:0;height:25px;width:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-left:94%;margin-top:-20px;}.view-more-item.jsx-691326785{font-size:14px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;position:relative;left:42%;cursor:pointer;background-color:rgb(91,56,141);border-radius:9px;padding:3px 12px 3px 18px;-webkit-transition:background-color 0.15s;transition:background-color 0.15s;}@media screen and (max-width:768px){.user-rec-details.jsx-691326785{left:26%;top:-50px;}.caption.jsx-691326785{font-size:1em;}.text.jsx-691326785{font-size:14px;font-weight:500;color:#595959;word-break:break-word;}.more-icon.jsx-691326785{margin-left:82%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy90YWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdWhCVyxBQUkrQixBQU9HLEFBSVIsQUFJTyxBQU9QLEFBT08sQUFRTCxBQVlDLEFBTVcsQUFnQlIsQUFPSCxBQUdBLEFBR0EsQUFLZSxBQWNiLEFBR0wsQUFJQSxBQUlBLEFBTXNCLEFBT25CLEFBT0ssQUFVUixBQUlPLEFBVUYsQUFNRCxBQU9OLEFBZU0sQUFtQkosQUFNSyxBQUdDLEFBT0MsU0FqREgsQUFrQ0gsRUFsTWQsQUFXMkIsQUFvRlQsQUFJQSxBQUtBLEFBNkJKLEdBOUZGLEFBNEJaLEFBR0EsQUFHQSxBQTJDbUIsQUFvRmpCLENBL0NnQixBQXNCQSxBQTRCRSxDQXJOSCxBQXNHakIsQUF1RGdCLEFBK0RkLENBdEprQixDQXhEUixBQWNHLEFBdUhKLENBN0lYLEFBK0hhLEFBeUVYLElBOURGLENBOUZBLEFBeUhxQixDQXJIRyxFQW9EeEIsQUFJQSxBQUtBLEFBaUNZLENBckltQixDQXlFbEIsQ0E4Q0ssQUF3QkMsQ0E3SkMsQUE0Qk4sQUFtR0ksQUFvQ0YsQUFzQlcsQUE0QlQsRUEvRkUsRUFoREgsQ0FqREksQ0FnSVQsR0E3REUsR0EzRGQsQUE4SVksRUFQWSxBQWtERSxDQWhGWCxDQWhGTSxBQTBFckIsQUFzQndCLEFBUU4sRUE3SmxCLENBc0V1QixDQWdETCxDQTlCSCxDQW1GSCxFQXRKSSxDQW9LTyxDQTNLTCxNQWdKbEIsQUFjYyxFQW5GRyxDQW5DRyxDQWlFcEIsQUE2Q0EsQUFrREUsRUFoTW9CLEFBZ0lGLElBdklLLENBbUJPLENBMkluQixLQW5GTyxJQW5DRixFQXVISCxDQXZCZixFQWhJQSxLQVBBLElBMkVrQixFQW5DSixZQUVNLFFBNEVLLFVBM0VYLFFBaUNJLElBaENFLFNBV08sR0FzQlAsR0E2RkUsR0E3SEYsQUFrSEssWUFqRnpCLElBdEJBLEVBVkEsV0EzQmlCLDhCQW9HSSwyQkFsR1QsVUFDRSxHQTBJTyxBQVdBLFNBbkpSLFdBQ1csc0JBQ3hCLFdBOEZjLFlBQ1Usc0JBQ3hCLE1BdUNvQixBQVdLLGtCQVZQLGdCQUNDLGlCQUNuQixnREFTYSxXQUNPLGtCQUNULFNBQ00sZUFDbUIsZ0NBQ2hCLGtCQUNRLDBCQUNRLDRFQUNwQyIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvY29tcG9uZW50cy90b3BpY3ZpZXcvdGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb3JlLCBDYXJkRG93bkFycm93LCBDYXJkVXBBcnJvdyB9IGZyb20gXCIuLi9JY29uc1wiO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IEdldE9wdGlvblByb3MsIEdldE9wdGlvbkNvbnMgfSBmcm9tIFwiLi4vLi4vYXBpUmVxdWVzdHMvYXBpUmVxdWVzdHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgQ3VzdG9tVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZXhwZXJpZW5jZXM6IFtdLFxuICAgIHByb3M6IFtdLFxuICAgIGNvbnM6IFtdLFxuICAgIHNob3dVcEljb246IGZhbHNlLFxuICAgIG1heEl0ZW06IDIsXG4gICAgYWxsOiB0cnVlLFxuICAgIHBybzogZmFsc2UsIC8vc2hvdyBwcm9zIGZhbHNlXG4gICAgY29uOiBmYWxzZSwgLy9zaG93IGNvbnMgZmFsc2VcbiAgICBleHBlcmllbmNlOiBmYWxzZSAvL3Nob3cgZXhwZXJpZW5jZXMgZmFsc2VcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2RvIHNvbWV0aGluZyBoZXJlXG4gICAgdGhpcy5nZXRPcHRpb25Db25zKHRoaXMucHJvcHMuaWQpO1xuICAgIHRoaXMuZ2V0T3B0aW9uUHJvcyh0aGlzLnByb3BzLmlkKTtcbiAgfVxuXG4gIGdldE9wdGlvblByb3MoaWQpIHtcbiAgICAvL0RvIHNvbWV0aGluZyBoZXJlXG4gICAgR2V0T3B0aW9uUHJvcyhpZClcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcHJvczogcmVzdWx0LmRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldE9wdGlvbkNvbnMoaWQpIHtcbiAgICAvL0RvIHNvbWV0aGluZyBoZXJlXG4gICAgR2V0T3B0aW9uQ29ucyhpZClcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjb25zOiByZXN1bHQuZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2hvd01vcmUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXhJdGVtOiAxMCxcbiAgICAgIHNob3dVcEljb246IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICAvKipzaG93IG9ubHkgMSBpdGVtICovXG4gIGhhbmRsZVNob3dMZXNzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWF4SXRlbTogMixcbiAgICAgIHNob3dVcEljb246IGZhbHNlXG4gICAgfSk7XG4gIH07XG4gIHNob3dBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG4gICAgICBhbGw6IHRydWUsXG4gICAgICBwcm86IGZhbHNlLFxuICAgICAgY29uOiBmYWxzZSxcbiAgICAgIGV4cGVyaWVuY2U6IGZhbHNlXG4gICAgfSkpO1xuICB9O1xuXG4gIHNob3dFeHBlcmllbmNlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcbiAgICAgIGV4cGVyaWVuY2U6IHRydWUsXG4gICAgICBwcm86IGZhbHNlLFxuICAgICAgY29uOiBmYWxzZSxcbiAgICAgIGFsbDogZmFsc2VcbiAgICB9KSk7XG4gIH07XG5cbiAgc2hvd1Byb3MgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG4gICAgICBwcm86ICFwcmV2aW91c1N0YXRlLnBybyxcbiAgICAgIGNvbjogZmFsc2UsXG4gICAgICBhbGw6IGZhbHNlLFxuICAgICAgZXhwZXJpZW5jZTogZmFsc2VcbiAgICB9KSk7XG4gIH07XG5cbiAgc2hvd0NvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG4gICAgICBjb246IHRydWUsXG4gICAgICBwcm86IGZhbHNlLFxuICAgICAgYWxsOiBmYWxzZSxcbiAgICAgIGV4cGVyaWVuY2U6IGZhbHNlXG4gICAgfSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbGwsXG4gICAgICBleHBlcmllbmNlLFxuICAgICAgcHJvLFxuICAgICAgY29uLFxuICAgICAgcHJvcyxcbiAgICAgIGNvbnMsXG4gICAgICBzaG93VXBJY29uLFxuICAgICAgbWF4SXRlbVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZXhwZXJpZW5jZXMsIGlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaG9sZGVyID0gW107XG4gICAgY29uc3QgYWxsSXRlbXMgPSBob2xkZXIuY29uY2F0KHByb3MsIGNvbnMpO1xuXG4gICAgLy8gaG9sZGVyLnB1c2godGhpcy5wcm9wcy5wcm9zLCB0aGlzLnByb3BzLmNvbnMsIGV4cGVyaWVuY2VzKTtcbiAgICAvLyAvLyBob2xkZXIucHVzaChwcm9zLCBjb25zLCBleHBlcmllbmNlcyk7XG5cbiAgICAvLyBjb25zdCBmbGF0dGVuQXJyYXkgPSBhcnIgPT4ge1xuICAgIC8vICAgcmV0dXJuIFtdLmNvbmNhdCguLi5hcnIpO1xuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBmbGF0dGVuZWRBcnJheSA9IGZsYXR0ZW5BcnJheShob2xkZXIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2FsbCA/IGB0YWJsaW5rcyBhY3RpdmVgIDogXCJ0YWJsaW5rc1wifVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93QWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YWxsID8gXCJhY3RpdmVBbGxcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICBBbGwge3Byb3MubGVuZ3RoICsgY29ucy5sZW5ndGh9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtleHBlcmllbmNlID8gXCJ0YWJsaW5rcyBhY3RpdmVcIiA6IFwidGFibGlua3NcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0V4cGVyaWVuY2VzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17ZXhwZXJpZW5jZSA/IFwiYWN0aXZlQWxsXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgRXhwZXJpZW5jZXMge2V4cGVyaWVuY2VzID8gZXhwZXJpZW5jZXMubGVuZ3RoIDogMH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3BybyA/IFwidGFibGlua3MgYWN0aXZlXCIgOiBcInRhYmxpbmtzXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dQcm9zfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJvID8gXCJhY3RpdmVBbGxcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICBQcm9zIHtwcm9zID8gcHJvcy5sZW5ndGggOiAwfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y29uID8gXCJ0YWJsaW5rcyBhY3RpdmVcIiA6IFwidGFibGlua3NcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0NvbnN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb24gPyBcImFjdGl2ZUFsbFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgIENvbnMge2NvbnMgPyBjb25zLmxlbmd0aCA6IDB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeFwiIC8+XG5cbiAgICAgICAge2FsbCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50LWhvbGRlclwiPlxuICAgICAgICAgICAgICB7YWxsSXRlbXMgPyAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge2FsbEl0ZW1zLnNsaWNlKDAsIG1heEl0ZW0pLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VySW1hZ2UgPSBpdGVtLnVzZXJJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS51c2VySW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiL3N0YXRpYy9ncmF2YXRhci5wbmdcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVjayA9IGl0ZW0udHlwZSA9PT0gXCJwcm9cIjtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQtaXRlbVwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlckltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVjLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmVjLWNhcmQtY29udGVudC1wcm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmVjLWNhcmQtY29udGVudC1jb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrID8gXCJQcm9cIiA6IFwiQ29uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9yZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZSBjb2xvcj1cInRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QWRkIFByb3MgYW5kIENvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2Avb3B0aW9uLXBybz9pZD0ke2l0ZW0uX2lkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9vcHRpb24tcHJvP2lkPSR7aXRlbS5faWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNlZSBVcGRhdGUgSGlzdG9yeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVwZGF0ZVBybyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVjayA/IFwiVXBkYXRlIFByb1wiIDogXCJVcGRhdGUgQ29uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRTkxRTYzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmsgT3B0aW9uIGFzIFNwYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IXNob3dVcEljb24gJiYgYWxsSXRlbXMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlldy1tb3JlLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dNb3JlfT5cbiAgICAgICAgICAgICAgICBTZWUgQWxsXG4gICAgICAgICAgICAgICAgPENhcmREb3duQXJyb3cgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBjb2xvcj17XCIjZmZmXCJ9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2hvd1VwSWNvbiAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpZXctbW9yZS1pdGVtXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93TGVzc30+XG4gICAgICAgICAgICAgICAgSGlkZVxuICAgICAgICAgICAgICAgIDxDYXJkVXBBcnJvdyB3aWR0aD17MjR9IGhlaWdodD17MjR9IGNvbG9yPXtcIiNmZmZcIn0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7ZXhwZXJpZW5jZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50LWhvbGRlclwiPlxuICAgICAgICAgICAgICB7ZXhwZXJpZW5jZXMgPyAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2VzLnNsaWNlKDAsIG1heEl0ZW0pLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VySW1hZ2UgPSB0aGlzLnByb3BzLnVzZXJBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMudXNlckF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgIDogXCIvc3RhdGljL2dyYXZhdGFyLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQtaXRlbVwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlckltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVjLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWMtY2FyZC1jb250ZW50LWV4cGVyaWVuY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+RXhwZXJpZW5jZTwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+SXQgd2FzIGdvb2Q8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57aXRlbX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IXNob3dVcEljb24gJiYgZXhwZXJpZW5jZXMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlldy1tb3JlLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dNb3JlfT5cbiAgICAgICAgICAgICAgICBTZWUgQWxsXG4gICAgICAgICAgICAgICAgPENhcmREb3duQXJyb3cgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBjb2xvcj17XCIjZmZmXCJ9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2hvd1VwSWNvbiAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpZXctbW9yZS1pdGVtXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93TGVzc30+XG4gICAgICAgICAgICAgICAgSGlkZVxuICAgICAgICAgICAgICAgIDxDYXJkVXBBcnJvdyB3aWR0aD17MjR9IGhlaWdodD17MjR9IGNvbG9yPXtcIiNmZmZcIn0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7cHJvICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQtaG9sZGVyXCI+XG4gICAgICAgICAgICAgIHtwcm9zID8gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIHtwcm9zLnNsaWNlKDAsIG1heEl0ZW0pLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VySW1hZ2UgPSBpdGVtLnVzZXJJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS51c2VySW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiL3N0YXRpYy9ncmF2YXRhci5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50LWl0ZW1cIiBrZXk9e2l0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VySW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZWMtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYy1jYXJkLWNvbnRlbnQtcHJvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlIGNvbG9yPVwidHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BZGQgUHJvcyBhbmQgQ29uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9vcHRpb24tcHJvP2lkPSR7aXRlbS5faWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL29wdGlvbi1wcm8/aWQ9JHtpdGVtLl9pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VlIFVwZGF0ZSBIaXN0b3J5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuVXBkYXRlUHJvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlIFByb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0U5MUU2M1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrIE9wdGlvbiBhcyBTcGFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYm90dG9tIHJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249XCJjbGlja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7IXNob3dVcEljb24gJiYgcHJvcy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aWV3LW1vcmUtaXRlbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd01vcmV9PlxuICAgICAgICAgICAgICAgIFNlZSBBbGxcbiAgICAgICAgICAgICAgICA8Q2FyZERvd25BcnJvdyB3aWR0aD17MjR9IGhlaWdodD17MjR9IGNvbG9yPXtcIiNmZmZcIn0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzaG93VXBJY29uICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlldy1tb3JlLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dMZXNzfT5cbiAgICAgICAgICAgICAgICBIaWRlXG4gICAgICAgICAgICAgICAgPENhcmRVcEFycm93IHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gY29sb3I9e1wiI2ZmZlwifSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtjb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudC1ob2xkZXJcIj5cbiAgICAgICAgICAgICAge2NvbnMgPyAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge2NvbnMuc2xpY2UoMCwgbWF4SXRlbSkubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbWFnZSA9IGl0ZW0udXNlckltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLnVzZXJJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIDogXCIvc3RhdGljL2dyYXZhdGFyLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQtaXRlbVwiIGtleT17aXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlYy1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjLWNhcmQtY29udGVudC1jb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vcmUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vcmUgY29sb3I9XCJ0cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFkZCBQcm9zIGFuZCBDb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL29wdGlvbi1jb24/aWQ9JHtpdGVtLl9pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avb3B0aW9uLWNvbj9pZD0ke2l0ZW0uX2lkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWUgVXBkYXRlIEhpc3Rvcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5VcGRhdGVDb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgQ29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRTkxRTYzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmsgT3B0aW9uIGFzIFNwYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20gcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IXNob3dVcEljb24gJiYgY29ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aWV3LW1vcmUtaXRlbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd01vcmV9PlxuICAgICAgICAgICAgICAgIFNlZSBBbGxcbiAgICAgICAgICAgICAgICA8Q2FyZERvd25BcnJvdyB3aWR0aD17MjR9IGhlaWdodD17MjR9IGNvbG9yPXtcIiNmZmZcIn0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzaG93VXBJY29uICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlldy1tb3JlLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dMZXNzfT5cbiAgICAgICAgICAgICAgICBIaWRlXG4gICAgICAgICAgICAgICAgPENhcmRVcEFycm93IHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gY29sb3I9e1wiI2ZmZlwifSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC8qIFN0eWxlIHRoZSB0YWIgKi9cbiAgICAgICAgICAgIC50YWIge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNjY2M7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZml4IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYmxpbmtzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWItcCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBTdHlsZSBmb3IgdGhlIHRhYi1jb250ZW50LWhvbGRlciAqL1xuXG4gICAgICAgICAgICAudGFiLWNvbnRlbnQtaG9sZGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIC8vIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWItY29udGVudC1pdGVtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGFiLXRleHQge1xuICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWMtY2FyZC1jb250ZW50LWNvbixcbiAgICAgICAgICAgIC5yZWMtY2FyZC1jb250ZW50LXBybyxcbiAgICAgICAgICAgIC5yZWMtY2FyZC1jb250ZW50LWV4cGVyaWVuY2Uge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWMtY2FyZC1jb250ZW50LWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjY2IxYTRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlYy1jYXJkLWNvbnRlbnQtcHJvIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMxZDkxMjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVjLWNhcmQtY29udGVudC1leHBlcmllbmNlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMxYjlhZDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFN0eWxlIHRoZSBidXR0b25zIGluc2lkZSB0aGUgdGFiICovXG4gICAgICAgICAgICAudGFiIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXG5cbiAgICAgICAgICAgIC5hY3RpdmVBbGwge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZUV4cGVyaWVuY2Uge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmVQcm8ge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmVDb24ge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcblxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuICAgICAgICAgICAgLnRhYmNvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IGRvdHRlZCAjY2NjO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvZmlsZS1pbWFnZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItcmVjLWRldGFpbHMge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xuICAgICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwZDBkMGQ7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmUtaWNvbiB7XG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOTQlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52aWV3LW1vcmUtaXRlbSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQ6IDQyJTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMnB4IDNweCAxOHB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAudXNlci1yZWMtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgbGVmdDogMjYlO1xuICAgICAgICAgICAgICAgIHRvcDogLTUwcHg7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm1vcmUtaWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgyJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVRhYjtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/tab.js */"));
    }
  }]);

  return CustomTab;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomTab);

/***/ }),

/***/ "./components/topicview/topicViewLandingPage.js":
/*!******************************************************!*\
  !*** ./components/topicview/topicViewLandingPage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_dateConversion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/dateConversion */ "./lib/dateConversion.js");
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Icons */ "./components/Icons.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _lib_removeSpaces__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../lib/removeSpaces */ "./lib/removeSpaces.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _reactionBanner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reactionBanner */ "./components/topicview/reactionBanner.js");























var TopicViewLandingPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(TopicViewLandingPage, _Component);

  function TopicViewLandingPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, TopicViewLandingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(TopicViewLandingPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      recs: [],
      follow: false,
      copied: false,
      url: "".concat(_config_config__WEBPACK_IMPORTED_MODULE_18__["CLIENT_API"], "/topic/").concat(Object(_lib_removeSpaces__WEBPACK_IMPORTED_MODULE_19__["default"])(_this.props.question))
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "getTotalRecs", function (question) {
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_14__["GetQuestionTotalRecs"])(question).then(function (result) {
        _this.setState({
          recs: result.data
        });
      }).catch(function (err) {
        _this.setState({
          error: err
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "getQuestionId", function (id) {
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_14__["FetchSpecificQuestionId"])(id).then(function (result) {
        _this.setState({
          questionId: result.data.id
        });
      }).catch(function (err) {
        _this.setState({
          error: err
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "CheckWhetherQuestionIsFollowed", function (questionId) {
      var user = JSON.parse(localStorage.getItem("user_details"));

      if (user) {
        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_14__["GetFollowedQuestion"])(questionId, user._id).then(function (result) {
          _this.setState({
            follow: result.data
          });
        }).catch(function (err) {
          _this.setState({
            error: err
          });
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleFollowLink", function () {
      var user = JSON.parse(localStorage.getItem("user_details"));

      if (!user) {
        alert("Kindly login");
        return;
      }

      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_14__["FollowQuestion"])(_this.state.questionId, user._id).then(function (result) {
        _this.setState({
          follow: result.data.following
        });
      }).catch(function (err) {
        _this.setState({
          error: err
        });
      }); // this.setState(previouState => ({
      //   follow: !previouState.follow
      // }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "copyToClipboard", function () {
      var copiedQuestion = "".concat(_config_config__WEBPACK_IMPORTED_MODULE_18__["CLIENT_API"], "/topic/").concat(Object(_lib_removeSpaces__WEBPACK_IMPORTED_MODULE_19__["default"])(_this.props.question));

      _this.setState({
        copied: true
      }, function () {
        navigator.clipboard.writeText(copiedQuestion);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(TopicViewLandingPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var QuestId;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //Do something here
                this.getTotalRecs(this.props.question);
                this.getQuestionId(this.props.question);
                _context.next = 4;
                return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_14__["FetchSpecificQuestionId"])(this.props.question);

              case 4:
                QuestId = _context.sent;
                this.CheckWhetherQuestionIsFollowed(QuestId.data.id);

              case 6:
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        recs: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          recs = _this$state.recs,
          follow = _this$state.follow,
          copied = _this$state.copied,
          url = _this$state.url,
          questionId = _this$state.questionId;
      var _this$props = this.props,
          question = _this$props.question,
          data = _this$props.data,
          lastUpdated = _this$props.lastUpdated,
          numOfRecs = _this$props.numOfRecs,
          optionConsidered = _this$props.optionConsidered,
          tag = _this$props.tag;

      var flattenArray = function flattenArray(arr) {
        var _ref;

        return (_ref = []).concat.apply(_ref, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr));
      };

      var _tag = flattenArray(tag);

      var d = new Date(lastUpdated);
      var date = Object(_lib_dateConversion__WEBPACK_IMPORTED_MODULE_13__["default"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(), d);
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "landing"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "landing-tag"
      }, tag ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, _tag.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
          prefetch: true,
          href: "/tags/".concat(item),
          as: "/tags/".concat(item)
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          key: i,
          className: "jsx-2598117078" + " " + "tagged"
        }, item)));
      })) : "", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "more-actions"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        onClick: this.handleFollowLink,
        className: "jsx-2598117078" + " " + ((follow ? "follow span bg" : "follow span") || "")
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          position: "relative",
          top: "1.5px"
        },
        className: "jsx-2598117078"
      }, follow ? "Following" : "Follow")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          className: "jsx-2598117078" + " " + "more-links"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_16__["More"], {
          color: "transparent",
          width: "24",
          height: "24"
        })),
        content: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            width: "200px",
            color: "#4d4d4d",
            fontSize: "16px"
          },
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
          prefetch: true // as={`/manageTag`}
          ,
          href: "/updateTag/".concat(questionId)
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "jsx-2598117078" + " " + "clickable"
        }, "Add/Edit Tags")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
          prefetch: true,
          href: "/update-history?id=".concat(questionId),
          as: "/update-history?id=".concat(questionId) // as={`/updatedQuestion`}

        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "jsx-2598117078" + " " + "clickable"
        }, "See Update History")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
          prefetch: true,
          href: "/addoption/".concat(questionId)
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "jsx-2598117078" + " " + "clickable"
        }, "Add Option"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("hr", {
          className: "jsx-2598117078"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "jsx-2598117078"
        }, "SHARE"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: " column" // border: "1px solid orange"

          },
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            display: "flex",
            padding: "10px",
            color: "#4d4d4d",
            fontSize: "16px"
          },
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            marginRight: "20px"
          },
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_20__["FacebookShareButton"], {
          url: url
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_20__["FacebookIcon"], {
          size: 32,
          round: true
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          className: "jsx-2598117078"
        }, "Share")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "jsx-2598117078" + " " + "social-btn"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_20__["TwitterShareButton"], {
          url: url
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_20__["TwitterIcon"], {
          size: 32,
          round: true
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          className: "jsx-2598117078"
        }, "Tweet"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            display: "flex",
            padding: "10px",
            color: "#4d4d4d",
            fontSize: "16px"
          },
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            marginRight: "20px"
          } // className="social-btn"
          ,
          className: "jsx-2598117078"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_20__["EmailShareButton"], {
          url: url
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_20__["EmailIcon"], {
          size: 32,
          round: true
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          className: "jsx-2598117078"
        }, "Share")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          onClick: this.copyToClipboard,
          className: "jsx-2598117078" + " " + "social-btn"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("i", {
          className: "jsx-2598117078" + " " + "far fa-clipboard"
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "jsx-2598117078"
        }, copied && "Copied", !copied && "  Copy"))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("hr", {
          className: "jsx-2598117078"
        })),
        on: "click",
        hideOnScroll: true,
        position: "bottom right"
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "landing-question"
      }, question ? question + "?" : "loading..."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "landing-details"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "landing-stat-container"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "details"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078" + " " + "option-considered "
      }, optionConsidered ? optionConsidered : 0), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          position: "relative",
          left: "-10px"
        },
        className: "jsx-2598117078" + " " + "option-considered-text "
      }, "Options ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        className: "jsx-2598117078"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078"
      }, "Considered"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "details"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078" + " " + "option-considered"
      }, recs ? recs.length : 0), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078" + " " + "option-considered-text"
      }, "User ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        className: "jsx-2598117078"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078"
      }, "Recs"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2598117078" + " " + "details"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078" + " " + "option-considered"
      }, date ? date : 0), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078" + " " + "option-considered-text"
      }, "Last ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
        className: "jsx-2598117078"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-2598117078"
      }, "Updated"))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "2598117078"
      }, ".landing-stat-container.jsx-2598117078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative;top:16px;}.option-considered.jsx-2598117078{padding-right:10px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:200;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;color:#2b5876;width:50%;}.clickable.jsx-2598117078{cursor:pointer;}.far.jsx-2598117078{font-size:30px;position:relative;}.share-facebook.jsx-2598117078{box-shadow:none;color:#fff;background-color:#4267b2;}.share-twitter.jsx-2598117078{box-shadow:none;color:#fff;background-color:#1da1f2;}.social-btn.jsx-2598117078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;cursor:pointer;}.option-considered-text.jsx-2598117078{display:block;width:60%;color:#2b5876;margin-right:15px;padding-right:13px;font-weight:400;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;text-transform:uppercase;}.not.jsx-2598117078{display:none;}.landing.jsx-2598117078{width:100%;background:#fdfdfd !important;box-sizing:border-box;font-size:15px;font-family:inherit;border:1px solid transparent;}.time-added.jsx-2598117078{padding-right:3px;}.landing-tag.jsx-2598117078{padding:10px 20px;margin-bottom:5px;margin-left:15px;margin-top:15px;}.more-actions.jsx-2598117078{float:right;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:-4px;}.follow.jsx-2598117078{font-size:12px;diplay:flex;position:relative;visibility:visible;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;display:inline-block;color:#4d4d4d;border:1px solid #4d4d4d;border-radius:4px;cursor:pointer;padding-right:10px;padding-left:10px;}.bg.jsx-2598117078{background-color:#4d4d4d;color:#fff !important;}.follow.jsx-2598117078:hover{color:rgb(91,56,141);border:1px solid rgb(91,56,141);}.more-links.jsx-2598117078{background:#eee;border:0;cursor:pointer;border-radius:35px;outline:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.more-actions.jsx-2598117078 .span.jsx-2598117078{margin-right:12px;}.tagged.jsx-2598117078{display:inline-block;margin-right:10px;padding-right:5px;text-transform:uppercase;font-weight:600;font-family:inherit;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;font-size:13px;color:#2b5876;white-space:nowrap;cursor:pointer;}.landing-question.jsx-2598117078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:40px;font-weight:700;color:rgb(91,56,141);font-family:Cabin;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;cursor:pointer;}.landing-question.jsx-2598117078:hover{color:#4e4376;}.landing-details.jsx-2598117078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:30px;}.details.jsx-2598117078{padding:3px 10px;margin-top:30px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;}@media (min-width:768px){.landing.jsx-2598117078{max-width:100%;background:#fdfdfd !important;margin-top:1px auto;box-sizing:border-box;font-family:inherit;padding:24px 0;border:1px solid #e6e8eb;padding-left:48px;padding-right:48px;}.landing-question.jsx-2598117078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:40px;font-weight:700;font-family:Cabin;}.option-considered.jsx-2598117078{font-size:1.4em;}.option-considered-text.jsx-2598117078{font-size:0.8em;}}@media (max-width:768px){.landing-question.jsx-2598117078{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:21px;padding-right:5px;padding-left:5px;position:relative;top:17px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.follow.jsx-2598117078{visibilty:hidden !important;}.landing-details.jsx-2598117078 .details.jsx-2598117078{padding:3px 9px;margin-top:30px;color:#637381;font-size:3.2vw;font-weight:600;text-transform:uppercase;}.option-considered.jsx-2598117078{font-size:12px;}.option-considered-text.jsx-2598117078{font-size:0.9em;}.tagged.jsx-2598117078{font-size:11px;color:#2b5876;white-space:nowrap;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9jb21wb25lbnRzL3RvcGljdmlldy90b3BpY1ZpZXdMYW5kaW5nUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzVVcsQUFHNEIsQUFPTSxBQWFKLEFBSUEsQUFRQyxBQU1BLEFBS0gsQUFrQkMsQUFZRCxBQUlGLEFBVU8sQUFJQSxBQU9OLEFBUUcsQUFzQlUsQUFLRixBQUtQLEFBWUUsQUFHRyxBQWFSLEFBVUMsQUFJRCxBQU9JLEFBVUEsQUFhRixBQVFHLEFBR0EsQUFNTyxBQVVLLEFBSVosQUFTRCxBQUdDLEFBR0QsV0FsTGEsQ0FxQlosQ0F6QnBCLENBWFksQUFrSFosQ0E1SkEsQUFNb0IsQUFnRk4sQUEyRm9CLEFBcURoQyxBQU1nQixDQWhPTCxBQU1BLEFBb0dGLEFBZ0ZULEFBR0EsQUFvQmtCLEFBWWxCLENBbEVnQixDQXBHbEIsQUFJb0IsQUEyRHBCLENBL0lvQixFQThIZ0IsQUFvQmhCLEdBMUZKLENBaUVRLEFBWVAsRUEzR1UsQUFNQSxBQW9FUCxDQWtJbEIsQ0FvQnFCLENBOUpSLEVBK0lHLENBdE5sQixBQWlLd0IsR0FqR0wsQ0FwRkosQ0F3REssQ0EwRkEsQ0FiQyxDQTlERyxJQStCSCxBQXlGRyxDQTRDSixDQWxIcEIsQ0FpSUUsSUFoT0YsQUFNQSxDQXFEa0IsQUF5Q2xCLEVBd0RlLENBN0hNLENBMEZNLEVBYmYsR0FzR1EsQ0FwS0gsQ0ErQlEsQ0F5RkMsSUF6RzFCLEFBZ0RlLEtBL0ljLEFBMkNKLEFBMkhBLEFBY0wsQUE4Qk8sQ0FoSlQsR0FlSSxBQW9LTyxJQXpGWCxLQTZDTSxJQXRJRCxPQWVRLEFBMkVULENBc0VILElBbUJqQixDQWxKUyxHQXNHUSxJQWpNTSxFQTZGekIsQ0E4SHNCLElBdEVDLElBNkNNLEtBeEg3QixFQTRHbUIsR0FzQ0UsV0FyRkksR0FnRHpCLENBWXNCLEVBMEJBLGNBdEhELEVBNkZFLEVBMEJWLE1BM0xRLEFBMkhKLEFBNENFLEVBOUJNLENBbURGLEdBdk9ILEtBNk1sQixJQXRDZ0IsQUE0Q0UsSUFoSk8sS0FsRWhCLE9BdUtjLEFBNENILEVBbE50QixJQU9xQixPQTREckIsRUF5RmlCLEdBdURmLEdBNUNrQixTQVZKLFFBZkssQ0EwQkUsS0FWRixRQS9DSCxVQXJFTSxDQXFIUCxFQXVFZixHQXRIeUIsRUFtRU4sUUFuQnJCLFdBb0JBLElBbkV1QixNQXpHTCxnQkFDRixnQkFzSWhCLFNBMUZpQixBQW9IQSxlQWxIakIsQUFtSEEsZ0JBL0pnQixjQUNKLFNBc0dXLENBckd2QixvQkFzR2dCLGNBQ1cseUJBQ1Asa0JBQ0gsZUFDSSxtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL2NvbXBvbmVudHMvdG9waWN2aWV3L3RvcGljVmlld0xhbmRpbmdQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aW1lRGlmZmVyZW5jZSBmcm9tIFwiLi4vLi4vbGliL2RhdGVDb252ZXJzaW9uXCI7XG5pbXBvcnQge1xuICBHZXRRdWVzdGlvblRvdGFsUmVjcyxcbiAgRm9sbG93UXVlc3Rpb24sXG4gIEZldGNoU3BlY2lmaWNRdWVzdGlvbklkLFxuICBHZXRGb2xsb3dlZFF1ZXN0aW9uXG59IGZyb20gXCIuLi8uLi9hcGlSZXF1ZXN0cy9hcGlSZXF1ZXN0c1wiO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IE1vcmUgfSBmcm9tIFwiLi4vSWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENMSUVOVF9BUEkgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IFJlbW92ZVNwYWNlc0FkZEh5cGhlbiBmcm9tIFwiLi4vLi4vbGliL3JlbW92ZVNwYWNlc1wiO1xuaW1wb3J0IHtcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tJY29uLFxuICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gIEVtYWlsU2hhcmVCdXR0b24sXG4gIEVtYWlsSWNvbixcbiAgVHdpdHRlckljb25cbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbmltcG9ydCBSZWFjdGlvbkJhbm5lciBmcm9tIFwiLi9yZWFjdGlvbkJhbm5lclwiO1xuXG5jbGFzcyBUb3BpY1ZpZXdMYW5kaW5nUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJlY3M6IFtdLFxuICAgIGZvbGxvdzogZmFsc2UsXG4gICAgY29waWVkOiBmYWxzZSxcbiAgICB1cmw6IGAke0NMSUVOVF9BUEl9L3RvcGljLyR7UmVtb3ZlU3BhY2VzQWRkSHlwaGVuKHRoaXMucHJvcHMucXVlc3Rpb24pfWBcbiAgfTtcblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL0RvIHNvbWV0aGluZyBoZXJlXG4gICAgdGhpcy5nZXRUb3RhbFJlY3ModGhpcy5wcm9wcy5xdWVzdGlvbik7XG4gICAgdGhpcy5nZXRRdWVzdGlvbklkKHRoaXMucHJvcHMucXVlc3Rpb24pO1xuXG4gICAgY29uc3QgUXVlc3RJZCA9IGF3YWl0IEZldGNoU3BlY2lmaWNRdWVzdGlvbklkKHRoaXMucHJvcHMucXVlc3Rpb24pO1xuXG4gICAgdGhpcy5DaGVja1doZXRoZXJRdWVzdGlvbklzRm9sbG93ZWQoUXVlc3RJZC5kYXRhLmlkKTtcbiAgfVxuXG4gIGdldFRvdGFsUmVjcyA9IHF1ZXN0aW9uID0+IHtcbiAgICBHZXRRdWVzdGlvblRvdGFsUmVjcyhxdWVzdGlvbilcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHJlY3M6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZ2V0UXVlc3Rpb25JZCA9IGlkID0+IHtcbiAgICBGZXRjaFNwZWNpZmljUXVlc3Rpb25JZChpZClcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHF1ZXN0aW9uSWQ6IHJlc3VsdC5kYXRhLmlkXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgQ2hlY2tXaGV0aGVyUXVlc3Rpb25Jc0ZvbGxvd2VkID0gcXVlc3Rpb25JZCA9PiB7XG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIGlmICh1c2VyKSB7XG4gICAgICBHZXRGb2xsb3dlZFF1ZXN0aW9uKHF1ZXN0aW9uSWQsIHVzZXIuX2lkKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9sbG93OiByZXN1bHQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVjczogW11cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUZvbGxvd0xpbmsgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBhbGVydChcIktpbmRseSBsb2dpblwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBGb2xsb3dRdWVzdGlvbih0aGlzLnN0YXRlLnF1ZXN0aW9uSWQsIHVzZXIuX2lkKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9sbG93OiByZXN1bHQuZGF0YS5mb2xsb3dpbmdcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHByZXZpb3VTdGF0ZSA9PiAoe1xuICAgIC8vICAgZm9sbG93OiAhcHJldmlvdVN0YXRlLmZvbGxvd1xuICAgIC8vIH0pKTtcbiAgfTtcblxuICBjb3B5VG9DbGlwYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29waWVkUXVlc3Rpb24gPSBgJHtDTElFTlRfQVBJfS90b3BpYy8ke1JlbW92ZVNwYWNlc0FkZEh5cGhlbihcbiAgICAgIHRoaXMucHJvcHMucXVlc3Rpb25cbiAgICApfWA7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBjb3BpZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcGllZFF1ZXN0aW9uKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlY3MsIGZvbGxvdywgY29waWVkLCB1cmwsIHF1ZXN0aW9uSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgcXVlc3Rpb24sXG4gICAgICBkYXRhLFxuICAgICAgbGFzdFVwZGF0ZWQsXG4gICAgICBudW1PZlJlY3MsXG4gICAgICBvcHRpb25Db25zaWRlcmVkLFxuICAgICAgdGFnXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmxhdHRlbkFycmF5ID0gYXJyID0+IHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoLi4uYXJyKTtcbiAgICB9O1xuICAgIGNvbnN0IF90YWcgPSBmbGF0dGVuQXJyYXkodGFnKTtcbiAgICBjb25zdCBkID0gbmV3IERhdGUobGFzdFVwZGF0ZWQpO1xuICAgIGNvbnN0IGRhdGUgPSB0aW1lRGlmZmVyZW5jZShEYXRlLm5vdygpLCBkKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXRhZ1wiPlxuICAgICAgICAgIHt0YWcgPyAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtfdGFnLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC90YWdzLyR7aXRlbX1gfSBhcz17YC90YWdzLyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1widGFnZ2VkXCJ9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvbGxvd0xpbmt9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9sbG93ID8gXCJmb2xsb3cgc3BhbiBiZ1wiIDogXCJmb2xsb3cgc3BhblwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiMS41cHhcIiB9fT5cbiAgICAgICAgICAgICAgICB7Zm9sbG93ID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICA8TW9yZSBjb2xvcj1cInRyYW5zcGFyZW50XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgY29sb3I6IFwiIzRkNGQ0ZFwiLCBmb250U2l6ZTogXCIxNnB4XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYXM9e2AvbWFuYWdlVGFnYH1cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3VwZGF0ZVRhZy8ke3F1ZXN0aW9uSWR9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiPkFkZC9FZGl0IFRhZ3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvdXBkYXRlLWhpc3Rvcnk/aWQ9JHtxdWVzdGlvbklkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvdXBkYXRlLWhpc3Rvcnk/aWQ9JHtxdWVzdGlvbklkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gYXM9e2AvdXBkYXRlZFF1ZXN0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiPlNlZSBVcGRhdGUgSGlzdG9yeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgL2FkZG9wdGlvbi8ke3F1ZXN0aW9uSWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCI+QWRkIE9wdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNIQVJFPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiIGNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IFwiMXB4IHNvbGlkIG9yYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzRkNGQ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uIHVybD17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezMyfSByb3VuZD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaGFyZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b24gdXJsPXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBzaXplPXszMn0gcm91bmQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ud2VldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzRkNGQ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwic29jaWFsLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFbWFpbFNoYXJlQnV0dG9uIHVybD17dXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1haWxJY29uIHNpemU9ezMyfSByb3VuZD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FbWFpbFNoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNoYXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weVRvQ2xpcGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2xpcGJvYXJkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29waWVkICYmIFwiQ29waWVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFjb3BpZWQgJiYgXCIgIENvcHlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk1BUksgUVVFU1RJT04gQVMgU1BBTTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5NYXJrIGFzIFNwYW08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb249XCJjbGlja1wiXG4gICAgICAgICAgICAgIGhpZGVPblNjcm9sbFxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbSByaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXF1ZXN0aW9uXCI+XG4gICAgICAgICAge3F1ZXN0aW9uID8gcXVlc3Rpb24gKyBcIj9cIiA6IFwibG9hZGluZy4uLlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWRldGFpbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctc3RhdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tY29uc2lkZXJlZCBcIj5cbiAgICAgICAgICAgICAgICB7b3B0aW9uQ29uc2lkZXJlZCA/IG9wdGlvbkNvbnNpZGVyZWQgOiAwfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbGVmdDogXCItMTBweFwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3B0aW9uLWNvbnNpZGVyZWQtdGV4dCBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgT3B0aW9ucyA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db25zaWRlcmVkPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tY29uc2lkZXJlZFwiPlxuICAgICAgICAgICAgICAgIHtyZWNzID8gcmVjcy5sZW5ndGggOiAwfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi1jb25zaWRlcmVkLXRleHRcIj5cbiAgICAgICAgICAgICAgICBVc2VyIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPlJlY3M8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi1jb25zaWRlcmVkXCI+e2RhdGUgPyBkYXRlIDogMH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi1jb25zaWRlcmVkLXRleHRcIj5cbiAgICAgICAgICAgICAgICBMYXN0IDxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmxhbmRpbmctc3RhdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9wdGlvbi1jb25zaWRlcmVkIHtcbiAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgLy8gY29sb3I6ICM4ZDk1OWM7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMmI1ODc2O1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xpY2thYmxlIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmFyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAvLyBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC8vIGxlZnQ6IDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNoYXJlLWZhY2Vib29rIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaGFyZS10d2l0dGVyIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZGExZjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc29jaWFsLWJ0biB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIC8vIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIC8vIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2U2ZThlYjtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCA2cHg7XG4gICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAvLyB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcHRpb24tY29uc2lkZXJlZC10ZXh0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMmI1ODc2O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ub3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGFuZGluZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDFweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aW1lLWFkZGVkIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGFuZGluZy10YWcge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlLWFjdGlvbnMge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvbGxvdyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZGlwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC8vIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgLy8gdG9wOiAtNnB4O1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iZyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDRkNGQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb2xsb3c6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDkxLCA1NiwgMTQxKTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkxLCA1NiwgMTQxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vcmUtbGlua3Mge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG5cbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vcmUtYWN0aW9ucyAuc3BhbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWdnZWQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMmI1ODc2O1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGFuZGluZy1xdWVzdGlvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTEsIDU2LCAxNDEpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FiaW47XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxhbmRpbmctcXVlc3Rpb246aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzRlNDM3NjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxhbmRpbmctZGV0YWlscyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IGRvdHRlZCB5ZWxsb3c7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgLmxhbmRpbmcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHggYXV0bztcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlOGViO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDhweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhbmRpbmctcXVlc3Rpb24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhYmluO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm9wdGlvbi1jb25zaWRlcmVkIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vcHRpb24tY29uc2lkZXJlZC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAubGFuZGluZy1xdWVzdGlvbiB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZm9sbG93IHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhbmRpbmctZGV0YWlscyAuZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjM3MzgxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ydnc7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm9wdGlvbi1jb25zaWRlcmVkIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm9wdGlvbi1jb25zaWRlcmVkLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRhZ2dlZCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmI1ODc2O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BpY1ZpZXdMYW5kaW5nUGFnZTtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/components/topicview/topicViewLandingPage.js */"));
    }
  }]);

  return TopicViewLandingPage;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TopicViewLandingPage);

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default, CLIENT_API, GOOGLE_CLIENT_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_API", function() { return CLIENT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_CLIENT_KEY", function() { return GOOGLE_CLIENT_KEY; });
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
/* harmony default export */ __webpack_exports__["default"] = (API_URL);
var CLIENT_API =  false ? undefined : "http://localhost:3001";
var GOOGLE_CLIENT_KEY = "597561721865-s08p7p1gm09ripitr3a1h3fg34q1pfju.apps.googleusercontent.com"; //add your google api key here

/***/ }),

/***/ "./layouts/Layout.js":
/*!***************************!*\
  !*** ./layouts/Layout.js ***!
  \***************************/
/*! exports provided: default, MainBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBody", function() { return MainBody; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _utils_toprating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/toprating */ "./utils/toprating.js");
/* harmony import */ var _utils_headerButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/headerButton */ "./utils/headerButton.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);










 //import Recommendation from "../components/Recommendation";




var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      checkuser: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3053040980" + " " + "sidebar2"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-3053040980"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-3053040980"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-3053040980"
      }), this.props.askie && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3053040980" + " " + "callToAction"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_headerButton__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainBody, null, this.props.children), user && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3053040980" + " " + "sidebar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_toprating__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3053040980"
      }, ".sidebar.jsx-3053040980{left:71.5%;position:relative;top:85%;}.sidebar2.jsx-3053040980{display:inline-block;left:02%;position:fixed;}.myClass.jsx-3053040980{cursor:pointer;}.callToAction.jsx-3053040980{position:fixed;top:90%;left:82%;z-index:1000;display:none;}@media screen and (max-width:600px){.sidebar.jsx-3053040980{display:none;}.callToAction.jsx-3053040980{position:fixed;top:90%;left:78%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (width:768px){.callToAction.jsx-3053040980{position:fixed;top:43%;left:60%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (width:320px){.callToAction.jsx-3053040980{position:fixed;top:90%;left:75%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (width:375px){.callToAction.jsx-3053040980{position:fixed;top:76%;left:75%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (width:414px){.callToAction.jsx-3053040980{position:fixed;top:70%;left:75%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}@media screen and (width:1024px){.callToAction.jsx-3053040980{position:fixed;top:34%;left:58%;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9sYXlvdXRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q1csQUFHMEIsQUFLVSxBQUtOLEFBSUEsQUFTQSxBQUlFLEFBU0EsQUFVQSxBQVVBLEFBVUEsQUFVQSxXQTNFQyxFQXVCbEIsRUFiRixBQUlVLEFBYUUsQUFTQSxBQVVBLEFBVUEsQUFVQSxBQVVBLE1BdkVELEVBVUEsQUFhRSxBQVNBLEFBVUEsQUFVQSxBQVVBLEFBVUEsTUE1RUgsQ0FLTyxFQVVGLEFBYUUsQUFTQSxBQVVBLEFBVUEsQUFVQSxBQVVBLEtBNUVqQixRQUtBLEFBVWUsQUFhRSxBQVNBLEFBVUEsQUFVQSxBQVVBLEFBVUEsYUE3RGpCLDZEQWFFLEFBU0EsQUFVQSxBQVVBLEFBVUEsQUFVQSIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvbGF5b3V0cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBUb3BSYXRpbmcgZnJvbSBcIi4uL3V0aWxzL3RvcHJhdGluZ1wiO1xuLy9pbXBvcnQgUmVjb21tZW5kYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25cIjtcbmltcG9ydCBIZWFkZXJCdXR0b24gZnJvbSBcIi4uL3V0aWxzL2hlYWRlckJ1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNoZWNrdXNlcjogbnVsbFxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrdXNlcjogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSlcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluZGV4UGFnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHVzZXIgPSBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHs8SGVhZGVyIHsuLi50aGlzLnByb3BzfSAvPn1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXIyXCI+ey8qPFJlY29tbWVuZGF0aW9uIC8+Ki99PC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAge3RoaXMucHJvcHMuYXNraWUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsbFRvQWN0aW9uXCI+XG4gICAgICAgICAgICA8SGVhZGVyQnV0dG9uIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxNYWluQm9keT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L01haW5Cb2R5PlxuXG4gICAgICAgIHt1c2VyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgICAgIDxUb3BSYXRpbmcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICAgIGxlZnQ6IDcxLjUlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogODUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpZGViYXIyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBsZWZ0OiAwMiU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5teUNsYXNzIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FsbFRvQWN0aW9uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0b3A6IDkwJTtcbiAgICAgICAgICAgICAgbGVmdDogODIlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jYWxsVG9BY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDkwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3OCU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAod2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIC5jYWxsVG9BY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDQzJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MCU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDogMzIwcHgpIHtcbiAgICAgICAgICAgICAgLmNhbGxUb0FjdGlvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogOTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDc1JTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoOiAzNzVweCkge1xuICAgICAgICAgICAgICAuY2FsbFRvQWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiA3NiU7XG4gICAgICAgICAgICAgICAgbGVmdDogNzUlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAod2lkdGg6IDQxNHB4KSB7XG4gICAgICAgICAgICAgIC5jYWxsVG9BY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDcwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3NSU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgIC5jYWxsVG9BY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDM0JTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1OCU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFpbkJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/layouts/Layout.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);


var MainBody =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MainBody, _Component2);

  function MainBody() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainBody);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainBody).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainBody, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.props.children);
    }
  }]);

  return MainBody;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ }),

/***/ "./lib/dateConversion.js":
/*!*******************************!*\
  !*** ./lib/dateConversion.js ***!
  \*******************************/
/*! exports provided: DateConversion, default, timeConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateConversion", function() { return DateConversion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timeDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeConverter", function() { return timeConverter; });
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

/***/ "./lib/removeSpaces.js":
/*!*****************************!*\
  !*** ./lib/removeSpaces.js ***!
  \*****************************/
/*! exports provided: default, AddSpacesRemoveHyphen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoveSpacesAddHyphen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpacesRemoveHyphen", function() { return AddSpacesRemoveHyphen; });
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

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

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

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

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
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

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
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
var isProd = process.env && "development" === 'production';

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

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

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

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

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

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_facebookCustomButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/facebookCustomButton */ "./components/facebookCustomButton.js");
/* harmony import */ var _components_googleCustomButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/googleCustomButton */ "./components/googleCustomButton.js");
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../config/config */ "./config/config.js");






















var Signin =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Signin, _Component);

  function Signin() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Signin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      email: "",
      password: "",
      error: "",
      loading: false,
      showClass: false,
      msg: "",
      err: false //
      //myloading: true

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "openBtn", function () {
      //alert("click");
      _this.setState({
        showClass: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "closeBtn", function () {
      _this.setState({
        showClass: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleDivClose", function (e) {
      if (e.target === _this.div) {
        _this.setState(function (previousState) {
          return {
            showClass: !previousState
          };
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleForgot", function (e) {
      e.preventDefault();
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_17__["forgotPasswordFunction"])(_this.state.email).then(function (result) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (_ref) {
      var _ref$target = _ref.target,
          name = _ref$target.name,
          value = _ref$target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      _this.setState({
        loading: true
      });

      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_17__["login"])(email.trim(), password).then(function (result) {
        if (result) {
          localStorage.setItem("user_token", result.data.result.token);
          localStorage.setItem("user_details", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(result.data.data)); //this.props.closeLogin();

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Signin, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var user_data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return JSON.parse(localStorage.getItem("user_details"));

              case 2:
                user_data = _context.sent;

                if (user_data !== null) {
                  next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/");
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

          Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_17__["mySocial"])(_email, username, "", imageUrl, givenName).then(function (result) {
            // console.log(result.data.data._id)
            response.profileObj._id = result.data.data._id;
            response.profileObj.username = username; //result.data.data._id
            //  localStorage.setItem("user_token", response.tokenId);

            localStorage.setItem("user_token", result.data.result.token);
            localStorage.setItem("user_details", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(response.profileObj));
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
        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_17__["mySocial"])(email, username, "", imageUrl, givenName).then(function (result) {
          console.log(result); // console.log(result.data.data._id)

          profileObj._id = result.data.data._id; // profileObj.username = username;
          //result.data.data._id
          // localStorage.setItem("user_token", response.userID);

          localStorage.setItem("user_token", result.data.result.token);
          localStorage.setItem("user_details", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(profileObj));
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
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.handleDivClose(e);
        },
        id: showClass ? "overlayShow" : "overlay",
        ref: function ref(el) {
          return _this2.div = el;
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "custom-sign"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "form-card"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("em", {
        className: err ? "err" : "suc"
      }, msg ? msg : ""), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "close-iconn",
        onClick: this.closeBtn
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("strong", {
        style: {
          marginBottom: "5px",
          fontFamily: "Cabin"
        }
      }, "Forgot Password"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "email",
        className: "input",
        value: email,
        name: "email",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Enter your email",
        autoFocus: true
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        className: "btn-log",
        onClick: function onClick(e) {
          return _this2.handleForgot(e);
        }
      }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3459788843" + " " + "custom-signin"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        src: "/static/new-icon.png",
        alt: "logo",
        width: 70,
        className: "jsx-3459788843" + " " + "img-logo-style"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3459788843" + " " + "form-card"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("em", {
        style: {
          color: "rgb(96, 51, 141)",
          fontWeight: 600
        },
        className: "jsx-3459788843"
      }, "Welcome back!"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_facebook_login__WEBPACK_IMPORTED_MODULE_19___default.a, {
        appId: "538947710271871",
        fields: "name,email,picture",
        cssClass: "loginBtn loginBtn--facebook",
        icon: "fa-facebook",
        callback: responseFacebook,
        textButton: "Sign in with Facebook"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_18___default.a, {
        clientId: _config_config__WEBPACK_IMPORTED_MODULE_20__["GOOGLE_CLIENT_KEY"] //go to the config folder to add your client key
        ,
        onSuccess: responseGoogle,
        onFailure: responseGoogle,
        className: "google-auth-button",
        buttonText: "Sign in with Google"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          color: "#637381",
          fontWeight: 400,
          fontFamily: "inherit"
        },
        className: "jsx-3459788843"
      }, "Or"), error && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("em", {
        style: {
          color: "red"
        },
        className: "jsx-3459788843"
      }, " ", error, " "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        className: "jsx-3459788843"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3459788843"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "email",
        value: email,
        name: "email",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Email",
        autoFocus: true,
        className: "jsx-3459788843" + " " + "input"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3459788843"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "password",
        value: password,
        name: "password",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        placeholder: "Password",
        className: "jsx-3459788843" + " " + "input"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        onClick: this.handleSubmit,
        disabled: !password,
        className: "jsx-3459788843" + " " + "btn-login"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
        className: "jsx-3459788843" + " " + "fa fa-spinner fa-spin"
      }) : "Login"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          textAlign: "center",
          fontFamily: "Cabin",
          color: "#637381",
          padding: "2px",
          fontSize: "12px"
        },
        className: "jsx-3459788843"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        style: {
          cursor: "pointer"
        },
        onClick: this.openBtn,
        className: "jsx-3459788843"
      }, "Forgot password?")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3459788843" + " " + "already-registered"
      }, "Ooh I haven't signed up!", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.props.openSignup();
        },
        style: {
          marginLeft: "5px",
          textDecoration: "none"
        },
        className: "jsx-3459788843" + " " + "join"
      }, "Join")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3459788843"
      }, ".suc{color:green;}.err{color:red;}.close-iconn{position:absolute;top:25px;left:80%;font-size:80px !important;color:#fdfdfd;cursor:pointer;}.google-auth-button{width:250px !important;border-radius:6px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1) !important;box-sizing:border-box !important;position:relative;left:0px !important;height:38px;top:5px !important;border-radius:5px !important;text-align:center !important;margin-top:-15px !important;margin-bottom:10px !important;}.google-auth-button:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,0.1) !important;}.google-auth-button>span{color:#000 !important;font-size:16px !important;font-weight:600 !important;font-family:\"Cabin\" !important;white-space:nowrap !important;}.google-auth-button>div{height:20px !important;margin-top:-20px !important;margin-left:7px !important;}.custom-signin .form-card{background:#fdfdfd;width:400px;min-height:380px;-webkit-box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;margin-top:-20px;}.custom-signin{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;min-height:100%;-webkit-transition:2s;transition:2s;}.custom-sign{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;min-height:100%;-webkit-transition:2s;transition:2s;}.custom-sign .form-card{background:#fdfdfd;min-width:300px;min-height:200px;-webkit-box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;-webkit-transition:2s;transition:2s;}.custom-signin .form-card div{padding:5px 10px;margin-top:6px;}.input{padding:10px;width:250px !important;height:38px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;font-family:inherit;line-height:2px;font-size:1em;font-weight:600;}::-webkit-input-placeholder{font-family:inherit;}::-moz-placeholder{font-family:inherit;}:-ms-input-placeholder{font-family:inherit;}::placeholder{font-family:inherit;}.btn-login{width:100px;height:45px;border:0;border-radius:6px;cursor:pointer;background-color:rgb(96,51,141);text-transform:uppercase;font-family:inherit;font-size:16px;font-weight:200;color:#f2f2f2;outline:0;display:relative;margin-left:85px;margin-top:9px;}.btn-login:hover{background-color:#e6ecf0;color:rgb(96,51,141);border:2px solid rgb(96,51,141);padding:0;}.btn-login:disabled{cursor:not-allowed;background:#e6e8eb;color:#8d959c;}a{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}.img-logo-style{position:absolute;top:32px;}.already-registered{text-align:center;font-family:inherit;margin:20px 0px;}.join{cursor:pointer !important;color:rgb(91,56,141) !important;font-weight:600 !important;}.loginBtn>i{position:relative;left:-20px;}.loginBtn{box-sizing:border-box;position:relative;width:250px;margin-top:0.8em;margin-bottom:1.5em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:0.2em;font-size:15px;color:#fff;font-weight:600;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);font-family:inherit;}.loginBtn:before{content:\"\";box-sizing:border-box;position:absolute;top:0;left:0;width:34px;height:100%;}.loginBtn:focus{outline:none;}.loginBtn:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,0.1);}.loginBtn--facebook{background-color:#4c69ba;background-image:linear-gradient(#4c69ba,#3b55a0);text-shadow:0 -1px 0 #354c8c;}.loginBtn--facebook:before{border-right:#364e92 1px solid;}.loginBtn--facebook:hover,.loginBtn--facebook:focus{background-color:#5b7bd5;background-image:linear-gradient(#5b7bd5,#4864b1);}#overlay{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}#overlayShow{height:100%;width:100%;position:fixed;z-index:5000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.5);overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;}.btn-log{width:100px;height:45px;border:0;border-radius:6px;cursor:pointer;background-color:rgb(96,51,141);font-family:inherit;font-size:16px;font-weight:200;color:#f2f2f2;outline:0;display:relative;margin-top:9px;}@media screen and (max-width:767px){.custom-signin .form-card{width:300px;height:250px;}.img-logo-style{position:absolute;top:24px;}input[type=\"text\"],input[type=\"password\"]{padding:5px;}.custom-signin .form-card div{padding:5px 10px;margin-top:10px;}.already-registered{margin:4px 0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9wYWdlcy9zaWduaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNlNhLEFBRzZCLEFBSUYsQUFJUSxBQVFLLEFBZW1DLEFBSXBDLEFBUUMsQUFLSixBQWVELEFBV0EsQUFXQyxBQWVGLEFBS0osQUFhTyxBQUlSLEFBa0JhLEFBT04sQUFNRSxBQUtILEFBS0EsQUFLUSxBQU1SLEFBSUksQUFrQlgsQUFVRSxBQUlrQyxBQUl0QixBQU1NLEFBSU4sQUFLYixBQVlBLEFBYUEsQUFpQkUsQUFJTSxBQU1OLEFBSUssQUFLRixVQTdSbkIsQ0FnTXdCLENBcE14QixBQTBIYyxBQTJHSixBQVlHLEFBYUMsQUFpQkcsQUFVZixDQWhMdUIsQUFxR3pCLEVBb0ZFLEVBOUxlLEFBeUxHLENBclJULEFBdURJLEFBV0EsQUFvRkosQUFLVyxBQVdULEFBcUdBLENBbk9DLEFBcUNJLEFBOERHLENBN0JyQixBQWdIaUIsRUFuTVcsQUErSVIsQ0FsS0EsQUEyQlUsQUF1TWIsQ0F2SE4sQUFvSUEsQ0FuSGMsQUEwRTRCLEFBVUEsQUFnRG5ELENBeEdrQyxDQS9KekIsQUFzSlgsQUFxSEUsRUFyR0YsRUE5SG1CLEFBMktuQixDQXZIQSxDQXVCb0IsQUF5RUEsQUEyREEsQUE4QmxCLEVBeE1pQixBQWlKSixDQTdOYSxBQWdHZCxFQTBDRSxBQWdCRSxBQStFSCxFQWhFRCxDQWxLMEMsR0FpTXhELEVBckVvQyxFQXpHUCxBQWN3QixBQXlEakIsQUE2SDVCLEVBL0VXLENBN0dVLEFBaUZaLEFBeUVULEFBOENBLEFBYVMsQ0ExS29DLEFBOERyRCxBQStCbUIsRUFmbkIsQUFvRVMsQ0ExTVQsRUF3S1MsQUE4Q0EsQ0E1RW9CLEdBaUVHLENBL05oQixFQTZMSCxBQThDbUIsRUF4SEksQUFvSUEsQ0F4R3BDLEVBMkJzQixNQWhKVyxBQW9LbkIsQUFjaUIsQUFVL0IsQ0FyTmlCLEVBaUNqQixBQWlHWSxFQWxDUSxLQThEcEIsRUFnQ0EsQ0EzREEsQ0F1Q3dCLEFBcURjLEVBOU50QyxDQUttQyxBQThDWCxBQVdBLEFBNEtjLElBcE1PLEVBMERqQyxBQWtCZSxBQW9JTCxFQTNLdUIsSUFnSTdDLEVBbExnQyxFQXdFVixHQXlFUixPQTZFRyxJQXhCRyxDQTVHRSxBQXdESixFQXJLRSxBQXFPQSxHQXpJRixLQXNKQSxHQTlObEIsQUFhZSxHQXFJSSxDQWhHSixBQW9KRyxHQXpOSSxBQTZHTCxBQXdIQyxDQXpJRixLQXNKQSxPQTVFSyxFQXpFSCxBQWlCQSxLQTdHSixBQWtQRixPQXRNYSxBQVdBLEdBNExOLENBdEpuQixBQWlCZ0IsQ0E3R0ssQUFxS0MsS0FtRHRCLEdBWUEsS0F0SFksRUFxSUssSUFsUGMsQ0FxS2QsR0F2REUsT0FxSW5CLEtBck53QixBQXdJWCxJQW5HVyxDQTRDTCxNQXdERCxFQXRLYSxTQStHZCxLQXdENEIsVUF2RDdDLEtBL0c4QixpQkF5Q1QsQUFXQSxRQW1IQyxHQXRLVSxRQTRCUCxJQXFDQSxLQXNHekIsYUF0S0Esb0RBd0N3QixBQVdBLHNCQVZOLEFBV0EsR0F4QkcsSUFxQ0EsU0F2QkwsQUFXQSxvQ0FWaEIsQUFXQSw0Q0F6QjZCLElBcUNBLHVCQXBDQyxJQXFDQSx3QkFwQ1gsSUFxQ0gsYUFwQ2hCLHVCQXFDQSIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvcGFnZXMvc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRmFjZWJvb2tMb2dpbkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mYWNlYm9va0N1c3RvbUJ1dHRvblwiO1xuaW1wb3J0IEdvb2dsZUN1c3RvbUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9nb29nbGVDdXN0b21CdXR0b25cIjtcbmltcG9ydCB7XG4gIGxvZ2luLFxuICBmb3Jnb3RQYXNzd29yZEZ1bmN0aW9uLFxuICBjaGVja0lmVXNlckV4aXN0LFxuICBteVNvY2lhbFxufSBmcm9tIFwiLi4vYXBpUmVxdWVzdHMvYXBpUmVxdWVzdHNcIjtcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tIFwicmVhY3QtZmFjZWJvb2stbG9naW5cIjtcbmltcG9ydCB7IEdPT0dMRV9DTElFTlRfS0VZIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgZXJyb3I6IFwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgc2hvd0NsYXNzOiBmYWxzZSxcbiAgICBtc2c6IFwiXCIsXG4gICAgZXJyOiBmYWxzZSAvL1xuICAgIC8vbXlsb2FkaW5nOiB0cnVlXG4gIH07XG5cbiAgb3BlbkJ0biA9ICgpID0+IHtcbiAgICAvL2FsZXJ0KFwiY2xpY2tcIik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Q2xhc3M6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBjbG9zZUJ0biA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dDbGFzczogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVEaXZDbG9zZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5kaXYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoeyBzaG93Q2xhc3M6ICFwcmV2aW91c1N0YXRlIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHVzZXJfZGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpO1xuICAgIGlmICh1c2VyX2RhdGEgIT09IG51bGwpIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb3Jnb3QgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZm9yZ290UGFzc3dvcmRGdW5jdGlvbih0aGlzLnN0YXRlLmVtYWlsKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbXNnOiBcIlBhc3N3b3JkIFNlbnQgdG8geW91ciBlbWFpbFwiLFxuICAgICAgICAgIGVycjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbXNnOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyxcbiAgICAgICAgICBlcnI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgbG9naW4oZW1haWwudHJpbSgpLCBwYXNzd29yZClcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfdG9rZW5cIiwgcmVzdWx0LmRhdGEucmVzdWx0LnRva2VuKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIFwidXNlcl9kZXRhaWxzXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kYXRhKVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy90aGlzLnByb3BzLmNsb3NlTG9naW4oKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgLy9Sb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG5cblxuICAgIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gcmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnRva2VuSWQpIHtcbiAgICAgICAgbGV0IHsgZW1haWwsIGltYWdlVXJsLCBnaXZlbk5hbWUgfSA9IHJlc3BvbnNlLnByb2ZpbGVPYmo7XG4gICAgICAgIGxldCB1c2VybmFtZSA9IGVtYWlsLnN1YnN0cmluZygwLCBlbWFpbC5sYXN0SW5kZXhPZihcIkBcIikpO1xuXG4gICAgICAgIG15U29jaWFsKGVtYWlsLCB1c2VybmFtZSwgXCJcIiwgaW1hZ2VVcmwsIGdpdmVuTmFtZSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YS5faWQpXG4gICAgICAgICAgICByZXNwb25zZS5wcm9maWxlT2JqLl9pZCA9IHJlc3VsdC5kYXRhLmRhdGEuX2lkO1xuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZU9iai51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgLy9yZXN1bHQuZGF0YS5kYXRhLl9pZFxuICAgICAgICAgIC8vICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfdG9rZW5cIiwgcmVzcG9uc2UudG9rZW5JZCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX3Rva2VuXCIsIHJlc3VsdC5kYXRhLnJlc3VsdC50b2tlbik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgXCJ1c2VyX2RldGFpbHNcIixcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UucHJvZmlsZU9iailcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSByZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7ICBcbiAgICAgICAgbGV0ICBwcm9maWxlT2JqID17fTtcbiAgICAgICAgbGV0IGVtID0gcmVzcG9uc2UuZW1haWw7XG4gICAgICAgIHByb2ZpbGVPYmouZW1haWwgPSByZXNwb25zZS5lbWFpbDtcbiAgICAgICAgcHJvZmlsZU9iai5pbWFnZVVybCA9IHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmw7XG4gICAgICAgIHByb2ZpbGVPYmouZ2l2ZW5OYW1lID0gcmVzcG9uc2UubmFtZTtcbiAgICAgICAgcHJvZmlsZU9iai51c2VybmFtZSA9IGVtLnN1YnN0cmluZygwLCBlbS5sYXN0SW5kZXhPZihcIkBcIikpO1xuXG4gbGV0IHsgZW1haWwsIGltYWdlVXJsLCBnaXZlbk5hbWUgLCB1c2VybmFtZX0gPSBwcm9maWxlT2JqO1xuICAgICAgICBteVNvY2lhbChlbWFpbCwgdXNlcm5hbWUsIFwiXCIsIGltYWdlVXJsLCBnaXZlbk5hbWUpXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEuX2lkKVxuICAgICAgICAgICAgcHJvZmlsZU9iai5faWQgPSByZXN1bHQuZGF0YS5kYXRhLl9pZDtcbiAgICAgICAgICAgLy8gcHJvZmlsZU9iai51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgLy9yZXN1bHQuZGF0YS5kYXRhLl9pZFxuICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfdG9rZW5cIiwgcmVzcG9uc2UudXNlcklEKTtcbiAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX3Rva2VuXCIsIHJlc3VsdC5kYXRhLnJlc3VsdC50b2tlbik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgXCJ1c2VyX2RldGFpbHNcIixcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJvZmlsZU9iailcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgfSk7XG4gIFxuICAgIH07XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBzaG93Q2xhc3MsIG1zZywgZXJyIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlRGl2Q2xvc2UoZSl9XG4gICAgICAgICAgaWQ9e3Nob3dDbGFzcyA/IFwib3ZlcmxheVNob3dcIiA6IFwib3ZlcmxheVwifVxuICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMuZGl2ID0gZWwpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY3VzdG9tLXNpZ25cIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2FyZFwiPlxuICAgICAgICAgICAgICB7PGVtIGNsYXNzTmFtZT17ZXJyID8gXCJlcnJcIiA6IFwic3VjXCJ9Pnttc2cgPyBtc2cgOiBcIlwifTwvZW0+fVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZS1pY29ublwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VCdG59PlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgZm9udEZhbWlseTogXCJDYWJpblwiIH19PlxuICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZFxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbG9nXCIgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZUZvcmdvdChlKX0+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1zaWduaW5cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e1wiL3N0YXRpYy9uZXctaWNvbi5wbmdcIn1cbiAgICAgICAgICAgICAgYWx0PXtcImxvZ29cIn1cbiAgICAgICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctbG9nby1zdHlsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmb3JtLWNhcmRcIn0+XG4gICAgICAgICAgICA8ZW0gc3R5bGU9e3sgY29sb3I6IFwicmdiKDk2LCA1MSwgMTQxKVwiLCBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgIFdlbGNvbWUgYmFjayFcbiAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgICA8RmFjZWJvb2tMb2dpblxuICAgICAgICAgICAgICBhcHBJZD1cIjUzODk0NzcxMDI3MTg3MVwiXG4gICAgICAgICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXG4gICAgICAgICAgICAgIGNzc0NsYXNzPVwibG9naW5CdG4gbG9naW5CdG4tLWZhY2Vib29rXCJcbiAgICAgICAgICAgICAgaWNvbj1cImZhLWZhY2Vib29rXCJcbiAgICAgICAgICAgICAgY2FsbGJhY2s9e3Jlc3BvbnNlRmFjZWJvb2t9XG4gICAgICAgICAgICAgIHRleHRCdXR0b249XCJTaWduIGluIHdpdGggRmFjZWJvb2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICBjbGllbnRJZD17R09PR0xFX0NMSUVOVF9LRVl9IC8vZ28gdG8gdGhlIGNvbmZpZyBmb2xkZXIgdG8gYWRkIHlvdXIgY2xpZW50IGtleVxuICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnb29nbGUtYXV0aC1idXR0b25cIlxuICAgICAgICAgICAgICBidXR0b25UZXh0PXtcIlNpZ24gaW4gd2l0aCBHb29nbGVcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2MzczODFcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgT3JcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8ZW0gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+IHtlcnJvcn0gPC9lbT59XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImlucHV0XCJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sb2dpblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwYXNzd29yZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCIgLz4gOiBcIkxvZ2luXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ2FiaW5cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2MzczODFcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMnB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXt0aGlzLm9wZW5CdG59PlxuICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYWxyZWFkeS1yZWdpc3RlcmVkXCJ9PlxuICAgICAgICAgICAgT29oIEkgaGF2ZW4ndCBzaWduZWQgdXAhXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiam9pblwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5TaWdudXAoKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEpvaW5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5zdWMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5lcnIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY2xvc2UtaWNvbm4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogODAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmRmZGZkO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ29vZ2xlLWF1dGgtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgICAgIHRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZ29vZ2xlLWF1dGgtYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzJweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5nb29nbGUtYXV0aC1idXR0b24gPiBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJDYWJpblwiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmdvb2dsZS1hdXRoLWJ1dHRvbiA+IGRpdiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmN1c3RvbS1zaWduaW4gLmZvcm0tY2FyZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzgwcHg7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxOXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE5cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY3VzdG9tLXNpZ25pbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAycztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jdXN0b20tc2lnbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAycztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jdXN0b20tc2lnbiAuZm9ybS1jYXJkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxOXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE5cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMnM7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY3VzdG9tLXNpZ25pbiAuZm9ybS1jYXJkIGRpdiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJ0bi1sb2dpbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogODVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYnRuLWxvZ2luOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlY2YwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5idG4tbG9naW46ZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZThlYjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhkOTU5YztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbWctbG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hbHJlYWR5LXJlZ2lzdGVyZWQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5qb2luIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDkxLCA1NiwgMTQxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sb2dpbkJ0biA+IGkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9naW5CdG4ge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjhlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCA0NnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9naW5CdG46YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sb2dpbkJ0bjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sb2dpbkJ0bjphY3RpdmUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxvZ2luQnRuLS1mYWNlYm9vayB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNjliYTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRjNjliYSwgIzNiNTVhMCk7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMzNTRjOGM7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAjMzY0ZTkyIDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxuICAgICAgICAgICAgICAubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI3YmQ1O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNWI3YmQ1LCAjNDg2NGIxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICNvdmVybGF5IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDYwMDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAjb3ZlcmxheVNob3cge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogNTAwMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJ0bi1sb2cge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCA1MSwgMTQxKTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgLmN1c3RvbS1zaWduaW4gLmZvcm0tY2FyZCB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1nLWxvZ28tc3R5bGUge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmN1c3RvbS1zaWduaW4gLmZvcm0tY2FyZCBkaXYge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hbHJlYWR5LXJlZ2lzdGVyZWQge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduaW47XG4iXX0= */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/pages/signin.js */")));
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../config/config */ "./config/config.js");


















var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password,
          username = _this$state.username,
          displayName = _this$state.displayName;

      _this.setState({
        loading: true
      });

      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__["mySignup"])(email, username, password, displayName).then(function (result) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (_ref) {
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

      _this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, name, value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, "errors", errors), _this$setState));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup, [{
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

          Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__["mySocial"])(_email, _username, "", imageUrl, givenName).then(function (result) {
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
        Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_15__["mySocial"])(email, username, "", imageUrl, givenName).then(function (result) {
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
        clientId: _config_config__WEBPACK_IMPORTED_MODULE_16__["GOOGLE_CLIENT_KEY"],
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
      }, ".google-auth-button{width :250px !important;border-radius:6px;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1) !important;box-sizing:border-box !important;position :relative;left :0px !important;height :38px;top :5px !important;border-radius :5px !important;text-align :center !important;margin-top :-15px !important;margin-bottom :10px !important;}.google-auth-button:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1) !important;}.google-auth-button>span{color:#000 !important;font-size:15px !important;font-weight :600 !important;font-family :\"Cabin\" !important;white-space:nowrap !important;}.google-auth-button>div{height :18px !important;margin-top :-16px !important;margin-left :7px !important;}.custom-signin .form-card{background:#fdfdfd;width:400px;min-height:320px;-webkit-box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;z-index:1000;}.custom-signin{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:70px;box-sizing:border-box;min-height:100%;-webkit-transition :2s;transition :2s;margin-top :50px;}.custom-signin .form-card div{padding:5px 0px;margin-top:10px;}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"]{padding:10px;width:250px;height:38px;border:2px solid rgb(96,51,141);border-radius:5px;outline:0;font-family:inherit !important;font-size :1em;font-weight :600;}::-webkit-input-placeholder{font-family:inherit;}::-moz-placeholder{font-family:inherit;}:-ms-input-placeholder{font-family:inherit;}::placeholder{font-family:inherit;}.signup-btn{width:100px;height:45px;border:0;border-radius:6px;cursor:pointer;background-color:rgb(96,51,141);text-transform:uppercase;font-family:inherit;font-size:16px;font-weight:200;color:#f2f2f2;outline:0;display:relative;margin-left:75px;margin-top:10px;margin-bottom:15px;}.join{cursor:pointer !important;color:rgb(91,56,141) !important;font-weight:600 !important;}.signup-btn:hover{background-color:#e6ecf0;color:rgb(96,51,141);border:2px solid rgb(96,51,141);}.signup-btn:disabled{cursor:not-allowed;background:#e6e8eb;color:#8d959c;}a{-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}.img-logo-style{position:absolute;top:-70px;}.i-have-account{textalign:center;fontfamily:inherit;margin-top:5px;margin-bottom:15px;}.loginButton>i{position :relative;left :-20px;}.loginButton{box-sizing:border-box;position:relative;width :250px;margin-top:0.8em;margin-bottom :1.5em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:0.2em;color:#fff;font-family :inherit;font-weight :600;font-size :15px !important;box-shadow:0 4px 19px 0 rgba(0,0,0,0.1);text-transform :none !important;}.loginButton:before{content :\"\", box-sizing :border-box;position :absolute;top :0;left :0;width :34px;height :100%;}.loginButton:focus{outline :none;}.loginButton:active{box-shadow :inset 0 0 0 32px rgba(0,0,0,0.1);}.loginButton--facebook{background-color :#4C69BA;background-image :linear-gradient(#4C69BA,#3B55A0);text-shadow :0 -1px 0 #354C8C;}.loginButton--facebook:before{border-right :#364e92 1px solid;}.loginButton--facebook:hover,.loginButton--facebook:focus{background-color :#5B7BD5;background-image :linear-gradient(#5B7BD5,#4864b1);}@media screen and (max-width:600px){.custom-signin .form-card{width:300px;min-height:300px;}.custom-signin{top:70px;}.img-logo-style{top:-65px;}input[type=\"text\"],input[type=\"password\"]{padding:5px;}.custom-signin .form-card div{padding:5px 10px;margin-top:10px;}.i-have-account{position:relative;}.signup-btn{margin-left:85px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbVVhLEFBSXlDLEFBZWtDLEFBSXBDLEFBU0UsQUFNTCxBQWVELEFBYUYsQUFPSCxBQVlPLEFBSVIsQUFrQmMsQUFNRCxBQU1OLEFBTUUsQUFJSCxBQUtELEFBT0UsQUFJRyxBQW9CRyxBQVNULEFBSStCLEFBSW5CLEFBTU0sQUFHTixBQU1kLEFBS0gsQUFHQyxBQUtFLEFBSUssQUFLQyxBQUlELFNBcEJuQixDQUdBLEVBcEhZLEFBNEdPLEFBYW5CLENBeklZLENBcUdkLEVBNUdrQixDQW9FRyxBQWdGRCxBQVVsQixDQTNLYSxBQTRFSCxBQTBGVixDQXJMWSxBQWlGTyxBQXNCTixDQXhEZixFQTlENEIsQUEwSFIsRUE3SUEsQUE0QlcsQUEwRHBCLENBaEJHLEFBdUNXLENBTlcsQUEyRW9CLEFBU0EsRUE3RHhELENBb0VFLEVBL0ppQixBQXVHbkIsQ0EzRUEsQUF5SEEsQ0FqR29CLEFBNEhsQixHQWhGZSxBQThCTSxDQTFGYSxDQTZDcEIsRUEwQkQsRUE3SXlDLEdBNkt4RCxDQWhFb0MsRUExRk4sQUFnQnVCLEVBcUZsQyxDQWpDRixBQTRDSSxDQWZyQixDQXhGOEIsQUFrSFgsRUFtQlIsQ0FuSlgsRUF5RjZCLElBMkRqQixJQTFFd0IsQ0FpQ3BDLEVBbERvQixDQTZEcEIsQUFXdUIsQUFvQlAsTUEvSWtCLENBOEpBLEFBU2xDLENBN0VBLEdBakZBLENBdUlpQixHQTVEakIsRUFoQ1ksSUF3RVksQ0EvRkEsQ0FoRFcsRUFvS25DLENBakk2QyxDQXFDWixDQWdCTixTQTBGM0IsQ0E5SmdDLEtBNEhsQixVQXZEUSxFQXdESixDQWhKRyxFQXdFSixRQXJDRixFQWRmLEdBNEhtQixFQXhFQSxBQWdCRixFQXhGTSxhQXlGTCxBQXdERyxFQXhFckIsTUF4RWUsSUE4Q1UsSUEyQ1QsR0F3RE0sRUFoSkEsU0F5RlYsU0F3REMsQ0F2RE0sQ0F6RmEsU0FpSlQsRUFqSEMsS0EwREwsY0F6RmEsQUFpSmIsR0F2REQsY0F3RFcsRUF2RFIsV0ExRlUsUUEyRi9CLEVBaERxQixJQXVHd0IsZUFqSlosQUE4QlIseUJBb0hTLE1BakpsQywwQkFrSkEsaUJBeEdXLFNBQ2EsZ0JBYkgsTUFjSCxnQkFDRCxzQ0FDRSxpQkFDbkIsZ0JBaEI2QiwyQkFDQyw0QkFDZixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9wYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCJcbmltcG9ydCB7IG15U2lnbnVwICxteVNvY2lhbCB9IGZyb20gXCIuLi9hcGlSZXF1ZXN0cy9hcGlSZXF1ZXN0c1wiO1xuaW1wb3J0IHsgR09PR0xFX0NMSUVOVF9LRVkgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBkaXNwbGF5TmFtZTogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBqb2luZWQ6IGZhbHNlLFxuICAgIG1lc3NhZ2U6XCJcIixcbiAgICBlcnJvcjogXCJcIixcbiAgICBlcnJvcnM6IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB7IGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUsIGRpc3BsYXlOYW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgbXlTaWdudXAoZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCwgZGlzcGxheU5hbWUpXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PTQwMCl7XG4gICAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09MjAwKSB7XG4gICAgICAgICBcbiAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgam9pbmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDE1MDApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfdG9rZW5cIiwgcmVzdWx0LmRhdGEucmVzdWx0LnRva2VuKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgXCJ1c2VyX2RldGFpbHNcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAvL3RoaXMucHJvcHMuY2xvc2VMb2dpbigpO1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgIC8vUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0gfSkgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xuXG4gICAgY29uc3QgdmFsaWRFbWFpbFJlZ2V4ID0gUmVnRXhwKFxuICAgICAgL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaVxuICAgICk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxuICAgICAgICBlcnJvcnMuZW1haWwgPSB2YWxpZEVtYWlsUmVnZXgudGVzdCh2YWx1ZSkgPyBcIlwiIDogXCJFbWFpbCBpcyBub3QgdmFsaWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID1cbiAgICAgICAgICB2YWx1ZS5sZW5ndGggPCA4ID8gXCJQYXNzd29yZCBtdXN0IGJlIDggY2hhcmFjdGVycyBsb25nIVwiIDogXCJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgZXJyb3JzXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXJyb3IsIGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gcmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnRva2VuSWQpIHtcbiAgICAgICAgbGV0IHsgZW1haWwsIGltYWdlVXJsLCBnaXZlbk5hbWUgfSA9IHJlc3BvbnNlLnByb2ZpbGVPYmo7XG4gICAgICAgIGxldCB1c2VybmFtZSA9IGVtYWlsLnN1YnN0cmluZygwLCBlbWFpbC5sYXN0SW5kZXhPZihcIkBcIikpO1xuXG4gICAgICAgIG15U29jaWFsKGVtYWlsLCB1c2VybmFtZSwgXCJcIiwgaW1hZ2VVcmwsIGdpdmVuTmFtZSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YS5faWQpXG4gICAgICAgICAgICByZXNwb25zZS5wcm9maWxlT2JqLl9pZCA9IHJlc3VsdC5kYXRhLmRhdGEuX2lkO1xuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZU9iai51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgLy9yZXN1bHQuZGF0YS5kYXRhLl9pZFxuICAgICAgICAgIC8vICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfdG9rZW5cIiwgcmVzcG9uc2UudG9rZW5JZCk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX3Rva2VuXCIsIHJlc3VsdC5kYXRhLnJlc3VsdC50b2tlbik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgXCJ1c2VyX2RldGFpbHNcIixcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UucHJvZmlsZU9iailcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSByZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7ICBcbiAgICAgICAgbGV0ICBwcm9maWxlT2JqID17fTtcbiAgICAgICAgbGV0IGVtID0gcmVzcG9uc2UuZW1haWw7XG4gICAgICAgIHByb2ZpbGVPYmouZW1haWwgPSByZXNwb25zZS5lbWFpbDtcbiAgICAgICAgcHJvZmlsZU9iai5pbWFnZVVybCA9IHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmw7XG4gICAgICAgIHByb2ZpbGVPYmouZ2l2ZW5OYW1lID0gcmVzcG9uc2UubmFtZTtcbiAgICAgICAgcHJvZmlsZU9iai51c2VybmFtZSA9IGVtLnN1YnN0cmluZygwLCBlbS5sYXN0SW5kZXhPZihcIkBcIikpO1xuXG4gbGV0IHsgZW1haWwsIGltYWdlVXJsLCBnaXZlbk5hbWUgLCB1c2VybmFtZX0gPSBwcm9maWxlT2JqO1xuICAgICAgICBteVNvY2lhbChlbWFpbCwgdXNlcm5hbWUsIFwiXCIsIGltYWdlVXJsLCBnaXZlbk5hbWUpXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEuX2lkKVxuICAgICAgICAgICAgcHJvZmlsZU9iai5faWQgPSByZXN1bHQuZGF0YS5kYXRhLl9pZDtcbiAgICAgICAgICAgLy8gcHJvZmlsZU9iai51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgLy9yZXN1bHQuZGF0YS5kYXRhLl9pZFxuICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfdG9rZW5cIiwgcmVzcG9uc2UudXNlcklEKTtcbiAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX3Rva2VuXCIsIHJlc3VsdC5kYXRhLnJlc3VsdC50b2tlbik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgXCJ1c2VyX2RldGFpbHNcIixcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJvZmlsZU9iailcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgfSk7XG4gIFxuICAgIH07XG5cbiAgICBsZXQge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICBsb2FkaW5nLFxuICAgICAgam9pbmVkLFxuICAgICAgbWVzc2FnZVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1zaWduaW5cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e1wiL3N0YXRpYy9uZXctaWNvbi5wbmdcIn1cbiAgICAgICAgICAgICAgYWx0PXtcImxvZ29cIn1cbiAgICAgICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctbG9nby1zdHlsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmb3JtLWNhcmRcIn0+XG4gICAgICAgICAgICA8ZW1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoOTYsIDUxLCAxNDEpXCIsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Vycm9yID8gZXJyb3IgOiBcIldlbGNvbWUsIENyZWF0ZSBhbiBBY2NvdW50IVwifVxuICAgICAgICAgICAgPC9lbT5cblxuICAgICAgICAgICAgPEZhY2Vib29rTG9naW5cbiAgICAgICAgICAgICAgYXBwSWQ9XCI1Mzg5NDc3MTAyNzE4NzFcIlxuICAgICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxuICAgICAgICAgICAgICB0ZXh0QnV0dG9uPVwiU2lnbiB1cCB3aXRoIEZhY2Vib29rXCJcbiAgICAgICAgICAgICAgY3NzQ2xhc3M9XCJsb2dpbkJ1dHRvbiBsb2dpbkJ1dHRvbi0tZmFjZWJvb2tcIlxuICAgICAgICAgICAgICBpY29uPVwiZmFiIGZhLWZhY2Vib29rLWZcIlxuICAgICAgICAgICAgICBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICBjbGllbnRJZD17R09PR0xFX0NMSUVOVF9LRVl9XG4gICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdvb2dsZS1hdXRoLWJ1dHRvblwiXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJTaWduIHVwIHdpdGggR29vZ2xlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2MzczODFcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIi0xMHB4XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgT3JcbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAge2pvaW5lZCA/IChcbiAgICAgICAgICAgICAgPGVtIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+Sm9pbmVkIHN1Y2Nlc3NmdWxseTwvZW0+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7bWVzc2FnZSAhPVwiXCIgPyAoXG4gICAgICAgICAgICAgIDxlbSBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57bWVzc2FnZX08L2VtPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCItM3B4XCIgfX0gLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2NiMWE0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpc3BsYXkgbmFtZShvcHRpb25hbClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2NiMWE0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWdudXAtYnRuXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBhc3N3b3JkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIiAvPiA6IFwiSm9pblwifVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImktaGF2ZS1hY2NvdW50XCJ9PlxuICAgICAgICAgICAgSSBoYXZlIHNpZ25lZCB1cCFcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3BlbkxvZ2luKCl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiam9pblwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBsb2dpblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge2BcblxuICAgICAgICAgICAgICAuZ29vZ2xlLWF1dGgtYnV0dG9ue1xuICAgICAgICAgICAgICAgIHdpZHRoIDogMjUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQgOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiAzOHB4O1xuICAgICAgICAgICAgICAgIHRvcCA6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcCA6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5nb29nbGUtYXV0aC1idXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgOiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwwLDAsMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmdvb2dsZS1hdXRoLWJ1dHRvbiA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQgOiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseSA6IFwiQ2FiaW5cIiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmdvb2dsZS1hdXRoLWJ1dHRvbiA+IGRpdiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3AgOiAtMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY3VzdG9tLXNpZ25pbiAuZm9ybS1jYXJkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE5cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmN1c3RvbS1zaWduaW4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gOiAycztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wIDogNTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jdXN0b20tc2lnbmluIC5mb3JtLWNhcmQgZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxuICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl17XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQgOiA2MDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zaWdudXAtYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuam9pbiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig5MSwgNTYsIDE0MSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2lnbnVwLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWNmMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDk2LCA1MSwgMTQxKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNpZ251cC1idG46ZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZThlYjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhkOTU5YztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW1nLWxvZ28tc3R5bGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC03MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmktaGF2ZS1hY2NvdW50IHtcbiAgICAgICAgICAgICAgICB0ZXh0YWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250ZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxvZ2luQnV0dG9uID4gaSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0ICA6IC0yMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2dpbkJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGggOiAyNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjhlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMS41ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodCA6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTlweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybSA6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9naW5CdXR0b246YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgY29udGVudCA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICB0b3AgOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdCA6IDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aCA6IDM0cHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQgOiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxvZ2luQnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgIG91dGxpbmUgOiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxvZ2luQnV0dG9uOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgOiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sb2dpbkJ1dHRvbi0tZmFjZWJvb2sge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICM0QzY5QkE7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlIDogbGluZWFyLWdyYWRpZW50KCM0QzY5QkEsICMzQjU1QTApO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3cgOiAwIC0xcHggMCAjMzU0QzhDO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxvZ2luQnV0dG9uLS1mYWNlYm9vazpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQgOiAjMzY0ZTkyIDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9naW5CdXR0b24tLWZhY2Vib29rOmhvdmVyLCAubG9naW5CdXR0b24tLWZhY2Vib29rOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjNUI3QkQ1O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZSA6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NGIxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgLmN1c3RvbS1zaWduaW4gLmZvcm0tY2FyZCB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY3VzdG9tLXNpZ25pbiB7XG4gICAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWctbG9nby1zdHlsZSB7XG4gICAgICAgICAgICAgICAgICB0b3A6IC02NXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmN1c3RvbS1zaWduaW4gLmZvcm0tY2FyZCBkaXYge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pLWhhdmUtYWNjb3VudCB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNpZ251cC1idG4ge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDg1cHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcbiJdfQ== */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/pages/signup.js */")));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./pages/topicview.js":
/*!****************************!*\
  !*** ./pages/topicview.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layouts/Layout */ "./layouts/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_topicview_topicViewLandingPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/topicview/topicViewLandingPage */ "./components/topicview/topicViewLandingPage.js");
/* harmony import */ var _components_topicview_relatedOptionsComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/topicview/relatedOptionsComponent */ "./components/topicview/relatedOptionsComponent.js");
/* harmony import */ var _components_topicview_optionCardComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/topicview/optionCardComponent */ "./components/topicview/optionCardComponent.js");
/* harmony import */ var _lib_removeSpaces__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/removeSpaces */ "./lib/removeSpaces.js");
/* harmony import */ var _components_topicview_optionList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/topicview/optionList */ "./components/topicview/optionList.js");
/* harmony import */ var _components_topicview_recFeed__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/topicview/recFeed */ "./components/topicview/recFeed.js");
/* harmony import */ var _components_topicview_reactionBanner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/topicview/reactionBanner */ "./components/topicview/reactionBanner.js");
/* harmony import */ var _components_topicview_UserAddedQuestionCard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/topicview/UserAddedQuestionCard */ "./components/topicview/UserAddedQuestionCard.js");
/* harmony import */ var _apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../apiRequests/apiRequests */ "./apiRequests/apiRequests.js");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./signin */ "./pages/signin.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./signup */ "./pages/signup.js");



























var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_15___default()(_config_config__WEBPACK_IMPORTED_MODULE_14__["default"]);

function GetLikeNumber(data) {
  var obj = {};

  for (var i = 0; i < data.length; i++) {
    obj[data[i].option] = data[i].like;
  }

  return obj;
}

function GetDisLikeNumber(data) {
  var obj = {};

  for (var i = 0; i < data.length; i++) {
    obj[data[i].option] = data[i].dislike;
  }

  return obj;
}

function color(data) {
  var obj = {};

  for (var i = 0; i < data.length; i++) {
    obj[data[i].option] = "grey";
  }

  return obj;
}

var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      question: _this.props.question,
      data: _this.props.data.data.data,
      lastUpdated: _this.props.updatedAt,
      numOfRecs: _this.props.numOfRecs,
      optionConsidered: _this.props.data.data.optionConsidered,
      tagie: _this.props.data.data.tagie,
      relatedTopics: _this.props.relatedTopic.data,
      recommendations: _this.props.RecsActivity,
      user: {},
      UserClickedLogin: false,
      UserClickedSignup: false,
      LikeColor: _this.props.LikeColor,
      DisLikeColor: _this.props.DisLikeColor,
      LikeNumber: _this.props.LikeNumber,
      DisLikeNumber: _this.props.DisLikeNumber
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "checkIfUserAddedQuestion", function (question, id) {
      Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["CheckIfUserAddedQuestion"])(question, id).then(function (response) {
        _this.setState({
          addedQuestion: response.data
        });
      }).catch(function (err) {
        _this.setState({
          err: err
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleDivCloseSignIn", function (e) {
      if (e.target === _this.div) {
        _this.setState(function (previousState) {
          return {
            UserClickedLogin: !previousState.UserClickedLogin
          };
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleDivCloseSignUp", function (e) {
      if (e.target === _this.div) {
        _this.setState(function (previousState) {
          return {
            UserClickedSignup: !previousState.UserClickedSignup
          };
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "openLoginOverlay", function () {
      //alert("click");
      _this.setState({
        UserClickedSignup: false,
        UserClickedLogin: !_this.state.UserClickedLogin
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "openSignupOverlay", function () {
      _this.setState({
        UserClickedLogin: false,
        UserClickedSignup: !_this.state.UserClickedSignup
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "closeSignupOverlay", function () {
      _this.setState({
        UserClickedSignup: !_this.state.UserClickedSignup
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "closeLoginOverlay", function () {
      _this.setState({
        UserClickedLogin: !_this.state.UserClickedLogin
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (JSON.parse(localStorage.getItem("user_details"))) {
        var user = JSON.parse(localStorage.getItem("user_details"));
        this.setState({
          user: user
        }, function () {
          _this2.checkIfUserAddedQuestion(_this2.props.question, user._id);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          optionConsidered = _this$state.optionConsidered,
          UserClickedLogin = _this$state.UserClickedLogin,
          UserClickedSignup = _this$state.UserClickedSignup,
          question = _this$state.question,
          addedQuestion = _this$state.addedQuestion;
      var questionRejected = this.props.questionRejected;
      var tag = this.state.tagie.map(function (item) {
        return item.tag;
      });
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_12__["default"] // {...this.state}
      , {
        data: this.props.topics.data,
        openSignup: this.openSignupOverlay,
        openLogin: this.openLoginOverlay,
        topicview: true,
        title: this.state.question
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_topicview_topicViewLandingPage__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.state, {
        tag: tag,
        questionRejected: questionRejected
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1215392393" + " " + "view-container"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1215392393" + " " + "considered-option-card"
      }, optionConsidered !== 0 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_topicview_optionCardComponent__WEBPACK_IMPORTED_MODULE_18__["default"], this.state)), optionConsidered === 0 && addedQuestion && questionRejected === false && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_topicview_UserAddedQuestionCard__WEBPACK_IMPORTED_MODULE_23__["default"], {
        url: question
      }), optionConsidered !== 0 && questionRejected === false && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_topicview_optionList__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.state, {
        user_id: this.state.user._id
      })), questionRejected === true && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_topicview_reactionBanner__WEBPACK_IMPORTED_MODULE_22__["default"], null)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1215392393" + " " + "related-questions"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_topicview_relatedOptionsComponent__WEBPACK_IMPORTED_MODULE_17__["default"], this.state)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this3.handleDivCloseSignUp(e);
        },
        ref: function ref(el) {
          return _this3.div = el;
        },
        className: "jsx-1215392393" + " " + ((UserClickedSignup ? "overlayShow" : "overlay") || "")
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        onClick: this.closeSignupOverlay,
        className: "jsx-1215392393" + " " + "close-icon"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-1215392393"
      }, "\xD7")), UserClickedSignup && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_signup__WEBPACK_IMPORTED_MODULE_26__["default"], {
        openLogin: this.openLoginOverlay
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this3.handleDivCloseSignIn(e);
        },
        ref: function ref(el) {
          return _this3.div = el;
        },
        className: "jsx-1215392393" + " " + ((UserClickedLogin ? "overlayShow showSignin-container" : "overlay") || "")
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        onClick: this.closeLoginOverlay,
        className: "jsx-1215392393" + " " + "close-icon"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-1215392393"
      }, "\xD7")), UserClickedLogin && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_signin__WEBPACK_IMPORTED_MODULE_25__["default"], {
        openSignup: this.openSignupOverlay
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-1215392393" + " " + "related-items-card"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1215392393"
      }, ".view-container.jsx-1215392393{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:65%;top:90px;left:4vw;}.related-questions.jsx-1215392393{position:absolute;left:72%;top:346px;}.close-icon.jsx-1215392393{position:absolute;top:20px;left:90%;min-height:20px;max-height:100px;padding:9px;background:#e6ecf0;font-size:55px !important;color:rgb(91,56,141);cursor:pointer;z-index:2000;border-radius:5px;}.close-icon.jsx-1215392393>span.jsx-1215392393{position:relative;top:-2px;}.overlay.jsx-1215392393{height:100%;width:0;position:fixed;z-index:6000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.05);overflow-x:hidden;}.overlayShow.jsx-1215392393{height:100%;width:100%;position:fixed;z-index:9000;top:0;left:0;background-color:#fdfdfd;overflow-x:hidden;overflow-y:visible;}.overlayShowie.jsx-1215392393{height:100%;width:100%;position:fixed;z-index:9000;top:0;left:0;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.05);overflow-x:hidden;}.related-items-card.jsx-1215392393{position:absolute;left:920px;top:580px;}.considered-option-card.jsx-1215392393{margin-bottom:30px;}@media screen and (max-width:768px){.considered-option-card.jsx-1215392393{display:none;}.related-questions.jsx-1215392393{display:none;}.view-container.jsx-1215392393{width:88%;left:6.2vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci9wYWdlcy90b3BpY3ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMFFXLEFBRzRCLEFBU0ssQUFNQSxBQWNBLEFBS04sQUFZQSxBQWFBLEFBY00sQUFNQyxBQUlKLEFBR0EsQUFJSCxVQUNDLEVBeERMLEFBWUcsQUFhQSxDQXdCWCxBQUdBLEtBN0VTLEFBTUEsQUFjQSxBQTRDRSxDQU1iLENBNUNpQixDQXdEZixFQTVDZSxBQWFBLElBbERMLEFBTUQsQUFjWCxFQTRDWSxNQXRDRyxDQW5CRyxDQU5sQixDQXFDZSxBQWFBLENBY2YsU0F0Q1EsR0FZQSxBQWFBLENBNUNXLEVBb0JWLEdBWUEsQUFhQSxJQXhCdUIsR0FZTCxBQWFLLEtBN0NsQixLQW5CVSxPQW9CSCxRQW9Ca0IsQUFZbkIsR0FhbUIsUUE1Q1gsT0FnQ1AsZ0JBWkQsR0FuQkssQUFpQ3pCLEFBV29CLGVBdkJwQixHQTBCQSxHQTlDaUIsS0F0QkksVUF1Qk4sYUFDSyxrQkFDcEIsb0RBeEJvQixrQkFDUixVQUNELFNBQ0EsU0FDWCIsImZpbGUiOiIvVXNlcnMva2tiYWNrZW5kL0Rlc2t0b3AvdG9wcmF0aW5nMS1tYXN0ZXIvcGFnZXMvdG9waWN2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2xheW91dHMvTGF5b3V0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQVBJX1VSTCBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgVG9waWNWaWV3TGFuZGluZ1BhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9waWN2aWV3L3RvcGljVmlld0xhbmRpbmdQYWdlXCI7XG5pbXBvcnQgUmVsYXRlZE9wdGlvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9waWN2aWV3L3JlbGF0ZWRPcHRpb25zQ29tcG9uZW50XCI7XG5pbXBvcnQgT3B0aW9uQ2FyZGllIGZyb20gXCIuLi9jb21wb25lbnRzL3RvcGljdmlldy9vcHRpb25DYXJkQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRTcGFjZXNSZW1vdmVIeXBoZW4gfSBmcm9tIFwiLi4vbGliL3JlbW92ZVNwYWNlc1wiO1xuaW1wb3J0IE9wdGlvbkxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9waWN2aWV3L29wdGlvbkxpc3RcIjtcbmltcG9ydCBSZWNGZWVkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy90b3BpY3ZpZXcvcmVjRmVlZFwiO1xuXG5pbXBvcnQgUmVhY3Rpb25CYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9waWN2aWV3L3JlYWN0aW9uQmFubmVyXCI7XG5pbXBvcnQgVXNlckFkZGVkUXVlc3Rpb25DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3RvcGljdmlldy9Vc2VyQWRkZWRRdWVzdGlvbkNhcmRcIjtcblxuaW1wb3J0IHtcbiAgX0dFVF9UT1BJQ1MsXG4gIEdFVF9SRUxBVEVEX1RPUElDU19VUkwsXG4gIEdFVF9TUEVDSUZJQ19UT1BJQ19VUkwsXG4gIEdldFF1ZXN0aW9uVXBkYXRlZEF0LFxuICBHZXRRdWVzdGlvbk51bU9mUmVjcyxcbiAgR2V0VG9waWNSZWNvbW1lbmRhdGlvbnMsXG4gIENoZWNrSWZVc2VyQWRkZWRRdWVzdGlvbixcbiAgQ2hlY2tJZlF1ZXN0aW9uSGFzQmVlblJlamVjdGVkLFxuICBHZXRVc2VyUmVhY3Rpb25Ub0xpa2VPcHRpb24sXG4gIEdldFVzZXJSZWFjdGlvblRvRGlzTGlrZU9wdGlvbixcbn0gZnJvbSBcIi4uL2FwaVJlcXVlc3RzL2FwaVJlcXVlc3RzXCI7XG5pbXBvcnQgU2lnbmluIGZyb20gXCIuL3NpZ25pblwiO1xuaW1wb3J0IFNpZ251cCBmcm9tIFwiLi9zaWdudXBcIjtcbmNvbnN0IHNvY2tldCA9IGlvKEFQSV9VUkwpO1xuXG5mdW5jdGlvbiBHZXRMaWtlTnVtYmVyKGRhdGEpe1xuICBsZXQgb2JqID0ge307XG5mb3IobGV0IGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XG5vYmpbZGF0YVtpXS5vcHRpb25dID0gZGF0YVtpXS5saWtlXG59XG5cbnJldHVybiBvYmo7XG5cbn1cblxuZnVuY3Rpb24gR2V0RGlzTGlrZU51bWJlcihkYXRhKXtcbiAgbGV0IG9iaiA9IHt9O1xuZm9yKGxldCBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1xub2JqW2RhdGFbaV0ub3B0aW9uXSA9IGRhdGFbaV0uZGlzbGlrZVxufVxuXG5yZXR1cm4gb2JqO1xuXG4gIH1cblxuZnVuY3Rpb24gY29sb3IgKGRhdGEpe1xuICBsZXQgb2JqID0ge307XG4gIGZvcihsZXQgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKXtcbiAgICBvYmpbZGF0YVtpXS5vcHRpb25dID0gXCJncmV5XCJcbiAgfVxuICByZXR1cm4gb2JqO1xufSAgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5OiB7IG5hbWUgfSB9KSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSBBZGRTcGFjZXNSZW1vdmVIeXBoZW4obmFtZSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MoR0VUX1NQRUNJRklDX1RPUElDX1VSTChxdWVzdGlvbikpO1xuICAgY29uc3QgQ29sb3IgPSBhd2FpdCBjb2xvcihyZXMuZGF0YS5kYXRhLmRhdGEpO1xuICAgIGNvbnN0IExpa2VOdW1iZXIgPSBhd2FpdCBHZXRMaWtlTnVtYmVyKHJlcy5kYXRhLmRhdGEuZGF0YSk7XG4gICAgY29uc3QgRGlzTGlrZU51bWJlciA9IGF3YWl0IEdldERpc0xpa2VOdW1iZXIocmVzLmRhdGEuZGF0YS5kYXRhKTtcbiAgICBjb25zdCByZWxhdGVkVG9waWNSZXNwb25zZSA9IGF3YWl0IEF4aW9zKEdFVF9SRUxBVEVEX1RPUElDU19VUkwocXVlc3Rpb24pKTtcbiAgICBjb25zdCBxdWVzdGlvblVwZGF0ZWRBdCA9IGF3YWl0IEdldFF1ZXN0aW9uVXBkYXRlZEF0KHF1ZXN0aW9uKTtcbiAgICBjb25zdCBxdWVzdGlvbk51bU9mUmVjcyA9IGF3YWl0IEdldFF1ZXN0aW9uTnVtT2ZSZWNzKHF1ZXN0aW9uKTtcbiAgICBjb25zdCByZWNzQWN0aXZpdHkgPSBhd2FpdCBHZXRUb3BpY1JlY29tbWVuZGF0aW9ucyhxdWVzdGlvbik7XG4gICAgY29uc3QgcmVqZWN0ZWRSZXNwb25zZSA9IGF3YWl0IENoZWNrSWZRdWVzdGlvbkhhc0JlZW5SZWplY3RlZChxdWVzdGlvbik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcyhfR0VUX1RPUElDUyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb24sXG4gICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgIHJlbGF0ZWRUb3BpYzogcmVsYXRlZFRvcGljUmVzcG9uc2UuZGF0YSxcbiAgICAgIHVwZGF0ZWRBdDogcXVlc3Rpb25VcGRhdGVkQXQuZGF0YSxcbiAgICAgIG51bU9mUmVjczogcXVlc3Rpb25OdW1PZlJlY3MuZGF0YSxcbiAgICAgIFJlY3NBY3Rpdml0eTogcmVjc0FjdGl2aXR5LmRhdGEsXG4gICAgICB0b3BpY3M6IHJlc3BvbnNlLmRhdGEsXG4gICAgICBxdWVzdGlvblJlamVjdGVkOiByZWplY3RlZFJlc3BvbnNlLmRhdGEsXG4gICAgIExpa2VDb2xvciA6IENvbG9yLFxuICAgICBEaXNMaWtlQ29sb3IgOiBDb2xvcixcbiAgICAgIExpa2VOdW1iZXIgOiBMaWtlTnVtYmVyLFxuICAgICAgRGlzTGlrZU51bWJlciA6IERpc0xpa2VOdW1iZXJcbiAgICB9O1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgcXVlc3Rpb246IHRoaXMucHJvcHMucXVlc3Rpb24sXG4gICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLmRhdGEuZGF0YSxcbiAgICBsYXN0VXBkYXRlZDogdGhpcy5wcm9wcy51cGRhdGVkQXQsXG4gICAgbnVtT2ZSZWNzOiB0aGlzLnByb3BzLm51bU9mUmVjcyxcbiAgICBvcHRpb25Db25zaWRlcmVkOiB0aGlzLnByb3BzLmRhdGEuZGF0YS5vcHRpb25Db25zaWRlcmVkLFxuICAgIHRhZ2llOiB0aGlzLnByb3BzLmRhdGEuZGF0YS50YWdpZSxcbiAgICByZWxhdGVkVG9waWNzOiB0aGlzLnByb3BzLnJlbGF0ZWRUb3BpYy5kYXRhLFxuICAgIHJlY29tbWVuZGF0aW9uczogdGhpcy5wcm9wcy5SZWNzQWN0aXZpdHksXG4gICAgdXNlcjoge30sXG4gICAgVXNlckNsaWNrZWRMb2dpbjogZmFsc2UsXG4gICAgVXNlckNsaWNrZWRTaWdudXA6IGZhbHNlLFxuICBMaWtlQ29sb3IgOiB0aGlzLnByb3BzLkxpa2VDb2xvcixcbiAgRGlzTGlrZUNvbG9yIDogdGhpcy5wcm9wcy5EaXNMaWtlQ29sb3IsXG4gICBMaWtlTnVtYmVyIDogIHRoaXMucHJvcHMuTGlrZU51bWJlcixcbiAgIERpc0xpa2VOdW1iZXIgOiAgdGhpcy5wcm9wcy5EaXNMaWtlTnVtYmVyXG4gIH07XG5cbiAgLy9DaGVjayBpZiB1c2VyIEFkZGVkIFF1ZXN0aW9uXG5cbiAgY2hlY2tJZlVzZXJBZGRlZFF1ZXN0aW9uID0gKHF1ZXN0aW9uLCBpZCkgPT4ge1xuICAgIENoZWNrSWZVc2VyQWRkZWRRdWVzdGlvbihxdWVzdGlvbiwgaWQpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFkZGVkUXVlc3Rpb246IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnIgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2RldGFpbHNcIikpKSB7XG4gICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfZGV0YWlsc1wiKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgdXNlclxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGVja0lmVXNlckFkZGVkUXVlc3Rpb24odGhpcy5wcm9wcy5xdWVzdGlvbiwgdXNlci5faWQpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgfVxuXG4gIH1cblxuXG4gIGhhbmRsZURpdkNsb3NlU2lnbkluID0gZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLmRpdikge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+ICh7XG4gICAgICAgIFVzZXJDbGlja2VkTG9naW46ICFwcmV2aW91c1N0YXRlLlVzZXJDbGlja2VkTG9naW5cbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRGl2Q2xvc2VTaWduVXAgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuZGl2KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcbiAgICAgICAgVXNlckNsaWNrZWRTaWdudXA6ICFwcmV2aW91c1N0YXRlLlVzZXJDbGlja2VkU2lnbnVwXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIG9wZW5Mb2dpbk92ZXJsYXkgPSAoKSA9PiB7XG4gICAgLy9hbGVydChcImNsaWNrXCIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgVXNlckNsaWNrZWRTaWdudXA6IGZhbHNlLFxuICAgICAgVXNlckNsaWNrZWRMb2dpbjogIXRoaXMuc3RhdGUuVXNlckNsaWNrZWRMb2dpblxuICAgIH0pO1xuICB9O1xuXG4gIG9wZW5TaWdudXBPdmVybGF5ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgVXNlckNsaWNrZWRMb2dpbjogZmFsc2UsXG4gICAgICBVc2VyQ2xpY2tlZFNpZ251cDogIXRoaXMuc3RhdGUuVXNlckNsaWNrZWRTaWdudXBcbiAgICB9KTtcbiAgfTtcblxuICBjbG9zZVNpZ251cE92ZXJsYXkgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBVc2VyQ2xpY2tlZFNpZ251cDogIXRoaXMuc3RhdGUuVXNlckNsaWNrZWRTaWdudXBcbiAgICB9KTtcbiAgfTtcblxuICBjbG9zZUxvZ2luT3ZlcmxheSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFVzZXJDbGlja2VkTG9naW46ICF0aGlzLnN0YXRlLlVzZXJDbGlja2VkTG9naW5cbiAgICB9KTtcbiAgfTtcblxuICBcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9uQ29uc2lkZXJlZCxcbiAgICAgIFVzZXJDbGlja2VkTG9naW4sXG4gICAgICBVc2VyQ2xpY2tlZFNpZ251cCxcbiAgICAgIHF1ZXN0aW9uLFxuICAgICAgYWRkZWRRdWVzdGlvblxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBxdWVzdGlvblJlamVjdGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGFnID0gdGhpcy5zdGF0ZS50YWdpZS5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS50YWc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TGF5b3V0XG4gICAgICAgICAgLy8gey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy50b3BpY3MuZGF0YX1cbiAgICAgICAgICBvcGVuU2lnbnVwPXt0aGlzLm9wZW5TaWdudXBPdmVybGF5fVxuICAgICAgICAgIG9wZW5Mb2dpbj17dGhpcy5vcGVuTG9naW5PdmVybGF5fVxuICAgICAgICAgIHRvcGljdmlldz17dHJ1ZX1cbiAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5xdWVzdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICAgPFRvcGljVmlld0xhbmRpbmdQYWdlXG4gICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgdGFnPXt0YWd9XG4gICAgICAgICAgcXVlc3Rpb25SZWplY3RlZD17cXVlc3Rpb25SZWplY3RlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widmlldy1jb250YWluZXJcIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zaWRlcmVkLW9wdGlvbi1jYXJkXCI+XG4gICAgICAgICAgICB7b3B0aW9uQ29uc2lkZXJlZCAhPT0gMCAmJiA8T3B0aW9uQ2FyZGllIHsuLi50aGlzLnN0YXRlfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtvcHRpb25Db25zaWRlcmVkID09PSAwICYmXG4gICAgICAgICAgICBhZGRlZFF1ZXN0aW9uICYmXG4gICAgICAgICAgICBxdWVzdGlvblJlamVjdGVkID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAgIDxVc2VyQWRkZWRRdWVzdGlvbkNhcmQgdXJsPXtxdWVzdGlvbn0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAge29wdGlvbkNvbnNpZGVyZWQgIT09IDAgJiYgcXVlc3Rpb25SZWplY3RlZCA9PT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgPE9wdGlvbkxpc3Qgey4uLnRoaXMuc3RhdGUgfSB1c2VyX2lkID0gIHsgdGhpcy5zdGF0ZS51c2VyLl9pZH0gIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtxdWVzdGlvblJlamVjdGVkID09PSB0cnVlICYmIDxSZWFjdGlvbkJhbm5lciAvPn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGVkLXF1ZXN0aW9uc1wiPlxuICAgICAgICAgIHs8UmVsYXRlZE9wdGlvbnMgey4uLnRoaXMuc3RhdGV9IC8+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtVc2VyQ2xpY2tlZFNpZ251cCA/IFwib3ZlcmxheVNob3dcIiA6IFwib3ZlcmxheVwifVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVEaXZDbG9zZVNpZ25VcChlKX1cbiAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLmRpdiA9IGVsKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlLWljb25cIiBvbkNsaWNrPXt0aGlzLmNsb3NlU2lnbnVwT3ZlcmxheX0+XG4gICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7VXNlckNsaWNrZWRTaWdudXAgJiYgPFNpZ251cCBvcGVuTG9naW49e3RoaXMub3BlbkxvZ2luT3ZlcmxheX0gLz59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiogRm9yIFNpZ25pbiBpcyBoZXJlICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFVzZXJDbGlja2VkTG9naW4gPyBcIm92ZXJsYXlTaG93IHNob3dTaWduaW4tY29udGFpbmVyXCIgOiBcIm92ZXJsYXlcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlRGl2Q2xvc2VTaWduSW4oZSl9XG4gICAgICAgICAgcmVmPXtlbCA9PiAodGhpcy5kaXYgPSBlbCl9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZS1pY29uXCIgb25DbGljaz17dGhpcy5jbG9zZUxvZ2luT3ZlcmxheX0+XG4gICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIHtVc2VyQ2xpY2tlZExvZ2luICYmIDxTaWduaW4gb3BlblNpZ251cD17dGhpcy5vcGVuU2lnbnVwT3ZlcmxheX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogRW5kIG9mIFNpZ25pbiAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWQtaXRlbXMtY2FyZFwiPlxuICAgICAgICAgIHsvKjxDYXJkRXhhbXBsZUNvbnRlbnRCbG9jayAvPiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnZpZXctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICB0b3A6IDkwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDR2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWxhdGVkLXF1ZXN0aW9ucyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogNzIlO1xuICAgICAgICAgICAgICB0b3A6IDM0NnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xvc2UtaWNvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiA5MCU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmVjZjA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDkxLCA1NiwgMTQxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2UtaWNvbiA+IHNwYW4ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDYwMDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3ZlcmxheVNob3cge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3ZlcmxheVNob3dpZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVsYXRlZC1pdGVtcy1jYXJkIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA5MjBweDtcbiAgICAgICAgICAgICAgdG9wOiA1ODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnNpZGVyZWQtb3B0aW9uLWNhcmQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgLmNvbnNpZGVyZWQtb3B0aW9uLWNhcmQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlbGF0ZWQtcXVlc3Rpb25zIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnZpZXctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODglO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDYuMnZ3O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/pages/topicview.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var name, question, res, Color, LikeNumber, DisLikeNumber, relatedTopicResponse, questionUpdatedAt, questionNumOfRecs, recsActivity, rejectedResponse, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.query.name;
                question = Object(_lib_removeSpaces__WEBPACK_IMPORTED_MODULE_19__["AddSpacesRemoveHyphen"])(name);
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_13___default()(Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["GET_SPECIFIC_TOPIC_URL"])(question));

              case 4:
                res = _context.sent;
                _context.next = 7;
                return color(res.data.data.data);

              case 7:
                Color = _context.sent;
                _context.next = 10;
                return GetLikeNumber(res.data.data.data);

              case 10:
                LikeNumber = _context.sent;
                _context.next = 13;
                return GetDisLikeNumber(res.data.data.data);

              case 13:
                DisLikeNumber = _context.sent;
                _context.next = 16;
                return axios__WEBPACK_IMPORTED_MODULE_13___default()(Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["GET_RELATED_TOPICS_URL"])(question));

              case 16:
                relatedTopicResponse = _context.sent;
                _context.next = 19;
                return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["GetQuestionUpdatedAt"])(question);

              case 19:
                questionUpdatedAt = _context.sent;
                _context.next = 22;
                return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["GetQuestionNumOfRecs"])(question);

              case 22:
                questionNumOfRecs = _context.sent;
                _context.next = 25;
                return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["GetTopicRecommendations"])(question);

              case 25:
                recsActivity = _context.sent;
                _context.next = 28;
                return Object(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["CheckIfQuestionHasBeenRejected"])(question);

              case 28:
                rejectedResponse = _context.sent;
                _context.next = 31;
                return axios__WEBPACK_IMPORTED_MODULE_13___default()(_apiRequests_apiRequests__WEBPACK_IMPORTED_MODULE_24__["_GET_TOPICS"]);

              case 31:
                response = _context.sent;
                return _context.abrupt("return", {
                  question: question,
                  data: res.data,
                  relatedTopic: relatedTopicResponse.data,
                  updatedAt: questionUpdatedAt.data,
                  numOfRecs: questionNumOfRecs.data,
                  RecsActivity: recsActivity.data,
                  topics: response.data,
                  questionRejected: rejectedResponse.data,
                  LikeColor: Color,
                  DisLikeColor: Color,
                  LikeNumber: LikeNumber,
                  DisLikeNumber: DisLikeNumber
                });

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



/***/ }),

/***/ "./utils/headerButton.js":
/*!*******************************!*\
  !*** ./utils/headerButton.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Icons */ "./components/Icons.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);






var HeaderButton = function HeaderButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1274034057"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
    effect: "solid",
    place: "top"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/ask"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    "data-tip": 'Ask a Question',
    className: "jsx-1274034057"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_3__["AddIcon"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1274034057"
  }, "button.jsx-1274034057{width :50px;height :50px;border :0;border-radius :50px;padding :12px;cursor :pointer;background-color :rgb(96,51,141);text-transform :uppercase;font-family :verdana;font-size :10px;font-weight :bold;color :#f2f2f2;outline :0;display :inline-block;box-shadow :0 0 0px 2px rgba(0,0,0,0.12);overflow :hidden;}button.jsx-1274034057:hover{color :rgb(96,51,141);border :2px solid rgb(96,51,141);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci91dGlscy9oZWFkZXJCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1ksQUFHNkIsQUFrQlksWUFqQlgsVUFtQmxCLEdBbEJlLFVBQ1Usb0JBQ04sQUFnQmxCLGNBZm9CLGdCQUNtQixpQ0FDVCwwQkFDTCxxQkFDTCxnQkFDRSxrQkFDSCxlQUNKLFdBQ1csc0JBQ21CLHlDQUN4QixpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL3V0aWxzL2hlYWRlckJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEFkZEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zJ1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJ1xuY29uc3QgSGVhZGVyQnV0dG9uID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxSZWFjdFRvb2x0aXAgZWZmZWN0PVwic29saWRcIiBwbGFjZT1cInRvcFwiIC8+XG4gICAgICAgIDxMaW5rIHByZWZldGNoICBocmVmPVwiL2Fza1wiPjxidXR0b24gZGF0YS10aXA9eyAnQXNrIGEgUXVlc3Rpb24nfSA+PEFkZEljb24gLz48L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGggOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodCA6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyIDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzIDogNTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nIDogMTJweDtcbiAgICAgICAgICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtIDogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogdmVyZGFuYTtcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvciA6ICNmMmYyZjI7XG4gICAgICAgICAgICAgICAgb3V0bGluZSA6IDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93IDogMCAwIDBweCAycHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3IgOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIGJvcmRlciA6IDJweCBzb2xpZCByZ2IoOTYsIDUxLCAxNDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQnV0dG9uIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/utils/headerButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderButton);

/***/ }),

/***/ "./utils/headerForm.js":
/*!*****************************!*\
  !*** ./utils/headerForm.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_searchFilterCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/searchFilterCard */ "./components/searchFilterCard.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Icons */ "./components/Icons.js");














var HeaderForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeaderForm, _Component);

  function HeaderForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      show: false,
      search: "",
      //show searchFilterCard,
      data: _this.props.data,
      searchItem: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (e, previousState) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          show = _this$state.show,
          searchItem = _this$state.searchItem;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1027911684" + " " + "header-form-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: "jsx-1027911684"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1027911684" + " " + "form-input-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "jsx-1027911684" + " " + "main-header-search-icon"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_12__["SearchIcon"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
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
      }))), show && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_searchFilterCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: searchItem,
        text: "Work in Progress is my shepherd"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1027911684"
      }, ".form-input-container.jsx-1027911684{box-sizing:border-box;display:inline-block;}.form-input-container.jsx-1027911684 .main-header-search-icon.jsx-1027911684{position:relative;top:5px;left:94%;margin-left:2px;}input[type=\"text\"].jsx-1027911684{width:40.8vw;height:30px;padding:1.2em;background-color:#eee;border:0.8px solid transparent;border-radius:2px;margin:0;color:rgb(96,51,141);font-weight:600;font-size:16px;outline:0;line-height:10px;font-family:inherit;overflow:hidden;box-sizing:border-box;}.header-form-input.jsx-1027911684:hover{box-shadow:0 4px 16px 0 rgba(0,0,0,0.2);-webkit-transition:1s;transition:1s;}input[type=\"search\"].jsx-1027911684:focus{box-shadow:0 4px 16px 0 rgba(0,0,0,0.2);-webkit-transition:1s;transition:1s;}.jsx-1027911684::-webkit-input-placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}.jsx-1027911684::-moz-placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}.jsx-1027911684:-ms-input-placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}.jsx-1027911684::placeholder{color:rgb(96,51,141);font-weight:600;opacity:1;padding:0.1em;font-size:0.9em;}.jsx-1027911684:-ms-input-placeholder{color:rgb(96,51,141);}.jsx-1027911684::-ms-input-placeholder{color:rgb(96,51,141);}@media screen and (max-width:600px){input[type=\"text\"].jsx-1027911684{width:45vw;height:30px;padding:5px;border:0;color:rgb(96,51,141);font-weight:600;font-size:16px;outline:0;box-shadow:none !important;line-height:24px;overflow:hidden;margin-top:2px;border-radius:2px;}ul.jsx-1027911684{left:0;padding:0;}.form-input-container.jsx-1027911684 .main-header-search-icon.jsx-1027911684{position:absolute;top:7.5px;left:82%;}.jsx-1027911684:placeholder{color:#000;font-weight:100;opacity:1;font-family:inherit !important;padding:0 !important;font-size:0.1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci91dGlscy9oZWFkZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFVyxBQUdxQyxBQUlKLEFBTUwsQUFrQjhCLEFBS0EsQUFNcEIsQUFTQSxBQUtBLEFBS1YsQUFnQkosQUFLVyxBQU1QLE9BVkQsSUFoQkUsQUEyQkksRUEzRU4sSUFpRVosQ0F2RVEsQUEyRUksR0F4Q0ksQUFTbEIsQUFLQSxDQXJEdUIsQ0EyRFAsRUFoREEsQ0FOTCxDQWlGRyxDQU5ELE9BMUVLLEFBc0RMLEVBcEJELEFBeUNWLEFBTWlDLEVBM0VYLENBZ0JSLEFBS0EsR0FoQ2hCLENBNEQyQixHQXBCWCxJQWxDaEIsVUFNaUMsQUE2QmYsSUFvQkUsR0EwQkssUUEzRHpCLEFBS0EsQ0FTQSxJQW9CbUIsUUEwQkUsR0EzRUQsSUFrRE4sVUFDaUIsQUF5QjdCLElBM0VTLFNBQ2MsY0FrREosT0FqREgsVUFrREUsTUFqREgsVUFrREUsS0FqRFAsVUFDTyxBQWlERyxpQkFoREEsQ0FpRHBCLG1CQWhEZ0IsZ0JBQ00sc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci91dGlscy9oZWFkZXJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2hGaWx0ZXJDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaEZpbHRlckNhcmRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhQ2FyZXREb3duLFxuICBmYVNlYXJjaCxcbiAgZmFCZWxsLFxuICBmYUNyb3duXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc1wiO1xuY2xhc3MgSGVhZGVyRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNob3c6IGZhbHNlLFxuICAgIHNlYXJjaDogXCJcIiwgLy9zaG93IHNlYXJjaEZpbHRlckNhcmQsXG4gICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuICAgIHNlYXJjaEl0ZW06IFtdXG4gIH07XG5cbiAgb25DaGFuZ2UgPSAoZSwgcHJldmlvdXNTdGF0ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBmaWx0ZXJEYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGl0ZW0ucXVlc3Rpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoLnZhbHVlLnRvTG93ZXJDYXNlKCkpICE9PVxuICAgICAgICAtMVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBsZXQgY2hlY2sgPSB0aGlzLnNlYXJjaC52YWx1ZTtcblxuICAgIGlmIChjaGVjayAhPT0gXCJcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hJdGVtOiBmaWx0ZXJEYXRhIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93LCBzZWFyY2hJdGVtIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXItc2VhcmNoLWljb25cIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiAodGhpcy5zZWFyY2ggPSBpbnB1dCl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoLi4uXCJ9XG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHtzaG93ICYmIChcbiAgICAgICAgICA8U2VhcmNoRmlsdGVyQ2FyZFxuICAgICAgICAgICAgZGF0YT17c2VhcmNoSXRlbX1cbiAgICAgICAgICAgIHRleHQ9e1wiV29yayBpbiBQcm9ncmVzcyBpcyBteSBzaGVwaGVyZFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmZvcm0taW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0taW5wdXQtY29udGFpbmVyIC5tYWluLWhlYWRlci1zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDk0JTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwLjh2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxLjJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwLjhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlci1mb3JtLWlucHV0OmhvdmVyIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDk2LCA1MSwgMTQxKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1dnc7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig5NiwgNTEsIDE0MSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5mb3JtLWlucHV0LWNvbnRhaW5lciAubWFpbi1oZWFkZXItc2VhcmNoLWljb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDcuNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDgyJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJGb3JtO1xuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/utils/headerForm.js */"));
    }
  }]);

  return HeaderForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeaderForm);

/***/ }),

/***/ "./utils/toprating.js":
/*!****************************!*\
  !*** ./utils/toprating.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var TopRating = function TopRating(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-899178264" + " " + "topRatingCard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-899178264" + " " + "join-us-header"
  }, "Top rating"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-899178264" + " " + "sidebar-text"
  }, "TopRating  helps you make informed decisions. Tell us what you\u2019re passionate about to get your personalized feed and help others."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ask"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-899178264"
  }, "Let's go!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "899178264"
  }, ".join-us-header.jsx-899178264{font-size:18px;font-weight:600;line-height:24px;color:#0d0d0d;margin:12px auto;}.Sidebar-text.jsx-899178264,.join-us-header.jsx-899178264{line-height:24px;margin-bottom:18px;}.Sidebar-text.jsx-899178264{font-size:0.3em;font-weight:400;-webkit-letter-spacing:.1px;-moz-letter-spacing:.1px;-ms-letter-spacing:.1px;letter-spacing:.1px;text-transform:none;font-family :verdana;}button.jsx-899178264{width :100px;height :40px;border :0;border-radius :6px;cursor :pointer;background-color :rgb(96,51,141);font-family :inherit;font-size :13px;font-weight :bold;color :#f2f2f2;outline :0;margin-top :6px;}button.jsx-899178264:hover{background-color :#e6ecf0;color :rgb(96,51,141);border :1px solid rgb(96,51,141);}.topRatingCard.jsx-899178264{overflow:hidden;box-shadow:0 4px 19px 0 rgba(0,0,0,.05);border:1px solid #e6e8eb;background-color:#fff;max-height:454px;width:257px;margin-bottom:36px;padding:18px;text-align :center;top :460px;-webkit-animation :bounce-jsx-899178264 3s ease-in-out infinite;animation :bounce-jsx-899178264 3s ease-in-out infinite;-webkit-animation-direction :alternate;animation-direction :alternate;}@-webkit-keyframes bounce-jsx-899178264{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}@keyframes bounce-jsx-899178264{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ra2JhY2tlbmQvRGVza3RvcC90b3ByYXRpbmcxLW1hc3Rlci91dGlscy90b3ByYXRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBSWdDLEFBUUUsQUFLRCxBQVFILEFBZ0JpQixBQU1kLEFBZ0JRLEFBR0csYUF4Q2QsRUFyQkcsQ0FhQSxBQThCd0IsQ0FuQ3JCLFNBY1QsQUFla0IsS0FwQ1gsQ0FhRyxJQUx4QixBQWN1QixZQXJCTCxBQW9DeUIsT0FidkIsQ0FtQlMsTUF6Q1IsU0F1QmtCLFFBdEJ2QyxFQW1DSSxBQU1zQixHQWMxQixTQUdBLFVBaEJxQixDQW5CSSxnQkFvQlQsS0FuQkksSUFiSSxHQWlDRCxTQW5CRCxRQWJHLEVBaUNSLFFBbkJFLEtBb0JJLE1BakN2QixJQWNlLFNBb0JBLEVBbkJLLFNBb0IwQixPQW5CMUMsaUhBb0IrQixzRUFDakMiLCJmaWxlIjoiL1VzZXJzL2trYmFja2VuZC9EZXNrdG9wL3RvcHJhdGluZzEtbWFzdGVyL3V0aWxzL3RvcHJhdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuY29uc3QgVG9wUmF0aW5nID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BSYXRpbmdDYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9pbi11cy1oZWFkZXJcIj5Ub3AgcmF0aW5nPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci10ZXh0XCI+VG9wUmF0aW5nICBoZWxwcyB5b3UgbWFrZSBpbmZvcm1lZCBkZWNpc2lvbnMuIFRlbGwgdXMgd2hhdCB5b3XigJlyZSBwYXNzaW9uYXRlIGFib3V0IHRvIGdldCB5b3VyIHBlcnNvbmFsaXplZCBmZWVkIGFuZCBoZWxwIG90aGVycy48L2Rpdj5cblxuICAgICAgICA8TGluayBocmVmPVwiL2Fza1wiPjxidXR0b24+TGV0J3MgZ28hPC9idXR0b24+PC9MaW5rPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICAuam9pbi11cy1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMGQwZDBkO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTJweCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuU2lkZWJhci10ZXh0LCAuam9pbi11cy1oZWFkZXJ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLlNpZGViYXItdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjNlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogdmVyZGFuYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIHdpZHRoIDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXIgOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA2cHg7XG5cbiAgICAgICAgICAgICAgICBjdXJzb3IgOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvciA6ICNmMmYyZjI7XG4gICAgICAgICAgICAgICAgb3V0bGluZSA6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcCA6IDZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2U2ZWNmMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiByZ2IoOTYsIDUxLCAxNDEpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiAxcHggc29saWQgcmdiKDk2LCA1MSwgMTQxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRvcFJhdGluZ0NhcmR7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxOXB4IDAgcmdiYSgwLDAsMCwuMDUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU4ZWI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NTRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjU3cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdG9wIDogNDYwcHg7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uIDogYm91bmNlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb24gOiBhbHRlcm5hdGU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRvcFJhdGluZ1xuIl19 */\n/*@ sourceURL=/Users/kkbackend/Desktop/toprating1-master/utils/toprating.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TopRating);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/topicview.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kkbackend/Desktop/toprating1-master/pages/topicview.js */"./pages/topicview.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=topicview.js.map