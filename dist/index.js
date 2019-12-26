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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://github.com/mailslurp/swagger-sdk-typescript-fetch for more information
 */
var mailslurp_swagger_sdk_ts_1 = require("mailslurp-swagger-sdk-ts");
var debug_1 = __importDefault(require("debug"));
// setup logger. enable output with DEBUG=mailslurp-client env variable
var log = debug_1.default('mailslurp-client');
// helper
function wrapCall(tag, fn) {
    return __awaiter(this, void 0, void 0, function () {
        var result, e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    log('[%s] executing', tag);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 7]);
                    return [4 /*yield*/, fn()];
                case 2:
                    result = _b.sent();
                    log('[%s] returned %O', tag, result);
                    return [2 /*return*/, result];
                case 3:
                    e_1 = _b.sent();
                    log('[%s] threw exception %O', tag, e_1);
                    if (!e_1.json) return [3 /*break*/, 5];
                    return [4 /*yield*/, e_1.json()];
                case 4:
                    _a = _b.sent();
                    return [3 /*break*/, 6];
                case 5:
                    _a = e_1;
                    _b.label = 6;
                case 6: throw _a;
                case 7: return [2 /*return*/];
            }
        });
    });
}
/**
 * Official MailSlurp Client
 *
 * This is the recommended client for [mailslurp.com](https://www.mailslurp.com).
 *
 * ## Features
 *
 *  - Create email addresses on demand
 *  - Receive emails and attachments in code
 *  - Send emails and attachments
 *  - Create custom domains and webhooks
 *
 * ## Get started
 *
 * MailSlurp is free for personal use but you must have an [account](https://app.mailslurp.com) and an [API Key](https://app.mailslurp.com).
 *
 * ## Installing
 * First you'll need to install the MailSlurp package from [npm](https://npmjs.com/package/mailslurp-client).
 *
 * `npm install --save mailslurp-client`
 *
 * ## Importing
 * Next import the client into your application or test.
 *
 * #### Typescript or ES6
 *
 * [[include: import.md]]
 *
 * #### NodeJS require
 *
 * [[include: require.md]]
 *
 * ## Configure
 * Next configure an instance of MailSlurp using your API Key.
 *
 * [[include: configure.md]]
 *
 * ## Example usage
 * Now that you have a configured client you can use it to interact with MailSlurp. Here are some common examples:
 *
 * #### Create an inbox
 * [[include: create-inbox.md]]
 *
 * #### List your inboxes
 * [[include: list-inboxes.md]]
 *
 * #### List emails in an inbox
 * [[include: list-emails.md]]
 *
 * #### Get an email
 * One way to receive an email is to fetch it by ID. You can find an emails ID by listing the emails in an inbox.
 * [[include: get-email.md]]
 *
 * #### WaitFor methods
 * Another way to receive an email is by using a `waitFor` method. WaitFor methods hold open a connection until a condition is met.
 * This is useful for situation in which an email has been sent and you expect it to arrive within a given time period.
 * [[include: wait-for-methods.md]]
 *
 * #### WaitFor in action
 * Here is an example of a `waitFor` method in action.
 * [[include: wait-for-test.md]]
 *
 * #### Send an email
 * [[include: send-email.md]]
 *
 * ## Next steps
 * See the methods below for more details.
 */
var MailSlurp = /** @class */ (function () {
    /**
     * Create a new MailSlurp instance
     * @param opts
     */
    function MailSlurp(opts) {
        this.callOptions = {};
        // check options
        if (!opts.apiKey) {
            throw 'Missing apiKey config parameter';
        }
        // set call options if required
        var headers = {
            'x-client': 'mailslurp-client-ts-js',
            'x-attribution': opts.attribution
        };
        this.callOptions['headers'] = headers;
        // instantiate api clients
        var clientConfiguration = { apiKey: opts.apiKey, basePath: opts.basePath };
        this.commonActionsController = new mailslurp_swagger_sdk_ts_1.CommonActionsControllerApi(clientConfiguration);
        this.inboxController = new mailslurp_swagger_sdk_ts_1.InboxControllerApi(clientConfiguration);
        this.emailController = new mailslurp_swagger_sdk_ts_1.EmailControllerApi(clientConfiguration);
        this.domainController = new mailslurp_swagger_sdk_ts_1.DomainControllerApi(clientConfiguration);
        this.attachmentController = new mailslurp_swagger_sdk_ts_1.AttachmentControllerApi(clientConfiguration);
        this.bulkActionsController = new mailslurp_swagger_sdk_ts_1.BulkActionsControllerApi(clientConfiguration);
    }
    /**
     * Create a new inbox
     *
     * ```typescript
     * const { id, emailAddress } = await mailslurp.createNewEmailAddress()
     * ```
     */
    MailSlurp.prototype.createNewEmailAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createNewEmailAddress', function () {
                        return _this.commonActionsController.createNewEmailAddress(_this.callOptions);
                    })];
            });
        });
    };
    /**
     * Send an email from a random address
     *
     * To send from a known address first create an inbox and then use
     * the sendEmail endpoints.
     *
     * @param sendEmailOptions
     */
    MailSlurp.prototype.sendEmailSimple = function (sendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('sendEmailSimple', function () {
                        return _this.commonActionsController.sendEmailSimple(sendEmailOptions, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Wait for an email to arrive at an inbox or return first found result
     * Retries the call until at least one email is found or a maximum timeout is exceeded
     *
     * ```typescript
     * try {
     *   const email = await mailslurp.waitForLatestEmail(inboxId)
     * } catch (e) {
     *   // handle timeout or email wasn't received
     * }
     * ```
     *
     * @param inboxId uuid
     * @param timeout max milliseconds to wait
     */
    MailSlurp.prototype.waitForLatestEmail = function (inboxId, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForLatestEmail', function () {
                        return _this.commonActionsController.waitForLatestEmail(inboxId, timeout, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Return or wait for email number `n` in an inbox
     *
     * ```typescript
     * try {
     *   const email3 = await mailslurp.waitForNthEmail(inboxId, 3)
     * } catch (e) {
     *   // handle timeout or email wasn't received
     * }
     * ```
     *
     * @param inboxId
     * @param index
     * @param timeout
     */
    MailSlurp.prototype.waitForNthEmail = function (inboxId, index, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForNthEmail', function () {
                        return _this.commonActionsController.waitForNthEmail(inboxId, index, timeout, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Wait until both count and match options are met and return list of emails. Match options are a bit verbose but allow
     * for type safety on the API end. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.
     *
     * ```typescript
     * try {
     *   const matchingWelcomeEmails = await mailslurp.waitForMatchingEmails({
     *     matches: [
     *       {
     *         field: 'SUBJECT',
     *         should: 'CONTAIN',
     *         value: 'Welcome'
     *       }
     *     ]
     *   }, 1, inboxId)
     * } catch (e) {
     *   // handle timeout or no results
     * }
     * ```
     *
     * @param matchOptions
     * @param count
     * @param inboxId
     * @param timeout  timeout max milliseconds to wait
     */
    MailSlurp.prototype.waitForMatchingEmails = function (matchOptions, count, inboxId, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForMatchingEmail', function () {
                        return _this.commonActionsController.waitForMatchingEmail(matchOptions, count, inboxId, timeout, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Wait for and return list of emails with length of given count
     *
     * ```typescript
     * try {
     *   // wait for 4 emails in an inbox then return them
     *   const emails = waitForEmailCount(4, inboxId)
     * } catch (e) {
     *   // handle error or timeout
     * }
     * ```
     * @param count
     * @param inboxId
     * @param timeout
     */
    MailSlurp.prototype.waitForEmailCount = function (count, inboxId, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForEmailCount', function () {
                        return _this.commonActionsController.waitForEmailCount(count, inboxId, timeout, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Delete all emails in a given inbox
     * @param inboxId
     */
    MailSlurp.prototype.emptyInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('emptyInbox', function () {
                        return _this.commonActionsController.emptyInbox(inboxId, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Delete an email by id
     * @param emailId
     */
    MailSlurp.prototype.deleteEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteEmail', function () {
                        return _this.commonActionsController.deleteEmail(emailId, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Delete an email by id
     * @param emailId
     */
    MailSlurp.prototype.deleteEmailAddress = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteEmailAddress', function () {
                        return _this.commonActionsController.deleteEmailAddress(emailId, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Create an inbox. Pass an optional `emailAddress` to specify the email address. If not argument is passed
     * MailSlurp will assign the inbox a random email address ending in `@mailslurp.com`.
     *
     * [[include: create-inbox.md]]
     */
    MailSlurp.prototype.createInbox = function (emailAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createInbox', function () {
                        return _this.inboxController.createInbox(emailAddress, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Delete an inbox by id
     * @param inboxId
     */
    MailSlurp.prototype.deleteInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createInbox', function () {
                        return _this.inboxController.deleteInbox(inboxId, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Get an inbox by id
     * @param inboxId
     */
    MailSlurp.prototype.getInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getInbox', function () {
                        return _this.inboxController.getInbox(inboxId, _this.callOptions);
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
                return [2 /*return*/, wrapCall('getInboxes', function () {
                        return _this.inboxController.getInboxes(_this.callOptions);
                    })];
            });
        });
    };
    /**
     * Get all inboxes paginated
     * Returns paginated inbox previews
     */
    MailSlurp.prototype.getAllInboxes = function (page, size) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAllInboxes', function () {
                        return _this.inboxController.getAllInboxes(page, size, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Get all emails
     * Returns paginated email previews
     */
    MailSlurp.prototype.getAllEmails = function (page, size) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAllEmails', function () {
                        return _this.emailController.getEmailsPaginated(page, size, _this.callOptions);
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
                        return _this.inboxController.getEmails(inboxId, args.limit, args.minCount, args.retryTimeout, args.since, _this.callOptions);
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
                        return _this.emailController.getEmail(emailId, _this.callOptions);
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
                        return _this.emailController.getRawEmailContents(emailId, _this.callOptions);
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
                        return _this.inboxController.sendEmail(inboxId, sendEmailOptions, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Bulk send emails
     */
    MailSlurp.prototype.bulkSendEmails = function (bulkSendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('bulkSendEmails', function () {
                        return _this.bulkActionsController.bulkSendEmails(bulkSendEmailOptions, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Bulk create inboxes
     */
    MailSlurp.prototype.bulkCreateInboxes = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('bulkCreateInboxes', function () {
                        return _this.bulkActionsController.bulkCreateInboxes(count, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Bulk delete inboxes
     */
    MailSlurp.prototype.bulkDeleteInboxes = function (inboxIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('bulkDeleteInboxes', function () {
                        return _this.bulkActionsController.bulkDeleteInboxes(inboxIds, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Create a webhook for notifications
     */
    MailSlurp.prototype.createWebhook = function (inboxId, createWebhookOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createWebhook', function () {
                        return _this.inboxController.createWebhook(inboxId, createWebhookOptions, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Get webhooks for an inbox
     * @param inboxId
     */
    MailSlurp.prototype.getWebhooks = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getWebhooks', function () {
                        return _this.inboxController.getWebhooks(inboxId, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Remove a webhook from an inbox
     */
    MailSlurp.prototype.deleteWebhook = function (inboxId, webhookId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteWebhook', function () {
                        return _this.inboxController.deleteWebhook(inboxId, webhookId, _this.callOptions);
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
                        return _this.emailController.downloadAttachment(attachmentId, emailId, _this.callOptions);
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
                        return _this.attachmentController.uploadAttachment(options, _this.callOptions);
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
                        return _this.emailController.getAttachmentMetaData(attachmentId, emailId, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Create a custom domain for use with MailSlurp
     * You must own and have access to DNS setup for the domain in order to verify it
     * @param options
     */
    MailSlurp.prototype.createDomain = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createDomain', function () {
                        return _this.domainController.createDomain(options, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Get domains
     */
    MailSlurp.prototype.getDomains = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getDomains', function () {
                        return _this.domainController.getDomains(_this.callOptions);
                    })];
            });
        });
    };
    /**
     * Get domain
     */
    MailSlurp.prototype.getDomain = function (domainId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getDomain', function () {
                        return _this.domainController.getDomain(domainId, _this.callOptions);
                    })];
            });
        });
    };
    /**
     * Delete domain
     */
    MailSlurp.prototype.deleteDomain = function (domainId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteDomain', function () {
                        return _this.domainController.deleteDomain(domainId, _this.callOptions);
                    })];
            });
        });
    };
    return MailSlurp;
}());
exports.MailSlurp = MailSlurp;
exports.default = MailSlurp;
