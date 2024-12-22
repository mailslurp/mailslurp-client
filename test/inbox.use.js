"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var _helpers_1 = require("./_helpers");
var dist_1 = __importDefault(require("../dist"));
(0, vitest_1.test)('can create inboxes', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, _helpers_1.integrationTest)(function (mailslurp) { return __awaiter(void 0, void 0, void 0, function () {
                    var userInfo, inbox, inboxId, timeout, e_1, statusCode, errorMessage;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, mailslurp.userController.getUserInfo()];
                            case 1:
                                userInfo = _a.sent();
                                (0, vitest_1.expect)(userInfo.id.length).toBeGreaterThan(0);
                                return [4 /*yield*/, mailslurp.createInbox()];
                            case 2:
                                inbox = _a.sent();
                                // { id: '123', emailAddress: '123@mailslurp.com' }
                                //</gen>
                                (0, vitest_1.expect)(inbox).toBeTruthy();
                                //<gen>create_inbox_controller
                                return [4 /*yield*/, mailslurp.inboxController.createInbox({})];
                            case 3:
                                //<gen>create_inbox_controller
                                _a.sent();
                                inboxId = inbox.id;
                                timeout = 1000;
                                _a.label = 4;
                            case 4:
                                _a.trys.push([4, 6, , 8]);
                                return [4 /*yield*/, mailslurp.waitController.waitForLatestEmail({
                                        inboxId: inboxId,
                                        timeout: timeout,
                                        unreadOnly: true,
                                    })];
                            case 5:
                                _a.sent();
                                return [3 /*break*/, 8];
                            case 6:
                                e_1 = _a.sent();
                                statusCode = e_1.status;
                                return [4 /*yield*/, e_1.text()];
                            case 7:
                                errorMessage = _a.sent();
                                (0, vitest_1.expect)(errorMessage).toContain('Failed to satisfy email query for inbox');
                                (0, vitest_1.expect)(statusCode).toEqual(408);
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, _helpers_1.integrationTest)(function (mailslurp) { return __awaiter(void 0, void 0, void 0, function () {
    var inbox, inboxId, recipient, email;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mailslurp.createInbox()];
            case 1:
                inbox = _a.sent();
                inboxId = inbox.id;
                recipient = inbox.emailAddress;
                //<gen>send_with_queue
                return [4 /*yield*/, mailslurp.inboxController.sendEmailWithQueue({
                        inboxId: inboxId,
                        sendEmailOptions: {
                            to: [recipient],
                            subject: 'Sent with a queue',
                            body: 'Use queues to allow recovery of failed email ' +
                                'sending when account reaches limits or has payment issues',
                        },
                        // validate before adding to queue to fail early
                        validateBeforeEnqueue: false,
                    })];
            case 2:
                //<gen>send_with_queue
                _a.sent();
                return [4 /*yield*/, mailslurp.waitForLatestEmail(inboxId, 60000)];
            case 3:
                email = _a.sent();
                (0, vitest_1.expect)(email.subject).toContain('Sent with a queue');
                return [2 /*return*/];
        }
    });
}); });
(0, vitest_1.describe)('email verification', function () {
    var config = { apiKey: process.env.API_KEY };
    vitest_1.it.skip('can verify email addresses', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mailslurp, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mailslurp = new dist_1.default(config);
                    return [4 /*yield*/, mailslurp.emailVerificationController.validateEmailAddressList({
                            validateEmailAddressListOptions: {
                                emailAddressList: ['contact@mailslurp.dev', 'bad@mailslurp.dev'],
                            },
                        })];
                case 1:
                    res = _a.sent();
                    (0, vitest_1.expect)(res.resultMapEmailAddressIsValid['contact@mailslurp.dev']).toEqual(true);
                    (0, vitest_1.expect)(res.resultMapEmailAddressIsValid['bad@mailslurp.dev']).toEqual(false);
                    return [2 /*return*/];
            }
        });
    }); });
});
/**
 * Get an inbox
 */
(0, vitest_1.describe)('get an inbox', function () {
    var config = { apiKey: process.env.API_KEY };
    (0, vitest_1.it)('can get a full inbox', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mailslurp, inboxId, inbox;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mailslurp = new dist_1.default(config);
                    return [4 /*yield*/, mailslurp.createInbox()];
                case 1:
                    inboxId = (_a.sent()).id;
                    return [4 /*yield*/, mailslurp.getInbox(inboxId)];
                case 2:
                    inbox = _a.sent();
                    (0, vitest_1.expect)(inbox.id).toEqual(inboxId);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, vitest_1.describe)('inbox pagination', function () {
    var config = { apiKey: process.env.API_KEY };
    /**
     * List inboxes
     */
    (0, vitest_1.it)('can list inboxes in paginated form', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mailslurp, _a, index, size, pageInboxes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mailslurp = new dist_1.default(config);
                    _a = __read([0, 20], 2), index = _a[0], size = _a[1];
                    return [4 /*yield*/, mailslurp.getAllInboxes(0, 20)];
                case 1:
                    pageInboxes = _b.sent();
                    (0, vitest_1.expect)(pageInboxes.size).toEqual(size);
                    (0, vitest_1.expect)(pageInboxes.number).toEqual(index);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, vitest_1.describe)('wait_for_latest', function () {
    var config = { apiKey: process.env.API_KEY };
    var mailslurp = new dist_1.default(config);
    (0, vitest_1.test)('inbox wait for', function () { return __awaiter(void 0, void 0, void 0, function () {
        var timeoutMs, inbox, latestEmail, secondEmail, allEmails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timeoutMs = 30000;
                    return [4 /*yield*/, mailslurp.createInbox()];
                case 1:
                    inbox = _a.sent();
                    return [4 /*yield*/, mailslurp.sendEmail(inbox.id, {
                            to: [inbox.emailAddress],
                            subject: 'test',
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, mailslurp.waitForLatestEmail(inbox.id, timeoutMs)];
                case 3:
                    latestEmail = _a.sent();
                    (0, vitest_1.expect)(latestEmail.subject).toContain('test');
                    // send another
                    return [4 /*yield*/, mailslurp.sendEmail(inbox.id, {
                            to: [inbox.emailAddress],
                            subject: 'second',
                        })];
                case 4:
                    // send another
                    _a.sent();
                    return [4 /*yield*/, mailslurp.waitController.waitForLatestEmail({
                            inboxId: inbox.id,
                            unreadOnly: true,
                        })];
                case 5:
                    secondEmail = _a.sent();
                    (0, vitest_1.expect)(secondEmail.subject).toContain('second');
                    return [4 /*yield*/, mailslurp.getEmails(inbox.id)];
                case 6:
                    allEmails = _a.sent();
                    (0, vitest_1.expect)(allEmails).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
});
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
(0, vitest_1.describe)('send email', function () {
    (0, vitest_1.test)('can send simple', function () { return __awaiter(void 0, void 0, void 0, function () {
        var config, mailslurp, receiveInbox, emailAddress, inbox, options, sent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = { apiKey: process.env.API_KEY };
                    mailslurp = new dist_1.default(config);
                    return [4 /*yield*/, mailslurp.createInbox()];
                case 1:
                    receiveInbox = _a.sent();
                    emailAddress = receiveInbox.emailAddress;
                    return [4 /*yield*/, mailslurp.createInbox()];
                case 2:
                    inbox = _a.sent();
                    options = {
                        to: [emailAddress],
                        subject: 'Hello',
                        body: 'Welcome',
                    };
                    return [4 /*yield*/, mailslurp.sendEmail(inbox.id, options)];
                case 3:
                    sent = _a.sent();
                    (0, vitest_1.expect)(sent.subject).toContain('Hello');
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.test)('attachments', function () { return __awaiter(void 0, void 0, void 0, function () {
        var config, mailslurp, pathToAttachment, fileBase64Encoded, _a, attachmentId, inbox1, inbox2, sentEmail, inboxId, email, attachmentDto, fileContent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    config = { apiKey: process.env.API_KEY };
                    mailslurp = new dist_1.default(config);
                    pathToAttachment = path.join(__dirname + '/attachment.txt');
                    return [4 /*yield*/, fs.promises.readFile(pathToAttachment, {
                            encoding: 'base64',
                        })];
                case 1:
                    fileBase64Encoded = _b.sent();
                    return [4 /*yield*/, mailslurp.attachmentController.uploadAttachment({
                            uploadAttachmentOptions: {
                                base64Contents: fileBase64Encoded,
                                contentType: 'text/plain',
                                filename: path.basename(pathToAttachment),
                            },
                        })];
                case 2:
                    _a = __read.apply(void 0, [_b.sent(), 1]), attachmentId = _a[0];
                    //</gen>
                    (0, vitest_1.expect)(attachmentId).toBeTruthy();
                    return [4 /*yield*/, mailslurp.createInbox()];
                case 3:
                    inbox1 = _b.sent();
                    return [4 /*yield*/, mailslurp.createInbox()];
                case 4:
                    inbox2 = _b.sent();
                    return [4 /*yield*/, mailslurp.inboxController.sendEmailAndConfirm({
                            inboxId: inbox1.id,
                            sendEmailOptions: {
                                to: [inbox2.emailAddress],
                                attachments: [attachmentId],
                                subject: 'Send attachments',
                                body: 'Here are your files',
                            },
                        })];
                case 5:
                    sentEmail = _b.sent();
                    (0, vitest_1.expect)(sentEmail.attachments.length).toEqual(1);
                    inboxId = inbox2.id;
                    return [4 /*yield*/, mailslurp.waitController.waitForLatestEmail({
                            inboxId: inboxId,
                            timeout: 30000,
                            unreadOnly: true,
                        })];
                case 6:
                    email = _b.sent();
                    // check has attachments
                    (0, vitest_1.expect)(email.attachments.length).toEqual(1);
                    return [4 /*yield*/, mailslurp.emailController.downloadAttachmentBase64({
                            attachmentId: email.attachments[0],
                            emailId: email.id,
                        })];
                case 7:
                    attachmentDto = _b.sent();
                    // can access content
                    (0, vitest_1.expect)(attachmentDto.base64FileContents).toBeTruthy();
                    fileContent = new Buffer(attachmentDto.base64FileContents, 'base64').toString();
                    (0, vitest_1.expect)(fileContent).toContain('test');
                    // can access size etc
                    (0, vitest_1.expect)(attachmentDto.sizeBytes).toBeTruthy();
                    (0, vitest_1.expect)(attachmentDto.contentType).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
});
