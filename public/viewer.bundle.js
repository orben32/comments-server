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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAppForPage\", function() { return initAppForPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createControllers\", function() { return createControllers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exports\", function() { return exports; });\nvar _$w = null;\n\nvar btn_onClick = function btn_onClick() {\n  if (visible) {\n    _$w('@image').hide();\n  } else {\n    _$w('@image').show();\n  }\n\n  visible = !visible;\n};\n\nvar initAppForPage = function initAppForPage() {};\n\nvar visible = true;\n\nvar createControllers = function createControllers(controllerConfigs) {\n  return controllerConfigs.map(function (_ref) {\n    var $w = _ref.$w;\n    return {\n      pageReady: function pageReady() {\n        _$w = $w;\n        var btn = $w('@btn');\n        btn.onClick(function () {\n          return btn_onClick();\n        });\n      },\n      exports: {}\n    };\n  });\n};\n\nvar exports = {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZXJvLXRvLXBsYXRmb3JtLWFwcC9zcmMvdmlld2VyLmpzPzRjNmEiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IF8kdyA9IG51bGw7XG5cbmNvbnN0IGJ0bl9vbkNsaWNrID0gKCkgPT4ge1xuICBpZiAodmlzaWJsZSkge1xuICAgIF8kdygnQGltYWdlJykuaGlkZSgpO1xuICB9IGVsc2Uge1xuICAgIF8kdygnQGltYWdlJykuc2hvdygpO1xuICB9XG5cbiAgdmlzaWJsZSA9ICF2aXNpYmxlO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdEFwcEZvclBhZ2UgPSAoKSA9PiB7fTtcblxubGV0IHZpc2libGUgPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udHJvbGxlcnMgPSBjb250cm9sbGVyQ29uZmlncyA9PlxuICBjb250cm9sbGVyQ29uZmlncy5tYXAoKHskd30pID0+ICh7XG4gICAgcGFnZVJlYWR5OiAoKSA9PiB7XG4gICAgICBfJHcgPSAkdztcbiAgICAgIGNvbnN0IGJ0biA9ICR3KCdAYnRuJyk7XG4gICAgICBidG4ub25DbGljaygoKSA9PiBidG5fb25DbGljaygpKTtcbiAgICB9LFxuICAgIGV4cG9ydHM6IHtcbiAgICB9XG4gIH0pKTtcblxuZXhwb3J0IGNvbnN0IGV4cG9ydHMgPSB7fVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQURBO0FBQ0E7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./viewer.js\n");

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