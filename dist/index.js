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

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MODE_SELECT = 1 /* select */;\nexports.MODE_DRAW = 2 /* draw */;\nexports.MODE_NOPE = 0 /* nope */;\nexports.HANDLE_RADIUS = 4;\n\n\n//# sourceURL=webpack:///./src/const.ts?");

/***/ }),

/***/ "./src/core/api.ts":
/*!*************************!*\
  !*** ./src/core/api.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar render_1 = __webpack_require__(/*! ./render */ \"./src/core/render.ts\");\nvar eventer_1 = __webpack_require__(/*! ./observe/eventer */ \"./src/core/observe/eventer.ts\");\nvar helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/core/helpers/index.ts\");\nvar shapes_1 = __webpack_require__(/*! ../shapes */ \"./src/shapes/index.ts\");\nvar layer_1 = __webpack_require__(/*! ./layer */ \"./src/core/layer.ts\");\nvar transforms_1 = __webpack_require__(/*! ./transforms */ \"./src/core/transforms/index.ts\");\nvar geometries_1 = __webpack_require__(/*! ./geometries */ \"./src/core/geometries/index.ts\");\nvar Api = /** @class */ (function () {\n    function Api(options) {\n        var _this = this;\n        this.events = new eventer_1.Eventer(this);\n        this.state = {\n            zoom: 1,\n            offset: [0, 0],\n            selection: null,\n            mode: 1 /* select */,\n            step: 0 /* nope */,\n            options: {\n                showFPS: true\n            },\n            shapes: {\n                active: [],\n                hover: []\n            },\n            layers: [],\n            width: 400,\n            height: 400,\n            behaviours: {\n                selectShapeOnMouseEnter: true\n            },\n            cursor: {\n                x: 0,\n                y: 0,\n                draw: true\n            }\n        };\n        this.mainTransforms = {\n            zoom: new transforms_1.Zoom(),\n            offset: new transforms_1.Translate()\n        };\n        this.state = helpers_1.mergeDeep(this.state, options);\n        var redraw = function () {\n            _this.draw();\n            requestAnimationFrame(redraw);\n        };\n        this.render = render_1.Render.create(this.state.width, this.state.height);\n        redraw();\n        this.addMouseListeners();\n    }\n    /**\n     * Change current mode\n     * @param mode\n     */\n    Api.prototype.setMode = function (mode) {\n        this.state.mode = mode;\n        this.state.shapes.active = [];\n    };\n    Api.prototype.getShapesUnderPoint = function (point) {\n        var result = [];\n        this.state.layers.forEach(function (layer) {\n            layer.shapes.forEach(function (shape) {\n                if (helpers_1.isInBound(point, shape.geometry.bound)) {\n                    result.push(shape);\n                }\n            });\n        });\n        return result;\n    };\n    Api.prototype.addMouseListeners = function () {\n        var _this = this;\n        var setCursor = function (e) {\n            _this.state.cursor.x = e.x;\n            _this.state.cursor.y = e.y;\n            _this.draw();\n        };\n        var transform = null, shape = null, lastPoint = null, oldOffset = [0, 0], startBound = { x: 0, y: 0, w: 0, h: 0 }, start = { x: 0, y: 0 };\n        this.events\n            .on('corner.mousedown', function (e) {\n            if (e.shape && e.corner) {\n                _this.state.shapes.active = [e.shape];\n                if (e.corner.type !== 'CT') {\n                    _this.state.step = 3 /* scale */;\n                    start = helpers_1.getOppositeCorner(e.shape.bound, e.corner, e.shape.geometry.angle);\n                }\n                else {\n                    _this.state.step = 4 /* rotate */;\n                    start = e.corner;\n                }\n                startBound = e.shape.bound;\n            }\n        })\n            .on('shape.mousedown', function (e) {\n            if (e.shape) {\n                _this.state.step = 1 /* drag */;\n                _this.state.shapes.active = [e.shape];\n            }\n        })\n            .on('mouseup', function (e) {\n            _this.state.step = 0 /* nope */;\n            transform = null;\n            shape = null;\n            lastPoint = null;\n            if (_this.state.mode === 1 /* select */) {\n                _this.state.layers.forEach(function (layer) { return layer.fire(e.type, e); });\n            }\n        })\n            .on('mousedown', function (e) {\n            start = e;\n            switch (_this.state.mode) {\n                case 2 /* draw */: {\n                    _this.state.step = 5 /* draw */;\n                    break;\n                }\n                case 1 /* select */: {\n                    var active = _this.state.shapes.active[0];\n                    _this.state.shapes.active = [];\n                    if (active) {\n                        active.manager.checkEvent(e.type, e);\n                    }\n                    _this.state.layers.forEach(function (layer) {\n                        return layer.fire(e.type, e);\n                    });\n                    if (!_this.state.shapes.active.length) {\n                        oldOffset = _this.state.offset.slice();\n                        _this.state.step = 2 /* dragMap */;\n                    }\n                    break;\n                }\n                default:\n                    _this.state.step = 0 /* nope */;\n            }\n        })\n            .on('mousemove', function (e) {\n            var _a = _this.state, offset = _a.offset, zoom = _a.zoom;\n            var x = e.x / zoom - offset[0], y = e.y / zoom - offset[1];\n            setCursor(e);\n            switch (_this.state.step) {\n                case 5 /* draw */:\n                    if (!shape) {\n                        shape = new shapes_1.Polyline([[x, y]]);\n                        var layer = new layer_1.Layer(_this);\n                        _this.state.layers.push(layer);\n                        layer.add(shape);\n                        _this.state.shapes.active = [shape];\n                    }\n                    else {\n                        if (!lastPoint) {\n                            lastPoint = new geometries_1.Point(x, y);\n                            shape.simpleGeometry.push(lastPoint);\n                            start = e;\n                        }\n                        lastPoint.x = x;\n                        lastPoint.y = y;\n                        if (helpers_1.distanceBetween(e, start) > 5) {\n                            lastPoint = null;\n                        }\n                    }\n                    _this.draw();\n                    break;\n                case 2 /* dragMap */:\n                    _this.state.offset = [\n                        (e.x - start.x) / zoom + oldOffset[0],\n                        (e.y - start.y) / zoom + oldOffset[1]\n                    ];\n                    break;\n                case 1 /* drag */:\n                    if (!transform) {\n                        transform = new transforms_1.Translate(x, y);\n                        _this.state.shapes.active.forEach(function (shape) {\n                            transform && shape.transforms.push(transform);\n                        });\n                    }\n                    transform.x = (e.x - start.x) / zoom;\n                    transform.y = (e.y - start.y) / zoom;\n                    break;\n                case 3 /* scale */:\n                    if (!transform) {\n                        transform = new transforms_1.Scale(1, 1, {\n                            x: start.x / zoom - offset[0],\n                            y: start.y / zoom - offset[1]\n                        });\n                        _this.state.shapes.active.forEach(function (shape) {\n                            transform && shape.transforms.push(transform);\n                        });\n                    }\n                    transform.x = Math.abs(e.x - start.x) / startBound.w;\n                    transform.y = Math.abs(e.y - start.y) / startBound.h;\n                    break;\n                case 4 /* rotate */:\n                    var active = _this.state.shapes.active[0], geometry = active.geometry;\n                    if (!transform) {\n                        transform = new transforms_1.Rotate(geometry.angle);\n                        active.transforms.push(transform);\n                    }\n                    transform.angle =\n                        90 -\n                            helpers_1.angle({\n                                x: e.x - geometry.center.x,\n                                y: -(e.y - geometry.center.y)\n                            });\n                    break;\n            }\n        });\n    };\n    Api.prototype.bind = function (root) {\n        var _this = this;\n        var container = this.render.getContainer();\n        if (!container || !root) {\n            throw new Error('Render has not HTML connector');\n        }\n        root.appendChild(container);\n        container.__paint_api__ = this;\n        root.__paint_api__ = this;\n        var mouseEvent = function (e) {\n            var rect = container.getBoundingClientRect();\n            e.preventDefault();\n            _this.events.fire(e.type, {\n                type: e.type,\n                api: _this,\n                x: e.clientX - rect.left,\n                y: e.clientY - rect.top\n            });\n        };\n        ['mousemove', 'mousedown', 'mouseup'].forEach(function (eventType) {\n            container.addEventListener(eventType, mouseEvent);\n        });\n        var f = 1;\n        container.addEventListener('wheel', function (e) {\n            e.preventDefault();\n            if (f > 20000) {\n                return;\n            }\n            f++;\n            var _a = _this.state, cursor = _a.cursor, offset = _a.offset, zoom = _a.zoom;\n            var globalCursor = {\n                x: cursor.x / zoom - offset[0],\n                y: cursor.y / zoom - offset[1]\n            };\n            _this.state.zoom += e.deltaY * -0.01;\n            offset[0] = cursor.x / _this.state.zoom - globalCursor.x;\n            offset[1] = cursor.y / _this.state.zoom - globalCursor.y;\n        });\n        container.addEventListener('mouseleave', function () {\n            _this.state.cursor.x = -10;\n            _this.state.cursor.y = -10;\n        });\n        ['mouseup'].forEach(function (eventType) {\n            window.addEventListener(eventType, (function (e) {\n                if (e.target !== container) {\n                    mouseEvent(e);\n                }\n            }));\n        });\n    };\n    Api.prototype.draw = function () {\n        var _this = this;\n        var _a = this.state, width = _a.width, height = _a.height, layers = _a.layers, cursor = _a.cursor, zoom = _a.zoom, offset = _a.offset, behaviours = _a.behaviours, mode = _a.mode, shapes = _a.shapes;\n        this.mainTransforms.zoom.setValue(zoom);\n        this.mainTransforms.offset.setValue(offset[0], offset[1]);\n        this.render.clear();\n        var selectShapeOnMouseEnter = behaviours.selectShapeOnMouseEnter, drawOptions = {\n            drawBoundIfInPoint: selectShapeOnMouseEnter,\n            cursor: cursor\n        };\n        this.render.setSize(width, height);\n        layers.forEach(function (layer) {\n            layer.draw(_this.render, drawOptions);\n        });\n        if (mode !== 2 /* draw */) {\n            shapes.active.forEach(function (shape) {\n                return shape.manager.draw(_this.render, cursor);\n            });\n        }\n        var text = this.debugInfo();\n        if (text.length) {\n            this.render.drawText({ x: -10, y: 10 }, text);\n        }\n        this.render.drawCursor(cursor);\n    };\n    Api.prototype.debugInfo = function () {\n        return '';\n    };\n    Api.Shapes = {};\n    Api.Geometries = {};\n    Api.Transforms = {};\n    return Api;\n}());\nexports.Api = Api;\n\n\n//# sourceURL=webpack:///./src/core/api.ts?");

/***/ }),

/***/ "./src/core/geometries/bound.ts":
/*!**************************************!*\
  !*** ./src/core/geometries/bound.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar geometry_1 = __webpack_require__(/*! ../geometry */ \"./src/core/geometry.ts\");\nvar Bound = /** @class */ (function (_super) {\n    tslib_1.__extends(Bound, _super);\n    function Bound(x, y, w, h, angle) {\n        if (angle === void 0) { angle = 0; }\n        var _this = _super.call(this) || this;\n        _this.x = x;\n        _this.y = y;\n        _this.w = w;\n        _this.h = h;\n        _this.angle = angle;\n        return _this;\n    }\n    Object.defineProperty(Bound.prototype, \"bound\", {\n        get: function () {\n            return this;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Bound;\n}(geometry_1.Geometry));\nexports.Bound = Bound;\n\n\n//# sourceURL=webpack:///./src/core/geometries/bound.ts?");

/***/ }),

/***/ "./src/core/geometries/index.ts":
/*!**************************************!*\
  !*** ./src/core/geometries/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./bound */ \"./src/core/geometries/bound.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./multipoint */ \"./src/core/geometries/multipoint.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./point */ \"./src/core/geometries/point.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./round */ \"./src/core/geometries/round.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/core/geometries/index.ts?");

/***/ }),

/***/ "./src/core/geometries/multipoint.ts":
/*!*******************************************!*\
  !*** ./src/core/geometries/multipoint.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar point_1 = __webpack_require__(/*! ./point */ \"./src/core/geometries/point.ts\");\nvar helpers_1 = __webpack_require__(/*! ../helpers/ */ \"./src/core/helpers/index.ts\");\nvar Multipoint = /** @class */ (function (_super) {\n    tslib_1.__extends(Multipoint, _super);\n    function Multipoint(points, angle) {\n        if (angle === void 0) { angle = 0; }\n        var _this = _super.call(this) || this;\n        if (points) {\n            points.forEach(function (point) {\n                _this.push(point instanceof point_1.Point ? point : new point_1.Point(point));\n            });\n        }\n        _this.angle = angle;\n        Object.setPrototypeOf(_this, Object.create(Multipoint.prototype));\n        return _this;\n    }\n    Object.defineProperty(Multipoint.prototype, \"bound\", {\n        get: function () {\n            return helpers_1.getBoundByMultiline(this);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Multipoint.prototype, \"center\", {\n        get: function () {\n            var bound = this.bound;\n            return {\n                x: bound.x + Math.round(bound.w / 2),\n                y: bound.y + Math.round(bound.h / 2)\n            };\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Multipoint.prototype.clone = function () {\n        var geometry = {};\n        Object.setPrototypeOf(geometry, this);\n        return geometry;\n    };\n    return Multipoint;\n}(Array));\nexports.Multipoint = Multipoint;\n\n\n//# sourceURL=webpack:///./src/core/geometries/multipoint.ts?");

/***/ }),

/***/ "./src/core/geometries/point.ts":
/*!**************************************!*\
  !*** ./src/core/geometries/point.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar geometry_1 = __webpack_require__(/*! ../geometry */ \"./src/core/geometry.ts\");\nvar Point = /** @class */ (function (_super) {\n    tslib_1.__extends(Point, _super);\n    function Point(x, y) {\n        var _this = _super.call(this) || this;\n        if (typeof x === 'number') {\n            _this.x = x;\n            _this.y = y || 0;\n        }\n        else if (Array.isArray(x)) {\n            _this.x = x[0];\n            _this.y = x[1];\n        }\n        else {\n            _this.x = x.x;\n            _this.y = x.y;\n        }\n        return _this;\n    }\n    Object.defineProperty(Point.prototype, \"bound\", {\n        get: function () {\n            return {\n                x: this.x,\n                y: this.y,\n                w: 1,\n                h: 1\n            };\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Point;\n}(geometry_1.Geometry));\nexports.Point = Point;\n\n\n//# sourceURL=webpack:///./src/core/geometries/point.ts?");

/***/ }),

/***/ "./src/core/geometries/round.ts":
/*!**************************************!*\
  !*** ./src/core/geometries/round.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar geometry_1 = __webpack_require__(/*! ../geometry */ \"./src/core/geometry.ts\");\nvar Round = /** @class */ (function (_super) {\n    tslib_1.__extends(Round, _super);\n    function Round(x, y, r, rv, angle) {\n        if (rv === void 0) { rv = r; }\n        if (angle === void 0) { angle = 0; }\n        var _this = _super.call(this) || this;\n        _this.x = x;\n        _this.y = y;\n        _this.r = r;\n        _this.rv = rv;\n        _this.angle = angle;\n        return _this;\n    }\n    Object.defineProperty(Round.prototype, \"bound\", {\n        get: function () {\n            return {\n                x: this.x - this.r,\n                y: this.y - this.rv,\n                w: this.r * 2,\n                h: this.rv * 2\n            };\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Round;\n}(geometry_1.Geometry));\nexports.Round = Round;\n\n\n//# sourceURL=webpack:///./src/core/geometries/round.ts?");

/***/ }),

/***/ "./src/core/geometry.ts":
/*!******************************!*\
  !*** ./src/core/geometry.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Geometry = /** @class */ (function () {\n    function Geometry() {\n        this.angle = 0;\n    }\n    Object.defineProperty(Geometry.prototype, \"center\", {\n        get: function () {\n            var bound = this.bound;\n            return {\n                x: bound.x + Math.round(bound.w / 2),\n                y: bound.y + Math.round(bound.h / 2)\n            };\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Geometry.prototype.clone = function () {\n        var geometry = {};\n        Object.setPrototypeOf(geometry, this);\n        return geometry;\n    };\n    return Geometry;\n}());\nexports.Geometry = Geometry;\n\n\n//# sourceURL=webpack:///./src/core/geometry.ts?");

/***/ }),

/***/ "./src/core/helpers/async/debounce.ts":
/*!********************************************!*\
  !*** ./src/core/helpers/async/debounce.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar setTimeout_1 = __webpack_require__(/*! ./setTimeout */ \"./src/core/helpers/async/setTimeout.ts\");\n/**\n * Debouncing enforces that a function not be called again until a certain amount of time has passed without\n * it being called. As in \"execute this function only if 100 milliseconds have passed without it being called.\"\n *\n * @method debounce\n * @param {function} fn\n * @param {int} timeout\n * @param {boolean} [invokeAsap] - execute fn on first call without timeout\n * @param {context} [ctx] Context\n * @return {function}\n * @example\n * ```javascript\n * var jodit = new Jodit('.editor');\n * Jodit.modules.Dom(\"input\").on('keydown', jodit.helper.debounce(function() {\n *     // Do expensive things\n * }, 100));\n * ```\n */\nexports.debounce = function (fn, timeout, invokeAsap, ctx) {\n    if (arguments.length === 3 && typeof invokeAsap !== 'boolean') {\n        ctx = invokeAsap;\n        invokeAsap = false;\n    }\n    var timer = 0;\n    return function () {\n        var args = arguments;\n        var context = ctx || this;\n        if ((invokeAsap && !timer) || !timeout) {\n            fn.apply(context, args);\n        }\n        if (timeout) {\n            clearTimeout(timer);\n            timer = setTimeout_1.setTimeout(function () {\n                if (!invokeAsap) {\n                    fn.apply(context, args);\n                }\n                timer = 0;\n            }, timeout);\n        }\n    };\n};\n\n\n//# sourceURL=webpack:///./src/core/helpers/async/debounce.ts?");

/***/ }),

/***/ "./src/core/helpers/async/index.ts":
/*!*****************************************!*\
  !*** ./src/core/helpers/async/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./debounce */ \"./src/core/helpers/async/debounce.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./setTimeout */ \"./src/core/helpers/async/setTimeout.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./throttle */ \"./src/core/helpers/async/throttle.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/core/helpers/async/index.ts?");

/***/ }),

/***/ "./src/core/helpers/async/setTimeout.ts":
/*!**********************************************!*\
  !*** ./src/core/helpers/async/setTimeout.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Create async callback if set timeout value - else call function immediately\n *\n * @param callback\n * @param timeout\n * @param a1\n * @param a2\n * @param a3\n */\nexports.setTimeout = function (callback, timeout, a1, a2, a3) {\n    if (!timeout) {\n        callback.call(null, a1, a2, a3);\n    }\n    else {\n        return window.setTimeout.call(window, callback, timeout, a1, a2, a3);\n    }\n    return 0;\n};\n\n\n//# sourceURL=webpack:///./src/core/helpers/async/setTimeout.ts?");

/***/ }),

/***/ "./src/core/helpers/async/throttle.ts":
/*!********************************************!*\
  !*** ./src/core/helpers/async/throttle.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar setTimeout_1 = __webpack_require__(/*! ./setTimeout */ \"./src/core/helpers/async/setTimeout.ts\");\n/**\n * Throttling enforces a maximum number of times a function can be called over time.\n * As in \"execute this function at most once every 100 milliseconds.\"\n *\n * @method throttle\n * @param {function} fn\n * @param {int} timeout\n * @param {context} [ctx] Context\n * @return {function}\n * @example\n * ```javascript\n * var jodit = new Jodit('.editor');\n * jodit.events.on(document.body, 'scroll', jodit.helper.throttle(function() {\n *     // Do expensive things\n * }, 100));\n * ```\n */\nexports.throttle = function (fn, timeout, ctx) {\n    var timer = null, args, needInvoke, callee;\n    return function () {\n        args = arguments;\n        needInvoke = true;\n        var context = ctx || this;\n        if (!timeout) {\n            fn.apply(context, args);\n            return;\n        }\n        if (!timer) {\n            callee = function () {\n                if (needInvoke) {\n                    fn.apply(context, args);\n                    needInvoke = false;\n                    timer = setTimeout_1.setTimeout(callee, timeout);\n                }\n                else {\n                    timer = null;\n                }\n            };\n            callee();\n        }\n    };\n};\n\n\n//# sourceURL=webpack:///./src/core/helpers/async/throttle.ts?");

/***/ }),

/***/ "./src/core/helpers/distanceBetween.ts":
/*!*********************************************!*\
  !*** ./src/core/helpers/distanceBetween.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction distanceBetween(point1, point2) {\n    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));\n}\nexports.distanceBetween = distanceBetween;\n\n\n//# sourceURL=webpack:///./src/core/helpers/distanceBetween.ts?");

/***/ }),

/***/ "./src/core/helpers/font.ts":
/*!**********************************!*\
  !*** ./src/core/helpers/font.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Font = /** @class */ (function () {\n    function Font(size, family, style) {\n        if (size === void 0) { size = 20; }\n        if (family === void 0) { family = 'Arial'; }\n        if (style === void 0) { style = 'normal'; }\n        this.set(size, family, style);\n    }\n    Font.prototype.set = function (size, family, style) {\n        if (size === void 0) { size = 20; }\n        if (family === void 0) { family = 'Arial'; }\n        if (style === void 0) { style = 'normal'; }\n        this.size = size;\n        this.family = family;\n        this.style = style;\n    };\n    Font.prototype.toString = function () {\n        return this.style + \" \" + this.size + \"px \" + this.family;\n    };\n    return Font;\n}());\nexports.Font = Font;\n\n\n//# sourceURL=webpack:///./src/core/helpers/font.ts?");

/***/ }),

/***/ "./src/core/helpers/getBoundByMultiline.ts":
/*!*************************************************!*\
  !*** ./src/core/helpers/getBoundByMultiline.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getBoundByMultiline(points) {\n    if (points.length < 2) {\n        throw new Error('Need at least two points');\n    }\n    var bnd = {\n        x1: Infinity,\n        x2: -Infinity,\n        y1: Infinity,\n        y2: -Infinity\n    };\n    points.forEach(function (point) {\n        bnd.x1 = Math.min(point.x, bnd.x1);\n        bnd.y1 = Math.min(point.y, bnd.y1);\n        bnd.x2 = Math.max(point.x, bnd.x2);\n        bnd.y2 = Math.max(point.y, bnd.y2);\n    });\n    return {\n        x: bnd.x1,\n        y: bnd.y1,\n        w: bnd.x2 - bnd.x1,\n        h: bnd.y2 - bnd.y1\n    };\n}\nexports.getBoundByMultiline = getBoundByMultiline;\n\n\n//# sourceURL=webpack:///./src/core/helpers/getBoundByMultiline.ts?");

/***/ }),

/***/ "./src/core/helpers/getOppositeCorner.ts":
/*!***********************************************!*\
  !*** ./src/core/helpers/getOppositeCorner.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isInBound_1 = __webpack_require__(/*! ./isInBound */ \"./src/core/helpers/isInBound.ts\");\nexports.isSamePoint = function (a, b, tolerance) {\n    if (tolerance === void 0) { tolerance = 0.01; }\n    return isInBound_1.distance(a, b) <= tolerance;\n};\nexports.getOppositeCorner = function (bound, corner, angle) {\n    var vertices = isInBound_1.findRectVertices(bound, angle);\n    // tslint:disable-next-line:forin\n    for (var key in vertices) {\n        var cnr = vertices[key];\n        if (exports.isSamePoint(cnr, corner)) {\n            switch (key) {\n                case 'LT':\n                    return vertices.RB;\n                case 'RT':\n                    return vertices.LB;\n                case 'LB':\n                    return vertices.RT;\n                case 'RB':\n                    return vertices.LT;\n            }\n        }\n    }\n    return corner;\n};\n\n\n//# sourceURL=webpack:///./src/core/helpers/getOppositeCorner.ts?");

/***/ }),

/***/ "./src/core/helpers/index.ts":
/*!***********************************!*\
  !*** ./src/core/helpers/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./async */ \"./src/core/helpers/async/index.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./distanceBetween */ \"./src/core/helpers/distanceBetween.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./font */ \"./src/core/helpers/font.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./getBoundByMultiline */ \"./src/core/helpers/getBoundByMultiline.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./getOppositeCorner */ \"./src/core/helpers/getOppositeCorner.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./isDictionary */ \"./src/core/helpers/isDictionary.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./isInBound */ \"./src/core/helpers/isInBound.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./isInRound */ \"./src/core/helpers/isInRound.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./isOnLine */ \"./src/core/helpers/isOnLine.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./mergeDeep */ \"./src/core/helpers/mergeDeep.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./rgb */ \"./src/core/helpers/rgb.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./ucfirst */ \"./src/core/helpers/ucfirst.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/core/helpers/index.ts?");

/***/ }),

/***/ "./src/core/helpers/isDictionary.ts":
/*!******************************************!*\
  !*** ./src/core/helpers/isDictionary.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isDictionary(obj) {\n    return (typeof obj === 'object' &&\n        obj !== null &&\n        obj.constructor.name === 'Object' &&\n        !Array.isArray(obj));\n}\nexports.isDictionary = isDictionary;\n\n\n//# sourceURL=webpack:///./src/core/helpers/isDictionary.ts?");

/***/ }),

/***/ "./src/core/helpers/isInBound.ts":
/*!***************************************!*\
  !*** ./src/core/helpers/isInBound.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isInBound(point, box, tolerance) {\n    if (tolerance === void 0) { tolerance = 0; }\n    return (point.x >= box.x - tolerance &&\n        point.y >= box.y - tolerance &&\n        point.x <= box.x + box.w + tolerance &&\n        point.y <= box.y + box.h + tolerance);\n}\nexports.isInBound = isInBound;\nfunction getPerpOfLine(start, end) {\n    var x = (start.x + end.x) / 2;\n    var y = (start.y + end.y) / 2;\n    var dx = (end.x - start.x) / 3;\n    var dy = (end.y - start.y) / 3;\n    return [\n        { x: x, y: y },\n        {\n            x: x + dy,\n            y: y - dx\n        }\n    ];\n}\nexports.getPerpOfLine = getPerpOfLine;\n/**\n * Find point after rotation around another point by X degrees\n *\n * @param point The point to be rotated [X,Y]\n * @param rotationCenterPoint The point that should be rotated around [X,Y]\n * @param degrees The degrees to rotate the point\n * @return Returns point after rotation [X,Y]\n */\nfunction rotatePoint(point, rotationCenterPoint, degrees) {\n    // Using radians for this formula\n    var radians = (degrees * Math.PI) / 180;\n    var x = point.x, y = point.y;\n    // Translate the plane on which rotation is occurring.\n    // We want to rotate around 0,0. We'll add these back later.\n    x -= rotationCenterPoint.x;\n    y -= rotationCenterPoint.y;\n    // Perform the rotation\n    var newPoint = { x: 0, y: 0 };\n    newPoint.x = x * Math.cos(radians) - y * Math.sin(radians);\n    newPoint.y = x * Math.sin(radians) + y * Math.cos(radians);\n    // Translate the plane back to where it was.\n    newPoint.x += rotationCenterPoint.x;\n    newPoint.y += rotationCenterPoint.y;\n    return newPoint;\n}\n/**\n * Find the vertices of a rotating rectangle\n *\n * @param bound From left, top [X,Y]\n * @param degrees Degrees rotated around center\n * @return {Object} Arrays LT, RT, RB, LB [X,Y]\n */\nfunction findRectVertices(bound, degrees) {\n    var left = bound.x;\n    var right = bound.x + bound.w;\n    var top = bound.y;\n    var bottom = bound.y + bound.h;\n    var center = { x: left + bound.w / 2, y: top + bound.h / 2 };\n    var LTN = { x: left, y: top };\n    var RTN = { x: right, y: top };\n    var RBN = { x: right, y: bottom };\n    var LBN = { x: left, y: bottom };\n    var LT = rotatePoint(LTN, center, degrees);\n    var RT = rotatePoint(RTN, center, degrees);\n    return {\n        LT: LT,\n        RT: RT,\n        RB: rotatePoint(RBN, center, degrees),\n        LB: rotatePoint(LBN, center, degrees),\n        CT: getPerpOfLine(LT, RT)[1]\n    };\n}\nexports.findRectVertices = findRectVertices;\n/**\n * Distance formula\n *\n * @param {Array} p1 First point [X,Y]\n * @param {Array} p2 Second point [X,Y]\n * @return {Number} Returns distance between points\n */\nfunction distance(p1, p2) {\n    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));\n}\nexports.distance = distance;\n/**\n * Heron's formula (triangle area)\n *\n * @param {Number} d1 Distance, side 1\n * @param {Number} d2 Distance, side 2\n * @param {Number} d3 Distance, side 3\n * @return {Number} Returns area of triangle\n */\nfunction triangleArea(d1, d2, d3) {\n    // See https://en.wikipedia.org/wiki/Heron's_formula\n    var s = (d1 + d2 + d3) / 2;\n    return Math.sqrt(s * (s - d1) * (s - d2) * (s - d3));\n}\nfunction isInRotatedBound(point, box, angle, extra) {\n    if (extra === void 0) { extra = 5; }\n    // Find the area of the rectangle\n    var rectArea = (box.w + extra * 2) * (box.h + extra * 2);\n    // Find the vertices\n    var vertices = findRectVertices({\n        x: box.x - extra,\n        y: box.y - extra,\n        w: box.w + extra * 2,\n        h: box.h + extra * 2\n    }, angle);\n    // Create an array of the areas of the four triangles\n    var triAreaTriangles = [\n        // Click, LT, RT\n        triangleArea(distance(point, vertices.LT), distance(vertices.LT, vertices.RT), distance(vertices.RT, point)),\n        // Click, RT, RB\n        triangleArea(distance(point, vertices.RT), distance(vertices.RT, vertices.RB), distance(vertices.RB, point)),\n        // Click, RB, LB\n        triangleArea(distance(point, vertices.RB), distance(vertices.RB, vertices.LB), distance(vertices.LB, point)),\n        // Click, LB, LT\n        triangleArea(distance(point, vertices.LB), distance(vertices.LB, vertices.LT), distance(vertices.LT, point))\n    ];\n    // Reduce this array with a sum function\n    // Round to avoid small JS math differences\n    var triArea = triAreaTriangles.reduce(function (a, b) { return a + b; });\n    return Math.abs(triArea - rectArea) < 0.01;\n}\nexports.isInRotatedBound = isInRotatedBound;\nexports.angle = function (p) {\n    return (Math.atan2(p.y, p.x) * 180) / Math.PI;\n};\n\n\n//# sourceURL=webpack:///./src/core/helpers/isInBound.ts?");

/***/ }),

/***/ "./src/core/helpers/isInRound.ts":
/*!***************************************!*\
  !*** ./src/core/helpers/isInRound.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isInRound(point, round) {\n    return (Math.sqrt(Math.pow(point.x - round.x, 2) + Math.pow(point.y - round.y, 2)) < round.r);\n}\nexports.isInRound = isInRound;\n\n\n//# sourceURL=webpack:///./src/core/helpers/isInRound.ts?");

/***/ }),

/***/ "./src/core/helpers/isOnLine.ts":
/*!**************************************!*\
  !*** ./src/core/helpers/isOnLine.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isInBound_1 = __webpack_require__(/*! ./isInBound */ \"./src/core/helpers/isInBound.ts\");\nfunction isOnLine(p, line, tolerance) {\n    if (tolerance === void 0) { tolerance = 5; }\n    var c = isInBound_1.distance(line[0], line[1]);\n    var a = isInBound_1.distance(line[0], p);\n    var b = isInBound_1.distance(line[1], p);\n    return Math.abs(a + b - c) < tolerance;\n}\nexports.isOnLine = isOnLine;\n\n\n//# sourceURL=webpack:///./src/core/helpers/isOnLine.ts?");

/***/ }),

/***/ "./src/core/helpers/mergeDeep.ts":
/*!***************************************!*\
  !*** ./src/core/helpers/mergeDeep.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/core/helpers/index.ts\");\nfunction mergeDeep() {\n    var objects = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        objects[_i] = arguments[_i];\n    }\n    return objects.reduce(function (prev, obj) {\n        if (index_1.isDictionary(obj)) {\n            Object.keys(obj).forEach(function (key) {\n                var pVal = prev[key];\n                var oVal = obj[key];\n                if (Array.isArray(pVal) && Array.isArray(oVal)) {\n                    prev[key] = pVal.concat.apply(pVal, oVal);\n                }\n                else if (index_1.isDictionary(pVal) && index_1.isDictionary(oVal)) {\n                    prev[key] = mergeDeep(pVal, oVal);\n                }\n                else {\n                    prev[key] = oVal;\n                }\n            });\n        }\n        return prev;\n    }, {});\n}\nexports.mergeDeep = mergeDeep;\n\n\n//# sourceURL=webpack:///./src/core/helpers/mergeDeep.ts?");

/***/ }),

/***/ "./src/core/helpers/rgb.ts":
/*!*********************************!*\
  !*** ./src/core/helpers/rgb.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar RGB = /** @class */ (function () {\n    function RGB(r, g, b) {\n        if (r === void 0) { r = 0; }\n        if (g === void 0) { g = 0; }\n        if (b === void 0) { b = 0; }\n        this.set(r, g, b);\n    }\n    RGB.prototype.set = function (r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    };\n    Object.defineProperty(RGB.prototype, \"hex\", {\n        get: function () {\n            return ('#' +\n                ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)\n                    .toString(16)\n                    .slice(1));\n        },\n        set: function (value) {\n            if (value.length < 6) {\n                value = value.replace(/([A-F0-9])/gi, '$1$1');\n            }\n            var bigint = parseInt(value.indexOf('#') === 0 ? value.substr(1) : value, 16);\n            this.r = (bigint >> 16) & 255;\n            this.g = (bigint >> 8) & 255;\n            this.b = bigint & 255;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    RGB.prototype.toString = function () {\n        return this.hex;\n    };\n    return RGB;\n}());\nexports.RGB = RGB;\n\n\n//# sourceURL=webpack:///./src/core/helpers/rgb.ts?");

/***/ }),

/***/ "./src/core/helpers/ucfirst.ts":
/*!*************************************!*\
  !*** ./src/core/helpers/ucfirst.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ucfirst = function (str) { return str[0].toUpperCase() + str.substr(1); };\n\n\n//# sourceURL=webpack:///./src/core/helpers/ucfirst.ts?");

/***/ }),

/***/ "./src/core/layer.ts":
/*!***************************!*\
  !*** ./src/core/layer.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar helpers_1 = __webpack_require__(/*! ./helpers/ */ \"./src/core/helpers/index.ts\");\nvar const_1 = __webpack_require__(/*! ../const */ \"./src/const.ts\");\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/core/api.ts\");\nvar Layer = /** @class */ (function () {\n    function Layer(api, shapes) {\n        var _this = this;\n        if (shapes === void 0) { shapes = []; }\n        this.api = api;\n        this.__shapes = [];\n        this.transforms = [];\n        if (!api || !(api instanceof api_1.Api)) {\n            throw new Error('Need Api instance in first argument');\n        }\n        this.transforms.push(api.mainTransforms.offset, api.mainTransforms.zoom);\n        shapes.forEach(function (shape) { return _this.add(shape); });\n    }\n    Object.defineProperty(Layer.prototype, \"shapes\", {\n        get: function () {\n            return this.__shapes;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Layer.prototype.add = function (shape) {\n        var index = this.__shapes.indexOf(shape);\n        if (index === -1) {\n            this.__shapes.push(shape);\n        }\n        shape.setLayer(this);\n        return this;\n    };\n    Layer.prototype.remove = function (shape) {\n        var index = this.__shapes.indexOf(shape);\n        shape.setLayer(null);\n        if (index !== -1) {\n            this.__shapes.splice(index, 1);\n        }\n        return this;\n    };\n    Layer.prototype.draw = function (render, opt) {\n        this.shapes.forEach(function (shape) {\n            shape.draw(render, opt);\n        });\n    };\n    Layer.prototype.fire = function (eventName, e) {\n        this.shapes.forEach(function (shape) {\n            if (helpers_1.isInRotatedBound(e, shape.bound, shape.geometry.angle, const_1.HANDLE_RADIUS)) {\n                var es = tslib_1.__assign({}, e, { shape: shape });\n                e.api.events.fire('shape.' + eventName, es);\n                shape.fire(eventName, e);\n            }\n        });\n    };\n    return Layer;\n}());\nexports.Layer = Layer;\n\n\n//# sourceURL=webpack:///./src/core/layer.ts?");

/***/ }),

/***/ "./src/core/manager.ts":
/*!*****************************!*\
  !*** ./src/core/manager.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar style_1 = __webpack_require__(/*! ./style */ \"./src/core/style.ts\");\nvar helpers_1 = __webpack_require__(/*! ./helpers/ */ \"./src/core/helpers/index.ts\");\nvar const_1 = __webpack_require__(/*! ../const */ \"./src/const.ts\");\nvar Manager = /** @class */ (function () {\n    function Manager(shape) {\n        this.shape = shape;\n        this.styles = {\n            round: new style_1.Style({\n                fillColor: '#0d80ff',\n                dash: [],\n                color: '#005d7f'\n            }),\n            line: new style_1.Style({\n                fillColor: '#0d80ff',\n                opacity: 0.3,\n                dash: [5, 1],\n                color: '#005d7f'\n            }),\n            active: new style_1.Style({\n                fillColor: '#00b8ff',\n                dash: [5, 1],\n                color: '#cccccc'\n            })\n        };\n    }\n    Manager.prototype.getBoundLines = function (bound, angle) {\n        var realBox = helpers_1.findRectVertices(bound, angle);\n        return [\n            [realBox.LT, realBox.RT],\n            [realBox.RT, realBox.RB],\n            [realBox.LB, realBox.RB],\n            [realBox.LT, realBox.LB],\n            helpers_1.getPerpOfLine(realBox.LT, realBox.RT)\n        ];\n    };\n    Manager.prototype.getHandles = function (bound, angle) {\n        var realBox = helpers_1.findRectVertices(bound, angle);\n        return [\n            tslib_1.__assign({ type: 'LT' }, realBox.LT, { r: const_1.HANDLE_RADIUS }),\n            tslib_1.__assign({ type: 'RT' }, realBox.RT, { r: const_1.HANDLE_RADIUS }),\n            tslib_1.__assign({ type: 'RB' }, realBox.RB, { r: const_1.HANDLE_RADIUS }),\n            tslib_1.__assign({ type: 'LB' }, realBox.LB, { r: const_1.HANDLE_RADIUS }),\n            tslib_1.__assign({ type: 'CT' }, realBox.CT, { r: const_1.HANDLE_RADIUS }),\n            {\n                type: 'CT',\n                x: bound.x + bound.w / 2,\n                y: bound.y + bound.h / 2,\n                r: const_1.HANDLE_RADIUS\n            }\n        ];\n    };\n    Manager.prototype.draw = function (render, cursor) {\n        var _this = this;\n        render.save();\n        render.setStyle(this.styles.line);\n        var geometry = this.shape.geometry, bound = this.shape.bound;\n        var lines = this.getBoundLines(bound, geometry.angle);\n        lines.forEach(function (line) {\n            render.setStyle(helpers_1.isOnLine(cursor, line) ? _this.styles.active : _this.styles.line);\n            render.drawLine(line[0], line[1]);\n        });\n        var corners = this.getHandles(bound, geometry.angle);\n        corners.forEach(function (corner) {\n            render.setStyle(helpers_1.isInRound(cursor, corner)\n                ? _this.styles.active\n                : _this.styles.round);\n            render.drawCircle(corner, true);\n        });\n        render.restore();\n    };\n    Manager.prototype.checkEvent = function (eventName, e) {\n        var bound = this.shape.bound;\n        var geometry = this.shape.geometry;\n        var es = tslib_1.__assign({}, e, { shape: this.shape });\n        this.getBoundLines(bound, geometry.angle).forEach(function (line) {\n            if (helpers_1.isOnLine(e, line)) {\n                e.api.events.fire('border.' + eventName, es, line);\n            }\n        });\n        this.getHandles(bound, geometry.angle).forEach(function (corner) {\n            if (helpers_1.isInRound(e, corner)) {\n                e.api.events.fire('corner.' + eventName, tslib_1.__assign({}, es, { corner: corner }));\n            }\n        });\n    };\n    return Manager;\n}());\nexports.Manager = Manager;\n\n\n//# sourceURL=webpack:///./src/core/manager.ts?");

/***/ }),

/***/ "./src/core/observe/eventer.ts":
/*!*************************************!*\
  !*** ./src/core/observe/eventer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar Eventer = /** @class */ (function () {\n    function Eventer(host) {\n        this.host = host;\n        this.listeners = {};\n    }\n    Eventer.prototype.on = function (event, callback) {\n        var eventName = event.toLowerCase();\n        if (!this.listeners[eventName]) {\n            this.listeners[eventName] = [];\n        }\n        this.listeners[eventName].push(callback);\n        return this;\n    };\n    Eventer.prototype.fire = function (event, args) {\n        var _this = this;\n        var eventName = event.toLowerCase();\n        if (this.listeners[eventName]) {\n            this.listeners[eventName].forEach(function (callback) {\n                return callback.call(_this.host, tslib_1.__assign({ type: eventName }, args));\n            });\n        }\n        return this;\n    };\n    return Eventer;\n}());\nexports.Eventer = Eventer;\n\n\n//# sourceURL=webpack:///./src/core/observe/eventer.ts?");

/***/ }),

/***/ "./src/core/render.ts":
/*!****************************!*\
  !*** ./src/core/render.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar style_1 = __webpack_require__(/*! ./style */ \"./src/core/style.ts\");\nvar Render = /** @class */ (function () {\n    function Render(width, height) {\n        if (width === void 0) { width = 400; }\n        if (height === void 0) { height = 400; }\n        this.container = null;\n        this.state = {\n            width: 0,\n            height: 0\n        };\n        this.defaultStyle = new style_1.Style();\n        this.makeCanvas(width, height);\n    }\n    Render.prototype.getContainer = function () {\n        return this.container;\n    };\n    Render.create = function (width, height) {\n        return new Render(width, height);\n    };\n    Render.prototype.makeCanvas = function (width, height) {\n        var canvas = document.createElement('canvas');\n        canvas.style.userSelect = 'none';\n        canvas.style.touchAction = 'none';\n        if (!canvas) {\n            throw new Error('Canvas was not created');\n        }\n        var ctx = canvas.getContext('2d');\n        if (!ctx) {\n            throw new Error('Canvas context was not created');\n        }\n        this.context = ctx;\n        this.container = canvas;\n        this.setSize(width, height);\n    };\n    Render.prototype.changeSize = function (width, height) {\n        if (!this.container) {\n            return;\n        }\n        this.context.canvas.width = width;\n        this.context.canvas.height = height;\n        this.container.style.width = width + 'px';\n        this.container.style.height = height + 'px';\n    };\n    Render.prototype.setZoom = function (value) {\n        this.context.scale(value, value);\n    };\n    Render.prototype.setSize = function (width, height) {\n        if (width !== this.state.width || height !== this.state.height) {\n            this.changeSize(width, height);\n            this.state.width = width;\n            this.state.height = height;\n        }\n    };\n    Render.prototype.clear = function () {\n        this.context.clearRect(0, 0, this.state.width, this.state.height);\n    };\n    Render.prototype.drawPoint = function (point) {\n        this.context.fillRect(point.x, point.y, 1, 1);\n    };\n    Render.prototype.drawImage = function (image, bound) {\n        this.context.drawImage(image, bound.x, bound.y, bound.w, bound.h);\n    };\n    Render.prototype.drawCircle = function (round, fill) {\n        if (fill === void 0) { fill = false; }\n        this.context.beginPath();\n        if (round.r === round.rv || !round.rv) {\n            this.context.arc(round.x, round.y, round.r, 0, 2 * Math.PI);\n        }\n        else {\n            this.context.ellipse(round.x, round.y, round.r, round.rv, 0, 0, 2 * Math.PI);\n        }\n        if (fill) {\n            this.context.fill();\n        }\n        this.context.stroke();\n    };\n    Render.prototype.drawPolyline = function (points) {\n        if (points.length < 2) {\n            return;\n        }\n        this.context.beginPath();\n        this.context.moveTo(points[0].x, points[0].y);\n        for (var i = 1; i < points.length - 2; i += 1) {\n            var xc = (points[i].x + points[i + 1].x) / 2, yc = (points[i].y + points[i + 1].y) / 2;\n            this.context.quadraticCurveTo(points[i].x, points[i].y, xc, yc);\n        }\n        this.context.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 2 + 1].x, points[points.length - 2 + 1].y);\n        this.context.stroke();\n    };\n    Render.prototype.drawLine = function (pointA, pointB) {\n        this.context.beginPath();\n        this.context.moveTo(pointA.x, pointA.y);\n        this.context.lineTo(pointB.x, pointB.y);\n        this.context.stroke();\n    };\n    Render.prototype.drawRectangle = function (bound, fill) {\n        this.context.beginPath();\n        if (fill) {\n            this.context.fillRect(bound.x, bound.y, bound.w, bound.h);\n        }\n        else {\n            this.context.rect(bound.x, bound.y, bound.w, bound.h);\n        }\n        this.context.stroke();\n    };\n    Render.prototype.drawCursor = function (_a) {\n        var x = _a.x, y = _a.y;\n        this.context.beginPath();\n        this.context.lineWidth = 1;\n        this.context.setLineDash([2, 2]);\n        this.context.moveTo(x, y - 5);\n        this.context.lineTo(x, y - 5);\n        this.context.lineTo(x, y + 5);\n        this.context.moveTo(x - 5, y);\n        this.context.lineTo(x - 5, y);\n        this.context.lineTo(x + 5, y);\n        this.context.stroke();\n        this.context.setLineDash([]);\n    };\n    Render.prototype.drawText = function (_a, text) {\n        var x = _a.x, y = _a.y;\n        this.context.fillText(text, x, y);\n    };\n    Render.prototype.measureText = function (text) {\n        var metrics = this.context.measureText(text);\n        return {\n            x: 0,\n            y: 0,\n            w: metrics.width,\n            h: this.currentStyle.font.size\n        };\n    };\n    Render.prototype.setStyle = function (style) {\n        this.currentStyle = style;\n        this.context.strokeStyle = style.color.hex;\n        this.context.fillStyle = style.fillColor.hex;\n        this.context.lineWidth = style.strokeWidth;\n        this.context.lineCap = style.lineCap;\n        this.context.font = style.font.toString();\n        this.context.textBaseline = style.textBaseline;\n        this.context.globalAlpha = 1 - style.opacity;\n        this.context.setLineDash(style.dash);\n    };\n    Render.prototype.resetStyle = function () {\n        this.setStyle(this.defaultStyle);\n    };\n    Render.prototype.rotate = function (point, angle) {\n        this.context.translate(point.x, point.y);\n        this.context.rotate((angle * Math.PI) / 180);\n        this.context.translate(-point.x, -point.y);\n    };\n    Render.prototype.save = function () {\n        this.context.save();\n    };\n    Render.prototype.restore = function () {\n        this.context.restore();\n    };\n    return Render;\n}());\nexports.Render = Render;\n\n\n//# sourceURL=webpack:///./src/core/render.ts?");

/***/ }),

/***/ "./src/core/shape.ts":
/*!***************************!*\
  !*** ./src/core/shape.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar transform_1 = __webpack_require__(/*! ./transform */ \"./src/core/transform.ts\");\nvar manager_1 = __webpack_require__(/*! ./manager */ \"./src/core/manager.ts\");\nvar Shape = /** @class */ (function () {\n    function Shape() {\n        this.layer = null;\n        this.transforms = [];\n        this.manager = new manager_1.Manager(this);\n    }\n    Object.defineProperty(Shape.prototype, \"bound\", {\n        get: function () {\n            return this.geometry.bound;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Shape.prototype.setLayer = function (layer) {\n        this.layer = layer;\n    };\n    Object.defineProperty(Shape.prototype, \"geometry\", {\n        get: function () {\n            return this.applyTransforms(transform_1.GeometryTransform).geometry;\n        },\n        set: function (value) {\n            this.__geometry = value;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Shape.prototype, \"simpleGeometry\", {\n        get: function () {\n            return this.__geometry;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Shape.prototype.applyTransforms = function (type) {\n        return transform_1.Transform.applyAll(this.layer && this.layer.transforms.length\n            ? this.transforms.concat(this.layer.transforms)\n            : this.transforms, {\n            geometry: this.__geometry,\n            style: this.__style\n        }, type);\n    };\n    Object.defineProperty(Shape.prototype, \"style\", {\n        get: function () {\n            return this.applyTransforms(transform_1.StyleTransform).style;\n        },\n        set: function (value) {\n            this.__style = value;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Shape.prototype, \"simpleStyle\", {\n        get: function () {\n            return this.__style;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Shape.prototype.draw = function (render, opt) {\n        render.save();\n        render.setStyle(this.style);\n        var geometry = this.geometry;\n        if (geometry.angle) {\n            render.rotate(geometry.center, geometry.angle);\n        }\n        this.drawGeometry(render, opt);\n        render.restore();\n    };\n    Shape.prototype.fire = function (eventName, e) {\n        this.manager.checkEvent(eventName, e);\n    };\n    return Shape;\n}());\nexports.Shape = Shape;\n\n\n//# sourceURL=webpack:///./src/core/shape.ts?");

/***/ }),

/***/ "./src/core/style.ts":
/*!***************************!*\
  !*** ./src/core/style.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/core/helpers/index.ts\");\nvar Style = /** @class */ (function () {\n    function Style(raw) {\n        var _this = this;\n        this.color = new helpers_1.RGB();\n        this.fillColor = new helpers_1.RGB();\n        this.opacity = 0;\n        this.strokeWidth = 1;\n        this.lineCap = 'round';\n        this.dash = [];\n        this.textBaseline = 'top';\n        this.font = new helpers_1.Font();\n        if (raw) {\n            Object.keys(raw).forEach(function (key) {\n                _this.set(key, raw[key]);\n            });\n        }\n    }\n    Style.prototype.set = function (key, value) {\n        if (value !== undefined) {\n            switch (key) {\n                case 'font':\n                    if (value instanceof helpers_1.Font) {\n                        this.font.set(value.size, value.family, value.style);\n                    }\n                    break;\n                case 'fillColor':\n                case 'color':\n                    this[key].hex = value.toString();\n                    break;\n                default:\n                    this[key] = value;\n            }\n        }\n    };\n    Style.prototype.clone = function () {\n        var _this = this;\n        var style = new Style();\n        Object.keys(this).forEach(function (key) {\n            style.set(key, _this[key]);\n        });\n        return style;\n    };\n    return Style;\n}());\nexports.Style = Style;\n\n\n//# sourceURL=webpack:///./src/core/style.ts?");

/***/ }),

/***/ "./src/core/transform.ts":
/*!*******************************!*\
  !*** ./src/core/transform.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar Transform = /** @class */ (function () {\n    function Transform() {\n    }\n    Transform.applyAll = function (transforms, record, type) {\n        if (type === void 0) { type = GeometryTransform; }\n        return transforms\n            .filter(function (transform) {\n            return transform instanceof type ||\n                transform instanceof BothTransform;\n        })\n            .reduce(function (record, transformation) { return transformation.apply(record); }, record);\n    };\n    return Transform;\n}());\nexports.Transform = Transform;\nvar StyleTransform = /** @class */ (function (_super) {\n    tslib_1.__extends(StyleTransform, _super);\n    function StyleTransform() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return StyleTransform;\n}(Transform));\nexports.StyleTransform = StyleTransform;\nvar GeometryTransform = /** @class */ (function (_super) {\n    tslib_1.__extends(GeometryTransform, _super);\n    function GeometryTransform() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    GeometryTransform.prototype.setValue = function (sx, sy) {\n        if (sy === void 0) { sy = sx; }\n        this.x = sx;\n        this.y = sy;\n    };\n    return GeometryTransform;\n}(Transform));\nexports.GeometryTransform = GeometryTransform;\nvar BothTransform = /** @class */ (function (_super) {\n    tslib_1.__extends(BothTransform, _super);\n    function BothTransform() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return BothTransform;\n}(GeometryTransform));\nexports.BothTransform = BothTransform;\n\n\n//# sourceURL=webpack:///./src/core/transform.ts?");

/***/ }),

/***/ "./src/core/transforms/index.ts":
/*!**************************************!*\
  !*** ./src/core/transforms/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./opacity */ \"./src/core/transforms/opacity.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./scale */ \"./src/core/transforms/scale.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./strokeWidth */ \"./src/core/transforms/strokeWidth.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./translate */ \"./src/core/transforms/translate.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./zoom */ \"./src/core/transforms/zoom.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./rotate */ \"./src/core/transforms/rotate.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/core/transforms/index.ts?");

/***/ }),

/***/ "./src/core/transforms/opacity.ts":
/*!****************************************!*\
  !*** ./src/core/transforms/opacity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar transform_1 = __webpack_require__(/*! ../transform */ \"./src/core/transform.ts\");\nvar Opacity = /** @class */ (function (_super) {\n    tslib_1.__extends(Opacity, _super);\n    function Opacity(opacity) {\n        var _this = _super.call(this) || this;\n        _this.opacity = 1;\n        _this.opacity = opacity;\n        return _this;\n    }\n    Opacity.prototype.apply = function (record) {\n        if (record.style.opacity !== this.opacity) {\n            var style = record.style.clone();\n            style.opacity = this.opacity;\n            return tslib_1.__assign({}, record, { style: style });\n        }\n        return record;\n    };\n    return Opacity;\n}(transform_1.StyleTransform));\nexports.Opacity = Opacity;\n\n\n//# sourceURL=webpack:///./src/core/transforms/opacity.ts?");

/***/ }),

/***/ "./src/core/transforms/rotate.ts":
/*!***************************************!*\
  !*** ./src/core/transforms/rotate.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar transform_1 = __webpack_require__(/*! ../transform */ \"./src/core/transform.ts\");\nvar Rotate = /** @class */ (function (_super) {\n    tslib_1.__extends(Rotate, _super);\n    function Rotate(angle) {\n        if (angle === void 0) { angle = 0; }\n        var _this = _super.call(this) || this;\n        _this.angle = 0;\n        _this.angle = angle;\n        return _this;\n    }\n    Rotate.prototype.apply = function (r) {\n        var geometry = r.geometry.clone();\n        geometry.angle = this.angle;\n        return tslib_1.__assign({}, r, { geometry: geometry });\n    };\n    return Rotate;\n}(transform_1.GeometryTransform));\nexports.Rotate = Rotate;\n\n\n//# sourceURL=webpack:///./src/core/transforms/rotate.ts?");

/***/ }),

/***/ "./src/core/transforms/scale.ts":
/*!**************************************!*\
  !*** ./src/core/transforms/scale.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar transform_1 = __webpack_require__(/*! ../transform */ \"./src/core/transform.ts\");\nvar geometries_1 = __webpack_require__(/*! ../geometries */ \"./src/core/geometries/index.ts\");\nvar Scale = /** @class */ (function (_super) {\n    tslib_1.__extends(Scale, _super);\n    function Scale(sx, sy, origin) {\n        if (sx === void 0) { sx = 1; }\n        if (sy === void 0) { sy = sx; }\n        var _this = _super.call(this) || this;\n        _this.x = sx;\n        _this.y = sy;\n        _this.origin = origin;\n        return _this;\n    }\n    Scale.prototype.findNewCoordinate = function (s, p) {\n        var temp = [[0, 0], [0, 0]];\n        for (var i = 0; i < 2; i++) {\n            for (var j = 0; j < 1; j++) {\n                for (var k = 0; k < 2; k++) {\n                    temp[i][j] += s[i][k] * p[k][j];\n                }\n            }\n        }\n        p[0][0] = temp[0][0];\n        p[1][0] = temp[1][0];\n    };\n    Scale.prototype.apply = function (r) {\n        var _this = this;\n        if (this.x === 1 && this.y === 1) {\n            return r;\n        }\n        var g = r.geometry, origin = this.origin || g.bound;\n        if (g instanceof geometries_1.Round || g instanceof geometries_1.Bound) {\n            var w = g instanceof geometries_1.Round ? g.r : g.w, h = g instanceof geometries_1.Round ? g.rv : g.h, s = [[this.x, 0], [0, this.y]], start = [[g.x - origin.x, 0], [g.y - origin.y, 0]], end = [\n                [g.x - origin.x + w, 0],\n                [g.y - origin.y + h, 0]\n            ];\n            this.findNewCoordinate(s, start);\n            this.findNewCoordinate(s, end);\n            var params = [\n                start[0][0] + origin.x,\n                start[1][0] + origin.y,\n                end[0][0] + origin.x - (start[0][0] + origin.x),\n                end[1][0] + origin.y - (start[1][0] + origin.y)\n            ];\n            return tslib_1.__assign({}, r, { geometry: g instanceof geometries_1.Round\n                    ? new geometries_1.Round(params[0], params[1], params[2], params[3], g.angle)\n                    : new geometries_1.Bound(params[0], params[1], params[2], params[3], g.angle) });\n        }\n        if (g instanceof geometries_1.Multipoint) {\n            var s_1 = [[this.x, 0], [0, this.y]], ng_1 = new geometries_1.Multipoint(undefined, g.angle);\n            g.forEach(function (point) {\n                var p = [\n                    [point.x - origin.x, 0],\n                    [point.y - origin.y, 0]\n                ];\n                _this.findNewCoordinate(s_1, p);\n                ng_1.push(new geometries_1.Point(p[0][0] + origin.x, p[1][0] + origin.y));\n            });\n            return tslib_1.__assign({}, r, { geometry: ng_1 });\n        }\n        return r;\n    };\n    return Scale;\n}(transform_1.GeometryTransform));\nexports.Scale = Scale;\n\n\n//# sourceURL=webpack:///./src/core/transforms/scale.ts?");

/***/ }),

/***/ "./src/core/transforms/strokeWidth.ts":
/*!********************************************!*\
  !*** ./src/core/transforms/strokeWidth.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar transform_1 = __webpack_require__(/*! ../transform */ \"./src/core/transform.ts\");\nvar StrokeWidth = /** @class */ (function (_super) {\n    tslib_1.__extends(StrokeWidth, _super);\n    function StrokeWidth(strokeWidth) {\n        var _this = _super.call(this) || this;\n        _this.strokeWidth = 1;\n        _this.strokeWidth = strokeWidth;\n        return _this;\n    }\n    StrokeWidth.prototype.apply = function (record) {\n        if (record.style.strokeWidth !== this.strokeWidth) {\n            var style = record.style.clone();\n            style.strokeWidth = this.strokeWidth;\n            return tslib_1.__assign({}, record, { style: style });\n        }\n        return record;\n    };\n    return StrokeWidth;\n}(transform_1.StyleTransform));\nexports.StrokeWidth = StrokeWidth;\n\n\n//# sourceURL=webpack:///./src/core/transforms/strokeWidth.ts?");

/***/ }),

/***/ "./src/core/transforms/translate.ts":
/*!******************************************!*\
  !*** ./src/core/transforms/translate.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar transform_1 = __webpack_require__(/*! ../transform */ \"./src/core/transform.ts\");\nvar geometries_1 = __webpack_require__(/*! ../geometries */ \"./src/core/geometries/index.ts\");\nvar Translate = /** @class */ (function (_super) {\n    tslib_1.__extends(Translate, _super);\n    function Translate(x, y) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        var _this = _super.call(this) || this;\n        _this.x = x;\n        _this.y = y;\n        return _this;\n    }\n    Translate.prototype.apply = function (r) {\n        var _this = this;\n        if (this.x === 0 && this.y === 0) {\n            return r;\n        }\n        var g = r.geometry;\n        if (g instanceof geometries_1.Bound) {\n            return tslib_1.__assign({}, r, { geometry: new geometries_1.Bound(this.x + g.x, this.y + g.y, g.w, g.h, g.angle) });\n        }\n        if (g instanceof geometries_1.Point) {\n            return tslib_1.__assign({}, r, { geometry: new geometries_1.Point(this.x + g.x, this.y + g.y) });\n        }\n        if (g instanceof geometries_1.Round) {\n            return tslib_1.__assign({}, r, { geometry: new geometries_1.Round(this.x + g.x, this.y + g.y, g.r, g.rv, g.angle) });\n        }\n        if (g instanceof geometries_1.Multipoint) {\n            var ng = new geometries_1.Multipoint(undefined, g.angle);\n            return tslib_1.__assign({}, r, { geometry: g.reduce(function (ng, p) {\n                    ng.push(_this.apply(tslib_1.__assign({}, r, { geometry: p })).geometry);\n                    return ng;\n                }, ng) });\n        }\n        return r;\n    };\n    return Translate;\n}(transform_1.GeometryTransform));\nexports.Translate = Translate;\n\n\n//# sourceURL=webpack:///./src/core/transforms/translate.ts?");

/***/ }),

/***/ "./src/core/transforms/zoom.ts":
/*!*************************************!*\
  !*** ./src/core/transforms/zoom.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar transform_1 = __webpack_require__(/*! ../transform */ \"./src/core/transform.ts\");\nvar geometries_1 = __webpack_require__(/*! ../geometries */ \"./src/core/geometries/index.ts\");\nvar Zoom = /** @class */ (function (_super) {\n    tslib_1.__extends(Zoom, _super);\n    function Zoom(sx, sy) {\n        if (sx === void 0) { sx = 1; }\n        if (sy === void 0) { sy = sx; }\n        var _this = _super.call(this) || this;\n        _this.x = sx;\n        _this.y = sy;\n        return _this;\n    }\n    Zoom.prototype.apply = function (r) {\n        var zoom = this.x;\n        if (zoom === 1) {\n            return r;\n        }\n        var style = r.style.clone();\n        style.font.size = r.style.font.size * zoom;\n        var g = r.geometry;\n        if (g instanceof geometries_1.Round || g instanceof geometries_1.Bound) {\n            return {\n                style: style,\n                geometry: g instanceof geometries_1.Round\n                    ? new geometries_1.Round(g.x * zoom, g.y * zoom, g.r * zoom, g.rv * zoom, g.angle)\n                    : new geometries_1.Bound(g.x * zoom, g.y * zoom, g.w * zoom, g.h * zoom, g.angle)\n            };\n        }\n        if (g instanceof geometries_1.Multipoint) {\n            var ng_1 = new geometries_1.Multipoint(undefined, g.angle);\n            g.forEach(function (point) {\n                ng_1.push(new geometries_1.Point(point.x * zoom, point.y * zoom));\n            });\n            return {\n                style: style,\n                geometry: ng_1\n            };\n        }\n        return r;\n    };\n    return Zoom;\n}(transform_1.BothTransform));\nexports.Zoom = Zoom;\n\n\n//# sourceURL=webpack:///./src/core/transforms/zoom.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar api_1 = __webpack_require__(/*! ./core/api */ \"./src/core/api.ts\");\nvar layer_1 = __webpack_require__(/*! ./core/layer */ \"./src/core/layer.ts\");\nvar Transforms = __webpack_require__(/*! ./core/transforms */ \"./src/core/transforms/index.ts\");\nvar Geometries = __webpack_require__(/*! ./core/geometries */ \"./src/core/geometries/index.ts\");\nvar Shapes = __webpack_require__(/*! ./shapes */ \"./src/shapes/index.ts\");\nvar consts = __webpack_require__(/*! ./const */ \"./src/const.ts\");\nObject.keys(Shapes).forEach(function (key) {\n    api_1.Api.Shapes[key] = Shapes[key];\n});\nObject.keys(Geometries).forEach(function (key) {\n    api_1.Api.Geometries[key] = Geometries[key];\n});\nObject.keys(Transforms).forEach(function (key) {\n    api_1.Api.Transforms[key] = Transforms[key];\n});\napi_1.Api.Layer = layer_1.Layer;\nObject.keys(consts).forEach(function (key) {\n    api_1.Api[key] = consts[key];\n});\nexports.PaintApi = api_1.Api;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/shapes/bitmap.ts":
/*!******************************!*\
  !*** ./src/shapes/bitmap.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar geometries_1 = __webpack_require__(/*! ../core/geometries/ */ \"./src/core/geometries/index.ts\");\nvar style_1 = __webpack_require__(/*! ../core/style */ \"./src/core/style.ts\");\nvar Bitmap = /** @class */ (function (_super) {\n    tslib_1.__extends(Bitmap, _super);\n    function Bitmap(img, x, y, w, h) {\n        var _this = _super.call(this) || this;\n        _this.style = new style_1.Style();\n        _this.img = img;\n        _this.geometry = new geometries_1.Bound(x, y, w, h);\n        return _this;\n    }\n    Bitmap.prototype.drawGeometry = function (render) {\n        render.drawImage(this.img, this.geometry);\n    };\n    return Bitmap;\n}(shape_1.Shape));\nexports.Bitmap = Bitmap;\n\n\n//# sourceURL=webpack:///./src/shapes/bitmap.ts?");

/***/ }),

/***/ "./src/shapes/circle.ts":
/*!******************************!*\
  !*** ./src/shapes/circle.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar geometries_1 = __webpack_require__(/*! ../core/geometries/ */ \"./src/core/geometries/index.ts\");\nvar style_1 = __webpack_require__(/*! ../core/style */ \"./src/core/style.ts\");\nvar Circle = /** @class */ (function (_super) {\n    tslib_1.__extends(Circle, _super);\n    function Circle(x, y, r) {\n        var _this = _super.call(this) || this;\n        _this.style = new style_1.Style();\n        _this.geometry = new geometries_1.Round(x, y, r);\n        return _this;\n    }\n    Circle.prototype.drawGeometry = function (render) {\n        render.drawCircle(this.geometry);\n    };\n    return Circle;\n}(shape_1.Shape));\nexports.Circle = Circle;\n\n\n//# sourceURL=webpack:///./src/shapes/circle.ts?");

/***/ }),

/***/ "./src/shapes/index.ts":
/*!*****************************!*\
  !*** ./src/shapes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\ntslib_1.__exportStar(__webpack_require__(/*! ./bitmap */ \"./src/shapes/bitmap.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./circle */ \"./src/shapes/circle.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./polyline */ \"./src/shapes/polyline.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./rectangle */ \"./src/shapes/rectangle.ts\"), exports);\ntslib_1.__exportStar(__webpack_require__(/*! ./text */ \"./src/shapes/text.ts\"), exports);\n\n\n//# sourceURL=webpack:///./src/shapes/index.ts?");

/***/ }),

/***/ "./src/shapes/polyline.ts":
/*!********************************!*\
  !*** ./src/shapes/polyline.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar geometries_1 = __webpack_require__(/*! ../core/geometries/ */ \"./src/core/geometries/index.ts\");\nvar style_1 = __webpack_require__(/*! ../core/style */ \"./src/core/style.ts\");\nvar Polyline = /** @class */ (function (_super) {\n    tslib_1.__extends(Polyline, _super);\n    function Polyline(points) {\n        var _this = _super.call(this) || this;\n        _this.style = new style_1.Style();\n        _this.geometry = new geometries_1.Multipoint(points);\n        return _this;\n    }\n    Polyline.prototype.drawGeometry = function (render) {\n        render.drawPolyline(this.geometry);\n    };\n    return Polyline;\n}(shape_1.Shape));\nexports.Polyline = Polyline;\n\n\n//# sourceURL=webpack:///./src/shapes/polyline.ts?");

/***/ }),

/***/ "./src/shapes/rectangle.ts":
/*!*********************************!*\
  !*** ./src/shapes/rectangle.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar geometries_1 = __webpack_require__(/*! ../core/geometries/ */ \"./src/core/geometries/index.ts\");\nvar style_1 = __webpack_require__(/*! ../core/style */ \"./src/core/style.ts\");\nvar Rectangle = /** @class */ (function (_super) {\n    tslib_1.__extends(Rectangle, _super);\n    function Rectangle(x, y, w, h) {\n        var _this = _super.call(this) || this;\n        _this.style = new style_1.Style();\n        _this.geometry = new geometries_1.Bound(x, y, w, h);\n        return _this;\n    }\n    Rectangle.prototype.drawGeometry = function (render) {\n        render.drawRectangle(this.geometry, true);\n    };\n    return Rectangle;\n}(shape_1.Shape));\nexports.Rectangle = Rectangle;\n\n\n//# sourceURL=webpack:///./src/shapes/rectangle.ts?");

/***/ }),

/***/ "./src/shapes/text.ts":
/*!****************************!*\
  !*** ./src/shapes/text.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\nvar shape_1 = __webpack_require__(/*! ../core/shape */ \"./src/core/shape.ts\");\nvar geometries_1 = __webpack_require__(/*! ../core/geometries/ */ \"./src/core/geometries/index.ts\");\nvar style_1 = __webpack_require__(/*! ../core/style */ \"./src/core/style.ts\");\nvar Text = /** @class */ (function (_super) {\n    tslib_1.__extends(Text, _super);\n    function Text(text, x, y, fontSize) {\n        var _this = _super.call(this) || this;\n        _this.style = new style_1.Style();\n        _this.value = text;\n        _this.geometry = new geometries_1.Bound(x, y, 100, fontSize);\n        _this.style.font.size = fontSize;\n        return _this;\n    }\n    Text.prototype.drawGeometry = function (render) {\n        var size = render.measureText(this.value);\n        this.geometry.w = size.w;\n        this.geometry.h = size.h;\n        render.drawText(this.geometry, this.value);\n    };\n    return Text;\n}(shape_1.Shape));\nexports.Text = Text;\n\n\n//# sourceURL=webpack:///./src/shapes/text.ts?");

/***/ })

/******/ });
});