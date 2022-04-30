module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/Users/iuihyeon/Desktop/reactfile/test/simple-test/carrot/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction _app({\n  Component\n}) {\n  return __jsx(Component, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 12\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].withRedux(_app));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiX2FwcCIsIkNvbXBvbmVudCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBNkI7QUFDekIsU0FBTyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0g7O0FBRWNDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JILElBQWxCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuZnVuY3Rpb24gX2FwcCh7IENvbXBvbmVudCB9KSB7XG4gICAgcmV0dXJuIDxDb21wb25lbnQgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KF9hcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ \"./reducers/product.js\");\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  product: _product__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDQywyREFBT0E7QUFEeUIsQ0FBRCxDQUFuQztBQUllRiwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBwcm9kdWN0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/product.js":
/*!*****************************!*\
  !*** ./reducers/product.js ***!
  \*****************************/
/*! exports provided: GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, CHANGE_PRODUCT_REQUEST, CHANGE_PRODUCT_SUCCESS, CHANGE_PRODUCT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT_REQUEST\", function() { return GET_PRODUCT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT_SUCCESS\", function() { return GET_PRODUCT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT_FAILURE\", function() { return GET_PRODUCT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PRODUCT_REQUEST\", function() { return ADD_PRODUCT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PRODUCT_SUCCESS\", function() { return ADD_PRODUCT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PRODUCT_FAILURE\", function() { return ADD_PRODUCT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_PRODUCT_REQUEST\", function() { return CHANGE_PRODUCT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_PRODUCT_SUCCESS\", function() { return CHANGE_PRODUCT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_PRODUCT_FAILURE\", function() { return CHANGE_PRODUCT_FAILURE; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst GET_PRODUCT_REQUEST = \"GET_PRODUCT_REQUEST\";\nconst GET_PRODUCT_SUCCESS = \"GET_PRODUCT_SUCCESS\";\nconst GET_PRODUCT_FAILURE = \"GET_PRODUCT_FAILURE\";\nconst ADD_PRODUCT_REQUEST = \"ADD_PRODUCT_REQUEST\";\nconst ADD_PRODUCT_SUCCESS = \"ADD_PRODUCT_SUCCESS\";\nconst ADD_PRODUCT_FAILURE = \"ADD_PRODUCT_FAILURE\";\nconst CHANGE_PRODUCT_REQUEST = \"CHANGE_PRODUCT_REQUEST\";\nconst CHANGE_PRODUCT_SUCCESS = \"CHANGE_PRODUCT_SUCCESS\";\nconst CHANGE_PRODUCT_FAILURE = \"CHANGE_PRODUCT_FAILURE\";\nconst initialState = {\n  product: [],\n  getProductLoading: false,\n  getProductDone: false,\n  getProductError: null,\n  addProductLoading: false,\n  addProductDone: false,\n  addProductError: null,\n  changeProductLoading: false,\n  changeProductDone: false,\n  changeProductError: null\n};\nconst product = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])({\n  [GET_PRODUCT_REQUEST]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.getProductLoading = true;\n    draft.getProductDone = false;\n    draft.getProductError = null;\n  }),\n  [GET_PRODUCT_SUCCESS]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.product = action.data;\n    draft.getProductLoading = false;\n    draft.getProductDone = true;\n    console.log(draft.product);\n  }),\n  [GET_PRODUCT_FAILURE]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.getProductLoading = false;\n    draft.getProductError = action.data.error;\n  }),\n  [ADD_PRODUCT_REQUEST]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.addProductLoading = true;\n    draft.addProductDone = false;\n    draft.addProductError = null;\n  }),\n  [ADD_PRODUCT_SUCCESS]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.product = action.data;\n    draft.addProductLoading = false;\n    draft.addProductDone = true;\n    console.log(draft.product);\n  }),\n  [ADD_PRODUCT_FAILURE]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.addProductLoading = false;\n    draft.addProductError = action.data.error;\n  }),\n  [CHANGE_PRODUCT_REQUEST]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.changeProductLoading = true;\n    draft.changeProductDone = false;\n    draft.changeProductError = null;\n  }),\n  [CHANGE_PRODUCT_SUCCESS]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    const ex = draft.product.find(v => v.id === action.data.id);\n    ex = _objectSpread(_objectSpread({}, ex), {}, {\n      name: action.data.name,\n      content: action.data.content,\n      price: action.data.price\n    });\n    draft.changeProductLoading = false;\n    draft.changeProductDone = true;\n    console.log(draft.product);\n  }),\n  [CHANGE_PRODUCT_FAILURE]: (state, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {\n    draft.changeProductLoading = false;\n    draft.changeProductError = action.data.error;\n  })\n}, initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wcm9kdWN0LmpzP2NjNzgiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RfUkVRVUVTVCIsIkdFVF9QUk9EVUNUX1NVQ0NFU1MiLCJHRVRfUFJPRFVDVF9GQUlMVVJFIiwiQUREX1BST0RVQ1RfUkVRVUVTVCIsIkFERF9QUk9EVUNUX1NVQ0NFU1MiLCJBRERfUFJPRFVDVF9GQUlMVVJFIiwiQ0hBTkdFX1BST0RVQ1RfUkVRVUVTVCIsIkNIQU5HRV9QUk9EVUNUX1NVQ0NFU1MiLCJDSEFOR0VfUFJPRFVDVF9GQUlMVVJFIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdCIsImdldFByb2R1Y3RMb2FkaW5nIiwiZ2V0UHJvZHVjdERvbmUiLCJnZXRQcm9kdWN0RXJyb3IiLCJhZGRQcm9kdWN0TG9hZGluZyIsImFkZFByb2R1Y3REb25lIiwiYWRkUHJvZHVjdEVycm9yIiwiY2hhbmdlUHJvZHVjdExvYWRpbmciLCJjaGFuZ2VQcm9kdWN0RG9uZSIsImNoYW5nZVByb2R1Y3RFcnJvciIsImhhbmRsZUFjdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJleCIsImZpbmQiLCJ2IiwiaWQiLCJuYW1lIiwiY29udGVudCIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFN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QTFCO0FBQ0FNLFNBQUssQ0FBQ0wsa0JBQU4sR0FBMkIsSUFBM0I7QUFDSCxHQUpNLENBdENmO0FBMkNJLEdBQUNaLHNCQUFELEdBQTBCLENBQUNjLEtBQUQsRUFBUUMsTUFBUixLQUN0QkMsNENBQU8sQ0FBQ0YsS0FBRCxFQUFTRyxLQUFELElBQVc7QUFDdEIsVUFBTUssRUFBRSxHQUFHTCxLQUFLLENBQUNkLE9BQU4sQ0FBY29CLElBQWQsQ0FBb0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNWLE1BQU0sQ0FBQ0csSUFBUCxDQUFZTyxFQUEvQyxDQUFYO0FBQ0FILE1BQUUsbUNBQ0tBLEVBREw7QUFFRUksVUFBSSxFQUFFWCxNQUFNLENBQUNHLElBQVAsQ0FBWVEsSUFGcEI7QUFHRUMsYUFBTyxFQUFFWixNQUFNLENBQUNHLElBQVAsQ0FBWVMsT0FIdkI7QUFJRUMsV0FBSyxFQUFFYixNQUFNLENBQUNHLElBQVAsQ0FBWVU7QUFKckIsTUFBRjtBQU1BWCxTQUFLLENBQUNQLG9CQUFOLEdBQTZCLEtBQTdCO0FBQ0FPLFNBQUssQ0FBQ04saUJBQU4sR0FBMEIsSUFBMUI7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ2QsT0FBbEI7QUFDSCxHQVhNLENBNUNmO0FBd0RJLEdBQUNGLHNCQUFELEdBQTBCLENBQUNhLEtBQUQsRUFBUUMsTUFBUixLQUN0QkMsNENBQU8sQ0FBQ0YsS0FBRCxFQUFTRyxLQUFELElBQVc7QUFDdEJBLFNBQUssQ0FBQ1Asb0JBQU4sR0FBNkIsS0FBN0I7QUFDQU8sU0FBSyxDQUFDTCxrQkFBTixHQUEyQkcsTUFBTSxDQUFDRyxJQUFQLENBQVlHLEtBQXZDO0FBQ0gsR0FITTtBQXpEZixDQUR5QixFQStEekJuQixZQS9EeUIsQ0FBN0I7QUFrRWVDLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tIFwicmVkdXgtYWN0aW9uc1wiO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9SRVFVRVNUID0gXCJHRVRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VDQ0VTUyA9IFwiR0VUX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkdFVF9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1JFUVVFU1QgPSBcIkFERF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9TVUNDRVNTID0gXCJBRERfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfRkFJTFVSRSA9IFwiQUREX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BST0RVQ1RfUkVRVUVTVCA9IFwiQ0hBTkdFX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9QUk9EVUNUX1NVQ0NFU1MgPSBcIkNIQU5HRV9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfUFJPRFVDVF9GQUlMVVJFID0gXCJDSEFOR0VfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwcm9kdWN0OiBbXSxcbiAgICBnZXRQcm9kdWN0TG9hZGluZzogZmFsc2UsXG4gICAgZ2V0UHJvZHVjdERvbmU6IGZhbHNlLFxuICAgIGdldFByb2R1Y3RFcnJvcjogbnVsbCxcbiAgICBhZGRQcm9kdWN0TG9hZGluZzogZmFsc2UsXG4gICAgYWRkUHJvZHVjdERvbmU6IGZhbHNlLFxuICAgIGFkZFByb2R1Y3RFcnJvcjogbnVsbCxcbiAgICBjaGFuZ2VQcm9kdWN0TG9hZGluZzogZmFsc2UsXG4gICAgY2hhbmdlUHJvZHVjdERvbmU6IGZhbHNlLFxuICAgIGNoYW5nZVByb2R1Y3RFcnJvcjogbnVsbCxcbn07XG5cbmNvbnN0IHByb2R1Y3QgPSBoYW5kbGVBY3Rpb25zKFxuICAgIHtcbiAgICAgICAgW0dFVF9QUk9EVUNUX1JFUVVFU1RdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgICAgIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYWZ0LmdldFByb2R1Y3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5nZXRQcm9kdWN0RG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmdldFByb2R1Y3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgW0dFVF9QUk9EVUNUX1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgICAgIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYWZ0LnByb2R1Y3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICAgICAgICBkcmFmdC5nZXRQcm9kdWN0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmdldFByb2R1Y3REb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkcmFmdC5wcm9kdWN0KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBbR0VUX1BST0RVQ1RfRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICAgICAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZnQuZ2V0UHJvZHVjdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5nZXRQcm9kdWN0RXJyb3IgPSBhY3Rpb24uZGF0YS5lcnJvcjtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBbQUREX1BST0RVQ1RfUkVRVUVTVF06IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICAgICAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUHJvZHVjdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFByb2R1Y3REb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUHJvZHVjdEVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBbQUREX1BST0RVQ1RfU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICAgICAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZnQucHJvZHVjdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFByb2R1Y3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUHJvZHVjdERvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRyYWZ0LnByb2R1Y3QpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgIFtBRERfUFJPRFVDVF9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+XG4gICAgICAgICAgICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQcm9kdWN0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFByb2R1Y3RFcnJvciA9IGFjdGlvbi5kYXRhLmVycm9yO1xuICAgICAgICAgICAgfSksXG4gICAgICAgIFtDSEFOR0VfUFJPRFVDVF9SRVFVRVNUXTogKHN0YXRlLCBhY3Rpb24pID0+XG4gICAgICAgICAgICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VQcm9kdWN0TG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlUHJvZHVjdERvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VQcm9kdWN0RXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgfSksXG4gICAgICAgIFtDSEFOR0VfUFJPRFVDVF9TVUNDRVNTXTogKHN0YXRlLCBhY3Rpb24pID0+XG4gICAgICAgICAgICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleCA9IGRyYWZ0LnByb2R1Y3QuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgICAgICAgICAgIGV4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5leCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYWN0aW9uLmRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGFjdGlvbi5kYXRhLnByaWNlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlUHJvZHVjdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VQcm9kdWN0RG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHJhZnQucHJvZHVjdCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgW0NIQU5HRV9QUk9EVUNUX0ZBSUxVUkVdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgICAgIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZVByb2R1Y3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlUHJvZHVjdEVycm9yID0gYWN0aW9uLmRhdGEuZXJyb3I7XG4gICAgICAgICAgICB9KSxcbiAgICB9LFxuICAgIGluaXRpYWxTdGF0ZVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/product.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ \"./sagas/product.js\");\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_product__WEBPACK_IMPORTED_MODULE_1__[\"default\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInByb2R1Y3RTYWdhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLFVBQVVBLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDQyxnREFBRCxDQUFMLENBQUQsQ0FBVDtBQUNIIiwiZmlsZSI6Ii4vc2FnYXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgcHJvZHVjdFNhZ2EgZnJvbSBcIi4vcHJvZHVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtmb3JrKHByb2R1Y3RTYWdhKV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/product.js":
/*!**************************!*\
  !*** ./sagas/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return productSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/product */ \"./reducers/product.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ \"shortid\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction getProductApi() {\n  return firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore().collection(\"products\").get();\n}\n\nfunction* getProduct(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(getProductApi);\n    const arr = [];\n    res.forEach(v => {\n      arr.push(v); //v.data()\n    });\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_product__WEBPACK_IMPORTED_MODULE_3__[\"GET_PRODUCT_SUCCESS\"],\n      data: arr\n    });\n    console.log(\"res\");\n    console.log(res);\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_product__WEBPACK_IMPORTED_MODULE_3__[\"GET_PRODUCT_FAILURE\"],\n      error: error.response.data\n    });\n  }\n}\n\nfunction* watchGetProduct() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_product__WEBPACK_IMPORTED_MODULE_3__[\"GET_PRODUCT_REQUEST\"], getProduct);\n}\n\nfunction addProductApi(data) {\n  return firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore().collection(\"products\").add({\n    id: shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate(),\n    name: data.name,\n    price: data.price,\n    content: data.content\n  });\n}\n\nfunction* addProduct(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(addProductApi, action.data);\n    const arr = [];\n    const doc = res.forEach(v => {\n      arr.push(v);\n    });\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_product__WEBPACK_IMPORTED_MODULE_3__[\"ADD_PRODUCT_SUCCESS\"],\n      data: arr\n    });\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_product__WEBPACK_IMPORTED_MODULE_3__[\"ADD_PRODUCT_FAILURE\"],\n      error: error.response.data\n    });\n  }\n}\n\nfunction* watchAddProduct() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_product__WEBPACK_IMPORTED_MODULE_3__[\"ADD_PRODUCT_REQUEST\"], addProduct);\n}\n\nfunction changeProductApi({\n  data\n}) {//return firebase.firestore().collection(\"product\").document(`${data}`);\n}\n\nfunction* changeProduct(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(getProductApi);\n  } catch (error) {\n    console.error(error);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_product__WEBPACK_IMPORTED_MODULE_3__[\"CHANGE_PRODUCT_FAILURE\"],\n      error: error.response.data\n    });\n  }\n}\n\nfunction* watchChangeProduct() {}\n\nfunction* productSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchGetProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddProduct)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wcm9kdWN0LmpzPzE5NWQiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdEFwaSIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldCIsImdldFByb2R1Y3QiLCJhY3Rpb24iLCJyZXMiLCJjYWxsIiwiYXJyIiwiZm9yRWFjaCIsInYiLCJwdXNoIiwicHV0IiwidHlwZSIsIkdFVF9QUk9EVUNUX1NVQ0NFU1MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiR0VUX1BST0RVQ1RfRkFJTFVSRSIsInJlc3BvbnNlIiwid2F0Y2hHZXRQcm9kdWN0IiwidGFrZUxhdGVzdCIsIkdFVF9QUk9EVUNUX1JFUVVFU1QiLCJhZGRQcm9kdWN0QXBpIiwiYWRkIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJuYW1lIiwicHJpY2UiLCJjb250ZW50IiwiYWRkUHJvZHVjdCIsImRvYyIsIkFERF9QUk9EVUNUX1NVQ0NFU1MiLCJBRERfUFJPRFVDVF9GQUlMVVJFIiwid2F0Y2hBZGRQcm9kdWN0IiwiQUREX1BST0RVQ1RfUkVRVUVTVCIsImNoYW5nZVByb2R1Y3RBcGkiLCJjaGFuZ2VQcm9kdWN0IiwiQ0hBTkdFX1BST0RVQ1RfRkFJTFVSRSIsIndhdGNoQ2hhbmdlUHJvZHVjdCIsInByb2R1Y3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixTQUFPQyxtREFBUSxDQUFDQyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxVQUFoQyxFQUE0Q0MsR0FBNUMsRUFBUDtBQUNIOztBQUNELFVBQVVDLFVBQVYsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBQ3pCLE1BQUk7QUFDQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsK0RBQUks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QUQsQ0FBVDtBQUNIIiwiZmlsZSI6Ii4vc2FnYXMvcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VMYXRlc3QsIGZvcmssIGFsbCwgY2FsbCwgcHV0LCBkZWxheSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7XG4gICAgQUREX1BST0RVQ1RfRkFJTFVSRSxcbiAgICBBRERfUFJPRFVDVF9SRVFVRVNULFxuICAgIEFERF9QUk9EVUNUX1NVQ0NFU1MsXG4gICAgQ0hBTkdFX1BST0RVQ1RfRkFJTFVSRSxcbiAgICBDSEFOR0VfUFJPRFVDVF9TVUNDRVNTLFxuICAgIEdFVF9QUk9EVUNUX0ZBSUxVUkUsXG4gICAgR0VUX1BST0RVQ1RfUkVRVUVTVCxcbiAgICBHRVRfUFJPRFVDVF9TVUNDRVNTLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcHJvZHVjdFwiO1xuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcblxuZnVuY3Rpb24gZ2V0UHJvZHVjdEFwaSgpIHtcbiAgICByZXR1cm4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmdldCgpO1xufVxuZnVuY3Rpb24qIGdldFByb2R1Y3QoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChnZXRQcm9kdWN0QXBpKTtcblxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgICByZXMuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgYXJyLnB1c2godik7IC8vdi5kYXRhKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IEdFVF9QUk9EVUNUX1NVQ0NFU1MsXG4gICAgICAgICAgICBkYXRhOiBhcnIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogR0VUX1BST0RVQ1RfRkFJTFVSRSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEdldFByb2R1Y3QoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChHRVRfUFJPRFVDVF9SRVFVRVNULCBnZXRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvZHVjdEFwaShkYXRhKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwcm9kdWN0c1wiKS5hZGQoe1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHByaWNlOiBkYXRhLnByaWNlLFxuICAgICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gICAgfSk7XG59XG5mdW5jdGlvbiogYWRkUHJvZHVjdChhY3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGFkZFByb2R1Y3RBcGksIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGNvbnN0IGRvYyA9IHJlcy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICBhcnIucHVzaCh2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUFJPRFVDVF9TVUNDRVNTLFxuICAgICAgICAgICAgZGF0YTogYXJyLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogQUREX1BST0RVQ1RfRkFJTFVSRSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFByb2R1Y3QoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUFJPRFVDVF9SRVFVRVNULCBhZGRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJvZHVjdEFwaSh7IGRhdGEgfSkge1xuICAgIC8vcmV0dXJuIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwcm9kdWN0XCIpLmRvY3VtZW50KGAke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBjaGFuZ2VQcm9kdWN0KGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwoZ2V0UHJvZHVjdEFwaSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfUFJPRFVDVF9GQUlMVVJFLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlUHJvZHVjdCgpIHt9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtmb3JrKHdhdGNoR2V0UHJvZHVjdCksIGZvcmsod2F0Y2hBZGRQcm9kdWN0KV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/product.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux-saga/core */ \"@redux-saga/core\");\n/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst configureStore = () => {\n  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_5___default()();\n  const middleware = [sagaMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middleware));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsY0FBYyxHQUFHQyx1REFBb0IsRUFBM0M7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBQ0YsY0FBRCxDQUFuQjtBQUVBLFFBQU1HLFFBQVEsR0FDVixRQUNNQyxTQUROLEdBRU1DLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFVBQUosQ0FBaEIsQ0FIN0I7QUFJQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQWNOLFFBQWQsQ0FBekI7QUFDQUksT0FBSyxDQUFDRyxRQUFOLEdBQWlCVixjQUFjLENBQUNXLEdBQWYsQ0FBbUJDLDhDQUFuQixDQUFqQjtBQUNBLFNBQU9MLEtBQVA7QUFDSCxDQVhEOztBQWFBLE1BQU1NLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ2YsY0FBRCxFQUFpQjtBQUMxQ2dCLE9BQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZUYsc0VBQWYiLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlXCI7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gW3NhZ2FNaWRkbGV3YXJlXTtcblxuICAgIGNvbnN0IGVuaGFuY2VyID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuICAgICAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgZW5oYW5jZXIpO1xuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@redux-saga/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXgtc2FnYS9jb3JlXCI/NjU5NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXgtc2FnYS9jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@redux-saga/core\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiPzc4ZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaW1tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///immer\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-actions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCI/NjlmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-actions\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shortid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCI/YmVlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzaG9ydGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///shortid\n");

/***/ })

/******/ });