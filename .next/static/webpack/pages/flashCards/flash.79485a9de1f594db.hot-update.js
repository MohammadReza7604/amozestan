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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-card-flip */ \"./node_modules/react-card-flip/lib/ReactCardFlip.js\");\n/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_3__);\n// import { useState } from \"react\";\n// import ReactCardFlip from \"react-card-flip\";\n// function FlashCard() {\n//   const [isFlipped, setIsFlipped] = useState(false);\n//   const [cardBackState, setCardBackState] = useState();\n//   function handleClick() {\n//     setIsFlipped((prevState) => !prevState);\n//   }\n//   function showBack(mode) {\n//     setCardBackState(mode);\n//     handleClick();\n//   }\n//   return (\n//     <ReactCardFlip isFlipped={isFlipped} flipDirection=\"vertical\">\n//       <div className=\"flashCard\">\n//         <button onClick={() => showBack(\"answer\")}>پاسخ</button>\n//         <button onClick={() => showBack(\"inc-answer\")}>پاسخ نادرست</button>\n//       </div>\n//       <div>\n//         {cardBackState === \"answer\" ? <>جواب</> : <>جواب نادرست</>}\n//         <button onClick={handleClick}>بازگشت</button>\n//       </div>\n//     </ReactCardFlip>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FlashCard(param) {\n    let { id , count , questionText , questionTitle , showCard  } = param;\n    _s();\n    const [isFlipped, setIsFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cardBackState, setCardBackState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function handleClick() {\n        setIsFlipped((prevState)=>!prevState);\n    }\n    function showBack(mode) {\n        setCardBackState(showCard);\n        handleClick();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_flip__WEBPACK_IMPORTED_MODULE_3___default()), {\n        onMouseDown: (e)=>{\n            console.log(e);\n        },\n        isFlipped: isFlipped,\n        flipDirection: \"vertical\",\n        containerClassName: \"flashCard\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onPointerDown: ()=>showBack(\"answer\"),\n                onPointerUp: ()=>showBack(\"inc-answer\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"greenbox\",\n                        src: \"/images/Pattern.svg\",\n                        width: 171,\n                        height: 171\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"save\",\n                        width: \"50\",\n                        height: \"50\",\n                        viewBox: \"0 0 50 50\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                cx: \"25\",\n                                cy: \"25\",\n                                r: \"25\",\n                                fill: \"#2B3544\"\n                            }, void 0, false, {\n                                fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M25.16 37.4223L25 37.5858L24.824 37.4223C17.224 30.376 12.2 25.7166 12.2 20.9918C12.2 17.7221 14.6 15.2698 17.8 15.2698C20.264 15.2698 22.664 16.9046 23.512 19.1281H26.488C27.336 16.9046 29.736 15.2698 32.2 15.2698C35.4 15.2698 37.8 17.7221 37.8 20.9918C37.8 25.7166 32.776 30.376 25.16 37.4223ZM32.2 12C29.416 12 26.744 13.3243 25 15.4005C23.256 13.3243 20.584 12 17.8 12C12.872 12 9 15.9401 9 20.9918C9 27.1553 14.44 32.2071 22.68 39.842L25 42L27.32 39.842C35.56 32.2071 41 27.1553 41 20.9918C41 15.9401 37.128 12 32.2 12Z\",\n                                fill: \"#F8F8F8\",\n                                \"fill-opacity\": \"0.8\"\n                            }, void 0, false, {\n                                fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"title\",\n                        children: questionTitle\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"greenline\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"count\",\n                        children: [\n                            count,\n                            \"/\",\n                            id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: questionText\n                    }, void 0, false, {\n                        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: cardBackState === \"answer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: handleClick,\n                    children: \"جواب\"\n                }, void 0, false, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: handleClick,\n                    children: \"جواب نادرست\"\n                }, void 0, false, {\n                    fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mrbehzadi/Desktop/Web/amoozestan/components/flashcard/FlashCard.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(FlashCard, \"kzxo02Mjj4sAJBh2cFQA+WHZLbc=\");\n_c = FlashCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlashCard); // // TODO: move components states to the following state :|\n // const [componentState, setComponentState] = useState(\"initial\"); //  showAnswer | initial | showIncorrectAnswer\n // const [transitionState, setTransitionState] = useState(); //  flippingUp | flippingDown\n // // TODO: complete touch-direction detection logic\n // const [touchStartY, setTouchStartY] = useState(null);\n // function detectTouchDirection(event) {\n //   if (touchStartY) {\n //     if (event.pageY - touchStartY > 0) {\n //       // touch to down\n //       // TODO:\n //       if (componentState === \"initial\") {\n //         setTransitionState(\"flippingDown\");\n //         setComponentState(\"showAnswer\");\n //       } else if (componentState === \"showIncorrectAnswer\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"initial\");\n //       }\n //     } else {\n //       // touch to up\n //       if (componentState === \"initial\") {\n //         // setTransitionState(\"flippingUp\")\n //         setComponentState(\"showIncorrectAnswer\");\n //       } else if (componentState === \"showAnswer\") {\n //         // setTransitionState(\"flippingDown\")\n //         setComponentState(\"initial\");\n //       }\n //     }\n //     setTouchStartY(null);\n //   } else {\n //     setTouchStartY(event.pageY);\n //   }\n // }\nvar _c;\n$RefreshReg$(_c, \"FlashCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZsYXNoY2FyZC9GbGFzaENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLCtDQUErQztBQUUvQyx5QkFBeUI7QUFDekIsdURBQXVEO0FBQ3ZELDBEQUEwRDtBQUUxRCw2QkFBNkI7QUFDN0IsK0NBQStDO0FBQy9DLE1BQU07QUFFTiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQixNQUFNO0FBRU4sYUFBYTtBQUNiLHFFQUFxRTtBQUNyRSxvQ0FBb0M7QUFDcEMsbUVBQW1FO0FBQ25FLDhFQUE4RTtBQUM5RSxlQUFlO0FBRWYsY0FBYztBQUNkLHNFQUFzRTtBQUN0RSx3REFBd0Q7QUFDeEQsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixPQUFPO0FBQ1AsSUFBSTtBQUVKOztBQUFpQztBQUNGO0FBQ2E7QUFFNUMsU0FBU0csVUFBVSxLQUFtRCxFQUFFO1FBQXJELEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxhQUFZLEVBQUVDLGNBQWEsRUFBQ0MsU0FBUSxFQUFFLEdBQW5EOztJQUNqQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUE7SUFFbEQsU0FBU2EsY0FBYztRQUNyQkgsYUFBYSxDQUFDSSxZQUFjLENBQUNBO0lBQy9CO0lBRUEsU0FBU0MsU0FBU0MsSUFBSSxFQUFFO1FBQ3RCSixpQkFBaUJKO1FBQ2pCSztJQUNGO0lBRUEscUJBQ0UsOERBQUNYLHdEQUFhQTtRQUNaZSxhQUFhLENBQUNDLElBQUs7WUFBQ0MsUUFBUUMsR0FBRyxDQUFDRjtRQUFFO1FBQ2xDVCxXQUFXQTtRQUNYWSxlQUFjO1FBQ2RDLG9CQUFtQjs7MEJBRW5CLDhEQUFDQztnQkFDQ0MsZUFBZSxJQUFNVCxTQUFTO2dCQUM5QlUsYUFBYSxJQUFNVixTQUFTOztrQ0FHNUIsOERBQUNkLG1EQUFLQTt3QkFDSnlCLFdBQVU7d0JBQ1ZDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7Ozs7OztrQ0FHViw4REFBQ0M7d0JBQ0NKLFdBQVU7d0JBQ1ZFLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BFLFNBQVE7d0JBQ1JDLE1BQUs7d0JBQ0xDLE9BQU07OzBDQUVOLDhEQUFDQztnQ0FBT0MsSUFBRztnQ0FBS0MsSUFBRztnQ0FBS0MsR0FBRTtnQ0FBS0wsTUFBSzs7Ozs7OzBDQUNwQyw4REFBQ007Z0NBQ0NDLEdBQUU7Z0NBQ0ZQLE1BQUs7Z0NBQ0xRLGdCQUFhOzs7Ozs7Ozs7Ozs7a0NBR2pCLDhEQUFDQzt3QkFBR2YsV0FBVTtrQ0FBU25COzs7Ozs7a0NBQ3ZCLDhEQUFDZ0I7d0JBQUlHLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ2dCO3dCQUFLaEIsV0FBVTs7NEJBQ2JyQjs0QkFBTTs0QkFBRUQ7Ozs7Ozs7a0NBRVgsOERBQUN1QztrQ0FBSXJDOzs7Ozs7Ozs7Ozs7MEJBRVAsOERBQUNpQjswQkFDRVosa0JBQWtCLHlCQUNqQiw4REFBQ2dDO29CQUFJQyxTQUFTL0I7OEJBQWE7Ozs7O3lDQUUzQiw4REFBQzhCO29CQUFHQyxTQUFTL0I7OEJBQWE7Ozs7O3dCQUMzQjs7Ozs7Ozs7Ozs7O0FBSVQ7R0EvRFNWO0tBQUFBO0FBZ0VULCtEQUFlQSxTQUFTQSxFQUFDLENBRXpCLDREQUE0RDtDQUM1RCxrSEFBa0g7Q0FDbEgsMEZBQTBGO0NBRTFGLG9EQUFvRDtDQUNwRCx3REFBd0Q7Q0FDeEQseUNBQXlDO0NBQ3pDLHVCQUF1QjtDQUN2QiwyQ0FBMkM7Q0FDM0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQiw0Q0FBNEM7Q0FDNUMsOENBQThDO0NBQzlDLDJDQUEyQztDQUMzQywrREFBK0Q7Q0FDL0QsOENBQThDO0NBQzlDLHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsZUFBZTtDQUNmLHVCQUF1QjtDQUN2Qiw0Q0FBNEM7Q0FDNUMsOENBQThDO0NBQzlDLG9EQUFvRDtDQUNwRCxzREFBc0Q7Q0FDdEQsZ0RBQWdEO0NBQ2hELHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsUUFBUTtDQUNSLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLE1BQU07Q0FDTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmxhc2hjYXJkL0ZsYXNoQ2FyZC5qcz9kN2JmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdENhcmRGbGlwIGZyb20gXCJyZWFjdC1jYXJkLWZsaXBcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIEZsYXNoQ2FyZCgpIHtcclxuLy8gICBjb25zdCBbaXNGbGlwcGVkLCBzZXRJc0ZsaXBwZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vLyAgIGNvbnN0IFtjYXJkQmFja1N0YXRlLCBzZXRDYXJkQmFja1N0YXRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4vLyAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4vLyAgICAgc2V0SXNGbGlwcGVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gc2hvd0JhY2sobW9kZSkge1xyXG4vLyAgICAgc2V0Q2FyZEJhY2tTdGF0ZShtb2RlKTtcclxuLy8gICAgIGhhbmRsZUNsaWNrKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9IGZsaXBEaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsYXNoQ2FyZFwiPlxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2hvd0JhY2soXCJhbnN3ZXJcIil9Ptm+2KfYs9iuPC9idXR0b24+XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaG93QmFjayhcImluYy1hbnN3ZXJcIil9Ptm+2KfYs9iuINmG2KfYr9ix2LPYqjwvYnV0dG9uPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAge2NhcmRCYWNrU3RhdGUgPT09IFwiYW5zd2VyXCIgPyA8Ptis2YjYp9ioPC8+IDogPD7YrNmI2KfYqCDZhtin2K/Ysdiz2Ko8Lz59XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+2KjYp9iy2q/YtNiqPC9idXR0b24+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tIFwicmVhY3QtY2FyZC1mbGlwXCI7XHJcblxyXG5mdW5jdGlvbiBGbGFzaENhcmQoeyBpZCwgY291bnQsIHF1ZXN0aW9uVGV4dCwgcXVlc3Rpb25UaXRsZSxzaG93Q2FyZCB9KSB7XHJcbiAgY29uc3QgW2lzRmxpcHBlZCwgc2V0SXNGbGlwcGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2FyZEJhY2tTdGF0ZSwgc2V0Q2FyZEJhY2tTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgIHNldElzRmxpcHBlZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dCYWNrKG1vZGUpIHtcclxuICAgIHNldENhcmRCYWNrU3RhdGUoc2hvd0NhcmQpO1xyXG4gICAgaGFuZGxlQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RDYXJkRmxpcFxyXG4gICAgICBvbk1vdXNlRG93bj17KGUpID0+e2NvbnNvbGUubG9nKGUpfX1cclxuICAgICAgaXNGbGlwcGVkPXtpc0ZsaXBwZWR9XHJcbiAgICAgIGZsaXBEaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT1cImZsYXNoQ2FyZFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBvblBvaW50ZXJEb3duPXsoKSA9PiBzaG93QmFjayhcImFuc3dlclwiKX1cclxuICAgICAgICBvblBvaW50ZXJVcD17KCkgPT4gc2hvd0JhY2soXCJpbmMtYW5zd2VyXCIpfVxyXG4gICAgICAgIFxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmVlbmJveFwiXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL1BhdHRlcm4uc3ZnXCJcclxuICAgICAgICAgIHdpZHRoPXsxNzF9XHJcbiAgICAgICAgICBoZWlnaHQ9ezE3MX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zcGFyZW50Ym94XCIgLz4gKi99XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2F2ZVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTAgNTBcIlxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyNVwiIGZpbGw9XCIjMkIzNTQ0XCIgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMjUuMTYgMzcuNDIyM0wyNSAzNy41ODU4TDI0LjgyNCAzNy40MjIzQzE3LjIyNCAzMC4zNzYgMTIuMiAyNS43MTY2IDEyLjIgMjAuOTkxOEMxMi4yIDE3LjcyMjEgMTQuNiAxNS4yNjk4IDE3LjggMTUuMjY5OEMyMC4yNjQgMTUuMjY5OCAyMi42NjQgMTYuOTA0NiAyMy41MTIgMTkuMTI4MUgyNi40ODhDMjcuMzM2IDE2LjkwNDYgMjkuNzM2IDE1LjI2OTggMzIuMiAxNS4yNjk4QzM1LjQgMTUuMjY5OCAzNy44IDE3LjcyMjEgMzcuOCAyMC45OTE4QzM3LjggMjUuNzE2NiAzMi43NzYgMzAuMzc2IDI1LjE2IDM3LjQyMjNaTTMyLjIgMTJDMjkuNDE2IDEyIDI2Ljc0NCAxMy4zMjQzIDI1IDE1LjQwMDVDMjMuMjU2IDEzLjMyNDMgMjAuNTg0IDEyIDE3LjggMTJDMTIuODcyIDEyIDkgMTUuOTQwMSA5IDIwLjk5MThDOSAyNy4xNTUzIDE0LjQ0IDMyLjIwNzEgMjIuNjggMzkuODQyTDI1IDQyTDI3LjMyIDM5Ljg0MkMzNS41NiAzMi4yMDcxIDQxIDI3LjE1NTMgNDEgMjAuOTkxOEM0MSAxNS45NDAxIDM3LjEyOCAxMiAzMi4yIDEyWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRjhGOEY4XCJcclxuICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMC44XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRpdGxlXCI+e3F1ZXN0aW9uVGl0bGV9PC9oNT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZWVubGluZVwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgIHtjb3VudH0ve2lkfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8cCA+e3F1ZXN0aW9uVGV4dH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjYXJkQmFja1N0YXRlID09PSBcImFuc3dlclwiID8gKFxyXG4gICAgICAgICAgPHAgICBvbkNsaWNrPXtoYW5kbGVDbGlja30+2KzZiNin2Kg8L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwICBvbkNsaWNrPXtoYW5kbGVDbGlja30+2KzZiNin2Kgg2YbYp9iv2LHYs9iqPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmxhc2hDYXJkO1xyXG5cclxuLy8gLy8gVE9ETzogbW92ZSBjb21wb25lbnRzIHN0YXRlcyB0byB0aGUgZm9sbG93aW5nIHN0YXRlIDp8XHJcbi8vIGNvbnN0IFtjb21wb25lbnRTdGF0ZSwgc2V0Q29tcG9uZW50U3RhdGVdID0gdXNlU3RhdGUoXCJpbml0aWFsXCIpOyAvLyAgc2hvd0Fuc3dlciB8IGluaXRpYWwgfCBzaG93SW5jb3JyZWN0QW5zd2VyXHJcbi8vIGNvbnN0IFt0cmFuc2l0aW9uU3RhdGUsIHNldFRyYW5zaXRpb25TdGF0ZV0gPSB1c2VTdGF0ZSgpOyAvLyAgZmxpcHBpbmdVcCB8IGZsaXBwaW5nRG93blxyXG5cclxuLy8gLy8gVE9ETzogY29tcGxldGUgdG91Y2gtZGlyZWN0aW9uIGRldGVjdGlvbiBsb2dpY1xyXG4vLyBjb25zdCBbdG91Y2hTdGFydFksIHNldFRvdWNoU3RhcnRZXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4vLyBmdW5jdGlvbiBkZXRlY3RUb3VjaERpcmVjdGlvbihldmVudCkge1xyXG4vLyAgIGlmICh0b3VjaFN0YXJ0WSkge1xyXG4vLyAgICAgaWYgKGV2ZW50LnBhZ2VZIC0gdG91Y2hTdGFydFkgPiAwKSB7XHJcbi8vICAgICAgIC8vIHRvdWNoIHRvIGRvd25cclxuLy8gICAgICAgLy8gVE9ETzpcclxuLy8gICAgICAgaWYgKGNvbXBvbmVudFN0YXRlID09PSBcImluaXRpYWxcIikge1xyXG4vLyAgICAgICAgIHNldFRyYW5zaXRpb25TdGF0ZShcImZsaXBwaW5nRG93blwiKTtcclxuLy8gICAgICAgICBzZXRDb21wb25lbnRTdGF0ZShcInNob3dBbnN3ZXJcIik7XHJcbi8vICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50U3RhdGUgPT09IFwic2hvd0luY29ycmVjdEFuc3dlclwiKSB7XHJcbi8vICAgICAgICAgLy8gc2V0VHJhbnNpdGlvblN0YXRlKFwiZmxpcHBpbmdVcFwiKVxyXG4vLyAgICAgICAgIHNldENvbXBvbmVudFN0YXRlKFwiaW5pdGlhbFwiKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgLy8gdG91Y2ggdG8gdXBcclxuLy8gICAgICAgaWYgKGNvbXBvbmVudFN0YXRlID09PSBcImluaXRpYWxcIikge1xyXG4vLyAgICAgICAgIC8vIHNldFRyYW5zaXRpb25TdGF0ZShcImZsaXBwaW5nVXBcIilcclxuLy8gICAgICAgICBzZXRDb21wb25lbnRTdGF0ZShcInNob3dJbmNvcnJlY3RBbnN3ZXJcIik7XHJcbi8vICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50U3RhdGUgPT09IFwic2hvd0Fuc3dlclwiKSB7XHJcbi8vICAgICAgICAgLy8gc2V0VHJhbnNpdGlvblN0YXRlKFwiZmxpcHBpbmdEb3duXCIpXHJcbi8vICAgICAgICAgc2V0Q29tcG9uZW50U3RhdGUoXCJpbml0aWFsXCIpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBzZXRUb3VjaFN0YXJ0WShudWxsKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgc2V0VG91Y2hTdGFydFkoZXZlbnQucGFnZVkpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsIlJlYWN0Q2FyZEZsaXAiLCJGbGFzaENhcmQiLCJpZCIsImNvdW50IiwicXVlc3Rpb25UZXh0IiwicXVlc3Rpb25UaXRsZSIsInNob3dDYXJkIiwiaXNGbGlwcGVkIiwic2V0SXNGbGlwcGVkIiwiY2FyZEJhY2tTdGF0ZSIsInNldENhcmRCYWNrU3RhdGUiLCJoYW5kbGVDbGljayIsInByZXZTdGF0ZSIsInNob3dCYWNrIiwibW9kZSIsIm9uTW91c2VEb3duIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJmbGlwRGlyZWN0aW9uIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiZGl2Iiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlclVwIiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJwYXRoIiwiZCIsImZpbGwtb3BhY2l0eSIsImg1Iiwic3BhbiIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/flashcard/FlashCard.js\n"));

/***/ })

});