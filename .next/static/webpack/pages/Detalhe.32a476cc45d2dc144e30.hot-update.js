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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_img_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-img-carousel */ "./node_modules/react-img-carousel/lib/index.js");
/* harmony import */ var react_img_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_img_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_residencias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/residencias */ "./utils/residencias.js");



var _jsxFileName = "C:\\fontesGit\\www\\teste\\catalogo-obras\\pages\\Detalhe\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




__webpack_require__(/*! react-img-carousel/lib/carousel.css */ "./node_modules/react-img-carousel/lib/carousel.css");



var Detalhe = function Detalhe() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  var detalheCasa = _utils_residencias__WEBPACK_IMPORTED_MODULE_3__["Casas"].find(function (p) {
    return p.id === Number(id);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_img_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      viewportWidth: "1024px",
      cellPadding: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://placekitten.com/200/300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://placekitten.com/300/300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://placekitten.com/400/300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), ","]
  }, void 0, true) // <Container>
  //     {
  //     <div className="card" key={detalheCasa.id} onClick={() => { }}>
  //             <div className="content">
  //                 <p >
  //                     {detalheCasa.endereco}
  //                 </p>
  //                 <p >
  //                     {detalheCasa.bairro}
  //                 </p>
  //                 <ul>
  //                     {
  //                         detalheCasa.detalhes.map(p =>
  //                             <li>{p}</li>
  //                         )
  //                     }
  //                 </ul>
  //                 <p >
  //                     Condições de pagamento: {detalheCasa.condicoes}
  //                 </p>
  //                 <div className="info">
  //                     <p className="text--medium">{detalheCasa.valor}</p>
  //                     <p className="price text--medium">{detalheCasa.status}</p>
  //                 </div>
  //             </div>
  //         </div>
  //     }
  // </Container>
  ;
};

_s(Detalhe, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWxoZS9pbmRleC50c3giXSwibmFtZXMiOlsicmVxdWlyZSIsIkRldGFsaGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGV0YWxoZUNhc2EiLCJDYXNhcyIsImZpbmQiLCJwIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFFQUEsbUJBQU8sQ0FBQywrRkFBRCxDQUFQOztBQUVBOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURrQixNQUVWQyxFQUZVLEdBRUhGLE1BQU0sQ0FBQ0csS0FGSixDQUVWRCxFQUZVO0FBSWxCLE1BQU1FLFdBQVcsR0FBR0Msd0RBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNMLEVBQUYsS0FBU00sTUFBTSxDQUFDTixFQUFELENBQW5CO0FBQUEsR0FBWixDQUFwQjtBQUVBLHNCQUVJO0FBQUEsNEJBQ0kscUVBQUMseURBQUQ7QUFBVSxtQkFBYSxFQUFDLFFBQXhCO0FBQWlDLGlCQUFXLEVBQUUsQ0FBOUM7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBSyxXQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFBQSxrQkFGSixDQVNJO0FBRUE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBbkRKO0FBcURILENBM0REOztHQUFNSCxPO1VBQ2FFLHFEOzs7S0FEYkYsTztBQThEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGV0YWxoZS4zMmE0NzZjYzQ1ZDJkYzE0NGUzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBDYXJkLCBDYXJvdWNlbCB9IGZyb20gJy4uL0RldGFsaGUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtaW1nLWNhcm91c2VsJztcclxuXHJcbnJlcXVpcmUoJ3JlYWN0LWltZy1jYXJvdXNlbC9saWIvY2Fyb3VzZWwuY3NzJyk7XHJcblxyXG5pbXBvcnQgeyBDYXNhcyB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc2lkZW5jaWFzJztcclxuXHJcbmNvbnN0IERldGFsaGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgZGV0YWxoZUNhc2EgPSBDYXNhcy5maW5kKHAgPT4gcC5pZCA9PT0gTnVtYmVyKGlkKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcm91c2VsIHZpZXdwb3J0V2lkdGg9XCIxMDI0cHhcIiBjZWxsUGFkZGluZz17NX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMCcgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3BsYWNla2l0dGVuLmNvbS8zMDAvMzAwJyAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC8zMDAnIC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+LFxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIC8vIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17ZGV0YWxoZUNhc2EuaWR9IG9uQ2xpY2s9eygpID0+IHsgfX0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7ZGV0YWxoZUNhc2EuZW5kZXJlY299XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwID5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtkZXRhbGhlQ2FzYS5iYWlycm99XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWxoZUNhc2EuZGV0YWxoZXMubWFwKHAgPT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwfTwvbGk+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBDb25kacOnw7VlcyBkZSBwYWdhbWVudG86IHtkZXRhbGhlQ2FzYS5jb25kaWNvZXN9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS1tZWRpdW1cIj57ZGV0YWxoZUNhc2EudmFsb3J9PC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgdGV4dC0tbWVkaXVtXCI+e2RldGFsaGVDYXNhLnN0YXR1c308L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhbGhlOyJdLCJzb3VyY2VSb290IjoiIn0=