webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ApiRest.js":
/*!*******************************!*\
  !*** ./components/ApiRest.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var os = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");

console.log(os.hostname());
var apiConfig = [{
  baseURL: "http://127.0.0.1:3333"
}, {
  baseURL: "https://api.rsvtelecom.com.br"
}];
var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(apiConfig[1].baseURL);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=index.js.63bad89937f9933241d2.hot-update.js.map