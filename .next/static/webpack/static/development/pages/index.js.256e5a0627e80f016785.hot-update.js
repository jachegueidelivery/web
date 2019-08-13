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

var apiConfig = {
  local: {
    baseURL: "http://127.0.0.1"
  },
  server: {
    baseURL: "https://api.rsvtelecom.com.br"
  }
};
var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(apiConfig.local);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=index.js.256e5a0627e80f016785.hot-update.js.map