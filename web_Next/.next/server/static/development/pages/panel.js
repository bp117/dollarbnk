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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/components/Accounts/List/index.js":
/*!******************************************************!*\
  !*** ./components/components/Accounts/List/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListElement */ "./components/components/Accounts/ListElement/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const AccountsList = ({
  accounts,
  router
}) => {
  // Prepare accounts list
  const accountsList = accounts.map(acc => __jsx(_ListElement__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    key: acc._id
  }, acc, {
    matchUrl: router.asPath
  })));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h1", null, "Accounts"), __jsx("p", null, "You have ", accountsList.length, " accounts"), __jsx("div", {
    className: "list-group"
  }, accountsList));
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(AccountsList)));

/***/ }),

/***/ "./components/components/Accounts/ListElement/index.js":
/*!*************************************************************!*\
  !*** ./components/components/Accounts/ListElement/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AccountsListEl = ({
  matchUrl,
  _id,
  type,
  sortcode,
  currency,
  balance
}) => {
  return __jsx(routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: `${matchUrl}/${_id}`
  }, __jsx("a", {
    className: "list-group-item list-group-item-action"
  }, __jsx("div", {
    className: "d-flex w-100 justify-content-between"
  }, __jsx("h5", {
    className: "mb-1"
  }, type, " account"), __jsx("small", {
    className: "text-muted"
  }, "Active")), __jsx("small", {
    className: "text-muted"
  }, "Sortcode: ", Object(tools__WEBPACK_IMPORTED_MODULE_3__["chunker"])(sortcode, 2, '-'), ", currency: ", currency, ", balance: ", balance, ' ', currency)));
};

AccountsListEl.propTypes = {
  _id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  sortcode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  balance: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (AccountsListEl);

/***/ }),

/***/ "./components/components/Accounts/Single/index.js":
/*!********************************************************!*\
  !*** ./components/components/Accounts/Single/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SingleAccount = ({
  singleAcc
}) => {
  return __jsx("section", {
    className: "module single-account"
  }, __jsx("h1", null, singleAcc.type, " account"), __jsx("ul", null, __jsx("li", null, "Sortcode: ", Object(tools__WEBPACK_IMPORTED_MODULE_2__["chunker"])(singleAcc.sortcode, 2, '-')), __jsx("li", null, "Number: ", singleAcc.number), __jsx("li", null, "Currency: ", singleAcc.currency), __jsx("li", null, "Balance: ", singleAcc.balance, " ", singleAcc.currency)));
};

const mapStateToProps = (state, ownProps) => {
  const accId = ownProps.accId;
  return {
    singleAcc: state.accounts.data.find(el => el._id === accId)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SingleAccount));

/***/ }),

/***/ "./components/components/Cards/LimitsChange/Form.js":
/*!**********************************************************!*\
  !*** ./components/components/Cards/LimitsChange/Form.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Buttons/SingleModuleButton */ "./components/components/UI/Buttons/SingleModuleButton/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const InnerForm = props => {
  const {
    errors,
    touched
  } = props;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "daily-online-limit"
  }, "Enter new daily online limit"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    id: "daily-online-limit",
    className: "form-control",
    name: "dailyOnlineLimit",
    placeholder: "New daily online limit..."
  }), touched.dailyOnlineLimit && errors.dailyOnlineLimit && __jsx("p", null, errors.dailyOnlineLimit)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "daily-withdrawal-limit"
  }, "Enter new daily withdrawal limit"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    id: "daily-withdrawal-limit",
    className: "form-control",
    name: "dailyWithdrawalLimit",
    placeholder: "New daily withdrawal limit..."
  }), touched.dailyWithdrawalLimit && errors.dailyWithdrawalLimit && __jsx("p", null, errors.dailyWithdrawalLimit)), __jsx("p", {
    className: "validation-info"
  }, props.status)), __jsx(components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Change limits",
    type: "submit"
  }));
};

const LimitsChangeForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    dailyOnlineLimit: props.currentOnlineLimit,
    dailyWithdrawalLimit: props.currentWithdrawalLimit
  }),
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    dailyWithdrawalLimit: yup__WEBPACK_IMPORTED_MODULE_2__["number"]().typeError('It must be a number').positive('Please enter a positive number'),
    dailyOnlineLimit: yup__WEBPACK_IMPORTED_MODULE_2__["number"]().typeError('It must be a number').positive('Please enter a positive number')
  }),
  // Submission handler
  handleSubmit: (values, {
    props,
    setStatus
  }) => {
    const {
      dailyOnlineLimit,
      dailyWithdrawalLimit
    } = values;

    if (!dailyOnlineLimit && !dailyWithdrawalLimit) {
      setStatus('No limits changed');
      return;
    }

    setStatus('Sending...');
    props.changeCardLimits(dailyOnlineLimit, dailyWithdrawalLimit).then(data => setStatus('Limits successfully changed!')).catch(error => setStatus('Problems, try again...'));
  }
})(InnerForm);
/* harmony default export */ __webpack_exports__["default"] = (LimitsChangeForm);

/***/ }),

/***/ "./components/components/Cards/LimitsChange/index.js":
/*!***********************************************************!*\
  !*** ./components/components/Cards/LimitsChange/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./components/components/Cards/LimitsChange/Form.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const LimitsChange = props => {
  return __jsx("div", {
    className: "col-sm-6 offset-sm-3"
  }, __jsx("section", {
    className: "module limits-change"
  }, __jsx("h1", null, "Limits change"), __jsx("p", null, __jsx("strong", null, props.singleCard.type, " card")), __jsx("p", null, "Number: ", Object(tools__WEBPACK_IMPORTED_MODULE_3__["chunker"])(props.singleCard.number, 4, '-')), __jsx(_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    changeCardLimits: props.changeCardLimits,
    currentOnlineLimit: props.currentOnlineLimit,
    currentWithdrawalLimit: props.currentWithdrawalLimit
  })));
};

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.accId;
  const singleCard = state.cards.data.find(el => el._id === cardId);
  return {
    singleCard,
    currentOnlineLimit: singleCard.dailyOnlineLimit,
    currentWithdrawalLimit: singleCard.dailyWithdrawalLimit
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const cardId = ownProps.accId;
  return {
    changeCardLimits: (newOnlineLimit, newWithdrawalLimit) => dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["changeCardLimits"](cardId, newOnlineLimit, newWithdrawalLimit))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(LimitsChange));

/***/ }),

/***/ "./components/components/Cards/List/index.js":
/*!***************************************************!*\
  !*** ./components/components/Cards/List/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ListElement */ "./components/components/Cards/ListElement/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const CardsList = ({
  cards,
  router
}) => {
  const cardsList = cards.map(card => __jsx(_ListElement__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    key: card._id
  }, card, {
    matchUrl: router.asPath
  })));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h1", null, "Cards"), __jsx("p", null, "You have ", cardsList.length, " active cards"), __jsx("div", {
    className: "list-group"
  }, cardsList));
};

const mapStateToProps = state => {
  return {
    cards: state.cards.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(CardsList)));

/***/ }),

/***/ "./components/components/Cards/ListElement/index.js":
/*!**********************************************************!*\
  !*** ./components/components/Cards/ListElement/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CardsListEl = props => {
  return __jsx(routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: `${props.matchUrl}/${props._id}`
  }, __jsx("a", {
    className: "list-group-item list-group-item-action"
  }, __jsx("div", {
    className: "d-flex w-100 justify-content-between"
  }, __jsx("h5", {
    className: "mb-1"
  }, "Card"), __jsx("small", {
    className: "text-muted"
  }, "Expires: ", Object(tools__WEBPACK_IMPORTED_MODULE_3__["myPadStart"])(props.expiresMonth, 2, 0), "/", props.expiresYear)), __jsx("p", {
    className: "mb-1"
  }, "Number: ", Object(tools__WEBPACK_IMPORTED_MODULE_3__["chunker"])(props.number, 4, '-')), __jsx("small", {
    className: "text-muted"
  }, "Daily limits: ", props.dailyOnlineLimit, " (online), ", props.dailyWithdrawalLimit, ' ', "(withdrawal)"), __jsx("br", null), __jsx("small", {
    className: "text-muted"
  }, "Monthly limits: ", props.monthlyOnlineLimit, " (online), ", props.monthlyWithdrawalLimit, ' ', "(withdrawal)")));
};

CardsListEl.propTypes = {
  _id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  expiresMonth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  expiresYear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  balance: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (CardsListEl);

/***/ }),

/***/ "./components/components/Cards/PINChange/Form.js":
/*!*******************************************************!*\
  !*** ./components/components/Cards/PINChange/Form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tools_validations_YupCustomValidations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tools/validations/YupCustomValidations */ "./helper/tools/validations/YupCustomValidations.js");
/* harmony import */ var components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Buttons/SingleModuleButton */ "./components/components/UI/Buttons/SingleModuleButton/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const InnerForm = props => {
  const {
    errors,
    touched
  } = props;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "pin"
  }, "Enter new PIN"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    id: "pin",
    className: "form-control",
    name: "pin",
    maxLength: "4",
    placeholder: "Enter new PIN..."
  }), touched.pin && errors.pin && __jsx("p", {
    className: "field-invalid"
  }, errors.pin)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "pin-conf"
  }, "Confirm new PIN"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    id: "pin-conf",
    className: "form-control",
    name: "pinConf",
    maxLength: "4",
    placeholder: "Confirm new PIN..."
  }), touched.pinConf && errors.pinConf && __jsx("p", {
    className: "field-invalid"
  }, errors.pinConf)), __jsx("p", {
    className: "validation-info"
  }, props.status)), __jsx(components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Change PIN",
    type: "submit"
  }));
};

const PINChangeForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    pin: '',
    pinConf: ''
  }),
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    pin: yup__WEBPACK_IMPORTED_MODULE_2__["number"]().typeError('PIN must be a number').positive('Please enter a positive number').integer('PIN must be an integer').length(4, 'PIN must be 4 numbers'),
    pinConf: yup__WEBPACK_IMPORTED_MODULE_2__["number"]() // When PIN has any value, activate pinConf validations
    .when('pin', {
      is: val => val && val.toString().length > 0,
      then: yup__WEBPACK_IMPORTED_MODULE_2__["number"]().required('Please confirm your PIN').typeError('PIN confirmation must be a number').oneOf([yup__WEBPACK_IMPORTED_MODULE_2__["ref"]('pin')], 'PINs must be the same')
    })
  }),
  // Submission handler
  handleSubmit: (values, {
    props,
    setStatus
  }) => {
    const pin = parseInt(values.pin, 10);

    if (!pin) {
      setStatus('No PIN changed');
      return;
    }

    setStatus('Sending...');
    props.changeCardPin(pin).then(data => setStatus('PIN successfully changed!')).catch(error => setStatus('Problems, try again...'));
  }
})(InnerForm);
/* harmony default export */ __webpack_exports__["default"] = (PINChangeForm);

/***/ }),

/***/ "./components/components/Cards/PINChange/index.js":
/*!********************************************************!*\
  !*** ./components/components/Cards/PINChange/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./components/components/Cards/PINChange/Form.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PINChange = props => {
  return __jsx("div", {
    className: "col-sm-6 offset-sm-3"
  }, __jsx("section", {
    className: "module pin-change"
  }, __jsx("h1", null, "PIN change"), __jsx("p", null, __jsx("strong", null, props.singleCard.type, " card")), __jsx("p", null, "Number: ", Object(tools__WEBPACK_IMPORTED_MODULE_3__["chunker"])(props.singleCard.number, 4, '-')), __jsx(_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    changeCardPin: props.changeCardPin
  })));
};

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.accId;
  return {
    singleCard: state.cards.data.find(el => el._id === cardId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const cardId = ownProps.accId;
  return {
    changeCardPin: pin => dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["changeCardPin"](cardId, {
      pin
    }))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PINChange));

/***/ }),

/***/ "./components/components/Cards/Single/index.js":
/*!*****************************************************!*\
  !*** ./components/components/Cards/Single/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Infobox_CardInfobox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Infobox/CardInfobox */ "./components/components/Infobox/CardInfobox/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const SingleCard = ({
  singleCard,
  router
}) => {
  return __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(components_Infobox_CardInfobox__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, singleCard, {
    currentUrl: router.asPath
  }))));
};

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.accId;
  return {
    singleCard: state.cards.data.find(el => el._id === cardId)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(SingleCard)));

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

/***/ "./components/components/Help/Form.js":
/*!********************************************!*\
  !*** ./components/components/Help/Form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Buttons/SingleModuleButton */ "./components/components/UI/Buttons/SingleModuleButton/index.js");
/* harmony import */ var api_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/forms */ "./helper/api/forms.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // API



const InnerForm = props => {
  const {
    errors,
    touched
  } = props;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "name"
  }, "Your name"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    id: "name",
    type: "text",
    className: "form-control",
    name: "name",
    placeholder: "Your name..."
  }), touched.name && errors.name && __jsx("p", {
    className: "field-invalid"
  }, errors.name)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "email"
  }, "Your email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    id: "email",
    type: "email",
    className: "form-control",
    name: "email",
    placeholder: "Your email..."
  }), touched.email && errors.email && __jsx("p", {
    className: "field-invalid"
  }, errors.email)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "subject"
  }, "Subject"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    id: "subject",
    component: "select",
    className: "form-control",
    name: "subject"
  }, __jsx("option", {
    value: "",
    disabled: true
  }, "Choose subject"), __jsx("option", null, "Subject 1"), __jsx("option", null, "Subject 2"), __jsx("option", null, "Subject 3")), touched.subject && errors.subject && __jsx("p", {
    className: "field-invalid"
  }, errors.subject)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "message"
  }, "Message"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    id: "message",
    component: "textarea",
    rows: "6",
    className: "form-control",
    name: "message"
  }), touched.message && errors.message && __jsx("p", {
    className: "field-invalid"
  }, errors.message)), __jsx("p", {
    className: "validation-info"
  }, props.status)), __jsx(components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Send message",
    type: "submit"
  }));
}; // Wrap our form with the using withFormik HoC


const ContactForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    name: '',
    email: '',
    subject: '',
    message: ''
  }),
  // Add a custom validation function (this can be async too!)
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Name is required'),
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Email is required').email('This is not a valid email'),
    subject: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Subject is required'),
    message: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Message is required').min(6, 'Please enter at least 6 characters')
  }),
  // Submission handler
  handleSubmit: (values, {
    props,
    setStatus
  }) => {
    const {
      name,
      email,
      subject,
      message
    } = values;
    setStatus('Sending...');
    Object(api_forms__WEBPACK_IMPORTED_MODULE_4__["sendHelpForm"])({
      name,
      email,
      subject,
      message
    }).then(res => res.data).then(res => setStatus('Your message has been sent')).catch(err => setStatus('Your message has been sent'));
  }
})(InnerForm);
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/components/Help/index.js":
/*!*********************************************!*\
  !*** ./components/components/Help/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/components/Help/Form.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Help = () => __jsx("div", {
  className: "row panel-content"
}, __jsx("div", {
  className: "col-sm-8 offset-sm-2 col-md-6 offset-md-3"
}, __jsx("section", {
  className: "module help"
}, __jsx("h1", null, "Do you need help?"), __jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi natus consectetur illum perferendis commodi neque molestiae recusandae."), __jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi natus consectetur illum perferendis commodi neque molestiae recusandae."), __jsx("h2", null, "Contact us"), __jsx(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], null))));

/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ }),

/***/ "./components/components/Infobox/AccountName/index.js":
/*!************************************************************!*\
  !*** ./components/components/Infobox/AccountName/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./components/components/Infobox/AccountName/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AccountName = () => {
  return __jsx("section", {
    className: "account-name"
  }, __jsx("h3", null, "Classic account"), __jsx("span", null, "Summary for last 7 days"));
};

/* harmony default export */ __webpack_exports__["default"] = (AccountName);

/***/ }),

/***/ "./components/components/Infobox/AccountName/style.scss":
/*!**************************************************************!*\
  !*** ./components/components/Infobox/AccountName/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Infobox/AccountSummary/index.js":
/*!***************************************************************!*\
  !*** ./components/components/Infobox/AccountSummary/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/components/Infobox/AccountSummary/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AccountSummary = props => {
  return __jsx("section", {
    className: "account-summary"
  }, __jsx("section", {
    className: "account-summary-boxes"
  }, __jsx("div", null, __jsx("span", null, "Income"), __jsx("strong", null, "\xA3 ", props.income7Days)), __jsx("div", null, __jsx("span", null, "Expenses"), __jsx("strong", null, "\xA3 ", props.expenses7Days))), __jsx("section", {
    className: "account-summary-total"
  }, __jsx("span", null, "Total"), __jsx("strong", null, "\xA3 ", props.balance)));
};

AccountSummary.propTypes = {
  income7Days: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  expenses7Days: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  balance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (AccountSummary);

/***/ }),

/***/ "./components/components/Infobox/AccountSummary/style.scss":
/*!*****************************************************************!*\
  !*** ./components/components/Infobox/AccountSummary/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Infobox/CardDetails/index.js":
/*!************************************************************!*\
  !*** ./components/components/Infobox/CardDetails/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/components/Infobox/CardDetails/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CardDetails = ({
  number,
  expiresMonth,
  expiresYear
}) => {
  return __jsx("section", {
    className: "card-details"
  }, __jsx("div", {
    className: "card-details-row"
  }, __jsx("div", null, __jsx("span", null, "Card number"), __jsx("p", {
    className: "big"
  }, Object(tools__WEBPACK_IMPORTED_MODULE_2__["chunker"])(number, 4, '-')))), __jsx("div", {
    className: "card-details-row card-details-row-1-2"
  }, __jsx("div", null, __jsx("span", null, "Card holder"), __jsx("p", null, "John Doe")), __jsx("div", null, __jsx("span", null, "Expiration date"), __jsx("p", null, Object(tools__WEBPACK_IMPORTED_MODULE_2__["myPadStart"])(expiresMonth, 2, 0), " / ", expiresYear))));
};

CardDetails.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  expiresMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  expiresYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (CardDetails);

/***/ }),

/***/ "./components/components/Infobox/CardDetails/style.scss":
/*!**************************************************************!*\
  !*** ./components/components/Infobox/CardDetails/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Infobox/CardInfobox/index.js":
/*!************************************************************!*\
  !*** ./components/components/Infobox/CardInfobox/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.scss */ "./components/components/Infobox/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/components/Infobox/CardInfobox/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CardLogos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardLogos */ "./components/components/Infobox/CardLogos/index.js");
/* harmony import */ var _CardDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardDetails */ "./components/components/Infobox/CardDetails/index.js");
/* harmony import */ var _AccountName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AccountName */ "./components/components/Infobox/AccountName/index.js");
/* harmony import */ var _AccountSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AccountSummary */ "./components/components/Infobox/AccountSummary/index.js");
/* harmony import */ var components_UI_Buttons_MultiModuleButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Buttons/MultiModuleButtons */ "./components/components/UI/Buttons/MultiModuleButtons/index.js");
/* harmony import */ var components_UI_Buttons_SingleMultiButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UI/Buttons/SingleMultiButton */ "./components/components/UI/Buttons/SingleMultiButton/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const CardInfobox = ({
  number,
  expiresMonth,
  expiresYear,
  // balance,
  // income7Days,
  // expenses7Days,
  currentUrl
}) => {
  return __jsx("section", {
    className: "module infobox card-infobox"
  }, __jsx("header", null, __jsx(_CardLogos__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "visa"
  }), __jsx(_CardDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
    number: number,
    expiresMonth: expiresMonth,
    expiresYear: expiresYear
  })), __jsx(_AccountName__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_AccountSummary__WEBPACK_IMPORTED_MODULE_7__["default"], {
    balance: 2000,
    income7Days: 3500,
    expenses7Days: 1500
  }), __jsx(components_UI_Buttons_MultiModuleButtons__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(components_UI_Buttons_SingleMultiButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Change PIN",
    route: `${currentUrl}/change-pin`
  }), __jsx(components_UI_Buttons_SingleMultiButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Change limits",
    route: `${currentUrl}/change-limits`
  })));
};

CardInfobox.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  expiresMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  expiresYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  balance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  income7Days: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  expenses7Days: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CardInfobox);

/***/ }),

/***/ "./components/components/Infobox/CardInfobox/style.scss":
/*!**************************************************************!*\
  !*** ./components/components/Infobox/CardInfobox/style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Infobox/CardLogos/card-chip.png":
/*!***************************************************************!*\
  !*** ./components/components/Infobox/CardLogos/card-chip.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/components/Infobox/CardLogos/index.js":
/*!**********************************************************!*\
  !*** ./components/components/Infobox/CardLogos/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/components/Infobox/CardLogos/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card_chip_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-chip.png */ "./components/components/Infobox/CardLogos/card-chip.png");
/* harmony import */ var _card_chip_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_chip_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _visa_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visa-logo.png */ "./components/components/Infobox/CardLogos/visa-logo.png");
/* harmony import */ var _visa_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_visa_logo_png__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CardLogos = props => {
  const cardType = props.type;
  return __jsx("section", {
    className: "card-logos"
  }, __jsx("img", {
    src: _card_chip_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Credit card chip"
  }), __jsx("img", {
    src: cardType === 'visa' ? _visa_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a : _visa_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Credit card logo"
  }));
};

CardLogos.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CardLogos);

/***/ }),

/***/ "./components/components/Infobox/CardLogos/style.scss":
/*!************************************************************!*\
  !*** ./components/components/Infobox/CardLogos/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Infobox/CardLogos/visa-logo.png":
/*!***************************************************************!*\
  !*** ./components/components/Infobox/CardLogos/visa-logo.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/components/Infobox/style.scss":
/*!**************************************************!*\
  !*** ./components/components/Infobox/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Messages/List/index.js":
/*!******************************************************!*\
  !*** ./components/components/Messages/List/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var _ListElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ListElement */ "./components/components/Messages/ListElement/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class MessagesList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "findMessage", () => {
      this.setState({
        search: this.refs.search.value
      });
    });

    this.state = {
      search: ''
    };
  }

  render() {
    // Messages
    // Allow search by message title
    const searchText = this.state.search.toLowerCase();
    const messagesList = this.props.messages.filter(message => message.title.toLowerCase().includes(searchText)).map(message => __jsx(_ListElement__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      key: message._id
    }, message, {
      matchUrl: this.props.router.asPath,
      onToggle: this.props.messageToggle,
      onRemove: this.props.messageRemove
    })));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h1", null, "Messages"), __jsx("p", null, "There are ", this.props.messages.length, " messages in your box"), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      className: "form-control",
      placeholder: "Search for...",
      onChange: this.findMessage,
      ref: "search"
    })), __jsx("div", {
      className: "list-group"
    }, messagesList));
  }

}

const mapStateToProps = state => {
  return {
    messages: state.messages.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    messageToggle: id => dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["messageToggle"](id)),
    messageRemove: id => dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["messageRemove"](id))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(MessagesList)));

/***/ }),

/***/ "./components/components/Messages/ListElement/index.js":
/*!*************************************************************!*\
  !*** ./components/components/Messages/ListElement/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/components/Messages/ListElement/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MessagesListEl extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onCheckboxClick", e => {
      e.preventDefault();
      this.props.onToggle(this.props._id);
    });

    _defineProperty(this, "onButtonClick", e => {
      e.preventDefault();
      this.props.onRemove(this.props._id);
    });
  }

  render() {
    const {
      matchUrl,
      _id,
      title,
      isRead
    } = this.props;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      disabled: isRead
    });
    let date = Object(tools__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.props.sentDate, 'dd/MM/yyyy HH:mm');
    return __jsx(routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      route: `${matchUrl}/${_id}`
    }, __jsx("a", {
      className: `list-group-item list-group-item-action messages-list-item ${classes}`
    }, __jsx("div", {
      className: "message-content"
    }, __jsx("div", {
      className: "d-flex w-100 justify-content-between"
    }, __jsx("h5", {
      className: "mb-1"
    }, title)), __jsx("p", {
      className: "mb-1"
    }, "Date: ", date)), __jsx("aside", null, __jsx("div", {
      className: "checkbox-container",
      onClick: this.onCheckboxClick
    }, __jsx("input", {
      type: "checkbox",
      checked: isRead,
      onChange: e => e.stopPropagation()
    })), __jsx("button", {
      className: "btn btn-danger btn-sm",
      onClick: this.onButtonClick
    }, "Remove"))));
  }

}

MessagesListEl.propTypes = {
  matchUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  _id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (MessagesListEl);

/***/ }),

/***/ "./components/components/Messages/ListElement/style.scss":
/*!***************************************************************!*\
  !*** ./components/components/Messages/ListElement/style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Messages/Single/index.js":
/*!********************************************************!*\
  !*** ./components/components/Messages/Single/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SingleMessage = ({
  singleMessage: {
    title,
    sentDate,
    content
  }
}) => {
  sentDate = Object(tools__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(sentDate, 'dd/MM/yyyy HH:mm');
  return __jsx("section", {
    className: "module single-message"
  }, __jsx("h1", null, title), __jsx("p", null, "Date: ", sentDate), __jsx("hr", null), __jsx("article", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
};

const mapStateToProps = (state, ownProps) => {
  const messageId = ownProps.messageId;
  return {
    singleMessage: state.messages.data.find(el => el._id === messageId)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SingleMessage));

/***/ }),

/***/ "./components/components/Navigation/Header/index.js":
/*!**********************************************************!*\
  !*** ./components/components/Navigation/Header/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/components/Navigation/Header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NavigationHeader = props => {
  return __jsx("header", {
    className: "navigation-header"
  }, __jsx("div", {
    className: "user-profile-box"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/panel/profile"
  }, __jsx("a", null, __jsx("img", {
    src: "https://placehold.it/60x60",
    alt: "User profile"
  }), __jsx("span", null, props.user.firstName, " ", props.user.lastName)))), __jsx("ul", {
    className: "navigation-header-links"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/logout"
  }, __jsx("a", null, "Logout"))), __jsx("li", {
    className: "toggle-menu"
  }, __jsx("button", {
    onClick: props.toggleMobileNav
  }, __jsx("i", {
    className: "ion-navicon-round"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationHeader);

/***/ }),

/***/ "./components/components/Navigation/Header/style.scss":
/*!************************************************************!*\
  !*** ./components/components/Navigation/Header/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Navigation/MainNavigation/index.js":
/*!******************************************************************!*\
  !*** ./components/components/Navigation/MainNavigation/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/ActiveLink */ "./components/containers/ActiveLink/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/components/Navigation/MainNavigation/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MainNavigation = props => {
  let navClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'main-nav': true,
    'navigation-visible': props.isMobileNavVisible
  });
  return __jsx("nav", {
    className: navClasses
  }, __jsx("ul", null, __jsx("li", null, __jsx(containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/panel"
  }, __jsx("a", null, __jsx("div", {
    className: "main-nav-widget"
  }, __jsx("div", {
    className: "main-nav-box"
  }, __jsx("i", {
    className: "ion-home"
  })), __jsx("span", null, "Home"))))), __jsx("li", null, __jsx(containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/panel/accounts"
  }, __jsx("a", null, __jsx("div", {
    className: "main-nav-widget"
  }, __jsx("div", {
    className: "main-nav-box"
  }, __jsx("i", {
    className: "ion-clipboard"
  })), __jsx("span", null, "Accounts"))))), __jsx("li", null, __jsx(containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/panel/transfers"
  }, __jsx("a", null, __jsx("div", {
    className: "main-nav-widget"
  }, __jsx("div", {
    className: "main-nav-box"
  }, __jsx("i", {
    className: "ion-arrow-swap"
  })), __jsx("span", null, "Transfers"))))), __jsx("li", null, __jsx(containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/panel/cards"
  }, __jsx("a", null, __jsx("div", {
    className: "main-nav-widget"
  }, __jsx("div", {
    className: "main-nav-box"
  }, __jsx("i", {
    className: "ion-card"
  })), __jsx("span", null, "Cards"))))), __jsx("li", null, __jsx(containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/panel/messages"
  }, __jsx("a", null, __jsx("div", {
    className: "main-nav-widget"
  }, __jsx("div", {
    className: "main-nav-box"
  }, __jsx("i", {
    className: "ion-chatbox-working"
  })), __jsx("span", null, "Messages"))))), __jsx("li", null, __jsx(containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/panel/profile"
  }, __jsx("a", null, __jsx("div", {
    className: "main-nav-widget"
  }, __jsx("div", {
    className: "main-nav-box"
  }, __jsx("i", {
    className: "ion-person"
  })), __jsx("span", null, "Profile"))))), __jsx("li", null, __jsx(containers_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/panel/help"
  }, __jsx("a", null, __jsx("div", {
    className: "main-nav-widget"
  }, __jsx("div", {
    className: "main-nav-box"
  }, __jsx("i", {
    className: "ion-help"
  })), __jsx("span", null, "Help")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

/***/ }),

/***/ "./components/components/Navigation/MainNavigation/style.scss":
/*!********************************************************************!*\
  !*** ./components/components/Navigation/MainNavigation/style.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Profile/Header/index.js":
/*!*******************************************************!*\
  !*** ./components/components/Profile/Header/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/components/Profile/Header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ProfileHeader = props => {
  const {
    firstName,
    lastName,
    streetAddr,
    postcode,
    city,
    email
  } = props.profile;
  let createdAt = Object(tools__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(props.profile.createdAt, 'dd/MM/yyyy HH:mm');
  return __jsx("header", {
    className: "profile-header"
  }, __jsx("div", {
    className: "profile-user-info"
  }, __jsx("h3", null, firstName, " ", lastName), __jsx("p", null, streetAddr, ", ", postcode, " ", city), __jsx("p", null, __jsx("strong", null, "Email: "), " ", email), __jsx("p", null, __jsx("strong", null, "Registered on"), " ", createdAt)), __jsx("img", {
    src: "https://placehold.it/200x200",
    alt: `${firstName} ${lastName} profile`
  }));
};

ProfileHeader.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

/***/ "./components/components/Profile/Header/style.scss":
/*!*********************************************************!*\
  !*** ./components/components/Profile/Header/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Profile/Links/index.js":
/*!******************************************************!*\
  !*** ./components/components/Profile/Links/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/components/Profile/Links/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ProfileLinks = props => {
  const links = props.links.map((link, index) => {
    return __jsx(SingleLink, {
      key: index,
      href: link.href,
      text: link.text,
      icon: link.icon
    });
  });
  return __jsx("section", {
    className: "profile-links"
  }, links);
};

ProfileLinks.propTypes = {
  links: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

const SingleLink = props => {
  return __jsx(routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: props.href
  }, __jsx("a", null, __jsx("i", {
    className: props.icon
  }), __jsx("span", null, props.text)));
};

SingleLink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileLinks);

/***/ }),

/***/ "./components/components/Profile/Links/style.scss":
/*!********************************************************!*\
  !*** ./components/components/Profile/Links/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Profile/Stats/index.js":
/*!******************************************************!*\
  !*** ./components/components/Profile/Stats/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./components/components/Profile/Stats/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProfileStats = ({
  stats
}) => {
  return __jsx("section", {
    className: "profile-stats"
  }, __jsx("div", {
    className: "stats-accounts"
  }, __jsx("strong", null, stats.accsDetails.count), __jsx("span", null, "Accounts")), __jsx("div", {
    className: "stats-balance"
  }, __jsx("strong", null, stats.accsDetails.balance), __jsx("span", null, "Balance")), __jsx("div", {
    className: "stats-messages"
  }, __jsx("strong", null, stats.messagesCount), __jsx("span", null, "Messages")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileStats);

/***/ }),

/***/ "./components/components/Profile/Stats/style.scss":
/*!********************************************************!*\
  !*** ./components/components/Profile/Stats/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Transfers/List/index.js":
/*!*******************************************************!*\
  !*** ./components/components/Transfers/List/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ListElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ListElement */ "./components/components/Transfers/ListElement/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class TransfersList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "findTransfer", () => {
      this.setState({
        search: this.refs.search.value
      });
    });

    this.state = {
      search: ''
    };
  }

  render() {
    // Allow filtering by payee's name or transfer reference
    const searchText = this.state.search.toLowerCase();
    const transfersList = this.props.transfers.filter(trans => trans.payeeName.toLowerCase().includes(searchText) || trans.reference.toLowerCase().includes(searchText)).map(trans => __jsx(_ListElement__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      key: trans._id
    }, trans, {
      matchUrl: this.props.router.asPath
    })));
    return __jsx("div", null, __jsx("h1", null, "Transfers"), __jsx("p", null, "There are ", this.props.transfers.length, " transfers right now!"), __jsx("p", null, __jsx(routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      route: `${this.props.router.asPath}/new`
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "New transfer"))), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      className: "form-control",
      placeholder: "Search for (payee/reference)...",
      onChange: this.findTransfer,
      ref: "search"
    })), __jsx("div", {
      className: "list-group"
    }, transfersList));
  }

}

const mapStateToProps = state => {
  return {
    transfers: state.transfers.data,
    transfersCount: 20 // FAKE IT: better API needed

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(TransfersList)));

/***/ }),

/***/ "./components/components/Transfers/ListElement/index.js":
/*!**************************************************************!*\
  !*** ./components/components/Transfers/ListElement/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const TransfersListEl = ({
  matchUrl,
  _id,
  type,
  payeeName,
  date,
  amount,
  status,
  reference
}) => {
  date = Object(tools__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, 'dd/MM/yyyy HH:mm');
  return __jsx(routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: `${matchUrl}/${_id}`
  }, __jsx("a", {
    className: "list-group-item list-group-item-action"
  }, __jsx("div", {
    className: "d-flex w-100 justify-content-between"
  }, __jsx("h5", {
    className: "mb-1"
  }, type, " transfer"), __jsx("small", {
    className: "text-muted"
  }, "status: ", status)), __jsx("p", {
    className: "mb-1"
  }, __jsx("b", null, "Payee:"), " ", payeeName, " / ", __jsx("b", null, "date:"), " ", date, " / ", __jsx("b", null, "amount:"), " ", amount), __jsx("small", {
    className: "text-muted"
  }, "Reference: ", reference)));
};

TransfersListEl.propTypes = {
  matchUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  _id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  payeeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  status: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TransfersListEl);

/***/ }),

/***/ "./components/components/Transfers/New/Form.js":
/*!*****************************************************!*\
  !*** ./components/components/Transfers/New/Form.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Buttons/SingleModuleButton */ "./components/components/UI/Buttons/SingleModuleButton/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validations */ "./components/components/Transfers/New/validations.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const InnerForm = props => {
  const {
    errors,
    touched
  } = props;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "source-account"
  }, "Choose your account"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: "select",
    className: "form-control",
    id: "source-account",
    name: "sourceAccountId",
    placeholder: "Your new email..."
  }, props.userAccountsList), touched.sourceAccountId && errors.sourceAccountId && __jsx("p", null, errors.sourceAccountId)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "payee-acc-number"
  }, "Recipient's account number"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: "form-control",
    id: "payee-acc-number",
    name: "payeeAccNumber",
    maxLength: "8",
    placeholder: "Recipient's account number..."
  }), touched.payeeAccNumber && errors.payeeAccNumber && __jsx("p", {
    className: "field-invalid"
  }, errors.payeeAccNumber)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "payee-sort-code"
  }, "Recipient's sort code"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: "form-control",
    id: "payee-sort-code",
    name: "payeeSortcode",
    maxLength: "6",
    placeholder: "Recipient's sort code..."
  }), touched.payeeSortcode && errors.payeeSortcode && __jsx("p", {
    className: "field-invalid"
  }, errors.payeeSortcode)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "payee-name"
  }, "Recipient's name"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: "form-control",
    id: "payee-name",
    name: "payeeName",
    placeholder: "Recipient's name..."
  }), touched.payeeName && errors.payeeName && __jsx("p", {
    className: "field-invalid"
  }, errors.payeeName)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "payee-address"
  }, "Recipient's address"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: "textarea",
    className: "form-control",
    id: "payee-address",
    name: "payeeAddress",
    rows: "4",
    placeholder: "Recipient's address..."
  }), touched.payeeAddress && errors.payeeAddress && __jsx("p", {
    className: "field-invalid"
  }, errors.payeeAddress)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "reference"
  }, "Reference"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: "form-control",
    id: "reference",
    name: "reference",
    maxLength: "50",
    placeholder: "Reference..."
  }), touched.reference && errors.reference && __jsx("p", {
    className: "field-invalid"
  }, errors.reference)), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "amount"
  }, "Amount"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    className: "form-control",
    id: "amount",
    name: "amount",
    placeholder: "Amount..."
  }), touched.amount && errors.amount && __jsx("p", {
    className: "field-invalid"
  }, errors.amount)), __jsx("p", {
    className: "validation-info"
  }, props.status)), __jsx(components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Confirm transfer",
    type: "submit"
  }));
}; // Wrap our form with the using withFormik HoC


const NewTransferForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    sourceAccountId: props.firstAccId,
    payeeAccNumber: '',
    payeeSortcode: '',
    payeeName: '',
    payeeAddress: '',
    reference: '',
    amount: ''
  }),
  validationSchema: _validations__WEBPACK_IMPORTED_MODULE_3__["default"],
  // Submission handler
  handleSubmit: (values, {
    props,
    setStatus
  }) => {
    // Prepare some data for API
    const data = _objectSpread({}, values, {
      sender: props.userId,
      recipient: props.userId
    });

    setStatus('Sending...');
    props.addTransfer(data).then(data => setStatus('Transfer done!')).catch(error => setStatus('Problems, try again...'));
  }
})(InnerForm);
/* harmony default export */ __webpack_exports__["default"] = (NewTransferForm);

/***/ }),

/***/ "./components/components/Transfers/New/index.js":
/*!******************************************************!*\
  !*** ./components/components/Transfers/New/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ "./components/components/Transfers/New/Form.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class NewTransfer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const accounts = this.props.accounts;
    const firstAccId = accounts[0]._id;
    const userAccountsList = accounts.map(acc => __jsx("option", {
      key: acc._id,
      value: acc._id
    }, `${acc.type}, ${acc.sortcode}, ${acc.balance} ${acc.currency}`));
    return __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-sm-8 offset-sm-2 col-md-6 offset-md-3"
    }, __jsx("section", {
      className: "module new-transfer"
    }, __jsx("h1", null, "New transfer"), __jsx(_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userId: this.props.userId,
      userAccountsList: userAccountsList,
      firstAccId: firstAccId,
      addTransfer: this.props.addTransfer
    }))));
  }

}

const mapStateToProps = state => {
  return {
    accounts: state.accounts.data,
    userId: state.profile.data._id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTransfer: data => dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["addTransfer"](data))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NewTransfer));

/***/ }),

/***/ "./components/components/Transfers/New/validations.js":
/*!************************************************************!*\
  !*** ./components/components/Transfers/New/validations.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tools_validations_YupCustomValidations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tools/validations/YupCustomValidations */ "./helper/tools/validations/YupCustomValidations.js");

 // New transfer validations

/* harmony default export */ __webpack_exports__["default"] = (yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  sourceAccountId: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Please select the account'),
  payeeAccNumber: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Please enter the account number').typeError('Account must be a number').positive('Account must be a positive number').integer('Account must be an integer').length(8, 'Account must be 8 numbers'),
  payeeSortcode: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Please enter the sort code').typeError('Sort code must be a number').positive('Sort code must be a positive number').integer('Sort code must be an integer').length(6, 'Sort code must be 6 numbers'),
  payeeName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Please enter the name').min(2, 'Name must be at least 2 characters').max(50, 'Name must be a maximum of 50 characters'),
  payeeAddress: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Please enter the address').min(3, 'Address must be at least 3 characters').max(200, 'Address must be a maximum of 50 characters'),
  reference: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Please enter the reference').min(2, 'Reference must be at least 2 characters').max(50, 'Reference must be a maximum of 50 characters'),
  amount: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Please enter the amount').typeError('Amount must be a number').positive('Amount must be a positive number')
}));

/***/ }),

/***/ "./components/components/Transfers/Single/index.js":
/*!*********************************************************!*\
  !*** ./components/components/Transfers/Single/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SingleTransfer = ({
  singleTrans: {
    type,
    date,
    payeeName,
    amount,
    status
  }
}) => {
  date = Object(tools__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'dd/MM/yyyy HH:mm');
  return __jsx("section", {
    className: "module single-transfer"
  }, __jsx("h1", null, type), __jsx("ul", null, __jsx("li", null, "Date: ", date), __jsx("li", null, "Payee: ", payeeName), __jsx("li", null, "Amount: ", amount), __jsx("li", null, "Type: ", type), __jsx("li", null, "Status: ", status)));
};

const mapStateToProps = (state, ownProps) => {
  const transId = ownProps.accId;
  return {
    singleTrans: state.transfers.data.find(el => el._id === transId)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SingleTransfer));

/***/ }),

/***/ "./components/components/UI/Buttons/MultiModuleButtons/index.js":
/*!**********************************************************************!*\
  !*** ./components/components/UI/Buttons/MultiModuleButtons/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.scss */ "./components/components/UI/Buttons/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/components/UI/Buttons/MultiModuleButtons/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MultiModuleButtons = props => {
  return __jsx("div", {
    className: "multi-module-btns"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (MultiModuleButtons);

/***/ }),

/***/ "./components/components/UI/Buttons/MultiModuleButtons/style.scss":
/*!************************************************************************!*\
  !*** ./components/components/UI/Buttons/MultiModuleButtons/style.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./components/components/UI/Buttons/SingleMultiButton/index.js":
/*!*********************************************************************!*\
  !*** ./components/components/UI/Buttons/SingleMultiButton/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SingleMultiButton = props => {
  const btnType = props.type ? props.type : 'button';
  if (props.href) return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.href
  }, __jsx("a", {
    className: "btn btn-primary"
  }, props.text));
  if (props.route) return __jsx(routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: props.route
  }, __jsx("a", {
    className: "btn btn-primary"
  }, props.text));
  return __jsx("button", {
    className: "btn btn-primary",
    type: btnType
  }, props.text);
};

SingleMultiButton.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SingleMultiButton);

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

/***/ "./components/components/Widgets/Charts/IncomeChart/index.js":
/*!*******************************************************************!*\
  !*** ./components/components/Widgets/Charts/IncomeChart/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/components/Widgets/Charts/IncomeChart/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const IncomeChart = props => {
  return __jsx("div", {
    className: "income-chart-container"
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], null, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["AreaChart"], {
    data: props.data,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }, __jsx("defs", null, __jsx("linearGradient", {
    id: "colorIncome",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, __jsx("stop", {
    offset: "5%",
    stopColor: "#82ca9d",
    stopOpacity: 0.8
  }), __jsx("stop", {
    offset: "95%",
    stopColor: "#82ca9d",
    stopOpacity: 0
  })), __jsx("linearGradient", {
    id: "colorExpenses",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, __jsx("stop", {
    offset: "5%",
    stopColor: "#8884d8",
    stopOpacity: 0.8
  }), __jsx("stop", {
    offset: "95%",
    stopColor: "#8884d8",
    stopOpacity: 0
  }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
    dataKey: "date"
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["CartesianGrid"], {
    strokeDasharray: "3 3"
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    separator: ": "
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Legend"], {
    verticalAlign: "top",
    height: 36
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
    type: "monotone",
    dataKey: "income",
    stroke: "#82ca9d",
    fillOpacity: 1,
    fill: "url(#colorIncome)"
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
    type: "monotone",
    dataKey: "expenses",
    stroke: "#8884d8",
    fillOpacity: 1,
    fill: "url(#colorExpenses)"
  }))));
};

IncomeChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (IncomeChart);

/***/ }),

/***/ "./components/components/Widgets/Charts/IncomeChart/style.scss":
/*!*********************************************************************!*\
  !*** ./components/components/Widgets/Charts/IncomeChart/style.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Widgets/IconedList/ListContainer/index.js":
/*!*************************************************************************!*\
  !*** ./components/components/Widgets/IconedList/ListContainer/index.js ***!
  \*************************************************************************/
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Change default <div> container to <a> if a link is requested

const ListContainer = props => {
  return props.href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.href
  }, __jsx("a", null, props.children)) : __jsx("div", null, props.children);
};

ListContainer.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ListContainer);

/***/ }),

/***/ "./components/components/Widgets/IconedList/ListItem/index.js":
/*!********************************************************************!*\
  !*** ./components/components/Widgets/IconedList/ListItem/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListContainer */ "./components/components/Widgets/IconedList/ListContainer/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Single list item

const SingleListItem = props => {
  // Default type: comment
  const listType = props.type ? props.type : 'comment';
  return __jsx("li", {
    className: `list-type-${listType}`
  }, __jsx(_ListContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: props.href
  }, __jsx("span", {
    className: "list-title",
    dangerouslySetInnerHTML: {
      __html: props.title
    }
  }), __jsx("span", {
    className: "list-subtitle"
  }, props.subtitle)));
};

SingleListItem.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SingleListItem);

/***/ }),

/***/ "./components/components/Widgets/IconedList/index.js":
/*!***********************************************************!*\
  !*** ./components/components/Widgets/IconedList/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/components/Widgets/IconedList/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItem */ "./components/components/Widgets/IconedList/ListItem/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const IconedList = props => {
  // Prepare list items
  const listItems = props.items.map((item, index) => {
    const listData = Object.assign({}, item);
    return __jsx(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: index
    }, listData));
  }); // Show list

  return __jsx("section", {
    className: "module iconed-list"
  }, __jsx("ul", null, listItems));
};

IconedList.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (IconedList);

/***/ }),

/***/ "./components/components/Widgets/IconedList/style.scss":
/*!*************************************************************!*\
  !*** ./components/components/Widgets/IconedList/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/components/Widgets/IncomeStats/index.js":
/*!************************************************************!*\
  !*** ./components/components/Widgets/IncomeStats/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var api_stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! api/stats */ "./helper/api/stats.js");
/* harmony import */ var components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Loader */ "./components/components/UI/Loader/index.js");
/* harmony import */ var _Charts_IncomeChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Charts/IncomeChart */ "./components/components/Widgets/Charts/IncomeChart/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class IncomeStats extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      accDetails: {},
      chartData: [],
      loaded: false
    });
  }

  // Get account stats for the last 30 days
  // For the first user's account
  componentDidMount() {
    Object(api_stats__WEBPACK_IMPORTED_MODULE_2__["getStats"])(this.props.firstAccount._id, 30).then(({
      accDetails,
      data
    }) => {
      this.setState({
        accDetails,
        chartData: data,
        loaded: true
      });
    }).catch(err => this.setState({
      loaded: false
    }));
  }

  render() {
    if (!this.state.loaded) {
      return __jsx(components_UI_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    } else {
      return __jsx("section", {
        className: "module stats-widget"
      }, __jsx("h3", null, "Income change stats (30 days)"), __jsx("p", null, __jsx("strong", null, this.state.accDetails.type, " account"), ' / ', this.state.accDetails.currency.toUpperCase(), ' / ', this.state.accDetails.number), __jsx(_Charts_IncomeChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.chartData
      }));
    }
  }

}

const mapStateToProps = state => {
  return {
    firstAccount: state.accounts.data[0]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(IncomeStats));

/***/ }),

/***/ "./components/components/Widgets/SingleMessage/index.js":
/*!**************************************************************!*\
  !*** ./components/components/Widgets/SingleMessage/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Buttons_MultiModuleButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Buttons/MultiModuleButtons */ "./components/components/UI/Buttons/MultiModuleButtons/index.js");
/* harmony import */ var components_UI_Buttons_SingleMultiButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Buttons/SingleMultiButton */ "./components/components/UI/Buttons/SingleMultiButton/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/components/Widgets/SingleMessage/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SingleMessage = props => {
  return __jsx("section", {
    className: "module message"
  }, __jsx("header", {
    className: "message-header"
  }, __jsx("h3", null, props.title), __jsx("div", {
    className: "message-sender-info"
  }, __jsx("img", {
    src: "https://placehold.it/82x82",
    alt: "Sender profile"
  }), __jsx("div", null, __jsx("span", null, props.sender), __jsx("strong", null, "to ", props.recipient)))), __jsx("article", {
    dangerouslySetInnerHTML: {
      __html: props.content
    }
  }), __jsx(components_UI_Buttons_MultiModuleButtons__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(components_UI_Buttons_SingleMultiButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Cancel",
    href: "#"
  }), __jsx(components_UI_Buttons_SingleMultiButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Reply"
  })));
};

SingleMessage.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  recipient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SingleMessage);

/***/ }),

/***/ "./components/components/Widgets/SingleMessage/style.scss":
/*!****************************************************************!*\
  !*** ./components/components/Widgets/SingleMessage/style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/containers/Accounts/index.js":
/*!*************************************************!*\
  !*** ./components/containers/Accounts/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Accounts_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Accounts/List */ "./components/components/Accounts/List/index.js");
/* harmony import */ var components_Accounts_Single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Accounts/Single */ "./components/components/Accounts/Single/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Accounts = ({
  query = {}
}) => {
  const subModule = getSubModule(query);
  return __jsx("div", {
    className: "row panel-content"
  }, __jsx("div", {
    className: "col"
  }, subModule));
};

function getSubModule(query) {
  const {
    accId = 'accId'
  } = query;

  switch (accId) {
    case 'accId':
      return __jsx(components_Accounts_List__WEBPACK_IMPORTED_MODULE_1__["default"], null);
      break;

    default:
      return __jsx(components_Accounts_Single__WEBPACK_IMPORTED_MODULE_2__["default"], {
        accId
      });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Accounts);

/***/ }),

/***/ "./components/containers/ActiveLink/index.js":
/*!***************************************************!*\
  !*** ./components/containers/ActiveLink/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routes */ "./routes.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  const activeClassName = props.activeClassName || 'active';
  let className = child.props.className || '';

  if (router.asPath === props.href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  const route = props.href;
  delete props.activeClassName;
  delete props.href;
  return __jsx(routes__WEBPACK_IMPORTED_MODULE_1__["Link"], _objectSpread({}, props, {
    route
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/containers/Cards/index.js":
/*!**********************************************!*\
  !*** ./components/containers/Cards/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Cards_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Cards/List */ "./components/components/Cards/List/index.js");
/* harmony import */ var components_Cards_Single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Cards/Single */ "./components/components/Cards/Single/index.js");
/* harmony import */ var components_Cards_PINChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Cards/PINChange */ "./components/components/Cards/PINChange/index.js");
/* harmony import */ var components_Cards_LimitsChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Cards/LimitsChange */ "./components/components/Cards/LimitsChange/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Cards = ({
  query
}) => {
  const subModule = getSubModule(query);
  return __jsx("div", {
    className: "row panel-content"
  }, __jsx("div", {
    className: "col"
  }, subModule));
};

function getSubModule(query) {
  const {
    accId = 'accId',
    changeId
  } = query;

  switch (accId) {
    case 'accId':
      return __jsx(components_Cards_List__WEBPACK_IMPORTED_MODULE_1__["default"], null);
      break;

    default:
      if (changeId === 'change-pin') return __jsx(components_Cards_PINChange__WEBPACK_IMPORTED_MODULE_3__["default"], {
        accId
      });
      if (changeId === 'change-limits') return __jsx(components_Cards_LimitsChange__WEBPACK_IMPORTED_MODULE_4__["default"], {
        accId
      });
      return __jsx(components_Cards_Single__WEBPACK_IMPORTED_MODULE_2__["default"], {
        accId
      });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./components/containers/Messages/index.js":
/*!*************************************************!*\
  !*** ./components/containers/Messages/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Messages_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Messages/List */ "./components/components/Messages/List/index.js");
/* harmony import */ var components_Messages_Single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Messages/Single */ "./components/components/Messages/Single/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Messages = ({
  query
}) => {
  const subModule = getSubModule(query);
  return __jsx("div", {
    className: "row panel-content"
  }, __jsx("div", {
    className: "col"
  }, subModule));
};

function getSubModule(query) {
  const messageId = query.accId || 'messageId';

  switch (messageId) {
    case 'messageId':
      return __jsx(components_Messages_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
        messageId
      });
      break;

    default:
      return __jsx(components_Messages_Single__WEBPACK_IMPORTED_MODULE_2__["default"], {
        messageId
      });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./components/containers/Navigation/index.js":
/*!***************************************************!*\
  !*** ./components/containers/Navigation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Navigation_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Navigation/Header */ "./components/components/Navigation/Header/index.js");
/* harmony import */ var components_Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navigation/MainNavigation */ "./components/components/Navigation/MainNavigation/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isMobileNavVisible: false
    });

    _defineProperty(this, "toggleMobileNav", () => {
      this.setState(prevState => ({
        isMobileNavVisible: !prevState.isMobileNavVisible
      }));
    });
  }

  render() {
    return __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("section", {
      className: "module navigation"
    }, __jsx(components_Navigation_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toggleMobileNav: this.toggleMobileNav,
      user: this.props.user
    }), __jsx(components_Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isMobileNavVisible: this.state.isMobileNavVisible
    }))));
  }

}

const mapStateToProps = state => {
  return {
    user: state.profile.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Navigation));

/***/ }),

/***/ "./components/containers/Panel/Intro/index.js":
/*!****************************************************!*\
  !*** ./components/containers/Panel/Intro/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Widgets_IncomeStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Widgets/IncomeStats */ "./components/components/Widgets/IncomeStats/index.js");
/* harmony import */ var components_Widgets_IconedList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Widgets/IconedList */ "./components/components/Widgets/IconedList/index.js");
/* harmony import */ var components_Widgets_SingleMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Widgets/SingleMessage */ "./components/components/Widgets/SingleMessage/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const data = {
  listData: [{
    type: '',
    href: '/panel/accounts',
    title: '<strong>John Doe</strong> added new image',
    subtitle: '34 minutes ago'
  }, {
    type: 'image',
    href: '',
    title: '<strong>John Doe</strong> added new image',
    subtitle: '34 minutes ago'
  }],
  messageData: {
    title: 'Make logo smaller, trust me!',
    sender: 'Johny Depp, johnyd@symu.co',
    recipient: 'jakub.jurkian@example.com',
    content: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, laboriosam.</p><p>Qui porro voluptatibus nisi tempore nam deleniti quo. Porro, nulla.</p>'
  }
};

const PanelHome = ({
  user
}) => {
  return __jsx("div", {
    className: "row panel-content"
  }, __jsx("div", {
    className: "col-md-12"
  }, __jsx("h1", null, "Welcome ", user.firstName, " ", user.lastName)), __jsx("div", {
    className: "col-md-8"
  }, __jsx(components_Widgets_IncomeStats__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx("div", {
    className: "col-md-4"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6 col-md-12"
  }, __jsx(components_Widgets_IconedList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: data.listData
  })), __jsx("div", {
    className: "col-sm-6 col-md-12"
  }, __jsx(components_Widgets_SingleMessage__WEBPACK_IMPORTED_MODULE_4__["default"], data.messageData)))));
};

const mapStateToProps = state => {
  return {
    user: state.profile.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(PanelHome));

/***/ }),

/***/ "./components/containers/Profile/ChangeDetails/Form.js":
/*!*************************************************************!*\
  !*** ./components/containers/Profile/ChangeDetails/Form.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Buttons/SingleModuleButton */ "./components/components/UI/Buttons/SingleModuleButton/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const InnerForm = props => {
  const {
    errors,
    touched
  } = props;
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", null, __jsx("p", null, "If you want to change email, please contact the administrator."), __jsx("p", null, "Below you can change your password"), __jsx("div", {
    className: "form-group"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "email",
    className: "form-control login-input",
    name: "email",
    disabled: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    className: "form-control password-input",
    name: "password",
    placeholder: "Enter new password..."
  }), touched.password && errors.password && __jsx("p", {
    className: "field-invalid"
  }, errors.password)), __jsx("p", {
    className: "validation-info"
  }, props.status)), __jsx(components_UI_Buttons_SingleModuleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "Save details",
    type: "submit"
  }));
}; // Wrap our form with the using withFormik HoC


const ChangeDetailsForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    email: props.userEmail,
    password: ''
  }),
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email('This is not a valid email'),
    password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(6, 'Your password has to be at least 6 characters')
  }),
  // Submission handler
  handleSubmit: (values, {
    props,
    setStatus
  }) => {
    const {
      email,
      password
    } = values;

    if (!password) {
      setStatus('No details changed');
      return;
    }

    setStatus('Sending...');
    props.changeUserDetails(email, password).then(() => setStatus('Details successfully changed!')).catch(error => setStatus('Problems... please log out and try again'));
  }
})(InnerForm);
/* harmony default export */ __webpack_exports__["default"] = (ChangeDetailsForm);

/***/ }),

/***/ "./components/containers/Profile/ChangeDetails/index.js":
/*!**************************************************************!*\
  !*** ./components/containers/Profile/ChangeDetails/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var components_UI_FormBoxes_Small__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/FormBoxes/Small */ "./components/components/UI/FormBoxes/Small/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./components/containers/Profile/ChangeDetails/Form.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ProfileChangeDetails = props => {
  return __jsx("div", {
    className: "row panel-content"
  }, __jsx("div", {
    className: "col"
  }, __jsx(components_UI_FormBoxes_Small__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    changeUserDetails: props.changeUserDetails,
    userEmail: props.userEmail
  }))));
};

const mapStateToProps = state => {
  return {
    userEmail: state.profile.data.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserDetails: (newEmail, newPassword) => dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["changeUserDetails"](newEmail, newPassword))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProfileChangeDetails));

/***/ }),

/***/ "./components/containers/Profile/index.js":
/*!************************************************!*\
  !*** ./components/containers/Profile/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./components/containers/Profile/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Profile_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Profile/Header */ "./components/components/Profile/Header/index.js");
/* harmony import */ var components_Profile_Stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Profile/Stats */ "./components/components/Profile/Stats/index.js");
/* harmony import */ var components_Profile_Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Profile/Links */ "./components/components/Profile/Links/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Profile = props => {
  const links = [{
    href: '/panel/transfers',
    text: 'Transfers',
    icon: 'ion-card'
  }, {
    href: '/panel/change-details',
    text: 'Change details',
    icon: 'ion-android-checkbox-outline'
  }];
  return __jsx("div", {
    className: "row panel-content"
  }, __jsx("div", {
    className: "col"
  }, __jsx("section", {
    className: "module profile"
  }, __jsx(components_Profile_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    profile: props.profile
  }), __jsx(components_Profile_Stats__WEBPACK_IMPORTED_MODULE_4__["default"], {
    stats: props.profile.stats
  }), __jsx(components_Profile_Links__WEBPACK_IMPORTED_MODULE_5__["default"], {
    links: links
  }))));
};

const mapStateToProps = state => {
  return {
    profile: state.profile.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Profile));

/***/ }),

/***/ "./components/containers/Profile/style.scss":
/*!**************************************************!*\
  !*** ./components/containers/Profile/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/containers/Transfers/index.js":
/*!**************************************************!*\
  !*** ./components/containers/Transfers/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Transfers_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Transfers/List */ "./components/components/Transfers/List/index.js");
/* harmony import */ var components_Transfers_Single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Transfers/Single */ "./components/components/Transfers/Single/index.js");
/* harmony import */ var components_Transfers_New__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Transfers/New */ "./components/components/Transfers/New/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Transfers = ({
  query
}) => {
  const subModule = getSubModule(query);
  return __jsx("div", {
    className: "row panel-content"
  }, __jsx("div", {
    className: "col"
  }, subModule));
};

function getSubModule(query) {
  const {
    accId = 'transId'
  } = query;

  switch (accId) {
    case 'transId':
      return __jsx(components_Transfers_List__WEBPACK_IMPORTED_MODULE_1__["default"], null);
      break;

    case 'new':
      return __jsx(components_Transfers_New__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      break;

    default:
      return __jsx(components_Transfers_Single__WEBPACK_IMPORTED_MODULE_2__["default"], {
        accId
      });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Transfers);

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

/***/ "./helper/api/forms.js":
/*!*****************************!*\
  !*** ./helper/api/forms.js ***!
  \*****************************/
/*! exports provided: sendHelpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendHelpForm", function() { return sendHelpForm; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Send help form

const sendHelpForm = data => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/forms/help`, 'post', data);

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

/***/ "./helper/api/stats.js":
/*!*****************************!*\
  !*** ./helper/api/stats.js ***!
  \*****************************/
/*! exports provided: getStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStats", function() { return getStats; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./helper/api/base.js");
 // Get stats for specific account

const getStats = (accId, daysPast) => Object(_base__WEBPACK_IMPORTED_MODULE_0__["callAPI"])(`/stats/${accId}/${daysPast}`);

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

/***/ "./helper/tools/validations/YupCustomValidations.js":
/*!**********************************************************!*\
  !*** ./helper/tools/validations/YupCustomValidations.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
 // Check for exact length of string or number

yup__WEBPACK_IMPORTED_MODULE_0__["addMethod"](yup__WEBPACK_IMPORTED_MODULE_0__["mixed"], 'length', function (length, msg) {
  return this.test({
    name: 'length',
    message: msg,
    test: value => value && value.toString().length === length
  });
});

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

/***/ "./pages/panel.js":
/*!************************!*\
  !*** ./pages/panel.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoc_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoc/PageContainer */ "./helper/hoc/PageContainer/index.js");
/* harmony import */ var hoc_WithRedux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoc/WithRedux */ "./helper/hoc/WithRedux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./helper/actions/index.js");
/* harmony import */ var actions_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/panel */ "./helper/actions/panel.js");
/* harmony import */ var hoc_WithAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoc/WithAuth */ "./helper/hoc/WithAuth/index.js");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tools */ "./helper/tools/index.js");
/* harmony import */ var components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Loader */ "./components/components/UI/Loader/index.js");
/* harmony import */ var containers_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/Navigation */ "./components/containers/Navigation/index.js");
/* harmony import */ var containers_Panel_Intro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! containers/Panel/Intro */ "./components/containers/Panel/Intro/index.js");
/* harmony import */ var containers_Accounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! containers/Accounts */ "./components/containers/Accounts/index.js");
/* harmony import */ var containers_Transfers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/Transfers */ "./components/containers/Transfers/index.js");
/* harmony import */ var containers_Cards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! containers/Cards */ "./components/containers/Cards/index.js");
/* harmony import */ var containers_Profile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! containers/Profile */ "./components/containers/Profile/index.js");
/* harmony import */ var containers_Profile_ChangeDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! containers/Profile/ChangeDetails */ "./components/containers/Profile/ChangeDetails/index.js");
/* harmony import */ var containers_Messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! containers/Messages */ "./components/containers/Messages/index.js");
/* harmony import */ var components_Help__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Help */ "./components/components/Help/index.js");
/* harmony import */ var api_base__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! api/base */ "./helper/api/base.js");
/* harmony import */ var next_cookies_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next-cookies/index */ "next-cookies/index");
/* harmony import */ var next_cookies_index__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_cookies_index__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var api_users__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! api/users */ "./helper/api/users.js");
/* harmony import */ var tools_getUserInitialData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tools/getUserInitialData */ "./helper/tools/getUserInitialData.js");
/* harmony import */ var _helper_actions_actionTypes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../helper/actions/actionTypes */ "./helper/actions/actionTypes.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
























class PanelPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(ctx) {
    const {
      reduxStore,
      query
    } = ctx;
    const {
      token
    } = next_cookies_index__WEBPACK_IMPORTED_MODULE_19___default()(ctx);
    Object(api_base__WEBPACK_IMPORTED_MODULE_18__["updateAPIConfig"])({
      authToken: token
    });
    const {
      dispatch
    } = reduxStore;
    Object(api_base__WEBPACK_IMPORTED_MODULE_18__["updateAPIConfig"])({
      authToken: token
    });

    try {
      const data = await Object(tools_getUserInitialData__WEBPACK_IMPORTED_MODULE_21__["default"])();

      if (!data) {
        dispatch(Object(actions_panel__WEBPACK_IMPORTED_MODULE_5__["initialDataStatus"])(false));
        return;
      }

      dispatch({
        type: _helper_actions_actionTypes__WEBPACK_IMPORTED_MODULE_22__["FETCH_PROFILE"],
        data: data.user
      });
      dispatch({
        type: _helper_actions_actionTypes__WEBPACK_IMPORTED_MODULE_22__["FETCH_ACCOUNTS"],
        data: data.accounts
      });
      dispatch({
        type: _helper_actions_actionTypes__WEBPACK_IMPORTED_MODULE_22__["FETCH_TRANSFERS"],
        data: data.transfers
      });
      dispatch({
        type: _helper_actions_actionTypes__WEBPACK_IMPORTED_MODULE_22__["FETCH_CARDS"],
        data: data.cards
      });
      dispatch({
        type: _helper_actions_actionTypes__WEBPACK_IMPORTED_MODULE_22__["FETCH_MESSAGES"],
        data: data.messages
      });
      dispatch(Object(actions_panel__WEBPACK_IMPORTED_MODULE_5__["initialDataStatus"])(true));
    } catch (err) {
      dispatch(Object(actions_panel__WEBPACK_IMPORTED_MODULE_5__["initialDataStatus"])(false));
    }

    return {
      query
    };
  }

  componentDidMount() {
    Object(tools__WEBPACK_IMPORTED_MODULE_7__["isValidToken"])().then(() => {
      this.props.fetchInitialData();
    }).catch(() => {});
  }

  render() {
    if (!this.props.initialDataStatus) {
      return __jsx(components_UI_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    } else {
      const subPage = getSubPage(this.props);
      return __jsx(hoc_PageContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(containers_Navigation__WEBPACK_IMPORTED_MODULE_9__["default"], null), subPage);
    }
  }

}

function getSubPage(props) {
  const {
    query = {}
  } = props,
        {
    slug
  } = query;

  switch (slug) {
    case 'accounts':
      return __jsx(containers_Accounts__WEBPACK_IMPORTED_MODULE_11__["default"], {
        query
      });
      break;

    case 'transfers':
      return __jsx(containers_Transfers__WEBPACK_IMPORTED_MODULE_12__["default"], {
        query
      });
      break;

    case 'cards':
      return __jsx(containers_Cards__WEBPACK_IMPORTED_MODULE_13__["default"], {
        query
      });
      break;

    case 'profile':
      return __jsx(containers_Profile__WEBPACK_IMPORTED_MODULE_14__["default"], null);
      break;

    case 'change-details':
      return __jsx(containers_Profile_ChangeDetails__WEBPACK_IMPORTED_MODULE_15__["default"], null);
      break;

    case 'messages':
      return __jsx(containers_Messages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        query
      });
      break;

    case 'help':
      return __jsx(components_Help__WEBPACK_IMPORTED_MODULE_17__["default"], null);
      break;

    default:
      return __jsx(containers_Panel_Intro__WEBPACK_IMPORTED_MODULE_10__["default"], null);
  }
}

const mapStateToProps = state => {
  return {
    initialDataStatus: state.panel.initialDataStatus,
    authStatus: state.auth.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthStatus: status => dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["setAuthStatus"](status)),
    fetchInitialData: () => dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["fetchInitialData"]())
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(hoc_WithRedux__WEBPACK_IMPORTED_MODULE_2__["withRedux"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(hoc_WithAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(PanelPage))));

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('panel/cards', '/panel/:slug/:accId/:changeId', 'panel').add('panel/accounts', '/panel/:slug/:accId', 'panel').add('panel/transfers', '/panel/:slug/:accId', 'panel').add('panel/profile', '/panel/:slug', 'panel').add('panel/change-details', '/panel/:slug', 'panel').add('panel/messages', '/panel/:slug/:accId', 'panel').add('panel/help', '/panel/:slug', 'panel').add({
  name: 'beta',
  pattern: '/v3',
  page: 'v3'
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/panel.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/binduraj/Documents/GitHub/dollarbank/web_Next/pages/panel.js */"./pages/panel.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "next-cookies/index":
/*!*************************************!*\
  !*** external "next-cookies/index" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies/index");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

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

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

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
//# sourceMappingURL=panel.js.map