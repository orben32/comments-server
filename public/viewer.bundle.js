(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("zero-to-platform-app", [], factory);
	else if(typeof exports === 'object')
		exports["zero-to-platform-app"] = factory();
	else
		root["zero-to-platform-app"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "https://localhost:3200/";
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./viewer.js":
/*!*******************!*\
  !*** ./viewer.js ***!
  \*******************/
/*! exports provided: initAppForPage, createControllers, exports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAppForPage\", function() { return initAppForPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createControllers\", function() { return createControllers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exports\", function() { return exports; });\nvar initAppForPage = function initAppForPage() {};\n\nvar createController = function createController($w) {\n  var visible = true;\n\n  var btn_onClick = function btn_onClick() {\n    if (visible) {\n      $w('@image').hide();\n    } else {\n      $w('@image').show();\n    }\n\n    visible = !visible;\n  };\n\n  return {\n    pageReady: function pageReady() {\n      var btn = $w('@btn');\n      btn.onClick(function () {\n        return btn_onClick();\n      });\n    },\n    exports: {}\n  };\n};\n\nvar createControllers = function createControllers(controllerConfigs) {\n  return controllerConfigs.map(function (_ref) {\n    var $w = _ref.$w;\n    return createController($w);\n  });\n};\n\nvar exports = {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZXJvLXRvLXBsYXRmb3JtLWFwcC9zcmMvdmlld2VyLmpzPzRjNmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRBcHBGb3JQYWdlID0gKCkgPT4ge307XG5cbmNvbnN0IGNyZWF0ZUNvbnRyb2xsZXIgPSAkdyA9PiB7XG4gIGxldCB2aXNpYmxlID0gdHJ1ZTtcbiAgXG4gIGNvbnN0IGJ0bl9vbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAkdygnQGltYWdlJykuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkdygnQGltYWdlJykuc2hvdygpO1xuICAgIH1cbiAgXG4gICAgdmlzaWJsZSA9ICF2aXNpYmxlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYWdlUmVhZHk6ICgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9ICR3KCdAYnRuJyk7XG4gICAgICBidG4ub25DbGljaygoKSA9PiBidG5fb25DbGljaygpKTtcbiAgICB9LFxuICAgIGV4cG9ydHM6IHtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250cm9sbGVycyA9IGNvbnRyb2xsZXJDb25maWdzID0+XG4gIGNvbnRyb2xsZXJDb25maWdzLm1hcCgoeyR3fSkgPT4gY3JlYXRlQ29udHJvbGxlcigkdykpO1xuXG5leHBvcnQgY29uc3QgZXhwb3J0cyA9IHt9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./viewer.js\n");

/***/ }),

/***/ 1:
/*!***********************!*\
  !*** multi viewer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! viewer.js */"./viewer.js");


/***/ })

/******/ });
});