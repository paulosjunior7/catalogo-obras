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


var _jsxFileName = "C:\\fontesGit\\www\\catalogo-obras\\pages\\index.tsx";


const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_global__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "\\logo-rocketseat.svg",
          alt: "Rocketseat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "menu-section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "menu-toggle",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "one"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "two"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "three"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: "Starter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: "Bootcamp"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: "Comunidade"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 33
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "hero",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "As melhores tecnologias em programa\xE7\xE3o, direto ao ponto e do jeito certo."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "No meio de tanta informa\xE7\xE3o e da quantidade de ferramentas que surgem todos os dias, voc\xEA precisa de algu\xE9m que te leve na dire\xE7\xE3o certa."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            className: "button",
            children: "Quero embarcar neste foguete!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "./images/melhores-tecnologias.svg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "cards",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: "Formul\xE1rio Animado com JS puro e CSS Animation | Mayk Brito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: "57 Min"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: "Free"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: "Formul\xE1rio Animado com JS puro e CSS Animation | Mayk Brito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: "57 Min"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: "Free"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: "Formul\xE1rio Animado com JS puro e CSS Animation | Mayk Brito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: "57 Min"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: "Free"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: "Formul\xE1rio Animado com JS puro e CSS Animation | Mayk Brito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: "57 Min"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: "Free"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: "Formul\xE1rio Animado com JS puro e CSS Animation | Mayk Brito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: "57 Min"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: "Free"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "title text--medium",
              children: "Formul\xE1rio Animado com JS puro e CSS Animation | Mayk Brito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text--medium",
                children: "57 Min"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "price text--medium",
                children: "Free"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "form",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        action: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Quero Estudar na Rocket!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Nome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            className: "input-control",
            placeholder: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Empresa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Endere\xE7o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 9
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
            lineNumber: 227,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "Estado",
            style: {
              flex: '1'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "input-control",
            placeholder: "CEP",
            style: {
              flex: '1'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "button",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
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
              lineNumber: 244,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 9
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
                lineNumber: 253,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJIb21lIiwiZmxleCIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTs7QUFLQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNmLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUdBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F6V0EsRTs7Ozs7Ozs7Ozs7QUNGQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJcXGxvZ28tcm9ja2V0c2VhdC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlJvY2tldHNlYXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRvZ2dsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRocmVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U3RhcnRlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Cb290Y2FtcDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Db211bmlkYWRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkJsb2c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcyBtZWxob3JlcyB0ZWNub2xvZ2lhcyBlbSBwcm9ncmFtYcOnw6NvLCBkaXJldG8gYW8gcG9udG8gZSBkbyBqZWl0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJ0by5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIG1laW8gZGUgdGFudGEgaW5mb3JtYcOnw6NvIGUgZGEgcXVhbnRpZGFkZSBkZSBmZXJyYW1lbnRhcyBxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VyZ2VtIHRvZG9zIG9zIGRpYXMsIHZvY8OqIHByZWNpc2EgZGUgYWxndcOpbSBxdWUgdGUgbGV2ZSBuYSBkaXJlw6fDo29cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VydGEuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidXR0b25cIj5RdWVybyBlbWJhcmNhciBuZXN0ZSBmb2d1ZXRlITwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL21lbGhvcmVzLXRlY25vbG9naWFzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICB7LyogPCEtLVxyXG4gICAgICAgICAgPHBpY3R1cmUgY2xhc3NOYW1lPVwiaW1hZ2VcIiBhbHQ9XCJJbWFnZW1cIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDc2OHB4KVwiIHNyY3NldD1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvR3lrVExxT0RRdVUvbWF4cmVzZGVmYXVsdC5qcGdcIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDMyMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvckF6SHZZblE4RFkvaHFkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTBweClcIiBzcmNzZXQ9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0hOMVVqelJTZEJrL21xZGVmYXVsdC5qcGdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0d5a1RMcU9EUXVVL2hxZGVmYXVsdC5qcGdcIiBhbHQ9XCJJbWFnZW1cIiAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAtLT4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9HeWtUTHFPRFF1VS9ocWRlZmF1bHQuanBnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtLW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgIEZvcm11bMOhcmlvIEFuaW1hZG8gY29tIEpTIHB1cm8gZSBDU1MgQW5pbWF0aW9uIHwgTWF5ayBCcml0b1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtLW1lZGl1bVwiPjU3IE1pbjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZSB0ZXh0LS1tZWRpdW1cIj5GcmVlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIHsvKiA8IS0tXHJcbiAgICAgICAgICA8cGljdHVyZSBjbGFzc05hbWU9XCJpbWFnZVwiIGFsdD1cIkltYWdlbVwiPlxyXG4gICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzY4cHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9HeWtUTHFPRFF1VS9tYXhyZXNkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMzIwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9yQXpIdlluUThEWS9ocWRlZmF1bHQuanBnXCI+XHJcbiAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvSE4xVWp6UlNkQmsvbXFkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvR3lrVExxT0RRdVUvaHFkZWZhdWx0LmpwZ1wiIGFsdD1cIkltYWdlbVwiIC8+XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgIC0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0d5a1RMcU9EUXVVL2hxZGVmYXVsdC5qcGdcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC0tbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgRm9ybXVsw6FyaW8gQW5pbWFkbyBjb20gSlMgcHVybyBlIENTUyBBbmltYXRpb24gfCBNYXlrIEJyaXRvXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0tbWVkaXVtXCI+NTcgTWluPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlIHRleHQtLW1lZGl1bVwiPkZyZWU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgey8qIDwhLS1cclxuICAgICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PVwiSW1hZ2VtXCI+XHJcbiAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3NjhweClcIiBzcmNzZXQ9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0d5a1RMcU9EUXVVL21heHJlc2RlZmF1bHQuanBnXCI+XHJcbiAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAzMjBweClcIiBzcmNzZXQ9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL3JBekh2WW5ROERZL2hxZGVmYXVsdC5qcGdcIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9ITjFVanpSU2RCay9tcWRlZmF1bHQuanBnXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9HeWtUTHFPRFF1VS9ocWRlZmF1bHQuanBnXCIgYWx0PVwiSW1hZ2VtXCIgLz5cclxuICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvR3lrVExxT0RRdVUvaHFkZWZhdWx0LmpwZ1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LS1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICBGb3JtdWzDoXJpbyBBbmltYWRvIGNvbSBKUyBwdXJvIGUgQ1NTIEFuaW1hdGlvbiB8IE1heWsgQnJpdG9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS1tZWRpdW1cIj41NyBNaW48L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgdGV4dC0tbWVkaXVtXCI+RnJlZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICB7LyogPCEtLVxyXG4gICAgICAgICAgPHBpY3R1cmUgY2xhc3NOYW1lPVwiaW1hZ2VcIiBhbHQ9XCJJbWFnZW1cIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDc2OHB4KVwiIHNyY3NldD1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvR3lrVExxT0RRdVUvbWF4cmVzZGVmYXVsdC5qcGdcIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDMyMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvckF6SHZZblE4RFkvaHFkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMTBweClcIiBzcmNzZXQ9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0hOMVVqelJTZEJrL21xZGVmYXVsdC5qcGdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0d5a1RMcU9EUXVVL2hxZGVmYXVsdC5qcGdcIiBhbHQ9XCJJbWFnZW1cIiAvPlxyXG4gICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAtLT4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9HeWtUTHFPRFF1VS9ocWRlZmF1bHQuanBnXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtLW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgIEZvcm11bMOhcmlvIEFuaW1hZG8gY29tIEpTIHB1cm8gZSBDU1MgQW5pbWF0aW9uIHwgTWF5ayBCcml0b1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtLW1lZGl1bVwiPjU3IE1pbjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZSB0ZXh0LS1tZWRpdW1cIj5GcmVlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIHsvKiA8IS0tXHJcbiAgICAgICAgICA8cGljdHVyZSBjbGFzc05hbWU9XCJpbWFnZVwiIGFsdD1cIkltYWdlbVwiPlxyXG4gICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogNzY4cHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9HeWtUTHFPRFF1VS9tYXhyZXNkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICA8c291cmNlIG1lZGlhPVwiKG1pbi13aWR0aDogMzIwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9yQXpIdlluUThEWS9ocWRlZmF1bHQuanBnXCI+XHJcbiAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAxMHB4KVwiIHNyY3NldD1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvSE4xVWp6UlNkQmsvbXFkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvR3lrVExxT0RRdVUvaHFkZWZhdWx0LmpwZ1wiIGFsdD1cIkltYWdlbVwiIC8+XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgIC0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0d5a1RMcU9EUXVVL2hxZGVmYXVsdC5qcGdcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC0tbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgRm9ybXVsw6FyaW8gQW5pbWFkbyBjb20gSlMgcHVybyBlIENTUyBBbmltYXRpb24gfCBNYXlrIEJyaXRvXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0tbWVkaXVtXCI+NTcgTWluPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlIHRleHQtLW1lZGl1bVwiPkZyZWU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgey8qIDwhLS1cclxuICAgICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PVwiSW1hZ2VtXCI+XHJcbiAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiA3NjhweClcIiBzcmNzZXQ9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0d5a1RMcU9EUXVVL21heHJlc2RlZmF1bHQuanBnXCI+XHJcbiAgICAgICAgICAgIDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOiAzMjBweClcIiBzcmNzZXQ9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL3JBekh2WW5ROERZL2hxZGVmYXVsdC5qcGdcIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6IDEwcHgpXCIgc3Jjc2V0PVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9ITjFVanpSU2RCay9tcWRlZmF1bHQuanBnXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9HeWtUTHFPRFF1VS9ocWRlZmF1bHQuanBnXCIgYWx0PVwiSW1hZ2VtXCIgLz5cclxuICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvR3lrVExxT0RRdVUvaHFkZWZhdWx0LmpwZ1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LS1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICBGb3JtdWzDoXJpbyBBbmltYWRvIGNvbSBKUyBwdXJvIGUgQ1NTIEFuaW1hdGlvbiB8IE1heWsgQnJpdG9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS1tZWRpdW1cIj41NyBNaW48L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgdGV4dC0tbWVkaXVtXCI+RnJlZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9tYWluPlxyXG5cclxuICAgIDxzZWN0aW9uIGlkPVwiZm9ybVwiPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICA8aDM+UXVlcm8gRXN0dWRhciBuYSBSb2NrZXQhPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOb21lXCIgLz5cclxuXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbXByZXNhXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW5kZXJlw6dvXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2lkYWRlXCIgc3R5bGU9e3sgZmxleDogJzMgMid9fSAvPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVzdGFkb1wiIHN0eWxlPXt7IGZsZXg6ICcxJ319IC8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ0VQXCIgc3R5bGU9e3sgZmxleDogJzEnfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5TYXZlPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIj5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgICBkPVwiTTE1Ljg5OCw0LjA0NWMtMC4yNzEtMC4yNzItMC43MTMtMC4yNzItMC45ODYsMGwtNC43MSw0LjcxMUw1LjQ5Myw0LjA0NWMtMC4yNzItMC4yNzItMC43MTQtMC4yNzItMC45ODYsMHMtMC4yNzIsMC43MTQsMCwwLjk4Nmw0LjcwOSw0LjcxMWwtNC43MSw0LjcxMWMtMC4yNzIsMC4yNzEtMC4yNzIsMC43MTMsMCwwLjk4NmMwLjEzNiwwLjEzNiwwLjMxNCwwLjIwMywwLjQ5MiwwLjIwM2MwLjE3OSwwLDAuMzU3LTAuMDY3LDAuNDkzLTAuMjAzbDQuNzExLTQuNzExbDQuNzEsNC43MTFjMC4xMzcsMC4xMzYsMC4zMTQsMC4yMDMsMC40OTQsMC4yMDNjMC4xNzgsMCwwLjM1NS0wLjA2NywwLjQ5Mi0wLjIwM2MwLjI3My0wLjI3MywwLjI3My0wLjcxNSwwLTAuOTg2bC00LjcxMS00LjcxMWw0LjcxMS00LjcxMUMxNi4xNzIsNC43NTksMTYuMTcyLDQuMzE3LDE1Ljg5OCw0LjA0NXpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0d5a1RMcU9EUXVVXCJcclxuICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvXCIpO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAvKiBhIGNhZGEgMXJlbSBzZXLDoSBjb25zaWRlcmEgMTBweCAqL1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCI7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxufVxyXG5cclxuaGVhZGVyIC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciBpbWcge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtOyBcclxuICBwYWRkaW5nOiAyLjRyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhciAwcztcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjE1KVxyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxuICBmb250LXNpemU6IDMuNnJlbTtcclxuICBsaW5lLWhlaWdodDogNC42cmVtO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxuICBmb250LXNpemU6IDIuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMy44cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDg5LCAxOTMpO1xyXG4gIG1hcmdpbjogMTVweCAwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMzBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXIgMHM7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09IFxyXG5IRVJPXHJcbj09PT09PT09PT09PT09PT09PSovXHJcbnNlY3Rpb24uaGVybyB7XHJcbiAgbWFyZ2luOiA4MHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24uaGVybyAuY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuc2VjdGlvbi5oZXJvIHAge1xyXG4gIGNvbG9yOiByZ2IoMTU0LCAxNDIsIDE5MSk7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PSBcclxuTUFJTlxyXG49PT09PT09PT09PT09PT09PT0qL1xyXG5tYWluIHtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09IFxyXG5DQVJEU1xyXG49PT09PT09PT09PT09PT09PT0qL1xyXG4uY2FyZHMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LS1tZWRpdW0ge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2VjZjBmMTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE1OWMxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5cclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTYuMjUlOyAvKiAxNjo5ICovXHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNTljMTtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT0gXHJcbk1PREFMXHJcbj09PT09PT09PT09PT09PT09PSovXHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4ubW9kYWwtb3ZlcmxheS5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogOTUlO1xyXG4gIFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgXHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuMSwgMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcbi5tb2RhbCAuY2xvc2UtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjEsIDEpLCB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcbi5tb2RhbCAuY2xvc2UtbW9kYWwgc3ZnIHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC4xLCAxKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcbi5tb2RhbC5hY3RpdmUge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi5tb2RhbC5hY3RpdmUgLm1vZGFsLWNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLm1vZGFsLmFjdGl2ZSAuY2xvc2UtbW9kYWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udmlkZW8tYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnZpZGVvLWZvcmVncm91bmQsXHJcbi52aWRlby1iYWNrZ3JvdW5kIGlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PSBcclxuRk9STVxyXG49PT09PT09PT09PT09PT09PT0qL1xyXG4jZm9ybSB7XHJcbiAgd2lkdGg6MTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZDogIzcxNTljMTtcclxuICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgbWFyZ2luOjA7XHJcblxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybSBmb3JtIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIFxyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIFxyXG4gICAgMHB4IDEwcHggMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMSlcclxufVxyXG5cclxuI2Zvcm0gaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHhcclxufVxyXG5cclxuI2Zvcm0gZm9ybSBsYWJlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwucmlnaHQtaW5saW5lIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDsgIFxyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5pbnB1dC1jb250cm9sIHtcclxuICBmbGV4OiAxIDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAtNHB4IDhweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbiNmb3JtIC5idXR0b24ge1xyXG4gIG1hcmdpbjogMjBweCA4cHggMTBweDtcclxufVxyXG5cclxuIFxyXG5gOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9