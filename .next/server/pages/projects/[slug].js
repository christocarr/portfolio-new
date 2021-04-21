module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\chris\\OneDrive\\Desktop\\portfolio-new\\components\\layout\\Layout.js";

function Layout({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./lib/projects.js":
/*!*************************!*\
  !*** ./lib/projects.js ***!
  \*************************/
/*! exports provided: getAllProjects, getAllPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProjects", function() { return getAllProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPaths", function() { return getAllPaths; });
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ "contentful");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);

const client = Object(contentful__WEBPACK_IMPORTED_MODULE_0__["createClient"])({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});
async function getAllProjects(contentType) {
  const res = await client.getEntries(contentType);
  return res.items;
}
async function getAllPaths() {} // const space = '2lcsgwiz8z11';
// const environment = 'master';
// const accessToken = 'n3XQMZsr20JB0vyyMbaZCuhU0KhQwf-FQvrwEMusPno';
// const path = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`;
// export async function getAllProjects() {
//   const res = await fetch(path);
//   const data = await res.json();
//   return data.items;
// }

/***/ }),

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _lib_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/projects */ "./lib/projects.js");

var _jsxFileName = "C:\\Users\\chris\\OneDrive\\Desktop\\portfolio-new\\pages\\projects\\[slug].js";



const getStaticPaths = async () => {
  const contentType = {
    content_type: 'project'
  };
  const allProjects = await Object(_lib_projects__WEBPACK_IMPORTED_MODULE_3__["getAllProjects"])(contentType);
  const paths = allProjects.map(({
    fields
  }) => {
    return {
      params: {
        slug: fields.slug
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const contentType = {
    content_type: 'project',
    'fields.slug': params.slug
  };
  const items = await Object(_lib_projects__WEBPACK_IMPORTED_MODULE_3__["getAllProjects"])(contentType);
  return {
    props: {
      project: items[0]
    }
  };
};

function Project({
  project
}) {
  console.log(project);
  const {
    name
  } = project.fields;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2xpYi9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29udGVudGZ1bFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiY2xpZW50IiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiZW52IiwiQ09OVEVOVEZVTF9TUEFDRV9JRCIsImVudmlyb25tZW50IiwiYWNjZXNzVG9rZW4iLCJDT05URU5URlVMX0FDQ0VTU19LRVkiLCJnZXRBbGxQcm9qZWN0cyIsImNvbnRlbnRUeXBlIiwicmVzIiwiZ2V0RW50cmllcyIsIml0ZW1zIiwiZ2V0QWxsUGF0aHMiLCJnZXRTdGF0aWNQYXRocyIsImNvbnRlbnRfdHlwZSIsImFsbFByb2plY3RzIiwicGF0aHMiLCJtYXAiLCJmaWVsZHMiLCJwYXJhbXMiLCJzbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIiwicHJvamVjdCIsIlByb2plY3QiLCJjb25zb2xlIiwibG9nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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QURGO0FBUUQ7O0FBRWNILHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDN0NBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2plY3RzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzXCIpO1xuIiwiZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnY29udGVudGZ1bCc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxyXG4gIGVudmlyb25tZW50OiAnbWFzdGVyJyxcclxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfS0VZLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQcm9qZWN0cyhjb250ZW50VHlwZSkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKGNvbnRlbnRUeXBlKTtcclxuICByZXR1cm4gcmVzLml0ZW1zO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGF0aHMoKSB7fVxyXG5cclxuLy8gY29uc3Qgc3BhY2UgPSAnMmxjc2d3aXo4ejExJztcclxuLy8gY29uc3QgZW52aXJvbm1lbnQgPSAnbWFzdGVyJztcclxuLy8gY29uc3QgYWNjZXNzVG9rZW4gPSAnbjNYUU1ac3IyMEpCMHZ5eU1iYVpDdWhVMEtoUXdmLUZRdnJ3RU11c1Bubyc7XHJcblxyXG4vLyBjb25zdCBwYXRoID0gYGh0dHBzOi8vY2RuLmNvbnRlbnRmdWwuY29tL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvJHtlbnZpcm9ubWVudH0vZW50cmllcz9hY2Nlc3NfdG9rZW49JHthY2Nlc3NUb2tlbn1gO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHBhdGgpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIHJldHVybiBkYXRhLml0ZW1zO1xyXG4vLyB9XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgZ2V0QWxsUHJvamVjdHMgfSBmcm9tICcuLi8uLi9saWIvcHJvamVjdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnRUeXBlID0geyBjb250ZW50X3R5cGU6ICdwcm9qZWN0JyB9O1xyXG4gIGNvbnN0IGFsbFByb2plY3RzID0gYXdhaXQgZ2V0QWxsUHJvamVjdHMoY29udGVudFR5cGUpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGFsbFByb2plY3RzLm1hcCgoeyBmaWVsZHMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IHNsdWc6IGZpZWxkcy5zbHVnIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBjb250ZW50VHlwZSA9IHtcclxuICAgIGNvbnRlbnRfdHlwZTogJ3Byb2plY3QnLFxyXG4gICAgJ2ZpZWxkcy5zbHVnJzogcGFyYW1zLnNsdWcsXHJcbiAgfTtcclxuICBjb25zdCBpdGVtcyA9IGF3YWl0IGdldEFsbFByb2plY3RzKGNvbnRlbnRUeXBlKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvamVjdDogaXRlbXNbMF0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCB9KSB7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgY29uc3QgeyBuYW1lIH0gPSBwcm9qZWN0LmZpZWxkcztcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlByb2plY3Q8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoMj57bmFtZX08L2gyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=