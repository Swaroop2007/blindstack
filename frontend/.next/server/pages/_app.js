/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n\n\n\n\n\nconst NAV = [\n    {\n        href: \"/\",\n        icon: \"◈\",\n        label: \"Dashboard\"\n    },\n    {\n        href: \"/users\",\n        icon: \"◉\",\n        label: \"Users\"\n    },\n    {\n        href: \"/skills\",\n        icon: \"◆\",\n        label: \"Skills Library\"\n    },\n    {\n        href: \"/offered\",\n        icon: \"▲\",\n        label: \"Skills I Teach\"\n    },\n    {\n        href: \"/needed\",\n        icon: \"▼\",\n        label: \"Skills I Learn\"\n    },\n    {\n        href: \"/match\",\n        icon: \"◎\",\n        label: \"Find Mentors\"\n    },\n    {\n        href: \"/requests\",\n        icon: \"◷\",\n        label: \"Requests\"\n    }\n];\nfunction Layout({ children }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.api)(\"/users\").then((u)=>{\n            if (u) setUsers(u);\n        });\n        const saved = localStorage.getItem(\"skillsphere_userId\");\n        if (saved) setUserId(saved);\n    }, []);\n    const handleUserChange = (e)=>{\n        setUserId(e.target.value);\n        localStorage.setItem(\"skillsphere_userId\", e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"sidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\",\n                        children: [\n                            \"Skill\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Sphere\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 36\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"nav\",\n                        children: NAV.map(({ href, icon, label })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: href,\n                                className: `nav-link${router.pathname === href ? \" active\" : \"\"}`,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"nav-icon\",\n                                        children: icon\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this),\n                                    label\n                                ]\n                            }, href, true, {\n                                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sidebar-footer\",\n                        children: [\n                            \"API: localhost:8080\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 30\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#065f46\"\n                                },\n                                children: \"●\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            \" Spring Boot + SQLite\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-bar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"user-bar-label\",\n                        children: \"ACTIVE USER\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"select\",\n                        style: {\n                            width: 220,\n                            padding: \"6px 12px\",\n                            fontSize: \"0.77rem\"\n                        },\n                        value: userId,\n                        onChange: handleUserChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"— Select user —\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            users.map((u)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: u.id,\n                                    children: [\n                                        u.name,\n                                        \" (#\",\n                                        u.id,\n                                        \")\"\n                                    ]\n                                }, u.id, true, {\n                                    fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"badge badge-green\",\n                        children: \"Active\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 20\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main-content\",\n                children: typeof children === \"function\" ? children({\n                    userId,\n                    users\n                }) : children\n            }, void 0, false, {\n                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ2lCO2dCQUFLakIsV0FBVTswQkFDYixPQUFPakIsYUFBYSxhQUNqQkEsU0FBUztvQkFBRUk7b0JBQVFGO2dCQUFNLEtBQ3pCRjs7Ozs7Ozs7Ozs7O0FBSVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbHNwaGVyZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeD9jNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vbGliL2FwaSc7XG5cbmNvbnN0IE5BViA9IFtcbiAgeyBocmVmOiAnLycsICAgICAgICAgaWNvbjogJ+KXiCcsIGxhYmVsOiAnRGFzaGJvYXJkJyAgICAgIH0sXG4gIHsgaHJlZjogJy91c2VycycsICAgIGljb246ICfil4knLCBsYWJlbDogJ1VzZXJzJyAgICAgICAgICAgfSxcbiAgeyBocmVmOiAnL3NraWxscycsICAgaWNvbjogJ+KXhicsIGxhYmVsOiAnU2tpbGxzIExpYnJhcnknICB9LFxuICB7IGhyZWY6ICcvb2ZmZXJlZCcsICBpY29uOiAn4payJywgbGFiZWw6ICdTa2lsbHMgSSBUZWFjaCcgIH0sXG4gIHsgaHJlZjogJy9uZWVkZWQnLCAgIGljb246ICfilrwnLCBsYWJlbDogJ1NraWxscyBJIExlYXJuJyAgfSxcbiAgeyBocmVmOiAnL21hdGNoJywgICAgaWNvbjogJ+KXjicsIGxhYmVsOiAnRmluZCBNZW50b3JzJyAgICB9LFxuICB7IGhyZWY6ICcvcmVxdWVzdHMnLCBpY29uOiAn4pe3JywgbGFiZWw6ICdSZXF1ZXN0cycgICAgICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaSgnL3VzZXJzJykudGhlbih1ID0+IHsgaWYgKHUpIHNldFVzZXJzKHUpOyB9KTtcbiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdza2lsbHNwaGVyZV91c2VySWQnKTtcbiAgICBpZiAoc2F2ZWQpIHNldFVzZXJJZChzYXZlZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVVc2VyQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRVc2VySWQoZS50YXJnZXQudmFsdWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdza2lsbHNwaGVyZV91c2VySWQnLCBlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1sYXlvdXRcIj5cbiAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+U2tpbGw8c3Bhbj5TcGhlcmU8L3NwYW4+PC9kaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAge05BVi5tYXAoKHsgaHJlZiwgaWNvbiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtocmVmfVxuICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayR7cm91dGVyLnBhdGhuYW1lID09PSBocmVmID8gJyBhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWljb25cIj57aWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1mb290ZXJcIj5cbiAgICAgICAgICBBUEk6IGxvY2FsaG9zdDo4MDgwPGJyIC8+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMDY1ZjQ2JyB9fT7il488L3NwYW4+IFNwcmluZyBCb290ICsgU1FMaXRlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hc2lkZT5cblxuICAgICAgey8qIFVzZXIgc2VsZWN0b3IgYmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWJhclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLWJhci1sYWJlbFwiPkFDVElWRSBVU0VSPC9zcGFuPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0XCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjIwLCBwYWRkaW5nOiAnNnB4IDEycHgnLCBmb250U2l6ZTogJzAuNzdyZW0nIH19XG4gICAgICAgICAgdmFsdWU9e3VzZXJJZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVXNlckNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7igJQgU2VsZWN0IHVzZXIg4oCUPC9vcHRpb24+XG4gICAgICAgICAge3VzZXJzLm1hcCh1ID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXt1LmlkfSB2YWx1ZT17dS5pZH0+e3UubmFtZX0gKCN7dS5pZH0pPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7dXNlcklkICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWdyZWVuXCI+QWN0aXZlPC9zcGFuPn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWFpbiBjb250ZW50IOKAlCBwYXNzIHVzZXJJZCB2aWEgY2xvbmVFbGVtZW50ICovfVxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IGNoaWxkcmVuKHsgdXNlcklkLCB1c2VycyB9KVxuICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwiTkFWIiwiaHJlZiIsImljb24iLCJsYWJlbCIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZXJJZCIsInNldFVzZXJJZCIsInRoZW4iLCJ1Iiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlVXNlckNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJhc2lkZSIsInNwYW4iLCJuYXYiLCJtYXAiLCJwYXRobmFtZSIsImJyIiwic3R5bGUiLCJjb2xvciIsInNlbGVjdCIsIndpZHRoIiwicGFkZGluZyIsImZvbnRTaXplIiwib25DaGFuZ2UiLCJvcHRpb24iLCJpZCIsIm5hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\nconst BASE = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:8080\";\nasync function api(path, options = {}) {\n    try {\n        const res = await fetch(`${BASE}${path}`, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            ...options\n        });\n        if (!res.ok) throw new Error(`HTTP ${res.status}`);\n        return await res.json();\n    } catch (err) {\n        console.error(`API error [${path}]:`, err);\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQixJQUFJO0FBRXpDLGVBQWVDLElBQUlDLElBQUksRUFBRUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLEVBQUVSLEtBQUssRUFBRUssS0FBSyxDQUFDLEVBQUU7WUFDeENJLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDLEdBQUdILE9BQU87UUFDWjtRQUNBLElBQUksQ0FBQ0MsSUFBSUcsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxDQUFDLEtBQUssRUFBRUosSUFBSUssTUFBTSxDQUFDLENBQUM7UUFDakQsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO0lBQ3ZCLEVBQUUsT0FBT0MsS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUVYLEtBQUssRUFBRSxDQUFDLEVBQUVTO1FBQ3RDLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxzcGhlcmUtZnJvbnRlbmQvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGkocGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRX0ke3BhdGh9YCwge1xuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXMuc3RhdHVzfWApO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGBBUEkgZXJyb3IgWyR7cGF0aH1dOmAsIGVycik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCQVNFIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhcGkiLCJwYXRoIiwib3B0aW9ucyIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: ({ userId, users })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                userId: userId,\n                users: users\n            }, void 0, false, {\n                fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\vscode\\\\blindstack\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUUzQixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0osQ0FBQyxFQUFFSSxNQUFNLEVBQUVDLEtBQUssRUFBRSxpQkFDakIsOERBQUNIO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVDLFFBQVFBO2dCQUFRQyxPQUFPQTs7Ozs7Ozs7Ozs7QUFJekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbHNwaGVyZS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7KHsgdXNlcklkLCB1c2VycyB9KSA9PiAoXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gdXNlcklkPXt1c2VySWR9IHVzZXJzPXt1c2Vyc30gLz5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlcklkIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();