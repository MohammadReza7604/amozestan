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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-card-flip */ \"./node_modules/react-card-flip/lib/ReactCardFlip.js\");\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_3__);\n// import { useState } from \"react\";\n// import ReactCardFlip from \"react-card-flip\";\n// function FlashCard() {\n//   const [isFlipped, setIsFlipped] = useState(false);\n//   const [cardBackState, setCardBackState] = useState();\n//   function handleClick() {\n//     setIsFlipped((prevState) => !prevState);\n//   }\n//   function showBack(mode) {\n//     setCardBackState(mode);\n//     handleClick();\n//   }\n//   return (\n//     <ReactCardFlip isFlipped={isFlipped} flipDirection=\"vertical\">\n//       <div className=\"flashCard\">\n//         <button onClick={() => showBack(\"answer\")}>پاسخ</button>\n//         <button onClick={() => showBack(\"inc-answer\")}>پاسخ نادرست</button>\n//       </div>\n//       <div>\n//         {cardBackState === \"answer\" ? <>جواب</> : <>جواب نادرست</>}\n//         <button onClick={handleClick}>بازگشت</button>\n//       </div>\n//     </ReactCardFlip>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FlashCard(param) {\n    let { id , count , questionText , questionTitle , showCard  } = param;\n    _s();\n    const [isFlipped, setIsFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cardBackState, setCardBackState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function handleClick() {\n        setIsFlipped((prevState)=>!prevState);\n    }\n    function showBack(mode) {\n        setCardBackState(mode);\n        handleClick();\n    }\n    const [touchStartY, setTouchStartY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function detectTouchDirection(event) {\n        console.log(\"triggering touch event...\");\n        if (touchStartY) {\n            if (event.pageY === touchStartY) {} else {\n                const diff = event.pageY - touchStartY;\n                if (diff > 0) {\n                    // touch to down\n                    if (isFlipped) {\n                        if (showBack !== \"inc-answer\") setIsFlipped(false);\n                    } else {\n                        showBack(\"answer\");\n                        setIsFlipped(true);\n                    }\n                } else {\n                    // touch to up\n                    if (isFlipped) {\n                        if (showBack !== \"answer\") setIsFlipped(false);\n                    } else {\n                        showBack(\"inc-answer\");\n                        setIsFlipped(true);\n                    }\n                }\n            }\n            setTouchStartY(null);\n        } else {\n            setTouchStartY(event.pageY);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onPointerDown: detectTouchDirection,\n        onPointerUp: detectTouchDirection,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"relative\",\n            zIndex: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_flip__WEBPACK_IMPORTED_MODULE_3___default()), {\n            isFlipped: isFlipped,\n            flipDirection: \"vertical\",\n            containerClassName: \"flashCard\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"front\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"greenbox\",\n                            src: \"/images/Pattern.svg\",\n                            width: 171,\n                            height: 171\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"save\",\n                            width: \"50\",\n                            height: \"50\",\n                            viewBox: \"0 0 50 50\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    cx: \"25\",\n                                    cy: \"25\",\n                                    r: \"25\",\n                                    fill: \"#2B3544\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M25.16 37.4223L25 37.5858L24.824 37.4223C17.224 30.376 12.2 25.7166 12.2 20.9918C12.2 17.7221 14.6 15.2698 17.8 15.2698C20.264 15.2698 22.664 16.9046 23.512 19.1281H26.488C27.336 16.9046 29.736 15.2698 32.2 15.2698C35.4 15.2698 37.8 17.7221 37.8 20.9918C37.8 25.7166 32.776 30.376 25.16 37.4223ZM32.2 12C29.416 12 26.744 13.3243 25 15.4005C23.256 13.3243 20.584 12 17.8 12C12.872 12 9 15.9401 9 20.9918C9 27.1553 14.44 32.2071 22.68 39.842L25 42L27.32 39.842C35.56 32.2071 41 27.1553 41 20.9918C41 15.9401 37.128 12 32.2 12Z\",\n                                    fill: \"#F8F8F8\",\n                                    \"fill-opacity\": \"0.8\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"title\",\n                            children: questionTitle\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"greenline\"\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"count\",\n                            children: [\n                                count,\n                                \"/\",\n                                id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: questionText\n                        }, void 0, false, {\n                            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"back\",\n                    children: cardBackState === \"answer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            width: \"100%\",\n                            backgroundColor: \"blue\"\n                        },\n                        onClick: handleClick,\n                        children: \"جواب\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 129,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            width: \"100%\",\n                            backgroundColor: \"red\"\n                        },\n                        onClick: handleClick,\n                        children: \"جواب نادرست\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 136,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(FlashCard, \"ELj8ERbSQ7CoB+qyuRz59TsIycE=\");\n_c = FlashCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlashCard); // // TODO: move components states to the following state :|\n // const [componentState, setComponentState] = useState(\"initial\"); //  showAnswer | initial | showIncorrectAnswer\n // const [transitionState, setTransitionState] = useState(); //  flippingUp | flippingDown\n // // TODO: complete touch-direction detection logic\n // const [touchStartY, setTouchStartY] = useState(null);\n // function detectTouchDirection(event) {\n //   if (touchStartY) {\n //     if (event.pageY - touchStartY > 0) {\n //       // touch to down\n //       // TODO:\n //       if (componentState === \"initial\") {\n //         setTransitionState(\"flippingDown\");\n //         setComponentState(\"showAnswer\");\n //       } else if (componentState === \"showIncorrectAnswer\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"initial\");\n //       }\n //     } else {\n //       // touch to up\n //       if (componentState === \"initial\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"showIncorrectAnswer\");\n //       } else if (componentState === \"showAnswer\") {\n //         // setTransitionState(\"flippingDown\")\n //         setComponentState(\"initial\");\n //       }\n //     }\n //     setTouchStartY(null);\n //   } else {\n //     setTouchStartY(event.pageY);\n //   }\n // }\nvar _c;\n$RefreshReg$(_c, \"FlashCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7c0NBQ2YsOERBQUNjOzRCQUFLZCxXQUFVOztnQ0FDYjlCO2dDQUFNO2dDQUFFRDs7Ozs7OztzQ0FFWCw4REFBQzhDO3NDQUFHNUM7Ozs7Ozs7Ozs7Ozs4QkFFTiw4REFBQ21CO29CQUFJckIsSUFBRzs4QkFDTE8sa0JBQWtCLHlCQUNqQiw4REFBQ3VDO3dCQUNDdEIsT0FBTzs0QkFBRUMsT0FBTzs0QkFBUXNCLGlCQUFpQjt3QkFBTzt3QkFDaERDLFNBQVN2QztrQ0FDVjs7Ozs7NkNBSUQsOERBQUNxQzt3QkFDQ3RCLE9BQU87NEJBQUVDLE9BQU87NEJBQVFzQixpQkFBaUI7d0JBQU07d0JBQy9DQyxTQUFTdkM7a0NBQ1Y7Ozs7OzRCQUdGOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBL0dTVjtLQUFBQTtBQWdIVCwrREFBZUEsU0FBU0EsRUFBQyxDQUV6Qiw0REFBNEQ7Q0FDNUQsa0hBQWtIO0NBQ2xILDBGQUEwRjtDQUUxRixvREFBb0Q7Q0FDcEQsd0RBQXdEO0NBQ3hELHlDQUF5QztDQUN6Qyx1QkFBdUI7Q0FDdkIsMkNBQTJDO0NBQzNDLHlCQUF5QjtDQUN6QixpQkFBaUI7Q0FDakIsNENBQTRDO0NBQzVDLDhDQUE4QztDQUM5QywyQ0FBMkM7Q0FDM0MsK0RBQStEO0NBQy9ELDhDQUE4QztDQUM5Qyx3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsNENBQTRDO0NBQzVDLDhDQUE4QztDQUM5QyxvREFBb0Q7Q0FDcEQsc0RBQXNEO0NBQ3RELGdEQUFnRDtDQUNoRCx3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLFFBQVE7Q0FDUiw0QkFBNEI7Q0FDNUIsYUFBYTtDQUNiLG1DQUFtQztDQUNuQyxNQUFNO0NBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZsYXNoY2FyZC9GbGFzaENhcmQuanM/ZDdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tIFwicmVhY3QtY2FyZC1mbGlwXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBGbGFzaENhcmQoKSB7XHJcbi8vICAgY29uc3QgW2lzRmxpcHBlZCwgc2V0SXNGbGlwcGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuLy8gICBjb25zdCBbY2FyZEJhY2tTdGF0ZSwgc2V0Q2FyZEJhY2tTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuLy8gICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuLy8gICAgIHNldElzRmxpcHBlZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGZ1bmN0aW9uIHNob3dCYWNrKG1vZGUpIHtcclxuLy8gICAgIHNldENhcmRCYWNrU3RhdGUobW9kZSk7XHJcbi8vICAgICBoYW5kbGVDbGljaygpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkfSBmbGlwRGlyZWN0aW9uPVwidmVydGljYWxcIj5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGFzaENhcmRcIj5cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNob3dCYWNrKFwiYW5zd2VyXCIpfT7Zvtin2LPYrjwvYnV0dG9uPlxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2hvd0JhY2soXCJpbmMtYW5zd2VyXCIpfT7Zvtin2LPYriDZhtin2K/Ysdiz2Ko8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIHtjYXJkQmFja1N0YXRlID09PSBcImFuc3dlclwiID8gPD7YrNmI2KfYqDwvPiA6IDw+2KzZiNin2Kgg2YbYp9iv2LHYs9iqPC8+fVxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Ptio2KfYstqv2LTYqjwvYnV0dG9uPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvUmVhY3RDYXJkRmxpcD5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0Q2FyZEZsaXAgZnJvbSBcInJlYWN0LWNhcmQtZmxpcFwiO1xyXG5cclxuZnVuY3Rpb24gRmxhc2hDYXJkKHsgaWQsIGNvdW50LCBxdWVzdGlvblRleHQsIHF1ZXN0aW9uVGl0bGUsIHNob3dDYXJkIH0pIHtcclxuICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjYXJkQmFja1N0YXRlLCBzZXRDYXJkQmFja1N0YXRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgc2V0SXNGbGlwcGVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0JhY2sobW9kZSkge1xyXG4gICAgc2V0Q2FyZEJhY2tTdGF0ZShtb2RlKTtcclxuICAgIGhhbmRsZUNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbdG91Y2hTdGFydFksIHNldFRvdWNoU3RhcnRZXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBmdW5jdGlvbiBkZXRlY3RUb3VjaERpcmVjdGlvbihldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyaW5nIHRvdWNoIGV2ZW50Li4uXCIpO1xyXG4gICAgaWYgKHRvdWNoU3RhcnRZKSB7XHJcbiAgICAgIGlmIChldmVudC5wYWdlWSA9PT0gdG91Y2hTdGFydFkpIHtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkaWZmID0gZXZlbnQucGFnZVkgLSB0b3VjaFN0YXJ0WTtcclxuICAgICAgICBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgIC8vIHRvdWNoIHRvIGRvd25cclxuICAgICAgICAgIGlmIChpc0ZsaXBwZWQpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dCYWNrICE9PSBcImluYy1hbnN3ZXJcIikgc2V0SXNGbGlwcGVkKGZhbHNlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dCYWNrKFwiYW5zd2VyXCIpO1xyXG4gICAgICAgICAgICBzZXRJc0ZsaXBwZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHRvdWNoIHRvIHVwXHJcbiAgICAgICAgICBpZiAoaXNGbGlwcGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG93QmFjayAhPT0gXCJhbnN3ZXJcIikgc2V0SXNGbGlwcGVkKGZhbHNlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dCYWNrKFwiaW5jLWFuc3dlclwiKTtcclxuICAgICAgICAgICAgc2V0SXNGbGlwcGVkKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRUb3VjaFN0YXJ0WShudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRvdWNoU3RhcnRZKGV2ZW50LnBhZ2VZKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uUG9pbnRlckRvd249e2RldGVjdFRvdWNoRGlyZWN0aW9ufVxyXG4gICAgICBvblBvaW50ZXJVcD17ZGV0ZWN0VG91Y2hEaXJlY3Rpb259XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxSZWFjdENhcmRGbGlwXHJcbiAgICAgICAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9XHJcbiAgICAgICAgZmxpcERpcmVjdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICBjb250YWluZXJDbGFzc05hbWU9XCJmbGFzaENhcmRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBpZD1cImZyb250XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JlZW5ib3hcIlxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL1BhdHRlcm4uc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9ezE3MX1cclxuICAgICAgICAgICAgaGVpZ2h0PXsxNzF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnRib3hcIiAvPiAqL31cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2F2ZVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTAgNTBcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjI1XCIgZmlsbD1cIiMyQjM1NDRcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMjUuMTYgMzcuNDIyM0wyNSAzNy41ODU4TDI0LjgyNCAzNy40MjIzQzE3LjIyNCAzMC4zNzYgMTIuMiAyNS43MTY2IDEyLjIgMjAuOTkxOEMxMi4yIDE3LjcyMjEgMTQuNiAxNS4yNjk4IDE3LjggMTUuMjY5OEMyMC4yNjQgMTUuMjY5OCAyMi42NjQgMTYuOTA0NiAyMy41MTIgMTkuMTI4MUgyNi40ODhDMjcuMzM2IDE2LjkwNDYgMjkuNzM2IDE1LjI2OTggMzIuMiAxNS4yNjk4QzM1LjQgMTUuMjY5OCAzNy44IDE3LjcyMjEgMzcuOCAyMC45OTE4QzM3LjggMjUuNzE2NiAzMi43NzYgMzAuMzc2IDI1LjE2IDM3LjQyMjNaTTMyLjIgMTJDMjkuNDE2IDEyIDI2Ljc0NCAxMy4zMjQzIDI1IDE1LjQwMDVDMjMuMjU2IDEzLjMyNDMgMjAuNTg0IDEyIDE3LjggMTJDMTIuODcyIDEyIDkgMTUuOTQwMSA5IDIwLjk5MThDOSAyNy4xNTUzIDE0LjQ0IDMyLjIwNzEgMjIuNjggMzkuODQyTDI1IDQyTDI3LjMyIDM5Ljg0MkMzNS41NiAzMi4yMDcxIDQxIDI3LjE1NTMgNDEgMjAuOTkxOEM0MSAxNS45NDAxIDM3LjEyOCAxMiAzMi4yIDEyWlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGOEY4RjhcIlxyXG4gICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjAuOFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPntxdWVzdGlvblRpdGxlfTwvaDU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZWVubGluZVwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICB7Y291bnR9L3tpZH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxwPntxdWVzdGlvblRleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJiYWNrXCI+XHJcbiAgICAgICAgICB7Y2FyZEJhY2tTdGF0ZSA9PT0gXCJhbnN3ZXJcIiA/IChcclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgINis2YjYp9ioXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgINis2YjYp9ioINmG2KfYr9ix2LPYqlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0Q2FyZEZsaXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoQ2FyZDtcclxuXHJcbi8vIC8vIFRPRE86IG1vdmUgY29tcG9uZW50cyBzdGF0ZXMgdG8gdGhlIGZvbGxvd2luZyBzdGF0ZSA6fFxyXG4vLyBjb25zdCBbY29tcG9uZW50U3RhdGUsIHNldENvbXBvbmVudFN0YXRlXSA9IHVzZVN0YXRlKFwiaW5pdGlhbFwiKTsgLy8gIHNob3dBbnN3ZXIgfCBpbml0aWFsIHwgc2hvd0luY29ycmVjdEFuc3dlclxyXG4vLyBjb25zdCBbdHJhbnNpdGlvblN0YXRlLCBzZXRUcmFuc2l0aW9uU3RhdGVdID0gdXNlU3RhdGUoKTsgLy8gIGZsaXBwaW5nVXAgfCBmbGlwcGluZ0Rvd25cclxuXHJcbi8vIC8vIFRPRE86IGNvbXBsZXRlIHRvdWNoLWRpcmVjdGlvbiBkZXRlY3Rpb24gbG9naWNcclxuLy8gY29uc3QgW3RvdWNoU3RhcnRZLCBzZXRUb3VjaFN0YXJ0WV0gPSB1c2VTdGF0ZShudWxsKTtcclxuLy8gZnVuY3Rpb24gZGV0ZWN0VG91Y2hEaXJlY3Rpb24oZXZlbnQpIHtcclxuLy8gICBpZiAodG91Y2hTdGFydFkpIHtcclxuLy8gICAgIGlmIChldmVudC5wYWdlWSAtIHRvdWNoU3RhcnRZID4gMCkge1xyXG4vLyAgICAgICAvLyB0b3VjaCB0byBkb3duXHJcbi8vICAgICAgIC8vIFRPRE86XHJcbi8vICAgICAgIGlmIChjb21wb25lbnRTdGF0ZSA9PT0gXCJpbml0aWFsXCIpIHtcclxuLy8gICAgICAgICBzZXRUcmFuc2l0aW9uU3RhdGUoXCJmbGlwcGluZ0Rvd25cIik7XHJcbi8vICAgICAgICAgc2V0Q29tcG9uZW50U3RhdGUoXCJzaG93QW5zd2VyXCIpO1xyXG4vLyAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFN0YXRlID09PSBcInNob3dJbmNvcnJlY3RBbnN3ZXJcIikge1xyXG4vLyAgICAgICAgIC8vIHNldFRyYW5zaXRpb25TdGF0ZShcImZsaXBwaW5nVXBcIilcclxuLy8gICAgICAgICBzZXRDb21wb25lbnRTdGF0ZShcImluaXRpYWxcIik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIC8vIHRvdWNoIHRvIHVwXHJcbi8vICAgICAgIGlmIChjb21wb25lbnRTdGF0ZSA9PT0gXCJpbml0aWFsXCIpIHtcclxuLy8gICAgICAgICAvLyBzZXRUcmFuc2l0aW9uU3RhdGUoXCJmbGlwcGluZ1VwXCIpXHJcbi8vICAgICAgICAgc2V0Q29tcG9uZW50U3RhdGUoXCJzaG93SW5jb3JyZWN0QW5zd2VyXCIpO1xyXG4vLyAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFN0YXRlID09PSBcInNob3dBbnN3ZXJcIikge1xyXG4vLyAgICAgICAgIC8vIHNldFRyYW5zaXRpb25TdGF0ZShcImZsaXBwaW5nRG93blwiKVxyXG4vLyAgICAgICAgIHNldENvbXBvbmVudFN0YXRlKFwiaW5pdGlhbFwiKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgc2V0VG91Y2hTdGFydFkobnVsbCk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIHNldFRvdWNoU3RhcnRZKGV2ZW50LnBhZ2VZKTtcclxuLy8gICB9XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJSZWFjdENhcmRGbGlwIiwiRmxhc2hDYXJkIiwiaWQiLCJjb3VudCIsInF1ZXN0aW9uVGV4dCIsInF1ZXN0aW9uVGl0bGUiLCJzaG93Q2FyZCIsImlzRmxpcHBlZCIsInNldElzRmxpcHBlZCIsImNhcmRCYWNrU3RhdGUiLCJzZXRDYXJkQmFja1N0YXRlIiwiaGFuZGxlQ2xpY2siLCJwcmV2U3RhdGUiLCJzaG93QmFjayIsIm1vZGUiLCJ0b3VjaFN0YXJ0WSIsInNldFRvdWNoU3RhcnRZIiwiZGV0ZWN0VG91Y2hEaXJlY3Rpb24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlWSIsImRpZmYiLCJkaXYiLCJvblBvaW50ZXJEb3duIiwib25Qb2ludGVyVXAiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJmbGlwRGlyZWN0aW9uIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwic3JjIiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImNpcmNsZSIsImN4IiwiY3kiLCJyIiwicGF0aCIsImQiLCJmaWxsLW9wYWNpdHkiLCJoNSIsInNwYW4iLCJwIiwiYmFja2dyb3VuZENvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/flashcard/FlashCard.js\n"));

/***/ })

});