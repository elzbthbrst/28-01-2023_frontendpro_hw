/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n}\\r\\n.container {\\r\\n    width: 500px;\\r\\n}\\r\\n.headers {\\r\\n    display: grid;\\r\\n    grid-template-columns: 80px 1fr 100px;\\r\\n    justify-items: center;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.student {\\r\\n    display: grid;\\r\\n    grid-template-columns: 80px 1fr 80px;\\r\\n    /* justify-items: center; */\\r\\n    grid-gap: 10px;\\r\\n}\\r\\n.marks {\\r\\n    display: flex;\\r\\n    justify-content: space-between; \\r\\n}\\r\\n.mark-input {\\r\\n    width: 20px;\\r\\n}\\r\\n.mark-input:focus {\\r\\n    color: red;\\r\\n}\\r\\n.saveForm {\\r\\n    margin-top: 10px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://studentslist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://studentslist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://studentslist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/view/FormViewTemplate.html":
/*!****************************************!*\
  !*** ./src/view/FormViewTemplate.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<form class=\\\"saveForm\\\">\\r\\n    <input type=\\\"text\\\" id=\\\"name\\\">\\r\\n    <button>save</button>\\r\\n</form>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://studentslist/./src/view/FormViewTemplate.html?");

/***/ }),

/***/ "./src/view/StudentsContainerTemplate.html":
/*!*************************************************!*\
  !*** ./src/view/StudentsContainerTemplate.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"headers\\\">\\r\\n    <div class=\\\"header\\\">Name</div>\\r\\n    <div class=\\\"header\\\">Marks</div>\\r\\n    <div class=\\\"header\\\">Actions</div>\\r\\n</div>\\r\\n<div id=\\\"students-container\\\">\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://studentslist/./src/view/StudentsContainerTemplate.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://studentslist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://studentslist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://studentslist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://studentslist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://studentslist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://studentslist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://studentslist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _model_Collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Collection */ \"./src/model/Collection.js\");\n/* harmony import */ var _view_FormView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/FormView */ \"./src/view/FormView.js\");\n/* harmony import */ var _view_StudentsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/StudentsView */ \"./src/view/StudentsView.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Controller {\r\n    constructor(container) {\r\n        this.container = container\r\n        this.collection = new _model_Collection__WEBPACK_IMPORTED_MODULE_0__.Collection\r\n        this.formView = new _view_FormView__WEBPACK_IMPORTED_MODULE_1__.FormView(this.container, { onSubmit: this.createStudent.bind(this) })\r\n        this.studentsListView = new _view_StudentsView__WEBPACK_IMPORTED_MODULE_2__.StudentsListView(this.container,\r\n            {\r\n                onDelete: this.deleteStudent.bind(this),\r\n                onInput: this.updateMarks.bind(this)\r\n            })\r\n\r\n            this.collection.fetch()\r\n            .then(() => {\r\n                this.studentsListView.renderStudentsList(this.collection.getList())\r\n            })\r\n            .catch(e => this.showError(e))\r\n    }\r\n\r\n    createStudent (student) {\r\n        this.collection.create(student)\r\n            .then((newStudent) => {\r\n                this.studentsListView.renderStudent(newStudent)\r\n                this.formView.clearForm()\r\n            })\r\n            .catch(e => this.showError(e))\r\n    }\r\n\r\n    deleteStudent(id, student) {\r\n        this.collection.delete(id).catch(e => this.showError(e))\r\n        student.remove()\r\n    }\r\n    \r\n    updateMarks(id, index, newMark) {\r\n        const studentEl = this.collection.findElById(id) \r\n        studentEl.marks[index] = newMark\r\n        this.collection.update(id, studentEl).catch(e => this.showError(e))\r\n    }\r\n\r\n    showError(e) {\r\n        alert(e)\r\n    }\r\n}\n\n//# sourceURL=webpack://studentslist/./src/Controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n;\r\n\r\nconst container = document.querySelector('.container')\r\nnew _Controller__WEBPACK_IMPORTED_MODULE_0__.Controller(container)\r\n\r\n\n\n//# sourceURL=webpack://studentslist/./src/index.js?");

/***/ }),

/***/ "./src/model/Collection.js":
/*!*********************************!*\
  !*** ./src/model/Collection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Collection\": () => (/* binding */ Collection)\n/* harmony export */ });\n/* harmony import */ var _StudentsApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentsApi */ \"./src/model/StudentsApi.js\");\n\r\n\r\n\r\nclass Collection {\r\n    #studentsList = []\r\n\r\n\r\n    fetch() {\r\n        return _StudentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi.getList()\r\n            .then((list) => {\r\n                this.#studentsList = list\r\n            })\r\n    }\r\n\r\n    update(id, student) {\r\n        return _StudentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi.update(id, student)\r\n            .then((id, newStudent) => {\r\n                this.updateList(id, newStudent)\r\n\r\n                return newStudent\r\n            })\r\n    }\r\n\r\n    create(student) {\r\n        return _StudentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi.create(student)\r\n            .then((newStudent) => {\r\n                this.addStudent(newStudent)\r\n\r\n                return newStudent\r\n            })\r\n    }\r\n\r\n    delete(id) {\r\n        this.deleteStudent(id)\r\n        return _StudentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi[\"delete\"](id)\r\n    }\r\n\r\n\r\n\r\n\r\n    getList() {\r\n        return this.#studentsList\r\n    }\r\n\r\n    updateList(id, newStudent) {\r\n        this.#studentsList.map(el => el.id === id ? newStudent : el)\r\n    }\r\n\r\n    addStudent(student) {\r\n        this.#studentsList.push(student)\r\n    }\r\n\r\n    deleteStudent(id) {\r\n        this.#studentsList.filter(current => current.id !== id)\r\n    }\r\n\r\n    findElById(id) {\r\n        return this.#studentsList.find(el => el.id === id)\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://studentslist/./src/model/Collection.js?");

/***/ }),

/***/ "./src/model/StudentsApi.js":
/*!**********************************!*\
  !*** ./src/model/StudentsApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudentsApi\": () => (/* binding */ StudentsApi)\n/* harmony export */ });\nclass StudentsApi {\r\n    static API = `https://644a5e56a8370fb3214c6c71.mockapi.io/api/students/`\r\n\r\n    static REQUEST(error,  method = 'GET', id = '', body) {\r\n        return fetch(StudentsApi.API + id, {\r\n            method,\r\n            body: body ? JSON.stringify(body) : undefined,\r\n            headers: {\r\n                'Content-type': 'application/json'\r\n            }\r\n        })\r\n            .then((res) => {\r\n                if (res.ok) {\r\n                    return res.json()\r\n                }\r\n                throw new Error(error)\r\n\r\n            })\r\n    }\r\n\r\n    static getList() {\r\n        return StudentsApi.REQUEST('Cant get students from server')\r\n    }\r\n    \r\n    static create(student) {\r\n        return  StudentsApi.REQUEST('cant post students on server', 'POST', '', student)\r\n    }\r\n\r\n    static delete(id) {\r\n        return StudentsApi.REQUEST('cant delete students on server', 'DELETE', id)\r\n    }\r\n\r\n    static update(id, student) {\r\n        return StudentsApi.REQUEST('cant update students on server', 'PUT', id, student)\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://studentslist/./src/model/StudentsApi.js?");

/***/ }),

/***/ "./src/view/FormView.js":
/*!******************************!*\
  !*** ./src/view/FormView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormView\": () => (/* binding */ FormView)\n/* harmony export */ });\n/* harmony import */ var _FormViewTemplate_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormViewTemplate.html */ \"./src/view/FormViewTemplate.html\");\n\r\n\r\nclass FormView {\r\n    static DEFAULT_MARKS = Array(10).fill(0)\r\n    static SAVEFORM_SELECTOR = '.saveForm'\r\n\r\n    constructor(container, options) {\r\n        this.container = container\r\n        this.options = options\r\n        this.renderForm()\r\n        this.form = document.querySelector(FormView.SAVEFORM_SELECTOR)\r\n        this.init()\r\n    }\r\n\r\n    init() {\r\n        this.form.addEventListener('submit', this.onFormSubmit.bind(this))\r\n\r\n    }\r\n\r\n    onFormSubmit(e) {\r\n        e.preventDefault()\r\n        const student = this.getStudentData()\r\n        if (!student.name) {\r\n            this.showError('поле ввода не должно быть пустым')\r\n            return\r\n        }\r\n        this.options.onSubmit(student)\r\n    }\r\n    \r\n    renderForm() {\r\n        const html = _FormViewTemplate_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        this.container.innerHTML = html\r\n    }\r\n\r\n    getFormTemplate() {\r\n        return `\r\n        \r\n        `\r\n    }\r\n\r\n    getStudentData() {\r\n        return {\r\n            name: this.form.name.value,\r\n            marks: FormView.DEFAULT_MARKS\r\n        }\r\n    }\r\n\r\n    clearForm() {\r\n        this.form.reset()\r\n    }\r\n\r\n    showError(e) {\r\n        alert(e)\r\n    }\r\n}\n\n//# sourceURL=webpack://studentslist/./src/view/FormView.js?");

/***/ }),

/***/ "./src/view/StudentsView.js":
/*!**********************************!*\
  !*** ./src/view/StudentsView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudentsListView\": () => (/* binding */ StudentsListView)\n/* harmony export */ });\n/* harmony import */ var _StudentsContainerTemplate_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentsContainerTemplate.html */ \"./src/view/StudentsContainerTemplate.html\");\n\r\n\r\nclass StudentsListView {\r\n    static CLASS_DELETE_BTN = 'deleteBtn'\r\n    static CLASS_STUDENT = 'student'\r\n    static CLASS_MARK_INPUT = 'mark-input'\r\n    static SELECTOR_STUDENTS_CONTAINER = '#students-container'\r\n\r\n    constructor(container, options) {\r\n        this.container = container\r\n        this.createStudentsContainer()\r\n        this.studentsContainer = document.querySelector(StudentsListView.SELECTOR_STUDENTS_CONTAINER)\r\n        this.options = options\r\n        this.init()\r\n\r\n    }\r\n\r\n    init() {\r\n        return this.studentsContainer.addEventListener('click', this.onStudentsContainerClick.bind(this)),\r\n            this.studentsContainer.addEventListener('focusout', this.onStudentsContainerFocusOut.bind(this))\r\n\r\n    }\r\n\r\n    onStudentsContainerClick(e) {\r\n        const target = e.target\r\n        if (this.isDeleteBtn(target)) {\r\n            const student = this.getStudent(target)\r\n            const id = student.dataset.id\r\n\r\n            this.options.onDelete(id, student)\r\n        }\r\n    }\r\n\r\n    onStudentsContainerFocusOut(e) {\r\n        const target = e.target\r\n        if (this.isMarksFormInput(target)) {\r\n            const input = this.getMarksFormInput(target)\r\n            const student = this.getStudent(target)\r\n            const id = student.dataset.id\r\n            const newMark = Number(input.value)\r\n            const index = input.id\r\n\r\n            this.options.onInput(id, index, newMark)\r\n        }\r\n\r\n    }\r\n\r\n    createStudentsContainer() {\r\n        const html = _StudentsContainerTemplate_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        this.container.insertAdjacentHTML('afterbegin', html)\r\n\r\n    }\r\n\r\n    renderStudentsList(list) {\r\n        const html = list.map(this.getStudentTemplate).join(' ')\r\n        this.studentsContainer.insertAdjacentHTML('beforeend', html)\r\n    }\r\n\r\n    renderStudent(student) {\r\n        const html = this.getStudentTemplate(student)\r\n        this.studentsContainer.insertAdjacentHTML('beforeend', html)\r\n    }\r\n\r\n    getStudentTemplate(student) {\r\n        const { name, id, marks } = student\r\n        return `\r\n                <div data-id=\"${id}\" class=\"student\" >\r\n                    <div class=\"name\">${name}</div>\r\n                        <form class=\"marks\">\r\n                            <input id=\"0\" class=\"mark-input\" type=\"text\" value=\"${marks[0]}\">\r\n                            <input id=\"1\" class=\"mark-input\" type=\"text\" value=\"${marks[1]}\">\r\n                            <input id=\"2\" class=\"mark-input\" type=\"text\" value=\"${marks[2]}\">\r\n                            <input id=\"3\" class=\"mark-input\" type=\"text\" value=\"${marks[3]}\">\r\n                            <input id=\"4\" class=\"mark-input\" type=\"text\" value=\"${marks[4]}\">\r\n                            <input id=\"5\" class=\"mark-input\" type=\"text\" value=\"${marks[5]}\">\r\n                            <input id=\"6\" class=\"mark-input\" type=\"text\" value=\"${marks[6]}\">\r\n                            <input id=\"7\" class=\"mark-input\" type=\"text\" value=\"${marks[7]}\">\r\n                            <input id=\"8\" class=\"mark-input\" type=\"text\" value=\"${marks[8]}\">\r\n                            <input id=\"9\" class=\"mark-input\" type=\"text\" value=\"${marks[9]}\">\r\n                        </form>\r\n                \r\n                    <button class=\"deleteBtn\">DELETE</button>\r\n                \r\n            </div>\r\n                `\r\n    }\r\n\r\n    getStudent(el) {\r\n        return el.closest('.' + StudentsListView.CLASS_STUDENT)\r\n    }\r\n\r\n    getMarksFormInput(el) {\r\n        return el.closest('.' + StudentsListView.CLASS_MARK_INPUT)\r\n    }\r\n\r\n    isMarksFormInput(el) {\r\n        return el.classList.contains(StudentsListView.CLASS_MARK_INPUT)\r\n    }\r\n\r\n    isDeleteBtn(el) {\r\n        return el.classList.contains(StudentsListView.CLASS_DELETE_BTN)\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://studentslist/./src/view/StudentsView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;