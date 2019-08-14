webpackHotUpdate("static\\development\\pages\\empresa\\[id].js",{

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

var index = 'server';
var apiConfig = {
  local: {
    baseURL: "http://127.0.0.1:3333"
  },
  server: {
    baseURL: "https://api.rsvtelecom.com.br"
  }
};

if (os.hostname() === 'cryptopc') {
  index = 'local';
}

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(apiConfig[index]);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=[id].js.0958e2efbd2883694b53.hot-update.js.map