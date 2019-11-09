import Axios from "axios";
import API_URL from "../config/config";
//Welcome, all requests to the server are made here
//======================================================================================================
export const Auth = `${API_URL}/auth`;
const URL = `${API_URL}/topic`;
const newOption = `${API_URL}/option/add/topic`;
const _optionRoute = `${API_URL}/option`;
const _Option_Rec = `${API_URL}/option/add/recommendation`;
const _forgotPass = `${API_URL}/auth/forgot/password`;
export const _GET_TOPICS = `${API_URL}/option/get/topics`;
const _addNewOption = `${API_URL}/option/add`;
export const _GET_RECS = `${API_URL}/option/get/recommendations`;
export const _GET_QUESTION_ACTIVITY = `${API_URL}/option/get/questionActivity`;
export const GET_SPECIFIC_TOPIC_URL = name => `${API_URL}/option/topic/${name}`;
export const GET_RELATED_TOPICS_URL = name =>
  `${API_URL}/option/get/related/${name}`;
//========================================================================================================
/* End of production Apis */

const addTopicURL = URL + "/add";
const editTopicURL = URL + "/edit";
const getTopicURL = URL + "/get";
const addAvata = URL + "/upload/avatar";
const updateProfile = Auth + "/profile/edit";
const googleUserSignin = Auth + "/google/signin";

const checkIfUserExistUrl = `${Auth}/check`;

export const login = (email, password) => {
  const GetUserAuthToken = () => {
    return localStorage.getItem("user_token");
  };

  const axiosConfig = {
    headers: {
      "x-access-request-source": "rating",
      "x-access-token": GetUserAuthToken()
    }
  };

  let holder = {
    email: email,
    password: password
  };
  return Axios.post(`${Auth}/login`, holder, axiosConfig);
};

export const mySignup = (
  email,
  username,
  password,
  imageUrl,
  displayname,
  tokenId,
  type = "top-rating"
) => {
  let holder = {
    email: email,
    username: username,
    password: password,
    displayname: displayname,
    image: imageUrl,
    tokenid: tokenId,
    type: type
  };
  return Axios.post(`${Auth}/signup`, holder);
};

export const mySocial = (
  email,
  username,
  password,
  imageUrl,
  displayname,
) => {
  let holder = {
    email: email,
    username: username,
    password: password,
    displayname: displayname,
    image: imageUrl
  };
  return Axios.post(`${Auth}/social_login`, holder);
};



export const AddOption = (id, option, link) => {
  let holder = {
    id: id,
    option: option,
    link: link
  };
  return Axios.put(editTopicURL, holder);
};

export const getOption = () => {
  return Axios.get(getTopicURL);
};

export const Add = (_question, _tag) => {
  let holder = {
    question: _question,
    tag: _tag
  };

  return Axios.post(addTopicURL, holder);
};

export const addAvatar = (url, id) => {
  return Axios.post(addAvata, { url, id });
};

export const updateUser = (id, email, displayName, userName, password) => {
  let _holder = {
    email: email,
    displayName: displayName,
    userName: userName,
    password: password,
    id: id
  };

  return Axios.put(updateProfile, _holder);
};

export const userGoogleSignin = token => {
  return Axios.post(googleUserSignin, token);
};

export const NewAddTopic = (question, tag, userId, socketId) => {
  return Axios.post(newOption, { question, tag, userId, socketId });
};

export const getAllTopics = () => {
  return Axios.get(_GET_TOPICS);
};

export const AddNewOption = (id, option, link, mediaUrl, price) => {
  return Axios.post(_addNewOption, { id, option, link, mediaUrl, price });
};

export const forgotPasswordFunction = _email => {
  return Axios.post(_forgotPass, { _email });
};

export const checkIfUserExist = _email => {
  return Axios.post(checkIfUserExistUrl, { _email });
};

export const user_recommendation = holder => {
  return Axios.post(_Option_Rec, holder);
};

export const checkIfTagExist = tag => {
  return Axios.get(`${_optionRoute}/tag?tag=${tag}`);
};

export const AddUserReactionToOption = data => {
  return Axios.post(`${_optionRoute}/add/option_reaction`, data);
};


export const GetUserReactionToLikeOption = (id,option) => {
  return Axios.post(`${_optionRoute}/get/likeoption_reaction`,{
    userid : id,
    option : option
  });
};

export const GetUserReactionToDisLikeOption = (id,option) => {
  return Axios.post(`${_optionRoute}/get/dislikeoption_reaction`,{
    userid : id,
    option : option
  });
};


export const MarkOptionAsSpam = data => {
  return Axios.post(`${_optionRoute}/markAsSpam`, data);
};

//OptionUpdateHistory
export const SaveUpdateHistory = data => {
  return Axios.post(`${_optionRoute}/save/optionUpdateHistory`, data);
};

//ProUpdateHistory
export const SaveProHistory = data => {
  return Axios.post(`${_optionRoute}/save/proUpdateHistory`, data);
};

//ConUpdateHistory
export const SaveConHistory = data => {
  return Axios.post(`${_optionRoute}/save/conUpdateHistory`, data);
};

//GetOptionUpdateHistory
export const GetOptionUpdateHistory = option => {
  return Axios.get(`${_optionRoute}/get/optionUpdateHistory?option=${option}`);
};

//GetProUpdateHistory
export const GetProUpdateHistory = id => {
  return Axios.get(`${_optionRoute}/get/proUpdateHistory?id=${id}`);
};

//GetConUpdateHistory
export const GetConUpdateHistory = id => {
  return Axios.get(`${_optionRoute}/get/conUpdateHistory?id=${id}`);
};

export const GetRecHistory = id => {
  return Axios.get(`${_optionRoute}/user/rec-history?id=${id}`);
};

export const UpdateOption = (id, uid, option, link) => {
  return Axios.put(
    `${_optionRoute}/update/option?id=${id}&uid=${uid}&option=${option}&link=${link}`
  );
};

export const UpdatePro = (
  id,
  uid,
  proTitle,
  proDescription,
  option,
  optionId,
  question
) => {
  return Axios.put(
    `${_optionRoute}/update/pro?id=${id}&uid=${uid}&protitle=${proTitle}&description=${proDescription}&optionId=${optionId}&option=${option}&question=${question}`
  );
};

export const UpdateCon = (
  id,
  uid,
  conTitle,
  conDescription,
  option,
  optionId,
  question
) => {
  return Axios.put(
    `${_optionRoute}/update/con?id=${id}&uid=${uid}&contitle=${conTitle}&description=${conDescription}&optionId=${optionId}&option=${option}&question=${question}`
  );
};

//Pro and con update history will come here

export const GetQuestionUpdatedAt = question => {
  return Axios.get(
    `${_optionRoute}/get/question/updatedAt?question=${question}`
  );
};

export const GetQuestionNumOfRecs = option => {
  return Axios.get(`${_optionRoute}/get/numOfRecs?option=${option}`);
};

export const GET_USER_KARMA = id => {
  return Axios.get(`${_optionRoute}/user/karma?id=${id}`);
};

export const GET_USER_NOTIFICATION = userid => {
  return Axios.get(`${_optionRoute}/user/notification?id=${userid}`);
};

export const USER_HAS_SEEN_NOTIFICATION = (socketId, userId) => {
  return Axios.put(
    `${_optionRoute}/user/hasViewedNotification?socketId=${socketId}&id=${userId}`
  );
};

export const GET_SPECIFIC_QUESTION = id => {
  return Axios.get(`${_optionRoute}/get/question?id=${id}`);
};

export const VIEW_A_USER = username => {
  return Axios.get(`${Auth}/view/user?username=${username}`);
};

export const GET_USER_WHO_ADDED_QUESTION = question => {
  //Gets the username of User who added question
  return Axios.get(`${_optionRoute}/get/user/username?question=${question}`);
};

export const GET_SPECIFIC_QUESTION_OPTIONS = question => {
  return Axios.get(`${_optionRoute}/get/question/options?question=${question}`);
};

export const GET_ALL_OPTIONS = () => {
  return Axios.get(`${_optionRoute}/get/all/options`);
};

//Used in the QuestionCard
export const SPECIFIC_QUESTION_OPTIONS = question => {
  return Axios.get(
    `${_optionRoute}/get/specific-question/options?question=${question}`
  );
};

//Used in TopicviewPopupModal to add pro to optionProModel
export const ADD_OPTION_PRO = data => {
  return Axios.post(`${_optionRoute}/add/option/pro`, data);
};

//Used in TopicviewPopupModal to add pro to optionProModel
export const ADD_OPTION_CON = data => {
  return Axios.post(`${_optionRoute}/add/option/con`, data);
};

//Get an option detail

export const GET_OPTION_DETAILS = option => {
  return Axios.get(`${_optionRoute}/get/option/details?option=${option}`);
};

export const FETCH_OPTION_PRO = option => {
  return Axios.get(`${_optionRoute}/fetch/option/pro?option=${option}`);
};

export const FETCH_OPTION_Con = option => {
  return Axios.get(`${_optionRoute}/fetch/option/con?option=${option}`);
};

export const FETCH_OPTION_REC = option => {
  return Axios.get(`${_optionRoute}/fetch/option/rec?option=${option}`);
};

//Fetch all topics using the optioni as a query

export const GET_SPECIFIC_TOPIC = name => {
  return Axios.get(`${_optionRoute}/topic/${name}`);
};

//Sorting of question and Rec card are here

export const SortRecommendations = period => {
  return Axios.get(`${_optionRoute}/sort/recs?by=${period}`);
};

export const SortQuestions = period => {
  return Axios.get(`${_optionRoute}/sort/topics?by=${period}`);
};

export const GetNextQuestion = question => {
  return Axios.get(`${_optionRoute}/get/next-question?question=${question}`);
};

export const GetAQuestionFromQuestions = () => {
  return Axios.get(`${_optionRoute}/get/questions`);
};

//Get

export const GetProDetail = id => {
  return Axios.get(`${_optionRoute}/get/option-pro-detail?id=${id}`);
};

export const GetConDetail = id => {
  return Axios.get(`${_optionRoute}/get/option-con-detail?id=${id}`);
};

//Get option pros
export const GetOptionPros = id => {
  return Axios.get(`${_optionRoute}/get/option-pros?id=${id}`);
};

//Get option cons
export const GetOptionCons = id => {
  return Axios.get(`${_optionRoute}/get/option-cons?id=${id}`);
};

//Get userCreatedTime and Karma

export const getUserKarmaAndDateJoined = id => {
  return Axios.get(`${_optionRoute}/get/user-karma?id=${id}`);
};

//Get a questions total rec

export const GetQuestionTotalRecs = question => {
  return Axios.get(`${_optionRoute}/get/question-recs?question=${question}`);
};

//fetch optionSpecs
export const GetOptionSpecs = option => {
  return Axios.get(`${_optionRoute}/get/option-specs?option=${option}`);
};

//Add optionSpecs

export const AddOptionSpec = payload => {
  return Axios.post(`${_optionRoute}/add/option-spec`, payload);
};

//Get a user's profile avatar
export const FetchAvatar = id => {
  return Axios.get(`${_optionRoute}/fetch/user-avatar?id=${id}`);
};

//Get Question Id

export const FetchSpecificQuestionId = question => {
  return Axios.get(
    `${_optionRoute}/get/specific-question-id?question=${question}`
  );
};

//Add or update option Image

export const AddOptionImage = (optionId, imageUrl) => {
  return Axios.post(`${_optionRoute}/add/option-image`, { optionId, imageUrl });
};

//Get question recommendations

export const GetTopicRecommendations = topic => {
  return Axios.get(`${_optionRoute}/get-topic-recs?topic=${topic}`);
};

//Follow a question
export const FollowQuestion = (questionId, userId) => {
  return Axios.post(`${_optionRoute}/follow-question`, { questionId, userId });
};

//Get followed  question
export const GetFollowedQuestion = (questionId, userId) => {
  return Axios.get(
    `${_optionRoute}/get-followed-question?questionId=${questionId}&userId=${userId}`
  );
};

//Get recommendations by tag
export const GetTopicsByTag = (tag, filter) => {
  return Axios.get(`${_optionRoute}/get-topics-by-tag?tag=${tag}`);
};

//Get other tags
export const GetOtherTags = tag => {
  return Axios.get(`${_optionRoute}/get-other-popular-tags?tag=${tag}`);
};

//Mangage Tag

export const ManageTag = (questionId, tag, question) => {
  return Axios.put(`${_optionRoute}/manage-tag`, { questionId, tag, question });
};

//GetQuestionUpdateHistory
export const GetQuestionUpdateHistory = questionId => {
  return Axios.get(
    `${_optionRoute}/get/question-update-history?questionId=${questionId}`
  );
};

//Get recommendations by tag
export const FilterTopicsByTag = tag => {
  return Axios.get(`${_optionRoute}/filter-tags?filter=${tag}`);
};

//Get questionsAdded by user

export const GetQuestionsAddedByUser = id => {
  return Axios.get(`${_optionRoute}/get-questions-added?id=${id}`);
};

//Check if user added a question

export const CheckIfUserAddedQuestion = (question, id) => {
  return Axios.get(
    `${_optionRoute}/check-if-user-added-question?question=${question}&id=${id}`
  );
};

//Check if question has been rejected

export const CheckIfQuestionHasBeenRejected = (question, id) => {
  return Axios.get(
    `${_optionRoute}/check-if-question-rejected?question=${question}`
  );
};
