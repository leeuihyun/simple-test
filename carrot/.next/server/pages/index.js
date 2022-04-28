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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/iuihyeon/Desktop/reactfile/test/simple-test/carrot/components/AppLayout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n //.onSnapshot(function (doc) {\n//    console.log(doc.data());\n//});\n\nfunction AppLayout({\n  children\n}) {\n  const obj = [{\n    name: \"1\",\n    price: 1\n  }];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    try {\n      firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore().collection(\"products\").get().then(res => {\n        res.forEach(doc => {\n          console.log(doc.data());\n          obj.push(doc.data());\n        });\n      });\n    } catch (error) {\n      console.log(error);\n    }\n  }, []);\n\n  const onClick = () => {\n    console.log(obj);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    bg: \"light\",\n    expand: \"lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n    href: \"#home\",\n    onClick: onClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, \"Carrot\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Toggle, {\n    \"aria-controls\": \"basic-navbar-nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Collapse, {\n    id: \"basic-navbar-nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n    className: \"me-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 25\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    href: \"#home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  }, \"Home\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    href: \"#link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 29\n    }\n  }, \"Link\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"], {\n    title: \"Dropdown\",\n    id: \"basic-nav-dropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 29\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n    href: \"#action/3.1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 33\n    }\n  }, \"Action\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n    href: \"#action/3.2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 33\n    }\n  }, \"Another action\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n    href: \"#action/3.3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 33\n    }\n  }, \"Something\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Divider, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 33\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n    href: \"#action/3.4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 33\n    }\n  }, \"Separated link\")))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheW91dC5qcz9kNzNiIl0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwib2JqIiwibmFtZSIsInByaWNlIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInJlcyIsImZvckVhY2giLCJkb2MiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInB1c2giLCJlcnJvciIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUI7QUFBRUM7QUFBRixDQUFuQixFQUFpQztBQUM3QixRQUFNQyxHQUFHLEdBQUcsQ0FDUjtBQUNJQyxRQUFJLEVBQUUsR0FEVjtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQURRLENBQVo7QUFNQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSTtBQUNBQyx5REFBUSxDQUNIQyxTQURMLEdBRUtDLFVBRkwsQ0FFZ0IsVUFGaEIsRUFHS0MsR0FITCxHQUlLQyxJQUpMLENBSVdDLEdBQUQsSUFBUztBQUNYQSxXQUFHLENBQUNDLE9BQUosQ0FBYUMsR0FBRCxJQUFTO0FBQ2pCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBSixFQUFaO0FBQ0FkLGFBQUcsQ0FBQ2UsSUFBSixDQUFTSixHQUFHLENBQUNHLElBQUosRUFBVDtBQUNILFNBSEQ7QUFJSCxPQVRMO0FBVUgsS0FYRCxDQVdFLE9BQU9FLEtBQVAsRUFBYztBQUNaSixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNIO0FBQ0osR0FmUSxFQWVOLEVBZk0sQ0FBVDs7QUFnQkEsUUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDbEJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixHQUFaO0FBQ0gsR0FGRDs7QUFHQSxTQUNJLG1FQUNJLE1BQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsT0FBWDtBQUFtQixVQUFNLEVBQUMsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDLE9BQW5CO0FBQTJCLFdBQU8sRUFBRWlCLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUlJLE1BQUMsc0RBQUQsQ0FBUSxNQUFSO0FBQWUscUJBQWMsa0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQWlCLE1BQUUsRUFBQyxrQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSSxNQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJLE1BQUMsMkRBQUQ7QUFDSSxTQUFLLEVBQUMsVUFEVjtBQUVJLE1BQUUsRUFBQyxvQkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsUUFBSSxFQUFDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQU9JLE1BQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLFFBQUksRUFBQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBKLEVBVUksTUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsUUFBSSxFQUFDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosRUFhSSxNQUFDLDJEQUFELENBQWEsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFjSSxNQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixRQUFJLEVBQUMsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFkSixDQUhKLENBREosQ0FMSixDQURKLENBREosQ0FESjtBQW9DSDs7QUFFY25CLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZEcm9wZG93biwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuLy8ub25TbmFwc2hvdChmdW5jdGlvbiAoZG9jKSB7XG4vLyAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcbi8vfSk7XG5cbmZ1bmN0aW9uIEFwcExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBvYmogPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiMVwiLFxuICAgICAgICAgICAgcHJpY2U6IDEsXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmlyZWJhc2VcbiAgICAgICAgICAgICAgICAuZmlyZXN0b3JlKClcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpXG4gICAgICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXMuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5wdXNoKGRvYy5kYXRhKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhcnJvdFxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5MaW5rPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm90aGVyIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXBhcmF0ZWQgbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ }),

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFirebase; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_performance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/performance */ \"firebase/performance\");\n/* harmony import */ var firebase_performance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_performance__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyAwu46TrwO2-1Q5AsxrujLy0ECI7Kb0ya0\",\n  authDomain: \"carrot-acfff.firebaseapp.com\",\n  projectId: \"carrot-acfff\",\n  storageBucket: \"carrot-acfff.appspot.com\",\n  messagingSenderId: \"66149758037\",\n  appId: \"1:66149758037:web:68856c240cd1498a4f50dc\"\n};\nfunction initFirebase() {\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n\n    if (false) {}\n  }\n\n  console.log(\"init firebase\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZUNvbmZpZy5qcz83ZDFkIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiaW5pdEZpcmViYXNlIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUc7QUFDakJDLFFBQU0sRUFBRSx5Q0FEUztBQUVqQkMsWUFBVSxFQUFFLDhCQUZLO0FBR2pCQyxXQUFTLEVBQUUsY0FITTtBQUlqQkMsZUFBYSxFQUFFLDBCQUpFO0FBS2pCQyxtQkFBaUIsRUFBRSxhQUxGO0FBTWpCQyxPQUFLLEVBQUU7QUFOVSxDQUFyQjtBQVNlLFNBQVNDLFlBQVQsR0FBd0I7QUFDbkMsTUFBSSxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3ZCRix1REFBUSxDQUFDRyxhQUFULENBQXVCWCxjQUF2Qjs7QUFDQSxlQUFtQyxFQUlsQztBQUNKOztBQUNEWSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0giLCJmaWxlIjoiLi9maXJlYmFzZUNvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvcGVyZm9ybWFuY2VcIjtcblxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBd3U0NlRyd08yLTFRNUFzeHJ1akx5MEVDSTdLYjB5YTBcIixcbiAgICBhdXRoRG9tYWluOiBcImNhcnJvdC1hY2ZmZi5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiY2Fycm90LWFjZmZmXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjYXJyb3QtYWNmZmYuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2NjE0OTc1ODAzN1wiLFxuICAgIGFwcElkOiBcIjE6NjYxNDk3NTgwMzc6d2ViOjY4ODU2YzI0MGNkMTQ5OGE0ZjUwZGNcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRGaXJlYmFzZSgpIHtcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKFwibWVhc3VyZW1lbnRJZFwiIGluIGZpcmViYXNlQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJpbml0IGZpcmViYXNlXCIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebaseConfig.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\nvar _jsxFileName = \"/Users/iuihyeon/Desktop/reactfile/test/simple-test/carrot/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nObject(_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nfunction index() {\n  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 12\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsK0RBQVE7O0FBQ1IsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLFNBQU8sTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDSDs7QUFFY0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlQ29uZmlnXCI7XG5cbmZpcmViYXNlKCk7XG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgICByZXR1cm4gPEFwcExheW91dCAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/analytics\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hbmFseXRpY3NcIj82ZjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FuYWx5dGljc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/analytics\n");

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

/***/ "firebase/performance":
/*!***************************************!*\
  !*** external "firebase/performance" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/performance\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9wZXJmb3JtYW5jZVwiP2Y2NzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UvcGVyZm9ybWFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9wZXJmb3JtYW5jZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/performance\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ })

/******/ });