webpackHotUpdate_N_E("pages/Detalhe",{

/***/ "./pages/Detalhe/index.tsx":
/*!*********************************!*\
  !*** ./pages/Detalhe/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Detalhe_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Detalhe/styles */ "./pages/Detalhe/styles.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_img_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-img-carousel */ "./node_modules/react-img-carousel/lib/index.js");
/* harmony import */ var react_img_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_img_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_residencias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/residencias */ "./utils/residencias.js");


var _jsxFileName = "C:\\fontesGit\\www\\teste\\catalogo-obras\\pages\\Detalhe\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





__webpack_require__(/*! react-img-carousel/lib/carousel.css */ "./node_modules/react-img-carousel/lib/carousel.css");



var Detalhe = function Detalhe() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var detalheCasa = _utils_residencias__WEBPACK_IMPORTED_MODULE_4__["Casas"].find(function (p) {
    return p.id === Number(id);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Detalhe_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card",
      onClick: function onClick() {},
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_img_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
          viewportWidth: "1024px",
          cellPadding: 5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://placekitten.com/200/300"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://placekitten.com/300/300"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://placekitten.com/400/300"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: detalheCasa.endereco
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: detalheCasa.bairro
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: detalheCasa.detalhes.map(function (p) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: p
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Condi\xE7\xF5es de pagamento: ", detalheCasa.condicoes]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text--medium",
            children: detalheCasa.valor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "price text--medium",
            children: detalheCasa.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, _this)
    }, detalheCasa.id, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_s(Detalhe, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Detalhe;
/* harmony default export */ __webpack_exports__["default"] = (Detalhe);

var _c;

$RefreshReg$(_c, "Detalhe");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWxoZS9pbmRleC50c3giXSwibmFtZXMiOlsicmVxdWlyZSIsIkRldGFsaGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGV0YWxoZUNhc2EiLCJDYXNhcyIsImZpbmQiLCJwIiwiTnVtYmVyIiwiZW5kZXJlY28iLCJiYWlycm8iLCJkZXRhbGhlcyIsIm1hcCIsImNvbmRpY29lcyIsInZhbG9yIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBTyxDQUFDLCtGQUFELENBQVA7O0FBRUE7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGtCLE1BRVZDLEVBRlUsR0FFSEYsTUFBTSxDQUFDRyxLQUZKLENBRVZELEVBRlU7QUFJbEIsTUFBTUUsV0FBVyxHQUFHQyx3REFBSyxDQUFDQyxJQUFOLENBQVcsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0wsRUFBRixLQUFTTSxNQUFNLENBQUNOLEVBQUQsQ0FBbkI7QUFBQSxHQUFaLENBQXBCO0FBRUEsc0JBR0kscUVBQUMseURBQUQ7QUFBQSwyQkFHUTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQTJDLGFBQU8sRUFBRSxtQkFBTSxDQUFHLENBQTdEO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSSxxRUFBQyx5REFBRDtBQUFVLHVCQUFhLEVBQUMsUUFBeEI7QUFBaUMscUJBQVcsRUFBRSxDQUE5QztBQUFBLGtDQUNJO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSTtBQUFBLG9CQUNLRSxXQUFXLENBQUNLO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFXSTtBQUFBLG9CQUNLTCxXQUFXLENBQUNNO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEosZUFlSTtBQUFBLG9CQUdRTixXQUFXLENBQUNPLFFBQVosQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFMLENBQUM7QUFBQSxnQ0FDdEI7QUFBQSx3QkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURzQjtBQUFBLFdBQTFCO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSixlQTBCSTtBQUFBLHVEQUM2QkgsV0FBVyxDQUFDUyxTQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJKLGVBNkJJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQSxzQkFBNkJULFdBQVcsQ0FBQ1U7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxvQkFBYjtBQUFBLHNCQUFtQ1YsV0FBVyxDQUFDVztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosT0FBMkJYLFdBQVcsQ0FBQ0YsRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FISjtBQThDSCxDQXBERDs7R0FBTUgsTztVQUNhRSxxRDs7O0tBRGJGLE87QUF1RFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0RldGFsaGUuM2JmNjIxMDk4MDdlNDA4MmM0YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ2FyZCwgQ2Fyb3VjZWwgfSBmcm9tICcuLi9EZXRhbGhlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWltZy1jYXJvdXNlbCc7XHJcblxyXG5yZXF1aXJlKCdyZWFjdC1pbWctY2Fyb3VzZWwvbGliL2Nhcm91c2VsLmNzcycpO1xyXG5cclxuaW1wb3J0IHsgQ2FzYXMgfSBmcm9tICcuLi8uLi91dGlscy9yZXNpZGVuY2lhcyc7XHJcblxyXG5jb25zdCBEZXRhbGhlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IGRldGFsaGVDYXNhID0gQ2FzYXMuZmluZChwID0+IHAuaWQgPT09IE51bWJlcihpZCkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtkZXRhbGhlQ2FzYS5pZH0gb25DbGljaz17KCkgPT4geyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHZpZXdwb3J0V2lkdGg9XCIxMDI0cHhcIiBjZWxsUGFkZGluZz17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3BsYWNla2l0dGVuLmNvbS8zMDAvMzAwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC8zMDAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWxoZUNhc2EuZW5kZXJlY299XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhbGhlQ2FzYS5iYWlycm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWxoZUNhc2EuZGV0YWxoZXMubWFwKHAgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25kacOnw7VlcyBkZSBwYWdhbWVudG86IHtkZXRhbGhlQ2FzYS5jb25kaWNvZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS1tZWRpdW1cIj57ZGV0YWxoZUNhc2EudmFsb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgdGV4dC0tbWVkaXVtXCI+e2RldGFsaGVDYXNhLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhbGhlOyJdLCJzb3VyY2VSb290IjoiIn0=