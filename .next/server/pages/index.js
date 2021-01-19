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


var _jsxFileName = "C:\\fontesGit\\www\\teste\\catalogo-obras\\pages\\index.tsx";


const Home = () => {
  const videos = [{
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    video_id: "GykTLqODQuU"
  }, {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
    video_id: "HN1UjzRSdBk"
  }, {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
    video_id: "rAzHvYnQ8DY"
  }, {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
    video_id: "ghTrp1x_1As"
  }, {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
    video_id: "GSqR2i-Pq6o"
  }, {
    title: "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
    video_id: "2alg7MQ6_sI"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_global__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "hero",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Cat\xE1logo de obras em execu\xE7\xE3o, conclu\xEDdas e finalizadas."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "cards",
        children: videos.map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: p.thumb
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: p.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: p.duration
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: "Free"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "form",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        action: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Quero Estudar na Rocket!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Nome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            className: "input-control",
            placeholder: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Empresa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Endere\xE7o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Cidade",
            style: {
              flex: '3 2'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Estado",
            style: {
              flex: '1'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "CEP",
            style: {
              flex: '1'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "button",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
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
              lineNumber: 166,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
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
                lineNumber: 175,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
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
  margin: 80px 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJIb21lIiwidmlkZW9zIiwidGl0bGUiLCJkdXJhdGlvbiIsInRodW1iIiwidmlkZW9faWQiLCJtYXAiLCJwIiwiZmxleCIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUVqQixRQUFN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXpXQSxFOzs7Ozs7Ozs7OztBQ0ZBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHZpZGVvcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiRm9ybXVsw6FyaW8gQW5pbWFkbyBjb20gSlMgcHVybyBlIENTUyBBbmltYXRpb24gfCBNYXlrIEJyaXRvXCIsXHJcbiAgICAgIGR1cmF0aW9uOiBcIjU3IG1pblwiLFxyXG4gICAgICB0aHVtYjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL0d5a1RMcU9EUXVVL2hxZGVmYXVsdC5qcGdcIixcclxuICAgICAgdmlkZW9faWQ6IFwiR3lrVExxT0RRdVVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiRGVzdmVuZGFuZG8gbyBDU1MgR3JpZCBuYSBwcsOhdGljYSB8IE1heWsgQnJpdG9cIixcclxuICAgICAgZHVyYXRpb246IFwiMzYgbWluXCIsXHJcbiAgICAgIHRodW1iOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvSE4xVWp6UlNkQmsvaHFkZWZhdWx0LmpwZ1wiLFxyXG4gICAgICB2aWRlb19pZDogXCJITjFVanpSU2RCa1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBcnJheTogSGlnaGVyIE9yZGVyIEZ1bmN0aW9ucyB8IE1heWsgQnJpdG9cIixcclxuICAgICAgZHVyYXRpb246IFwiNTQgbWluXCIsXHJcbiAgICAgIHRodW1iOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvckF6SHZZblE4RFkvaHFkZWZhdWx0LmpwZ1wiLFxyXG4gICAgICB2aWRlb19pZDogXCJyQXpIdlluUThEWVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJPIHF1ZSDDqSBBUEk/IFJFU1QgZSBSRVNUZnVsPyB8IE1heWsgQnJpdG9cIixcclxuICAgICAgZHVyYXRpb246IFwiMzMgbWluXCIsXHJcbiAgICAgIHRodW1iOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvZ2hUcnAxeF8xQXMvaHFkZWZhdWx0LmpwZ1wiLFxyXG4gICAgICB2aWRlb19pZDogXCJnaFRycDF4XzFBc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJEZXN2ZW5kYW5kbyBhIHZhcmnDoXZlbCB0aGlzIG5vIEphdmFzY3JpcHQgfCBNYXlrIEJyaXRvXCIsXHJcbiAgICAgIGR1cmF0aW9uOiBcIjQ4IG1pblwiLFxyXG4gICAgICB0aHVtYjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL0dTcVIyaS1QcTZvL2hxZGVmYXVsdC5qcGdcIixcclxuICAgICAgdmlkZW9faWQ6IFwiR1NxUjJpLVBxNm9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6XHJcbiAgICAgICAgXCJDb21vIHVzYXIgR2l0IGUgR2l0aHViIG5hIHByw6F0aWNhOiBHdWlhIHBhcmEgaW5pY2lhbnRlcyB8IE1heWsgQnJpdG9cIixcclxuICAgICAgZHVyYXRpb246IFwiMzMgbWluXCIsXHJcbiAgICAgIHRodW1iOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvMmFsZzdNUTZfc0kvaHFkZWZhdWx0LmpwZ1wiLFxyXG4gICAgICB2aWRlb19pZDogXCIyYWxnN01RNl9zSVwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcblxyXG4gICAgICB7LyogPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJcXGxvZ28tcm9ja2V0c2VhdC5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJSb2NrZXRzZWF0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhyZWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlN0YXJ0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkJvb3RjYW1wPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Db211bmlkYWRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5CbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj4gKi99XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICBDYXTDoWxvZ28gZGUgb2JyYXMgZW0gZXhlY3XDp8OjbywgY29uY2x1w61kYXMgZSBmaW5hbGl6YWRhcy5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHsvKiA8cD5cclxuICAgICAgICAgICAgICBObyBtZWlvIGRlIHRhbnRhIGluZm9ybWHDp8OjbyBlIGRhIHF1YW50aWRhZGUgZGUgZmVycmFtZW50YXMgcXVlXHJcbiAgICAgICAgICAgICAgc3VyZ2VtIHRvZG9zIG9zIGRpYXMsIHZvY8OqIHByZWNpc2EgZGUgYWxndcOpbSBxdWUgdGUgbGV2ZSBuYSBkaXJlw6fDo29cclxuICAgICAgICAgICAgICBjZXJ0YS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidXR0b25cIj5RdWVybyBlbWJhcmNhciBuZXN0ZSBmb2d1ZXRlITwvYT4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL21lbGhvcmVzLXRlY25vbG9naWFzLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZpZGVvcy5tYXAocCA9PiBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3AudGh1bWIgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC0tbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICB7IHAudGl0bGUgfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0tbWVkaXVtXCI+eyBwLmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZSB0ZXh0LS1tZWRpdW1cIj5GcmVlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiZm9ybVwiPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgPGgzPlF1ZXJvIEVzdHVkYXIgbmEgUm9ja2V0ITwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5vbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1wcmVzYVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVuZGVyZcOnb1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiIHN0eWxlPXt7IGZsZXg6ICczIDInIH19IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFc3RhZG9cIiBzdHlsZT17eyBmbGV4OiAnMScgfX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNFUFwiIHN0eWxlPXt7IGZsZXg6ICcxJyB9fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlNhdmU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNS44OTgsNC4wNDVjLTAuMjcxLTAuMjcyLTAuNzEzLTAuMjcyLTAuOTg2LDBsLTQuNzEsNC43MTFMNS40OTMsNC4wNDVjLTAuMjcyLTAuMjcyLTAuNzE0LTAuMjcyLTAuOTg2LDBzLTAuMjcyLDAuNzE0LDAsMC45ODZsNC43MDksNC43MTFsLTQuNzEsNC43MTFjLTAuMjcyLDAuMjcxLTAuMjcyLDAuNzEzLDAsMC45ODZjMC4xMzYsMC4xMzYsMC4zMTQsMC4yMDMsMC40OTIsMC4yMDNjMC4xNzksMCwwLjM1Ny0wLjA2NywwLjQ5My0wLjIwM2w0LjcxMS00LjcxMWw0LjcxLDQuNzExYzAuMTM3LDAuMTM2LDAuMzE0LDAuMjAzLDAuNDk0LDAuMjAzYzAuMTc4LDAsMC4zNTUtMC4wNjcsMC40OTItMC4yMDNjMC4yNzMtMC4yNzMsMC4yNzMtMC43MTUsMC0wLjk4NmwtNC43MTEtNC43MTFsNC43MTEtNC43MTFDMTYuMTcyLDQuNzU5LDE2LjE3Miw0LjMxNywxNS44OTgsNC4wNDV6XCJcclxuICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZvcmVncm91bmRcIj5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvR3lrVExxT0RRdVVcIlxyXG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Byb1wiKTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgLyogYSBjYWRhIDFyZW0gc2Vyw6EgY29uc2lkZXJhIDEwcHggKi9cclxuICBmb250LXNpemU6IDYyLjUlO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTU5YzE7XHJcbn1cclxuXHJcbmhlYWRlciAuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXIgaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuNHJlbTsgXHJcbiAgcGFkZGluZzogMi40cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXIgMHM7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC4xNSlcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgZm9udC1zaXplOiAzLjZyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDQuNnJlbTtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMuOHJlbTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCA4OSwgMTkzKTtcclxuICBtYXJnaW46IDE1cHggMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyIDBzO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PSBcclxuSEVST1xyXG49PT09PT09PT09PT09PT09PT0qL1xyXG5zZWN0aW9uLmhlcm8ge1xyXG4gIG1hcmdpbjogODBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uLmhlcm8gLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG5cclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnNlY3Rpb24uaGVybyBwIHtcclxuICBjb2xvcjogcmdiKDE1NCwgMTQyLCAxOTEpO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT0gXHJcbk1BSU5cclxuPT09PT09PT09PT09PT09PT09Ki9cclxubWFpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG4vKj09PT09PT09PT09PT09PSBcclxuQ0FSRFNcclxuPT09PT09PT09PT09PT09PT09Ki9cclxuLmNhcmRzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC0tbWVkaXVtIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMi42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNlY2YwZjE7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuXHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDU2LjI1JTsgLyogMTY6OSAqL1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTU5YzE7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09IFxyXG5NT0RBTFxyXG49PT09PT09PT09PT09PT09PT0qL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLm1vZGFsLW92ZXJsYXkuYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBcclxuICBvcGFjaXR5OiAwO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG4ubW9kYWwgLmNsb3NlLW1vZGFsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTVweDtcclxuICBcclxuICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKSwgdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxufVxyXG4ubW9kYWwgLmNsb3NlLW1vZGFsIHN2ZyB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxufVxyXG4ubW9kYWwuYWN0aXZlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ubW9kYWwuYWN0aXZlIC5tb2RhbC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5tb2RhbC5hY3RpdmUgLmNsb3NlLW1vZGFsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnZpZGVvLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi52aWRlby1mb3JlZ3JvdW5kLFxyXG4udmlkZW8tYmFja2dyb3VuZCBpZnJhbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT0gXHJcbkZPUk1cclxuPT09PT09PT09PT09PT09PT09Ki9cclxuI2Zvcm0ge1xyXG4gIHdpZHRoOjEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQ6ICM3MTU5YzE7XHJcbiAgcGFkZGluZzogODBweCAwO1xyXG4gIG1hcmdpbjowO1xyXG5cclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm0gZm9ybSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIFxyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBcclxuICAgIDBweCAxMHB4IDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpXHJcbn1cclxuXHJcbiNmb3JtIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbn1cclxuXHJcbiNmb3JtIGZvcm0gbGFiZWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsLnJpZ2h0LWlubGluZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7ICBcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAuaW5wdXQtY29udHJvbCB7XHJcbiAgZmxleDogMSAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogLTRweCA4cHggMTBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4jZm9ybSAuYnV0dG9uIHtcclxuICBtYXJnaW46IDIwcHggOHB4IDEwcHg7XHJcbn1cclxuXHJcbiBcclxuYDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==