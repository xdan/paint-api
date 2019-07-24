(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__extends\", function() { return __extends; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__assign\", function() { return __assign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__rest\", function() { return __rest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__decorate\", function() { return __decorate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__param\", function() { return __param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__metadata\", function() { return __metadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__awaiter\", function() { return __awaiter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__generator\", function() { return __generator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__exportStar\", function() { return __exportStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__values\", function() { return __values; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__read\", function() { return __read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spread\", function() { return __spread; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spreadArrays\", function() { return __spreadArrays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__await\", function() { return __await; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncGenerator\", function() { return __asyncGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncDelegator\", function() { return __asyncDelegator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncValues\", function() { return __asyncValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__makeTemplateObject\", function() { return __makeTemplateObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importStar\", function() { return __importStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importDefault\", function() { return __importDefault; });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./src/core/api.ts":
/*!*************************!*\
  !*** ./src/core/api.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar render_1 = __webpack_require__(/*! ./render */ \"./src/core/render.ts\");\nvar object_1 = __webpack_require__(/*! ./observe/object */ \"./src/core/observe/object.ts\");\nvar eventer_1 = __webpack_require__(/*! ./observe/eventer */ \"./src/core/observe/eventer.ts\");\nvar Api = /** @class */ (function () {\n    function Api(options) {\n        var _this = this;\n        this.events = new eventer_1.Eventer(this);\n        this.state = {\n            layers: [],\n            width: 400,\n            height: 400,\n            behaviours: {\n                selectShapeOnMouseEnter: true,\n            },\n            cursor: {\n                x: 0,\n                y: 0,\n                draw: false\n            }\n        };\n        this.state = object_1.ObserveObject.create(tslib_1.__assign({}, this.state, options), this.draw.bind(this));\n        this.render = render_1.Render.create(this.state.width, this.state.height);\n        this.events.on('mousemove', function (e) {\n            _this.state.cursor.x = e.x;\n            _this.state.cursor.y = e.y;\n        });\n        this.draw();\n    }\n    Api.prototype.bind = function (root) {\n        var _this = this;\n        var container = this.render.getContainer();\n        if (container) {\n            root.appendChild(container);\n        }\n        else {\n            throw new Error('Render has not HTML connector');\n        }\n        container.addEventListener('mousemove', function (e) {\n            var rect = container.getBoundingClientRect();\n            _this.events.fire('mousemove', {\n                x: e.clientX - rect.left,\n                y: e.clientY - rect.top,\n            });\n        });\n    };\n    Api.prototype.draw = function () {\n        var _this = this;\n        this.render.clear();\n        var _a = this.state, width = _a.width, height = _a.height, layers = _a.layers, cursor = _a.cursor, selectShapeOnMouseEnter = this.state.behaviours.selectShapeOnMouseEnter, drawOptions = {\n            drawBoundIfInPoint: selectShapeOnMouseEnter,\n            cursor: cursor\n        };\n        this.render.setSize(width, height);\n        layers.forEach(function (layer) {\n            layer.draw(_this.render, drawOptions);\n        });\n        if (cursor.draw) {\n            this.render.drawCursor(cursor);\n        }\n    };\n    return Api;\n}());\nexports.Api = Api;\n\n\n//# sourceURL=webpack:///./src/core/api.ts?");

/***/ }),

/***/ "./src/core/helpers/isDictionary.ts":
/*!******************************************!*\
  !*** ./src/core/helpers/isDictionary.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isDictionary(obj) {\n    return typeof obj === 'object' &&\n        obj !== null &&\n        obj.constructor.name === 'Object' &&\n        !Array.isArray(obj);\n}\nexports.isDictionary = isDictionary;\n\n\n//# sourceURL=webpack:///./src/core/helpers/isDictionary.ts?");

/***/ }),

/***/ "./src/core/helpers/isPointInBound.ts":
/*!********************************************!*\
  !*** ./src/core/helpers/isPointInBound.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isPointInBound(point, box) {\n    return point.x >= box.x && point.y >= box.y && point.x <= box.x + box.w && point.y <= box.y + box.h;\n}\nexports.isPointInBound = isPointInBound;\n\n\n//# sourceURL=webpack:///./src/core/helpers/isPointInBound.ts?");

/***/ }),

/***/ "./src/core/layer.ts":
/*!***************************!*\
  !*** ./src/core/layer.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Layer = /** @class */ (function () {\n    function Layer(shapes) {\n        if (shapes === void 0) { shapes = []; }\n        this.shapes = shapes;\n    }\n    Layer.prototype.add = function (shape) {\n        this.shapes.push(shape);\n    };\n    Layer.prototype.draw = function (render, opt) {\n        this.shapes.forEach(function (shape) {\n            shape.draw(render, opt);\n        });\n    };\n    return Layer;\n}());\nexports.Layer = Layer;\n\n\n//# sourceURL=webpack:///./src/core/layer.ts?");

/***/ }),

/***/ "./src/core/observe/array.ts":
/*!***********************************!*\
  !*** ./src/core/observe/array.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar ObserveArray = /** @class */ (function (_super) {\n    tslib_1.__extends(ObserveArray, _super);\n    function ObserveArray() {\n        return _super.call(this) || this;\n    }\n    ObserveArray.create = function (items, change) {\n        var _a;\n        var array = Object.create(ObserveArray.prototype);\n        (_a = Array.prototype.push).call.apply(_a, [array].concat(items));\n        array.change = change;\n        return array;\n    };\n    ObserveArray.prototype.push = function () {\n        var items = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            items[_i] = arguments[_i];\n        }\n        var res = _super.prototype.push.apply(this, items);\n        this.change();\n        return res;\n    };\n    ObserveArray.prototype.pop = function () {\n        var item = _super.prototype.pop.call(this);\n        this.change();\n        return item;\n    };\n    ObserveArray.prototype.shift = function () {\n        var item = _super.prototype.shift.call(this);\n        this.change();\n        return item;\n    };\n    ObserveArray.prototype.unshift = function () {\n        var items = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            items[_i] = arguments[_i];\n        }\n        var res = _super.prototype.unshift.apply(this, items);\n        this.change();\n        return res;\n    };\n    ObserveArray.prototype.set = function (index, value) {\n        if (this[index] !== value) {\n            this[index] = value;\n            this.change();\n        }\n    };\n    return ObserveArray;\n}(Array));\nexports.ObserveArray = ObserveArray;\n\n\n//# sourceURL=webpack:///./src/core/observe/array.ts?");

/***/ }),

/***/ "./src/core/observe/eventer.ts":
/*!*************************************!*\
  !*** ./src/core/observe/eventer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar Eventer = /** @class */ (function () {\n    function Eventer(host) {\n        this.host = host;\n        this.state = {\n            listeners: {}\n        };\n    }\n    Eventer.prototype.on = function (event, callback) {\n        var listeners = this.state.listeners;\n        if (!listeners[event]) {\n            listeners[event] = [];\n        }\n        listeners[event].push(callback);\n        return this;\n    };\n    ;\n    Eventer.prototype.fire = function (event, args) {\n        var _this = this;\n        var listeners = this.state.listeners;\n        if (listeners[event]) {\n            listeners[event].forEach(function (callback) { return callback.call(_this.host, tslib_1.__assign({ type: event }, args)); });\n        }\n        return this;\n    };\n    ;\n    return Eventer;\n}());\nexports.Eventer = Eventer;\n\n\n//# sourceURL=webpack:///./src/core/observe/eventer.ts?");

/***/ }),

/***/ "./src/core/observe/object.ts":
/*!************************************!*\
  !*** ./src/core/observe/object.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isDictionary_1 = __webpack_require__(/*! ../helpers/isDictionary */ \"./src/core/helpers/isDictionary.ts\");\nvar array_1 = __webpack_require__(/*! ./array */ \"./src/core/observe/array.ts\");\nvar ObserveObject = /** @class */ (function () {\n    function ObserveObject(data, change) {\n        var _this = this;\n        this.data = data;\n        this.change = change;\n        Object.keys(data).forEach(function (key) {\n            _this.setItem(data, key, data[key]);\n            Object.defineProperty(_this, key, {\n                set: function (value) {\n                    _this.setItem(data, key, value);\n                    change();\n                },\n                get: function () {\n                    return data[key];\n                }\n            });\n        });\n    }\n    ObserveObject.prototype.setItem = function (data, key, value) {\n        if (isDictionary_1.isDictionary(value)) {\n            data[key] = ObserveObject.create(value, this.change);\n        }\n        else if (Array.isArray(value) && !(value instanceof array_1.ObserveArray)) {\n            data[key] = array_1.ObserveArray.create(value, this.change);\n        }\n        else if (data[key] !== value) {\n            data[key] = value;\n        }\n    };\n    ObserveObject.create = function (data, change) {\n        return (new ObserveObject(data, change));\n    };\n    return ObserveObject;\n}());\nexports.ObserveObject = ObserveObject;\n\n\n//# sourceURL=webpack:///./src/core/observe/object.ts?");

/***/ }),

/***/ "./src/core/render.ts":
/*!****************************!*\
  !*** ./src/core/render.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Render = /** @class */ (function () {\n    function Render(width, height) {\n        if (width === void 0) { width = 400; }\n        if (height === void 0) { height = 400; }\n        this.container = null;\n        this.state = {\n            width: 0,\n            height: 0,\n        };\n        this.makeCanvas(width, height);\n    }\n    Render.prototype.getContainer = function () {\n        return this.container;\n    };\n    Render.create = function (width, height) {\n        return new Render(width, height);\n    };\n    Render.prototype.makeCanvas = function (width, height) {\n        var canvas = document.createElement(\"canvas\");\n        if (!canvas) {\n            throw new Error('Canvas was not created');\n        }\n        var ctx = canvas.getContext(\"2d\");\n        if (!ctx) {\n            throw new Error('Canvas context was not created');\n        }\n        this.context = ctx;\n        this.container = canvas;\n        this.setSize(width, height);\n    };\n    Render.prototype.changeSize = function (width, height) {\n        if (!this.container) {\n            return;\n        }\n        this.context.canvas.width = width;\n        this.context.canvas.height = height;\n        this.container.style.width = width + 'px';\n        this.container.style.height = height + 'px';\n    };\n    Render.prototype.setSize = function (width, height) {\n        if (width !== this.state.width || height !== this.state.height) {\n            this.changeSize(width, height);\n            this.state.width = width;\n            this.state.height = height;\n        }\n    };\n    Render.prototype.clear = function () {\n        this.context.clearRect(0, 0, this.state.width, this.state.height);\n    };\n    Render.prototype.drawImage = function (image, bound) {\n        this.context.drawImage(image, bound.x, bound.y, bound.w, bound.h);\n    };\n    Render.prototype.drawCircle = function (x, y, r) {\n        this.context.beginPath();\n        this.context.arc(x, y, r, 0, 2 * Math.PI);\n        this.context.stroke();\n    };\n    Render.prototype.drawPolyline = function (points) {\n        var _this = this;\n        this.context.beginPath();\n        this.context.setLineDash([2, 2]);\n        points.forEach(function (_a, index) {\n            var x = _a.x, y = _a.y;\n            if (!index) {\n                _this.context.moveTo(x, y);\n            }\n            _this.context.lineTo(x, y);\n        });\n        this.context.stroke();\n        this.context.setLineDash([]);\n    };\n    Render.prototype.drawRectangle = function (bound, fill) {\n        if (fill) {\n            this.context.fillRect(bound.x, bound.y, bound.w, bound.h);\n        }\n        else {\n            this.context.rect(bound.x, bound.y, bound.w, bound.h);\n            this.context.stroke();\n        }\n    };\n    Render.prototype.drawCursor = function (_a) {\n        var x = _a.x, y = _a.y;\n        this.context.beginPath();\n        this.context.setLineDash([2, 2]);\n        this.context.moveTo(x, y - 5);\n        this.context.lineTo(x, y - 5);\n        this.context.lineTo(x, y + 5);\n        this.context.moveTo(x - 5, y);\n        this.context.lineTo(x - 5, y);\n        this.context.lineTo(x + 5, y);\n        this.context.stroke();\n        this.context.setLineDash([]);\n    };\n    return Render;\n}());\nexports.Render = Render;\n\n\n//# sourceURL=webpack:///./src/core/render.ts?");

/***/ }),

/***/ "./src/core/shape.ts":
/*!***************************!*\
  !*** ./src/core/shape.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar layer_1 = __webpack_require__(/*! ./layer */ \"./src/core/layer.ts\");\nvar isPointInBound_1 = __webpack_require__(/*! ./helpers/isPointInBound */ \"./src/core/helpers/isPointInBound.ts\");\nvar Shape = /** @class */ (function (_super) {\n    tslib_1.__extends(Shape, _super);\n    function Shape() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Shape.prototype.draw = function (render, opt) {\n        this.drawGeometry(render, opt);\n        if (opt.drawBoundIfInPoint) {\n            var bound = this.bound;\n            console.log(this.constructor.name, bound);\n            if (isPointInBound_1.isPointInBound(opt.cursor, bound)) {\n                render.drawRectangle(bound, false);\n            }\n        }\n        _super.prototype.draw.call(this, render, opt);\n    };\n    return Shape;\n}(layer_1.Layer));\nexports.Shape = Shape;\n\n\n//# sourceURL=webpack:///./src/core/shape.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar api_1 = __webpack_require__(/*! ./core/api */ \"./src/core/api.ts\");\nvar layer_1 = __webpack_require__(/*! ./core/layer */ \"./src/core/layer.ts\");\nvar Shapes = __webpack_require__(/*! ./shapes */ \"./src/shapes/index.ts\");\nObject.keys(Shapes).forEach(function (key) {\n    api_1.Api[key] = Shapes[key];\n});\napi_1.Api.Layer = layer_1.Layer;\nexports.PaintApi = api_1.Api;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/shapes/bitmap.ts":
/*!******************************!*\
  !*** ./src/shapes/bitmap.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar Bitmap = /** @class */ (function (_super) {\n    tslib_1.__extends(Bitmap, _super);\n    function Bitmap(img, x, y, w, h) {\n        var _this = _super.call(this) || this;\n        _this.img = img;\n        _this.x = x;\n        _this.y = y;\n        _this.w = w;\n        _this.h = h;\n        return _this;\n    }\n    Object.defineProperty(Bitmap.prototype, \"bound\", {\n        get: function () {\n            return this;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Bitmap.prototype.drawGeometry = function (render) {\n        render.drawImage(this.img, this);\n    };\n    return Bitmap;\n}(shape_1.Shape));\nexports.Bitmap = Bitmap;\n\n\n//# sourceURL=webpack:///./src/shapes/bitmap.ts?");

/***/ }),

/***/ "./src/shapes/circle.ts":
/*!******************************!*\
  !*** ./src/shapes/circle.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar Circle = /** @class */ (function (_super) {\n    tslib_1.__extends(Circle, _super);\n    function Circle(x, y, r) {\n        var _this = _super.call(this) || this;\n        _this.x = x;\n        _this.y = y;\n        _this.r = r;\n        return _this;\n    }\n    Object.defineProperty(Circle.prototype, \"bound\", {\n        get: function () {\n            return {\n                x: this.x - this.r,\n                y: this.y - this.r,\n                w: this.r * 2,\n                h: this.r * 2\n            };\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Circle.prototype.drawGeometry = function (render) {\n        render.drawCircle(this.x, this.y, this.r);\n    };\n    return Circle;\n}(shape_1.Shape));\nexports.Circle = Circle;\n\n\n//# sourceURL=webpack:///./src/shapes/circle.ts?");

/***/ }),

/***/ "./src/shapes/index.ts":
/*!*****************************!*\
  !*** ./src/shapes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./rectangle */ \"./src/shapes/rectangle.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./circle */ \"./src/shapes/circle.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./bitmap */ \"./src/shapes/bitmap.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./polyline */ \"./src/shapes/polyline.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/shapes/index.ts?");

/***/ }),

/***/ "./src/shapes/polyline.ts":
/*!********************************!*\
  !*** ./src/shapes/polyline.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar Polyline = /** @class */ (function (_super) {\n    tslib_1.__extends(Polyline, _super);\n    function Polyline(points) {\n        var _this = _super.call(this) || this;\n        _this.points = [];\n        points.forEach(function (point) {\n            _this.points.push(Array.isArray(point) ? { x: point[0], y: point[1] } : point);\n        });\n        return _this;\n    }\n    Object.defineProperty(Polyline.prototype, \"bound\", {\n        get: function () {\n            if (this.points.length < 2) {\n                throw new Error('Need at least two points');\n            }\n            var bnd = {\n                x1: Infinity,\n                x2: -Infinity,\n                y1: Infinity,\n                y2: -Infinity,\n            };\n            this.points.forEach(function (point) {\n                bnd.x1 = Math.min(point.x, bnd.x1);\n                bnd.y1 = Math.min(point.y, bnd.y1);\n                bnd.x2 = Math.max(point.x, bnd.x2);\n                bnd.y2 = Math.max(point.y, bnd.y2);\n            });\n            return {\n                x: bnd.x1,\n                y: bnd.y1,\n                w: bnd.x2 - bnd.x1,\n                h: bnd.y2 - bnd.y1\n            };\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Polyline.prototype.drawGeometry = function (render) {\n        render.drawPolyline(this.points);\n    };\n    return Polyline;\n}(shape_1.Shape));\nexports.Polyline = Polyline;\n\n\n//# sourceURL=webpack:///./src/shapes/polyline.ts?");

/***/ }),

/***/ "./src/shapes/rectangle.ts":
/*!*********************************!*\
  !*** ./src/shapes/rectangle.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar Rectangle = /** @class */ (function (_super) {\n    tslib_1.__extends(Rectangle, _super);\n    function Rectangle(x, y, w, h) {\n        var _this = _super.call(this) || this;\n        _this.x = x;\n        _this.y = y;\n        _this.w = w;\n        _this.h = h;\n        return _this;\n    }\n    Object.defineProperty(Rectangle.prototype, \"bound\", {\n        get: function () {\n            return this;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Rectangle.prototype.drawGeometry = function (render) {\n        render.drawRectangle(this, true);\n    };\n    return Rectangle;\n}(shape_1.Shape));\nexports.Rectangle = Rectangle;\n\n\n//# sourceURL=webpack:///./src/shapes/rectangle.ts?");

/***/ })

/******/ });
});