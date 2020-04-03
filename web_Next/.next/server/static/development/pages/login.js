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

/***/ "./components/components/Auth/Login/Form.js":
/*!**************************************************!*\
  !*** ./components/components/Auth/Login/Form.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Buttons/SingleModuleButton */ "./components/components/UI/Buttons/SingleModuleButton/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const InnerForm = props => {
  const {
    errors,
    touched
  } = props;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "login-form"
  }, __jsx("div", null, __jsx("div", {
    className: "form-group"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "email",
    className: "form-control login-input",
    name: "email",
    placeholder: "Your email..."
  }), touched.email && errors.email && __jsx("p", {
    className: "field-invalid"
  }, errors.email)), __jsx("div", {
    className: "form-group"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    className: "form-control password-input",
    name: "password",
    placeholder: "Your password..."
  }), touched.password && errors.password && __jsx("p", {
    className: "field-invalid"
  }, errors.password)), __jsx("div", {
    className: "checkbox"
  }, __jsx("label", null, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "checkbox",
    name: "remember"
  }), "Keep me signed in")), __jsx("p", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register"
  }, __jsx("a", null, "Don't have an account?")))), __jsx(components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Log in now",
    type: "submit"
  }));
}; // Wrap our form with the using withFormik HoC


const LoginForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    email: '',
    password: ''
  }),
  // Add a custom validation function (this can be async too!)
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Email is required').email('This is not a valid email'),
    password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Password is required').min(6, 'Your password has to be at least 6 characters')
  }),
  // Submission handler
  handleSubmit: (values, {
    props,
    setStatus
  }) => {
    props.onLoginSubmit(values.email, values.password);
  }
})(InnerForm);
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/components/Auth/Login/index.js":
/*!***************************************************!*\
  !*** ./components/components/Auth/Login/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_FormBoxes_Small__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/FormBoxes/Small */ "./components/components/UI/FormBoxes/Small/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./components/components/Auth/Login/Form.js");
/* harmony import */ var components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Loader */ "./components/components/UI/Loader/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LoginBox = props => __jsx(components_UI_FormBoxes_Small__WEBPACK_IMPORTED_MODULE_1__["default"], null, props.error ? __jsx("p", null, props.error.message) : null, props.loading ? __jsx(components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], null) : __jsx(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
  onLoginSubmit: props.onLoginSubmit
}));

/* harmony default export */ __webpack_exports__["default"] = (LoginBox);

/***/ }),

/***/ "./components/components/Head/index.js":
/*!*********************************************!*\
  !*** ./components/components/Head/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Head = ({
  title = 'Next.js app',
  description = 'Web site created using Next.js'
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    charSet: "UTF-8"
  }), __jsx("title", null, title), __jsx("meta", {
    name: "description",
    content: description
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/logo192.png"
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&subset=latin-ext"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/components/UI/Buttons/SingleModuleButton/index.js":
/*!**********************************************************************!*\
  !*** ./components/components/UI/Buttons/SingleModuleButton/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.scss */ "./components/components/UI/Buttons/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/components/UI/Buttons/SingleModuleButton/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SingleModuleButton = props => {
  const btnType = props.type ? props.type : 'button';
  return __jsx("div", {
    className: "single-module-btn"
  }, props.href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.href
  }, __jsx("a", {
    className: "btn btn-primary"
  }, props.text)) : __jsx("button", {
    className: "btn btn-primary",
    type: btnType
  }, props.text));
};

SingleModuleButton.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SingleModuleButton);

/***/ }),

/***/ "./components/components/UI/Buttons/SingleModuleButton/style.scss":
/*!************************************************************************!*\
  !*** ./components/components/UI/Buttons/SingleModuleButton/style.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/UI/Buttons/style.scss":
/*!*****************************************************!*\
  !*** ./components/components/UI/Buttons/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/UI/FormBoxes/Small/index.js":
/*!***********************************************************!*\
  !*** ./components/components/UI/FormBoxes/Small/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-icon.png */ "./components/components/UI/FormBoxes/login-icon.png");
/* harmony import */ var _login_icon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_icon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/components/UI/FormBoxes/Small/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SmallFormBox = props => __jsx("section", {
  className: "module small-form-module"
}, __jsx("section", {
  className: "login-icon"
}, __jsx("div", {
  className: "icon-container"
}, __jsx("img", {
  src: _login_icon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  className: "img-responsive",
  alt: "Login icon"
}))), props.children);

/* harmony default export */ __webpack_exports__["default"] = (SmallFormBox);

/***/ }),

/***/ "./components/components/UI/FormBoxes/Small/style.scss":
/*!*************************************************************!*\
  !*** ./components/components/UI/FormBoxes/Small/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/UI/FormBoxes/login-icon.png":
/*!***********************************************************!*\
  !*** ./components/components/UI/FormBoxes/login-icon.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/components/UI/Loader/LoadingAnimation/index.js":
/*!*******************************************************************!*\
  !*** ./components/components/UI/Loader/LoadingAnimation/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading */ "react-loading");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/components/UI/Loader/LoadingAnimation/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LoadingAnimation = () => {
  return __jsx("div", {
    className: "loading-animation"
  }, __jsx(react_loading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    color: "#3c6cde",
    type: "spokes",
    width: 64,
    height: 64,
    delay: 100
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingAnimation);

/***/ }),

/***/ "./components/components/UI/Loader/LoadingAnimation/style.scss":
/*!*********************************************************************!*\
  !*** ./components/components/UI/Loader/LoadingAnimation/style.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/UI/Loader/index.js":
/*!**************************************************!*\
  !*** ./components/components/UI/Loader/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingAnimation */ "./components/components/UI/Loader/LoadingAnimation/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Loader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showError: false
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_LoadingAnimation__WEBPACK_IMPORTED_MODULE_1__["default"], null), this.state.showError ? __jsx("p", null, "If loading takes too long, please refresh the page...") : null);
  }

  componentDidMount() {
    // Start timeout to show the error message
    this.errorTimeout = setTimeout(() => this.setState({
      showError: true
    }), 3000);
  }

  componentWillUnmount() {
    // Remove the timeout when component will be unmounted
    // Otherwise it will still be working in background
    clearTimeout(this.errorTimeout);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./helper/actions/accounts.js":
/*!************************************!*\
  !*** ./helper/actions/accounts.js ***!
  \************************************/
/*! exports provided: fetchAccounts, fetchAccountsStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccounts", function() { return fetchAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccountsStatus", function() { return fetchAccountsStatus; });
/* harmony import */ var api_accounts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/accounts */ "./helper/api/accounts.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./helper/actions/actionTypes.js");


const fetchAccounts = () => async dispatch => {
  try {
    const data = await Object(api_accounts__WEBPACK_IMPORTED_MODULE_0__["getMyAccounts"])();

    if (!data) {
      dispatch(fetchAccountsStatus(false));
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACCOUNTS"],
      data
    });
  } catch (err) {
    dispatch(fetchAccountsStatus(false)); // throw new Error('Accounts fetch failed');
  }
};
const fetchAccountsStatus = status => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACCOUNTS_STATUS"],
  status
});

/***/ }),

/***/ "./helper/actions/actionTypes.js":
/*!***************************************!*\
  !*** ./helper/actions/actionTypes.js ***!
  \***************************************/
/*! exports provided: FETCH_ACCOUNTS, FETCH_ACCOUNTS_STATUS, SET_AUTH_STATUS, FETCH_CARDS, FETCH_CARDS_STATUS, CARD_CHANGE_PIN, CARD_CHANGE_LIMITS, FETCH_MESSAGES, FETCH_MESSAGES_STATUS, MESSAGE_TOGGLE, MESSAGE_REMOVE, FETCH_PROFILE, FETCH_PROFILE_STATUS, USER_CHANGE_DETAILS, FETCH_TRANSFERS, FETCH_TRANSFERS_STATUS, ADD_TRANSFER, FETCH_INITIAL_DATA, FETCH_INITIAL_DATA_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACCOUNTS", function() { return FETCH_ACCOUNTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACCOUNTS_STATUS", function() { return FETCH_ACCOUNTS_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH_STATUS", function() { return SET_AUTH_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS", function() { return FETCH_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CARDS_STATUS", function() { return FETCH_CARDS_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CHANGE_PIN", function() { return CARD_CHANGE_PIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CHANGE_LIMITS", function() { return CARD_CHANGE_LIMITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MESSAGES", function() { return FETCH_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MESSAGES_STATUS", function() { return FETCH_MESSAGES_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_TOGGLE", function() { return MESSAGE_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_REMOVE", function() { return MESSAGE_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROFILE", function() { return FETCH_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROFILE_STATUS", function() { return FETCH_PROFILE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_CHANGE_DETAILS", function() { return USER_CHANGE_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRANSFERS", function() { return FETCH_TRANSFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRANSFERS_STATUS", function() { return FETCH_TRANSFERS_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TRANSFER", function() { return ADD_TRANSFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INITIAL_DATA", function() { return FETCH_INITIAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INITIAL_DATA_STATUS", function() { return FETCH_INITIAL_DATA_STATUS; });
// Accounts
const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
const FETCH_ACCOUNTS_STATUS = 'FETCH_ACCOUNTS_STATUS'; // Auth

const SET_AUTH_STATUS = 'SET_AUTH_STATUS'; // Cards

const FETCH_CARDS = 'FETCH_CARDS';
const FETCH_CARDS_STATUS = 'FETCH_CARDS_STATUS';
const CARD_CHANGE_PIN = 'CARD_CHANGE_PIN';
const CARD_CHANGE_LIMITS = 'CARD_CHANGE_LIMITS'; // Messages

const FETCH_MESSAGES = 'FETCH_MESSAGES';
const FETCH_MESSAGES_STATUS = 'FETCH_MESSAGES_STATUS';
const MESSAGE_TOGGLE = 'MESSAGE_TOGGLE';
const MESSAGE_REMOVE = 'MESSAGE_REMOVE'; // Profile

const FETCH_PROFILE = 'FETCH_PROFILE';
const FETCH_PROFILE_STATUS = 'FETCH_PROFILE_STATUS';
const USER_CHANGE_DETAILS = 'USER_CHANGE_DETAILS'; // Transfers

const FETCH_TRANSFERS = 'FETCH_TRANSFERS';
const FETCH_TRANSFERS_STATUS = 'FETCH_TRANSFERS_STATUS';
const ADD_TRANSFER = 'ADD_TRANSFER'; // Panel

const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
const FETCH_INITIAL_DATA_STATUS = 'FETCH_INITIAL_DATA_STATUS';

/***/ }),

/***/ "./helper/actions/auth.js":
/*!********************************!*\
  !*** ./helper/actions/auth.js ***!
  \********************************/
/*! exports provided: setAuthStatus, login, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthStatus", function() { return setAuthStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var api_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/base */ "./helper/api/base.js");
/* harmony import */ var api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/auth */ "./helper/api/auth.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./helper/actions/actionTypes.js");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");


 // Tools


const setAuthStatus = (status, email = null) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_AUTH_STATUS"],
  status,
  email
}); // Login

const login = data => async dispatch => {
  try {
    const token = await Object(api_auth__WEBPACK_IMPORTED_MODULE_1__["loginUser"])(data);

    if (!token) {
      dispatch(setAuthStatus(false));
      return;
    }

    Object(tools__WEBPACK_IMPORTED_MODULE_3__["setAuthToken"])(token);
    Object(api_base__WEBPACK_IMPORTED_MODULE_0__["updateAPIConfig"])({
      authToken: token
    });
    dispatch(setAuthStatus(true));
  } catch (err) {
    dispatch(setAuthStatus(false));
  }
}; // Register

const register = data => async dispatch => {
  try {
    const user = await Object(api_auth__WEBPACK_IMPORTED_MODULE_1__["registerUser"])(data);

    if (!user) {
      dispatch(setAuthStatus(false));
      return;
    }

    dispatch(setAuthStatus(true));
  } catch (err) {
    dispatch(setAuthStatus(false));
  }
};

/***/ }),

/***/ "./helper/actions/cards.js":
/*!*********************************!*\
  !*** ./helper/actions/cards.js ***!
  \*********************************/
/*! exports provided: fetchCards, fetchCardsStatus, changeCardPin, changeCardLimits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCards", function() { return fetchCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCardsStatus", function() { return fetchCardsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCardPin", function() { return changeCardPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCardLimits", function() { return changeCardLimits; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/cards */ "./helper/api/cards.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Get all user's cards

const fetchCards = () => async dispatch => {
  try {
    const data = await Object(api_cards__WEBPACK_IMPORTED_MODULE_1__["getMyCards"])();

    if (!data) {
      dispatch(fetchCardsStatus(false));
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_CARDS"],
      data
    });
  } catch (err) {
    dispatch(fetchCardsStatus(false));
  }
};
const fetchCardsStatus = status => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_CARDS_STATUS"],
  status
}); // Change card's PIN

const changeCardPin = (id, newPin) => async dispatch => {
  try {
    const card = await Object(api_cards__WEBPACK_IMPORTED_MODULE_1__["changePin"])(id, newPin);

    if (!card) {
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CARD_CHANGE_PIN"],
      id,
      newPin
    });
  } catch (err) {}
}; // Change card's limits

const changeCardLimits = (id, newOnlineLimit, newWithdrawalLimit) => async dispatch => {
  try {
    const limits = {};

    if (newOnlineLimit) {
      limits.dailyOnlineLimit = parseFloat(newOnlineLimit).toFixed(2);
    }

    if (newWithdrawalLimit) {
      limits.dailyWithdrawalLimit = parseFloat(newWithdrawalLimit).toFixed(2);
    }

    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(limits)) {
      const card = await Object(api_cards__WEBPACK_IMPORTED_MODULE_1__["changeLimits"])(id, _objectSpread({}, limits));

      if (!card) {
        return;
      }

      dispatch(_objectSpread({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CARD_CHANGE_LIMITS"],
        id
      }, limits));
    }
  } catch (err) {}
};

/***/ }),

/***/ "./helper/actions/index.js":
/*!*********************************!*\
  !*** ./helper/actions/index.js ***!
  \*********************************/
/*! exports provided: fetchAccounts, fetchAccountsStatus, login, register, setAuthStatus, fetchCards, fetchCardsStatus, changeCardPin, changeCardLimits, fetchMessages, fetchMessagesStatus, messageToggle, messageRemove, fetchProfileStatus, changeUserDetails, fetchTransfers, fetchTransfersStatus, addTransfer, fetchInitialData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts */ "./helper/actions/accounts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchAccounts", function() { return _accounts__WEBPACK_IMPORTED_MODULE_0__["fetchAccounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchAccountsStatus", function() { return _accounts__WEBPACK_IMPORTED_MODULE_0__["fetchAccountsStatus"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./helper/actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAuthStatus", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["setAuthStatus"]; });

/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ "./helper/actions/cards.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCards", function() { return _cards__WEBPACK_IMPORTED_MODULE_2__["fetchCards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCardsStatus", function() { return _cards__WEBPACK_IMPORTED_MODULE_2__["fetchCardsStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeCardPin", function() { return _cards__WEBPACK_IMPORTED_MODULE_2__["changeCardPin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeCardLimits", function() { return _cards__WEBPACK_IMPORTED_MODULE_2__["changeCardLimits"]; });

/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./helper/actions/messages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchMessages", function() { return _messages__WEBPACK_IMPORTED_MODULE_3__["fetchMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchMessagesStatus", function() { return _messages__WEBPACK_IMPORTED_MODULE_3__["fetchMessagesStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageToggle", function() { return _messages__WEBPACK_IMPORTED_MODULE_3__["messageToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageRemove", function() { return _messages__WEBPACK_IMPORTED_MODULE_3__["messageRemove"]; });

/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./helper/actions/profile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProfileStatus", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__["fetchProfileStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeUserDetails", function() { return _profile__WEBPACK_IMPORTED_MODULE_4__["changeUserDetails"]; });

/* harmony import */ var _transfers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfers */ "./helper/actions/transfers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchTransfers", function() { return _transfers__WEBPACK_IMPORTED_MODULE_5__["fetchTransfers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchTransfersStatus", function() { return _transfers__WEBPACK_IMPORTED_MODULE_5__["fetchTransfersStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTransfer", function() { return _transfers__WEBPACK_IMPORTED_MODULE_5__["addTransfer"]; });

/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel */ "./helper/actions/panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchInitialData", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["fetchInitialData"]; });









/***/ }),

/***/ "./helper/actions/messages.js":
/*!************************************!*\
  !*** ./helper/actions/messages.js ***!
  \************************************/
/*! exports provided: fetchMessages, fetchMessagesStatus, messageToggle, messageRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMessages", function() { return fetchMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMessagesStatus", function() { return fetchMessagesStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageToggle", function() { return messageToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageRemove", function() { return messageRemove; });
/* harmony import */ var api_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/messages */ "./helper/api/messages.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./helper/actions/actionTypes.js");

 // Fetch messages

const fetchMessages = () => async dispatch => {
  try {
    // Set status to false on every start, so it can be reusable
    dispatch(fetchMessagesStatus(false));
    const data = await Object(api_messages__WEBPACK_IMPORTED_MODULE_0__["getMyMessages"])();

    if (!data) {
      dispatch(fetchMessagesStatus(false));
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_MESSAGES"],
      data
    });
  } catch (err) {
    dispatch(fetchMessagesStatus(false));
  }
};
const fetchMessagesStatus = status => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_MESSAGES_STATUS"],
  status
}); // Toggle message read

const messageToggle = id => async dispatch => {
  try {
    const message = await Object(api_messages__WEBPACK_IMPORTED_MODULE_0__["toggleMessageRead"])(id);

    if (!message) {
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["MESSAGE_TOGGLE"],
      id
    });
  } catch (err) {}
}; // Remove message

const messageRemove = id => async dispatch => {
  try {
    const message = await Object(api_messages__WEBPACK_IMPORTED_MODULE_0__["removeMessage"])(id);

    if (!message) {
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["MESSAGE_REMOVE"],
      id
    });
  } catch (err) {}
};

/***/ }),

/***/ "./helper/actions/panel.js":
/*!*********************************!*\
  !*** ./helper/actions/panel.js ***!
  \*********************************/
/*! exports provided: setAuthStatus, fetchInitialData, initialDataStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthStatus", function() { return setAuthStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInitialData", function() { return fetchInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialDataStatus", function() { return initialDataStatus; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./helper/actions/actionTypes.js");
/* harmony import */ var tools_getUserInitialData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tools/getUserInitialData */ "./helper/tools/getUserInitialData.js");


const setAuthStatus = (status, email = null) => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH_STATUS"],
  status,
  email
});
const fetchInitialData = () => async dispatch => {
  try {
    const data = await Object(tools_getUserInitialData__WEBPACK_IMPORTED_MODULE_1__["default"])();

    if (!data) {
      dispatch(initialDataStatus(false));
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_PROFILE"],
      data: data.user
    });
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ACCOUNTS"],
      data: data.accounts
    });
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRANSFERS"],
      data: data.transfers
    });
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_CARDS"],
      data: data.cards
    });
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_MESSAGES"],
      data: data.messages
    });
    dispatch(initialDataStatus(true));
  } catch (err) {
    dispatch(initialDataStatus(false));
  }
};
const initialDataStatus = status => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_INITIAL_DATA_STATUS"],
  status
});

/***/ }),

/***/ "./helper/actions/profile.js":
/*!***********************************!*\
  !*** ./helper/actions/profile.js ***!
  \***********************************/
/*! exports provided: getProfile, fetchProfileStatus, changeUserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProfileStatus", function() { return fetchProfileStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserDetails", function() { return changeUserDetails; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/users */ "./helper/api/users.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./helper/actions/actionTypes.js");


 // Get myself

const getProfile = () => async dispatch => {
  try {
    const data = await Object(api_users__WEBPACK_IMPORTED_MODULE_1__["getMyself"])();

    if (!data) {
      dispatch(fetchProfileStatus(false));
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_PROFILE"],
      data
    });
  } catch (err) {
    throw new Error('Accounts fetch failed');
  }
}; // Status

const fetchProfileStatus = status => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_PROFILE_STATUS"],
  status
}); // Change user's details

const changeUserDetails = (email = null, password = null, phone = null) => async dispatch => {
  try {
    const data = {};

    if (email) {
      data.email = email;
    }

    if (password) {
      data.password = password;
    }

    if (phone) {
      data.phone = phone;
    }

    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data)) {
      const user = await Object(api_users__WEBPACK_IMPORTED_MODULE_1__["updateMyself"])(data);

      if (!user) {
        dispatch(fetchProfileStatus(false));
        return;
      }

      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["USER_CHANGE_DETAILS"]
      });
    }
  } catch (err) {
    dispatch(fetchProfileStatus(false));
  }
};

/***/ }),

/***/ "./helper/actions/transfers.js":
/*!*************************************!*\
  !*** ./helper/actions/transfers.js ***!
  \*************************************/
/*! exports provided: fetchTransfers, fetchTransfersStatus, addTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTransfers", function() { return fetchTransfers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTransfersStatus", function() { return fetchTransfersStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransfer", function() { return addTransfer; });
/* harmony import */ var api_transfers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/transfers */ "./helper/api/transfers.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const fetchTransfers = () => async dispatch => {
  try {
    // Set status to false on every start, so it can be reusable
    dispatch(fetchTransfersStatus(false));
    const data = await Object(api_transfers__WEBPACK_IMPORTED_MODULE_0__["getMyTransfers"])();

    if (!data) {
      dispatch(fetchTransfersStatus(false));
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRANSFERS"],
      data
    });
  } catch (err) {
    dispatch(fetchTransfersStatus(false));
  }
};
const fetchTransfersStatus = status => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRANSFERS_STATUS"],
  status
});
const addTransfer = data => async dispatch => {
  try {
    const transData = _objectSpread({}, data, {
      amount: parseFloat(data.amount).toFixed(2),
      date: new Date(),
      payeeAccNumber: parseInt(data.payeeAccNumber, 10),
      payeeSortcode: parseInt(data.payeeSortcode, 10),
      status: 'Done',
      type: 'Transfer'
    });

    const transfer = await Object(api_transfers__WEBPACK_IMPORTED_MODULE_0__["createTransfer"])(transData);

    if (!transfer) {
      dispatch(fetchTransfersStatus(false));
      return;
    }

    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_TRANSFER"],
      data: transData
    });
  } catch (err) {
    dispatch(fetchTransfersStatus(false));
  }
};

/***/ }),

/***/ "./helper/api/accounts.js":
/*!********************************!*\
  !*** ./helper/api/accounts.js ***!
  \********************************/
/*! exports provided: getMyAccounts, getSingleAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyAccounts", function() { return getMyAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleAccount", function() { return getSingleAccount; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Get user's accounts

const getMyAccounts = (params = '') => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/accounts/my/${params}`); // Get single account

const getSingleAccount = id => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/accounts/${id}`);

/***/ }),

/***/ "./helper/api/auth.js":
/*!****************************!*\
  !*** ./helper/api/auth.js ***!
  \****************************/
/*! exports provided: registerUser, loginUser, remindPassword, resetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remindPassword", function() { return remindPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Register user

const registerUser = data => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/auth/register`, 'post', data); // Login a user

const loginUser = data => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/auth/login`, 'post', data); // Remind user's password - send a confirmation link

const remindPassword = data => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/auth/remind-password`, 'post', data); // Send user a new password

const resetPassword = data => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/auth/reset-password`, 'post', data);

/***/ }),

/***/ "./helper/api/base.js":
/*!****************************!*\
  !*** ./helper/api/base.js ***!
  \****************************/
/*! exports provided: getAPIConfig, updateAPIConfig, callAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAPIConfig", function() { return getAPIConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAPIConfig", function() { return updateAPIConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAPI", function() { return callAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const BASE_URL = 'http://localhost:3001';
let config = {
  authToken: ''
};
const getAPIConfig = () => _objectSpread({}, config);
const updateAPIConfig = newConfig => {
  config = _objectSpread({}, config, {}, newConfig);
};
const callAPI = (endpoint, method = 'get', data) => {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method,
      headers: {
        Authorization: `Bearer ${getAPIConfig().authToken}`
      },
      url: `${BASE_URL}${endpoint}`,
      data
    }).then(res => resolve(res.data)).catch(err => {
      reject({
        status: err.response && err.response.status || '',
        message: err.message || ''
      });
    });
  });
};

/***/ }),

/***/ "./helper/api/cards.js":
/*!*****************************!*\
  !*** ./helper/api/cards.js ***!
  \*****************************/
/*! exports provided: getMyCards, getSingleCard, changePin, changeLimits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyCards", function() { return getMyCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCard", function() { return getSingleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePin", function() { return changePin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLimits", function() { return changeLimits; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Get user's cards

const getMyCards = (params = '') => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/cards/my/${params}`); // Get single card

const getSingleCard = id => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/cards/${id}`); // Change card's PIN

const changePin = (id, data) => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/cards/${id}/change-pin`, 'put', data); // Change card's limits

const changeLimits = (id, data) => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/cards/${id}/change-limits`, 'put', data);

/***/ }),

/***/ "./helper/api/messages.js":
/*!********************************!*\
  !*** ./helper/api/messages.js ***!
  \********************************/
/*! exports provided: getMyMessages, getSingleMessage, toggleMessageRead, removeMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyMessages", function() { return getMyMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleMessage", function() { return getSingleMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMessageRead", function() { return toggleMessageRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMessage", function() { return removeMessage; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Get user's messages

const getMyMessages = (params = '') => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/messages/my/${params}`); // Get single message

const getSingleMessage = id => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/messages/${id}`); // Toggle message read

const toggleMessageRead = id => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/messages/${id}/toggle-read`, 'put'); // Remove message

const removeMessage = id => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/messages/${id}`, 'delete');

/***/ }),

/***/ "./helper/api/transfers.js":
/*!*********************************!*\
  !*** ./helper/api/transfers.js ***!
  \*********************************/
/*! exports provided: getMyTransfers, getSingleTransfer, createTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyTransfers", function() { return getMyTransfers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleTransfer", function() { return getSingleTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransfer", function() { return createTransfer; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Get user's transfers

const getMyTransfers = (params = '') => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/transfers/my/${params}`); // Get single transfer

const getSingleTransfer = id => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/transfers/${id}`); // Create a new transfer

const createTransfer = data => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/transfers`, 'post', data);

/***/ }),

/***/ "./helper/api/users.js":
/*!*****************************!*\
  !*** ./helper/api/users.js ***!
  \*****************************/
/*! exports provided: getMyself, updateMyself */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyself", function() { return getMyself; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMyself", function() { return updateMyself; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Get myself

const getMyself = () => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/users/me`); // Update myself

const updateMyself = data => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/users/me`, 'put', data);

/***/ }),

/***/ "./helper/hoc/Layout/index.js":
/*!************************************!*\
  !*** ./helper/hoc/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("main", {
      className: "app container"
    }, this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./helper/hoc/PageContainer/index.js":
/*!*******************************************!*\
  !*** ./helper/hoc/PageContainer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoc_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoc/Layout */ "./helper/hoc/Layout/index.js");
/* harmony import */ var components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Head */ "./components/components/Head/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class PageContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(hoc_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], null), this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageContainer);

/***/ }),

/***/ "./helper/hoc/WithAuth/index.js":
/*!**************************************!*\
  !*** ./helper/hoc/WithAuth/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api/base */ "./helper/api/base.js");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Handle redirects for /login, /register and /panel

const withAuth = WrappedComponent => {
  return class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(ctx) {
      // Tick the time once, so we'll have a
      // valid time before first render
      const token = Object(tools__WEBPACK_IMPORTED_MODULE_6__["auth"])(ctx),
            status = !!token;
      const {
        reduxStore
      } = ctx,
            {
        dispatch
      } = reduxStore;
      Object(api_base__WEBPACK_IMPORTED_MODULE_5__["updateAPIConfig"])({
        authToken: token
      });
      dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["setAuthStatus"](status));
      const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(_objectSpread({}, ctx, {
        serverAuthStatus: status
      })));
      return _objectSpread({}, componentProps, {
        serverAuthStatus: status
      });
    }

    constructor(props) {
      super(props);
      const token = Object(tools__WEBPACK_IMPORTED_MODULE_6__["checkValidToken"])();

      if (token) {
        Object(api_base__WEBPACK_IMPORTED_MODULE_5__["updateAPIConfig"])({
          authToken: token
        });
      }
    }

    componentDidMount() {
      Object(tools__WEBPACK_IMPORTED_MODULE_6__["isValidToken"])().then(token => {
        this.props.setAuthStatus(true);
        this.shouldRedirect(this.props);
      }).catch(() => {
        this.props.setAuthStatus(false);
        this.shouldRedirect(this.props);
      });
    }

    shouldComponentUpdate(nextProps) {
      this.shouldRedirect(nextProps);
      return true;
    }

    shouldRedirect(props) {
      const path = next_router__WEBPACK_IMPORTED_MODULE_1___default.a.pathname; // If we are on login/register and auth is complete, redirect to /panel
      // Otherwise redirect to /login

      if ((path === '/login' || path === '/register') && props.authStatus) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/panel');
      } else if (path.startsWith('/panel') && !props.authStatus) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
      }
    }

    render() {
      return __jsx(WrappedComponent, this.props);
    }

  };
};

const mapStateToProps = state => {
  return {
    authStatus: state.auth.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthStatus: status => dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["setAuthStatus"](status))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps), withAuth));

/***/ }),

/***/ "./helper/hoc/WithRedux/index.js":
/*!***************************************!*\
  !*** ./helper/hoc/WithRedux/index.js ***!
  \***************************************/
/*! exports provided: withRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRedux", function() { return withRedux; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./helper/store/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = _objectWithoutProperties(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store
    }, __jsx(PageComponent, props));
  }; // Make sure people don't use this HOC on _app.js level


  if (true) {
    const isAppHoc = PageComponent === next_app__WEBPACK_IMPORTED_MODULE_3___default.a || PageComponent.prototype instanceof next_app__WEBPACK_IMPORTED_MODULE_3___default.a;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  } // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return _objectSpread({}, pageProps, {
        initialReduxState: reduxStore.getState()
      });
    };
  }

  return WithRedux;
};
let reduxStore;

const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!reduxStore) {
    reduxStore = Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState);
  }

  return reduxStore;
};

/***/ }),

/***/ "./helper/reducers/accounts.js":
/*!*************************************!*\
  !*** ./helper/reducers/accounts.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: [],
  status: true
};

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ACCOUNTS"]:
      return _objectSpread({}, state, {
        data: [...action.data],
        status: true
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ACCOUNTS_STATUS"]:
      return _objectSpread({}, state, {
        status: action.status
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (accounts);

/***/ }),

/***/ "./helper/reducers/auth.js":
/*!*********************************!*\
  !*** ./helper/reducers/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  status: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH_STATUS"]:
      return _objectSpread({}, state, {
        status: action.status
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./helper/reducers/cards.js":
/*!**********************************!*\
  !*** ./helper/reducers/cards.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: [],
  status: true
};

const cards = (state = initialState, action) => {
  let data;
  let foundCard;

  switch (action.type) {
    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_CARDS"]:
      return _objectSpread({}, state, {
        data: [...action.data],
        status: true
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_CARDS_STATUS"]:
      return _objectSpread({}, state, {
        status: action.status
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_CHANGE_PIN"]:
      data = state.data;
      foundCard = data.find(card => card._id === action.id);
      foundCard.pin = action.newPin;
      return _objectSpread({}, state, {
        data: [...data]
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CARD_CHANGE_LIMITS"]:
      data = state.data;
      foundCard = data.find(card => card._id === action.id);
      const newOnlineLimit = action.dailyOnlineLimit;
      const newWithdrawalLimit = action.dailyWithdrawalLimit;

      if (newOnlineLimit) {
        foundCard.dailyOnlineLimit = parseFloat(newOnlineLimit).toFixed(2);
      }

      if (newWithdrawalLimit) {
        foundCard.dailyWithdrawalLimit = parseFloat(newWithdrawalLimit).toFixed(2);
      }

      return _objectSpread({}, state, {
        data: [...data]
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./helper/reducers/index.js":
/*!**********************************!*\
  !*** ./helper/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./helper/reducers/auth.js");
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts */ "./helper/reducers/accounts.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel */ "./helper/reducers/panel.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards */ "./helper/reducers/cards.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./helper/reducers/messages.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile */ "./helper/reducers/profile.js");
/* harmony import */ var _transfers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transfers */ "./helper/reducers/transfers.js");









/* harmony default export */ __webpack_exports__["default"] = (history => Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  // router: connectRouter(history),
  auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"],
  accounts: _accounts__WEBPACK_IMPORTED_MODULE_3__["default"],
  panel: _panel__WEBPACK_IMPORTED_MODULE_4__["default"],
  cards: _cards__WEBPACK_IMPORTED_MODULE_5__["default"],
  messages: _messages__WEBPACK_IMPORTED_MODULE_6__["default"],
  profile: _profile__WEBPACK_IMPORTED_MODULE_7__["default"],
  transfers: _transfers__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./helper/reducers/messages.js":
/*!*************************************!*\
  !*** ./helper/reducers/messages.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: [],
  status: true
};

const messages = (state = initialState, action) => {
  let data;

  switch (action.type) {
    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_MESSAGES"]:
      return _objectSpread({}, state, {
        data: [...action.data],
        status: true
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_MESSAGES_STATUS"]:
      return _objectSpread({}, state, {
        status: action.status
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_TOGGLE"]:
      data = state.data;
      const foundMsg = data.find(msg => msg._id === action.id);
      foundMsg.isRead = !foundMsg.isRead;
      return _objectSpread({}, state, {
        data: [...data]
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_REMOVE"]:
      data = state.data.filter(msg => msg._id !== action.id);
      return _objectSpread({}, state, {
        data: [...data]
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./helper/reducers/panel.js":
/*!**********************************!*\
  !*** ./helper/reducers/panel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  initialDataStatus: false
};

const panel = (state = initialState, action) => {
  switch (action.type) {
    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_INITIAL_DATA_STATUS"]:
      return _objectSpread({}, state, {
        initialDataStatus: action.status
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (panel);

/***/ }),

/***/ "./helper/reducers/profile.js":
/*!************************************!*\
  !*** ./helper/reducers/profile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: {},
  status: true
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_PROFILE"]:
      return _objectSpread({}, state, {
        data: _objectSpread({}, action.data),
        status: true
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_PROFILE_STATUS"]:
      return _objectSpread({}, state, {
        status: action.status
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (profile);

/***/ }),

/***/ "./helper/reducers/transfers.js":
/*!**************************************!*\
  !*** ./helper/reducers/transfers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/actionTypes */ "./helper/actions/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: [],
  status: true
};

const transfers = (state = initialState, action) => {
  switch (action.type) {
    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRANSFERS"]:
      return _objectSpread({}, state, {
        data: [...action.data],
        status: true
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRANSFERS_STATUS"]:
      return _objectSpread({}, state, {
        status: action.status
      });

    case actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_TRANSFER"]:
      return _objectSpread({}, state, {
        data: [...state.data, ...action.data]
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (transfers);

/***/ }),

/***/ "./helper/store/index.js":
/*!*******************************!*\
  !*** ./helper/store/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers */ "./helper/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension/developmentOnly */ "redux-devtools-extension/developmentOnly");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);


 // Activate Redux DevTools only in dev mode



const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a];
function configureStore(initialState) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(reducers__WEBPACK_IMPORTED_MODULE_1__["default"])(), initialState, Object(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)));
  return store;
}

/***/ }),

/***/ "./helper/tools/getUserInitialData.js":
/*!********************************************!*\
  !*** ./helper/tools/getUserInitialData.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var api_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/users */ "./helper/api/users.js");
/* harmony import */ var api_accounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/accounts */ "./helper/api/accounts.js");
/* harmony import */ var api_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! api/cards */ "./helper/api/cards.js");
/* harmony import */ var api_transfers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/transfers */ "./helper/api/transfers.js");
/* harmony import */ var api_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/messages */ "./helper/api/messages.js");




 // Fetch data for all the sections

/* harmony default export */ __webpack_exports__["default"] = (async () => {
  try {
    const data = {
      user: await Object(api_users__WEBPACK_IMPORTED_MODULE_0__["getMyself"])(),
      accounts: await Object(api_accounts__WEBPACK_IMPORTED_MODULE_1__["getMyAccounts"])(),
      cards: await Object(api_cards__WEBPACK_IMPORTED_MODULE_2__["getMyCards"])(),
      transfers: await Object(api_transfers__WEBPACK_IMPORTED_MODULE_3__["getMyTransfers"])(),
      messages: await Object(api_messages__WEBPACK_IMPORTED_MODULE_4__["getMyMessages"])()
    };
    return data;
  } catch (err) {
    throw new Error(err);
  }
});

/***/ }),

/***/ "./helper/tools/index.js":
/*!*******************************!*\
  !*** ./helper/tools/index.js ***!
  \*******************************/
/*! exports provided: myPadStart, chunker, formatDate, getAuthToken, setAuthToken, removeAuthToken, isValidToken, checkValidToken, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myPadStart", function() { return myPadStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunker", function() { return chunker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthToken", function() { return getAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthToken", function() { return setAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAuthToken", function() { return removeAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidToken", function() { return isValidToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidToken", function() { return checkValidToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);




 // Add padding from the start of the current string/number

const myPadStart = (el, targetLength, padString) => {
  return el.toString().padStart(targetLength, padString);
}; // Insert something after every n characters in the string

const chunker = (el, step, string) => {
  const regExp = new RegExp(`.{${step}}`, 'g');
  return el.toString().match(regExp).join(string);
}; // Format date

const formatDate = (date, dateFormat) => date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date), dateFormat); // Token checker

const getAuthToken = () => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('token');
};
const setAuthToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', token);
};
const removeAuthToken = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token');
};
const isValidToken = () => {
  return new Promise((resolve, reject) => {
    const token = checkValidToken();

    if (token) {
      resolve(token);
    } else {
      reject();
    }
  });
};
const checkValidToken = () => {
  const currentTime = Date.now().valueOf() / 1000;
  const token = getAuthToken();

  if (!token) {
    return;
  }

  const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token); // If token expired - remove it

  if (decodedToken.exp < currentTime) {
    removeAuthToken();
    return;
  }

  return token;
};
const auth = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx),
        {
    pathname
  } = ctx;

  if (pathname === '/login') {
    if (!token) {
      return false;
    }

    if (true) {
      ctx.res.writeHead(302, {
        Location: '/panel'
      });
      ctx.res.end();
    } else {}
  } // If there's no token, it means the user is not logged in.


  if (!token) {
    if (true) {
      ctx.res.writeHead(302, {
        Location: '/login'
      });
      ctx.res.end();
    } else {}
  }

  return token;
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var hoc_WithAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/WithAuth */ "./helper/hoc/WithAuth/index.js");
/* harmony import */ var hoc_WithRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoc/WithRedux */ "./helper/hoc/WithRedux/index.js");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
/* harmony import */ var api_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! api/base */ "./helper/api/base.js");
/* harmony import */ var components_Auth_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Auth/Login */ "./components/components/Auth/Login/index.js");
/* harmony import */ var hoc_PageContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoc/PageContainer */ "./helper/hoc/PageContainer/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: false,
      error: null
    });

    _defineProperty(this, "onLoginSubmit", (email, password) => {
      this.setState({
        loading: true,
        error: null
      }); // Dispatch auth action
      // There will be automatic redirect to panel, in HOC

      this.props.login({
        email,
        password
      }).catch(error => this.setState({
        loading: false,
        error
      }));
    });
  }

  render() {
    return __jsx(hoc_PageContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx(components_Auth_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onLoginSubmit: this.onLoginSubmit,
      loading: this.state.loading,
      error: this.state.error
    }))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["login"](data))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(hoc_WithRedux__WEBPACK_IMPORTED_MODULE_4__["withRedux"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Object(hoc_WithAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginPage))));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/binduraj/Documents/GitHub/dollarbank/web_Next/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension/developmentOnly":
/*!***********************************************************!*\
  !*** external "redux-devtools-extension/developmentOnly" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map