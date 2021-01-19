webpackHotUpdate_N_E("pages/Detalhe",{

/***/ "./pages/Detalhe/styles.ts":
/*!*********************************!*\
  !*** ./pages/Detalhe/styles.ts ***!
  \*********************************/
/*! exports provided: Container, Card, Caroucel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caroucel", function() { return Caroucel; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    /* external css: flickity.css */\n\n* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nbody { font-family: sans-serif; }\n\n.gallery {\n  background: #EEE;\n}\n\n.gallery-cell {\n  width: 66%;\n  height: 200px;\n  margin-right: 10px;\n  background: #8C8;\n  counter-increment: gallery-cell;\n}\n\n/* cell number */\n.gallery-cell:before {\n  display: block;\n  text-align: center;\n  content: counter(gallery-cell);\n  line-height: 200px;\n  font-size: 80px;\n  color: white;\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 600px;\n    height: 400px;\n    border: 1px solid #ccc;\n    border-radius: 15px;\n    padding: 32px;\n\n \n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .cards {\n        width: 90%;\n        max-width: 1024px;\n        margin: auto;\n\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n        grid-gap: 20px;\n    }\n\n    .text--medium {\n    font-size: 1.6rem;\n    line-height: 2.6rem;\n    font-weight: 400;\n    color: #ecf0f1;\n    }\n\n.card {\n        display: flex;\n        flex-direction: column;\n        background-color: #7159c1;\n        cursor: pointer;\n        transition: all 0.3s ease 0s;\n\n}\n\n.card:hover {\n  transform: translateY(-7px);\n}\n\n.image {\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 */\n\n  overflow: hidden;\n  position: relative;\n  display: flex;\n}\n\n.image img {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.content {\n  margin: 20px;\n}\n\n.title {\n  margin-bottom: 20px;\n}\n\n.info {\n  display: flex;\n  align-self: end;\n  align-items: center;\n}\n\n.price {\n  margin-left: auto;\n  padding: 5px 20px;\n  border-radius: 20px;\n  background-color: #7159c1;\n  filter: brightness(90%);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Caroucel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWxoZS9zdHlsZXMudHMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkNhcm91Y2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtBQThFQSxJQUFNQyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQVY7QUFXQSxJQUFNRSxRQUFRLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGV0YWxoZS5jNzY0MmQwOGNiZTQ5Y2MyMDI0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuY2FyZHMge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LS1tZWRpdW0ge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZWNmMGYxO1xyXG4gICAgfVxyXG5cclxuLmNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE1OWMxO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTYuMjUlOyAvKiAxNjo5ICovXHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE1OWMxO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcblxyXG4gXHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VjZWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgLyogZXh0ZXJuYWwgY3NzOiBmbGlja2l0eS5jc3MgKi9cclxuXHJcbioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjRUVFO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1jZWxsIHtcclxuICB3aWR0aDogNjYlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM4Qzg7XHJcbiAgY291bnRlci1pbmNyZW1lbnQ6IGdhbGxlcnktY2VsbDtcclxufVxyXG5cclxuLyogY2VsbCBudW1iZXIgKi9cclxuLmdhbGxlcnktY2VsbDpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb250ZW50OiBjb3VudGVyKGdhbGxlcnktY2VsbCk7XHJcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=