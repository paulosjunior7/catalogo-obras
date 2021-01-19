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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Detalhe/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-img-carousel/lib/carousel.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/carousel.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Detalhe/index.tsx":
/*!*********************************!*\
  !*** ./pages/Detalhe/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Detalhe_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Detalhe/styles */ "./pages/Detalhe/styles.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_img_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-img-carousel */ "react-img-carousel");
/* harmony import */ var react_img_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_img_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_residencias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/residencias */ "./utils/residencias.js");

var _jsxFileName = "C:\\fontesGit\\www\\teste\\catalogo-obras\\pages\\Detalhe\\index.tsx";




__webpack_require__(/*! react-img-carousel/lib/carousel.css */ "./node_modules/react-img-carousel/lib/carousel.css");



const Detalhe = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const detalheCasa = _utils_residencias__WEBPACK_IMPORTED_MODULE_4__["Casas"].find(p => p.id === Number(id));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Detalhe_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card",
      onClick: () => {},
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_img_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
          viewportWidth: "1024px",
          cellPadding: 5,
          children: detalheCasa.imagens.map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: p
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 37
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [" ", detalheCasa.endereco]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [" ", detalheCasa.bairro]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: detalheCasa.detalhes.map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: p
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 37
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Condi\xE7\xF5es de pagamento: ", detalheCasa.condicoes, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text--medium",
            children: detalheCasa.valor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "price text--medium",
            children: detalheCasa.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, undefined)
    }, detalheCasa.id, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Detalhe);

/***/ }),

/***/ "./pages/Detalhe/styles.ts":
/*!*********************************!*\
  !*** ./pages/Detalhe/styles.ts ***!
  \*********************************/
/*! exports provided: Container, Card, Caroucel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caroucel", function() { return Caroucel; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .cards {
        width: 90%;
        max-width: 1024px;
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
    }

    .text--medium {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: #ecf0f1;
    }

.card {
        display: flex;
        flex-direction: column;
        background-color: #7159c1;
        cursor: pointer;
        transition: all 0.3s ease 0s;

}

.card:hover {
  transform: translateY(-7px);
}

.image {

}

.image img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  margin: 20px;

  p {
      font-size: 20;
  }

  li {
      font-size: 20;
  }
}

.title {
  margin-bottom: 20px;
}

.info {
  display: flex;
  align-self: end;
  align-items: center;
}

.price {
  margin-left: auto;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #7159c1;
  filter: brightness(90%);
}
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 600px;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 32px;

 

`;
const Caroucel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    /* external css: flickity.css */

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body { font-family: sans-serif; }

.gallery {
  background: #EEE;
}

.gallery-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  counter-increment: gallery-cell;
}

/* cell number */
.gallery-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
`;

/***/ }),

/***/ "./utils/residencias.js":
/*!******************************!*\
  !*** ./utils/residencias.js ***!
  \******************************/
/*! exports provided: Casas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Casas", function() { return Casas; });
const Casas = [{
  id: 1,
  endereco: "Rua RC 8, Quadra 11, Lote 14 , Casa 1",
  bairro: "Residencial Canada, Goiânia",
  valor: "R$ 210.000,00",
  status: "Concluída",
  detalhes: ["2 quartos sendo 1 suite", "Closet", "Sala", "Cozinha americana", "Banheiro social", "Área de serviço", "Garagem coberta", "Área de churrasco"],
  condicoes: "Financiamento bancário ou a vista",
  metragem: "90m²",
  fracaolote: "150m²",
  imagens: ["https://placekitten.com/200/300", "https://placekitten.com/300/300", "https://placekitten.com/400/300"]
}, {
  id: 1,
  endereco: "Rua RC 8, Quadra 11, Lote 14 , Casa 1",
  bairro: "Residencial Canada, Goiânia",
  valor: "R$ 210.000,00",
  status: "Concluída",
  detalhes: ["2 quartos sendo 1 suite", "Closet", "Sala", "Cozinha americana", "Banheiro social", "Área de serviço", "Garagem coberta", "Área de churrasco"],
  condicoes: "Financiamento bancário ou a vista",
  metragem: "90m²",
  fracaolote: "150m²",
  imagens: ["https://placekitten.com/200/300", "https://placekitten.com/300/300", "https://placekitten.com/400/300"]
}, {
  id: 1,
  endereco: "Rua RC 8, Quadra 11, Lote 14 , Casa 1",
  bairro: "Residencial Canada, Goiânia",
  valor: "R$ 210.000,00",
  status: "Concluída",
  detalhes: ["2 quartos sendo 1 suite", "Closet", "Sala", "Cozinha americana", "Banheiro social", "Área de serviço", "Garagem coberta", "Área de churrasco"],
  condicoes: "Financiamento bancário ou a vista",
  metragem: "90m²",
  fracaolote: "150m²",
  imagens: ["https://placekitten.com/200/300", "https://placekitten.com/300/300", "https://placekitten.com/400/300"]
}, {
  id: 1,
  endereco: "Rua RC 8, Quadra 11, Lote 14 , Casa 1",
  bairro: "Residencial Canada, Goiânia",
  valor: "R$ 210.000,00",
  status: "Concluída",
  detalhes: ["2 quartos sendo 1 suite", "Closet", "Sala", "Cozinha americana", "Banheiro social", "Área de serviço", "Garagem coberta", "Área de churrasco"],
  condicoes: "Financiamento bancário ou a vista",
  metragem: "90m²",
  fracaolote: "150m²",
  imagens: ["https://placekitten.com/200/300", "https://placekitten.com/300/300", "https://placekitten.com/400/300"]
}, {
  id: 1,
  endereco: "Rua RC 8, Quadra 11, Lote 14 , Casa 1",
  bairro: "Residencial Canada, Goiânia",
  valor: "R$ 210.000,00",
  status: "Concluída",
  detalhes: ["2 quartos sendo 1 suite", "Closet", "Sala", "Cozinha americana", "Banheiro social", "Área de serviço", "Garagem coberta", "Área de churrasco"],
  condicoes: "Financiamento bancário ou a vista",
  metragem: "90m²",
  fracaolote: "150m²",
  imagens: ["https://placekitten.com/200/300", "https://placekitten.com/300/300", "https://placekitten.com/400/300"]
}, {
  id: 1,
  endereco: "Rua RC 8, Quadra 11, Lote 14 , Casa 1",
  bairro: "Residencial Canada, Goiânia",
  valor: "R$ 210.000,00",
  status: "Concluída",
  detalhes: ["2 quartos sendo 1 suite", "Closet", "Sala", "Cozinha americana", "Banheiro social", "Área de serviço", "Garagem coberta", "Área de churrasco"],
  condicoes: "Financiamento bancário ou a vista",
  metragem: "90m²",
  fracaolote: "150m²",
  imagens: ["https://placekitten.com/200/300", "https://placekitten.com/300/300", "https://placekitten.com/400/300"]
}];

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react-img-carousel":
/*!*************************************!*\
  !*** external "react-img-carousel" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-img-carousel");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRGV0YWxoZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRGV0YWxoZS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVzaWRlbmNpYXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbWctY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJEZXRhbGhlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImRldGFsaGVDYXNhIiwiQ2FzYXMiLCJmaW5kIiwicCIsIk51bWJlciIsImltYWdlbnMiLCJtYXAiLCJlbmRlcmVjbyIsImJhaXJybyIsImRldGFsaGVzIiwiY29uZGljb2VzIiwidmFsb3IiLCJzdGF0dXMiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDYXJkIiwiQ2Fyb3VjZWwiLCJtZXRyYWdlbSIsImZyYWNhb2xvdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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d0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvRGV0YWxoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvRGV0YWxoZS9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENhcmQsIENhcm91Y2VsIH0gZnJvbSAnLi4vRGV0YWxoZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1pbWctY2Fyb3VzZWwnO1xyXG5cclxucmVxdWlyZSgncmVhY3QtaW1nLWNhcm91c2VsL2xpYi9jYXJvdXNlbC5jc3MnKTtcclxuXHJcbmltcG9ydCB7IENhc2FzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzaWRlbmNpYXMnO1xyXG5cclxuY29uc3QgRGV0YWxoZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgICBjb25zdCBkZXRhbGhlQ2FzYSA9IENhc2FzLmZpbmQocCA9PiBwLmlkID09PSBOdW1iZXIoaWQpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtkZXRhbGhlQ2FzYS5pZH0gb25DbGljaz17KCkgPT4geyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHZpZXdwb3J0V2lkdGg9XCIxMDI0cHhcIiBjZWxsUGFkZGluZz17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWxoZUNhc2EuaW1hZ2Vucy5tYXAocCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtkZXRhbGhlQ2FzYS5lbmRlcmVjb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7ZGV0YWxoZUNhc2EuYmFpcnJvfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhbGhlQ2FzYS5kZXRhbGhlcy5tYXAocCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3B9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db25kacOnw7VlcyBkZSBwYWdhbWVudG86IHtkZXRhbGhlQ2FzYS5jb25kaWNvZXN9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS1tZWRpdW1cIj57ZGV0YWxoZUNhc2EudmFsb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgdGV4dC0tbWVkaXVtXCI+e2RldGFsaGVDYXNhLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhbGhlOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmNhcmRzIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgICAgICBncmlkLWdhcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC0tbWVkaXVtIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2VjZjBmMTtcclxuICAgIH1cclxuXHJcbi5jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuXHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcblxyXG59XHJcblxyXG4uaW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICBwIHtcclxuICAgICAgZm9udC1zaXplOiAyMDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgICAgZm9udC1zaXplOiAyMDtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE1OWMxO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcblxyXG4gXHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VjZWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgLyogZXh0ZXJuYWwgY3NzOiBmbGlja2l0eS5jc3MgKi9cclxuXHJcbioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjRUVFO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1jZWxsIHtcclxuICB3aWR0aDogNjYlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM4Qzg7XHJcbiAgY291bnRlci1pbmNyZW1lbnQ6IGdhbGxlcnktY2VsbDtcclxufVxyXG5cclxuLyogY2VsbCBudW1iZXIgKi9cclxuLmdhbGxlcnktY2VsbDpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb250ZW50OiBjb3VudGVyKGdhbGxlcnktY2VsbCk7XHJcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYCIsImV4cG9ydCBjb25zdCBDYXNhcyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGVuZGVyZWNvOiBcIlJ1YSBSQyA4LCBRdWFkcmEgMTEsIExvdGUgMTQgLCBDYXNhIDFcIixcclxuICAgICAgYmFpcnJvOiBcIlJlc2lkZW5jaWFsIENhbmFkYSwgR29pw6JuaWFcIixcclxuICAgICAgdmFsb3I6IFwiUiQgMjEwLjAwMCwwMFwiLFxyXG4gICAgICBzdGF0dXM6IFwiQ29uY2x1w61kYVwiLFxyXG4gICAgICBkZXRhbGhlczogW1xyXG4gICAgICAgIFwiMiBxdWFydG9zIHNlbmRvIDEgc3VpdGVcIiwgXHJcbiAgICAgICAgXCJDbG9zZXRcIiAsIFxyXG4gICAgICAgIFwiU2FsYVwiICwgXHJcbiAgICAgICAgXCJDb3ppbmhhIGFtZXJpY2FuYVwiLCBcclxuICAgICAgICBcIkJhbmhlaXJvIHNvY2lhbFwiLCBcclxuICAgICAgICBcIsOBcmVhIGRlIHNlcnZpw6dvXCIsIFxyXG4gICAgICAgIFwiR2FyYWdlbSBjb2JlcnRhXCIsXHJcbiAgICAgICAgXCLDgXJlYSBkZSBjaHVycmFzY29cIl0sXHJcbiAgICAgIGNvbmRpY29lczogXCJGaW5hbmNpYW1lbnRvIGJhbmPDoXJpbyBvdSBhIHZpc3RhXCIsXHJcbiAgICAgIG1ldHJhZ2VtOiBcIjkwbcKyXCIsXHJcbiAgICAgIGZyYWNhb2xvdGU6IFwiMTUwbcKyXCIsXHJcbiAgICAgIGltYWdlbnM6IFtcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzMwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC8zMDBcIlxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZW5kZXJlY286IFwiUnVhIFJDIDgsIFF1YWRyYSAxMSwgTG90ZSAxNCAsIENhc2EgMVwiLFxyXG4gICAgICBiYWlycm86IFwiUmVzaWRlbmNpYWwgQ2FuYWRhLCBHb2nDom5pYVwiLFxyXG4gICAgICB2YWxvcjogXCJSJCAyMTAuMDAwLDAwXCIsXHJcbiAgICAgIHN0YXR1czogXCJDb25jbHXDrWRhXCIsXHJcbiAgICAgIGRldGFsaGVzOiBbXHJcbiAgICAgICAgXCIyIHF1YXJ0b3Mgc2VuZG8gMSBzdWl0ZVwiLCBcclxuICAgICAgICBcIkNsb3NldFwiICwgXHJcbiAgICAgICAgXCJTYWxhXCIgLCBcclxuICAgICAgICBcIkNvemluaGEgYW1lcmljYW5hXCIsIFxyXG4gICAgICAgIFwiQmFuaGVpcm8gc29jaWFsXCIsIFxyXG4gICAgICAgIFwiw4FyZWEgZGUgc2VydmnDp29cIiwgXHJcbiAgICAgICAgXCJHYXJhZ2VtIGNvYmVydGFcIixcclxuICAgICAgICBcIsOBcmVhIGRlIGNodXJyYXNjb1wiXSxcclxuICAgICAgY29uZGljb2VzOiBcIkZpbmFuY2lhbWVudG8gYmFuY8OhcmlvIG91IGEgdmlzdGFcIixcclxuICAgICAgbWV0cmFnZW06IFwiOTBtwrJcIixcclxuICAgICAgZnJhY2FvbG90ZTogXCIxNTBtwrJcIixcclxuICAgICAgaW1hZ2VuczogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMzAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vNDAwLzMwMFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBlbmRlcmVjbzogXCJSdWEgUkMgOCwgUXVhZHJhIDExLCBMb3RlIDE0ICwgQ2FzYSAxXCIsXHJcbiAgICAgIGJhaXJybzogXCJSZXNpZGVuY2lhbCBDYW5hZGEsIEdvacOibmlhXCIsXHJcbiAgICAgIHZhbG9yOiBcIlIkIDIxMC4wMDAsMDBcIixcclxuICAgICAgc3RhdHVzOiBcIkNvbmNsdcOtZGFcIixcclxuICAgICAgZGV0YWxoZXM6IFtcclxuICAgICAgICBcIjIgcXVhcnRvcyBzZW5kbyAxIHN1aXRlXCIsIFxyXG4gICAgICAgIFwiQ2xvc2V0XCIgLCBcclxuICAgICAgICBcIlNhbGFcIiAsIFxyXG4gICAgICAgIFwiQ296aW5oYSBhbWVyaWNhbmFcIiwgXHJcbiAgICAgICAgXCJCYW5oZWlybyBzb2NpYWxcIiwgXHJcbiAgICAgICAgXCLDgXJlYSBkZSBzZXJ2acOnb1wiLCBcclxuICAgICAgICBcIkdhcmFnZW0gY29iZXJ0YVwiLFxyXG4gICAgICAgIFwiw4FyZWEgZGUgY2h1cnJhc2NvXCJdLFxyXG4gICAgICBjb25kaWNvZXM6IFwiRmluYW5jaWFtZW50byBiYW5jw6FyaW8gb3UgYSB2aXN0YVwiLFxyXG4gICAgICBtZXRyYWdlbTogXCI5MG3CslwiLFxyXG4gICAgICBmcmFjYW9sb3RlOiBcIjE1MG3CslwiLFxyXG4gICAgICBpbWFnZW5zOiBbXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8zMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS80MDAvMzAwXCJcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGVuZGVyZWNvOiBcIlJ1YSBSQyA4LCBRdWFkcmEgMTEsIExvdGUgMTQgLCBDYXNhIDFcIixcclxuICAgICAgYmFpcnJvOiBcIlJlc2lkZW5jaWFsIENhbmFkYSwgR29pw6JuaWFcIixcclxuICAgICAgdmFsb3I6IFwiUiQgMjEwLjAwMCwwMFwiLFxyXG4gICAgICBzdGF0dXM6IFwiQ29uY2x1w61kYVwiLFxyXG4gICAgICBkZXRhbGhlczogW1xyXG4gICAgICAgIFwiMiBxdWFydG9zIHNlbmRvIDEgc3VpdGVcIiwgXHJcbiAgICAgICAgXCJDbG9zZXRcIiAsIFxyXG4gICAgICAgIFwiU2FsYVwiICwgXHJcbiAgICAgICAgXCJDb3ppbmhhIGFtZXJpY2FuYVwiLCBcclxuICAgICAgICBcIkJhbmhlaXJvIHNvY2lhbFwiLCBcclxuICAgICAgICBcIsOBcmVhIGRlIHNlcnZpw6dvXCIsIFxyXG4gICAgICAgIFwiR2FyYWdlbSBjb2JlcnRhXCIsXHJcbiAgICAgICAgXCLDgXJlYSBkZSBjaHVycmFzY29cIl0sXHJcbiAgICAgIGNvbmRpY29lczogXCJGaW5hbmNpYW1lbnRvIGJhbmPDoXJpbyBvdSBhIHZpc3RhXCIsXHJcbiAgICAgIG1ldHJhZ2VtOiBcIjkwbcKyXCIsXHJcbiAgICAgIGZyYWNhb2xvdGU6IFwiMTUwbcKyXCIsXHJcbiAgICAgIGltYWdlbnM6IFtcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzMwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC8zMDBcIlxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZW5kZXJlY286IFwiUnVhIFJDIDgsIFF1YWRyYSAxMSwgTG90ZSAxNCAsIENhc2EgMVwiLFxyXG4gICAgICBiYWlycm86IFwiUmVzaWRlbmNpYWwgQ2FuYWRhLCBHb2nDom5pYVwiLFxyXG4gICAgICB2YWxvcjogXCJSJCAyMTAuMDAwLDAwXCIsXHJcbiAgICAgIHN0YXR1czogXCJDb25jbHXDrWRhXCIsXHJcbiAgICAgIGRldGFsaGVzOiBbXHJcbiAgICAgICAgXCIyIHF1YXJ0b3Mgc2VuZG8gMSBzdWl0ZVwiLCBcclxuICAgICAgICBcIkNsb3NldFwiICwgXHJcbiAgICAgICAgXCJTYWxhXCIgLCBcclxuICAgICAgICBcIkNvemluaGEgYW1lcmljYW5hXCIsIFxyXG4gICAgICAgIFwiQmFuaGVpcm8gc29jaWFsXCIsIFxyXG4gICAgICAgIFwiw4FyZWEgZGUgc2VydmnDp29cIiwgXHJcbiAgICAgICAgXCJHYXJhZ2VtIGNvYmVydGFcIixcclxuICAgICAgICBcIsOBcmVhIGRlIGNodXJyYXNjb1wiXSxcclxuICAgICAgY29uZGljb2VzOiBcIkZpbmFuY2lhbWVudG8gYmFuY8OhcmlvIG91IGEgdmlzdGFcIixcclxuICAgICAgbWV0cmFnZW06IFwiOTBtwrJcIixcclxuICAgICAgZnJhY2FvbG90ZTogXCIxNTBtwrJcIixcclxuICAgICAgaW1hZ2VuczogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMzAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vNDAwLzMwMFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBlbmRlcmVjbzogXCJSdWEgUkMgOCwgUXVhZHJhIDExLCBMb3RlIDE0ICwgQ2FzYSAxXCIsXHJcbiAgICAgIGJhaXJybzogXCJSZXNpZGVuY2lhbCBDYW5hZGEsIEdvacOibmlhXCIsXHJcbiAgICAgIHZhbG9yOiBcIlIkIDIxMC4wMDAsMDBcIixcclxuICAgICAgc3RhdHVzOiBcIkNvbmNsdcOtZGFcIixcclxuICAgICAgZGV0YWxoZXM6IFtcclxuICAgICAgICBcIjIgcXVhcnRvcyBzZW5kbyAxIHN1aXRlXCIsIFxyXG4gICAgICAgIFwiQ2xvc2V0XCIgLCBcclxuICAgICAgICBcIlNhbGFcIiAsIFxyXG4gICAgICAgIFwiQ296aW5oYSBhbWVyaWNhbmFcIiwgXHJcbiAgICAgICAgXCJCYW5oZWlybyBzb2NpYWxcIiwgXHJcbiAgICAgICAgXCLDgXJlYSBkZSBzZXJ2acOnb1wiLCBcclxuICAgICAgICBcIkdhcmFnZW0gY29iZXJ0YVwiLFxyXG4gICAgICAgIFwiw4FyZWEgZGUgY2h1cnJhc2NvXCJdLFxyXG4gICAgICBjb25kaWNvZXM6IFwiRmluYW5jaWFtZW50byBiYW5jw6FyaW8gb3UgYSB2aXN0YVwiLFxyXG4gICAgICBtZXRyYWdlbTogXCI5MG3CslwiLFxyXG4gICAgICBmcmFjYW9sb3RlOiBcIjE1MG3CslwiLFxyXG4gICAgICBpbWFnZW5zOiBbXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8zMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS80MDAvMzAwXCJcclxuICAgICAgXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgXTtcclxuXHJcbiAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWctY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=