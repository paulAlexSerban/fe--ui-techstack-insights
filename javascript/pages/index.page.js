/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../js-component-library/source/modules/components/molecules/progressSteps/progressSteps.js":
/*!*****************************************************************************************************!*\
  !*** ../../js-component-library/source/modules/components/molecules/progressSteps/progressSteps.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProgressSteps\": function() { return /* binding */ ProgressSteps; }\n/* harmony export */ });\nvar ProgressSteps = function ProgressSteps(el) {\n  var progressStepsEl = el;\n  var progress = document.getElementById(\"progress\");\n  var prev = document.getElementById(\"prev\");\n  var next = document.getElementById(\"next\");\n  var circles = document.querySelectorAll(\".a-step__base\");\n  var currentActive = 1;\n\n  var init = function init() {\n    console.log(progressStepsEl);\n    setupEvents();\n  };\n\n  var setupEvents = function setupEvents() {\n    next.addEventListener(\"click\", function () {\n      currentActive++;\n      if (currentActive > circles.length) currentActive = circles.length;\n      update();\n    });\n    prev.addEventListener(\"click\", function () {\n      currentActive--;\n      if (currentActive < 1) currentActive = 1;\n      update();\n    });\n  };\n\n  var update = function update() {\n    circles.forEach(function (circle, idx) {\n      if (idx < currentActive) {\n        circle.classList.add(\"active\");\n      } else {\n        circle.classList.remove(\"active\");\n      }\n    });\n    var actives = document.querySelectorAll(\".active\");\n    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + \"%\";\n\n    if (currentActive === 1) {\n      prev.disabled = true;\n    } else if (currentActive === circles.length) {\n      next.disabled = true;\n    } else {\n      prev.disabled = false;\n      next.disabled = false;\n    }\n  };\n\n  init();\n};\n\n//# sourceURL=webpack://static-prototype/../../js-component-library/source/modules/components/molecules/progressSteps/progressSteps.js?");

/***/ }),

/***/ "../../js-component-library/source/modules/structure/pages/index/index.page.js":
/*!*************************************************************************************!*\
  !*** ../../js-component-library/source/modules/structure/pages/index/index.page.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_molecules_progressSteps_progressSteps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/molecules/progressSteps/progressSteps */ \"../../js-component-library/source/modules/components/molecules/progressSteps/progressSteps.js\");\n\n\n(function () {\n  console.log(\"index page loaded\");\n})();\n\n//# sourceURL=webpack://static-prototype/../../js-component-library/source/modules/structure/pages/index/index.page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../../js-component-library/source/modules/structure/pages/index/index.page.js");
/******/ 	
/******/ })()
;