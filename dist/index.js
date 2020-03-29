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
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var isomorphicFetch = __importStar(require("node-fetch"));
var generated_1 = require("./generated");
/**
 * Official MailSlurp Client
 *
 *
 *
 * ## Install
 * `npm install --save mailslurp-client`
 *
 * ## Configure
 * Create a MailSlurp account to get an [API Key](https://app.mailslurp.com/sign-up/).
 *
 * ```typescript
 * const MailSlurp = require('mailslurp-client').default;
 * const mailslurp = new MailSlurp({ apiKey: 'xxxx' })
 * ```
 *
 * ## Make requests
 *
 * ```typescript
 * const inbox = await mailslurp.createInbox()
 * await mailslurp.sendEmail({ to: [inbox.emailAddress] })
 * const email = await mailslurp.waitForLatestEmail(inbox.id)
 * ```
 *
 * Read [quick start guide](https://www.mailslurp.com/guides/) for more examples or see the methods below.
 */
var MailSlurp = /** @class */ (function () {
    /**
     * Create a new MailSlurp instance
     * @param opts
     */
    function MailSlurp(opts) {
        // check options
        if (!opts.apiKey) {
            throw 'Missing apiKey config parameter';
        }
        var fetch = opts.fetchApi || isomorphicFetch;
        // create credentials
        var clientConfiguration = new generated_1.Configuration({
            apiKey: opts.apiKey,
            basePath: opts.basePath || 'https://api.mailslurp.com',
        });
        // instantiate api clients
        this.emailController = new generated_1.EmailControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.inboxController = new generated_1.InboxControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.attachmentController = new generated_1.AttachmentControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.domainController = new generated_1.DomainControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.contactController = new generated_1.ContactControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.groupController = new generated_1.GroupControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.templateController = new generated_1.TemplateControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.webhookController = new generated_1.WebhookControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.commonController = new generated_1.CommonActionsControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.bulkController = new generated_1.BulkActionsControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
        this.waitController = new generated_1.WaitForControllerApi(clientConfiguration, clientConfiguration.basePath, fetch);
    }
    MailSlurp.prototype.createInbox = function (emailAddress, name, description, expiresAt, favourite, tags) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createInbox', function () {
                        return _this.inboxController.createInbox(description, emailAddress, expiresAt, favourite, name, tags);
                    })];
            });
        });
    };
    MailSlurp.prototype.deleteInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteInbox', function () {
                        return _this.inboxController.deleteInbox(inboxId);
                    })];
            });
        });
    };
    MailSlurp.prototype.emptyInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('emptyInbox', function () {
                        return _this.commonController.emptyInbox(inboxId);
                    })];
            });
        });
    };
    MailSlurp.prototype.getInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getInbox', function () {
                        return _this.inboxController.getInbox(inboxId);
                    })];
            });
        });
    };
    /**
     * Get all inboxes
     *
     * [[include: list-inboxes.md]]
     */
    MailSlurp.prototype.getInboxes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getInboxes', function () { return _this.inboxController.getInboxes(); })];
            });
        });
    };
    /**
     * Get all inboxes paginated
     * Returns paginated inbox previews
     */
    MailSlurp.prototype.getAllInboxes = function (page, size, favourite, search, sort, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAllInboxes', function () {
                        return _this.inboxController.getAllInboxes(favourite, page, search, size, sort, tag);
                    })];
            });
        });
    };
    // waitFor methods
    MailSlurp.prototype.waitForLatestEmail = function (inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForLatestEmail', function () {
                        return _this.waitController.waitForLatestEmail(inboxId, timeout, unreadOnly);
                    })];
            });
        });
    };
    MailSlurp.prototype.waitForNthEmail = function (inboxId, index, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForNthEmail', function () {
                        return _this.waitController.waitForNthEmail(inboxId, index, timeout, unreadOnly);
                    })];
            });
        });
    };
    MailSlurp.prototype.waitForMatchingEmails = function (matchOptions, count, inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForMatchingEmail', function () {
                        return _this.waitController.waitForMatchingEmail(matchOptions, count, inboxId, timeout, unreadOnly);
                    })];
            });
        });
    };
    MailSlurp.prototype.waitForEmailCount = function (count, inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForEmailCount', function () {
                        return _this.waitController.waitForEmailCount(count, inboxId, timeout, unreadOnly);
                    })];
            });
        });
    };
    // email methods
    MailSlurp.prototype.deleteEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteEmail', function () {
                        return _this.emailController.deleteEmail(emailId);
                    })];
            });
        });
    };
    /**
     * Get all emails
     * Returns paginated email previews
     */
    MailSlurp.prototype.getAllEmails = function (page, size, inboxId, sort, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAllEmails', function () {
                        return _this.emailController.getEmailsPaginated(inboxId, page, size, sort, unreadOnly);
                    })];
            });
        });
    };
    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     *
     * [[include: get-emails.md]]
     *
     * @param inboxId
     * @param args
     */
    MailSlurp.prototype.getEmails = function (inboxId, args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getEmails', function () {
                        return _this.inboxController.getEmails(inboxId, args.limit, args.minCount, args.retryTimeout, args.since, args.sort);
                    })];
            });
        });
    };
    /**
     * Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox
     *
     * [[include: get-email.md]]
     *
     * @param emailId
     */
    MailSlurp.prototype.getEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getEmail', function () {
                        return _this.emailController.getEmail(emailId);
                    })];
            });
        });
    };
    /**
     * Get an email's raw contents from by id
     * @param emailId
     */
    MailSlurp.prototype.getRawEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getRawEmail', function () {
                        return _this.emailController.getRawEmailContents(emailId);
                    })];
            });
        });
    };
    /**
     * Send and email from a given inbox
     *
     * [[include: send-email.md]]
     * @param inboxId
     * @param sendEmailOptions
     */
    MailSlurp.prototype.sendEmail = function (inboxId, sendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('sendEmail', function () {
                        return _this.inboxController.sendEmail(inboxId, sendEmailOptions);
                    })];
            });
        });
    };
    /**
     * Get email attachment by id
     *
     * Returns HTTP response containing byte stream
     */
    MailSlurp.prototype.downloadAttachment = function (emailId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('downloadAttachment', function () {
                        return _this.emailController.downloadAttachment(attachmentId, emailId);
                    })];
            });
        });
    };
    /**
     * Upload an attachment for use in email sending
     *
     * Attachment contents must be a base64 encoded string
     */
    MailSlurp.prototype.uploadAttachment = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('uploadAttachment', function () {
                        return _this.attachmentController.uploadAttachment(options);
                    })];
            });
        });
    };
    /**
     * Get attachment MetaData
     *
     * MetaData includes name, size (bytes) and content-type.
     */
    MailSlurp.prototype.getAttachmentMetaData = function (attachmentId, emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAttachmentMetaData', function () {
                        return _this.emailController.getAttachmentMetaData(attachmentId, emailId);
                    })];
            });
        });
    };
    return MailSlurp;
}());
exports.MailSlurp = MailSlurp;
// helper
function wrapCall(tag, fn) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, fn()];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    e_1 = _b.sent();
                    if (!e_1.json) return [3 /*break*/, 4];
                    return [4 /*yield*/, e_1.json()];
                case 3:
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = e_1;
                    _b.label = 5;
                case 5: throw _a;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.default = MailSlurp;
