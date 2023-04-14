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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
exports.wrapResult = exports.wrapException = exports.MailSlurp = void 0;
require('es6-promise').polyfill();
require('cross-fetch/polyfill');
var generated_1 = require("./generated");
__exportStar(require("./generated"), exports);
/**
 * The official MailSlurp Javascript library. A wrapper around the [MailSlurp REST API](https://docs.mailslurp.com/api/docs/Apis/).
 *
 * Create an instance of this class to call MailSlurp API methods. Contains top level convenience functions. Access the full API controllers as properties on the instance.
 *
 * ## Create instance
 * You must provide a configuration object with [your API Key](https://app.mailslurp.com) as the `apiKey` property
 * when creating a new instance.
 *
 * ```javascript
 * const MailSlurp = require('mailslurp-client').default;
 * const mailslurp = new MailSlurp({
 *  apiKey: 'xxxx'
 * })
 * ```

 * ## Call methods
 * Most methods are asynchronous and return Promises. You can `await` the results or use `.then(result => {})`
 * Common controllers include the [InboxController](https://mailslurp.github.io/mailslurp-client/classes/InboxControllerApi.html), [EmailController](https://mailslurp.github.io/mailslurp-client/classes/EmailControllerApi.html), [SMSController](https://mailslurp.github.io/mailslurp-client/classes/SmsControllerApi.html) and the [WaitForController](https://mailslurp.github.io/mailslurp-client/classes/WaitForControllerApi.html) for receiving emails.
 *
 * ```javascript
 * // call convenience functions
 * const email = await mailslurp.waitForLatestEmail(...args)
 *
 * // call controllers to access full API methods
 * const alias = await mailslurp.aliasController.createAlias(...args)
 *
 * // or create a controller
 * const inboxController = mailslurp.inboxController
 * const inbox = await inboxController.createInbox()
 *
 * // use Promises methods if you prefer
 * mailslurp.getEmails(inbox.id).then(emails => {
 *    // handle emails
 *    console.log(emails))
 *  }
 * ```
 */
var MailSlurp = /** @class */ (function () {
    /**
     * Create a new MailSlurp instance.
     *
     * Contains top level convenience functions. Access the full API controllers as properties on the instance.
     *
     * ```javascript
     * const MailSlurp = require('mailslurp-client').default
     * const mailslurp = new MailSlurp({ apiKey })
     * ```
     * @param opts
     */
    function MailSlurp(opts) {
        // check options
        if (!opts.apiKey) {
            throw 'Missing apiKey config parameter';
        }
        var _fetch = opts.fetchApi || fetch;
        // create credentials
        var clientConfiguration = new generated_1.Configuration({
            apiKey: opts.apiKey,
            basePath: opts.basePath || 'https://javascript.api.mailslurp.com',
            headers: opts.headers || undefined,
        });
        var args = [clientConfiguration, clientConfiguration.basePath, _fetch];
        // instantiate api clients
        this.emailVerificationController = new (generated_1.EmailVerificationControllerApi.bind.apply(generated_1.EmailVerificationControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.phoneController = new (generated_1.PhoneControllerApi.bind.apply(generated_1.PhoneControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.smsController = new (generated_1.SmsControllerApi.bind.apply(generated_1.SmsControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.userController = new (generated_1.UserControllerApi.bind.apply(generated_1.UserControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.emailController = new (generated_1.EmailControllerApi.bind.apply(generated_1.EmailControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.inboxController = new (generated_1.InboxControllerApi.bind.apply(generated_1.InboxControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.attachmentController = new (generated_1.AttachmentControllerApi.bind.apply(generated_1.AttachmentControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.domainController = new (generated_1.DomainControllerApi.bind.apply(generated_1.DomainControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.sentController = new (generated_1.SentEmailsControllerApi.bind.apply(generated_1.SentEmailsControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.aliasController = new (generated_1.AliasControllerApi.bind.apply(generated_1.AliasControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.formController = new (generated_1.FormControllerApi.bind.apply(generated_1.FormControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.contactController = new (generated_1.ContactControllerApi.bind.apply(generated_1.ContactControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.groupController = new (generated_1.GroupControllerApi.bind.apply(generated_1.GroupControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.templateController = new (generated_1.TemplateControllerApi.bind.apply(generated_1.TemplateControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.webhookController = new (generated_1.WebhookControllerApi.bind.apply(generated_1.WebhookControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.commonController = new (generated_1.CommonActionsControllerApi.bind.apply(generated_1.CommonActionsControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.bulkController = new (generated_1.BulkActionsControllerApi.bind.apply(generated_1.BulkActionsControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.waitController = new (generated_1.WaitForControllerApi.bind.apply(generated_1.WaitForControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.mailServerController = new (generated_1.MailServerControllerApi.bind.apply(generated_1.MailServerControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.missedEmailController = new (generated_1.MissedEmailControllerApi.bind.apply(generated_1.MissedEmailControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.inboxRulesetController = new (generated_1.InboxRulesetControllerApi.bind.apply(generated_1.InboxRulesetControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.inboxForwarderController = new (generated_1.InboxForwarderControllerApi.bind.apply(generated_1.InboxForwarderControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.inboxReplierController = new (generated_1.InboxReplierControllerApi.bind.apply(generated_1.InboxReplierControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.trackingController = new (generated_1.TrackingControllerApi.bind.apply(generated_1.TrackingControllerApi, __spreadArray([void 0], __read(args), false)))();
        this.bounceController = new (generated_1.BounceControllerApi.bind.apply(generated_1.BounceControllerApi, __spreadArray([void 0], __read(args), false)))();
    }
    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
     * @summary Create an Inbox (email address)
     * @param {string} [description] Optional description for an inbox.
     * @param {string} [emailAddress] Optional email address including domain you wish inbox to use (eg: test123@mydomain.com). Only supports domains that you have registered and verified with MailSlurp using dashboard or &#x60;createDomain&#x60; method.
     * @param {Date} [expiresAt] Optional expires at timestamp. If your plan supports this feature you can specify when an inbox should expire. If left empty inbox will exist permanently or expire when your plan dictates
     * @param {boolean} [favourite] Is inbox favourited.
     * @param {string} [name] Optional name for an inbox.
     * @param {Array<string>} [tags] Optional tags for an inbox. Can be used for searching and filtering inboxes.
     * @param {boolean} [teamAccess] Optional flag to allow team access to inbox.
     * @param {number} [expiresIn] Optional number of milliseconds to expire inbox after.
     * @param {boolean} [useDomainPool] Optional flag to use the MailSlurp domain pool for domain endings.
     * @param {string} inboxType Optional inbox type HTTP or SMTP
     */
    MailSlurp.prototype.createInbox = function (emailAddress, name, description, expiresAt, favourite, tags, teamAccess, expiresIn, useDomainPool, inboxType) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createInbox', function () {
                        return _this.inboxController.createInbox({
                            description: description,
                            emailAddress: emailAddress,
                            expiresAt: expiresAt,
                            expiresIn: expiresIn,
                            favourite: favourite,
                            inboxType: inboxType
                                ? inboxType === 'HTTP_INBOX'
                                    ? generated_1.CreateInboxInboxTypeEnum.HTTP_INBOX
                                    : generated_1.CreateInboxInboxTypeEnum.SMTP_INBOX
                                : undefined,
                            name: name,
                            tags: tags,
                            useDomainPool: useDomainPool,
                        });
                    })];
            });
        });
    };
    /**
     * Create an inbox using CreateInboxDto options. More convenient that `createInbox` in some cases.
     * @param createInboxOptions
     */
    MailSlurp.prototype.createInboxWithOptions = function (createInboxOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createInbox', function () {
                        return _this.inboxController.createInboxWithOptions({
                            createInboxDto: createInboxOptions,
                        });
                    })];
            });
        });
    };
    MailSlurp.prototype.getImapSmtpAccessDetails = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createInbox', function () {
                        return _this.inboxController.getImapSmtpAccess({ inboxId: inboxId });
                    })];
            });
        });
    };
    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * @summary Delete inbox
     * @param {string} inboxId inboxId
     */
    MailSlurp.prototype.deleteInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteInbox', function () {
                        return _this.inboxController.deleteInbox({ inboxId: inboxId });
                    })];
            });
        });
    };
    /**
     * Deletes all emails
     * @summary Delete all emails in an inbox
     * @param {string} inboxId inboxId
     */
    MailSlurp.prototype.emptyInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('emptyInbox', function () {
                        return _this.commonController.emptyInbox({ inboxId: inboxId });
                    })];
            });
        });
    };
    /**
     * Returns an inbox's properties, including its email address and ID.
     * @summary Get Inbox
     * @param {string} inboxId inboxId
     */
    MailSlurp.prototype.getInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getInbox', function () {
                        return _this.inboxController.getInbox({ inboxId: inboxId });
                    })];
            });
        });
    };
    /**
     * List the inboxes you have created
     * @summary List Inboxes / Email Addresses
     */
    MailSlurp.prototype.getInboxes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getInboxes', function () { return _this.inboxController.getInboxes({}); })];
            });
        });
    };
    /**
     * List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.
     * @summary List Inboxes Paginated
     * @param {boolean} [favourite] Optionally filter results for favourites only
     * @param {number} [page] Optional page index in inbox list pagination
     * @param {string} [search] Optionally filter by search words partial matching ID, tags, name, and email address
     * @param {number} [size] Optional page size in inbox list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [tag] Optionally filter by tag
     */
    MailSlurp.prototype.getAllInboxes = function (page, size, favourite, search, sort, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAllInboxes', function () {
                        return _this.inboxController.getAllInboxes({
                            favourite: favourite,
                            page: page,
                            search: search,
                            size: size,
                            sort: sort
                                ? sort == 'ASC'
                                    ? generated_1.GetAllInboxesSortEnum.ASC
                                    : generated_1.GetAllInboxesSortEnum.DESC
                                : undefined,
                            tag: tag,
                        });
                    })];
            });
        });
    };
    // waitFor methods
    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.
     * @summary Fetch inbox's latest email or if empty wait for an email to arrive
     * @param {string} [inboxId] Id of the inbox we are fetching emails from
     * @param {number} [timeout] Max milliseconds to wait
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    MailSlurp.prototype.waitForLatestEmail = function (inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForLatestEmail', function () {
                        return _this.waitController.waitForLatestEmail({
                            inboxId: inboxId,
                            timeout: timeout,
                            unreadOnly: unreadOnly,
                        });
                    })];
            });
        });
    };
    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * @summary Wait for or fetch the email with a given index in the inbox specified
     * @param {string} [inboxId] Id of the inbox you are fetching emails from
     * @param {number} [index] Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param {number} [timeout] Max milliseconds to wait for the nth email if not already present
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    MailSlurp.prototype.waitForNthEmail = function (inboxId, index, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForNthEmail', function () {
                        return _this.waitController.waitForNthEmail({
                            inboxId: inboxId,
                            index: index,
                            timeout: timeout,
                            unreadOnly: unreadOnly,
                        });
                    })];
            });
        });
    };
    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.
     * @summary Wait or return list of emails that match simple matching patterns
     * @param {MatchOptions} matchOptions matchOptions
     * @param {number} [count] Number of emails to wait for. Must be greater that 1
     * @param {string} [inboxId] Id of the inbox we are fetching emails from
     * @param {number} [timeout] Max milliseconds to wait
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    MailSlurp.prototype.waitForMatchingEmails = function (matchOptions, count, inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForMatchingEmail', function () {
                        return _this.waitController.waitForMatchingEmails({
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
    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * @summary Wait for and return count number of emails
     * @param {number} [count] Number of emails to wait for. Must be greater that 1
     * @param {string} [inboxId] Id of the inbox we are fetching emails from
     * @param {number} [timeout] Max milliseconds to wait
     * @param {boolean} [unreadOnly] Optional filter for unread only
     */
    MailSlurp.prototype.waitForEmailCount = function (count, inboxId, timeout, unreadOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('waitForEmailCount', function () {
                        return _this.waitController.waitForEmailCount({
                            count: count,
                            inboxId: inboxId,
                            timeout: timeout,
                            unreadOnly: unreadOnly,
                        });
                    })];
            });
        });
    };
    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * @summary Delete an email
     * @param {string} emailId emailId
     */
    MailSlurp.prototype.deleteEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('deleteEmail', function () {
                        return _this.emailController.deleteEmail({ emailId: emailId });
                    })];
            });
        });
    };
    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * @summary Get all emails
     * @param {Array<string>} [inboxId] Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param {number} [page] Optional page index in email list pagination
     * @param {number} [size] Optional page size in email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {boolean} [unreadOnly] Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter
     */
    MailSlurp.prototype.getAllEmails = function (page, size, inboxId, sort, unreadOnly, searchFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAllEmails', function () {
                        return _this.emailController.getEmailsPaginated({
                            inboxId: inboxId,
                            page: page,
                            searchFilter: searchFilter,
                            size: size,
                            sort: sort
                                ? sort === 'DESC'
                                    ? generated_1.GetEmailsPaginatedSortEnum.DESC
                                    : generated_1.GetEmailsPaginatedSortEnum.ASC
                                : undefined,
                            unreadOnly: unreadOnly,
                        });
                    })];
            });
        });
    };
    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * @summary Get emails in an Inbox
     * @param {string} inboxId Id of inbox that emails belongs to
     * @param {Object} GetMessagesOptions see `GetMessagesOptions` details
     */
    MailSlurp.prototype.getEmails = function (inboxId, args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getEmails', function () {
                        return _this.inboxController.getEmails({
                            inboxId: inboxId,
                            limit: args.limit,
                            minCount: args.minCount,
                            retryTimeout: args.retryTimeout,
                            since: args.since,
                            size: args.size,
                            sort: args.sort
                                ? args.sort === 'DESC'
                                    ? generated_1.GetEmailsSortEnum.DESC
                                    : generated_1.GetEmailsSortEnum.ASC
                                : undefined,
                        });
                    })];
            });
        });
    };
    /**
     * Returns an EmailDto object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * @summary Get email content
     * @param {string} emailId emailId
     */
    MailSlurp.prototype.getEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getEmail', function () {
                        return _this.emailController.getEmail({ emailId: emailId });
                    })];
            });
        });
    };
    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * @summary Get raw email string
     * @param {string} emailId emailId
     */
    MailSlurp.prototype.getRawEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getRawEmail', function () {
                        return _this.emailController.getRawEmailContents({ emailId: emailId });
                    })];
            });
        });
    };
    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
     * @summary Send Email
     * @param {string} inboxId ID of the inbox you want to send the email from
     * @param {SendEmailOptions} [sendEmailOptions] Options for the email
     */
    MailSlurp.prototype.sendEmail = function (inboxId, sendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('sendEmail', function () {
                        return _this.inboxController.sendEmailAndConfirm({ inboxId: inboxId, sendEmailOptions: sendEmailOptions });
                    })];
            });
        });
    };
    /**
     * Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * @summary Get email attachment bytes
     * @param {string} emailId emailId
     * @param {string} attachmentId attachmentId
     */
    MailSlurp.prototype.downloadAttachment = function (emailId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('downloadAttachment', function () {
                        return _this.emailController.downloadAttachment({ attachmentId: attachmentId, emailId: emailId });
                    })];
            });
        });
    };
    /**
     * Upload an attachment for use in email sending. Attachment contents must be a base64 encoded string.
     * When sending emails with attachments first upload each attachment with this endpoint.
     * Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email.
     * This means that attachments can easily be reused.
     * @summary Upload an attachment for sending
     * @param {UploadAttachmentOptions} uploadOptions uploadOptions
     */
    MailSlurp.prototype.uploadAttachment = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('uploadAttachment', function () {
                        return _this.attachmentController.uploadAttachment({
                            uploadAttachmentOptions: options,
                        });
                    })];
            });
        });
    };
    /**
     * Get attachment MetaData
     *
     * MetaData includes name, size (bytes) and content-type.
     * @summary Get email attachment metadata
     * @param {string} attachmentId attachmentId
     * @param {string} emailId emailId
     */
    MailSlurp.prototype.getAttachmentMetaData = function (attachmentId, emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getAttachmentMetaData', function () {
                        return _this.emailController.getAttachmentMetaData({ attachmentId: attachmentId, emailId: emailId });
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
function wrapException(fn) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, wrapCall('wrapped exception', fn)];
        });
    });
}
exports.wrapException = wrapException;
function wrapResult(fn) {
    return __awaiter(this, void 0, void 0, function () {
        var content, e_2, statusCode, message, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, fn()];
                case 1:
                    content = _b.sent();
                    return [2 /*return*/, {
                            content: content,
                        }];
                case 2:
                    e_2 = _b.sent();
                    statusCode = e_2.status ? e_2.status : 500;
                    if (!e_2.json) return [3 /*break*/, 4];
                    return [4 /*yield*/, e_2.json()];
                case 3:
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = e_2;
                    _b.label = 5;
                case 5:
                    message = _a;
                    return [2 /*return*/, {
                            error: {
                                statusCode: statusCode,
                                message: message,
                            },
                        }];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.wrapResult = wrapResult;
exports.default = MailSlurp;
