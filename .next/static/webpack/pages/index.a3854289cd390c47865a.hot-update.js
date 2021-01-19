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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\n\nhtml {\n  /* a cada 1rem ser\xE1 considera 10px */\n  font-size: 62.5%;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  font-family: \"Source Sans Pro\";\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n\nheader {\n  background-color: #7159c1;\n  height: 55px;\n  display: flex;  \n  width: 100%;\n  justify-content: flex-end;\n  align-items: center;\n  color: #fff;\n  padding-right: 32px;\n\n  p {\n    font-size: 25px;\n  }\n}\n\nheader .container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  width: 90%;\n  max-width: 980px;\n  \n  margin: auto;\n}\n\nheader img {\n  width: 150px;\n  margin-left: 20px;\n  padding: 15px 0;\n}\n\nheader nav ul {\n  display: flex;\n}\n\nheader nav ul li {\n  list-style: none;\n}\n\nheader nav ul li a {\n  text-decoration: none;\n  color: white;\n  text-transform: uppercase;\n  font-size: 1.4rem; \n  padding: 2.4rem;\n  transition: all 250ms linear 0s;\n}\n\nheader nav ul li a:hover {\n  background: rgba(255,255,255, 0.15)\n}\n\nh2 {\n  color: rgb(75, 75, 75);\n  font-size: 3.6rem;\n  line-height: 4.6rem;\n}\n\nh3 {\n  color: rgb(75, 75, 75);\n  font-size: 2.8rem;\n  line-height: 3.8rem;\n}\n\n.button {\n  display: inline-block;\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: rgb(255, 255, 255);\n  background-color: rgb(113, 89, 193);\n  margin: 15px 0px 0px;\n  padding: 12px 30px;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: all 150ms linear 0s;\n}\n\n.button:hover {\n  opacity: 0.9;\n}\n\n\n/*=============== \nHERO\n==================*/\nsection.hero {\n  margin: 80px 0;\n}\n\nsection.hero .container {\n  width: 90%;\n  max-width: 980px;\n\n  margin: auto;\n\n  display: flex;\n}\n\nsection.hero p {\n  color: rgb(154, 142, 191);\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin: 10px 0px 0px;\n}\n\n\n\n/*=============== \nMAIN\n==================*/\nmain {\n  margin-bottom: 80px;\n}\n/*=============== \nCARDS\n==================*/\n.cards {\n  width: 90%;\n  max-width: 980px;\n  margin: auto;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 20px;\n}\n\n.text--medium {\n  font-size: 1.6rem;\n  line-height: 2.6rem;\n  font-weight: 400;\n  color: #ecf0f1;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  background-color: #7159c1;\n  cursor: pointer;\n  transition: all 0.3s ease 0s;\n\n}\n\n.card:hover {\n  transform: translateY(-7px);\n}\n\n.image {\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 */\n\n  overflow: hidden;\n  position: relative;\n}\n\n.image img {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.content {\n  margin: 20px;\n}\n\n.title {\n  margin-bottom: 20px;\n}\n\n.info {\n  display: flex;\n  align-self: end;\n  align-items: center;\n}\n\n.price {\n  margin-left: auto;\n  padding: 5px 20px;\n  border-radius: 20px;\n  background-color: #7159c1;\n  filter: brightness(90%);\n}\n\n/*=============== \nMODAL\n==================*/\n.modal-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n  visibility: hidden;\n}\n.modal-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n.modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  \n  background-color: #fff;\n  \n  width: 95%;\n  height: 95%;\n  \n  margin: 0 auto;\n  padding: 10px;\n  \n  border-radius: 3px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  \n  opacity: 0;\n  overflow-y: auto;\n  visibility: hidden;\n  \n  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);\n  transform: scale(1.2);\n}\n.modal .close-modal {\n  position: absolute;\n  cursor: pointer;\n\n  top: 5px;\n  right: 15px;\n  \n  opacity: 0;\n  \n  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);\n  transition-delay: 0.3s;\n}\n.modal .close-modal svg {\n  width: 18px;\n  height: 18px;\n}\n.modal .modal-content {\n  opacity: 0;\n  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);\n  transition-delay: 0.3s;\n}\n.modal.active {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1);\n}\n.modal.active .modal-content {\n  opacity: 1;\n}\n.modal.active .close-modal {\n  transform: translateY(10px);\n  opacity: 1;\n}\n\n.video-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -99;\n  background-color: white;\n}\n.video-foreground,\n.video-background iframe {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 90%;\n  transform: translate(-50%, -50%);\n}\n\n\n\n/*=============== \nFORM\n==================*/\n#form {\n  width:100%;\n\n  background: #7159c1;\n  padding: 80px 0;\n  margin:0;\n\n  display:flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#form form {\n  width: 90%;\n  max-width: 980px;\n\n  background: white;\n  \n  padding: 40px;\n  \n  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15), \n    0px 10px 20px -10px rgba(0, 0, 0, 0.1)\n}\n\n#form h3 {\n  margin-bottom: 30px\n}\n\n#form form label {\n  display: none;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: row;\n}\n\n.form-group label.right-inline {\n  text-align: right;  \n  padding-right: 8px;\n  padding-left: 10px;\n  width: auto;\n}\n\n.form-group .input-control {\n  flex: 1 1;\n  display: block;\n  margin: -4px 8px 10px;\n  padding: 12px;\n  font-size: 1.6rem;\n}\n\n#form .button {\n  margin: 20px 8px 10px;\n}\n\n \n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC50cyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWVBLDBJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzODU0Mjg5Y2QzOTBjNDc4NjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvXCIpO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAvKiBhIGNhZGEgMXJlbSBzZXLDoSBjb25zaWRlcmEgMTBweCAqL1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCI7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbmhlYWRlciAuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXIgaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuNHJlbTsgXHJcbiAgcGFkZGluZzogMi40cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXIgMHM7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC4xNSlcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgZm9udC1zaXplOiAzLjZyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDQuNnJlbTtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMuOHJlbTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCA4OSwgMTkzKTtcclxuICBtYXJnaW46IDE1cHggMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyIDBzO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PSBcclxuSEVST1xyXG49PT09PT09PT09PT09PT09PT0qL1xyXG5zZWN0aW9uLmhlcm8ge1xyXG4gIG1hcmdpbjogODBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uLmhlcm8gLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG5cclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnNlY3Rpb24uaGVybyBwIHtcclxuICBjb2xvcjogcmdiKDE1NCwgMTQyLCAxOTEpO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT0gXHJcbk1BSU5cclxuPT09PT09PT09PT09PT09PT09Ki9cclxubWFpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG4vKj09PT09PT09PT09PT09PSBcclxuQ0FSRFNcclxuPT09PT09PT09PT09PT09PT09Ki9cclxuLmNhcmRzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC0tbWVkaXVtIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMi42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNlY2YwZjE7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuXHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDU2LjI1JTsgLyogMTY6OSAqL1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTU5YzE7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09IFxyXG5NT0RBTFxyXG49PT09PT09PT09PT09PT09PT0qL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLm1vZGFsLW92ZXJsYXkuYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBcclxuICBvcGFjaXR5OiAwO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG4ubW9kYWwgLmNsb3NlLW1vZGFsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTVweDtcclxuICBcclxuICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKSwgdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxufVxyXG4ubW9kYWwgLmNsb3NlLW1vZGFsIHN2ZyB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxufVxyXG4ubW9kYWwuYWN0aXZlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ubW9kYWwuYWN0aXZlIC5tb2RhbC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5tb2RhbC5hY3RpdmUgLmNsb3NlLW1vZGFsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnZpZGVvLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi52aWRlby1mb3JlZ3JvdW5kLFxyXG4udmlkZW8tYmFja2dyb3VuZCBpZnJhbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT0gXHJcbkZPUk1cclxuPT09PT09PT09PT09PT09PT09Ki9cclxuI2Zvcm0ge1xyXG4gIHdpZHRoOjEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQ6ICM3MTU5YzE7XHJcbiAgcGFkZGluZzogODBweCAwO1xyXG4gIG1hcmdpbjowO1xyXG5cclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm0gZm9ybSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIFxyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBcclxuICAgIDBweCAxMHB4IDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpXHJcbn1cclxuXHJcbiNmb3JtIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbn1cclxuXHJcbiNmb3JtIGZvcm0gbGFiZWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsLnJpZ2h0LWlubGluZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7ICBcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAuaW5wdXQtY29udHJvbCB7XHJcbiAgZmxleDogMSAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogLTRweCA4cHggMTBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4jZm9ybSAuYnV0dG9uIHtcclxuICBtYXJnaW46IDIwcHggOHB4IDEwcHg7XHJcbn1cclxuXHJcbiBcclxuYDsiXSwic291cmNlUm9vdCI6IiJ9