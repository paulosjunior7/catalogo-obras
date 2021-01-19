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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global */ "./styles/global.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_residencias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/residencias */ "./utils/residencias.js");


var _jsxFileName = "C:\\fontesGit\\www\\teste\\catalogo-obras\\pages\\index.tsx";




const Home = () => {
  // const router = useRouter();
  //   const { id } = router.query;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function handleDetalhe(id) {
    router.push({
      pathname: 'Detalhe',
      query: {
        id: id
      }
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_global__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "JMS Constru\xE7\xE3o e Projeto Engenharia"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "hero",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Rela\xE7\xE3o de casas dispon\xEDveis para venda"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "cards",
        children: _utils_residencias__WEBPACK_IMPORTED_MODULE_3__["Casas"].map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          onClick: () => handleDetalhe(p.id),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: p.imagens[1]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: [p.endereco, p.bairro]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: p.valor
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: p.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, undefined)]
        }, p.id, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "modal-overlay",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "close-modal",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            viewBox: "0 0 20 20",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              fill: "#000000",
              d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "video-background",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "video-foreground",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
                src: "https://www.youtube.com/embed/GykTLqODQuU"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
}

html,
body {
  height: 100vh;
  font-family: "Source Sans Pro";
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}

body {
  font-size: 1.6rem;
}

header {
  background-color: #7159c1;
  height: 55px;
  display: flex;  
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  padding-right: 32px;

  p {
    font-size: 25px;
  }
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 980px;
  
  margin: auto;
}

header img {
  width: 150px;
  margin-left: 20px;
  padding: 15px 0;
}

header nav ul {
  display: flex;
}

header nav ul li {
  list-style: none;
}

header nav ul li a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 1.4rem; 
  padding: 2.4rem;
  transition: all 250ms linear 0s;
}

header nav ul li a:hover {
  background: rgba(255,255,255, 0.15)
}

h2 {
  color: rgb(75, 75, 75);
  font-size: 3.6rem;
  line-height: 4.6rem;
}

h3 {
  color: rgb(75, 75, 75);
  font-size: 2.8rem;
  line-height: 3.8rem;
}

.button {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: rgb(113, 89, 193);
  margin: 15px 0px 0px;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;
}

.button:hover {
  opacity: 0.9;
}


/*=============== 
HERO
==================*/
section.hero {
  margin: 40px 0;
}

section.hero .container {
  width: 90%;
  max-width: 980px;

  margin: auto;

  display: flex;
}

section.hero p {
  color: rgb(154, 142, 191);
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin: 10px 0px 0px;
}



/*=============== 
MAIN
==================*/
main {
  margin-bottom: 80px;
}
/*=============== 
CARDS
==================*/
.cards {
  width: 90%;
  max-width: 980px;
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
  width: 100%;
  padding-top: 56.25%; /* 16:9 */

  overflow: hidden;
  position: relative;
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

/*=============== 
MODAL
==================*/
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
}
.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  background-color: #fff;
  
  width: 95%;
  height: 95%;
  
  margin: 0 auto;
  padding: 10px;
  
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  opacity: 0;
  overflow-y: auto;
  visibility: hidden;
  
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transform: scale(1.2);
}
.modal .close-modal {
  position: absolute;
  cursor: pointer;

  top: 5px;
  right: 15px;
  
  opacity: 0;
  
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
}
.modal .close-modal svg {
  width: 18px;
  height: 18px;
}
.modal .modal-content {
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
}
.modal.active {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.modal.active .modal-content {
  opacity: 1;
}
.modal.active .close-modal {
  transform: translateY(10px);
  opacity: 1;
}

.video-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
  background-color: white;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 90%;
  transform: translate(-50%, -50%);
}



/*=============== 
FORM
==================*/
#form {
  width:100%;

  background: #7159c1;
  padding: 80px 0;
  margin:0;

  display:flex;
  align-items: center;
  justify-content: center;
}

#form form {
  width: 90%;
  max-width: 980px;

  background: white;
  
  padding: 40px;
  
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15), 
    0px 10px 20px -10px rgba(0, 0, 0, 0.1)
}

#form h3 {
  margin-bottom: 30px
}

#form form label {
  display: none;
}

.form-group {
  display: flex;
  flex-direction: row;
}

.form-group label.right-inline {
  text-align: right;  
  padding-right: 8px;
  padding-left: 10px;
  width: auto;
}

.form-group .input-control {
  flex: 1 1;
  display: block;
  margin: -4px 8px 10px;
  padding: 12px;
  font-size: 1.6rem;
}

#form .button {
  margin: 20px 8px 10px;
}

 
`);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVzaWRlbmNpYXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVEZXRhbGhlIiwiaWQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIkNhc2FzIiwibWFwIiwicCIsImltYWdlbnMiLCJlbmRlcmVjbyIsImJhaXJybyIsInZhbG9yIiwic3RhdHVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJkZXRhbGhlcyIsImNvbmRpY29lcyIsIm1ldHJhZ2VtIiwiZnJhY2FvbG90ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IENhc2FzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaWRlbmNpYXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEZXRhbGhlKGlkOiBudW1iZXIpIHtcclxuICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6ICdEZXRhbGhlJyxcclxuICAgICAgICBxdWVyeTogeyBpZDogaWQgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcblxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxwPkpNUyBDb25zdHJ1w6fDo28gZSBQcm9qZXRvIEVuZ2VuaGFyaWE8L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgUmVsYcOnw6NvIGRlIGNhc2FzIGRpc3BvbsOtdmVpcyBwYXJhIHZlbmRhXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgQ2FzYXMubWFwKHAgPT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3AuaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZURldGFsaGUocC5pZCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cC5pbWFnZW5zWzFdfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC0tbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3AuZW5kZXJlY299XHJcbiAgICAgICAgICAgICAgICAgICAge3AuYmFpcnJvfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtLW1lZGl1bVwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0tbWVkaXVtXCI+e3AudmFsb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlIHRleHQtLW1lZGl1bVwiPntwLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgey8qIDxzZWN0aW9uIGlkPVwiZm9ybVwiPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgPGgzPlNvbGljaXRhciBPcsOnYW1lbnRvITwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5vbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1wcmVzYVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVuZGVyZcOnb1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiIHN0eWxlPXt7IGZsZXg6ICczIDInIH19IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFc3RhZG9cIiBzdHlsZT17eyBmbGV4OiAnMScgfX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNFUFwiIHN0eWxlPXt7IGZsZXg6ICcxJyB9fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlNhdmU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIj5cclxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTUuODk4LDQuMDQ1Yy0wLjI3MS0wLjI3Mi0wLjcxMy0wLjI3Mi0wLjk4NiwwbC00LjcxLDQuNzExTDUuNDkzLDQuMDQ1Yy0wLjI3Mi0wLjI3Mi0wLjcxNC0wLjI3Mi0wLjk4Niwwcy0wLjI3MiwwLjcxNCwwLDAuOTg2bDQuNzA5LDQuNzExbC00LjcxLDQuNzExYy0wLjI3MiwwLjI3MS0wLjI3MiwwLjcxMywwLDAuOTg2YzAuMTM2LDAuMTM2LDAuMzE0LDAuMjAzLDAuNDkyLDAuMjAzYzAuMTc5LDAsMC4zNTctMC4wNjcsMC40OTMtMC4yMDNsNC43MTEtNC43MTFsNC43MSw0LjcxMWMwLjEzNywwLjEzNiwwLjMxNCwwLjIwMywwLjQ5NCwwLjIwM2MwLjE3OCwwLDAuMzU1LTAuMDY3LDAuNDkyLTAuMjAzYzAuMjczLTAuMjczLDAuMjczLTAuNzE1LDAtMC45ODZsLTQuNzExLTQuNzExbDQuNzExLTQuNzExQzE2LjE3Miw0Ljc1OSwxNi4xNzIsNC4zMTcsMTUuODk4LDQuMDQ1elwiXHJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1mb3JlZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0d5a1RMcU9EUXVVXCJcclxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm9cIik7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIC8qIGEgY2FkYSAxcmVtIHNlcsOhIGNvbnNpZGVyYSAxMHB4ICovXHJcbiAgZm9udC1zaXplOiA2Mi41JTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIjtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE1OWMxO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyIC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciBpbWcge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtOyBcclxuICBwYWRkaW5nOiAyLjRyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhciAwcztcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjE1KVxyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxuICBmb250LXNpemU6IDMuNnJlbTtcclxuICBsaW5lLWhlaWdodDogNC42cmVtO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxuICBmb250LXNpemU6IDIuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMy44cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDg5LCAxOTMpO1xyXG4gIG1hcmdpbjogMTVweCAwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXIgMHM7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09IFxyXG5IRVJPXHJcbj09PT09PT09PT09PT09PT09PSovXHJcbnNlY3Rpb24uaGVybyB7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24uaGVybyAuY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuc2VjdGlvbi5oZXJvIHAge1xyXG4gIGNvbG9yOiByZ2IoMTU0LCAxNDIsIDE5MSk7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PSBcclxuTUFJTlxyXG49PT09PT09PT09PT09PT09PT0qL1xyXG5tYWluIHtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09IFxyXG5DQVJEU1xyXG49PT09PT09PT09PT09PT09PT0qL1xyXG4uY2FyZHMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LS1tZWRpdW0ge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2VjZjBmMTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE1OWMxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTYuMjUlOyAvKiAxNjo5ICovXHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT0gXHJcbk1PREFMXHJcbj09PT09PT09PT09PT09PT09PSovXHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4ubW9kYWwtb3ZlcmxheS5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogOTUlO1xyXG4gIFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgXHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcbi5tb2RhbCAuY2xvc2UtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpLCB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcbi5tb2RhbCAuY2xvc2UtbW9kYWwgc3ZnIHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcbi5tb2RhbC5hY3RpdmUge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi5tb2RhbC5hY3RpdmUgLm1vZGFsLWNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLm1vZGFsLmFjdGl2ZSAuY2xvc2UtbW9kYWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udmlkZW8tYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnZpZGVvLWZvcmVncm91bmQsXHJcbi52aWRlby1iYWNrZ3JvdW5kIGlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PSBcclxuRk9STVxyXG49PT09PT09PT09PT09PT09PT0qL1xyXG4jZm9ybSB7XHJcbiAgd2lkdGg6MTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZDogIzcxNTljMTtcclxuICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgbWFyZ2luOjA7XHJcblxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybSBmb3JtIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIFxyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIFxyXG4gICAgMHB4IDEwcHggMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMSlcclxufVxyXG5cclxuI2Zvcm0gaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHhcclxufVxyXG5cclxuI2Zvcm0gZm9ybSBsYWJlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwucmlnaHQtaW5saW5lIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDsgIFxyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5pbnB1dC1jb250cm9sIHtcclxuICBmbGV4OiAxIDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAtNHB4IDhweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbiNmb3JtIC5idXR0b24ge1xyXG4gIG1hcmdpbjogMjBweCA4cHggMTBweDtcclxufVxyXG5cclxuIFxyXG5gOyIsImV4cG9ydCBjb25zdCBDYXNhcyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGVuZGVyZWNvOiBcIlJ1YSBSQyA4LCBRdWFkcmEgMTEsIExvdGUgMTQgLCBDYXNhIDFcIixcclxuICAgICAgYmFpcnJvOiBcIlJlc2lkZW5jaWFsIENhbmFkYSwgR29pw6JuaWFcIixcclxuICAgICAgdmFsb3I6IFwiUiQgMjEwLjAwMCwwMFwiLFxyXG4gICAgICBzdGF0dXM6IFwiQ29uY2x1w61kYVwiLFxyXG4gICAgICBkZXRhbGhlczogW1xyXG4gICAgICAgIFwiMiBxdWFydG9zIHNlbmRvIDEgc3VpdGVcIiwgXHJcbiAgICAgICAgXCJDbG9zZXRcIiAsIFxyXG4gICAgICAgIFwiU2FsYVwiICwgXHJcbiAgICAgICAgXCJDb3ppbmhhIGFtZXJpY2FuYVwiLCBcclxuICAgICAgICBcIkJhbmhlaXJvIHNvY2lhbFwiLCBcclxuICAgICAgICBcIsOBcmVhIGRlIHNlcnZpw6dvXCIsIFxyXG4gICAgICAgIFwiR2FyYWdlbSBjb2JlcnRhXCIsXHJcbiAgICAgICAgXCLDgXJlYSBkZSBjaHVycmFzY29cIl0sXHJcbiAgICAgIGNvbmRpY29lczogXCJGaW5hbmNpYW1lbnRvIGJhbmPDoXJpbyBvdSBhIHZpc3RhXCIsXHJcbiAgICAgIG1ldHJhZ2VtOiBcIjkwbcKyXCIsXHJcbiAgICAgIGZyYWNhb2xvdGU6IFwiMTUwbcKyXCIsXHJcbiAgICAgIGltYWdlbnM6IFtcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzMwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC8zMDBcIlxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZW5kZXJlY286IFwiUnVhIFJDIDgsIFF1YWRyYSAxMSwgTG90ZSAxNCAsIENhc2EgMVwiLFxyXG4gICAgICBiYWlycm86IFwiUmVzaWRlbmNpYWwgQ2FuYWRhLCBHb2nDom5pYVwiLFxyXG4gICAgICB2YWxvcjogXCJSJCAyMTAuMDAwLDAwXCIsXHJcbiAgICAgIHN0YXR1czogXCJDb25jbHXDrWRhXCIsXHJcbiAgICAgIGRldGFsaGVzOiBbXHJcbiAgICAgICAgXCIyIHF1YXJ0b3Mgc2VuZG8gMSBzdWl0ZVwiLCBcclxuICAgICAgICBcIkNsb3NldFwiICwgXHJcbiAgICAgICAgXCJTYWxhXCIgLCBcclxuICAgICAgICBcIkNvemluaGEgYW1lcmljYW5hXCIsIFxyXG4gICAgICAgIFwiQmFuaGVpcm8gc29jaWFsXCIsIFxyXG4gICAgICAgIFwiw4FyZWEgZGUgc2VydmnDp29cIiwgXHJcbiAgICAgICAgXCJHYXJhZ2VtIGNvYmVydGFcIixcclxuICAgICAgICBcIsOBcmVhIGRlIGNodXJyYXNjb1wiXSxcclxuICAgICAgY29uZGljb2VzOiBcIkZpbmFuY2lhbWVudG8gYmFuY8OhcmlvIG91IGEgdmlzdGFcIixcclxuICAgICAgbWV0cmFnZW06IFwiOTBtwrJcIixcclxuICAgICAgZnJhY2FvbG90ZTogXCIxNTBtwrJcIixcclxuICAgICAgaW1hZ2VuczogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMzAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vNDAwLzMwMFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBlbmRlcmVjbzogXCJSdWEgUkMgOCwgUXVhZHJhIDExLCBMb3RlIDE0ICwgQ2FzYSAxXCIsXHJcbiAgICAgIGJhaXJybzogXCJSZXNpZGVuY2lhbCBDYW5hZGEsIEdvacOibmlhXCIsXHJcbiAgICAgIHZhbG9yOiBcIlIkIDIxMC4wMDAsMDBcIixcclxuICAgICAgc3RhdHVzOiBcIkNvbmNsdcOtZGFcIixcclxuICAgICAgZGV0YWxoZXM6IFtcclxuICAgICAgICBcIjIgcXVhcnRvcyBzZW5kbyAxIHN1aXRlXCIsIFxyXG4gICAgICAgIFwiQ2xvc2V0XCIgLCBcclxuICAgICAgICBcIlNhbGFcIiAsIFxyXG4gICAgICAgIFwiQ296aW5oYSBhbWVyaWNhbmFcIiwgXHJcbiAgICAgICAgXCJCYW5oZWlybyBzb2NpYWxcIiwgXHJcbiAgICAgICAgXCLDgXJlYSBkZSBzZXJ2acOnb1wiLCBcclxuICAgICAgICBcIkdhcmFnZW0gY29iZXJ0YVwiLFxyXG4gICAgICAgIFwiw4FyZWEgZGUgY2h1cnJhc2NvXCJdLFxyXG4gICAgICBjb25kaWNvZXM6IFwiRmluYW5jaWFtZW50byBiYW5jw6FyaW8gb3UgYSB2aXN0YVwiLFxyXG4gICAgICBtZXRyYWdlbTogXCI5MG3CslwiLFxyXG4gICAgICBmcmFjYW9sb3RlOiBcIjE1MG3CslwiLFxyXG4gICAgICBpbWFnZW5zOiBbXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8zMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS80MDAvMzAwXCJcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGVuZGVyZWNvOiBcIlJ1YSBSQyA4LCBRdWFkcmEgMTEsIExvdGUgMTQgLCBDYXNhIDFcIixcclxuICAgICAgYmFpcnJvOiBcIlJlc2lkZW5jaWFsIENhbmFkYSwgR29pw6JuaWFcIixcclxuICAgICAgdmFsb3I6IFwiUiQgMjEwLjAwMCwwMFwiLFxyXG4gICAgICBzdGF0dXM6IFwiQ29uY2x1w61kYVwiLFxyXG4gICAgICBkZXRhbGhlczogW1xyXG4gICAgICAgIFwiMiBxdWFydG9zIHNlbmRvIDEgc3VpdGVcIiwgXHJcbiAgICAgICAgXCJDbG9zZXRcIiAsIFxyXG4gICAgICAgIFwiU2FsYVwiICwgXHJcbiAgICAgICAgXCJDb3ppbmhhIGFtZXJpY2FuYVwiLCBcclxuICAgICAgICBcIkJhbmhlaXJvIHNvY2lhbFwiLCBcclxuICAgICAgICBcIsOBcmVhIGRlIHNlcnZpw6dvXCIsIFxyXG4gICAgICAgIFwiR2FyYWdlbSBjb2JlcnRhXCIsXHJcbiAgICAgICAgXCLDgXJlYSBkZSBjaHVycmFzY29cIl0sXHJcbiAgICAgIGNvbmRpY29lczogXCJGaW5hbmNpYW1lbnRvIGJhbmPDoXJpbyBvdSBhIHZpc3RhXCIsXHJcbiAgICAgIG1ldHJhZ2VtOiBcIjkwbcKyXCIsXHJcbiAgICAgIGZyYWNhb2xvdGU6IFwiMTUwbcKyXCIsXHJcbiAgICAgIGltYWdlbnM6IFtcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzMwMC8zMDBcIixcclxuICAgICAgICBcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC8zMDBcIlxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgZW5kZXJlY286IFwiUnVhIFJDIDgsIFF1YWRyYSAxMSwgTG90ZSAxNCAsIENhc2EgMVwiLFxyXG4gICAgICBiYWlycm86IFwiUmVzaWRlbmNpYWwgQ2FuYWRhLCBHb2nDom5pYVwiLFxyXG4gICAgICB2YWxvcjogXCJSJCAyMTAuMDAwLDAwXCIsXHJcbiAgICAgIHN0YXR1czogXCJDb25jbHXDrWRhXCIsXHJcbiAgICAgIGRldGFsaGVzOiBbXHJcbiAgICAgICAgXCIyIHF1YXJ0b3Mgc2VuZG8gMSBzdWl0ZVwiLCBcclxuICAgICAgICBcIkNsb3NldFwiICwgXHJcbiAgICAgICAgXCJTYWxhXCIgLCBcclxuICAgICAgICBcIkNvemluaGEgYW1lcmljYW5hXCIsIFxyXG4gICAgICAgIFwiQmFuaGVpcm8gc29jaWFsXCIsIFxyXG4gICAgICAgIFwiw4FyZWEgZGUgc2VydmnDp29cIiwgXHJcbiAgICAgICAgXCJHYXJhZ2VtIGNvYmVydGFcIixcclxuICAgICAgICBcIsOBcmVhIGRlIGNodXJyYXNjb1wiXSxcclxuICAgICAgY29uZGljb2VzOiBcIkZpbmFuY2lhbWVudG8gYmFuY8OhcmlvIG91IGEgdmlzdGFcIixcclxuICAgICAgbWV0cmFnZW06IFwiOTBtwrJcIixcclxuICAgICAgZnJhY2FvbG90ZTogXCIxNTBtwrJcIixcclxuICAgICAgaW1hZ2VuczogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMzAwLzMwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vNDAwLzMwMFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBlbmRlcmVjbzogXCJSdWEgUkMgOCwgUXVhZHJhIDExLCBMb3RlIDE0ICwgQ2FzYSAxXCIsXHJcbiAgICAgIGJhaXJybzogXCJSZXNpZGVuY2lhbCBDYW5hZGEsIEdvacOibmlhXCIsXHJcbiAgICAgIHZhbG9yOiBcIlIkIDIxMC4wMDAsMDBcIixcclxuICAgICAgc3RhdHVzOiBcIkNvbmNsdcOtZGFcIixcclxuICAgICAgZGV0YWxoZXM6IFtcclxuICAgICAgICBcIjIgcXVhcnRvcyBzZW5kbyAxIHN1aXRlXCIsIFxyXG4gICAgICAgIFwiQ2xvc2V0XCIgLCBcclxuICAgICAgICBcIlNhbGFcIiAsIFxyXG4gICAgICAgIFwiQ296aW5oYSBhbWVyaWNhbmFcIiwgXHJcbiAgICAgICAgXCJCYW5oZWlybyBzb2NpYWxcIiwgXHJcbiAgICAgICAgXCLDgXJlYSBkZSBzZXJ2acOnb1wiLCBcclxuICAgICAgICBcIkdhcmFnZW0gY29iZXJ0YVwiLFxyXG4gICAgICAgIFwiw4FyZWEgZGUgY2h1cnJhc2NvXCJdLFxyXG4gICAgICBjb25kaWNvZXM6IFwiRmluYW5jaWFtZW50byBiYW5jw6FyaW8gb3UgYSB2aXN0YVwiLFxyXG4gICAgICBtZXRyYWdlbTogXCI5MG3CslwiLFxyXG4gICAgICBmcmFjYW9sb3RlOiBcIjE1MG3CslwiLFxyXG4gICAgICBpbWFnZW5zOiBbXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8yMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS8zMDAvMzAwXCIsXHJcbiAgICAgICAgXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS80MDAvMzAwXCJcclxuICAgICAgXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgXTtcclxuXHJcbiAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==