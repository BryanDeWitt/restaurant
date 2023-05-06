/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./El-Huron-Artesanal.png */ "./src/El-Huron-Artesanal.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Freehand&family=Roboto+Mono&family=Ubuntu:wght@300;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n:root {\n  --mainColor: rgb(255, 255, 255);\n  --borders: rgba(255, 255, 255, 0.452);\n  --borderColor: rgb(235, 206, 45);\n  --hovers: rgba(0, 255, 255, 0.295);\n  --font-color: white;\n}\n\nheader {\n  border-bottom: 1.5px solid var(--borderColor);\n  padding: 3px;\n  color: var(--mainColor);\n}\n\nul {\n  display: flex;\n  list-style: none;\n  align-items: center;\n  justify-content: center;\n}\n\nul li:nth-child(2) {\n  border-left: 0.4px solid var(--borders);\n  border-right: 0.4px solid var(--borders);\n}\n\nul li {\n  padding: 20px 50px;\n  font-weight: 500;\n  font-size: 1.3rem;\n  border-radius: 3px;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: 15%;\n  background-position-x: center;\n  background-attachment: fixed;\n}\n\nul li:hover {\n  background-color: var(--hovers);\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  margin-top: 30px;\n  justify-content: center;\n  align-items: center;\n  padding: 50px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.subContainer {\n  height: 70vh;\n  width: 900px;\n  border-top: 1.5px solid var(--borderColor);\n  border-bottom: 1.5px solid var(--borderColor);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.presentation {\n  font-size: 2.5rem;\n  text-align: center;\n  color: var(--font-color);\n}\n\n.first {\n  color: var(--borderColor);\n}\n\n.subText {\n  color: var(--font-color);\n  font-size: clamp(0.5rem, 1.2rem, 1.5rem);\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  padding: 25px;\n  width: clamp(5ch, 70ch, 150ch);\n}\n\n.subContainerGrid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 150px;\n  width: 85vw;\n  border-top: 1.5px solid var(--borderColor);\n  border-bottom: 1.5px solid var(--borderColor);\n  padding: 40px 0;\n  place-items: center;\n}\n\n.miniDiv {\n  max-width: 900px;\n  display: flex;\n  gap: 50px;\n  border-bottom: 2px solid var(--borderColor);\n  padding-bottom: 45px;\n}\n\n.miniDiv img {\n  height: 300px;\n  width: 400px;\n  border-radius: 5px;\n}\n\n.miniSubDiv {\n  color: var(--font-color);\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.miniSubDiv h1:not(.price) {\n  font-size: 2.5rem;\n  margin-bottom: 25px;\n}\n\n.miniSubDiv p {\n  font-size: 1.3rem;\n}\n\n.price {\n  margin-top: auto;\n  font-size: 3rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.subContainerContact {\n  display: flex;\n  place-content: center;\n  gap: 150px;\n  width: 85vw;\n  border-top: 1.5px solid var(--borderColor);\n  border-bottom: 1.5px solid var(--borderColor);\n  color: var(--font-color);\n  padding: 50px;\n}\n\ninput,\nselect {\n  padding: 8px;\n  font-size: 1.5rem;\n  font-weight: 200;\n  background-color: #161f27;\n  border: none;\n  border-radius: 3px;\n  -webkit-appearance: none;\n  appearance: none;\n  outline: none;\n  color: var(--font-color);\n}\n\ninput::placeholder {\n  color: grey;\n}\nform h1,\n.mapa h1 {\n  color: var(--borderColor);\n  margin-bottom: 30px;\n}\nlabel {\n  font-size: 1.5rem;\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:active {\n  background-color: rgb(5, 25, 128);\n}\n\n.ubication iframe {\n  width: 500px;\n  height: 500px;\n  border-radius: 10px;\n}\n\n.dishName {\n  color: var(--borderColor);\n}\n\n.envio {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n}\n\n.envio img {\n  height: 200px;\n  width: 200px;\n}\n\n@media (max-width: 760px) {\n  ul li {\n    padding: 20px 35px;\n    font-size: 1rem;\n  }\n  ul li:hover {\n    background-color: transparent;\n  }\n  ul li:active {\n    background-color: var(--hovers);\n  }\n  .presentation {\n    font-size: 1.5rem;\n    padding: 0;\n  }\n  .subText {\n    font-size: 1.3rem;\n    max-width: 30ch;\n    padding: 0;\n  }\n  .miniDiv {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .miniSubDiv p {\n    font-size: 1.2rem;\n    margin-bottom: 45px;\n  }\n  .miniDiv img {\n    height: 280px;\n    width: 320px;\n  }\n  .subContainerContact {\n    flex-direction: column;\n  }\n  label,\n  select,\n  input {\n    font-size: 1rem;\n  }\n  .ubication iframe {\n    height: 500px;\n    width: 230px;\n  }\n\n  .mapa h1 {\n    font-size: 1.8rem;\n  }\n}\n\n@media (max-width: 1000px) {\n  .subContainerContact {\n    flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Freehand&family=Roboto+Mono&family=Ubuntu:wght@300;400&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n:root {\n  --mainColor: rgb(255, 255, 255);\n  --borders: rgba(255, 255, 255, 0.452);\n  --borderColor: rgb(235, 206, 45);\n  --hovers: rgba(0, 255, 255, 0.295);\n  --font-color: white;\n}\n\nheader {\n  border-bottom: 1.5px solid var(--borderColor);\n  padding: 3px;\n  color: var(--mainColor);\n}\n\nul {\n  display: flex;\n  list-style: none;\n  align-items: center;\n  justify-content: center;\n}\n\nul li:nth-child(2) {\n  border-left: 0.4px solid var(--borders);\n  border-right: 0.4px solid var(--borders);\n}\n\nul li {\n  padding: 20px 50px;\n  font-weight: 500;\n  font-size: 1.3rem;\n  border-radius: 3px;\n}\n\nbody {\n  background-image: url(./El-Huron-Artesanal.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: 15%;\n  background-position-x: center;\n  background-attachment: fixed;\n}\n\nul li:hover {\n  background-color: var(--hovers);\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  margin-top: 30px;\n  justify-content: center;\n  align-items: center;\n  padding: 50px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.subContainer {\n  height: 70vh;\n  width: 900px;\n  border-top: 1.5px solid var(--borderColor);\n  border-bottom: 1.5px solid var(--borderColor);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.presentation {\n  font-size: 2.5rem;\n  text-align: center;\n  color: var(--font-color);\n}\n\n.first {\n  color: var(--borderColor);\n}\n\n.subText {\n  color: var(--font-color);\n  font-size: clamp(0.5rem, 1.2rem, 1.5rem);\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  padding: 25px;\n  width: clamp(5ch, 70ch, 150ch);\n}\n\n.subContainerGrid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 150px;\n  width: 85vw;\n  border-top: 1.5px solid var(--borderColor);\n  border-bottom: 1.5px solid var(--borderColor);\n  padding: 40px 0;\n  place-items: center;\n}\n\n.miniDiv {\n  max-width: 900px;\n  display: flex;\n  gap: 50px;\n  border-bottom: 2px solid var(--borderColor);\n  padding-bottom: 45px;\n}\n\n.miniDiv img {\n  height: 300px;\n  width: 400px;\n  border-radius: 5px;\n}\n\n.miniSubDiv {\n  color: var(--font-color);\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.miniSubDiv h1:not(.price) {\n  font-size: 2.5rem;\n  margin-bottom: 25px;\n}\n\n.miniSubDiv p {\n  font-size: 1.3rem;\n}\n\n.price {\n  margin-top: auto;\n  font-size: 3rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.subContainerContact {\n  display: flex;\n  place-content: center;\n  gap: 150px;\n  width: 85vw;\n  border-top: 1.5px solid var(--borderColor);\n  border-bottom: 1.5px solid var(--borderColor);\n  color: var(--font-color);\n  padding: 50px;\n}\n\ninput,\nselect {\n  padding: 8px;\n  font-size: 1.5rem;\n  font-weight: 200;\n  background-color: #161f27;\n  border: none;\n  border-radius: 3px;\n  -webkit-appearance: none;\n  appearance: none;\n  outline: none;\n  color: var(--font-color);\n}\n\ninput::placeholder {\n  color: grey;\n}\nform h1,\n.mapa h1 {\n  color: var(--borderColor);\n  margin-bottom: 30px;\n}\nlabel {\n  font-size: 1.5rem;\n}\n\ninput[type=\"submit\"] {\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:active {\n  background-color: rgb(5, 25, 128);\n}\n\n.ubication iframe {\n  width: 500px;\n  height: 500px;\n  border-radius: 10px;\n}\n\n.dishName {\n  color: var(--borderColor);\n}\n\n.envio {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n}\n\n.envio img {\n  height: 200px;\n  width: 200px;\n}\n\n@media (max-width: 760px) {\n  ul li {\n    padding: 20px 35px;\n    font-size: 1rem;\n  }\n  ul li:hover {\n    background-color: transparent;\n  }\n  ul li:active {\n    background-color: var(--hovers);\n  }\n  .presentation {\n    font-size: 1.5rem;\n    padding: 0;\n  }\n  .subText {\n    font-size: 1.3rem;\n    max-width: 30ch;\n    padding: 0;\n  }\n  .miniDiv {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .miniSubDiv p {\n    font-size: 1.2rem;\n    margin-bottom: 45px;\n  }\n  .miniDiv img {\n    height: 280px;\n    width: 320px;\n  }\n  .subContainerContact {\n    flex-direction: column;\n  }\n  label,\n  select,\n  input {\n    font-size: 1rem;\n  }\n  .ubication iframe {\n    height: 500px;\n    width: 230px;\n  }\n\n  .mapa h1 {\n    font-size: 1.8rem;\n  }\n}\n\n@media (max-width: 1000px) {\n  .subContainerContact {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/form.js");


function renderContact() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  container.innerHTML = `<div class="subContainerContact">
  <form action="asdf">
    <h1>Pedido</h1>
    <label for="name">Nombre</label>
    <input id="name" name="name" type="text" placeholder="Mustafa Mosambike"/>
    <label for="producto">Producto</label>
    <select id="producto" name="producto" class='producto' name="Hamburguer" id="hamburguer">
      <option value="Ragnarok">Ragnarok</option>
      <option value="Vegana">Vegana</option>
      <option value="Extincion Vacuna" selected>Extincion Vacuna</option>
      <option value="Iberica">Iberica</option>
      <option value="Infarto Asegurado">Infarto Asegurado</option>
      <option value="Grotesca">Grotesca</option>
    </select>
    <label for="detalles">Especificaciones</label>
    <input
      id="detalles"
      type="text"
      placeholder="Sin lechuga.. sin tomate"
    />
    <label for="direccion">Direccion</label>
    <input id="direccion" type="text" placeholder="Direccion" />
    <label for="indicaciones">Indicaciones Adicionales</label>
    <input
      id="indicaciones"
      type="text"
      placeholder="Al fondo a la derecha"
    />
    <input type="submit" class="submit" value="Realizar Pedido" />
  </form>
  <div class="mapa">
    <h1>Donde estamos?</h1>
    <div class="ubication">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6585.485187596285!2d-55.22710384476232!3d-34.38246655721696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950abb743da7591b%3A0x3177ac8e294234d7!2sLUVA!5e0!3m2!1ses!2suy!4v1683361838823!5m2!1ses!2suy"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>`;

  const enviar = document.querySelector("input[type='submit']");
  const form = document.querySelector("form");

  enviar.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_form__WEBPACK_IMPORTED_MODULE_0__.renderCheckout)(
      form["name"].value,
      form["producto"].value,
      "./images/prayge.png"
    );
  });
}


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCheckout": () => (/* binding */ renderCheckout)
/* harmony export */ });
function renderCheckout(name, pedido, source) {
  const div = document.querySelector("#content");
  div.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.classList.add("envio");
  const h1 = document.createElement("h1");
  h1.classList.add("first");
  h1.textContent = `Gracias por su pedido ${name}, su ${pedido} se esta procesando... \
  puede tardar un minimo de 8 meses en llegar`;
  newDiv.appendChild(h1);
  const img = document.createElement("img");
  img.src = source;
  newDiv.appendChild(img);
  div.appendChild(newDiv);
}


/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMain": () => (/* binding */ renderMain)
/* harmony export */ });
function renderMain() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  const subContainer = document.createElement("div");
  subContainer.classList.add("subContainer");
  const h1 = document.createElement("h1");
  const secondh1 = document.createElement("h1");
  const subText = document.createElement("p");
  h1.classList.add("presentation");
  h1.classList.add("first");
  secondh1.classList.add("presentation");
  subText.classList.add("subText");
  h1.textContent = "El Huron Artesanal.";
  secondh1.textContent = "Productos de la mayor calidad desde 1742";
  subText.textContent =
    "Desde hace mas de 250 años, nos hemos comprometido a entregar la mayor calidad en nuestros locales. Empezando como un pequeño\
    negocio hemos logrado expandirnos por mas de 3 continentes y 43 paises!";
  subContainer.appendChild(h1);
  subContainer.appendChild(secondh1);
  subContainer.appendChild(subText);
  container.appendChild(subContainer);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dish": () => (/* binding */ Dish),
/* harmony export */   "extincion": () => (/* binding */ extincion),
/* harmony export */   "grotesca": () => (/* binding */ grotesca),
/* harmony export */   "iberica": () => (/* binding */ iberica),
/* harmony export */   "infarto": () => (/* binding */ infarto),
/* harmony export */   "ragnarok": () => (/* binding */ ragnarok),
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu),
/* harmony export */   "vegana": () => (/* binding */ vegana)
/* harmony export */ });
class Dish {
  constructor(imageUrl, name, description, price) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

const grotesca = new Dish(
  "./images/grotesca.png",
  "Grotesca",
  "La hamburguesa de tus pesadillas, o de tus sueños",
  "$150"
);
const iberica = new Dish(
  "./images/iberica.png",
  "Iberica",
  "270 gramos de carne vacuna de primer nivel exportada desde Japon",
  "$250"
);

const ragnarok = new Dish(
  "./images/ragnarok.png",
  "Ragnarok",
  "Esta hamburguesa causara el fin de los tiempos",
  "$200"
);
const infarto = new Dish(
  "./images/infarto.png",
  "Infarto Asegurado",
  "Esta pequeña e inofensiva hamburguesa es perfecta para la etapa de volumen",
  "$250"
);

const extincion = new Dish(
  "./images/extincion.png",
  "Extincion Vacuna",
  "Cada venta de esta Hamburguesa disminuye la poblacion de las vacas en un 1.5%",
  "$550"
);
const vegana = new Dish(
  "./images/vegana.png",
  "Vegana",
  "Pan de carne, acompañado por 750grs de carne, panceta, huevo, jamon... Espera, vegano significa sin carne??",
  "$250"
);

function renderMenu(imgUrl, name, description, price, div) {
  const miniDiv = document.createElement("div");
  miniDiv.classList.add("miniDiv");
  const img = document.createElement("img");
  const miniSubDiv = document.createElement("div");
  miniSubDiv.classList.add("miniSubDiv");
  const dishName = document.createElement("h1");
  dishName.classList.add("dishName");
  const dishDescription = document.createElement("p");
  const dishPrice = document.createElement("h1");
  dishPrice.classList.add("price");
  img.src = `${imgUrl}`;
  dishName.textContent = `${name}`;
  dishDescription.textContent = `${description}`;
  dishPrice.textContent = `${price}`;
  miniSubDiv.appendChild(dishName);
  miniSubDiv.appendChild(dishDescription);
  miniSubDiv.appendChild(dishPrice);
  miniDiv.appendChild(img);
  miniDiv.appendChild(miniSubDiv);
  div.appendChild(miniDiv);
}




/***/ }),

/***/ "./src/El-Huron-Artesanal.png":
/*!************************************!*\
  !*** ./src/El-Huron-Artesanal.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdf1dd17e77b5ea0378d.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page */ "./src/main-page.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_main_page__WEBPACK_IMPORTED_MODULE_1__.renderMain)();

const hamburguesas = [];
hamburguesas.push(_menu__WEBPACK_IMPORTED_MODULE_2__.ragnarok, _menu__WEBPACK_IMPORTED_MODULE_2__.vegana, _menu__WEBPACK_IMPORTED_MODULE_2__.extincion, _menu__WEBPACK_IMPORTED_MODULE_2__.iberica, _menu__WEBPACK_IMPORTED_MODULE_2__.infarto, _menu__WEBPACK_IMPORTED_MODULE_2__.grotesca);

const homeBtn = document.querySelector(".inicio");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contacto");

homeBtn.addEventListener("click", _main_page__WEBPACK_IMPORTED_MODULE_1__.renderMain);

menuBtn.addEventListener("click", () => {
  const div = document.querySelector("#content");
  div.innerHTML = "";
  const subContainer = document.createElement("div");
  subContainer.classList.add("subContainerGrid");
  div.appendChild(subContainer);
  hamburguesas.forEach((hamburguesa) => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu)(
      hamburguesa.imageUrl,
      hamburguesa.name,
      hamburguesa.description,
      hamburguesa.price,
      subContainer
    );
  });
});

contactBtn.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_3__.renderContact);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FB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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29CO0FBU3pCO0FBQzBCOztBQUUxQyxzREFBVTs7QUFFVjtBQUNBLGtCQUFrQiwyQ0FBUSxFQUFFLHlDQUFNLEVBQUUsNENBQVMsRUFBRSwwQ0FBTyxFQUFFLDBDQUFPLEVBQUUsMkNBQVE7O0FBRXpFO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0Msa0RBQVU7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELHFDQUFxQyxtREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0VsLUh1cm9uLUFydGVzYW5hbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNlZGFydmlsbGUrQ3Vyc2l2ZSZmYW1pbHk9RnJlZWhhbmQmZmFtaWx5PVJvYm90bytNb25vJmZhbWlseT1VYnVudHU6d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW5Db2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1ib3JkZXJzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUyKTtcXG4gIC0tYm9yZGVyQ29sb3I6IHJnYigyMzUsIDIwNiwgNDUpO1xcbiAgLS1ob3ZlcnM6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMjk1KTtcXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvcik7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbnVsIGxpOm50aC1jaGlsZCgyKSB7XFxuICBib3JkZXItbGVmdDogMC40cHggc29saWQgdmFyKC0tYm9yZGVycyk7XFxuICBib3JkZXItcmlnaHQ6IDAuNHB4IHNvbGlkIHZhcigtLWJvcmRlcnMpO1xcbn1cXG5cXG51bCBsaSB7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxNSU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbnVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVycyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnN1YkNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByZXNlbnRhdGlvbiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZpcnN0IHtcXG4gIGNvbG9yOiB2YXIoLS1ib3JkZXJDb2xvcik7XFxufVxcblxcbi5zdWJUZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCAxLjJyZW0sIDEuNXJlbSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICB3aWR0aDogY2xhbXAoNWNoLCA3MGNoLCAxNTBjaCk7XFxufVxcblxcbi5zdWJDb250YWluZXJHcmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdhcDogMTUwcHg7XFxuICB3aWR0aDogODV2dztcXG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIHBhZGRpbmc6IDQwcHggMDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5taW5pRGl2IHtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xcbn1cXG5cXG4ubWluaURpdiBpbWcge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1pbmlTdWJEaXYge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5taW5pU3ViRGl2IGgxOm5vdCgucHJpY2UpIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLm1pbmlTdWJEaXYgcCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnByaWNlIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zdWJDb250YWluZXJDb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE1MHB4O1xcbiAgd2lkdGg6IDg1dnc7XFxuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MWYyNztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbmZvcm0gaDEsXFxuLm1hcGEgaDEge1xcbiAgY29sb3I6IHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMjUsIDEyOCk7XFxufVxcblxcbi51YmljYXRpb24gaWZyYW1lIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGlzaE5hbWUge1xcbiAgY29sb3I6IHZhcigtLWJvcmRlckNvbG9yKTtcXG59XFxuXFxuLmVudmlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZW52aW8gaW1nIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgdWwgbGkge1xcbiAgICBwYWRkaW5nOiAyMHB4IDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIHVsIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICB1bCBsaTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3ZlcnMpO1xcbiAgfVxcbiAgLnByZXNlbnRhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLnN1YlRleHQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWF4LXdpZHRoOiAzMGNoO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLm1pbmlEaXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5taW5pU3ViRGl2IHAge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG4gIH1cXG4gIC5taW5pRGl2IGltZyB7XFxuICAgIGhlaWdodDogMjgwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gIH1cXG4gIC5zdWJDb250YWluZXJDb250YWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIGxhYmVsLFxcbiAgc2VsZWN0LFxcbiAgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAudWJpY2F0aW9uIGlmcmFtZSB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gIH1cXG5cXG4gIC5tYXBhIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5zdWJDb250YWluZXJDb250YWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlD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L0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0VBQ1o7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7OztJQUdFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2VkYXJ2aWxsZStDdXJzaXZlJmZhbWlseT1GcmVlaGFuZCZmYW1pbHk9Um9ib3RvK01vbm8mZmFtaWx5PVVidW50dTp3Z2h0QDMwMDs0MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluQ29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tYm9yZGVyczogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1Mik7XFxuICAtLWJvcmRlckNvbG9yOiByZ2IoMjM1LCAyMDYsIDQ1KTtcXG4gIC0taG92ZXJzOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjI5NSk7XFxuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgdmFyKC0tYm9yZGVyQ29sb3IpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxufVxcblxcbnVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG51bCBsaTpudGgtY2hpbGQoMikge1xcbiAgYm9yZGVyLWxlZnQ6IDAuNHB4IHNvbGlkIHZhcigtLWJvcmRlcnMpO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjRweCBzb2xpZCB2YXIoLS1ib3JkZXJzKTtcXG59XFxuXFxudWwgbGkge1xcbiAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0VsLUh1cm9uLUFydGVzYW5hbC5wbmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDE1JTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxudWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXJzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uc3ViQ29udGFpbmVyIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJlc2VudGF0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZmlyc3Qge1xcbiAgY29sb3I6IHZhcigtLWJvcmRlckNvbG9yKTtcXG59XFxuXFxuLnN1YlRleHQge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDEuMnJlbSwgMS41cmVtKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIHdpZHRoOiBjbGFtcCg1Y2gsIDcwY2gsIDE1MGNoKTtcXG59XFxuXFxuLnN1YkNvbnRhaW5lckdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ2FwOiAxNTBweDtcXG4gIHdpZHRoOiA4NXZ3O1xcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgdmFyKC0tYm9yZGVyQ29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgdmFyKC0tYm9yZGVyQ29sb3IpO1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1pbmlEaXYge1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyQ29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XFxufVxcblxcbi5taW5pRGl2IGltZyB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWluaVN1YkRpdiB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm1pbmlTdWJEaXYgaDE6bm90KC5wcmljZSkge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4ubWluaVN1YkRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnN1YkNvbnRhaW5lckNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTUwcHg7XFxuICB3aWR0aDogODV2dztcXG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxZjI3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuZm9ybSBoMSxcXG4ubWFwYSBoMSB7XFxuICBjb2xvcjogdmFyKC0tYm9yZGVyQ29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAyNSwgMTI4KTtcXG59XFxuXFxuLnViaWNhdGlvbiBpZnJhbWUge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kaXNoTmFtZSB7XFxuICBjb2xvcjogdmFyKC0tYm9yZGVyQ29sb3IpO1xcbn1cXG5cXG4uZW52aW8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5lbnZpbyBpbWcge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICB1bCBsaSB7XFxuICAgIHBhZGRpbmc6IDIwcHggMzVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgdWwgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIHVsIGxpOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVycyk7XFxuICB9XFxuICAucHJlc2VudGF0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAuc3ViVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXgtd2lkdGg6IDMwY2g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAubWluaURpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1pbmlTdWJEaXYgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xcbiAgfVxcbiAgLm1pbmlEaXYgaW1nIHtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgfVxcbiAgLnN1YkNvbnRhaW5lckNvbnRhY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgbGFiZWwsXFxuICBzZWxlY3QsXFxuICBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC51YmljYXRpb24gaWZyYW1lIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgfVxcblxcbiAgLm1hcGEgaDEge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnN1YkNvbnRhaW5lckNvbnRhY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlckNoZWNrb3V0IH0gZnJvbSBcIi4vZm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwic3ViQ29udGFpbmVyQ29udGFjdFwiPlxuICA8Zm9ybSBhY3Rpb249XCJhc2RmXCI+XG4gICAgPGgxPlBlZGlkbzwvaDE+XG4gICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Ob21icmU8L2xhYmVsPlxuICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNdXN0YWZhIE1vc2FtYmlrZVwiLz5cbiAgICA8bGFiZWwgZm9yPVwicHJvZHVjdG9cIj5Qcm9kdWN0bzwvbGFiZWw+XG4gICAgPHNlbGVjdCBpZD1cInByb2R1Y3RvXCIgbmFtZT1cInByb2R1Y3RvXCIgY2xhc3M9J3Byb2R1Y3RvJyBuYW1lPVwiSGFtYnVyZ3VlclwiIGlkPVwiaGFtYnVyZ3VlclwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJhZ25hcm9rXCI+UmFnbmFyb2s8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJWZWdhbmFcIj5WZWdhbmE8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJFeHRpbmNpb24gVmFjdW5hXCIgc2VsZWN0ZWQ+RXh0aW5jaW9uIFZhY3VuYTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkliZXJpY2FcIj5JYmVyaWNhPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiSW5mYXJ0byBBc2VndXJhZG9cIj5JbmZhcnRvIEFzZWd1cmFkbzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdyb3Rlc2NhXCI+R3JvdGVzY2E8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgICA8bGFiZWwgZm9yPVwiZGV0YWxsZXNcIj5Fc3BlY2lmaWNhY2lvbmVzPC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGlkPVwiZGV0YWxsZXNcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJTaW4gbGVjaHVnYS4uIHNpbiB0b21hdGVcIlxuICAgIC8+XG4gICAgPGxhYmVsIGZvcj1cImRpcmVjY2lvblwiPkRpcmVjY2lvbjwvbGFiZWw+XG4gICAgPGlucHV0IGlkPVwiZGlyZWNjaW9uXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRpcmVjY2lvblwiIC8+XG4gICAgPGxhYmVsIGZvcj1cImluZGljYWNpb25lc1wiPkluZGljYWNpb25lcyBBZGljaW9uYWxlczwvbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICBpZD1cImluZGljYWNpb25lc1wiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkFsIGZvbmRvIGEgbGEgZGVyZWNoYVwiXG4gICAgLz5cbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCIgdmFsdWU9XCJSZWFsaXphciBQZWRpZG9cIiAvPlxuICA8L2Zvcm0+XG4gIDxkaXYgY2xhc3M9XCJtYXBhXCI+XG4gICAgPGgxPkRvbmRlIGVzdGFtb3M/PC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwidWJpY2F0aW9uXCI+XG4gICAgICA8aWZyYW1lXG4gICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDY1ODUuNDg1MTg3NTk2Mjg1ITJkLTU1LjIyNzEwMzg0NDc2MjMyITNkLTM0LjM4MjQ2NjU1NzIxNjk2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg5NTBhYmI3NDNkYTc1OTFiJTNBMHgzMTc3YWM4ZTI5NDIzNGQ3ITJzTFVWQSE1ZTAhM20yITFzZXMhMnN1eSE0djE2ODMzNjE4Mzg4MjMhNW0yITFzZXMhMnN1eVwiXG4gICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICA+PC9pZnJhbWU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YDtcblxuICBjb25zdCBlbnZpYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nc3VibWl0J11cIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuICBlbnZpYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbmRlckNoZWNrb3V0KFxuICAgICAgZm9ybVtcIm5hbWVcIl0udmFsdWUsXG4gICAgICBmb3JtW1wicHJvZHVjdG9cIl0udmFsdWUsXG4gICAgICBcIi4vaW1hZ2VzL3ByYXlnZS5wbmdcIlxuICAgICk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNoZWNrb3V0KG5hbWUsIHBlZGlkbywgc291cmNlKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgZGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiZW52aW9cIik7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS5jbGFzc0xpc3QuYWRkKFwiZmlyc3RcIik7XG4gIGgxLnRleHRDb250ZW50ID0gYEdyYWNpYXMgcG9yIHN1IHBlZGlkbyAke25hbWV9LCBzdSAke3BlZGlkb30gc2UgZXN0YSBwcm9jZXNhbmRvLi4uIFxcXG4gIHB1ZWRlIHRhcmRhciB1biBtaW5pbW8gZGUgOCBtZXNlcyBlbiBsbGVnYXJgO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gc291cmNlO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpbigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3Qgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJDb250YWluZXJcIik7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzZWNvbmRoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBoMS5jbGFzc0xpc3QuYWRkKFwicHJlc2VudGF0aW9uXCIpO1xuICBoMS5jbGFzc0xpc3QuYWRkKFwiZmlyc3RcIik7XG4gIHNlY29uZGgxLmNsYXNzTGlzdC5hZGQoXCJwcmVzZW50YXRpb25cIik7XG4gIHN1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1YlRleHRcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJFbCBIdXJvbiBBcnRlc2FuYWwuXCI7XG4gIHNlY29uZGgxLnRleHRDb250ZW50ID0gXCJQcm9kdWN0b3MgZGUgbGEgbWF5b3IgY2FsaWRhZCBkZXNkZSAxNzQyXCI7XG4gIHN1YlRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiRGVzZGUgaGFjZSBtYXMgZGUgMjUwIGHDsW9zLCBub3MgaGVtb3MgY29tcHJvbWV0aWRvIGEgZW50cmVnYXIgbGEgbWF5b3IgY2FsaWRhZCBlbiBudWVzdHJvcyBsb2NhbGVzLiBFbXBlemFuZG8gY29tbyB1biBwZXF1ZcOxb1xcXG4gICAgbmVnb2NpbyBoZW1vcyBsb2dyYWRvIGV4cGFuZGlybm9zIHBvciBtYXMgZGUgMyBjb250aW5lbnRlcyB5IDQzIHBhaXNlcyFcIjtcbiAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbiAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZGgxKTtcbiAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRleHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQ29udGFpbmVyKTtcbn1cbiIsImV4cG9ydCBjbGFzcyBEaXNoIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VVcmwsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgIHRoaXMuaW1hZ2VVcmwgPSBpbWFnZVVybDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gIH1cbn1cblxuY29uc3QgZ3JvdGVzY2EgPSBuZXcgRGlzaChcbiAgXCIuL2ltYWdlcy9ncm90ZXNjYS5wbmdcIixcbiAgXCJHcm90ZXNjYVwiLFxuICBcIkxhIGhhbWJ1cmd1ZXNhIGRlIHR1cyBwZXNhZGlsbGFzLCBvIGRlIHR1cyBzdWXDsW9zXCIsXG4gIFwiJDE1MFwiXG4pO1xuY29uc3QgaWJlcmljYSA9IG5ldyBEaXNoKFxuICBcIi4vaW1hZ2VzL2liZXJpY2EucG5nXCIsXG4gIFwiSWJlcmljYVwiLFxuICBcIjI3MCBncmFtb3MgZGUgY2FybmUgdmFjdW5hIGRlIHByaW1lciBuaXZlbCBleHBvcnRhZGEgZGVzZGUgSmFwb25cIixcbiAgXCIkMjUwXCJcbik7XG5cbmNvbnN0IHJhZ25hcm9rID0gbmV3IERpc2goXG4gIFwiLi9pbWFnZXMvcmFnbmFyb2sucG5nXCIsXG4gIFwiUmFnbmFyb2tcIixcbiAgXCJFc3RhIGhhbWJ1cmd1ZXNhIGNhdXNhcmEgZWwgZmluIGRlIGxvcyB0aWVtcG9zXCIsXG4gIFwiJDIwMFwiXG4pO1xuY29uc3QgaW5mYXJ0byA9IG5ldyBEaXNoKFxuICBcIi4vaW1hZ2VzL2luZmFydG8ucG5nXCIsXG4gIFwiSW5mYXJ0byBBc2VndXJhZG9cIixcbiAgXCJFc3RhIHBlcXVlw7FhIGUgaW5vZmVuc2l2YSBoYW1idXJndWVzYSBlcyBwZXJmZWN0YSBwYXJhIGxhIGV0YXBhIGRlIHZvbHVtZW5cIixcbiAgXCIkMjUwXCJcbik7XG5cbmNvbnN0IGV4dGluY2lvbiA9IG5ldyBEaXNoKFxuICBcIi4vaW1hZ2VzL2V4dGluY2lvbi5wbmdcIixcbiAgXCJFeHRpbmNpb24gVmFjdW5hXCIsXG4gIFwiQ2FkYSB2ZW50YSBkZSBlc3RhIEhhbWJ1cmd1ZXNhIGRpc21pbnV5ZSBsYSBwb2JsYWNpb24gZGUgbGFzIHZhY2FzIGVuIHVuIDEuNSVcIixcbiAgXCIkNTUwXCJcbik7XG5jb25zdCB2ZWdhbmEgPSBuZXcgRGlzaChcbiAgXCIuL2ltYWdlcy92ZWdhbmEucG5nXCIsXG4gIFwiVmVnYW5hXCIsXG4gIFwiUGFuIGRlIGNhcm5lLCBhY29tcGHDsWFkbyBwb3IgNzUwZ3JzIGRlIGNhcm5lLCBwYW5jZXRhLCBodWV2bywgamFtb24uLi4gRXNwZXJhLCB2ZWdhbm8gc2lnbmlmaWNhIHNpbiBjYXJuZT8/XCIsXG4gIFwiJDI1MFwiXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWVudShpbWdVcmwsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgZGl2KSB7XG4gIGNvbnN0IG1pbmlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaW5pRGl2LmNsYXNzTGlzdC5hZGQoXCJtaW5pRGl2XCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBtaW5pU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWluaVN1YkRpdi5jbGFzc0xpc3QuYWRkKFwibWluaVN1YkRpdlwiKTtcbiAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGRpc2hOYW1lLmNsYXNzTGlzdC5hZGQoXCJkaXNoTmFtZVwiKTtcbiAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgZGlzaFByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW1nLnNyYyA9IGAke2ltZ1VybH1gO1xuICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IGAke25hbWV9YDtcbiAgZGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgZGlzaFByaWNlLnRleHRDb250ZW50ID0gYCR7cHJpY2V9YDtcbiAgbWluaVN1YkRpdi5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XG4gIG1pbmlTdWJEaXYuYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uKTtcbiAgbWluaVN1YkRpdi5hcHBlbmRDaGlsZChkaXNoUHJpY2UpO1xuICBtaW5pRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIG1pbmlEaXYuYXBwZW5kQ2hpbGQobWluaVN1YkRpdik7XG4gIGRpdi5hcHBlbmRDaGlsZChtaW5pRGl2KTtcbn1cblxuZXhwb3J0IHsgaWJlcmljYSwgZ3JvdGVzY2EsIHJhZ25hcm9rLCBleHRpbmNpb24sIHZlZ2FuYSwgaW5mYXJ0byB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyTWFpbiB9IGZyb20gXCIuL21haW4tcGFnZVwiO1xuaW1wb3J0IHtcbiAgcmFnbmFyb2ssXG4gIHZlZ2FuYSxcbiAgZXh0aW5jaW9uLFxuICBpYmVyaWNhLFxuICBpbmZhcnRvLFxuICBncm90ZXNjYSxcbiAgcmVuZGVyTWVudSxcbn0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxucmVuZGVyTWFpbigpO1xuXG5jb25zdCBoYW1idXJndWVzYXMgPSBbXTtcbmhhbWJ1cmd1ZXNhcy5wdXNoKHJhZ25hcm9rLCB2ZWdhbmEsIGV4dGluY2lvbiwgaWJlcmljYSwgaW5mYXJ0bywgZ3JvdGVzY2EpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmljaW9cIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdG9cIik7XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlck1haW4pO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgZGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ViQ29udGFpbmVyR3JpZFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHN1YkNvbnRhaW5lcik7XG4gIGhhbWJ1cmd1ZXNhcy5mb3JFYWNoKChoYW1idXJndWVzYSkgPT4ge1xuICAgIHJlbmRlck1lbnUoXG4gICAgICBoYW1idXJndWVzYS5pbWFnZVVybCxcbiAgICAgIGhhbWJ1cmd1ZXNhLm5hbWUsXG4gICAgICBoYW1idXJndWVzYS5kZXNjcmlwdGlvbixcbiAgICAgIGhhbWJ1cmd1ZXNhLnByaWNlLFxuICAgICAgc3ViQ29udGFpbmVyXG4gICAgKTtcbiAgfSk7XG59KTtcblxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQ29udGFjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=