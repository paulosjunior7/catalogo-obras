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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Detalhe_styles__WEBPACK_IMPORTED_MODULE_1__["Caroucel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "gallery js-flickity",
            "data-flickity-options": "{ \"wrapAround\": true }",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "gallery-cell",
              children: "  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 26
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "gallery-cell",
              children: "  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 26
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "gallery-cell",
              children: "  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 26
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "gallery-cell",
              children: "  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 26
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "gallery-cell",
              children: "  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 26
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 22
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 18
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 18
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: detalheCasa.endereco
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: detalheCasa.bairro
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: detalheCasa.detalhes.map(function (p) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: p
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Condi\xE7\xF5es de pagamento: ", detalheCasa.condicoes]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text--medium",
            children: detalheCasa.valor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "price text--medium",
            children: detalheCasa.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, _this)]
    }, detalheCasa.id, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWxoZS9pbmRleC50c3giXSwibmFtZXMiOlsiRGV0YWxoZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJkZXRhbGhlQ2FzYSIsIkNhc2FzIiwiZmluZCIsInAiLCJOdW1iZXIiLCJlbmRlcmVjbyIsImJhaXJybyIsImRldGFsaGVzIiwibWFwIiwiY29uZGljb2VzIiwidmFsb3IiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURrQixNQUVWQyxFQUZVLEdBRUhGLE1BQU0sQ0FBQ0csS0FGSixDQUVWRCxFQUZVO0FBSWxCLE1BQU1FLFdBQVcsR0FBR0Msd0RBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNMLEVBQUYsS0FBU00sTUFBTSxDQUFDTixFQUFELENBQW5CO0FBQUEsR0FBWixDQUFwQjtBQUVBLHNCQUNJLHFFQUFDLHlEQUFEO0FBQUEsMkJBR0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUEyQyxhQUFPLEVBQUUsbUJBQU0sQ0FBRyxDQUE3RDtBQUFBLDhCQUNLLHFFQUFDLHdEQUFEO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFDSSxxQ0FBc0IsMEJBRDFCO0FBQUEsb0NBRUk7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0k7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFNSTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURMLGVBZVE7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FLSTtBQUFBLG9CQUNLRSxXQUFXLENBQUNLO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFTSTtBQUFBLG9CQUNLTCxXQUFXLENBQUNNO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFhSTtBQUFBLG9CQUdRTixXQUFXLENBQUNPLFFBQVosQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFMLENBQUM7QUFBQSxnQ0FDdEI7QUFBQSx3QkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURzQjtBQUFBLFdBQTFCO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSixlQXdCSTtBQUFBLHVEQUM2QkgsV0FBVyxDQUFDUyxTQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKLGVBMkJJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQSxzQkFBNkJULFdBQVcsQ0FBQ1U7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUcscUJBQVMsRUFBQyxvQkFBYjtBQUFBLHNCQUFtQ1YsV0FBVyxDQUFDVztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZlI7QUFBQSxPQUEyQlgsV0FBVyxDQUFDRixFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0RILENBOUREOztHQUFNSCxPO1VBQ2FFLHFEOzs7S0FEYkYsTztBQWlFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGV0YWxoZS41ZWVmMGI1NWMzNGNjOTY0ZjJiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBDYXJkLCBDYXJvdWNlbCB9IGZyb20gJy4uL0RldGFsaGUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ2FzYXMgfSBmcm9tICcuLi8uLi91dGlscy9yZXNpZGVuY2lhcyc7XHJcblxyXG5jb25zdCBEZXRhbGhlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IGRldGFsaGVDYXNhID0gQ2FzYXMuZmluZChwID0+IHAuaWQgPT09IE51bWJlcihpZCkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtkZXRhbGhlQ2FzYS5pZH0gb25DbGljaz17KCkgPT4geyB9fT5cclxuICAgICAgICAgICAgICAgICA8Q2Fyb3VjZWw+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnkganMtZmxpY2tpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mbGlja2l0eS1vcHRpb25zPSd7IFwid3JhcEFyb3VuZFwiOiB0cnVlIH0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNlbGxcIj4gIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNlbGxcIj4gIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNlbGxcIj4gIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNlbGxcIj4gIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWNlbGxcIj4gIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvQ2Fyb3VjZWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFsaGVDYXNhLmVuZGVyZWNvfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWxoZUNhc2EuYmFpcnJvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFsaGVDYXNhLmRldGFsaGVzLm1hcChwID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57cH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZGnDp8O1ZXMgZGUgcGFnYW1lbnRvOiB7ZGV0YWxoZUNhc2EuY29uZGljb2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0tbWVkaXVtXCI+e2RldGFsaGVDYXNhLnZhbG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlIHRleHQtLW1lZGl1bVwiPntkZXRhbGhlQ2FzYS5zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWxoZTsiXSwic291cmNlUm9vdCI6IiJ9