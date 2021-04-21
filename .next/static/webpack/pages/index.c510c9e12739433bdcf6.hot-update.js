webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");

var _jsxFileName = "C:\\Users\\chris\\OneDrive\\Desktop\\portfolio-new\\pages\\index.js";



var __N_SSG = true;
function Index(_ref) {
  var _this = this;

  var allProjects = _ref.allProjects;
  console.log(allProjects);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: allProjects.map(function (_ref2) {
        var fields = _ref2.fields,
            sys = _ref2.sys;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: fields.projectTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            src: "https:".concat(fields.screenshot.fields.file.url),
            width: fields.screenshot.fields.file.details.image.width,
            height: fields.screenshot.fields.file.details.image.height,
            alt: fields.screenshot.fields.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: fields.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/projects/".concat(fields.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "See more..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)]
        }, sys.id, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
_c = Index;

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJmaWVsZHMiLCJzeXMiLCJwcm9qZWN0VGl0bGUiLCJzY3JlZW5zaG90IiwiZmlsZSIsInVybCIsImRldGFpbHMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNsdWciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFZZSxTQUFTQSxLQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlO0FBQzdDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBLHNCQUNFLHFFQUFDLGlFQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQ0dBLFdBQVcsQ0FBQ0csR0FBWixDQUFnQjtBQUFBLFlBQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFlBQVdDLEdBQVgsU0FBV0EsR0FBWDtBQUFBLDRCQUNmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0QsTUFBTSxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsa0JBQVdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQkgsTUFBbEIsQ0FBeUJJLElBQXpCLENBQThCQyxHQUF6QyxDQURMO0FBRUUsaUJBQUssRUFBRUwsTUFBTSxDQUFDRyxVQUFQLENBQWtCSCxNQUFsQixDQUF5QkksSUFBekIsQ0FBOEJFLE9BQTlCLENBQXNDQyxLQUF0QyxDQUE0Q0MsS0FGckQ7QUFHRSxrQkFBTSxFQUFFUixNQUFNLENBQUNHLFVBQVAsQ0FBa0JILE1BQWxCLENBQXlCSSxJQUF6QixDQUE4QkUsT0FBOUIsQ0FBc0NDLEtBQXRDLENBQTRDRSxNQUh0RDtBQUlFLGVBQUcsRUFBRVQsTUFBTSxDQUFDRyxVQUFQLENBQWtCSCxNQUFsQixDQUF5QlU7QUFKaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVFFO0FBQUEsc0JBQUlWLE1BQU0sQ0FBQ1c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxzQkFBZVgsTUFBTSxDQUFDWSxJQUF0QixDQUFWO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUEsV0FBU1gsR0FBRyxDQUFDWSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDtLQXhCdUJsQixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1MTBjOWUxMjczOTQzM2JkY2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgZ2V0QWxsUHJvamVjdHMgfSBmcm9tICcuLi9saWIvcHJvamVjdHMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGFsbFByb2plY3RzID0gYXdhaXQgZ2V0QWxsUHJvamVjdHMoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYWxsUHJvamVjdHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgYWxsUHJvamVjdHMgfSkge1xyXG4gIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgyPlByb2plY3RzPC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHthbGxQcm9qZWN0cy5tYXAoKHsgZmllbGRzLCBzeXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17c3lzLmlkfT5cclxuICAgICAgICAgICAgPGgzPntmaWVsZHMucHJvamVjdFRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOiR7ZmllbGRzLnNjcmVlbnNob3QuZmllbGRzLmZpbGUudXJsfWB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9e2ZpZWxkcy5zY3JlZW5zaG90LmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtmaWVsZHMuc2NyZWVuc2hvdC5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cclxuICAgICAgICAgICAgICBhbHQ9e2ZpZWxkcy5zY3JlZW5zaG90LmZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+e2ZpZWxkcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvamVjdHMvJHtmaWVsZHMuc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YT5TZWUgbW9yZS4uLjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==