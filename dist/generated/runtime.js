"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextApiResponse = exports.BlobApiResponse = exports.VoidApiResponse = exports.JSONApiResponse = exports.canConsumeForm = exports.mapValues = exports.querystring = exports.exists = exports.Configuration = exports.COLLECTION_FORMATS = exports.RequiredError = exports.BaseAPI = exports.BASE_PATH = void 0;
exports.BASE_PATH = "https://api.mailslurp.com".replace(/\/+$/, "");
var isBlob = function (value) { return typeof Blob !== 'undefined' && value instanceof Blob; };
/**
 * This is the base class for all generated API classes.
 */
var BaseAPI = /** @class */ (function () {
    function BaseAPI(configuration) {
        var _this = this;
        if (configuration === void 0) { configuration = new Configuration(); }
        this.configuration = configuration;
        this.fetchApi = function (url, init) { return __awaiter(_this, void 0, void 0, function () {
            var fetchParams, _a, _b, middleware, e_1_1, response, _c, _d, middleware, e_2_1;
            var e_1, _e, e_2, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        fetchParams = { url: url, init: init };
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 6, 7, 8]);
                        _a = __values(this.middleware), _b = _a.next();
                        _g.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        middleware = _b.value;
                        if (!middleware.pre) return [3 /*break*/, 4];
                        return [4 /*yield*/, middleware.pre(__assign({ fetch: this.fetchApi }, fetchParams))];
                    case 3:
                        fetchParams = (_g.sent()) || fetchParams;
                        _g.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [4 /*yield*/, (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init)];
                    case 9:
                        response = _g.sent();
                        _g.label = 10;
                    case 10:
                        _g.trys.push([10, 15, 16, 17]);
                        _c = __values(this.middleware), _d = _c.next();
                        _g.label = 11;
                    case 11:
                        if (!!_d.done) return [3 /*break*/, 14];
                        middleware = _d.value;
                        if (!middleware.post) return [3 /*break*/, 13];
                        return [4 /*yield*/, middleware.post({
                                fetch: this.fetchApi,
                                url: fetchParams.url,
                                init: fetchParams.init,
                                response: response.clone(),
                            })];
                    case 12:
                        response = (_g.sent()) || response;
                        _g.label = 13;
                    case 13:
                        _d = _c.next();
                        return [3 /*break*/, 11];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_2_1 = _g.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 17: return [2 /*return*/, response];
                }
            });
        }); };
        this.middleware = configuration.middleware;
    }
    BaseAPI.prototype.withMiddleware = function () {
        var _a;
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        var next = this.clone();
        next.middleware = (_a = next.middleware).concat.apply(_a, __spreadArray([], __read(middlewares), false));
        return next;
    };
    BaseAPI.prototype.withPreMiddleware = function () {
        var preMiddlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            preMiddlewares[_i] = arguments[_i];
        }
        var middlewares = preMiddlewares.map(function (pre) { return ({ pre: pre }); });
        return this.withMiddleware.apply(this, __spreadArray([], __read(middlewares), false));
    };
    BaseAPI.prototype.withPostMiddleware = function () {
        var postMiddlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            postMiddlewares[_i] = arguments[_i];
        }
        var middlewares = postMiddlewares.map(function (post) { return ({ post: post }); });
        return this.withMiddleware.apply(this, __spreadArray([], __read(middlewares), false));
    };
    BaseAPI.prototype.request = function (context, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, url, init, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createFetchParams(context, initOverrides), url = _a.url, init = _a.init;
                        return [4 /*yield*/, this.fetchApi(url, init)];
                    case 1:
                        response = _b.sent();
                        if (response.status >= 200 && response.status < 300) {
                            return [2 /*return*/, response];
                        }
                        throw response;
                }
            });
        });
    };
    BaseAPI.prototype.createFetchParams = function (context, initOverrides) {
        var url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }
        var body = ((typeof FormData !== "undefined" && context.body instanceof FormData) || context.body instanceof URLSearchParams || isBlob(context.body))
            ? context.body
            : JSON.stringify(context.body);
        var headers = Object.assign({}, this.configuration.headers, context.headers);
        var init = __assign({ method: context.method, headers: headers, body: body, credentials: this.configuration.credentials }, initOverrides);
        return { url: url, init: init };
    };
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    BaseAPI.prototype.clone = function () {
        var constructor = this.constructor;
        var next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    };
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
var RequiredError = /** @class */ (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        var _this = _super.call(this, msg) || this;
        _this.field = field;
        _this.name = "RequiredError";
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
var Configuration = /** @class */ (function () {
    function Configuration(configuration) {
        if (configuration === void 0) { configuration = {}; }
        this.configuration = configuration;
    }
    Object.defineProperty(Configuration.prototype, "basePath", {
        get: function () {
            return this.configuration.basePath != null ? this.configuration.basePath : exports.BASE_PATH;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "fetchApi", {
        get: function () {
            return this.configuration.fetchApi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "middleware", {
        get: function () {
            return this.configuration.middleware || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "queryParamsStringify", {
        get: function () {
            return this.configuration.queryParamsStringify || querystring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "username", {
        get: function () {
            return this.configuration.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "password", {
        get: function () {
            return this.configuration.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "apiKey", {
        get: function () {
            var apiKey = this.configuration.apiKey;
            if (apiKey) {
                return typeof apiKey === 'function' ? apiKey : function () { return apiKey; };
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "accessToken", {
        get: function () {
            var _this = this;
            var accessToken = this.configuration.accessToken;
            if (accessToken) {
                return typeof accessToken === 'function' ? accessToken : function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, accessToken];
                }); }); };
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "headers", {
        get: function () {
            return this.configuration.headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "credentials", {
        get: function () {
            return this.configuration.credentials;
        },
        enumerable: false,
        configurable: true
    });
    return Configuration;
}());
exports.Configuration = Configuration;
function exists(json, key) {
    var value = json[key];
    return value !== null && value !== undefined;
}
exports.exists = exists;
function querystring(params, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return Object.keys(params)
        .map(function (key) {
        var fullKey = prefix + (prefix.length ? "[" + key + "]" : key);
        var value = params[key];
        if (value instanceof Array) {
            var multiValue = value.map(function (singleValue) { return encodeURIComponent(String(singleValue)); })
                .join("&" + encodeURIComponent(fullKey) + "=");
            return encodeURIComponent(fullKey) + "=" + multiValue;
        }
        if (value instanceof Date) {
            return encodeURIComponent(fullKey) + "=" + encodeURIComponent(value.toISOString());
        }
        if (value instanceof Object) {
            return querystring(value, fullKey);
        }
        return encodeURIComponent(fullKey) + "=" + encodeURIComponent(String(value));
    })
        .filter(function (part) { return part.length > 0; })
        .join('&');
}
exports.querystring = querystring;
function mapValues(data, fn) {
    return Object.keys(data).reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = fn(data[key]), _a)));
    }, {});
}
exports.mapValues = mapValues;
function canConsumeForm(consumes) {
    var e_3, _a;
    try {
        for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
            var consume = consumes_1_1.value;
            if ('multipart/form-data' === consume.contentType) {
                return true;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return false;
}
exports.canConsumeForm = canConsumeForm;
var JSONApiResponse = /** @class */ (function () {
    function JSONApiResponse(raw, transformer) {
        if (transformer === void 0) { transformer = function (jsonValue) { return jsonValue; }; }
        this.raw = raw;
        this.transformer = transformer;
    }
    JSONApiResponse.prototype.value = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.transformer;
                        return [4 /*yield*/, this.raw.json()];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    return JSONApiResponse;
}());
exports.JSONApiResponse = JSONApiResponse;
var VoidApiResponse = /** @class */ (function () {
    function VoidApiResponse(raw) {
        this.raw = raw;
    }
    VoidApiResponse.prototype.value = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    return VoidApiResponse;
}());
exports.VoidApiResponse = VoidApiResponse;
var BlobApiResponse = /** @class */ (function () {
    function BlobApiResponse(raw) {
        this.raw = raw;
    }
    BlobApiResponse.prototype.value = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.raw.blob()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    return BlobApiResponse;
}());
exports.BlobApiResponse = BlobApiResponse;
var TextApiResponse = /** @class */ (function () {
    function TextApiResponse(raw) {
        this.raw = raw;
    }
    TextApiResponse.prototype.value = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.raw.text()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    return TextApiResponse;
}());
exports.TextApiResponse = TextApiResponse;
