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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-card-flip */ \"./node_modules/react-card-flip/lib/ReactCardFlip.js\");\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_3__);\n// import { useState } from \"react\";\n// import ReactCardFlip from \"react-card-flip\";\n// function FlashCard() {\n//   const [isFlipped, setIsFlipped] = useState(false);\n//   const [cardBackState, setCardBackState] = useState();\n//   function handleClick() {\n//     setIsFlipped((prevState) => !prevState);\n//   }\n//   function showBack(mode) {\n//     setCardBackState(mode);\n//     handleClick();\n//   }\n//   return (\n//     <ReactCardFlip isFlipped={isFlipped} flipDirection=\"vertical\">\n//       <div className=\"flashCard\">\n//         <button onClick={() => showBack(\"answer\")}>پاسخ</button>\n//         <button onClick={() => showBack(\"inc-answer\")}>پاسخ نادرست</button>\n//       </div>\n//       <div>\n//         {cardBackState === \"answer\" ? <>جواب</> : <>جواب نادرست</>}\n//         <button onClick={handleClick}>بازگشت</button>\n//       </div>\n//     </ReactCardFlip>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FlashCard(param) {\n    let { id , count , questionText , questionTitle , showCard  } = param;\n    _s();\n    const [isFlipped, setIsFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cardBackState, setCardBackState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function handleClick() {\n        setIsFlipped((prevState)=>!prevState);\n    }\n    function showBack(mode) {\n        setCardBackState(mode);\n        handleClick();\n    }\n    const [touchStartY, setTouchStartY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function detectTouchDirection(event) {\n        console.log(\"triggering touch event...\");\n        if (touchStartY) {\n            if (event.pageY - touchStartY > 0) {\n                // touch to down\n                showBack(\"answer\");\n            } else {\n                // touch to up\n                showBack(\"inc-answer\");\n            }\n            setTouchStartY(null);\n        } else {\n            setTouchStartY(event.pageY);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_flip__WEBPACK_IMPORTED_MODULE_3___default()), {\n            isFlipped: isFlipped,\n            flipDirection: \"vertical\",\n            containerClassName: \"flashCard\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onPointerDown: detectTouchDirection,\n                    onPointerUp: detectTouchDirection,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"greenbox\",\n                            src: \"/images/Pattern.svg\",\n                            width: 171,\n                            height: 171\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"save\",\n                            width: \"50\",\n                            height: \"50\",\n                            viewBox: \"0 0 50 50\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    cx: \"25\",\n                                    cy: \"25\",\n                                    r: \"25\",\n                                    fill: \"#2B3544\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M25.16 37.4223L25 37.5858L24.824 37.4223C17.224 30.376 12.2 25.7166 12.2 20.9918C12.2 17.7221 14.6 15.2698 17.8 15.2698C20.264 15.2698 22.664 16.9046 23.512 19.1281H26.488C27.336 16.9046 29.736 15.2698 32.2 15.2698C35.4 15.2698 37.8 17.7221 37.8 20.9918C37.8 25.7166 32.776 30.376 25.16 37.4223ZM32.2 12C29.416 12 26.744 13.3243 25 15.4005C23.256 13.3243 20.584 12 17.8 12C12.872 12 9 15.9401 9 20.9918C9 27.1553 14.44 32.2071 22.68 39.842L25 42L27.32 39.842C35.56 32.2071 41 27.1553 41 20.9918C41 15.9401 37.128 12 32.2 12Z\",\n                                    fill: \"#F8F8F8\",\n                                    \"fill-opacity\": \"0.8\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"title\",\n                            children: questionTitle\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"greenline\"\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"count\",\n                            children: [\n                                count,\n                                \"/\",\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: questionText\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: cardBackState === \"answer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: handleClick,\n                        children: \"جواب\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: handleClick,\n                        children: \"جواب نادرست\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(FlashCard, \"ELj8ERbSQ7CoB+qyuRz59TsIycE=\");\n_c = FlashCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlashCard); // // TODO: move components states to the following state :|\n // const [componentState, setComponentState] = useState(\"initial\"); //  showAnswer | initial | showIncorrectAnswer\n // const [transitionState, setTransitionState] = useState(); //  flippingUp | flippingDown\n // // TODO: complete touch-direction detection logic\n // const [touchStartY, setTouchStartY] = useState(null);\n // function detectTouchDirection(event) {\n //   if (touchStartY) {\n //     if (event.pageY - touchStartY > 0) {\n //       // touch to down\n //       // TODO:\n //       if (componentState === \"initial\") {\n //         setTransitionState(\"flippingDown\");\n //         setComponentState(\"showAnswer\");\n //       } else if (componentState === \"showIncorrectAnswer\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"initial\");\n //       }\n //     } else {\n //       // touch to up\n //       if (componentState === \"initial\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"showIncorrectAnswer\");\n //       } else if (componentState === \"showAnswer\") {\n //         // setTransitionState(\"flippingDown\")\n //         setComponentState(\"initial\");\n //       }\n //     }\n //     setTouchStartY(null);\n //   } else {\n //     setTouchStartY(event.pageY);\n //   }\n // }\nvar _c;\n$RefreshReg$(_c, \"FlashCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZsYXNoY2FyZC9GbGFzaENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLCtDQUErQztBQUUvQyx5QkFBeUI7QUFDekIsdURBQXVEO0FBQ3ZELDBEQUEwRDtBQUUxRCw2QkFBNkI7QUFDN0IsK0NBQStDO0FBQy9DLE1BQU07QUFFTiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQixNQUFNO0FBRU4sYUFBYTtBQUNiLHFFQUFxRTtBQUNyRSxvQ0FBb0M7QUFDcEMsbUVBQW1FO0FBQ25FLDhFQUE4RTtBQUM5RSxlQUFlO0FBRWYsY0FBYztBQUNkLHNFQUFzRTtBQUN0RSx3REFBd0Q7QUFDeEQsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixPQUFPO0FBQ1AsSUFBSTtBQUVKOztBQUFpQztBQUNGO0FBQ2E7QUFFNUMsU0FBU0csVUFBVSxLQUFvRCxFQUFFO1FBQXRELEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxhQUFZLEVBQUVDLGNBQWEsRUFBRUMsU0FBUSxFQUFFLEdBQXBEOztJQUNqQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUE7SUFFbEQsU0FBU2EsY0FBYztRQUNyQkgsYUFBYSxDQUFDSSxZQUFjLENBQUNBO0lBQy9CO0lBRUEsU0FBU0MsU0FBU0MsSUFBSSxFQUFFO1FBQ3RCSixpQkFBaUJJO1FBQ2pCSDtJQUNGO0lBRUEsTUFBTSxDQUFDSSxhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRW5ELFNBQVNtQixxQkFBcUJDLEtBQUssRUFBRTtRQUNuQ0MsUUFBUUMsR0FBRyxDQUFDO1FBQ1osSUFBSUwsYUFBYTtZQUNmLElBQUlHLE1BQU1HLEtBQUssR0FBR04sY0FBYyxHQUFHO2dCQUNqQyxnQkFBZ0I7Z0JBQ2hCRixTQUFTO1lBQ1gsT0FBTztnQkFDTCxjQUFjO2dCQUNkQSxTQUFTO1lBQ1gsQ0FBQztZQUNERyxlQUFlLElBQUk7UUFDckIsT0FBTztZQUNMQSxlQUFlRSxNQUFNRyxLQUFLO1FBQzVCLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ3RCLHdEQUFhQTtZQUNaTyxXQUFXQTtZQUNYZ0IsZUFBYztZQUNkQyxvQkFBbUI7OzhCQUVuQiw4REFBQ0Y7b0JBQ0NHLGVBQWVSO29CQUNmUyxhQUFhVDs7c0NBRWIsOERBQUNsQixtREFBS0E7NEJBQ0o0QixXQUFVOzRCQUNWQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzs7Ozs7c0NBR1YsOERBQUNDOzRCQUNDSixXQUFVOzRCQUNWRSxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQRSxTQUFROzRCQUNSQyxNQUFLOzRCQUNMQyxPQUFNOzs4Q0FFTiw4REFBQ0M7b0NBQU9DLElBQUc7b0NBQUtDLElBQUc7b0NBQUtDLEdBQUU7b0NBQUtMLE1BQUs7Ozs7Ozs4Q0FDcEMsOERBQUNNO29DQUNDQyxHQUFFO29DQUNGUCxNQUFLO29DQUNMUSxnQkFBYTs7Ozs7Ozs7Ozs7O3NDQUdqQiw4REFBQ0M7NEJBQUdmLFdBQVU7c0NBQVN0Qjs7Ozs7O3NDQUN2Qiw4REFBQ2lCOzRCQUFJSyxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNnQjs0QkFBS2hCLFdBQVU7O2dDQUNieEI7Z0NBQU07Z0NBQUVEOzs7Ozs7O3NDQUVYLDhEQUFDMEM7c0NBQUd4Qzs7Ozs7Ozs7Ozs7OzhCQUVOLDhEQUFDa0I7OEJBQ0ViLGtCQUFrQix5QkFDakIsOERBQUNtQzt3QkFBRUMsU0FBU2xDO2tDQUFhOzs7Ozs2Q0FFekIsOERBQUNpQzt3QkFBRUMsU0FBU2xDO2tDQUFhOzs7Ozs0QkFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FqRlNWO0tBQUFBO0FBa0ZULCtEQUFlQSxTQUFTQSxFQUFDLENBRXpCLDREQUE0RDtDQUM1RCxrSEFBa0g7Q0FDbEgsMEZBQTBGO0NBRTFGLG9EQUFvRDtDQUNwRCx3REFBd0Q7Q0FDeEQseUNBQXlDO0NBQ3pDLHVCQUF1QjtDQUN2QiwyQ0FBMkM7Q0FDM0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQiw0Q0FBNEM7Q0FDNUMsOENBQThDO0NBQzlDLDJDQUEyQztDQUMzQywrREFBK0Q7Q0FDL0QsOENBQThDO0NBQzlDLHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsZUFBZTtDQUNmLHVCQUF1QjtDQUN2Qiw0Q0FBNEM7Q0FDNUMsOENBQThDO0NBQzlDLG9EQUFvRDtDQUNwRCxzREFBc0Q7Q0FDdEQsZ0RBQWdEO0NBQ2hELHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsUUFBUTtDQUNSLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLE1BQU07Q0FDTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmxhc2hjYXJkL0ZsYXNoQ2FyZC5qcz9kN2JmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIEZsYXNoQ2FyZCgpIHtcclxuLy8gICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vLyAgIGNvbnN0IFtjYXJkQmFja1N0YXRlLCBzZXRDYXJkQmFja1N0YXRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4vLyAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4vLyAgICAgc2V0SXNGbGlwcGVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gc2hvd0JhY2sobW9kZSkge1xyXG4vLyAgICAgc2V0Q2FyZEJhY2tTdGF0ZShtb2RlKTtcclxuLy8gICAgIGhhbmRsZUNsaWNrKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsYXNoQ2FyZFwiPlxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2hvd0JhY2soXCJhbnN3ZXJcIil9Ptm+2KfYs9iuPC9idXR0b24+XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaG93QmFjayhcImluYy1hbnN3ZXJcIil9Ptm+2KfYs9iuINmG2KfYr9ix2LPYqjwvYnV0dG9uPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAge2NhcmRCYWNrU3RhdGUgPT09IFwiYW5zd2VyXCIgPyA8Ptis2YjYp9ioPC8+IDogPD7YrNmI2KfYqCDZhtin2K/Ysdiz2Ko8Lz59XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+2KjYp9iy2q/YtNiqPC9idXR0b24+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tIFwicmVhY3QtY2FyZC1mbGlwXCI7XHJcblxyXG5mdW5jdGlvbiBGbGFzaENhcmQoeyBpZCwgY291bnQsIHF1ZXN0aW9uVGV4dCwgcXVlc3Rpb25UaXRsZSwgc2hvd0NhcmQgfSkge1xyXG4gIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NhcmRCYWNrU3RhdGUsIHNldENhcmRCYWNrU3RhdGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBzZXRJc0ZsaXBwZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93QmFjayhtb2RlKSB7XHJcbiAgICBzZXRDYXJkQmFja1N0YXRlKG1vZGUpO1xyXG4gICAgaGFuZGxlQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFt0b3VjaFN0YXJ0WSwgc2V0VG91Y2hTdGFydFldID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRldGVjdFRvdWNoRGlyZWN0aW9uKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRyaWdnZXJpbmcgdG91Y2ggZXZlbnQuLi5cIik7XHJcbiAgICBpZiAodG91Y2hTdGFydFkpIHtcclxuICAgICAgaWYgKGV2ZW50LnBhZ2VZIC0gdG91Y2hTdGFydFkgPiAwKSB7XHJcbiAgICAgICAgLy8gdG91Y2ggdG8gZG93blxyXG4gICAgICAgIHNob3dCYWNrKFwiYW5zd2VyXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRvdWNoIHRvIHVwXHJcbiAgICAgICAgc2hvd0JhY2soXCJpbmMtYW5zd2VyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRvdWNoU3RhcnRZKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VG91Y2hTdGFydFkoZXZlbnQucGFnZVkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSZWFjdENhcmRGbGlwXHJcbiAgICAgICAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9XHJcbiAgICAgICAgZmxpcERpcmVjdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICBjb250YWluZXJDbGFzc05hbWU9XCJmbGFzaENhcmRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25Qb2ludGVyRG93bj17ZGV0ZWN0VG91Y2hEaXJlY3Rpb259XHJcbiAgICAgICAgICBvblBvaW50ZXJVcD17ZGV0ZWN0VG91Y2hEaXJlY3Rpb259XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyZWVuYm94XCJcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9QYXR0ZXJuLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXsxNzF9XHJcbiAgICAgICAgICAgIGhlaWdodD17MTcxfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zcGFyZW50Ym94XCIgLz4gKi99XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNhdmVcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUwIDUwXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyNVwiIGZpbGw9XCIjMkIzNTQ0XCIgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTI1LjE2IDM3LjQyMjNMMjUgMzcuNTg1OEwyNC44MjQgMzcuNDIyM0MxNy4yMjQgMzAuMzc2IDEyLjIgMjUuNzE2NiAxMi4yIDIwLjk5MThDMTIuMiAxNy43MjIxIDE0LjYgMTUuMjY5OCAxNy44IDE1LjI2OThDMjAuMjY0IDE1LjI2OTggMjIuNjY0IDE2LjkwNDYgMjMuNTEyIDE5LjEyODFIMjYuNDg4QzI3LjMzNiAxNi45MDQ2IDI5LjczNiAxNS4yNjk4IDMyLjIgMTUuMjY5OEMzNS40IDE1LjI2OTggMzcuOCAxNy43MjIxIDM3LjggMjAuOTkxOEMzNy44IDI1LjcxNjYgMzIuNzc2IDMwLjM3NiAyNS4xNiAzNy40MjIzWk0zMi4yIDEyQzI5LjQxNiAxMiAyNi43NDQgMTMuMzI0MyAyNSAxNS40MDA1QzIzLjI1NiAxMy4zMjQzIDIwLjU4NCAxMiAxNy44IDEyQzEyLjg3MiAxMiA5IDE1Ljk0MDEgOSAyMC45OTE4QzkgMjcuMTU1MyAxNC40NCAzMi4yMDcxIDIyLjY4IDM5Ljg0MkwyNSA0MkwyNy4zMiAzOS44NDJDMzUuNTYgMzIuMjA3MSA0MSAyNy4xNTUzIDQxIDIwLjk5MThDNDEgMTUuOTQwMSAzNy4xMjggMTIgMzIuMiAxMlpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjRjhGOEY4XCJcclxuICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjhcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGl0bGVcIj57cXVlc3Rpb25UaXRsZX08L2g1PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmVlbmxpbmVcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAge2NvdW50fS97aWR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8cD57cXVlc3Rpb25UZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2NhcmRCYWNrU3RhdGUgPT09IFwiYW5zd2VyXCIgPyAoXHJcbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7YrNmI2KfYqDwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7YrNmI2KfYqCDZhtin2K/Ysdiz2Ko8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0Q2FyZEZsaXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoQ2FyZDtcclxuXHJcbi8vIC8vIFRPRE86IG1vdmUgY29tcG9uZW50cyBzdGF0ZXMgdG8gdGhlIGZvbGxvd2luZyBzdGF0ZSA6fFxyXG4vLyBjb25zdCBbY29tcG9uZW50U3RhdGUsIHNldENvbXBvbmVudFN0YXRlXSA9IHVzZVN0YXRlKFwiaW5pdGlhbFwiKTsgLy8gIHNob3dBbnN3ZXIgfCBpbml0aWFsIHwgc2hvd0luY29ycmVjdEFuc3dlclxyXG4vLyBjb25zdCBbdHJhbnNpdGlvblN0YXRlLCBzZXRUcmFuc2l0aW9uU3RhdGVdID0gdXNlU3RhdGUoKTsgLy8gIGZsaXBwaW5nVXAgfCBmbGlwcGluZ0Rvd25cclxuXHJcbi8vIC8vIFRPRE86IGNvbXBsZXRlIHRvdWNoLWRpcmVjdGlvbiBkZXRlY3Rpb24gbG9naWNcclxuLy8gY29uc3QgW3RvdWNoU3RhcnRZLCBzZXRUb3VjaFN0YXJ0WV0gPSB1c2VTdGF0ZShudWxsKTtcclxuLy8gZnVuY3Rpb24gZGV0ZWN0VG91Y2hEaXJlY3Rpb24oZXZlbnQpIHtcclxuLy8gICBpZiAodG91Y2hTdGFydFkpIHtcclxuLy8gICAgIGlmIChldmVudC5wYWdlWSAtIHRvdWNoU3RhcnRZID4gMCkge1xyXG4vLyAgICAgICAvLyB0b3VjaCB0byBkb3duXHJcbi8vICAgICAgIC8vIFRPRE86XHJcbi8vICAgICAgIGlmIChjb21wb25lbnRTdGF0ZSA9PT0gXCJpbml0aWFsXCIpIHtcclxuLy8gICAgICAgICBzZXRUcmFuc2l0aW9uU3RhdGUoXCJmbGlwcGluZ0Rvd25cIik7XHJcbi8vICAgICAgICAgc2V0Q29tcG9uZW50U3RhdGUoXCJzaG93QW5zd2VyXCIpO1xyXG4vLyAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFN0YXRlID09PSBcInNob3dJbmNvcnJlY3RBbnN3ZXJcIikge1xyXG4vLyAgICAgICAgIC8vIHNldFRyYW5zaXRpb25TdGF0ZShcImZsaXBwaW5nVXBcIilcclxuLy8gICAgICAgICBzZXRDb21wb25lbnRTdGF0ZShcImluaXRpYWxcIik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIC8vIHRvdWNoIHRvIHVwXHJcbi8vICAgICAgIGlmIChjb21wb25lbnRTdGF0ZSA9PT0gXCJpbml0aWFsXCIpIHtcclxuLy8gICAgICAgICAvLyBzZXRUcmFuc2l0aW9uU3RhdGUoXCJmbGlwcGluZ1VwXCIpXHJcbi8vICAgICAgICAgc2V0Q29tcG9uZW50U3RhdGUoXCJzaG93SW5jb3JyZWN0QW5zd2VyXCIpO1xyXG4vLyAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFN0YXRlID09PSBcInNob3dBbnN3ZXJcIikge1xyXG4vLyAgICAgICAgIC8vIHNldFRyYW5zaXRpb25TdGF0ZShcImZsaXBwaW5nRG93blwiKVxyXG4vLyAgICAgICAgIHNldENvbXBvbmVudFN0YXRlKFwiaW5pdGlhbFwiKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgc2V0VG91Y2hTdGFydFkobnVsbCk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIHNldFRvdWNoU3RhcnRZKGV2ZW50LnBhZ2VZKTtcclxuLy8gICB9XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJSZWFjdENhcmRGbGlwIiwiRmxhc2hDYXJkIiwiaWQiLCJjb3VudCIsInF1ZXN0aW9uVGV4dCIsInF1ZXN0aW9uVGl0bGUiLCJzaG93Q2FyZCIsImlzRmxpcHBlZCIsInNldElzRmxpcHBlZCIsImNhcmRCYWNrU3RhdGUiLCJzZXRDYXJkQmFja1N0YXRlIiwiaGFuZGxlQ2xpY2siLCJwcmV2U3RhdGUiLCJzaG93QmFjayIsIm1vZGUiLCJ0b3VjaFN0YXJ0WSIsInNldFRvdWNoU3RhcnRZIiwiZGV0ZWN0VG91Y2hEaXJlY3Rpb24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlWSIsImRpdiIsImZsaXBEaXJlY3Rpb24iLCJjb250YWluZXJDbGFzc05hbWUiLCJvblBvaW50ZXJEb3duIiwib25Qb2ludGVyVXAiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInBhdGgiLCJkIiwiZmlsbC1vcGFjaXR5IiwiaDUiLCJzcGFuIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/flashcard/FlashCard.js\n"));

/***/ })

});