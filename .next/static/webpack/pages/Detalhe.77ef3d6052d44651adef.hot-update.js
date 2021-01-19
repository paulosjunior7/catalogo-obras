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
/* harmony import */ var _utils_residencias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/residencias */ "./utils/residencias.js");


var _jsxFileName = "C:\\fontesGit\\www\\teste\\catalogo-obras\\pages\\Detalhe\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Detalhe = function Detalhe() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var detalheCasa = _utils_residencias__WEBPACK_IMPORTED_MODULE_3__["Casas"].find(function (p) {
    return p.id === Number(id);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Detalhe_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card",
      onClick: function onClick() {},
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "image",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: detalheCasa.imagem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "title text--medium",
          children: [detalheCasa.endereco, detalheCasa.bairro]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "title text--medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text--medium",
            children: detalheCasa.valor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "price text--medium",
            children: detalheCasa.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, detalheCasa.id, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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

/***/ }),

/***/ "./utils/residencias.js":
/*!******************************!*\
  !*** ./utils/residencias.js ***!
  \******************************/
/*! exports provided: Casas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Casas", function() { return Casas; });
var Casas = [{
  id: 1,
  endereco: "Casa 2 Quartos, 2 suítes , 110m² ",
  bairro: "Residencial Canada",
  imagem: "https://img.olx.com.br/images/06/069070358716009.jpg",
  valor: "R$ 210.000,00",
  status: "Concluída"
}, {
  id: 2,
  endereco: "Casa 3 Quartos, 2 suítes , 110m² ",
  bairro: "Residencial Moinho dos ventos",
  imagem: "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/df624cc2c99a38bac1804e458d35803a.jpg",
  valor: "R$ 310.000,00",
  status: "Concluída"
}, {
  id: 3,
  endereco: "Casa 2 Quartos, 2 suítes , 110m² ",
  bairro: "Residencial Canada",
  imagem: "https://img.olx.com.br/images/06/069070358716009.jpg",
  valor: "R$ 210.000,00",
  status: "Concluída"
}, {
  id: 4,
  endereco: "Casa 3 Quartos, 2 suítes , 110m² ",
  bairro: "Residencial Moinho dos ventos",
  imagem: "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/vr.images.sp/df624cc2c99a38bac1804e458d35803a.jpg",
  valor: "R$ 310.000,00",
  status: "Concluída"
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWxoZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3Jlc2lkZW5jaWFzLmpzIl0sIm5hbWVzIjpbIkRldGFsaGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGV0YWxoZUNhc2EiLCJDYXNhcyIsImZpbmQiLCJwIiwiTnVtYmVyIiwiaW1hZ2VtIiwiZW5kZXJlY28iLCJiYWlycm8iLCJ2YWxvciIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGtCLE1BRVZDLEVBRlUsR0FFSEYsTUFBTSxDQUFDRyxLQUZKLENBRVZELEVBRlU7QUFJbEIsTUFBTUUsV0FBVyxHQUFHQyx3REFBSyxDQUFDQyxJQUFOLENBQVcsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0wsRUFBRixLQUFTTSxNQUFNLENBQUNOLEVBQUQsQ0FBbkI7QUFBQSxHQUFaLENBQXBCO0FBRUEsc0JBQ0kscUVBQUMseURBQUQ7QUFBQSwyQkFJUTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQTJDLGFBQU8sRUFBRSxtQkFBTSxDQUFFLENBQTVEO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUUsV0FBVyxDQUFDSztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBSUE7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsb0JBQWI7QUFBQSxxQkFDR0wsV0FBVyxDQUFDTSxRQURmLEVBRUdOLFdBQVcsQ0FBQ08sTUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMsY0FBYjtBQUFBLHNCQUE2QlAsV0FBVyxDQUFDUTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLG9CQUFiO0FBQUEsc0JBQW1DUixXQUFXLENBQUNTO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBO0FBQUEsT0FBMkJULFdBQVcsQ0FBQ0YsRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlCSCxDQS9CRDs7R0FBTUgsTztVQUNhRSxxRDs7O0tBRGJGLE87QUFrQ1NBLHNFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBTyxJQUFNTSxLQUFLLEdBQUcsQ0FDakI7QUFDRUgsSUFBRSxFQUFFLENBRE47QUFFRVEsVUFBUSxFQUFFLG1DQUZaO0FBR0VDLFFBQU0sRUFBRSxvQkFIVjtBQUlFRixRQUFNLEVBQUUsc0RBSlY7QUFLRUcsT0FBSyxFQUFFLGVBTFQ7QUFNRUMsUUFBTSxFQUFFO0FBTlYsQ0FEaUIsRUFTakI7QUFDRVgsSUFBRSxFQUFFLENBRE47QUFFRVEsVUFBUSxFQUFFLG1DQUZaO0FBR0VDLFFBQU0sRUFBRSwrQkFIVjtBQUlFRixRQUFNLEVBQUUsd0dBSlY7QUFLRUcsT0FBSyxFQUFFLGVBTFQ7QUFNRUMsUUFBTSxFQUFFO0FBTlYsQ0FUaUIsRUFpQmpCO0FBQ0VYLElBQUUsRUFBRSxDQUROO0FBRUVRLFVBQVEsRUFBRSxtQ0FGWjtBQUdFQyxRQUFNLEVBQUUsb0JBSFY7QUFJRUYsUUFBTSxFQUFFLHNEQUpWO0FBS0VHLE9BQUssRUFBRSxlQUxUO0FBTUVDLFFBQU0sRUFBRTtBQU5WLENBakJpQixFQXlCakI7QUFDRVgsSUFBRSxFQUFFLENBRE47QUFFRVEsVUFBUSxFQUFFLG1DQUZaO0FBR0VDLFFBQU0sRUFBRSwrQkFIVjtBQUlFRixRQUFNLEVBQUUsd0dBSlY7QUFLRUcsT0FBSyxFQUFFLGVBTFQ7QUFNRUMsUUFBTSxFQUFFO0FBTlYsQ0F6QmlCLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGV0YWxoZS43N2VmM2Q2MDUyZDQ0NjUxYWRlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyICwgQ2FyZCB9IGZyb20gJy4uL0RldGFsaGUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ2FzYXMgfSBmcm9tICcuLi8uLi91dGlscy9yZXNpZGVuY2lhcyc7XHJcblxyXG5jb25zdCBEZXRhbGhlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IGRldGFsaGVDYXNhID0gQ2FzYXMuZmluZChwID0+IHAuaWQgPT09IE51bWJlcihpZCkgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2RldGFsaGVDYXNhLmlkfSBvbkNsaWNrPXsoKSA9PiB7fX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkZXRhbGhlQ2FzYS5pbWFnZW19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LS1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGV0YWxoZUNhc2EuZW5kZXJlY299XHJcbiAgICAgICAgICAgICAgICAgICAge2RldGFsaGVDYXNhLmJhaXJyb31cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LS1tZWRpdW1cIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtLW1lZGl1bVwiPntkZXRhbGhlQ2FzYS52YWxvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgdGV4dC0tbWVkaXVtXCI+e2RldGFsaGVDYXNhLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWxoZTsiLCJleHBvcnQgY29uc3QgQ2FzYXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBlbmRlcmVjbzogXCJDYXNhIDIgUXVhcnRvcywgMiBzdcOtdGVzICwgMTEwbcKyIFwiLFxyXG4gICAgICBiYWlycm86IFwiUmVzaWRlbmNpYWwgQ2FuYWRhXCIsXHJcbiAgICAgIGltYWdlbTogXCJodHRwczovL2ltZy5vbHguY29tLmJyL2ltYWdlcy8wNi8wNjkwNzAzNTg3MTYwMDkuanBnXCIsXHJcbiAgICAgIHZhbG9yOiBcIlIkIDIxMC4wMDAsMDBcIixcclxuICAgICAgc3RhdHVzOiBcIkNvbmNsdcOtZGFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGVuZGVyZWNvOiBcIkNhc2EgMyBRdWFydG9zLCAyIHN1w610ZXMgLCAxMTBtwrIgXCIsXHJcbiAgICAgIGJhaXJybzogXCJSZXNpZGVuY2lhbCBNb2luaG8gZG9zIHZlbnRvc1wiLFxyXG4gICAgICBpbWFnZW06IFwiaHR0cHM6Ly9yZXNpemVkaW1ncy56YXBpbW92ZWlzLmNvbS5ici9maXQtaW4vODAweDM2MC92ci5pbWFnZXMuc3AvZGY2MjRjYzJjOTlhMzhiYWMxODA0ZTQ1OGQzNTgwM2EuanBnXCIsXHJcbiAgICAgIHZhbG9yOiBcIlIkIDMxMC4wMDAsMDBcIixcclxuICAgICAgc3RhdHVzOiBcIkNvbmNsdcOtZGFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGVuZGVyZWNvOiBcIkNhc2EgMiBRdWFydG9zLCAyIHN1w610ZXMgLCAxMTBtwrIgXCIsXHJcbiAgICAgIGJhaXJybzogXCJSZXNpZGVuY2lhbCBDYW5hZGFcIixcclxuICAgICAgaW1hZ2VtOiBcImh0dHBzOi8vaW1nLm9seC5jb20uYnIvaW1hZ2VzLzA2LzA2OTA3MDM1ODcxNjAwOS5qcGdcIixcclxuICAgICAgdmFsb3I6IFwiUiQgMjEwLjAwMCwwMFwiLFxyXG4gICAgICBzdGF0dXM6IFwiQ29uY2x1w61kYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgZW5kZXJlY286IFwiQ2FzYSAzIFF1YXJ0b3MsIDIgc3XDrXRlcyAsIDExMG3CsiBcIixcclxuICAgICAgYmFpcnJvOiBcIlJlc2lkZW5jaWFsIE1vaW5obyBkb3MgdmVudG9zXCIsXHJcbiAgICAgIGltYWdlbTogXCJodHRwczovL3Jlc2l6ZWRpbWdzLnphcGltb3ZlaXMuY29tLmJyL2ZpdC1pbi84MDB4MzYwL3ZyLmltYWdlcy5zcC9kZjYyNGNjMmM5OWEzOGJhYzE4MDRlNDU4ZDM1ODAzYS5qcGdcIixcclxuICAgICAgdmFsb3I6IFwiUiQgMzEwLjAwMCwwMFwiLFxyXG4gICAgICBzdGF0dXM6IFwiQ29uY2x1w61kYVwiXHJcbiAgICB9LFxyXG4gIFxyXG4gIF07Il0sInNvdXJjZVJvb3QiOiIifQ==