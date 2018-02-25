exports.id = "main";
exports.modules = {

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ \"./src/server.js\");\n\n\n\nvar server = Object(http__WEBPACK_IMPORTED_MODULE_0__[\"createServer\"])(_server__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar currentApp = _server__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nserver.listen(3000);\n\nif (true) {\n  module.hot.accept(/*! ./server */ \"./src/server.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ \"./src/server.js\");\n(function () {\n    server.removeListener('request', currentApp);\n    server.on('request', _server__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    currentApp = _server__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

};