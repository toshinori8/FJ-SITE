"use strict";
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 4361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Malowanie_template)
/* harmony export */ });
/* harmony import */ var _layout_Elements_menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8868);
/* harmony import */ var _layout_Elements_menu_MenuOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6652);
/* harmony import */ var _layout_Elements_menu_MenuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6963);
/* harmony import */ var _layout_Elements_LogoFJ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8691);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Elements_menu_Menu__WEBPACK_IMPORTED_MODULE_0__, _layout_Elements_menu_MenuOver__WEBPACK_IMPORTED_MODULE_1__, _layout_Elements_LogoFJ__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_layout_Elements_menu_Menu__WEBPACK_IMPORTED_MODULE_0__, _layout_Elements_menu_MenuOver__WEBPACK_IMPORTED_MODULE_1__, _layout_Elements_LogoFJ__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100
  }
};

const Malowanie_template = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
  children: [props.meta, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("header", {
    id: "header",
    className: "alt",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("nav", {
      id: "desktop",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "wrapperLogo ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "inner",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_layout_Elements_LogoFJ__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_layout_Elements_menu_MenuItems__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_layout_Elements_menu_MenuOver__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_layout_Elements_menu_Menu__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    id: "wrapper",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.main, {
      variants: variants // Pass the variant object into Framer Motion 
      ,
      initial: "hidden" // Set the initial state to variants.hidden
      ,
      animate: "enter" // Animated state to variants.enter
      ,
      exit: "exit" // Exit state (used later) to variants.exit
      ,
      transition: {
        type: 'linear'
      } // Set the transition to linear
      ,
      className: "",
      children: props.children
    })
  })]
});


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;