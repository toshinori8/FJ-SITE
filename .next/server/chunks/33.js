"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 1046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// interface Props {
//   username: string;
// }
const FadeIn = ({
  children
}) => {
  const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();
  const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    ref: ref,
    animate: controls,
    initial: "hidden",
    transition: {
      duration: 0.3,
      delay: 0.5,
      left: 'auto'
    },
    variants: {
      visible: {
        opacity: 1,
        scale: 1
      },
      hidden: {
        opacity: 0,
        scale: 1,
        left: 200
      }
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeIn);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1046);
/* harmony import */ var _KontaktForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7932);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FadeIn__WEBPACK_IMPORTED_MODULE_0__, _KontaktForm__WEBPACK_IMPORTED_MODULE_1__]);
([_FadeIn__WEBPACK_IMPORTED_MODULE_0__, _KontaktForm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Footer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
      id: "footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_FadeIn__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "inner",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
            className: "major",
            children: "Zostaw wiadomo\u015B\u0107 lub skontktuj si\u0119 z nami"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_KontaktForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "contactInfo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "contact",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "icon solid fa-home",
                children: ["FJ \u0141UKASZ JELE\u0143", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), "Stronie 248", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {}), "34-145 Stronie"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                className: "icon solid fa-phone",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                  href: "tel:+48798141832",
                  children: "(+48) 798 141 832"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                className: "icon solid fa-envelope",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                  href: "mailto:biuro@malowanie-dachow-fj.pl",
                  children: "biuro@malowanie-dachow-fj.pl"
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "copyright",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
              children: "\xA9 FJ \u0141ukasz Jele\u0144 wszelkie prawa zastrzeone."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: ["Code: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "http://stream404.art.pl",
                children: "Stream404"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "brake_list"
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5641);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LogoFJ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8691);
/* harmony import */ var _menu_HamMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5660);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1046);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_0__, _LogoFJ__WEBPACK_IMPORTED_MODULE_3__, _FadeIn__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_0__, _LogoFJ__WEBPACK_IMPORTED_MODULE_3__, _FadeIn__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { Alert } from "react";
// import { Alert } from 'components';










function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let messageAllert = "";
let sending = false;

const KontaktForm = () => {
  var _errors$name, _errors$name2, _errors$email, _errors$email2, _errors$message, _errors$message2, _errors$rodo, _errors$rodo2;

  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)();

  const onSubmit = data => {
    // console.log(data)
    // const overF= document.getElementsByClassName('overflow');
    sending = true;
    document.body.classList.toggle('overflow');
    messageAllert = "Wysyłanie wiadomości"; // console.log("Sending message");

    sleep(2000).then(() => {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://malowanie-dachow-fj.pl/mail.php', {
        params: {
          name: data.name,
          message: data.message,
          email: data.email
        },
        responseType: 'json'
      }).then(function (response) {
        //   if(response.data)
        if (response.status === 200) {// console.log(response.data);
        }
      }).catch(function (error) {// console.log(error);
      }).then(function (response) {
        // always executed
        let mesO = document.querySelector('.messageAllert');
        messageAllert = "Wiadomość wysłana";
        if (mesO) mesO.innerHTML = messageAllert;

        function hideOver() {
          sending = false;
          document.body.classList.toggle('overflow');
        }

        setTimeout(hideOver, 3000);
      });
    }); // biuro@malowanie-dachow-fj.pl
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "fields",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "field",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
            htmlFor: "name",
            children: "Imie Nazwisko"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", _objectSpread({
            type: "text",
            id: "name"
          }, register("name", {
            required: true,
            minLength: 4
          }))), errors.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
            variant: "danger",
            children: [((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.type) === "required" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Imi\u0119 i nazwosko wymagane"
            }), ((_errors$name2 = errors.name) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.type) === "minLength" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Zbyt kr\xF3tkie"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "field",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
            htmlFor: "email",
            children: "Email"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", _objectSpread({
            type: "email",
            id: "email"
          }, register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }))), errors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
            variant: "danger",
            children: [((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === "required" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Wprowadz adres email"
            }), ((_errors$email2 = errors.email) === null || _errors$email2 === void 0 ? void 0 : _errors$email2.type) === "pattern" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "B\u0142\u0119dny adres email"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "field",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
            htmlFor: "message",
            children: "Wiadomo\u015B\u0107"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("textarea", _objectSpread({
            id: "message"
          }, register("message", {
            required: true,
            minLength: 10
          }))), errors.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
            variant: "danger",
            children: [((_errors$message = errors.message) === null || _errors$message === void 0 ? void 0 : _errors$message.type) === "required" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Wprowad\u017A wiadomo\u015B\u0107"
            }), ((_errors$message2 = errors.message) === null || _errors$message2 === void 0 ? void 0 : _errors$message2.type) === "minLength" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Wprowad\u017A wiadomo\u015B\u0107"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "field",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", _objectSpread(_objectSpread({
            type: "checkbox"
          }, register('rodo')), {}, {
            id: "rodo",
            className: `form-check-input ${errors.rodo ? 'is-invalid' : ''}`
          })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
            htmlFor: "rodo",
            id: "rodo-label",
            className: "form-check-label",
            children: "Wyra\u017Cam zgod\u0119 na przetwarzanie moich danych osobowych wy\u0142\u0105cznie w celu nawi\u0105zania kontaktu przez firm\u0119 FJ \u0141ukasz Jele\u0144."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "invalid-feedback",
            children: (_errors$rodo = errors.rodo) === null || _errors$rodo === void 0 ? void 0 : _errors$rodo.message
          }), errors.rodo && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
            variant: "danger",
            children: ((_errors$rodo2 = errors.rodo) === null || _errors$rodo2 === void 0 ? void 0 : _errors$rodo2.type) === "required" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              children: "Wymagane by przes\u0142a\u0107 wiadomo\u015B\u0107"
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
        className: "actions",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
            type: "submit",
            value: "Wy\u015Blij"
          })
        })
      }), sending == true, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "overflow",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_menu_HamMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          csState: "open"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_LogoFJ__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FadeIn__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "messageAllert",
            children: messageAllert
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KontaktForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1046);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FadeIn__WEBPACK_IMPORTED_MODULE_1__]);
_FadeIn__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function LogoFJ() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_FadeIn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 298 118.7",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("defs", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("mask", {
            id: "Mask-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
              transform: "translate(75.7,-13.1)",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
                width: "8.1",
                height: "21",
                fill: "#fff",
                transform: "translate(42.4,62.9) rotate(60) translate(-66.6,-10.5)",
                className: "animMask1"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
                width: "8.1",
                height: "21",
                fill: "#fff",
                transform: "translate(42.4,62.9) rotate(60) translate(-66.6,-10.5)",
                className: "animMask2"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
                width: "3.3",
                height: "17.8",
                fill: "#fff",
                transform: "translate(138.1,122.8) skewX(33) translate(-46,-14)",
                className: "animMask3"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
                width: "8.1",
                height: "21",
                fill: "#fff",
                transform: "translate(17.4,69.3) rotate(60) translate(78.9,-10.5)",
                className: "animMask4"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
                width: "19.5",
                height: "3",
                fill: "#fff",
                transform: "translate(56.5,101.2) rotate(31) scale(-1,-1) translate(81,44.4)",
                className: "animMask5"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
                width: "19.5",
                height: "3",
                fill: "#fff",
                transform: "translate(56.5,101.2) rotate(31) scale(-1,-1) translate(55.6,-100.6)",
                className: "animMask6"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("mask", {
            id: "Mask-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
              width: "22.6",
              height: "9.9",
              fill: "#fff",
              transform: "translate(132.3,88.2) rotate(-149) translate(33,-80.5)",
              className: "animMask7"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("mask", {
            id: "Mask-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
              width: "11.9",
              height: "135",
              fill: "#fff",
              transform: "translate(99.8,59.5) translate(-6,-67.5)",
              className: "animMask8"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("mask", {
            id: "Mask-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
              width: "14.6",
              height: "111.1",
              fill: "#fff",
              transform: "translate(163.6,8.6)",
              className: "animMask9"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
          className: "st1 white",
          d: "M71.2 1l-71.2 117.7h46.2l32.1-53.7l-9.6-15.1l-32.1 51.3h-7l40.9-67.2l49.5 84.7h49.5l-72.7-118.7l-9.3 15.6l49.8 85.3h-7.7Z",
          fill: "#a51a42",
          mask: "url(#Mask-1)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
          className: "st1 white",
          d: "M93.9 118.7h17.3l-28.2-45.9l-28.4 45.9h16.6l10.8-17.4Z",
          fill: "#a51a42",
          mask: "url(#Mask-2)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
          className: "st1",
          d: "M126 0h-14.6h-5.6l72.8 119.9h7.6h12.6h99.2v-119.9h-172Z",
          fill: "#a51a42",
          mask: "url(#Mask-3)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
          className: "st1",
          d: "M185.6 108.3h21v-39h42.8v-17h-43.3v-23h46.2v-17.2h-66.7Zm98.7-16.3c1.5-4.5 1.7-13.3 1.7-13.3h-0.2v-66.6h-20l-0.5 55.9c0 0 .8 12.2-1.1 17.3c-1.9 5.1-5.5 5.6-7.9 6c-2.4 .4-7-0.1-7-0.1l-4.2-0.4l-0.2 16.6c0 0 .6 .2 2.4 .6c1.8 .4 10.8 1 15.2 .8c4.4-0.2 9.7-1.9 13.7-4.4c4-2.5 6.7-7.9 8.1-12.4Z",
          fill: "#fff",
          fillRule: "evenodd",
          mask: "url(#Mask-4)",
          transform: "translate(.4,-1)"
        })]
      })
    })
  });
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoFJ);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Meta)
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(457);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








let hostname = '';

if (false) {}

const Meta = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    var _document$querySelect;

    let classNemm = router.asPath.replace(/([/])+/g, '');
    (_document$querySelect = document.querySelector('body')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.removeAttribute("class");

    if (classNemm !== "") {
      var _document$querySelect2, _document$querySelect3, _document$querySelect4;

      let classs = (_document$querySelect2 = document.querySelector('body')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.add(classNemm);
      let menuEl = (_document$querySelect3 = document.querySelector('a[href*="' + router.asPath + '"]')) === null || _document$querySelect3 === void 0 ? void 0 : (_document$querySelect4 = _document$querySelect3.parentElement) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.classList.toggle('active'); //console.log(router.asPath.replace(/([/])+/g,''));
    }

    ;
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("meta", {
        title: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.title */ .X.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("meta", {
        charSet: "UTF-8"
      }, "charset"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }, "viewport"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("link", {
        rel: "apple-touch-icon",
        href: `${router.basePath}/assets/images/favicons/apple-touch-icon.png`
      }, "apple"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${router.basePath}/assets/images/favicons/favicon-32x32.png`
      }, "icon32"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${router.basePath}/assets/images/favicons/favicon-16x16.png`
      }, "icon16"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("link", {
        rel: "icon",
        href: `${router.basePath}/assets/images/favicons/favicon.ico`
      }, "favicon")]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo, {
      title: props.title,
      description: props.description,
      canonical: props.canonical,
      openGraph: {
        type: 'website',
        title: props.title,
        description: props.description,
        images: [{
          url: hostname + '/' + props.og_image,
          width: props.og_image_width,
          height: props.og_image_height,
          alt: props.description,
          type: 'image/jpeg'
        }, {
          url: 'http://malowanie-dachow-fj.pl/assets/og-image/default.jpg',
          width: 1200,
          height: 629,
          alt: props.description,
          type: 'image/jpeg'
        }, {
          url: 'http://malowanie-dachow-fj.pl/assets/og-image/default1.jpg',
          width: 665,
          height: 600,
          alt: props.description,
          type: 'image/jpeg'
        }, {
          url: 'http://malowanie-dachow-fj.pl/assets/og-image/default2.jpg',
          width: 665,
          height: 600,
          alt: props.description,
          type: 'image/jpeg'
        }, {
          url: 'http://malowanie-dachow-fj.pl/assets/og-image/default3.jpg',
          width: 1200,
          height: 767,
          alt: props.description,
          type: 'image/jpeg'
        }],
        url: props.canonical,
        locale: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.locale */ .X.locale,
        site_name: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.site_name */ .X.site_name
      }
    })]
  });
};



/***/ }),

/***/ 5660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const HamMenu = stateX => {
  const hideMenuOver = e => {
    e.preventDefault(); // console.log('sad');

    document.body.classList.remove('is-menu-visible');
    document.body.classList.remove('overflow'); // useEffect(() => {
    // }, []);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    id: "nav-icon",
    className: stateX.csState,
    onClick: e => hideMenuOver(e),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HamMenu);

/***/ }),

/***/ 8868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HamMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5660);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Menu() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('keydown', function e(event) {
      let el = document.getElementById('nav-icon');

      if (event.keyCode === 27) {
        document.body.classList.remove('is-menu-visible');
        el === null || el === void 0 ? void 0 : el.classList.remove('open'); //  console.log('ESC');
      } // console.log(event.keyCode);

    });
  }, []);

  const showMobileMenu = e => {
    var _document$getElementB;

    e.preventDefault(); // console.log('showMobileMenu');

    document.body.classList.toggle('is-menu-visible');
    let el = document.getElementById('nav-icon');
    el === null || el === void 0 ? void 0 : el.classList.toggle('open');
    let clos = (_document$getElementB = document.getElementById('nav-icon')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.contains('open');

    if (!clos) {
      document.body.classList.toggle('is-menu-visible');
      el === null || el === void 0 ? void 0 : el.classList.remove('open');
    }
  };

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 2
      }
    },
    hidden: {
      opacity: 0
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("nav", {
      id: "burger",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        href: "#",
        onClick: e => showMobileMenu(e),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          initial: "hidden",
          animate: "visible",
          variants: variants,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_HamMenu__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            csState: "close"
          })
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function MenuItems() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
    className: "primary",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
        href: "/oferta/malowanie-dachow",
        children: "Malowanie dach\xF3w"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
        href: "/oferta/pielegnacja-ogrodow",
        children: "Piel\u0119gnacja ogro\xF3w"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
        href: "/kontakt/",
        children: "Kontakt"
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItems);

/***/ }),

/***/ 6652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6963);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MenuOver() {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 2
      }
    },
    hidden: {
      opacity: 0
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("nav", {
      id: "menu",
      className: "mobile",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "inner",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("ul", {
          className: "links",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_MenuItems__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
          initial: "hidden",
          animate: "visible",
          variants: variants
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuOver);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
  site_name: 'FJ MALOWANIE DACHÓW',
  title: 'FJ MALOWANIE DACHÓW',
  description: 'Profesjonalne kompleksowe usługi z zakresu mycia, czyszczenia, impregnacji i malowania dachów',
  locale: 'pl'
};

/***/ })

};
;