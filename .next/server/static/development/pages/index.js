module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ouell\\Documents\\GitHub\\rona\\components\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Card({
  title
}) {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, title);
}

/***/ }),

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ouell\\Documents\\GitHub\\rona\\components\\Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Carousel() {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Nav Carousel");
}

/***/ }),

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var react_world_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-world-flags */ "react-world-flags");
/* harmony import */ var react_world_flags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_world_flags__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Ouell\\Documents\\GitHub\\rona\\components\\CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Form = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "CountrySelector__Form",
  componentId: "sc-1czhn8m-0"
})(["display:grid;align-items:center;justify-items:center;background:#4775c9;padding:2rem;border-radius:2rem;font-size:2rem;text-align:center;select{width:300px;padding:5px;margin:10px;font-size:16px;}"]);
function CountrySelector({
  url
}) {
  const {
    stats: countryData,
    loading,
    error
  } = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('USA');
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Loading...");
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Error...");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "onChange=", e => {
    setSelectedCountry(e.target.value);
  }, ">", Object.entries(countryData.countries).map(([country, code]) => {
    {
      console.log(code);
    }
    return __jsx("option", {
      defaultValue: selectedCountry === code.name,
      key: code,
      value: countryData.iso3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, code.name);
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Currently Showing"), __jsx(react_world_flags__WEBPACK_IMPORTED_MODULE_3___default.a, {
    height: "128",
    title: selectedCountry,
    alt: selectedCountry,
    code: selectedCountry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: `https://covid19.mathdro.id/api/countries/${selectedCountry}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ouell\\Documents\\GitHub\\rona\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Navbar__Header",
  componentId: "cz6vi3-0"
})(["display:flex;justify-content:space-evenly;align-items:center;background:#6a6cb7;"]);
const Ref = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Navbar__Ref",
  componentId: "cz6vi3-1"
})(["display:flex;font-size:2rem;padding:2rem 2rem;color:white;"]);
function Navbar() {
  return __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(Ref, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Home"), __jsx(Ref, {
    href: "/stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Stats"), __jsx(Ref, {
    href: "/news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "News"), __jsx(Ref, {
    href: "/map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Map"));
}

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ouell\\Documents\\GitHub\\rona\\components\\Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Stats__StatGrid",
  componentId: "sc-1ukxigp-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1rem;"]);
const StatBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Stats__StatBlock",
  componentId: "sc-1ukxigp-1"
})(["display:grid;align-items:center;justify-items:center;background:#f2f2f2;padding:2rem;border-radius:2rem;font-size:2rem;text-align:center;margin:1.2rem;"]);
function Stats({
  url
}) {
  const {
    stats,
    loading,
    error
  } = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Error...");

  if (stats.confirmed && stats.deaths && stats.recovered) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(StatGrid, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(StatBlock, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Confirmed: "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, stats.confirmed.value)), __jsx(StatBlock, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Deaths: "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, stats.deaths.value)), __jsx(StatBlock, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Recovered: "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, stats.recovered.value))));
  } else {
    return __jsx(StatGrid, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(StatBlock, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Confirmed: "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Unknown")), __jsx(StatBlock, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Deaths: "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Unknown")), __jsx(StatBlock, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Recovered: "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Unknown")));
  }
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Ouell\\Documents\\GitHub\\rona\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 //https://thevirustracker.com/api

/*  Extra Colour  I like with the https://dt-cdn.net/images/index-header-gradient-30474b72ac.svg
    display: inherit;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-preferred-size: calc(100% - 1.25rem)!important;
    flex-basis: calc(100% - 1.25rem)!important;
    max-width: calc(100% - 1.25rem)!important;
    position: relative;
    padding: 1.5rem;
    overflow: hidden;
    transition: background-color .45s ease;
    transition-property: background-color;
    transition-duration: 0.45s;
    transition-timing-function: ease;
    transition-delay: 0s;
    background: rgba(255,255,255,.03)!important;
    border: 2px solid rgba(255,255,255,.25);
    box-shadow: 0 0 30px 0 rgba(0,0,0,.4);


	.tile-list-hover-effect--arrow .tile:hover {
    background: rgba(255,255,255,.03)!important;
    transform: scale(1.1);
    border: 2px solid #495bc1;
}

.tile-list-hover-effect--arrow .tile {
    min-height: 270px;
    transition: all .45s ease;
    transition-property: all;
    transition-duration: 0.45s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
*/

const GlobalStats = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__GlobalStats",
  componentId: "sc-1oihg6h-0"
})(["display:grid;align-items:center;justify-items:center;background:#0f1419;color:#af2a2a;padding:2rem;border-radius:2rem;font-size:2rem;text-align:center;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__Header",
  componentId: "sc-1oihg6h-1"
})(["display:flex;justify-content:center;align-items:center;background:#272852;"]);
function IndexPage() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Corona Virus Tracking App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(GlobalStats, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Global Stats")), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://covid19.mathdro.id/api",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "https://covid19.mathdro.id/api/countries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }));
}

/***/ }),

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStats(url) {
  const {
    0: stats,
    1: setStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      try {} catch (error) {}

      setLoading(true);
      setError();
      const data = await fetch(url).then(res => res.json()).catch(err => {
        setError(err);
      });
      setStats(data);
      setLoading(false);
    }

    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error
  };
}

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ouell\Documents\GitHub\rona\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-world-flags":
/*!************************************!*\
  !*** external "react-world-flags" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-world-flags");

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
//# sourceMappingURL=index.js.map