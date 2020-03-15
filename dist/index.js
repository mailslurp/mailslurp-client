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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://www.mailslurp.com/js/ for documentation
 */
var mailslurp_swagger_sdk_ts_1 = require("mailslurp-swagger-sdk-ts");
require("isomorphic-fetch");
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
        // create credentials
        var clientConfiguration = new mailslurp_swagger_sdk_ts_1.Configuration({
            apiKey: opts.apiKey,
            basePath: opts.basePath,
            headers: {
                'x-client': 'mailslurp-client-ts-js',
                'x-attribution': opts.attribution,
            },
            fetchApi: opts.fetchApi || fetch
        });
        // instantiate api clients
        this.emails = new mailslurp_swagger_sdk_ts_1.EmailControllerApi(clientConfiguration);
        this.inboxes = new mailslurp_swagger_sdk_ts_1.InboxControllerApi(clientConfiguration);
        this.attachments = new mailslurp_swagger_sdk_ts_1.AttachmentControllerApi(clientConfiguration);
        this.domains = new mailslurp_swagger_sdk_ts_1.DomainControllerApi(clientConfiguration);
        this.contacts = new mailslurp_swagger_sdk_ts_1.ContactControllerApi(clientConfiguration);
        this.groups = new mailslurp_swagger_sdk_ts_1.GroupControllerApi(clientConfiguration);
        this.templates = new mailslurp_swagger_sdk_ts_1.TemplateControllerApi(clientConfiguration);
        this.webhooks = new mailslurp_swagger_sdk_ts_1.WebhookControllerApi(clientConfiguration);
        this.common = new mailslurp_swagger_sdk_ts_1.CommonActionsControllerApi(clientConfiguration);
        this.bulk = new mailslurp_swagger_sdk_ts_1.BulkActionsControllerApi(clientConfiguration);
        this.waitFor = new mailslurp_swagger_sdk_ts_1.WaitForControllerApi(clientConfiguration);
    }
    MailSlurp.prototype.createInbox = function (emailAddress, name, description, expiresAt, favourite, tags) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createInbox', function () {
                        return _this.inboxes.createInbox({
                            emailAddress: emailAddress,
                            name: name,
                            description: description,
                            expiresAt: expiresAt,
                            favourite: favourite,
                            tags: tags,
                        });
                    })];
            });
        });
    };
    MailSlurp.prototype.deleteInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteInbox', function () {
                        return _this.inboxes.deleteInbox({ inboxId: inboxId });
                    })];
            });
        });
    };
    MailSlurp.prototype.emptyInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('emptyInbox', function () {
                        return _this.common.emptyInbox({ inboxId: inboxId });
                    })];
            });
        });
    };
    MailSlurp.prototype.getInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getInbox', function () {
                        return _this.inboxes.getInbox({ inboxId: inboxId });
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
                return [2 /*return*/, wrapCall('getInboxes', function () { return _this.inboxes.getInboxes(); })];
            });
        });
    };
    /**
     * Get all inboxes paginated
     * Returns paginated inbox previews
     */
    MailSlurp.prototype.getAllInboxes = function (page, size, favourite, search, sort) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAllInboxes', function () {
                        return _this.inboxes.getAllInboxes({
                            page: page,
                            size: size,
                            favourite: favourite,
                            search: search,
                            sort: sort,
                        });
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
                        return _this.waitFor.waitForLatestEmail({
                            inboxId: inboxId,
                            timeout: timeout,
                            unreadOnly: unreadOnly,
                        });
                    })];
            });
        });
    };
    MailSlurp.prototype.waitForNthEmail = function (inboxId, index, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForNthEmail', function () {
                        return _this.waitFor.waitForNthEmail({
                            inboxId: inboxId,
                            index: index,
                            timeout: timeout,
                            unreadOnly: unreadOnly,
                        });
                    })];
            });
        });
    };
    MailSlurp.prototype.waitForMatchingEmails = function (matchOptions, count, inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForMatchingEmail', function () {
                        return _this.waitFor.waitForMatchingEmail({
                            matchOptions: matchOptions,
                            count: count,
                            inboxId: inboxId,
                            timeout: timeout,
                            unreadOnly: unreadOnly,
                        });
                    })];
            });
        });
    };
    MailSlurp.prototype.waitForEmailCount = function (count, inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForEmailCount', function () {
                        return _this.waitFor.waitForEmailCount({
                            count: count,
                            inboxId: inboxId,
                            timeout: timeout,
                            unreadOnly: unreadOnly,
                        });
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
                        return _this.emails.deleteEmail({ emailId: emailId });
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
                        return _this.emails.getEmailsPaginated({
                            page: page,
                            size: size,
                            inboxId: inboxId,
                            sort: sort,
                            unreadOnly: unreadOnly,
                        });
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
                        return _this.inboxes.getEmails({
                            inboxId: inboxId,
                            limit: args.limit,
                            minCount: args.minCount,
                            retryTimeout: args.retryTimeout,
                            since: args.since,
                            sort: args.sort,
                        });
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
                        return _this.emails.getEmail({ emailId: emailId });
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
                        return _this.emails.getRawEmailContents({ emailId: emailId });
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
                        return _this.inboxes.sendEmail({ inboxId: inboxId, sendEmailOptions: sendEmailOptions });
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
                        return _this.emails.downloadAttachment({ attachmentId: attachmentId, emailId: emailId });
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
                        return _this.attachments.uploadAttachment({
                            uploadOptions: options,
                        });
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
                        return _this.emails.getAttachmentMetaData({
                            attachmentId: attachmentId,
                            emailId: emailId,
                        });
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
