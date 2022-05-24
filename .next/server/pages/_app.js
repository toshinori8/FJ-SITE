"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handleScroll = () => {
  // console.log('scroll event', window.scrollY)
  let logo = document.querySelector(".logo");
  let miniLogo = document.querySelector(".wrapperLogo svg");
  let menu = document.querySelector(".wrapperLogo");

  if (window.scrollY > 80) {//logo?.classList.add("mini");
    //miniLogo?.classList.remove("hidden");
    //menu?.classList.remove("hidden");
    // document.querySelector(".logo_div").className="pl-4 flex items-center logo_div upper"
  } else {//logo?.classList.remove("mini");
    // miniLogo?.classList.add("hidden");
    //menu?.classList.add("hidden");
  }

  if (window.scrollY > 260) {// document.querySelector('.mouse_svg__mouseAnim').setAttribute('class','mouse_svg__mouseAnim hidden');
    // document.querySelector("body").className="bodyColor01";
  } else {// document.querySelector('.mouse_svg__mouseAnim').setAttribute('class','mouse_svg__mouseAnim');
    // document.querySelector("body").className="noColor"
    // document.querySelector(".headerElements").className="headerElements";
  }

  if (window.scrollY > 30) {//   }else{
    // document.querySelector('.mouse_svg__mouseAnim').setAttribute('class','mouse_svg__mouseAnim');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleScroll);

/***/ }),

/***/ 7600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Elements_HandleScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1154);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const sendTrigger = react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9578, 23)).then(x => x.default).then(ReactPixel => {
      ReactPixel.init('553933202522472'); // facebookPixelId

      ReactPixel.pageView();
      next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', () => {
        ReactPixel.pageView();
      });
    });
  }, [(next_router__WEBPACK_IMPORTED_MODULE_2___default().events)]);
  sendTrigger(() => {
    window.addEventListener('scroll', _layout_Elements_HandleScroll__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    return () => window.removeEventListener('scroll', _layout_Elements_HandleScroll__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
    initial: "initial",
    animate: "animate",
    variants: {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      }
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.AnimateSharedLayout, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9578:
/***/ ((module) => {

module.exports = require("react-facebook-pixel");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7600));
module.exports = __webpack_exports__;

})();