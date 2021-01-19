webpackHotUpdate_N_E("pages/Detalhe",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-img-carousel/lib/carousel.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/react-img-carousel/lib/carousel.css ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel {\n  text-align: center;\n  position: relative;\n  opacity: 0;\n  margin: 0 auto;\n  -moz-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.carousel .carousel-container-inner {\n  margin: 0 auto;\n  position: relative;\n}\n.carousel .carousel-viewport {\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n}\n.carousel .carousel-arrow-default {\n  border: 3px solid !important;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.9);\n  height: 32px;\n  width: 32px;\n  font-weight: 900;\n  background: rgba(0, 0, 0, 0.15);\n}\n.carousel .carousel-arrow {\n  position: absolute;\n  z-index: 1;\n  bottom: 23px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n}\n.carousel .carousel-arrow:focus {\n  outline: none;\n}\n.carousel .carousel-arrow:before {\n  font-size: 19px;\n  display: block;\n  margin-top: -2px;\n}\n.carousel .carousel-arrow:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.carousel .carousel-left-arrow {\n  left: 23px;\n}\n.carousel .carousel-right-arrow {\n  right: 23px;\n}\n.carousel .carousel-left-arrow.carousel-arrow-default:before {\n  content: '<';\n  padding-right: 2px;\n}\n.carousel .carousel-right-arrow.carousel-arrow-default:before {\n  content: '>';\n  padding-left: 2px;\n}\n.carousel .carousel-track {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  touch-action: pan-y pinch-zoom;\n}\n.carousel .carousel-track .carousel-slide {\n  display: inline-block;\n  opacity: 0.7;\n  -moz-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out;\n  white-space: normal;\n  white-space: initial;\n}\n.carousel .carousel-track .carousel-slide > * {\n  display: block;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-loading {\n  background: rgba(204, 204, 204, 0.7);\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-fade {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n     -moz-transform: translateX(-50%);\n          transform: translateX(-50%);\n  opacity: 0;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-selected {\n  opacity: 1;\n  z-index: 1;\n}\n.carousel.loaded {\n  opacity: 1;\n}\n.carousel .carousel-dots {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -30px;\n  text-align: center;\n}\n.carousel .carousel-dots li {\n  display: inline-block;\n}\n.carousel .carousel-dots button {\n  border: 0;\n  background: transparent;\n  font-size: 1.1em;\n  cursor: pointer;\n  color: #CCC;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.carousel .carousel-dots button.selected {\n  color: black;\n}\n.carousel .carousel-dots button:focus {\n  outline: none;\n}\n", "",{"version":3,"sources":["webpack://node_modules/react-img-carousel/lib/carousel.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,cAAc;EACd,6BAAwB;EAAxB,wBAAwB;AAC1B;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,+BAA+B;EAC/B,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,UAAU;EACV,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,8BAA8B;AAChC;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,yCAAoC;EAApC,oCAAoC;EACpC,mBAAoB;EAApB,oBAAoB;AACtB;AACA;EACE,cAAc;AAChB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,mCAA2B;KAA3B,gCAA2B;UAA3B,2BAA2B;EAC3B,UAAU;AACZ;AACA;EACE,UAAU;EACV,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf","sourcesContent":[".carousel {\n  text-align: center;\n  position: relative;\n  opacity: 0;\n  margin: 0 auto;\n  transition: opacity 0.5s;\n}\n.carousel .carousel-container-inner {\n  margin: 0 auto;\n  position: relative;\n}\n.carousel .carousel-viewport {\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n}\n.carousel .carousel-arrow-default {\n  border: 3px solid !important;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.9);\n  height: 32px;\n  width: 32px;\n  font-weight: 900;\n  background: rgba(0, 0, 0, 0.15);\n}\n.carousel .carousel-arrow {\n  position: absolute;\n  z-index: 1;\n  bottom: 23px;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n}\n.carousel .carousel-arrow:focus {\n  outline: none;\n}\n.carousel .carousel-arrow:before {\n  font-size: 19px;\n  display: block;\n  margin-top: -2px;\n}\n.carousel .carousel-arrow:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.carousel .carousel-left-arrow {\n  left: 23px;\n}\n.carousel .carousel-right-arrow {\n  right: 23px;\n}\n.carousel .carousel-left-arrow.carousel-arrow-default:before {\n  content: '<';\n  padding-right: 2px;\n}\n.carousel .carousel-right-arrow.carousel-arrow-default:before {\n  content: '>';\n  padding-left: 2px;\n}\n.carousel .carousel-track {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  touch-action: pan-y pinch-zoom;\n}\n.carousel .carousel-track .carousel-slide {\n  display: inline-block;\n  opacity: 0.7;\n  transition: opacity 0.5s ease-in-out;\n  white-space: initial;\n}\n.carousel .carousel-track .carousel-slide > * {\n  display: block;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-loading {\n  background: rgba(204, 204, 204, 0.7);\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-fade {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n}\n.carousel .carousel-track .carousel-slide.carousel-slide-selected {\n  opacity: 1;\n  z-index: 1;\n}\n.carousel.loaded {\n  opacity: 1;\n}\n.carousel .carousel-dots {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -30px;\n  text-align: center;\n}\n.carousel .carousel-dots li {\n  display: inline-block;\n}\n.carousel .carousel-dots button {\n  border: 0;\n  background: transparent;\n  font-size: 1.1em;\n  cursor: pointer;\n  color: #CCC;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.carousel .carousel-dots button.selected {\n  color: black;\n}\n.carousel .carousel-dots button:focus {\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-img-carousel/lib/carousel.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/carousel.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./carousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-img-carousel/lib/carousel.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./carousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-img-carousel/lib/carousel.css",
      function () {
        content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./carousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-img-carousel/lib/carousel.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/react-img-carousel/lib/controls/arrow.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/controls/arrow.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

/**
 * Renders an arrow component used to transition from right-to-left or left-to-right through the carousel slides.
 */
class Arrow extends _react.Component {
  static get propTypes() {
    return {
      numSlides: _propTypes.default.number.isRequired,
      selectedIndex: _propTypes.default.number.isRequired,
      infinite: _propTypes.default.bool.isRequired,
      prevSlide: _propTypes.default.func.isRequired,
      nextSlide: _propTypes.default.func.isRequired,
      direction: _propTypes.default.oneOf(['left', 'right']).isRequired,
      arrows: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
        left: _propTypes.default.node.isRequired,
        right: _propTypes.default.node.isRequired,
        className: _propTypes.default.string
      })])
    };
  }
  /**
   * @returns {Boolean} True if there is a next slide to transition to, else False.
   */


  hasNext() {
    const {
      direction,
      infinite,
      numSlides,
      selectedIndex
    } = this.props;
    return infinite || (direction === 'left' ? selectedIndex > 0 : selectedIndex < numSlides - 1);
  }

  render() {
    const {
      prevSlide,
      nextSlide,
      direction,
      arrows
    } = this.props;
    let arrowComponent = null;
    let buttonClass = 'carousel-arrow-default';

    if (arrows.left) {
      buttonClass = arrows.className ? arrows.className : '';
      arrowComponent = direction === 'left' ? arrows.left : arrows.right;
    }

    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      disabled: !this.hasNext(),
      onClick: direction === 'left' ? prevSlide : nextSlide,
      className: `carousel-arrow carousel-${direction}-arrow ${buttonClass}`
    }, arrowComponent);
  }

}

exports.default = Arrow;

/***/ }),

/***/ "./node_modules/react-img-carousel/lib/controls/dots.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/controls/dots.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

/**
 * Renders a dots navigation component for the carousel, with clickable dots that transition to the corresponding slide.
 *
 * @extends React.Component
 */
class Dots extends _react.Component {
  static get propTypes() {
    return {
      numSlides: _propTypes.default.number.isRequired,
      selectedIndex: _propTypes.default.number.isRequired,
      goToSlide: _propTypes.default.func.isRequired
    };
  }

  render() {
    const {
      numSlides,
      selectedIndex,
      goToSlide
    } = this.props;
    const dots = [];

    for (let index = 0; index < numSlides; index++) {
      const buttonClass = (0, _classnames.default)('carousel-dot', {
        selected: index === selectedIndex
      });
      dots.push( /*#__PURE__*/_react.default.createElement("li", {
        key: `dot-${index}`
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: buttonClass,
        onClick: goToSlide.bind(null, index)
      }, "\u2022")));
    }

    return /*#__PURE__*/_react.default.createElement("ul", {
      className: "carousel-dots"
    }, dots);
  }

}

exports.default = Dots;

/***/ }),

/***/ "./node_modules/react-img-carousel/lib/controls/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/controls/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Dots", {
  enumerable: true,
  get: function () {
    return _dots.default;
  }
});
Object.defineProperty(exports, "Arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});

var _dots = _interopRequireDefault(__webpack_require__(/*! ./dots */ "./node_modules/react-img-carousel/lib/controls/dots.js"));

var _arrow = _interopRequireDefault(__webpack_require__(/*! ./arrow */ "./node_modules/react-img-carousel/lib/controls/arrow.js"));

/***/ }),

/***/ "./node_modules/react-img-carousel/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ms = _interopRequireDefault(__webpack_require__(/*! ms */ "./node_modules/react-img-carousel/node_modules/ms/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _controls = __webpack_require__(/*! ./controls */ "./node_modules/react-img-carousel/lib/controls/index.js");

var _areChildImagesEqual = _interopRequireDefault(__webpack_require__(/*! ./utils/areChildImagesEqual */ "./node_modules/react-img-carousel/lib/utils/areChildImagesEqual.js"));

var _nth = _interopRequireDefault(__webpack_require__(/*! ./utils/nth */ "./node_modules/react-img-carousel/lib/utils/nth.js"));

/* eslint
  jsx-a11y/mouse-events-have-key-events: 0,
  jsx-a11y/no-noninteractive-element-interactions: 0,
  jsx-a11y/click-events-have-key-events: 0 */
const SELECTED_CLASS = 'carousel-slide-selected';
const LOADING_CLASS = 'carousel-slide-loading';
const MAX_LOAD_RETRIES = 500;
/**
 * React component class that renders a carousel, which can contain images or other content.
 *
 * @extends React.Component
 */

class Carousel extends _react.Component {
  static get propTypes() {
    return {
      initialSlide: _propTypes.default.number,
      className: _propTypes.default.string,
      transition: _propTypes.default.oneOf(['slide', 'fade']),
      dots: _propTypes.default.bool,
      arrows: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
        left: _propTypes.default.node.isRequired,
        right: _propTypes.default.node.isRequired,
        className: _propTypes.default.string
      })]),
      infinite: _propTypes.default.bool,
      children: _propTypes.default.any,
      viewportWidth: _propTypes.default.string,
      viewportHeight: _propTypes.default.string,
      width: _propTypes.default.string,
      height: _propTypes.default.string,
      imagesToPrefetch: _propTypes.default.number,
      maxRenderedSlides: _propTypes.default.number,
      cellPadding: _propTypes.default.number,
      slideWidth: _propTypes.default.string,
      slideHeight: _propTypes.default.string,
      beforeChange: _propTypes.default.func,
      afterChange: _propTypes.default.func,
      transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
      autoplay: _propTypes.default.bool,
      autoplaySpeed: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
      lazyLoad: _propTypes.default.bool,
      controls: _propTypes.default.arrayOf(_propTypes.default.shape({
        component: _propTypes.default.func.isRequired,
        props: _propTypes.default.object,
        position: _propTypes.default.oneOf(['top', 'bottom'])
      })),
      draggable: _propTypes.default.bool,
      pauseOnHover: _propTypes.default.bool,
      clickToNavigate: _propTypes.default.bool,
      dragThreshold: _propTypes.default.number,
      onSlideTransitioned: _propTypes.default.func,
      easing: _propTypes.default.oneOf(['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']),
      style: _propTypes.default.shape({
        container: _propTypes.default.object,
        containerInner: _propTypes.default.object,
        viewport: _propTypes.default.object,
        track: _propTypes.default.object,
        slide: _propTypes.default.object,
        selectedSlide: _propTypes.default.object
      })
    };
  }

  static get defaultProps() {
    return {
      initialSlide: 0,
      dots: true,
      arrows: true,
      infinite: true,
      viewportWidth: '100%',
      width: '100%',
      height: 'auto',
      imagesToPrefetch: 5,
      maxRenderedSlides: 5,
      cellPadding: 0,
      transitionDuration: 500,
      autoplay: false,
      autoplaySpeed: 4000,
      lazyLoad: true,
      controls: [],
      draggable: true,
      pauseOnHover: true,
      transition: 'slide',
      dragThreshold: 0.2,
      clickToNavigate: true,
      easing: 'ease-in-out',
      style: {}
    };
  }

  constructor(props) {
    super(...arguments);
    (0, _defineProperty2.default)(this, "handleInitialLoad", () => {
      const {
        currentSlide
      } = this.state;
      const slides = this._track.childNodes;
      const {
        slideWidth,
        slideHeight
      } = this.props;

      if (!slideWidth || !slideHeight) {
        for (let i = 0; i < slides.length; i++) {
          const slide = slides[i];

          if (parseInt(slide.getAttribute('data-index'), 10) === currentSlide) {
            if (!slide.offsetWidth || !slide.offsetHeight) {
              this._initialLoadTimer = setTimeout(this.handleInitialLoad, 10);
              return;
            }

            this.setState({
              slideDimensions: {
                width: slide.offsetWidth,
                height: slide.offsetHeight
              }
            });
            break;
          }
        }
      }
    });
    (0, _defineProperty2.default)(this, "goToSlide", (index, direction, autoSlide = false) => {
      const {
        beforeChange,
        transitionDuration,
        transition,
        onSlideTransitioned
      } = this.props;

      if (onSlideTransitioned) {
        onSlideTransitioned({
          autoPlay: autoSlide,
          index,
          direction
        });
      }

      const {
        currentSlide
      } = this.state;

      if (currentSlide === index) {
        return;
      }

      if (this._animating) {
        return;
      }

      this._animating = true;
      beforeChange && beforeChange(index, currentSlide, direction);
      this.setState({
        transitionDuration
      }, () => {
        this.setState({
          currentSlide: index,
          direction,
          transitioningFrom: currentSlide
        }, () => {
          if (!transitionDuration || transition === 'fade') {
            // We don't actually animate if transitionDuration is 0, so immediately call the transition end callback
            this.slideTransitionEnd();
          }
        });
      });
    });
    (0, _defineProperty2.default)(this, "nextSlide", e => {
      const {
        children
      } = this.props;
      const {
        currentSlide
      } = this.state;
      const newIndex = currentSlide < _react.Children.count(children) - 1 ? currentSlide + 1 : 0;
      this.goToSlide(newIndex, 'right', typeof e !== 'object');
    });
    (0, _defineProperty2.default)(this, "prevSlide", () => {
      const {
        children
      } = this.props;
      const {
        currentSlide
      } = this.state;
      const newIndex = currentSlide > 0 ? currentSlide - 1 : _react.Children.count(children) - 1;
      this.goToSlide(newIndex, 'left');
    });
    (0, _defineProperty2.default)(this, "slideTransitionEnd", e => {
      const {
        currentSlide
      } = this.state;
      const {
        afterChange
      } = this.props;

      if (!e || e.propertyName === 'transform') {
        this._animating = false;
        this.setState({
          direction: null,
          transitioningFrom: null,
          transitionDuration: 0
        }, () => {
          if (!this._allImagesLoaded) {
            this.fetchImages();
          }
        });

        if (this.props.autoplay) {
          this.startAutoplay();
        }

        afterChange && afterChange(currentSlide);
      }
    });
    (0, _defineProperty2.default)(this, "calcLeftOffset", (retryCount = 0) => {
      const {
        direction,
        loading
      } = this.state;
      const viewportWidth = this._viewport && this._viewport.offsetWidth;
      clearTimeout(this._retryTimer);

      if (!this._track || !viewportWidth) {
        this._retryTimer = setTimeout(this.calcLeftOffset, 10);
        return;
      }

      const {
        infinite,
        children,
        cellPadding
      } = this.props;
      let {
        currentSlide
      } = this.state;
      const slides = this._track.childNodes;

      const numChildren = _react.Children.count(children);

      if (infinite) {
        if (currentSlide === 0 && direction === 'right') {
          currentSlide = numChildren;
        } else if (currentSlide === numChildren - 1 && direction === 'left') {
          currentSlide = -1;
        }
      }

      let leftOffset = 0;
      let selectedSlide;
      let foundZeroWidthSlide = false;
      let isCurrentSlideLoading = false;
      let currentSlideWidth;

      for (let i = 0; i < slides.length; i++) {
        selectedSlide = slides[i];
        leftOffset -= cellPadding;
        isCurrentSlideLoading = selectedSlide.className.indexOf(LOADING_CLASS) !== -1;
        currentSlideWidth = selectedSlide.offsetWidth;
        foundZeroWidthSlide = foundZeroWidthSlide || !currentSlideWidth && !isCurrentSlideLoading;

        if (parseInt(selectedSlide.getAttribute('data-index'), 10) === currentSlide) {
          break;
        }

        leftOffset -= currentSlideWidth;
      } // Center the current slide within the viewport


      leftOffset += (viewportWidth - currentSlideWidth) / 2;
      const shouldRetry = foundZeroWidthSlide && retryCount < MAX_LOAD_RETRIES;

      if (leftOffset !== this.state.leftOffset) {
        this.setState({
          leftOffset
        });
      }

      if (shouldRetry) {
        this._retryTimer = setTimeout(this.calcLeftOffset.bind(this, ++retryCount), 10);
        return;
      }

      if (loading) {
        // We have correctly positioned the slides and are done loading images, so reveal the carousel
        this.setState({
          loading: false
        });
      }
    });
    (0, _defineProperty2.default)(this, "handleSlideClick", e => {
      const {
        clickToNavigate
      } = this.props;
      const {
        currentSlide
      } = this.state;
      const clickedIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10); // If the user clicked the current slide or it appears they are dragging, don't process the click

      if (!clickToNavigate || clickedIndex === currentSlide || Math.abs(this._startPos.x - e.clientX) > 0.01) {
        return;
      }

      if (clickedIndex === currentSlide - 1) {
        this.prevSlide();
      } else if (clickedIndex === currentSlide + 1) {
        this.nextSlide();
      } else {
        this.goToSlide(clickedIndex);
      }
    });
    (0, _defineProperty2.default)(this, "onMouseDown", e => {
      const {
        draggable,
        transition
      } = this.props;

      if (e.target.nodeName === 'IMG') {
        // Disable native browser select/drag for img elements
        e.preventDefault();
      }

      if (draggable && transition !== 'fade' && !this._animating) {
        if (this._autoplayTimer) {
          clearTimeout(this._autoplayTimer);
        }

        this._startPos = {
          x: e.clientX,
          y: e.clientY,
          startTime: Date.now()
        };
        this.setState({
          transitionDuration: 0
        });
        document.addEventListener('mousemove', this.onMouseMove, {
          passive: false
        });
        document.addEventListener('mouseup', this.stopDragging, false);
      }
    });
    (0, _defineProperty2.default)(this, "onMouseMove", e => {
      e.preventDefault();
      this.setState({
        dragOffset: e.clientX - this._startPos.x
      });
    });
    (0, _defineProperty2.default)(this, "onMouseEnter", () => {
      document.addEventListener('mousemove', this.handleMovement, false);
    });
    (0, _defineProperty2.default)(this, "handleMovement", () => {
      this.setHoverState(true);
    });
    (0, _defineProperty2.default)(this, "onMouseOver", () => {
      this.setHoverState(true);
    });
    (0, _defineProperty2.default)(this, "onMouseLeave", () => {
      document.removeEventListener('mousemove', this.handleMovement, false);
      this.setHoverState(false);
      !this._animating && this._startPos && this.stopDragging();
    });
    (0, _defineProperty2.default)(this, "onTouchStart", e => {
      const {
        draggable,
        transition
      } = this.props;

      if (draggable && transition !== 'fade' && !this._animating) {
        if (this._autoplayTimer) {
          clearTimeout(this._autoplayTimer);
        }

        if (e.touches.length === 1) {
          this._startPos = {
            x: e.touches[0].screenX,
            y: e.touches[0].screenY,
            startTime: Date.now()
          };
          document.addEventListener('touchmove', this.onTouchMove, {
            passive: false
          });
          document.addEventListener('touchend', this.stopDragging, false);
        }
      }
    });
    (0, _defineProperty2.default)(this, "onTouchMove", e => {
      const {
        x,
        y
      } = this._prevPos || this._startPos;
      const {
        screenX,
        screenY
      } = e.touches[0];
      const angle = Math.abs(Math.atan2(screenY - y, screenX - x)) * 180 / Math.PI;
      this._prevPos = {
        x: screenX,
        y: screenY
      };

      if (angle < 20 || angle > 160) {
        e.preventDefault();
        this.setState({
          dragOffset: screenX - this._startPos.x
        });
      }
    });
    (0, _defineProperty2.default)(this, "stopDragging", () => {
      const {
        dragThreshold,
        transitionDuration
      } = this.props;
      const {
        dragOffset
      } = this.state;
      const viewportWidth = this._viewport && this._viewport.offsetWidth || 1;
      const percentDragged = Math.abs(dragOffset / viewportWidth);
      const swipeDuration = Date.now() - this._startPos.startTime || 1;
      const swipeSpeed = swipeDuration / (percentDragged * viewportWidth);
      const isQuickSwipe = percentDragged > 0.05 && swipeDuration < 250;
      let duration;

      if (isQuickSwipe || percentDragged > dragThreshold) {
        // Calculate the duration based on the speed of the swipe
        duration = Math.min(swipeSpeed * (1 - percentDragged) * viewportWidth, (0, _ms.default)('' + transitionDuration) * (1 - percentDragged));
      } else {
        // Just transition back to the center point
        duration = (0, _ms.default)('' + transitionDuration) * percentDragged;
      }

      this.removeDragListeners();
      this.setState({
        transitionDuration: duration
      }, () => {
        const {
          children,
          infinite
        } = this.props;
        const {
          currentSlide
        } = this.state;

        const numSlides = _react.Children.count(children);

        let newSlideIndex = currentSlide;
        let direction = '';

        if (percentDragged > dragThreshold || isQuickSwipe) {
          if (dragOffset > 0) {
            newSlideIndex--;

            if (newSlideIndex < 0) {
              newSlideIndex = infinite ? numSlides - 1 : currentSlide;
            }
          } else {
            newSlideIndex++;

            if (newSlideIndex === numSlides) {
              newSlideIndex = infinite ? 0 : currentSlide;
            }
          }

          direction = dragOffset > 0 ? 'left' : 'right';
        }

        this.setState({
          dragOffset: 0,
          currentSlide: newSlideIndex,
          direction
        });
      });

      if (this.props.autoplay) {
        this.startAutoplay();
      }
    });
    this.state = {
      currentSlide: props.initialSlide,
      loading: props.lazyLoad,
      loadedImages: {},
      slideDimensions: {},
      dragOffset: 0,
      transitionDuration: 0,
      transitioningFrom: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      currentSlide
    } = state;

    const numChildren = _react.Children.count(props.children);

    if (currentSlide >= numChildren) {
      // The currentSlide index is no longer valid, so move to the last valid index
      return {
        currentSlide: numChildren ? numChildren - 1 : 0
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      children,
      autoplay,
      slideWidth
    } = this.props;
    const {
      currentSlide,
      loadedImages,
      direction,
      loading,
      slideDimensions
    } = this.state;
    const oldChildren = prevProps.children;

    if (direction !== prevState.direction || currentSlide !== prevState.currentSlide || loadedImages !== prevState.loadedImages || slideWidth !== prevProps.slideWidth || slideDimensions.width !== prevState.slideDimensions.width || slideDimensions.height !== prevState.slideDimensions.height) {
      // Whenever new images are loaded, the current slide index changes, the transition direction changes, or the
      // slide width changes, we need to recalculate the left offset positioning of the slides.
      this.calcLeftOffset();
    }

    if (!(0, _areChildImagesEqual.default)(_react.Children.toArray(children), _react.Children.toArray(oldChildren))) {
      // If the image source or number of images changed, we need to refetch images and force an update
      this._animating = false;
      this.fetchImages();
    }

    if (autoplay && (!loading && prevState.loading || !prevProps.autoplay)) {
      this.startAutoplay();
    }
  }

  componentDidMount() {
    const {
      lazyLoad,
      autoplay
    } = this.props;
    this._isMounted = true;

    if (lazyLoad) {
      this.fetchImages();
    } else {
      if (autoplay) {
        this.startAutoplay();
      }

      this.calcLeftOffset();
    }

    window.addEventListener('resize', this.calcLeftOffset, false);

    if (window.IntersectionObserver) {
      this._observer = new window.IntersectionObserver(entries => {
        if (!this.props.autoplay) {
          return;
        }

        if (entries && entries[0] && entries[0].isIntersecting) {
          this.startAutoplay();
        } else {
          clearTimeout(this._autoplayTimer);
        }
      });

      this._observer.observe(this._containerRef);
    }
  }

  componentWillUnmount() {
    // Remove all event listeners
    this.removeDragListeners();
    window.removeEventListener('resize', this.calcLeftOffset, false);
    document.removeEventListener('mousemove', this.handleMovement, false);
    clearTimeout(this._autoplayTimer);
    clearTimeout(this._retryTimer);
    clearTimeout(this._initialLoadTimer);
    this._observer && this._observer.unobserve(this._containerRef);
    this._isMounted = false;
  }
  /**
   * Starts the autoplay timer if it is not already running.
   */


  startAutoplay() {
    clearTimeout(this._autoplayTimer);
    this._autoplayTimer = setTimeout(() => {
      const {
        autoplay
      } = this.props;

      if (autoplay) {
        this.nextSlide();
      }
    }, (0, _ms.default)('' + this.props.autoplaySpeed));
  }
  /**
   * Loads images surrounding the specified slide index. The number of images fetched is controlled by the
   * imagesToPrefetch prop.
   */


  fetchImages() {
    const {
      children
    } = this.props;
    const {
      loadedImages,
      currentSlide
    } = this.state;

    const slides = _react.Children.toArray(children);

    const imagesToPrefetch = Math.min(this.props.imagesToPrefetch, slides.length);
    const startIndex = currentSlide - Math.floor(imagesToPrefetch / 2);
    const endIndex = startIndex + imagesToPrefetch;
    const pendingImages = [];
    const currentImage = slides[currentSlide].props.src;

    for (let index = startIndex; index < endIndex; index++) {
      const slide = (0, _nth.default)(slides, index % slides.length);
      const imageSrc = slide.props.src;

      if (imageSrc && !loadedImages[imageSrc]) {
        pendingImages.push(imageSrc);
      }
    }

    if (pendingImages.length) {
      pendingImages.forEach(image => {
        const img = new Image();

        img.onload = img.onerror = () => {
          if (this._isMounted) {
            this.setState({
              loadedImages: { ...this.state.loadedImages,
                [image]: {
                  width: img.width || 'auto',
                  height: img.height || 'auto'
                }
              }
            }, () => {
              if (image === currentImage) {
                this.handleInitialLoad();
              }
            });
          }
        };

        img.src = image;
      });
    } else {
      this.calcLeftOffset();
    }
  }
  /**
   * Invoked when the carousel is using lazy loading and the currently selected slide's image is first rendered. This
   * method will clear the loading state causing the carousel to render and will calculate the dimensions of the
   * displayed slide to use as a loading shim if an explicit width/height were not specified.
   */


  /**
   * @returns {Array} Controls to be rendered with the carousel.
   */
  getControls() {
    const {
      arrows,
      dots,
      controls
    } = this.props;
    let arr = controls.slice(0);

    if (dots) {
      arr.push({
        component: _controls.Dots
      });
    }

    if (arrows) {
      arr = arr.concat([{
        component: _controls.Arrow,
        props: {
          direction: 'left'
        }
      }, {
        component: _controls.Arrow,
        props: {
          direction: 'right'
        }
      }]);
    }

    return arr;
  }
  /**
   * Renders the carousel.
   *
   * @returns {Object} Component to be rendered.
   */


  render() {
    const {
      className,
      viewportWidth,
      viewportHeight,
      width,
      height,
      dots,
      infinite,
      children,
      slideHeight,
      transition,
      style,
      draggable,
      easing,
      arrows
    } = this.props;
    const {
      loading,
      transitionDuration,
      dragOffset,
      currentSlide,
      leftOffset
    } = this.state;

    const numSlides = _react.Children.count(children);

    const classes = (0, _classnames.default)('carousel', className, {
      loaded: !loading
    });
    const containerStyle = { ...(style.container || {}),
      width,
      height
    };
    const innerContainerStyle = { ...(style.containerInner || {}),
      width,
      height,
      marginBottom: dots ? '20px' : 0
    };
    const viewportStyle = { ...(style.viewport || {}),
      width: viewportWidth,
      height: viewportHeight || slideHeight || 'auto'
    };
    let trackStyle = { ...style.track
    };

    if (transition !== 'fade') {
      const leftPos = leftOffset + dragOffset;
      trackStyle = { ...trackStyle,
        transform: `translateX(${leftPos}px)`,
        transition: transitionDuration ? `transform ${(0, _ms.default)('' + transitionDuration)}ms ${easing}` : 'none'
      };
    }

    if (!draggable) {
      trackStyle.touchAction = 'auto';
    }

    const controls = this.getControls();
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes,
      style: containerStyle,
      ref: c => {
        this._containerRef = c;
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "carousel-container-inner",
      style: innerContainerStyle
    }, controls.filter(Control => {
      return Control.position === 'top';
    }).map((Control, index) => /*#__PURE__*/_react.default.createElement(Control.component, (0, _extends2.default)({}, Control.props, {
      key: `control-${index}`,
      selectedIndex: currentSlide,
      numSlides: numSlides,
      nextSlide: this.nextSlide,
      prevSlide: this.prevSlide,
      goToSlide: this.goToSlide,
      infinite: infinite
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "carousel-viewport",
      ref: v => {
        this._viewport = v;
      },
      style: viewportStyle
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "carousel-track",
      style: trackStyle,
      ref: t => {
        this._track = t;
      },
      onTransitionEnd: this.slideTransitionEnd,
      onMouseDown: this.onMouseDown,
      onMouseLeave: this.onMouseLeave,
      onMouseOver: this.onMouseOver,
      onMouseEnter: this.onMouseEnter,
      onTouchStart: this.onTouchStart
    }, this.renderSlides())), controls.filter(Control => {
      return Control.position !== 'top';
    }).map((Control, index) => /*#__PURE__*/_react.default.createElement(Control.component, (0, _extends2.default)({}, Control.props, {
      key: `control-${index}`,
      selectedIndex: currentSlide,
      numSlides: numSlides,
      nextSlide: this.nextSlide,
      prevSlide: this.prevSlide,
      goToSlide: this.goToSlide,
      arrows: arrows,
      infinite: infinite
    })))));
  }
  /**
   * Renders the slides within the carousel viewport.
   *
   * @returns {Array} Array of slide components to be rendered.
   */


  renderSlides() {
    const {
      children,
      infinite,
      cellPadding,
      slideWidth,
      slideHeight,
      transition,
      transitionDuration,
      style,
      easing,
      lazyLoad
    } = this.props;
    const {
      slideDimensions,
      currentSlide,
      loadedImages
    } = this.state;
    this._allImagesLoaded = true;

    let childrenToRender = _react.Children.map(children, (child, index) => {
      const key = `slide-${index}`;
      const imgSrc = child.props.src;
      const slideClasses = (0, _classnames.default)('carousel-slide', {
        [SELECTED_CLASS]: index === currentSlide,
        'carousel-slide-fade': transition === 'fade'
      });
      let slideStyle = {
        marginLeft: `${cellPadding}px`,
        height: slideHeight,
        width: slideWidth
      };

      if (transition === 'fade') {
        slideStyle.transition = `opacity ${(0, _ms.default)('' + transitionDuration)}ms ${easing}`;
      }

      if (slideHeight) {
        slideStyle.overflowY = 'hidden';
        slideStyle.minHeight = slideHeight; // Safari 9 bug
      }

      if (slideWidth) {
        slideStyle.overflowX = 'hidden';
        slideStyle.minWidth = slideWidth; // Safari 9 bug
      }

      slideStyle = { ...slideStyle,
        ...(style.slide || {}),
        ...(index === currentSlide ? style.selectedSlide || {} : {})
      };
      const loadingSlideStyle = { ...(slideStyle || {}),
        marginLeft: slideStyle.marginLeft,
        width: slideWidth || slideDimensions.width,
        height: slideHeight || slideDimensions.height
      };
      const slidesToRender = this.getIndicesToRender(); // Only render the actual slide content if lazy loading is disabled, the image is already loaded, or we
      // are within the configured proximity to the selected slide index.

      if (!lazyLoad || (imgSrc ? !!loadedImages[imgSrc] : slidesToRender.indexOf(index) > -1)) {
        // If the slide contains an image, set explicit width/height
        if (imgSrc && loadedImages[imgSrc]) {
          const {
            width,
            height
          } = loadedImages[imgSrc];
          slideStyle.height = slideStyle.height || height;
          slideStyle.width = slideStyle.width || width;
        }

        return /*#__PURE__*/_react.default.createElement("li", {
          key: key,
          style: slideStyle,
          "data-index": index,
          className: slideClasses,
          onClick: this.handleSlideClick
        }, child);
      }

      if (imgSrc) {
        this._allImagesLoaded = false;
      }

      return /*#__PURE__*/_react.default.createElement("li", {
        key: key,
        style: loadingSlideStyle,
        "data-index": index,
        className: (0, _classnames.default)(slideClasses, LOADING_CLASS)
      });
    });

    if (infinite && transition !== 'fade') {
      // For infinite mode, create 2 clones on each side of the track
      childrenToRender = this.addClones(childrenToRender);
    }

    return childrenToRender;
  }
  /**
   * This method returns the slides indices that should be fully rendered given the current lazyLoad and
   * maxRenderedSlides settings.
   *
   * @returns {Array} Array of slide indices indicating which indices should be fully rendered.
   */


  getIndicesToRender() {
    const {
      currentSlide,
      transitioningFrom
    } = this.state;
    const {
      children,
      infinite,
      maxRenderedSlides
    } = this.props;

    const numSlides = _react.Children.count(children);

    function genIndices(startIndex, endIndex) {
      const indices = [];

      for (let i = startIndex; i <= endIndex; i++) {
        if (infinite && i < 0) {
          indices.push(numSlides + i);
        } else if (infinite && i >= numSlides) {
          indices.push(i - numSlides);
        } else {
          indices.push(i);
        }
      }

      return indices;
    } // Figure out what slide indices need to be rendered


    const maxSlides = Math.max(1, maxRenderedSlides);
    const prevSlidesToRender = Math.floor((maxSlides - 1) / 2);
    const nextSlidesToRender = Math.floor(maxSlides / 2);
    let indices = genIndices(currentSlide - prevSlidesToRender, currentSlide + nextSlidesToRender);

    if (transitioningFrom !== null) {
      // Also render the slides around the previous slide during a transition
      indices = indices.concat(genIndices(transitioningFrom - prevSlidesToRender, transitioningFrom + nextSlidesToRender));
    }

    return indices;
  }

  addClones(originals) {
    const numOriginals = originals.length;
    const originalsToClone = [(0, _nth.default)(originals, numOriginals - 2), (0, _nth.default)(originals, numOriginals - 1), (0, _nth.default)(originals, 0), (0, _nth.default)(originals, Math.min(1, numOriginals - 1))];
    const prependClones = [/*#__PURE__*/(0, _react.cloneElement)(originalsToClone[0], {
      'key': 'clone-1',
      'data-index': -2,
      'className': originalsToClone[0].props.className.replace(SELECTED_CLASS, '')
    }), /*#__PURE__*/(0, _react.cloneElement)(originalsToClone[1], {
      'key': 'clone-0',
      'data-index': -1,
      'className': originalsToClone[1].props.className.replace(SELECTED_CLASS, '')
    })];
    const appendClones = [/*#__PURE__*/(0, _react.cloneElement)(originalsToClone[2], {
      'key': 'clone-2',
      'data-index': numOriginals,
      'className': originalsToClone[2].props.className.replace(SELECTED_CLASS, '')
    }), /*#__PURE__*/(0, _react.cloneElement)(originalsToClone[3], {
      'key': 'clone-3',
      'data-index': numOriginals + 1,
      'className': originalsToClone[3].props.className.replace(SELECTED_CLASS, '')
    })];
    return prependClones.concat(originals).concat(appendClones);
  }
  /**
   * Updates the component state with the correct left offset position so that the slides will be positioned correctly.
   *
   * @param {Number} retryCount Used when retries are needed due to slow slide loading
   */


  /**
   * Keeps track of the current hover state.
   *
   * @param {Boolean} hovering Current hover state.
   */
  setHoverState(hovering) {
    const {
      pauseOnHover,
      autoplay
    } = this.props;

    if (pauseOnHover && autoplay) {
      clearTimeout(this._hoverTimer);

      if (hovering) {
        clearTimeout(this._autoplayTimer); // If the mouse doesn't move for a few seconds, we want to restart the autoplay

        this._hoverTimer = setTimeout(() => {
          this.setHoverState(false);
        }, 2000);
      } else {
        this.startAutoplay();
      }
    }
  }
  /**
   * Invoked when the mouse cursor leaves a slide.
   */


  /**
   * Removes event listeners that were added when starting a swipe operation
   */
  removeDragListeners() {
    document.removeEventListener('mousemove', this.onMouseMove, {
      passive: false
    });
    document.removeEventListener('mouseup', this.stopDragging, false);
    document.removeEventListener('touchmove', this.onTouchMove, {
      passive: false
    });
    document.removeEventListener('touchend', this.stopDragging, false);
  }
  /**
   * Completes a dragging operation, deciding whether to transition to another slide or snap back to the current slide.
   */


}

exports.default = Carousel;

/***/ }),

/***/ "./node_modules/react-img-carousel/lib/utils/areChildImagesEqual.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/utils/areChildImagesEqual.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function areChildImagesEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const src1 = arr1[i].props.src;
    const src2 = arr2[i].props.src;

    if (src1 !== src2) {
      return false;
    }
  }

  return true;
}

var _default = areChildImagesEqual;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-img-carousel/lib/utils/nth.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-img-carousel/lib/utils/nth.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nth;

function nth(arr, n) {
  if (!(arr && arr.length)) {
    return;
  }

  const length = arr.length;
  n += n < 0 ? length : 0;
  return n >= 0 && n < length ? arr[n] : void 0;
}

/***/ }),

/***/ "./node_modules/react-img-carousel/node_modules/ms/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-img-carousel/node_modules/ms/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000
var m = s * 60
var h = m * 60
var d = h * 24
var y = d * 365.25

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {}
  var type = typeof val
  if (type === 'string' && val.length > 0) {
    return parse(val)
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ?
			fmtLong(val) :
			fmtShort(val)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str)
  if (str.length > 10000) {
    return
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
  if (!match) {
    return
  }
  var n = parseFloat(match[1])
  var type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd'
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h'
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm'
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's'
  }
  return ms + 'ms'
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms'
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name
  }
  return Math.ceil(ms / n) + ' ' + name + 's'
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

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
      viewportWidth: "400px",
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

/***/ }),

/***/ "./pages/Detalhe/styles.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWctY2Fyb3VzZWwvbGliL2Nhcm91c2VsLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW1nLWNhcm91c2VsL2xpYi9jYXJvdXNlbC5jc3M/YTQ5YiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWltZy1jYXJvdXNlbC9saWIvY29udHJvbHMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWctY2Fyb3VzZWwvbGliL2NvbnRyb2xzL2RvdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWctY2Fyb3VzZWwvbGliL2NvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW1nLWNhcm91c2VsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWltZy1jYXJvdXNlbC9saWIvdXRpbHMvYXJlQ2hpbGRJbWFnZXNFcXVhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWltZy1jYXJvdXNlbC9saWIvdXRpbHMvbnRoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW1nLWNhcm91c2VsL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9EZXRhbGhlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRGV0YWxoZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJkZXRhbGhlQ2FzYSIsIkNhc2FzIiwiZmluZCIsInAiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEVBQUUsVUFBVSxJQUE0RTtBQUN4RjtBQUNBLEVBQUUsaUNBQXFCLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixFQUFFLE1BQU0sRUFFTjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuREQ7QUFBQTtBQUFBO0FBQUE7QUFDK0U7QUFDL0UsOEJBQThCLHNFQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGNBQWMsdUJBQXVCLHVCQUF1QixlQUFlLG1CQUFtQixrQ0FBa0MsNkJBQTZCLEdBQUcsdUNBQXVDLG1CQUFtQix1QkFBdUIsR0FBRyxnQ0FBZ0MscUJBQXFCLHdCQUF3QixxQkFBcUIsR0FBRyxxQ0FBcUMsaUNBQWlDLHVCQUF1QixvQ0FBb0MsaUJBQWlCLGdCQUFnQixxQkFBcUIsb0NBQW9DLEdBQUcsNkJBQTZCLHVCQUF1QixlQUFlLGlCQUFpQixlQUFlLG9CQUFvQixpQkFBaUIsR0FBRyxtQ0FBbUMsa0JBQWtCLEdBQUcsb0NBQW9DLG9CQUFvQixtQkFBbUIscUJBQXFCLEdBQUcsc0NBQXNDLHdCQUF3QixpQkFBaUIsR0FBRyxrQ0FBa0MsZUFBZSxHQUFHLG1DQUFtQyxnQkFBZ0IsR0FBRyxnRUFBZ0UsaUJBQWlCLHVCQUF1QixHQUFHLGlFQUFpRSxpQkFBaUIsc0JBQXNCLEdBQUcsNkJBQTZCLHFCQUFxQixlQUFlLGNBQWMsbUNBQW1DLEdBQUcsNkNBQTZDLDBCQUEwQixpQkFBaUIsOENBQThDLHlDQUF5Qyx3QkFBd0IseUJBQXlCLEdBQUcsaURBQWlELG1CQUFtQixHQUFHLG9FQUFvRSx5Q0FBeUMsR0FBRyxpRUFBaUUsdUJBQXVCLGNBQWMsd0NBQXdDLHdDQUF3Qyx3Q0FBd0MsZUFBZSxHQUFHLHFFQUFxRSxlQUFlLGVBQWUsR0FBRyxvQkFBb0IsZUFBZSxHQUFHLDRCQUE0QixxQkFBcUIsZUFBZSxjQUFjLHVCQUF1QixZQUFZLGFBQWEsa0JBQWtCLHVCQUF1QixHQUFHLCtCQUErQiwwQkFBMEIsR0FBRyxtQ0FBbUMsY0FBYyw0QkFBNEIscUJBQXFCLG9CQUFvQixnQkFBZ0Isc0JBQXNCLHVCQUF1QixHQUFHLDRDQUE0QyxpQkFBaUIsR0FBRyx5Q0FBeUMsa0JBQWtCLEdBQUcsU0FBUyxpSEFBaUgsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxvQ0FBb0MsdUJBQXVCLHVCQUF1QixlQUFlLG1CQUFtQiw2QkFBNkIsR0FBRyx1Q0FBdUMsbUJBQW1CLHVCQUF1QixHQUFHLGdDQUFnQyxxQkFBcUIsd0JBQXdCLHFCQUFxQixHQUFHLHFDQUFxQyxpQ0FBaUMsdUJBQXVCLG9DQUFvQyxpQkFBaUIsZ0JBQWdCLHFCQUFxQixvQ0FBb0MsR0FBRyw2QkFBNkIsdUJBQXVCLGVBQWUsaUJBQWlCLGVBQWUsb0JBQW9CLGlCQUFpQixHQUFHLG1DQUFtQyxrQkFBa0IsR0FBRyxvQ0FBb0Msb0JBQW9CLG1CQUFtQixxQkFBcUIsR0FBRyxzQ0FBc0Msd0JBQXdCLGlCQUFpQixHQUFHLGtDQUFrQyxlQUFlLEdBQUcsbUNBQW1DLGdCQUFnQixHQUFHLGdFQUFnRSxpQkFBaUIsdUJBQXVCLEdBQUcsaUVBQWlFLGlCQUFpQixzQkFBc0IsR0FBRyw2QkFBNkIscUJBQXFCLGVBQWUsY0FBYyxtQ0FBbUMsR0FBRyw2Q0FBNkMsMEJBQTBCLGlCQUFpQix5Q0FBeUMseUJBQXlCLEdBQUcsaURBQWlELG1CQUFtQixHQUFHLG9FQUFvRSx5Q0FBeUMsR0FBRyxpRUFBaUUsdUJBQXVCLGNBQWMsZ0NBQWdDLGVBQWUsR0FBRyxxRUFBcUUsZUFBZSxlQUFlLEdBQUcsb0JBQW9CLGVBQWUsR0FBRyw0QkFBNEIscUJBQXFCLGVBQWUsY0FBYyx1QkFBdUIsWUFBWSxhQUFhLGtCQUFrQix1QkFBdUIsR0FBRywrQkFBK0IsMEJBQTBCLEdBQUcsbUNBQW1DLGNBQWMsNEJBQTRCLHFCQUFxQixvQkFBb0IsZ0JBQWdCLHNCQUFzQix1QkFBdUIsR0FBRyw0Q0FBNEMsaUJBQWlCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLHFCQUFxQjtBQUMzM007QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ04xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBLElBQUksSUFBcUM7QUFDekMsNkJBQTZCLG1CQUFPLENBQUMseUZBQTRCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxrREFBVTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDLDJCQUEyQixtQkFBTyxDQUFDLHlGQUE0QjtBQUMvRCxxQkFBcUIsbUJBQU8sQ0FBQyxxRUFBa0I7O0FBRS9DO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOzs7QUFHUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LHVEQUF1RDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLGVBQWU7QUFDN0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztB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TixFQUFELENBQW5CO0FBQUEsR0FBWixDQUFwQjtBQUVBLHNCQUVJO0FBQUEsNEJBQ0kscUVBQUMseURBQUQ7QUFBVSxtQkFBYSxFQUFDLE9BQXhCO0FBQWdDLGlCQUFXLEVBQUUsQ0FBN0M7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBSyxXQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFBQSxrQkFGSixDQVNJO0FBRUE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBbkRKO0FBcURILENBM0REOztHQUFNSCxPO1VBQ2FFLHFEOzs7S0FEYkYsTztBQThEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRGV0YWxoZS5kMjljMGI0NzM2NDZmODRmYjUyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2Fyb3VzZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3BhY2l0eTogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyLWlubmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLXZpZXdwb3J0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1hcnJvdy1kZWZhdWx0IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAyM3B4O1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1hcnJvdzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWFycm93OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtYXJyb3c6ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1sZWZ0LWFycm93IHtcXG4gIGxlZnQ6IDIzcHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtcmlnaHQtYXJyb3cge1xcbiAgcmlnaHQ6IDIzcHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtbGVmdC1hcnJvdy5jYXJvdXNlbC1hcnJvdy1kZWZhdWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnPCc7XFxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtcmlnaHQtYXJyb3cuY2Fyb3VzZWwtYXJyb3ctZGVmYXVsdDpiZWZvcmUge1xcbiAgY29udGVudDogJz4nO1xcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB0b3VjaC1hY3Rpb246IHBhbi15IHBpbmNoLXpvb207XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sgLmNhcm91c2VsLXNsaWRlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLXRyYWNrIC5jYXJvdXNlbC1zbGlkZSA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sgLmNhcm91c2VsLXNsaWRlLmNhcm91c2VsLXNsaWRlLWxvYWRpbmcge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjcpO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLXRyYWNrIC5jYXJvdXNlbC1zbGlkZS5jYXJvdXNlbC1zbGlkZS1mYWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sgLmNhcm91c2VsLXNsaWRlLmNhcm91c2VsLXNsaWRlLXNlbGVjdGVkIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uY2Fyb3VzZWwubG9hZGVkIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogLTMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNDQ0M7XFxuICBwYWRkaW5nLWxlZnQ6IDZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1kb3RzIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9yZWFjdC1pbWctY2Fyb3VzZWwvbGliL2Nhcm91c2VsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCw2QkFBd0I7RUFBeEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5Q0FBb0M7RUFBcEMsb0NBQW9DO0VBQ3BDLG1CQUFvQjtFQUFwQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQ0FBMkI7S0FBM0IsZ0NBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJvdXNlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyLWlubmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLXZpZXdwb3J0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1hcnJvdy1kZWZhdWx0IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAyM3B4O1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1hcnJvdzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWFycm93OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtYXJyb3c6ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1sZWZ0LWFycm93IHtcXG4gIGxlZnQ6IDIzcHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtcmlnaHQtYXJyb3cge1xcbiAgcmlnaHQ6IDIzcHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtbGVmdC1hcnJvdy5jYXJvdXNlbC1hcnJvdy1kZWZhdWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnPCc7XFxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtcmlnaHQtYXJyb3cuY2Fyb3VzZWwtYXJyb3ctZGVmYXVsdDpiZWZvcmUge1xcbiAgY29udGVudDogJz4nO1xcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB0b3VjaC1hY3Rpb246IHBhbi15IHBpbmNoLXpvb207XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sgLmNhcm91c2VsLXNsaWRlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLXRyYWNrIC5jYXJvdXNlbC1zbGlkZSA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sgLmNhcm91c2VsLXNsaWRlLmNhcm91c2VsLXNsaWRlLWxvYWRpbmcge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjcpO1xcbn1cXG4uY2Fyb3VzZWwgLmNhcm91c2VsLXRyYWNrIC5jYXJvdXNlbC1zbGlkZS5jYXJvdXNlbC1zbGlkZS1mYWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtdHJhY2sgLmNhcm91c2VsLXNsaWRlLmNhcm91c2VsLXNsaWRlLXNlbGVjdGVkIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uY2Fyb3VzZWwubG9hZGVkIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogLTMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNDQ0M7XFxuICBwYWRkaW5nLWxlZnQ6IDZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcXG59XFxuLmNhcm91c2VsIC5jYXJvdXNlbC1kb3RzIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZG90cyBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vY2Fyb3VzZWwuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9jYXJvdXNlbC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL2Nhcm91c2VsLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG4vKipcbiAqIFJlbmRlcnMgYW4gYXJyb3cgY29tcG9uZW50IHVzZWQgdG8gdHJhbnNpdGlvbiBmcm9tIHJpZ2h0LXRvLWxlZnQgb3IgbGVmdC10by1yaWdodCB0aHJvdWdoIHRoZSBjYXJvdXNlbCBzbGlkZXMuXG4gKi9cbmNsYXNzIEFycm93IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcFR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBudW1TbGlkZXM6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGluZmluaXRlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgcHJldlNsaWRlOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbmV4dFNsaWRlOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZGlyZWN0aW9uOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLmlzUmVxdWlyZWQsXG4gICAgICBhcnJvd3M6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5ib29sLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICAgICAgICBsZWZ0OiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgICByaWdodDogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG4gICAgICB9KV0pXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlcmUgaXMgYSBuZXh0IHNsaWRlIHRvIHRyYW5zaXRpb24gdG8sIGVsc2UgRmFsc2UuXG4gICAqL1xuXG5cbiAgaGFzTmV4dCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBpbmZpbml0ZSxcbiAgICAgIG51bVNsaWRlcyxcbiAgICAgIHNlbGVjdGVkSW5kZXhcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gaW5maW5pdGUgfHwgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc2VsZWN0ZWRJbmRleCA+IDAgOiBzZWxlY3RlZEluZGV4IDwgbnVtU2xpZGVzIC0gMSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJldlNsaWRlLFxuICAgICAgbmV4dFNsaWRlLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgYXJyb3dzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGFycm93Q29tcG9uZW50ID0gbnVsbDtcbiAgICBsZXQgYnV0dG9uQ2xhc3MgPSAnY2Fyb3VzZWwtYXJyb3ctZGVmYXVsdCc7XG5cbiAgICBpZiAoYXJyb3dzLmxlZnQpIHtcbiAgICAgIGJ1dHRvbkNsYXNzID0gYXJyb3dzLmNsYXNzTmFtZSA/IGFycm93cy5jbGFzc05hbWUgOiAnJztcbiAgICAgIGFycm93Q29tcG9uZW50ID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyBhcnJvd3MubGVmdCA6IGFycm93cy5yaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGRpc2FibGVkOiAhdGhpcy5oYXNOZXh0KCksXG4gICAgICBvbkNsaWNrOiBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHByZXZTbGlkZSA6IG5leHRTbGlkZSxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLWFycm93IGNhcm91c2VsLSR7ZGlyZWN0aW9ufS1hcnJvdyAke2J1dHRvbkNsYXNzfWBcbiAgICB9LCBhcnJvd0NvbXBvbmVudCk7XG4gIH1cblxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBBcnJvdzsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgZG90cyBuYXZpZ2F0aW9uIGNvbXBvbmVudCBmb3IgdGhlIGNhcm91c2VsLCB3aXRoIGNsaWNrYWJsZSBkb3RzIHRoYXQgdHJhbnNpdGlvbiB0byB0aGUgY29ycmVzcG9uZGluZyBzbGlkZS5cbiAqXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgRG90cyBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BUeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtU2xpZGVzOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBzZWxlY3RlZEluZGV4OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBnb1RvU2xpZGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG51bVNsaWRlcyxcbiAgICAgIHNlbGVjdGVkSW5kZXgsXG4gICAgICBnb1RvU2xpZGVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkb3RzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtU2xpZGVzOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBidXR0b25DbGFzcyA9ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSgnY2Fyb3VzZWwtZG90Jywge1xuICAgICAgICBzZWxlY3RlZDogaW5kZXggPT09IHNlbGVjdGVkSW5kZXhcbiAgICAgIH0pO1xuICAgICAgZG90cy5wdXNoKCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAga2V5OiBgZG90LSR7aW5kZXh9YFxuICAgICAgfSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGJ1dHRvbkNsYXNzLFxuICAgICAgICBvbkNsaWNrOiBnb1RvU2xpZGUuYmluZChudWxsLCBpbmRleClcbiAgICAgIH0sIFwiXFx1MjAyMlwiKSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjYXJvdXNlbC1kb3RzXCJcbiAgICB9LCBkb3RzKTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERvdHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRG90c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZG90cy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFycm93XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9hcnJvdy5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9kb3RzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kb3RzXCIpKTtcblxudmFyIF9hcnJvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYXJyb3dcIikpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX21zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb250cm9scyA9IHJlcXVpcmUoXCIuL2NvbnRyb2xzXCIpO1xuXG52YXIgX2FyZUNoaWxkSW1hZ2VzRXF1YWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2FyZUNoaWxkSW1hZ2VzRXF1YWxcIikpO1xuXG52YXIgX250aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvbnRoXCIpKTtcblxuLyogZXNsaW50XG4gIGpzeC1hMTF5L21vdXNlLWV2ZW50cy1oYXZlLWtleS1ldmVudHM6IDAsXG4gIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zOiAwLFxuICBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzOiAwICovXG5jb25zdCBTRUxFQ1RFRF9DTEFTUyA9ICdjYXJvdXNlbC1zbGlkZS1zZWxlY3RlZCc7XG5jb25zdCBMT0FESU5HX0NMQVNTID0gJ2Nhcm91c2VsLXNsaWRlLWxvYWRpbmcnO1xuY29uc3QgTUFYX0xPQURfUkVUUklFUyA9IDUwMDtcbi8qKlxuICogUmVhY3QgY29tcG9uZW50IGNsYXNzIHRoYXQgcmVuZGVycyBhIGNhcm91c2VsLCB3aGljaCBjYW4gY29udGFpbiBpbWFnZXMgb3Igb3RoZXIgY29udGVudC5cbiAqXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BUeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdGlhbFNsaWRlOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAgICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgdHJhbnNpdGlvbjogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mKFsnc2xpZGUnLCAnZmFkZSddKSxcbiAgICAgIGRvdHM6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAgICAgYXJyb3dzOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCwgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgICAgICAgbGVmdDogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUuaXNSZXF1aXJlZCxcbiAgICAgICAgcmlnaHQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLmlzUmVxdWlyZWQsXG4gICAgICAgIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xuICAgICAgfSldKSxcbiAgICAgIGluZmluaXRlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuICAgICAgdmlld3BvcnRXaWR0aDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgICAgIHZpZXdwb3J0SGVpZ2h0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgd2lkdGg6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gICAgICBoZWlnaHQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gICAgICBpbWFnZXNUb1ByZWZldGNoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAgICAgbWF4UmVuZGVyZWRTbGlkZXM6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gICAgICBjZWxsUGFkZGluZzogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgICAgIHNsaWRlV2lkdGg6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gICAgICBzbGlkZUhlaWdodDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgICAgIGJlZm9yZUNoYW5nZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gICAgICBhZnRlckNoYW5nZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmddKSxcbiAgICAgIGF1dG9wbGF5OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmddKSxcbiAgICAgIGxhenlMb2FkOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgICAgIGNvbnRyb2xzOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICAgICAgICBjb21wb25lbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIHByb3BzOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICBwb3NpdGlvbjogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKVxuICAgICAgfSkpLFxuICAgICAgZHJhZ2dhYmxlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgICAgIHBhdXNlT25Ib3ZlcjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG4gICAgICBjbGlja1RvTmF2aWdhdGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAgICAgZHJhZ1RocmVzaG9sZDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgICAgIG9uU2xpZGVUcmFuc2l0aW9uZWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAgICAgZWFzaW5nOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydlYXNlJywgJ2xpbmVhcicsICdlYXNlLWluJywgJ2Vhc2Utb3V0JywgJ2Vhc2UtaW4tb3V0J10pLFxuICAgICAgc3R5bGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gICAgICAgIGNvbnRhaW5lcjogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgY29udGFpbmVySW5uZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIHZpZXdwb3J0OiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICB0cmFjazogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgc2xpZGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIHNlbGVjdGVkU2xpZGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3RcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICB2aWV3cG9ydFdpZHRoOiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBpbWFnZXNUb1ByZWZldGNoOiA1LFxuICAgICAgbWF4UmVuZGVyZWRTbGlkZXM6IDUsXG4gICAgICBjZWxsUGFkZGluZzogMCxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNTAwLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcbiAgICAgIGxhenlMb2FkOiB0cnVlLFxuICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgdHJhbnNpdGlvbjogJ3NsaWRlJyxcbiAgICAgIGRyYWdUaHJlc2hvbGQ6IDAuMixcbiAgICAgIGNsaWNrVG9OYXZpZ2F0ZTogdHJ1ZSxcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgIHN0eWxlOiB7fVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGhpcywgXCJoYW5kbGVJbml0aWFsTG9hZFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRTbGlkZVxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBzbGlkZXMgPSB0aGlzLl90cmFjay5jaGlsZE5vZGVzO1xuICAgICAgY29uc3Qge1xuICAgICAgICBzbGlkZVdpZHRoLFxuICAgICAgICBzbGlkZUhlaWdodFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmICghc2xpZGVXaWR0aCB8fCAhc2xpZGVIZWlnaHQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzbGlkZSA9IHNsaWRlc1tpXTtcblxuICAgICAgICAgIGlmIChwYXJzZUludChzbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSwgMTApID09PSBjdXJyZW50U2xpZGUpIHtcbiAgICAgICAgICAgIGlmICghc2xpZGUub2Zmc2V0V2lkdGggfHwgIXNsaWRlLm9mZnNldEhlaWdodCkge1xuICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsTG9hZFRpbWVyID0gc2V0VGltZW91dCh0aGlzLmhhbmRsZUluaXRpYWxMb2FkLCAxMCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNsaWRlRGltZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzbGlkZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNsaWRlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwiZ29Ub1NsaWRlXCIsIChpbmRleCwgZGlyZWN0aW9uLCBhdXRvU2xpZGUgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBiZWZvcmVDaGFuZ2UsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgdHJhbnNpdGlvbixcbiAgICAgICAgb25TbGlkZVRyYW5zaXRpb25lZFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChvblNsaWRlVHJhbnNpdGlvbmVkKSB7XG4gICAgICAgIG9uU2xpZGVUcmFuc2l0aW9uZWQoe1xuICAgICAgICAgIGF1dG9QbGF5OiBhdXRvU2xpZGUsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRTbGlkZVxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2FuaW1hdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FuaW1hdGluZyA9IHRydWU7XG4gICAgICBiZWZvcmVDaGFuZ2UgJiYgYmVmb3JlQ2hhbmdlKGluZGV4LCBjdXJyZW50U2xpZGUsIGRpcmVjdGlvbik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRTbGlkZTogaW5kZXgsXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIHRyYW5zaXRpb25pbmdGcm9tOiBjdXJyZW50U2xpZGVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGlmICghdHJhbnNpdGlvbkR1cmF0aW9uIHx8IHRyYW5zaXRpb24gPT09ICdmYWRlJykge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgYWN0dWFsbHkgYW5pbWF0ZSBpZiB0cmFuc2l0aW9uRHVyYXRpb24gaXMgMCwgc28gaW1tZWRpYXRlbHkgY2FsbCB0aGUgdHJhbnNpdGlvbiBlbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIHRoaXMuc2xpZGVUcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwibmV4dFNsaWRlXCIsIGUgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjaGlsZHJlblxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRTbGlkZVxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IGN1cnJlbnRTbGlkZSA8IF9yZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAxID8gY3VycmVudFNsaWRlICsgMSA6IDA7XG4gICAgICB0aGlzLmdvVG9TbGlkZShuZXdJbmRleCwgJ3JpZ2h0JywgdHlwZW9mIGUgIT09ICdvYmplY3QnKTtcbiAgICB9KTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcInByZXZTbGlkZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNoaWxkcmVuXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudFNsaWRlXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gY3VycmVudFNsaWRlID4gMCA/IGN1cnJlbnRTbGlkZSAtIDEgOiBfcmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMTtcbiAgICAgIHRoaXMuZ29Ub1NsaWRlKG5ld0luZGV4LCAnbGVmdCcpO1xuICAgIH0pO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwic2xpZGVUcmFuc2l0aW9uRW5kXCIsIGUgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyZW50U2xpZGVcbiAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBhZnRlckNoYW5nZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmICghZSB8fCBlLnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgICB0cmFuc2l0aW9uaW5nRnJvbTogbnVsbCxcbiAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDBcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fYWxsSW1hZ2VzTG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoSW1hZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvcGxheSkge1xuICAgICAgICAgIHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWZ0ZXJDaGFuZ2UgJiYgYWZ0ZXJDaGFuZ2UoY3VycmVudFNsaWRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcImNhbGNMZWZ0T2Zmc2V0XCIsIChyZXRyeUNvdW50ID0gMCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIGxvYWRpbmdcbiAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHRoaXMuX3ZpZXdwb3J0ICYmIHRoaXMuX3ZpZXdwb3J0Lm9mZnNldFdpZHRoO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JldHJ5VGltZXIpO1xuXG4gICAgICBpZiAoIXRoaXMuX3RyYWNrIHx8ICF2aWV3cG9ydFdpZHRoKSB7XG4gICAgICAgIHRoaXMuX3JldHJ5VGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuY2FsY0xlZnRPZmZzZXQsIDEwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGluZmluaXRlLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgY2VsbFBhZGRpbmdcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgbGV0IHtcbiAgICAgICAgY3VycmVudFNsaWRlXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHNsaWRlcyA9IHRoaXMuX3RyYWNrLmNoaWxkTm9kZXM7XG5cbiAgICAgIGNvbnN0IG51bUNoaWxkcmVuID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcblxuICAgICAgaWYgKGluZmluaXRlKSB7XG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDAgJiYgZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgY3VycmVudFNsaWRlID0gbnVtQ2hpbGRyZW47XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFNsaWRlID09PSBudW1DaGlsZHJlbiAtIDEgJiYgZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgbGVmdE9mZnNldCA9IDA7XG4gICAgICBsZXQgc2VsZWN0ZWRTbGlkZTtcbiAgICAgIGxldCBmb3VuZFplcm9XaWR0aFNsaWRlID0gZmFsc2U7XG4gICAgICBsZXQgaXNDdXJyZW50U2xpZGVMb2FkaW5nID0gZmFsc2U7XG4gICAgICBsZXQgY3VycmVudFNsaWRlV2lkdGg7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGVjdGVkU2xpZGUgPSBzbGlkZXNbaV07XG4gICAgICAgIGxlZnRPZmZzZXQgLT0gY2VsbFBhZGRpbmc7XG4gICAgICAgIGlzQ3VycmVudFNsaWRlTG9hZGluZyA9IHNlbGVjdGVkU2xpZGUuY2xhc3NOYW1lLmluZGV4T2YoTE9BRElOR19DTEFTUykgIT09IC0xO1xuICAgICAgICBjdXJyZW50U2xpZGVXaWR0aCA9IHNlbGVjdGVkU2xpZGUub2Zmc2V0V2lkdGg7XG4gICAgICAgIGZvdW5kWmVyb1dpZHRoU2xpZGUgPSBmb3VuZFplcm9XaWR0aFNsaWRlIHx8ICFjdXJyZW50U2xpZGVXaWR0aCAmJiAhaXNDdXJyZW50U2xpZGVMb2FkaW5nO1xuXG4gICAgICAgIGlmIChwYXJzZUludChzZWxlY3RlZFNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLCAxMCkgPT09IGN1cnJlbnRTbGlkZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdE9mZnNldCAtPSBjdXJyZW50U2xpZGVXaWR0aDtcbiAgICAgIH0gLy8gQ2VudGVyIHRoZSBjdXJyZW50IHNsaWRlIHdpdGhpbiB0aGUgdmlld3BvcnRcblxuXG4gICAgICBsZWZ0T2Zmc2V0ICs9ICh2aWV3cG9ydFdpZHRoIC0gY3VycmVudFNsaWRlV2lkdGgpIC8gMjtcbiAgICAgIGNvbnN0IHNob3VsZFJldHJ5ID0gZm91bmRaZXJvV2lkdGhTbGlkZSAmJiByZXRyeUNvdW50IDwgTUFYX0xPQURfUkVUUklFUztcblxuICAgICAgaWYgKGxlZnRPZmZzZXQgIT09IHRoaXMuc3RhdGUubGVmdE9mZnNldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsZWZ0T2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkUmV0cnkpIHtcbiAgICAgICAgdGhpcy5fcmV0cnlUaW1lciA9IHNldFRpbWVvdXQodGhpcy5jYWxjTGVmdE9mZnNldC5iaW5kKHRoaXMsICsrcmV0cnlDb3VudCksIDEwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAvLyBXZSBoYXZlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHRoZSBzbGlkZXMgYW5kIGFyZSBkb25lIGxvYWRpbmcgaW1hZ2VzLCBzbyByZXZlYWwgdGhlIGNhcm91c2VsXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwiaGFuZGxlU2xpZGVDbGlja1wiLCBlID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2xpY2tUb05hdmlnYXRlXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudFNsaWRlXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IGNsaWNrZWRJbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSwgMTApOyAvLyBJZiB0aGUgdXNlciBjbGlja2VkIHRoZSBjdXJyZW50IHNsaWRlIG9yIGl0IGFwcGVhcnMgdGhleSBhcmUgZHJhZ2dpbmcsIGRvbid0IHByb2Nlc3MgdGhlIGNsaWNrXG5cbiAgICAgIGlmICghY2xpY2tUb05hdmlnYXRlIHx8IGNsaWNrZWRJbmRleCA9PT0gY3VycmVudFNsaWRlIHx8IE1hdGguYWJzKHRoaXMuX3N0YXJ0UG9zLnggLSBlLmNsaWVudFgpID4gMC4wMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGlja2VkSW5kZXggPT09IGN1cnJlbnRTbGlkZSAtIDEpIHtcbiAgICAgICAgdGhpcy5wcmV2U2xpZGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZEluZGV4ID09PSBjdXJyZW50U2xpZGUgKyAxKSB7XG4gICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdvVG9TbGlkZShjbGlja2VkSW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwib25Nb3VzZURvd25cIiwgZSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRyYWdnYWJsZSxcbiAgICAgICAgdHJhbnNpdGlvblxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgICAgLy8gRGlzYWJsZSBuYXRpdmUgYnJvd3NlciBzZWxlY3QvZHJhZyBmb3IgaW1nIGVsZW1lbnRzXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZSAmJiB0cmFuc2l0aW9uICE9PSAnZmFkZScgJiYgIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgICBpZiAodGhpcy5fYXV0b3BsYXlUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hdXRvcGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zID0ge1xuICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICB5OiBlLmNsaWVudFksXG4gICAgICAgICAgc3RhcnRUaW1lOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm9uTW91c2VNb3ZlXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdPZmZzZXQ6IGUuY2xpZW50WCAtIHRoaXMuX3N0YXJ0UG9zLnhcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwib25Nb3VzZUVudGVyXCIsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW92ZW1lbnQsIGZhbHNlKTtcbiAgICB9KTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcImhhbmRsZU1vdmVtZW50XCIsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0SG92ZXJTdGF0ZSh0cnVlKTtcbiAgICB9KTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm9uTW91c2VPdmVyXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0SG92ZXJTdGF0ZSh0cnVlKTtcbiAgICB9KTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm9uTW91c2VMZWF2ZVwiLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdmVtZW50LCBmYWxzZSk7XG4gICAgICB0aGlzLnNldEhvdmVyU3RhdGUoZmFsc2UpO1xuICAgICAgIXRoaXMuX2FuaW1hdGluZyAmJiB0aGlzLl9zdGFydFBvcyAmJiB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgIH0pO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwib25Ub3VjaFN0YXJ0XCIsIGUgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkcmFnZ2FibGUsXG4gICAgICAgIHRyYW5zaXRpb25cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAoZHJhZ2dhYmxlICYmIHRyYW5zaXRpb24gIT09ICdmYWRlJyAmJiAhdGhpcy5fYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9hdXRvcGxheVRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2F1dG9wbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLl9zdGFydFBvcyA9IHtcbiAgICAgICAgICAgIHg6IGUudG91Y2hlc1swXS5zY3JlZW5YLFxuICAgICAgICAgICAgeTogZS50b3VjaGVzWzBdLnNjcmVlblksXG4gICAgICAgICAgICBzdGFydFRpbWU6IERhdGUubm93KClcbiAgICAgICAgICB9O1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIHtcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGhpcywgXCJvblRvdWNoTW92ZVwiLCBlID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IHRoaXMuX3ByZXZQb3MgfHwgdGhpcy5fc3RhcnRQb3M7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNjcmVlblgsXG4gICAgICAgIHNjcmVlbllcbiAgICAgIH0gPSBlLnRvdWNoZXNbMF07XG4gICAgICBjb25zdCBhbmdsZSA9IE1hdGguYWJzKE1hdGguYXRhbjIoc2NyZWVuWSAtIHksIHNjcmVlblggLSB4KSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgdGhpcy5fcHJldlBvcyA9IHtcbiAgICAgICAgeDogc2NyZWVuWCxcbiAgICAgICAgeTogc2NyZWVuWVxuICAgICAgfTtcblxuICAgICAgaWYgKGFuZ2xlIDwgMjAgfHwgYW5nbGUgPiAxNjApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkcmFnT2Zmc2V0OiBzY3JlZW5YIC0gdGhpcy5fc3RhcnRQb3MueFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcInN0b3BEcmFnZ2luZ1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRyYWdUaHJlc2hvbGQsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvblxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRyYWdPZmZzZXRcbiAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHRoaXMuX3ZpZXdwb3J0ICYmIHRoaXMuX3ZpZXdwb3J0Lm9mZnNldFdpZHRoIHx8IDE7XG4gICAgICBjb25zdCBwZXJjZW50RHJhZ2dlZCA9IE1hdGguYWJzKGRyYWdPZmZzZXQgLyB2aWV3cG9ydFdpZHRoKTtcbiAgICAgIGNvbnN0IHN3aXBlRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRQb3Muc3RhcnRUaW1lIHx8IDE7XG4gICAgICBjb25zdCBzd2lwZVNwZWVkID0gc3dpcGVEdXJhdGlvbiAvIChwZXJjZW50RHJhZ2dlZCAqIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgY29uc3QgaXNRdWlja1N3aXBlID0gcGVyY2VudERyYWdnZWQgPiAwLjA1ICYmIHN3aXBlRHVyYXRpb24gPCAyNTA7XG4gICAgICBsZXQgZHVyYXRpb247XG5cbiAgICAgIGlmIChpc1F1aWNrU3dpcGUgfHwgcGVyY2VudERyYWdnZWQgPiBkcmFnVGhyZXNob2xkKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZHVyYXRpb24gYmFzZWQgb24gdGhlIHNwZWVkIG9mIHRoZSBzd2lwZVxuICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWluKHN3aXBlU3BlZWQgKiAoMSAtIHBlcmNlbnREcmFnZ2VkKSAqIHZpZXdwb3J0V2lkdGgsICgwLCBfbXMuZGVmYXVsdCkoJycgKyB0cmFuc2l0aW9uRHVyYXRpb24pICogKDEgLSBwZXJjZW50RHJhZ2dlZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSnVzdCB0cmFuc2l0aW9uIGJhY2sgdG8gdGhlIGNlbnRlciBwb2ludFxuICAgICAgICBkdXJhdGlvbiA9ICgwLCBfbXMuZGVmYXVsdCkoJycgKyB0cmFuc2l0aW9uRHVyYXRpb24pICogcGVyY2VudERyYWdnZWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVtb3ZlRHJhZ0xpc3RlbmVycygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogZHVyYXRpb25cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgIGluZmluaXRlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY3VycmVudFNsaWRlXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IG51bVNsaWRlcyA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbik7XG5cbiAgICAgICAgbGV0IG5ld1NsaWRlSW5kZXggPSBjdXJyZW50U2xpZGU7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSAnJztcblxuICAgICAgICBpZiAocGVyY2VudERyYWdnZWQgPiBkcmFnVGhyZXNob2xkIHx8IGlzUXVpY2tTd2lwZSkge1xuICAgICAgICAgIGlmIChkcmFnT2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgbmV3U2xpZGVJbmRleC0tO1xuXG4gICAgICAgICAgICBpZiAobmV3U2xpZGVJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgbmV3U2xpZGVJbmRleCA9IGluZmluaXRlID8gbnVtU2xpZGVzIC0gMSA6IGN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2xpZGVJbmRleCsrO1xuXG4gICAgICAgICAgICBpZiAobmV3U2xpZGVJbmRleCA9PT0gbnVtU2xpZGVzKSB7XG4gICAgICAgICAgICAgIG5ld1NsaWRlSW5kZXggPSBpbmZpbml0ZSA/IDAgOiBjdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlyZWN0aW9uID0gZHJhZ09mZnNldCA+IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZHJhZ09mZnNldDogMCxcbiAgICAgICAgICBjdXJyZW50U2xpZGU6IG5ld1NsaWRlSW5kZXgsXG4gICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICAgIHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U2xpZGU6IHByb3BzLmluaXRpYWxTbGlkZSxcbiAgICAgIGxvYWRpbmc6IHByb3BzLmxhenlMb2FkLFxuICAgICAgbG9hZGVkSW1hZ2VzOiB7fSxcbiAgICAgIHNsaWRlRGltZW5zaW9uczoge30sXG4gICAgICBkcmFnT2Zmc2V0OiAwLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgdHJhbnNpdGlvbmluZ0Zyb206IG51bGxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50U2xpZGVcbiAgICB9ID0gc3RhdGU7XG5cbiAgICBjb25zdCBudW1DaGlsZHJlbiA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbik7XG5cbiAgICBpZiAoY3VycmVudFNsaWRlID49IG51bUNoaWxkcmVuKSB7XG4gICAgICAvLyBUaGUgY3VycmVudFNsaWRlIGluZGV4IGlzIG5vIGxvbmdlciB2YWxpZCwgc28gbW92ZSB0byB0aGUgbGFzdCB2YWxpZCBpbmRleFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFNsaWRlOiBudW1DaGlsZHJlbiA/IG51bUNoaWxkcmVuIC0gMSA6IDBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGF1dG9wbGF5LFxuICAgICAgc2xpZGVXaWR0aFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbnRTbGlkZSxcbiAgICAgIGxvYWRlZEltYWdlcyxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBzbGlkZURpbWVuc2lvbnNcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBvbGRDaGlsZHJlbiA9IHByZXZQcm9wcy5jaGlsZHJlbjtcblxuICAgIGlmIChkaXJlY3Rpb24gIT09IHByZXZTdGF0ZS5kaXJlY3Rpb24gfHwgY3VycmVudFNsaWRlICE9PSBwcmV2U3RhdGUuY3VycmVudFNsaWRlIHx8IGxvYWRlZEltYWdlcyAhPT0gcHJldlN0YXRlLmxvYWRlZEltYWdlcyB8fCBzbGlkZVdpZHRoICE9PSBwcmV2UHJvcHMuc2xpZGVXaWR0aCB8fCBzbGlkZURpbWVuc2lvbnMud2lkdGggIT09IHByZXZTdGF0ZS5zbGlkZURpbWVuc2lvbnMud2lkdGggfHwgc2xpZGVEaW1lbnNpb25zLmhlaWdodCAhPT0gcHJldlN0YXRlLnNsaWRlRGltZW5zaW9ucy5oZWlnaHQpIHtcbiAgICAgIC8vIFdoZW5ldmVyIG5ldyBpbWFnZXMgYXJlIGxvYWRlZCwgdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXggY2hhbmdlcywgdGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIGNoYW5nZXMsIG9yIHRoZVxuICAgICAgLy8gc2xpZGUgd2lkdGggY2hhbmdlcywgd2UgbmVlZCB0byByZWNhbGN1bGF0ZSB0aGUgbGVmdCBvZmZzZXQgcG9zaXRpb25pbmcgb2YgdGhlIHNsaWRlcy5cbiAgICAgIHRoaXMuY2FsY0xlZnRPZmZzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAoISgwLCBfYXJlQ2hpbGRJbWFnZXNFcXVhbC5kZWZhdWx0KShfcmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbiksIF9yZWFjdC5DaGlsZHJlbi50b0FycmF5KG9sZENoaWxkcmVuKSkpIHtcbiAgICAgIC8vIElmIHRoZSBpbWFnZSBzb3VyY2Ugb3IgbnVtYmVyIG9mIGltYWdlcyBjaGFuZ2VkLCB3ZSBuZWVkIHRvIHJlZmV0Y2ggaW1hZ2VzIGFuZCBmb3JjZSBhbiB1cGRhdGVcbiAgICAgIHRoaXMuX2FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5mZXRjaEltYWdlcygpO1xuICAgIH1cblxuICAgIGlmIChhdXRvcGxheSAmJiAoIWxvYWRpbmcgJiYgcHJldlN0YXRlLmxvYWRpbmcgfHwgIXByZXZQcm9wcy5hdXRvcGxheSkpIHtcbiAgICAgIHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhenlMb2FkLFxuICAgICAgYXV0b3BsYXlcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgaWYgKGxhenlMb2FkKSB7XG4gICAgICB0aGlzLmZldGNoSW1hZ2VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICB0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWxjTGVmdE9mZnNldCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNMZWZ0T2Zmc2V0LCBmYWxzZSk7XG5cbiAgICBpZiAod2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hdXRvcGxheSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyaWVzICYmIGVudHJpZXNbMF0gJiYgZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hdXRvcGxheVRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fY29udGFpbmVyUmVmKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMucmVtb3ZlRHJhZ0xpc3RlbmVycygpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNMZWZ0T2Zmc2V0LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3ZlbWVudCwgZmFsc2UpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9hdXRvcGxheVRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fcmV0cnlUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2luaXRpYWxMb2FkVGltZXIpO1xuICAgIHRoaXMuX29ic2VydmVyICYmIHRoaXMuX29ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLl9jb250YWluZXJSZWYpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGF1dG9wbGF5IHRpbWVyIGlmIGl0IGlzIG5vdCBhbHJlYWR5IHJ1bm5pbmcuXG4gICAqL1xuXG5cbiAgc3RhcnRBdXRvcGxheSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fYXV0b3BsYXlUaW1lcik7XG4gICAgdGhpcy5fYXV0b3BsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhdXRvcGxheVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICB0aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfVxuICAgIH0sICgwLCBfbXMuZGVmYXVsdCkoJycgKyB0aGlzLnByb3BzLmF1dG9wbGF5U3BlZWQpKTtcbiAgfVxuICAvKipcbiAgICogTG9hZHMgaW1hZ2VzIHN1cnJvdW5kaW5nIHRoZSBzcGVjaWZpZWQgc2xpZGUgaW5kZXguIFRoZSBudW1iZXIgb2YgaW1hZ2VzIGZldGNoZWQgaXMgY29udHJvbGxlZCBieSB0aGVcbiAgICogaW1hZ2VzVG9QcmVmZXRjaCBwcm9wLlxuICAgKi9cblxuXG4gIGZldGNoSW1hZ2VzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbG9hZGVkSW1hZ2VzLFxuICAgICAgY3VycmVudFNsaWRlXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBzbGlkZXMgPSBfcmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG5cbiAgICBjb25zdCBpbWFnZXNUb1ByZWZldGNoID0gTWF0aC5taW4odGhpcy5wcm9wcy5pbWFnZXNUb1ByZWZldGNoLCBzbGlkZXMubGVuZ3RoKTtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gY3VycmVudFNsaWRlIC0gTWF0aC5mbG9vcihpbWFnZXNUb1ByZWZldGNoIC8gMik7XG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgaW1hZ2VzVG9QcmVmZXRjaDtcbiAgICBjb25zdCBwZW5kaW5nSW1hZ2VzID0gW107XG4gICAgY29uc3QgY3VycmVudEltYWdlID0gc2xpZGVzW2N1cnJlbnRTbGlkZV0ucHJvcHMuc3JjO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBzdGFydEluZGV4OyBpbmRleCA8IGVuZEluZGV4OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBzbGlkZSA9ICgwLCBfbnRoLmRlZmF1bHQpKHNsaWRlcywgaW5kZXggJSBzbGlkZXMubGVuZ3RoKTtcbiAgICAgIGNvbnN0IGltYWdlU3JjID0gc2xpZGUucHJvcHMuc3JjO1xuXG4gICAgICBpZiAoaW1hZ2VTcmMgJiYgIWxvYWRlZEltYWdlc1tpbWFnZVNyY10pIHtcbiAgICAgICAgcGVuZGluZ0ltYWdlcy5wdXNoKGltYWdlU3JjKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGVuZGluZ0ltYWdlcy5sZW5ndGgpIHtcbiAgICAgIHBlbmRpbmdJbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VzOiB7IC4uLnRoaXMuc3RhdGUubG9hZGVkSW1hZ2VzLFxuICAgICAgICAgICAgICAgIFtpbWFnZV06IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWcud2lkdGggfHwgJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWcuaGVpZ2h0IHx8ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW1hZ2UgPT09IGN1cnJlbnRJbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5pdGlhbExvYWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGNMZWZ0T2Zmc2V0KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGNhcm91c2VsIGlzIHVzaW5nIGxhenkgbG9hZGluZyBhbmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzbGlkZSdzIGltYWdlIGlzIGZpcnN0IHJlbmRlcmVkLiBUaGlzXG4gICAqIG1ldGhvZCB3aWxsIGNsZWFyIHRoZSBsb2FkaW5nIHN0YXRlIGNhdXNpbmcgdGhlIGNhcm91c2VsIHRvIHJlbmRlciBhbmQgd2lsbCBjYWxjdWxhdGUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlXG4gICAqIGRpc3BsYXllZCBzbGlkZSB0byB1c2UgYXMgYSBsb2FkaW5nIHNoaW0gaWYgYW4gZXhwbGljaXQgd2lkdGgvaGVpZ2h0IHdlcmUgbm90IHNwZWNpZmllZC5cbiAgICovXG5cblxuICAvKipcbiAgICogQHJldHVybnMge0FycmF5fSBDb250cm9scyB0byBiZSByZW5kZXJlZCB3aXRoIHRoZSBjYXJvdXNlbC5cbiAgICovXG4gIGdldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFycm93cyxcbiAgICAgIGRvdHMsXG4gICAgICBjb250cm9sc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBhcnIgPSBjb250cm9scy5zbGljZSgwKTtcblxuICAgIGlmIChkb3RzKSB7XG4gICAgICBhcnIucHVzaCh7XG4gICAgICAgIGNvbXBvbmVudDogX2NvbnRyb2xzLkRvdHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhcnJvd3MpIHtcbiAgICAgIGFyciA9IGFyci5jb25jYXQoW3tcbiAgICAgICAgY29tcG9uZW50OiBfY29udHJvbHMuQXJyb3csXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCdcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBjb21wb25lbnQ6IF9jb250cm9scy5BcnJvdyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCdcbiAgICAgICAgfVxuICAgICAgfV0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNhcm91c2VsLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDb21wb25lbnQgdG8gYmUgcmVuZGVyZWQuXG4gICAqL1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZpZXdwb3J0V2lkdGgsXG4gICAgICB2aWV3cG9ydEhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgZG90cyxcbiAgICAgIGluZmluaXRlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBzbGlkZUhlaWdodCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzdHlsZSxcbiAgICAgIGRyYWdnYWJsZSxcbiAgICAgIGVhc2luZyxcbiAgICAgIGFycm93c1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGxvYWRpbmcsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBkcmFnT2Zmc2V0LFxuICAgICAgY3VycmVudFNsaWRlLFxuICAgICAgbGVmdE9mZnNldFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgbnVtU2xpZGVzID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoJ2Nhcm91c2VsJywgY2xhc3NOYW1lLCB7XG4gICAgICBsb2FkZWQ6ICFsb2FkaW5nXG4gICAgfSk7XG4gICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7IC4uLihzdHlsZS5jb250YWluZXIgfHwge30pLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IGlubmVyQ29udGFpbmVyU3R5bGUgPSB7IC4uLihzdHlsZS5jb250YWluZXJJbm5lciB8fCB7fSksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG1hcmdpbkJvdHRvbTogZG90cyA/ICcyMHB4JyA6IDBcbiAgICB9O1xuICAgIGNvbnN0IHZpZXdwb3J0U3R5bGUgPSB7IC4uLihzdHlsZS52aWV3cG9ydCB8fCB7fSksXG4gICAgICB3aWR0aDogdmlld3BvcnRXaWR0aCxcbiAgICAgIGhlaWdodDogdmlld3BvcnRIZWlnaHQgfHwgc2xpZGVIZWlnaHQgfHwgJ2F1dG8nXG4gICAgfTtcbiAgICBsZXQgdHJhY2tTdHlsZSA9IHsgLi4uc3R5bGUudHJhY2tcbiAgICB9O1xuXG4gICAgaWYgKHRyYW5zaXRpb24gIT09ICdmYWRlJykge1xuICAgICAgY29uc3QgbGVmdFBvcyA9IGxlZnRPZmZzZXQgKyBkcmFnT2Zmc2V0O1xuICAgICAgdHJhY2tTdHlsZSA9IHsgLi4udHJhY2tTdHlsZSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2xlZnRQb3N9cHgpYCxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uID8gYHRyYW5zZm9ybSAkeygwLCBfbXMuZGVmYXVsdCkoJycgKyB0cmFuc2l0aW9uRHVyYXRpb24pfW1zICR7ZWFzaW5nfWAgOiAnbm9uZSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgIHRyYWNrU3R5bGUudG91Y2hBY3Rpb24gPSAnYXV0byc7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbHMgPSB0aGlzLmdldENvbnRyb2xzKCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIHN0eWxlOiBjb250YWluZXJTdHlsZSxcbiAgICAgIHJlZjogYyA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lclJlZiA9IGM7XG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNhcm91c2VsLWNvbnRhaW5lci1pbm5lclwiLFxuICAgICAgc3R5bGU6IGlubmVyQ29udGFpbmVyU3R5bGVcbiAgICB9LCBjb250cm9scy5maWx0ZXIoQ29udHJvbCA9PiB7XG4gICAgICByZXR1cm4gQ29udHJvbC5wb3NpdGlvbiA9PT0gJ3RvcCc7XG4gICAgfSkubWFwKChDb250cm9sLCBpbmRleCkgPT4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29udHJvbC5jb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIENvbnRyb2wucHJvcHMsIHtcbiAgICAgIGtleTogYGNvbnRyb2wtJHtpbmRleH1gLFxuICAgICAgc2VsZWN0ZWRJbmRleDogY3VycmVudFNsaWRlLFxuICAgICAgbnVtU2xpZGVzOiBudW1TbGlkZXMsXG4gICAgICBuZXh0U2xpZGU6IHRoaXMubmV4dFNsaWRlLFxuICAgICAgcHJldlNsaWRlOiB0aGlzLnByZXZTbGlkZSxcbiAgICAgIGdvVG9TbGlkZTogdGhpcy5nb1RvU2xpZGUsXG4gICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtdmlld3BvcnRcIixcbiAgICAgIHJlZjogdiA9PiB7XG4gICAgICAgIHRoaXMuX3ZpZXdwb3J0ID0gdjtcbiAgICAgIH0sXG4gICAgICBzdHlsZTogdmlld3BvcnRTdHlsZVxuICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNhcm91c2VsLXRyYWNrXCIsXG4gICAgICBzdHlsZTogdHJhY2tTdHlsZSxcbiAgICAgIHJlZjogdCA9PiB7XG4gICAgICAgIHRoaXMuX3RyYWNrID0gdDtcbiAgICAgIH0sXG4gICAgICBvblRyYW5zaXRpb25FbmQ6IHRoaXMuc2xpZGVUcmFuc2l0aW9uRW5kLFxuICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZU92ZXI6IHRoaXMub25Nb3VzZU92ZXIsXG4gICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyLFxuICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uVG91Y2hTdGFydFxuICAgIH0sIHRoaXMucmVuZGVyU2xpZGVzKCkpKSwgY29udHJvbHMuZmlsdGVyKENvbnRyb2wgPT4ge1xuICAgICAgcmV0dXJuIENvbnRyb2wucG9zaXRpb24gIT09ICd0b3AnO1xuICAgIH0pLm1hcCgoQ29udHJvbCwgaW5kZXgpID0+IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRyb2wuY29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBDb250cm9sLnByb3BzLCB7XG4gICAgICBrZXk6IGBjb250cm9sLSR7aW5kZXh9YCxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IGN1cnJlbnRTbGlkZSxcbiAgICAgIG51bVNsaWRlczogbnVtU2xpZGVzLFxuICAgICAgbmV4dFNsaWRlOiB0aGlzLm5leHRTbGlkZSxcbiAgICAgIHByZXZTbGlkZTogdGhpcy5wcmV2U2xpZGUsXG4gICAgICBnb1RvU2xpZGU6IHRoaXMuZ29Ub1NsaWRlLFxuICAgICAgYXJyb3dzOiBhcnJvd3MsXG4gICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICB9KSkpKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIHNsaWRlcyB3aXRoaW4gdGhlIGNhcm91c2VsIHZpZXdwb3J0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IEFycmF5IG9mIHNsaWRlIGNvbXBvbmVudHMgdG8gYmUgcmVuZGVyZWQuXG4gICAqL1xuXG5cbiAgcmVuZGVyU2xpZGVzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaW5maW5pdGUsXG4gICAgICBjZWxsUGFkZGluZyxcbiAgICAgIHNsaWRlV2lkdGgsXG4gICAgICBzbGlkZUhlaWdodCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBzdHlsZSxcbiAgICAgIGVhc2luZyxcbiAgICAgIGxhenlMb2FkXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVEaW1lbnNpb25zLFxuICAgICAgY3VycmVudFNsaWRlLFxuICAgICAgbG9hZGVkSW1hZ2VzXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5fYWxsSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcblxuICAgIGxldCBjaGlsZHJlblRvUmVuZGVyID0gX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYHNsaWRlLSR7aW5kZXh9YDtcbiAgICAgIGNvbnN0IGltZ1NyYyA9IGNoaWxkLnByb3BzLnNyYztcbiAgICAgIGNvbnN0IHNsaWRlQ2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSgnY2Fyb3VzZWwtc2xpZGUnLCB7XG4gICAgICAgIFtTRUxFQ1RFRF9DTEFTU106IGluZGV4ID09PSBjdXJyZW50U2xpZGUsXG4gICAgICAgICdjYXJvdXNlbC1zbGlkZS1mYWRlJzogdHJhbnNpdGlvbiA9PT0gJ2ZhZGUnXG4gICAgICB9KTtcbiAgICAgIGxldCBzbGlkZVN0eWxlID0ge1xuICAgICAgICBtYXJnaW5MZWZ0OiBgJHtjZWxsUGFkZGluZ31weGAsXG4gICAgICAgIGhlaWdodDogc2xpZGVIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBzbGlkZVdpZHRoXG4gICAgICB9O1xuXG4gICAgICBpZiAodHJhbnNpdGlvbiA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgIHNsaWRlU3R5bGUudHJhbnNpdGlvbiA9IGBvcGFjaXR5ICR7KDAsIF9tcy5kZWZhdWx0KSgnJyArIHRyYW5zaXRpb25EdXJhdGlvbil9bXMgJHtlYXNpbmd9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNsaWRlSGVpZ2h0KSB7XG4gICAgICAgIHNsaWRlU3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgIHNsaWRlU3R5bGUubWluSGVpZ2h0ID0gc2xpZGVIZWlnaHQ7IC8vIFNhZmFyaSA5IGJ1Z1xuICAgICAgfVxuXG4gICAgICBpZiAoc2xpZGVXaWR0aCkge1xuICAgICAgICBzbGlkZVN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuICAgICAgICBzbGlkZVN0eWxlLm1pbldpZHRoID0gc2xpZGVXaWR0aDsgLy8gU2FmYXJpIDkgYnVnXG4gICAgICB9XG5cbiAgICAgIHNsaWRlU3R5bGUgPSB7IC4uLnNsaWRlU3R5bGUsXG4gICAgICAgIC4uLihzdHlsZS5zbGlkZSB8fCB7fSksXG4gICAgICAgIC4uLihpbmRleCA9PT0gY3VycmVudFNsaWRlID8gc3R5bGUuc2VsZWN0ZWRTbGlkZSB8fCB7fSA6IHt9KVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGxvYWRpbmdTbGlkZVN0eWxlID0geyAuLi4oc2xpZGVTdHlsZSB8fCB7fSksXG4gICAgICAgIG1hcmdpbkxlZnQ6IHNsaWRlU3R5bGUubWFyZ2luTGVmdCxcbiAgICAgICAgd2lkdGg6IHNsaWRlV2lkdGggfHwgc2xpZGVEaW1lbnNpb25zLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHNsaWRlSGVpZ2h0IHx8IHNsaWRlRGltZW5zaW9ucy5oZWlnaHRcbiAgICAgIH07XG4gICAgICBjb25zdCBzbGlkZXNUb1JlbmRlciA9IHRoaXMuZ2V0SW5kaWNlc1RvUmVuZGVyKCk7IC8vIE9ubHkgcmVuZGVyIHRoZSBhY3R1YWwgc2xpZGUgY29udGVudCBpZiBsYXp5IGxvYWRpbmcgaXMgZGlzYWJsZWQsIHRoZSBpbWFnZSBpcyBhbHJlYWR5IGxvYWRlZCwgb3Igd2VcbiAgICAgIC8vIGFyZSB3aXRoaW4gdGhlIGNvbmZpZ3VyZWQgcHJveGltaXR5IHRvIHRoZSBzZWxlY3RlZCBzbGlkZSBpbmRleC5cblxuICAgICAgaWYgKCFsYXp5TG9hZCB8fCAoaW1nU3JjID8gISFsb2FkZWRJbWFnZXNbaW1nU3JjXSA6IHNsaWRlc1RvUmVuZGVyLmluZGV4T2YoaW5kZXgpID4gLTEpKSB7XG4gICAgICAgIC8vIElmIHRoZSBzbGlkZSBjb250YWlucyBhbiBpbWFnZSwgc2V0IGV4cGxpY2l0IHdpZHRoL2hlaWdodFxuICAgICAgICBpZiAoaW1nU3JjICYmIGxvYWRlZEltYWdlc1tpbWdTcmNdKSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9ID0gbG9hZGVkSW1hZ2VzW2ltZ1NyY107XG4gICAgICAgICAgc2xpZGVTdHlsZS5oZWlnaHQgPSBzbGlkZVN0eWxlLmhlaWdodCB8fCBoZWlnaHQ7XG4gICAgICAgICAgc2xpZGVTdHlsZS53aWR0aCA9IHNsaWRlU3R5bGUud2lkdGggfHwgd2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3R5bGU6IHNsaWRlU3R5bGUsXG4gICAgICAgICAgXCJkYXRhLWluZGV4XCI6IGluZGV4LFxuICAgICAgICAgIGNsYXNzTmFtZTogc2xpZGVDbGFzc2VzLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2xpZGVDbGlja1xuICAgICAgICB9LCBjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWdTcmMpIHtcbiAgICAgICAgdGhpcy5fYWxsSW1hZ2VzTG9hZGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHN0eWxlOiBsb2FkaW5nU2xpZGVTdHlsZSxcbiAgICAgICAgXCJkYXRhLWluZGV4XCI6IGluZGV4LFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShzbGlkZUNsYXNzZXMsIExPQURJTkdfQ0xBU1MpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChpbmZpbml0ZSAmJiB0cmFuc2l0aW9uICE9PSAnZmFkZScpIHtcbiAgICAgIC8vIEZvciBpbmZpbml0ZSBtb2RlLCBjcmVhdGUgMiBjbG9uZXMgb24gZWFjaCBzaWRlIG9mIHRoZSB0cmFja1xuICAgICAgY2hpbGRyZW5Ub1JlbmRlciA9IHRoaXMuYWRkQ2xvbmVzKGNoaWxkcmVuVG9SZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblRvUmVuZGVyO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBzbGlkZXMgaW5kaWNlcyB0aGF0IHNob3VsZCBiZSBmdWxseSByZW5kZXJlZCBnaXZlbiB0aGUgY3VycmVudCBsYXp5TG9hZCBhbmRcbiAgICogbWF4UmVuZGVyZWRTbGlkZXMgc2V0dGluZ3MuXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgb2Ygc2xpZGUgaW5kaWNlcyBpbmRpY2F0aW5nIHdoaWNoIGluZGljZXMgc2hvdWxkIGJlIGZ1bGx5IHJlbmRlcmVkLlxuICAgKi9cblxuXG4gIGdldEluZGljZXNUb1JlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50U2xpZGUsXG4gICAgICB0cmFuc2l0aW9uaW5nRnJvbVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaW5maW5pdGUsXG4gICAgICBtYXhSZW5kZXJlZFNsaWRlc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgbnVtU2xpZGVzID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcblxuICAgIGZ1bmN0aW9uIGdlbkluZGljZXMoc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICAgIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgICBpZiAoaW5maW5pdGUgJiYgaSA8IDApIHtcbiAgICAgICAgICBpbmRpY2VzLnB1c2gobnVtU2xpZGVzICsgaSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5maW5pdGUgJiYgaSA+PSBudW1TbGlkZXMpIHtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goaSAtIG51bVNsaWRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kaWNlcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmRpY2VzO1xuICAgIH0gLy8gRmlndXJlIG91dCB3aGF0IHNsaWRlIGluZGljZXMgbmVlZCB0byBiZSByZW5kZXJlZFxuXG5cbiAgICBjb25zdCBtYXhTbGlkZXMgPSBNYXRoLm1heCgxLCBtYXhSZW5kZXJlZFNsaWRlcyk7XG4gICAgY29uc3QgcHJldlNsaWRlc1RvUmVuZGVyID0gTWF0aC5mbG9vcigobWF4U2xpZGVzIC0gMSkgLyAyKTtcbiAgICBjb25zdCBuZXh0U2xpZGVzVG9SZW5kZXIgPSBNYXRoLmZsb29yKG1heFNsaWRlcyAvIDIpO1xuICAgIGxldCBpbmRpY2VzID0gZ2VuSW5kaWNlcyhjdXJyZW50U2xpZGUgLSBwcmV2U2xpZGVzVG9SZW5kZXIsIGN1cnJlbnRTbGlkZSArIG5leHRTbGlkZXNUb1JlbmRlcik7XG5cbiAgICBpZiAodHJhbnNpdGlvbmluZ0Zyb20gIT09IG51bGwpIHtcbiAgICAgIC8vIEFsc28gcmVuZGVyIHRoZSBzbGlkZXMgYXJvdW5kIHRoZSBwcmV2aW91cyBzbGlkZSBkdXJpbmcgYSB0cmFuc2l0aW9uXG4gICAgICBpbmRpY2VzID0gaW5kaWNlcy5jb25jYXQoZ2VuSW5kaWNlcyh0cmFuc2l0aW9uaW5nRnJvbSAtIHByZXZTbGlkZXNUb1JlbmRlciwgdHJhbnNpdGlvbmluZ0Zyb20gKyBuZXh0U2xpZGVzVG9SZW5kZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaWNlcztcbiAgfVxuXG4gIGFkZENsb25lcyhvcmlnaW5hbHMpIHtcbiAgICBjb25zdCBudW1PcmlnaW5hbHMgPSBvcmlnaW5hbHMubGVuZ3RoO1xuICAgIGNvbnN0IG9yaWdpbmFsc1RvQ2xvbmUgPSBbKDAsIF9udGguZGVmYXVsdCkob3JpZ2luYWxzLCBudW1PcmlnaW5hbHMgLSAyKSwgKDAsIF9udGguZGVmYXVsdCkob3JpZ2luYWxzLCBudW1PcmlnaW5hbHMgLSAxKSwgKDAsIF9udGguZGVmYXVsdCkob3JpZ2luYWxzLCAwKSwgKDAsIF9udGguZGVmYXVsdCkob3JpZ2luYWxzLCBNYXRoLm1pbigxLCBudW1PcmlnaW5hbHMgLSAxKSldO1xuICAgIGNvbnN0IHByZXBlbmRDbG9uZXMgPSBbLyojX19QVVJFX18qLygwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShvcmlnaW5hbHNUb0Nsb25lWzBdLCB7XG4gICAgICAna2V5JzogJ2Nsb25lLTEnLFxuICAgICAgJ2RhdGEtaW5kZXgnOiAtMixcbiAgICAgICdjbGFzc05hbWUnOiBvcmlnaW5hbHNUb0Nsb25lWzBdLnByb3BzLmNsYXNzTmFtZS5yZXBsYWNlKFNFTEVDVEVEX0NMQVNTLCAnJylcbiAgICB9KSwgLyojX19QVVJFX18qLygwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShvcmlnaW5hbHNUb0Nsb25lWzFdLCB7XG4gICAgICAna2V5JzogJ2Nsb25lLTAnLFxuICAgICAgJ2RhdGEtaW5kZXgnOiAtMSxcbiAgICAgICdjbGFzc05hbWUnOiBvcmlnaW5hbHNUb0Nsb25lWzFdLnByb3BzLmNsYXNzTmFtZS5yZXBsYWNlKFNFTEVDVEVEX0NMQVNTLCAnJylcbiAgICB9KV07XG4gICAgY29uc3QgYXBwZW5kQ2xvbmVzID0gWy8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNsb25lRWxlbWVudCkob3JpZ2luYWxzVG9DbG9uZVsyXSwge1xuICAgICAgJ2tleSc6ICdjbG9uZS0yJyxcbiAgICAgICdkYXRhLWluZGV4JzogbnVtT3JpZ2luYWxzLFxuICAgICAgJ2NsYXNzTmFtZSc6IG9yaWdpbmFsc1RvQ2xvbmVbMl0ucHJvcHMuY2xhc3NOYW1lLnJlcGxhY2UoU0VMRUNURURfQ0xBU1MsICcnKVxuICAgIH0pLCAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKG9yaWdpbmFsc1RvQ2xvbmVbM10sIHtcbiAgICAgICdrZXknOiAnY2xvbmUtMycsXG4gICAgICAnZGF0YS1pbmRleCc6IG51bU9yaWdpbmFscyArIDEsXG4gICAgICAnY2xhc3NOYW1lJzogb3JpZ2luYWxzVG9DbG9uZVszXS5wcm9wcy5jbGFzc05hbWUucmVwbGFjZShTRUxFQ1RFRF9DTEFTUywgJycpXG4gICAgfSldO1xuICAgIHJldHVybiBwcmVwZW5kQ2xvbmVzLmNvbmNhdChvcmlnaW5hbHMpLmNvbmNhdChhcHBlbmRDbG9uZXMpO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnQgc3RhdGUgd2l0aCB0aGUgY29ycmVjdCBsZWZ0IG9mZnNldCBwb3NpdGlvbiBzbyB0aGF0IHRoZSBzbGlkZXMgd2lsbCBiZSBwb3NpdGlvbmVkIGNvcnJlY3RseS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJldHJ5Q291bnQgVXNlZCB3aGVuIHJldHJpZXMgYXJlIG5lZWRlZCBkdWUgdG8gc2xvdyBzbGlkZSBsb2FkaW5nXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGhvdmVyIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGhvdmVyaW5nIEN1cnJlbnQgaG92ZXIgc3RhdGUuXG4gICAqL1xuICBzZXRIb3ZlclN0YXRlKGhvdmVyaW5nKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF1c2VPbkhvdmVyLFxuICAgICAgYXV0b3BsYXlcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXVzZU9uSG92ZXIgJiYgYXV0b3BsYXkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlclRpbWVyKTtcblxuICAgICAgaWYgKGhvdmVyaW5nKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hdXRvcGxheVRpbWVyKTsgLy8gSWYgdGhlIG1vdXNlIGRvZXNuJ3QgbW92ZSBmb3IgYSBmZXcgc2Vjb25kcywgd2Ugd2FudCB0byByZXN0YXJ0IHRoZSBhdXRvcGxheVxuXG4gICAgICAgIHRoaXMuX2hvdmVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldEhvdmVyU3RhdGUoZmFsc2UpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBtb3VzZSBjdXJzb3IgbGVhdmVzIGEgc2xpZGUuXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIHRoYXQgd2VyZSBhZGRlZCB3aGVuIHN0YXJ0aW5nIGEgc3dpcGUgb3BlcmF0aW9uXG4gICAqL1xuICByZW1vdmVEcmFnTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3RvcERyYWdnaW5nLCBmYWxzZSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbXBsZXRlcyBhIGRyYWdnaW5nIG9wZXJhdGlvbiwgZGVjaWRpbmcgd2hldGhlciB0byB0cmFuc2l0aW9uIHRvIGFub3RoZXIgc2xpZGUgb3Igc25hcCBiYWNrIHRvIHRoZSBjdXJyZW50IHNsaWRlLlxuICAgKi9cblxuXG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENhcm91c2VsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBhcmVDaGlsZEltYWdlc0VxdWFsKGFycjEsIGFycjIpIHtcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyMS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNyYzEgPSBhcnIxW2ldLnByb3BzLnNyYztcbiAgICBjb25zdCBzcmMyID0gYXJyMltpXS5wcm9wcy5zcmM7XG5cbiAgICBpZiAoc3JjMSAhPT0gc3JjMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgX2RlZmF1bHQgPSBhcmVDaGlsZEltYWdlc0VxdWFsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBudGg7XG5cbmZ1bmN0aW9uIG50aChhcnIsIG4pIHtcbiAgaWYgKCEoYXJyICYmIGFyci5sZW5ndGgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgbiArPSBuIDwgMCA/IGxlbmd0aCA6IDA7XG4gIHJldHVybiBuID49IDAgJiYgbiA8IGxlbmd0aCA/IGFycltuXSA6IHZvaWQgMDtcbn0iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwXG52YXIgbSA9IHMgKiA2MFxudmFyIGggPSBtICogNjBcbnZhciBkID0gaCAqIDI0XG52YXIgeSA9IGQgKiAzNjUuMjVcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbFxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/XG5cdFx0XHRmbXRMb25nKHZhbCkgOlxuXHRcdFx0Zm10U2hvcnQodmFsKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcigndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICsgSlNPTi5zdHJpbmdpZnkodmFsKSlcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpXG4gIGlmIChzdHIubGVuZ3RoID4gMTAwMDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKHN0cilcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSlcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHlcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkXG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtXG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzXG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJ1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJ1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJ1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJ1xuICB9XG4gIHJldHVybiBtcyArICdtcydcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcydcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZVxuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncydcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ2FyZCwgQ2Fyb3VjZWwgfSBmcm9tICcuLi9EZXRhbGhlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWltZy1jYXJvdXNlbCc7XHJcblxyXG5yZXF1aXJlKCdyZWFjdC1pbWctY2Fyb3VzZWwvbGliL2Nhcm91c2VsLmNzcycpO1xyXG5cclxuaW1wb3J0IHsgQ2FzYXMgfSBmcm9tICcuLi8uLi91dGlscy9yZXNpZGVuY2lhcyc7XHJcblxyXG5jb25zdCBEZXRhbGhlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IGRldGFsaGVDYXNhID0gQ2FzYXMuZmluZChwID0+IHAuaWQgPT09IE51bWJlcihpZCkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCB2aWV3cG9ydFdpZHRoPVwiNDAwcHhcIiBjZWxsUGFkZGluZz17NX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMCcgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3BsYWNla2l0dGVuLmNvbS8zMDAvMzAwJyAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzQwMC8zMDAnIC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+LFxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIC8vIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17ZGV0YWxoZUNhc2EuaWR9IG9uQ2xpY2s9eygpID0+IHsgfX0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7ZGV0YWxoZUNhc2EuZW5kZXJlY299XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwID5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtkZXRhbGhlQ2FzYS5iYWlycm99XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWxoZUNhc2EuZGV0YWxoZXMubWFwKHAgPT5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwfTwvbGk+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBDb25kacOnw7VlcyBkZSBwYWdhbWVudG86IHtkZXRhbGhlQ2FzYS5jb25kaWNvZXN9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS1tZWRpdW1cIj57ZGV0YWxoZUNhc2EudmFsb3J9PC9wPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UgdGV4dC0tbWVkaXVtXCI+e2RldGFsaGVDYXNhLnN0YXR1c308L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhbGhlOyJdLCJzb3VyY2VSb290IjoiIn0=