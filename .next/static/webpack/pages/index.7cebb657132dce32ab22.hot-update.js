webpackHotUpdate_N_E("pages/index",{

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\n\nhtml {\n  /* a cada 1rem ser\xE1 considera 10px */\n  font-size: 62.5%;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  font-family: \"Source Sans Pro\";\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n\nheader {\n  background-color: #7159c1;\n  height: 55px;\n  display: flex;  \n  width: 100%;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n\n  p {\n    font-size: 25px;\n  }\n}\n\nheader .container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  width: 90%;\n  max-width: 980px;\n  \n  margin: auto;\n}\n\nheader img {\n  width: 150px;\n  margin-left: 20px;\n  padding: 15px 0;\n}\n\nheader nav ul {\n  display: flex;\n}\n\nheader nav ul li {\n  list-style: none;\n}\n\nheader nav ul li a {\n  text-decoration: none;\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.4rem; \n  padding: 2.4rem;\n  transition: all 250ms linear 0s;\n}\n\nheader nav ul li a:hover {\n  background: rgba(255,255,255, 0.15)\n}\n\nh2 {\n  color: rgb(75, 75, 75);\n  font-size: 3.6rem;\n  line-height: 4.6rem;\n}\n\nh3 {\n  color: rgb(75, 75, 75);\n  font-size: 2.8rem;\n  line-height: 3.8rem;\n}\n\n.button {\n  display: inline-block;\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: rgb(255, 255, 255);\n  background-color: rgb(113, 89, 193);\n  margin: 15px 0px 0px;\n  padding: 12px 30px;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: all 150ms linear 0s;\n}\n\n.button:hover {\n  opacity: 0.9;\n}\n\n\n/*=============== \nHERO\n==================*/\nsection.hero {\n  margin: 80px 0;\n}\n\nsection.hero .container {\n  width: 90%;\n  max-width: 980px;\n\n  margin: auto;\n\n  display: flex;\n}\n\nsection.hero p {\n  color: rgb(154, 142, 191);\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin: 10px 0px 0px;\n}\n\n\n\n/*=============== \nMAIN\n==================*/\nmain {\n  margin-bottom: 80px;\n}\n/*=============== \nCARDS\n==================*/\n.cards {\n  width: 90%;\n  max-width: 980px;\n  margin: auto;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 20px;\n}\n\n.text--medium {\n  font-size: 1.6rem;\n  line-height: 2.6rem;\n  font-weight: 400;\n  color: #ecf0f1;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  background-color: #7159c1;\n  cursor: pointer;\n  transition: all 0.3s ease 0s;\n\n}\n\n.card:hover {\n  transform: translateY(-7px);\n}\n\n.image {\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 */\n\n  overflow: hidden;\n  position: relative;\n}\n\n.image img {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.content {\n  margin: 20px;\n}\n\n.title {\n  margin-bottom: 20px;\n}\n\n.info {\n  display: flex;\n  align-self: end;\n  align-items: center;\n}\n\n.price {\n  margin-left: auto;\n  padding: 5px 20px;\n  border-radius: 20px;\n  background-color: #7159c1;\n  filter: brightness(90%);\n}\n\n/*=============== \nMODAL\n==================*/\n.modal-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n  visibility: hidden;\n}\n.modal-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n.modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  \n  background-color: #fff;\n  \n  width: 95%;\n  height: 95%;\n  \n  margin: 0 auto;\n  padding: 10px;\n  \n  border-radius: 3px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  \n  opacity: 0;\n  overflow-y: auto;\n  visibility: hidden;\n  \n  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);\n  transform: scale(1.2);\n}\n.modal .close-modal {\n  position: absolute;\n  cursor: pointer;\n\n  top: 5px;\n  right: 15px;\n  \n  opacity: 0;\n  \n  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);\n  transition-delay: 0.3s;\n}\n.modal .close-modal svg {\n  width: 18px;\n  height: 18px;\n}\n.modal .modal-content {\n  opacity: 0;\n  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);\n  transition-delay: 0.3s;\n}\n.modal.active {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1);\n}\n.modal.active .modal-content {\n  opacity: 1;\n}\n.modal.active .close-modal {\n  transform: translateY(10px);\n  opacity: 1;\n}\n\n.video-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -99;\n  background-color: white;\n}\n.video-foreground,\n.video-background iframe {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 90%;\n  transform: translate(-50%, -50%);\n}\n\n\n\n/*=============== \nFORM\n==================*/\n#form {\n  width:100%;\n\n  background: #7159c1;\n  padding: 80px 0;\n  margin:0;\n\n  display:flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#form form {\n  width: 90%;\n  max-width: 980px;\n\n  background: white;\n  \n  padding: 40px;\n  \n  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15), \n    0px 10px 20px -10px rgba(0, 0, 0, 0.1)\n}\n\n#form h3 {\n  margin-bottom: 30px\n}\n\n#form form label {\n  display: none;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: row;\n}\n\n.form-group label.right-inline {\n  text-align: right;  \n  padding-right: 8px;\n  padding-left: 10px;\n  width: auto;\n}\n\n.form-group .input-control {\n  flex: 1 1;\n  display: block;\n  margin: -4px 8px 10px;\n  padding: 12px;\n  font-size: 1.6rem;\n}\n\n#form .button {\n  margin: 20px 8px 10px;\n}\n\n \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject()));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC50cyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWVBLDBJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdjZWJiNjU3MTMyZGNlMzJhYjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvXCIpO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAvKiBhIGNhZGEgMXJlbSBzZXLDoSBjb25zaWRlcmEgMTBweCAqL1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCI7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5oZWFkZXIgLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIFxyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07IFxyXG4gIHBhZGRpbmc6IDIuNHJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgbGluZWFyIDBzO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMTUpXHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xyXG4gIGZvbnQtc2l6ZTogMy42cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0LjZyZW07XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xyXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjhyZW07XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgODksIDE5Myk7XHJcbiAgbWFyZ2luOiAxNXB4IDBweCAwcHg7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGxpbmVhciAwcztcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT0gXHJcbkhFUk9cclxuPT09PT09PT09PT09PT09PT09Ki9cclxuc2VjdGlvbi5oZXJvIHtcclxuICBtYXJnaW46IDgwcHggMDtcclxufVxyXG5cclxuc2VjdGlvbi5oZXJvIC5jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5zZWN0aW9uLmhlcm8gcCB7XHJcbiAgY29sb3I6IHJnYigxNTQsIDE0MiwgMTkxKTtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMy4ycmVtO1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09IFxyXG5NQUlOXHJcbj09PT09PT09PT09PT09PT09PSovXHJcbm1haW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuLyo9PT09PT09PT09PT09PT0gXHJcbkNBUkRTXHJcbj09PT09PT09PT09PT09PT09PSovXHJcbi5jYXJkcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMjBweDtcclxufVxyXG5cclxuLnRleHQtLW1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjZWNmMGYxO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTU5YzE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcblxyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7IC8qIDE2OjkgKi9cclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE1OWMxO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PSBcclxuTU9EQUxcclxuPT09PT09PT09PT09PT09PT09Ki9cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5tb2RhbC1vdmVybGF5LmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIFxyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgXHJcbiAgb3BhY2l0eTogMDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLm1vZGFsIC5jbG9zZS1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgXHJcbiAgb3BhY2l0eTogMDtcclxuICBcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSksIHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLm1vZGFsIC5jbG9zZS1tb2RhbCBzdmcge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLm1vZGFsLmFjdGl2ZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuLm1vZGFsLmFjdGl2ZSAubW9kYWwtY29udGVudCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ubW9kYWwuYWN0aXZlIC5jbG9zZS1tb2RhbCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi52aWRlby1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IC05OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4udmlkZW8tZm9yZWdyb3VuZCxcclxuLnZpZGVvLWJhY2tncm91bmQgaWZyYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09IFxyXG5GT1JNXHJcbj09PT09PT09PT09PT09PT09PSovXHJcbiNmb3JtIHtcclxuICB3aWR0aDoxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjNzE1OWMxO1xyXG4gIHBhZGRpbmc6IDgwcHggMDtcclxuICBtYXJnaW46MDtcclxuXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNmb3JtIGZvcm0ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgXHJcbiAgcGFkZGluZzogNDBweDtcclxuICBcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgXHJcbiAgICAwcHggMTBweCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4xKVxyXG59XHJcblxyXG4jZm9ybSBoMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweFxyXG59XHJcblxyXG4jZm9ybSBmb3JtIGxhYmVsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbC5yaWdodC1pbmxpbmUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyAgXHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLmlucHV0LWNvbnRyb2wge1xyXG4gIGZsZXg6IDEgMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IC00cHggOHB4IDEwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuI2Zvcm0gLmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAyMHB4IDhweCAxMHB4O1xyXG59XHJcblxyXG4gXHJcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==