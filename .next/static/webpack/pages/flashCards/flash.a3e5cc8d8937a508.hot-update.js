"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/flashCards/flash",{

/***/ "./components/flashcard/FlashCard.js":
/*!*******************************************!*\
  !*** ./components/flashcard/FlashCard.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-card-flip */ \"./node_modules/react-card-flip/lib/ReactCardFlip.js\");\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_3__);\n// import { useState } from \"react\";\n// import ReactCardFlip from \"react-card-flip\";\n// function FlashCard() {\n//   const [isFlipped, setIsFlipped] = useState(false);\n//   const [cardBackState, setCardBackState] = useState();\n//   function handleClick() {\n//     setIsFlipped((prevState) => !prevState);\n//   }\n//   function showBack(mode) {\n//     setCardBackState(mode);\n//     handleClick();\n//   }\n//   return (\n//     <ReactCardFlip isFlipped={isFlipped} flipDirection=\"vertical\">\n//       <div className=\"flashCard\">\n//         <button onClick={() => showBack(\"answer\")}>پاسخ</button>\n//         <button onClick={() => showBack(\"inc-answer\")}>پاسخ نادرست</button>\n//       </div>\n//       <div>\n//         {cardBackState === \"answer\" ? <>جواب</> : <>جواب نادرست</>}\n//         <button onClick={handleClick}>بازگشت</button>\n//       </div>\n//     </ReactCardFlip>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FlashCard(param) {\n    let { id , count , questionText , questionTitle , showCard  } = param;\n    _s();\n    const [isFlipped, setIsFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cardBackState, setCardBackState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function handleClick() {\n        setIsFlipped((prevState)=>!prevState);\n    }\n    function showBack(mode) {\n        setCardBackState(mode);\n        handleClick();\n    }\n    const [touchStartY, setTouchStartY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function detectTouchDirection(event) {\n        console.log(\"triggering touch event...\");\n        if (touchStartY) {\n            if (event.pageY === touchStartY) {} else {\n                const diff = event.pageY - touchStartY;\n                if (diff > 0) {\n                    // touch to down\n                    if (isFlipped) {\n                        if (showBack !== \"inc-answer\") setIsFlipped(false);\n                    } else {\n                        showBack(\"answer\");\n                        setIsFlipped(true);\n                    }\n                } else {\n                    // touch to up\n                    if (isFlipped) {\n                        if (showBack !== \"answer\") setIsFlipped(false);\n                    } else {\n                        showBack(\"inc-answer\");\n                        setIsFlipped(true);\n                    }\n                }\n            }\n            setTouchStartY(null);\n        } else {\n            setTouchStartY(event.pageY);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onPointerDown: detectTouchDirection,\n        onPointerUp: detectTouchDirection,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"relative\",\n            zIndex: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_flip__WEBPACK_IMPORTED_MODULE_3___default()), {\n            isFlipped: isFlipped,\n            flipDirection: \"vertical\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flashCard\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"greenbox\",\n                            src: \"/images/Pattern.svg\",\n                            width: 171,\n                            height: 171\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"save\",\n                            width: \"50\",\n                            height: \"50\",\n                            viewBox: \"0 0 50 50\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    cx: \"25\",\n                                    cy: \"25\",\n                                    r: \"25\",\n                                    fill: \"#2B3544\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M25.16 37.4223L25 37.5858L24.824 37.4223C17.224 30.376 12.2 25.7166 12.2 20.9918C12.2 17.7221 14.6 15.2698 17.8 15.2698C20.264 15.2698 22.664 16.9046 23.512 19.1281H26.488C27.336 16.9046 29.736 15.2698 32.2 15.2698C35.4 15.2698 37.8 17.7221 37.8 20.9918C37.8 25.7166 32.776 30.376 25.16 37.4223ZM32.2 12C29.416 12 26.744 13.3243 25 15.4005C23.256 13.3243 20.584 12 17.8 12C12.872 12 9 15.9401 9 20.9918C9 27.1553 14.44 32.2071 22.68 39.842L25 42L27.32 39.842C35.56 32.2071 41 27.1553 41 20.9918C41 15.9401 37.128 12 32.2 12Z\",\n                                    fill: \"#F8F8F8\",\n                                    \"fill-opacity\": \"0.8\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"title\",\n                            children: questionTitle\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"greenline\"\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"count\",\n                            children: [\n                                count,\n                                \"/\",\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: questionText\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flashCard\",\n                    children: cardBackState === \"answer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"جواب\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 127,\n                        columnNumber: 41\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"جواب نادرست\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 127,\n                        columnNumber: 55\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(FlashCard, \"ELj8ERbSQ7CoB+qyuRz59TsIycE=\");\n_c = FlashCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlashCard); // // TODO: move components states to the following state :|\n // const [componentState, setComponentState] = useState(\"initial\"); //  showAnswer | initial | showIncorrectAnswer\n // const [transitionState, setTransitionState] = useState(); //  flippingUp | flippingDown\n // // TODO: complete touch-direction detection logic\n // const [touchStartY, setTouchStartY] = useState(null);\n // function detectTouchDirection(event) {\n //   if (touchStartY) {\n //     if (event.pageY - touchStartY > 0) {\n //       // touch to down\n //       // TODO:\n //       if (componentState === \"initial\") {\n //         setTransitionState(\"flippingDown\");\n //         setComponentState(\"showAnswer\");\n //       } else if (componentState === \"showIncorrectAnswer\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"initial\");\n //       }\n //     } else {\n //       // touch to up\n //       if (componentState === \"initial\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"showIncorrectAnswer\");\n //       } else if (componentState === \"showAnswer\") {\n //         // setTransitionState(\"flippingDown\")\n //         setComponentState(\"initial\");\n //       }\n //     }\n //     setTouchStartY(null);\n //   } else {\n //     setTouchStartY(event.pageY);\n //   }\n // }\nvar _c;\n$RefreshReg$(_c, \"FlashCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDYzs0QkFBS2QsV0FBVTs7Z0NBQ2I3QjtnQ0FBTTtnQ0FBRUQ7Ozs7Ozs7c0NBRVgsOERBQUM2QztzQ0FBRzNDOzs7Ozs7Ozs7Ozs7OEJBRU4sOERBQUNtQjtvQkFBSVMsV0FBVTs4QkFDWnZCLGtCQUFrQix5QkFBVyw4REFBQ3NDO2tDQUFFOzs7Ozs2Q0FBVyw4REFBQ0E7a0NBQUU7Ozs7OzRCQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RTtHQWhHUzlDO0tBQUFBO0FBaUdULCtEQUFlQSxTQUFTQSxFQUFDLENBRXpCLDREQUE0RDtDQUM1RCxrSEFBa0g7Q0FDbEgsMEZBQTBGO0NBRTFGLG9EQUFvRDtDQUNwRCx3REFBd0Q7Q0FDeEQseUNBQXlDO0NBQ3pDLHVCQUF1QjtDQUN2QiwyQ0FBMkM7Q0FDM0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQiw0Q0FBNEM7Q0FDNUMsOENBQThDO0NBQzlDLDJDQUEyQztDQUMzQywrREFBK0Q7Q0FDL0QsOENBQThDO0NBQzlDLHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsZUFBZTtDQUNmLHVCQUF1QjtDQUN2Qiw0Q0FBNEM7Q0FDNUMsOENBQThDO0NBQzlDLG9EQUFvRDtDQUNwRCxzREFBc0Q7Q0FDdEQsZ0RBQWdEO0NBQ2hELHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsUUFBUTtDQUNSLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLE1BQU07Q0FDTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmxhc2hjYXJkL0ZsYXNoQ2FyZC5qcz9kN2JmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIEZsYXNoQ2FyZCgpIHtcclxuLy8gICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vLyAgIGNvbnN0IFtjYXJkQmFja1N0YXRlLCBzZXRDYXJkQmFja1N0YXRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4vLyAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4vLyAgICAgc2V0SXNGbGlwcGVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gc2hvd0JhY2sobW9kZSkge1xyXG4vLyAgICAgc2V0Q2FyZEJhY2tTdGF0ZShtb2RlKTtcclxuLy8gICAgIGhhbmRsZUNsaWNrKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsYXNoQ2FyZFwiPlxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2hvd0JhY2soXCJhbnN3ZXJcIil9Ptm+2KfYs9iuPC9idXR0b24+XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaG93QmFjayhcImluYy1hbnN3ZXJcIil9Ptm+2KfYs9iuINmG2KfYr9ix2LPYqjwvYnV0dG9uPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAge2NhcmRCYWNrU3RhdGUgPT09IFwiYW5zd2VyXCIgPyA8Ptis2YjYp9ioPC8+IDogPD7YrNmI2KfYqCDZhtin2K/Ysdiz2Ko8Lz59XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+2KjYp9iy2q/YtNiqPC9idXR0b24+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tIFwicmVhY3QtY2FyZC1mbGlwXCI7XHJcblxyXG5mdW5jdGlvbiBGbGFzaENhcmQoeyBpZCwgY291bnQsIHF1ZXN0aW9uVGV4dCwgcXVlc3Rpb25UaXRsZSwgc2hvd0NhcmQgfSkge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NhcmRCYWNrU3RhdGUsIHNldENhcmRCYWNrU3RhdGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBzZXRJc0ZsaXBwZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93QmFjayhtb2RlKSB7XHJcbiAgICBzZXRDYXJkQmFja1N0YXRlKG1vZGUpO1xyXG4gICAgaGFuZGxlQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFt0b3VjaFN0YXJ0WSwgc2V0VG91Y2hTdGFydFldID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRldGVjdFRvdWNoRGlyZWN0aW9uKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRyaWdnZXJpbmcgdG91Y2ggZXZlbnQuLi5cIik7XHJcbiAgICBpZiAodG91Y2hTdGFydFkpIHtcclxuICAgICAgaWYgKGV2ZW50LnBhZ2VZID09PSB0b3VjaFN0YXJ0WSkge1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGRpZmYgPSBldmVudC5wYWdlWSAtIHRvdWNoU3RhcnRZO1xyXG4gICAgICAgIGlmIChkaWZmID4gMCkge1xyXG4gICAgICAgICAgLy8gdG91Y2ggdG8gZG93blxyXG4gICAgICAgICAgaWYgKGlzRmxpcHBlZCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvd0JhY2sgIT09IFwiaW5jLWFuc3dlclwiKSBzZXRJc0ZsaXBwZWQoZmFsc2UpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0JhY2soXCJhbnN3ZXJcIik7XHJcbiAgICAgICAgICAgIHNldElzRmxpcHBlZCh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gdG91Y2ggdG8gdXBcclxuICAgICAgICAgIGlmIChpc0ZsaXBwZWQpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dCYWNrICE9PSBcImFuc3dlclwiKSBzZXRJc0ZsaXBwZWQoZmFsc2UpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0JhY2soXCJpbmMtYW5zd2VyXCIpO1xyXG4gICAgICAgICAgICBzZXRJc0ZsaXBwZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldFRvdWNoU3RhcnRZKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VG91Y2hTdGFydFkoZXZlbnQucGFnZVkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgb25Qb2ludGVyRG93bj17ZGV0ZWN0VG91Y2hEaXJlY3Rpb259XHJcbiAgICAgIG9uUG9pbnRlclVwPXtkZXRlY3RUb3VjaERpcmVjdGlvbn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIHpJbmRleDogMSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFJlYWN0Q2FyZEZsaXBcclxuICAgICAgICBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH1cclxuICAgICAgICBmbGlwRGlyZWN0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGFzaENhcmRcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmVlbmJveFwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvUGF0dGVybi5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17MTcxfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezE3MX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudGJveFwiIC8+ICovfVxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYXZlXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MCA1MFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjVcIiBmaWxsPVwiIzJCMzU0NFwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk0yNS4xNiAzNy40MjIzTDI1IDM3LjU4NThMMjQuODI0IDM3LjQyMjNDMTcuMjI0IDMwLjM3NiAxMi4yIDI1LjcxNjYgMTIuMiAyMC45OTE4QzEyLjIgMTcuNzIyMSAxNC42IDE1LjI2OTggMTcuOCAxNS4yNjk4QzIwLjI2NCAxNS4yNjk4IDIyLjY2NCAxNi45MDQ2IDIzLjUxMiAxOS4xMjgxSDI2LjQ4OEMyNy4zMzYgMTYuOTA0NiAyOS43MzYgMTUuMjY5OCAzMi4yIDE1LjI2OThDMzUuNCAxNS4yNjk4IDM3LjggMTcuNzIyMSAzNy44IDIwLjk5MThDMzcuOCAyNS43MTY2IDMyLjc3NiAzMC4zNzYgMjUuMTYgMzcuNDIyM1pNMzIuMiAxMkMyOS40MTYgMTIgMjYuNzQ0IDEzLjMyNDMgMjUgMTUuNDAwNUMyMy4yNTYgMTMuMzI0MyAyMC41ODQgMTIgMTcuOCAxMkMxMi44NzIgMTIgOSAxNS45NDAxIDkgMjAuOTkxOEM5IDI3LjE1NTMgMTQuNDQgMzIuMjA3MSAyMi42OCAzOS44NDJMMjUgNDJMMjcuMzIgMzkuODQyQzM1LjU2IDMyLjIwNzEgNDEgMjcuMTU1MyA0MSAyMC45OTE4QzQxIDE1Ljk0MDEgMzcuMTI4IDEyIDMyLjIgMTJaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI0Y4RjhGOFwiXHJcbiAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMC44XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRpdGxlXCI+e3F1ZXN0aW9uVGl0bGV9PC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JlZW5saW5lXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgIHtjb3VudH0ve2lkfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHA+e3F1ZXN0aW9uVGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGFzaENhcmRcIj5cclxuICAgICAgICAgIHtjYXJkQmFja1N0YXRlID09PSBcImFuc3dlclwiID8gPHA+2KzZiNin2Kg8L3A+IDogPHA+2KzZiNin2Kgg2YbYp9iv2LHYs9iqPC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGbGFzaENhcmQ7XHJcblxyXG4vLyAvLyBUT0RPOiBtb3ZlIGNvbXBvbmVudHMgc3RhdGVzIHRvIHRoZSBmb2xsb3dpbmcgc3RhdGUgOnxcclxuLy8gY29uc3QgW2NvbXBvbmVudFN0YXRlLCBzZXRDb21wb25lbnRTdGF0ZV0gPSB1c2VTdGF0ZShcImluaXRpYWxcIik7IC8vICBzaG93QW5zd2VyIHwgaW5pdGlhbCB8IHNob3dJbmNvcnJlY3RBbnN3ZXJcclxuLy8gY29uc3QgW3RyYW5zaXRpb25TdGF0ZSwgc2V0VHJhbnNpdGlvblN0YXRlXSA9IHVzZVN0YXRlKCk7IC8vICBmbGlwcGluZ1VwIHwgZmxpcHBpbmdEb3duXHJcblxyXG4vLyAvLyBUT0RPOiBjb21wbGV0ZSB0b3VjaC1kaXJlY3Rpb24gZGV0ZWN0aW9uIGxvZ2ljXHJcbi8vIGNvbnN0IFt0b3VjaFN0YXJ0WSwgc2V0VG91Y2hTdGFydFldID0gdXNlU3RhdGUobnVsbCk7XHJcbi8vIGZ1bmN0aW9uIGRldGVjdFRvdWNoRGlyZWN0aW9uKGV2ZW50KSB7XHJcbi8vICAgaWYgKHRvdWNoU3RhcnRZKSB7XHJcbi8vICAgICBpZiAoZXZlbnQucGFnZVkgLSB0b3VjaFN0YXJ0WSA+IDApIHtcclxuLy8gICAgICAgLy8gdG91Y2ggdG8gZG93blxyXG4vLyAgICAgICAvLyBUT0RPOlxyXG4vLyAgICAgICBpZiAoY29tcG9uZW50U3RhdGUgPT09IFwiaW5pdGlhbFwiKSB7XHJcbi8vICAgICAgICAgc2V0VHJhbnNpdGlvblN0YXRlKFwiZmxpcHBpbmdEb3duXCIpO1xyXG4vLyAgICAgICAgIHNldENvbXBvbmVudFN0YXRlKFwic2hvd0Fuc3dlclwiKTtcclxuLy8gICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRTdGF0ZSA9PT0gXCJzaG93SW5jb3JyZWN0QW5zd2VyXCIpIHtcclxuLy8gICAgICAgICAvLyBzZXRUcmFuc2l0aW9uU3RhdGUoXCJmbGlwcGluZ1VwXCIpXHJcbi8vICAgICAgICAgc2V0Q29tcG9uZW50U3RhdGUoXCJpbml0aWFsXCIpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAvLyB0b3VjaCB0byB1cFxyXG4vLyAgICAgICBpZiAoY29tcG9uZW50U3RhdGUgPT09IFwiaW5pdGlhbFwiKSB7XHJcbi8vICAgICAgICAgLy8gc2V0VHJhbnNpdGlvblN0YXRlKFwiZmxpcHBpbmdVcFwiKVxyXG4vLyAgICAgICAgIHNldENvbXBvbmVudFN0YXRlKFwic2hvd0luY29ycmVjdEFuc3dlclwiKTtcclxuLy8gICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRTdGF0ZSA9PT0gXCJzaG93QW5zd2VyXCIpIHtcclxuLy8gICAgICAgICAvLyBzZXRUcmFuc2l0aW9uU3RhdGUoXCJmbGlwcGluZ0Rvd25cIilcclxuLy8gICAgICAgICBzZXRDb21wb25lbnRTdGF0ZShcImluaXRpYWxcIik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHNldFRvdWNoU3RhcnRZKG51bGwpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBzZXRUb3VjaFN0YXJ0WShldmVudC5wYWdlWSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwiUmVhY3RDYXJkRmxpcCIsIkZsYXNoQ2FyZCIsImlkIiwiY291bnQiLCJxdWVzdGlvblRleHQiLCJxdWVzdGlvblRpdGxlIiwic2hvd0NhcmQiLCJpc0ZsaXBwZWQiLCJzZXRJc0ZsaXBwZWQiLCJjYXJkQmFja1N0YXRlIiwic2V0Q2FyZEJhY2tTdGF0ZSIsImhhbmRsZUNsaWNrIiwicHJldlN0YXRlIiwic2hvd0JhY2siLCJtb2RlIiwidG91Y2hTdGFydFkiLCJzZXRUb3VjaFN0YXJ0WSIsImRldGVjdFRvdWNoRGlyZWN0aW9uIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicGFnZVkiLCJkaWZmIiwiZGl2Iiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlclVwIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiekluZGV4IiwiZmxpcERpcmVjdGlvbiIsImNsYXNzTmFtZSIsInNyYyIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInBhdGgiLCJkIiwiZmlsbC1vcGFjaXR5IiwiaDUiLCJzcGFuIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/flashcard/FlashCard.js\n"));

/***/ })

});