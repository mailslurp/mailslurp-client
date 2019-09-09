"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("./index"));
var mailslurpRequire = require('./index').MailSlurp;
var createNewEmailAddress = jest.fn();
var sendEmailSimple = jest.fn();
var waitForLatestEmail = jest.fn();
var waitForNthEmail = jest.fn();
var waitForMatchingEmail = jest.fn();
var waitForEmailCount = jest.fn();
jest.mock('mailslurp-swagger-sdk-ts', function () {
    return {
        CommonOperationsApi: function () {
            return {
                createNewEmailAddress: createNewEmailAddress,
                sendEmailSimple: sendEmailSimple,
                waitForLatestEmail: waitForLatestEmail,
                waitForNthEmail: waitForNthEmail,
                waitForMatchingEmail: waitForMatchingEmail,
                waitForEmailCount: waitForEmailCount,
            };
        },
        ExtraOperationsApi: function () {
            return {};
        },
    };
});
beforeEach(function () {
    jest.clearAllMocks();
});
describe('importing client', function () {
    test('that import was successful', function () {
        expect(index_1.MailSlurp).not.toBeNull();
        expect(index_1.default).not.toBeNull();
    });
    test('client can be instantiated', function () {
        var client = new index_1.MailSlurp({ apiKey: 'test' });
        expect(client).not.toBeNull();
        expect(client.createNewEmailAddress).not.toBeNull();
    });
    test('default client can be instantiated', function () {
        var client = new index_1.default({ apiKey: 'test' });
        expect(client).not.toBeNull();
        expect(client.createNewEmailAddress).not.toBeNull();
    });
    test('require client can be instantiated', function () {
        var client = new mailslurpRequire({ apiKey: 'test' });
        expect(client).not.toBeNull();
        expect(client.createNewEmailAddress).not.toBeNull();
    });
});
describe('functions are mapped correctly to common operations api', function () {
    test('can create a new email address', function () { return __awaiter(_this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new index_1.MailSlurp({ apiKey: 'test' });
                    return [4 /*yield*/, client.createNewEmailAddress()];
                case 1:
                    _a.sent();
                    expect(createNewEmailAddress).toHaveBeenCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    test('can wrap a json error', function () { return __awaiter(_this, void 0, void 0, function () {
        var client, threw, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    createNewEmailAddress.mockRejectedValue({
                        json: jest.fn().mockReturnValue('error-json'),
                    });
                    client = new index_1.MailSlurp({ apiKey: 'test' });
                    threw = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.createNewEmailAddress()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    threw = true;
                    expect(e_1).toEqual('error-json');
                    return [3 /*break*/, 4];
                case 4:
                    expect(threw).toBeTruthy();
                    expect(createNewEmailAddress).toHaveBeenCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    test('can wrap a non json error', function () { return __awaiter(_this, void 0, void 0, function () {
        var client, threw, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    createNewEmailAddress.mockRejectedValue('error-text');
                    client = new index_1.MailSlurp({ apiKey: 'test' });
                    threw = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.createNewEmailAddress()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    threw = true;
                    expect(e_2).toEqual('error-text');
                    return [3 /*break*/, 4];
                case 4:
                    expect(threw).toBeTruthy();
                    expect(createNewEmailAddress).toHaveBeenCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    test('can send email', function () { return __awaiter(_this, void 0, void 0, function () {
        var client, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new index_1.MailSlurp({ apiKey: 'test' });
                    options = {
                        to: [''],
                    };
                    return [4 /*yield*/, client.sendEmailSimple(options)];
                case 1:
                    _a.sent();
                    expect(sendEmailSimple).toHaveBeenCalledWith(options);
                    return [2 /*return*/];
            }
        });
    }); });
    test('can wait for latest email', function () { return __awaiter(_this, void 0, void 0, function () {
        var client, inboxId, timeout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new index_1.MailSlurp({ apiKey: 'test' });
                    inboxId = 'inboxId';
                    timeout = 123;
                    return [4 /*yield*/, client.waitForLatestEmail(inboxId, timeout)];
                case 1:
                    _a.sent();
                    expect(waitForLatestEmail).toHaveBeenCalledWith(inboxId, timeout);
                    return [2 /*return*/];
            }
        });
    }); });
    test('can wait for nth email', function () { return __awaiter(_this, void 0, void 0, function () {
        var client, inboxId, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new index_1.MailSlurp({ apiKey: 'test' });
                    inboxId = 'inboxId';
                    index = 2;
                    return [4 /*yield*/, client.waitForNthEmail(inboxId, index)];
                case 1:
                    _a.sent();
                    expect(waitForNthEmail).toHaveBeenCalledWith(inboxId, index, undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    test('can wait for matching email', function () { return __awaiter(_this, void 0, void 0, function () {
        var client, options, count, inboxId, timeout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new index_1.MailSlurp({ apiKey: 'test' });
                    options = {};
                    count = 2;
                    inboxId = 'inboxId';
                    timeout = 123;
                    return [4 /*yield*/, client.waitForMatchingEmails(options, count, inboxId, timeout)];
                case 1:
                    _a.sent();
                    expect(waitForMatchingEmail).toHaveBeenCalledWith(options, count, inboxId, timeout);
                    return [2 /*return*/];
            }
        });
    }); });
});
